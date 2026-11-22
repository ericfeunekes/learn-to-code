"""Fictional, loopback-only teaching service; search has a deliberate case defect."""

import argparse
import json
import os
import sys
from datetime import datetime, timezone
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from threading import Lock
from urllib.parse import parse_qs, urlsplit


VERSION = "module3.1"
WORKSHOPS = [
    {"id": "watercolour", "title": "watercolour basics"},
    {"id": "wood", "title": "wood carving"},
]
EVENT_LOCK = Lock()


def event(**fields):
    with EVENT_LOCK:
        print(
            json.dumps({"time": datetime.now(timezone.utc).isoformat(), **fields}),
            file=sys.stderr,
            flush=True,
        )


class WorkshopServer(ThreadingHTTPServer):
    # Idle browser connections must not prevent the owned process from stopping.
    daemon_threads = True

    def __init__(self, port, catalog_state):
        super().__init__(("127.0.0.1", port), WorkshopHandler)
        self.catalog_state = catalog_state
        self.request_number = 0
        self.request_lock = Lock()


class WorkshopHandler(BaseHTTPRequestHandler):
    def log_message(self, *_args):
        # Use only our structured event below, without headers or raw query text.
        pass

    def reply(self, status, body, route):
        with self.server.request_lock:
            self.server.request_number += 1
            request_id = f"m3-{self.server.request_number}"
        encoded = json.dumps({**body, "request_id": request_id}).encode()
        self.send_response(status)
        self.send_header("Content-Type", "application/json")
        self.send_header("Content-Length", str(len(encoded)))
        self.send_header("Cache-Control", "no-store")
        if status == 405:
            self.send_header("Allow", "GET")
        self.end_headers()
        event(event="request", request_id=request_id, route=route, status=status)
        if self.command != "HEAD":
            self.wfile.write(encoded)

    def do_GET(self):
        parsed = urlsplit(self.path)
        if parsed.path == "/about":
            self.reply(
                200,
                {
                    "environment": "local-fixture",
                    "version": VERSION,
                    "catalog_state": self.server.catalog_state,
                    "data": "fictional-in-memory",
                },
                "about",
            )
        elif parsed.path == "/health":
            ready = self.server.catalog_state == "ready"
            self.reply(200 if ready else 503, {"ready": ready}, "health")
        elif parsed.path == "/api/workshops":
            if self.server.catalog_state != "ready":
                self.reply(503, {"error": "catalog_unavailable"}, "workshops")
                return
            query = parse_qs(parsed.query, keep_blank_values=True).get("q", [""])[0]
            # Intentional teaching defect: the requirement ignores capitalization.
            matches = [row for row in WORKSHOPS if query in row["title"]]
            self.reply(200, {"workshops": matches}, "workshops")
        else:
            self.reply(404, {"error": "not_found"}, "unknown")

    def refuse_method(self):
        self.reply(405, {"error": "method_not_allowed"}, "refused")

    do_POST = refuse_method
    do_PUT = refuse_method
    do_PATCH = refuse_method
    do_DELETE = refuse_method
    do_HEAD = refuse_method
    do_OPTIONS = refuse_method


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--port", type=int, default=0)
    parser.add_argument("--catalog-state", choices=("ready", "unavailable"), default="ready")
    args = parser.parse_args()
    with WorkshopServer(args.port, args.catalog_state) as server:
        event(
            event="started",
            url=f"http://127.0.0.1:{server.server_port}",
            version=VERSION,
            environment="local-fixture",
            catalog_state=args.catalog_state,
            pid=os.getpid(),
        )
        try:
            server.serve_forever()
        except KeyboardInterrupt:
            pass
    event(event="stopped")


if __name__ == "__main__":
    main()
