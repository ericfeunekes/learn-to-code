"""Exercise the downloadable fixture at its real local HTTP boundary."""

import json
from pathlib import Path
import signal
import socket
import subprocess
import sys
import unittest
from urllib.request import urlopen


FIXTURE = Path(__file__).resolve().parents[1] / "static/labs/track2-module6/server.py"


class BrowserPreconnectionTest(unittest.TestCase):
    def test_live_identity_request_completes_while_another_connection_is_idle(self):
        server = subprocess.Popen(
            [sys.executable, "-u", str(FIXTURE), "--port", "0"],
            stdout=subprocess.PIPE,
            stderr=subprocess.PIPE,
            text=True,
        )
        idle = None
        try:
            ready = server.stdout.readline().strip()
            self.assertTrue(
                ready.startswith("Harbor Log fixture: http://127.0.0.1:"), ready
            )
            address = ready.split()[3]
            port = int(address.rsplit(":", 1)[1])
            # A browser may connect without sending an HTTP request. Keep that
            # socket open throughout both the real request and server shutdown.
            idle = socket.create_connection(("127.0.0.1", port), timeout=2)
            with urlopen(address + "/version", timeout=2) as response:
                self.assertEqual(response.status, 200)
                self.assertEqual(
                    json.load(response),
                    {
                        "version": "0.9",
                        "revision": "c930",
                        "environment": "local-fixture",
                        "export_enabled": False,
                    },
                )
            server.send_signal(signal.SIGINT)
            server.communicate(timeout=5)
            self.assertEqual(server.returncode, 0)
        finally:
            if idle is not None:
                idle.close()
            if server.poll() is None:
                server.terminate()
            server.communicate(timeout=5)


if __name__ == "__main__":
    unittest.main()
