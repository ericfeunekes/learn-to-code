"""Real local HTTP and process-boundary checks, including the intentional defect.

These are author checks of the teaching fixture, not proof of learner mastery or
of the directory meeting its search requirement. No external service is used.
"""

import json
import selectors
import signal
import socket
import subprocess
import sys
import unittest
from concurrent.futures import ThreadPoolExecutor
from pathlib import Path
from urllib.error import HTTPError
from urllib.parse import urlsplit
from urllib.request import ProxyHandler, Request, build_opener


SERVICE = Path(__file__).with_name("module3_server.py")
CLIENT = build_opener(ProxyHandler({}))


class FixtureBoundaryTest(unittest.TestCase):
    def start_service(self, state="ready"):
        process = subprocess.Popen(
            [sys.executable, "-B", str(SERVICE), "--port", "0", "--catalog-state", state],
            stdout=subprocess.PIPE,
            stderr=subprocess.PIPE,
            text=True,
        )
        self.addCleanup(self.stop_service, process)
        with selectors.DefaultSelector() as selector:
            selector.register(process.stderr, selectors.EVENT_READ)
            self.assertTrue(selector.select(timeout=5), "No startup event within 5s")
        line = process.stderr.readline()
        try:
            first = json.loads(line)
        except json.JSONDecodeError:
            _out, remaining = process.communicate(timeout=5)
            self.fail(f"Service did not start: {line}{remaining}")
        self.assertEqual(first["event"], "started")
        self.assertEqual(first["environment"], "local-fixture")
        self.assertEqual(first["version"], "module3.1")
        self.assertEqual(first["catalog_state"], state)
        self.assertTrue(first["url"].startswith("http://127.0.0.1:"))
        return process, first["url"]

    @staticmethod
    def stop_service(process):
        if process.poll() is None:
            process.send_signal(signal.SIGINT)
            try:
                process.wait(timeout=5)
            except subprocess.TimeoutExpired:
                process.kill()
                process.wait(timeout=5)
        for stream in (process.stdout, process.stderr):
            if not stream.closed:
                stream.close()

    def request(self, base, path, method="GET"):
        try:
            response = CLIENT.open(Request(base + path, method=method), timeout=3)
        except HTTPError as error:
            response = error
        with response:
            return response.status, json.load(response)

    def test_ready_search_diagnostic_link_and_clean_stop(self):
        process, base = self.start_service()
        status, about = self.request(base, "/about")
        self.assertEqual((status, about["data"]), (200, "fictional-in-memory"))
        self.assertEqual(self.request(base, "/health")[1]["ready"], True)
        self.assertEqual(len(self.request(base, "/api/workshops")[1]["workshops"]), 2)
        lower = self.request(base, "/api/workshops?q=water")
        upper = self.request(base, "/api/workshops?q=WATER")
        repeat = self.request(base, "/api/workshops?q=WATER")
        self.assertEqual((lower[0], upper[0], repeat[0]), (200, 200, 200))
        self.assertEqual(lower[1]["workshops"][0]["title"], "watercolour basics")
        # Preserve the known mismatch for the learner to investigate.
        self.assertEqual(upper[1]["workshops"], [])
        self.assertEqual(repeat[1]["workshops"], [])
        self.assertEqual(self.request(base, "/api/workshops?q=zzzz")[1]["workshops"], [])
        self.assertEqual(self.request(base, "/unknown")[0], 404)
        process.send_signal(signal.SIGINT)
        _out, logs = process.communicate(timeout=5)
        self.assertEqual(process.returncode, 0)
        events = [json.loads(line) for line in logs.splitlines()]
        self.assertEqual(events[-1]["event"], "stopped")
        record = next(row for row in events if row.get("request_id") == upper[1]["request_id"])
        self.assertEqual((record["route"], record["status"]), ("workshops", 200))
        self.assertNotIn("WATER", logs)

    def test_unavailable_is_not_successful_empty_search(self):
        _process, base = self.start_service("unavailable")
        self.assertEqual(self.request(base, "/about")[1]["catalog_state"], "unavailable")
        self.assertEqual(self.request(base, "/health")[0], 503)
        self.assertEqual(self.request(base, "/health")[1]["ready"], False)
        status, result = self.request(base, "/api/workshops?q=water")
        self.assertEqual((status, result["error"]), (503, "catalog_unavailable"))
        self.assertNotIn("workshops", result)

    def test_idle_connection_does_not_block_requests_or_shutdown(self):
        process, base = self.start_service()
        address = ("127.0.0.1", urlsplit(base).port)
        with (
            socket.create_connection(address, timeout=3) as idle,
            socket.create_connection(address, timeout=3) as partial,
        ):
            # Keep both a silent preconnection and incomplete request open.
            partial.sendall(b"GET /about HTTP/1.1\r\n")
            status, about = self.request(base, "/about")
            self.assertEqual((status, about["version"]), (200, "module3.1"))
            with ThreadPoolExecutor(max_workers=4) as clients:
                results = list(clients.map(lambda _: self.request(base, "/about"), range(4)))
            self.assertTrue(all(status == 200 for status, _body in results))
            ids = {body["request_id"] for _status, body in results}
            ids.add(about["request_id"])
            self.assertEqual(len(ids), 5)
            process.send_signal(signal.SIGINT)
            _out, logs = process.communicate(timeout=5)
            self.assertEqual(process.returncode, 0)
            events = [json.loads(line) for line in logs.splitlines()]
            self.assertEqual(events[-1]["event"], "stopped")
            requests = [row for row in events if row["event"] == "request"]
            self.assertEqual({row["request_id"] for row in requests}, ids)
            self.assertEqual(len(requests), 5)
            # Both idle clients deliberately remain open when the process exits.
            with self.assertRaises(ConnectionRefusedError):
                with socket.create_connection(address, timeout=1):
                    pass

    def test_mutations_are_refused_and_data_stays_the_same(self):
        _process, base = self.start_service()
        before = self.request(base, "/api/workshops")[1]["workshops"]
        for method in ("POST", "PUT", "PATCH", "DELETE"):
            self.assertEqual(self.request(base, "/api/workshops", method)[0], 405)
        after = self.request(base, "/api/workshops")[1]["workshops"]
        self.assertEqual(before, after)


if __name__ == "__main__":
    unittest.main()
