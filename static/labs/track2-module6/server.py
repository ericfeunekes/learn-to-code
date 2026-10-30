"""Harbor Log teaching fixture. Invented data and revision; local use only.

Read the Module 6 lab contract before investigating. This deliberately small
fixture represents a version to assess, not a reference implementation.
No installs, credentials, external services, persistent writes or live data.
"""

import argparse
import json
from http.server import BaseHTTPRequestHandler, HTTPServer
from urllib.parse import parse_qs, urlsplit


VERSION = {
    "version": "0.9",
    "revision": "c930",
    "environment": "local-fixture",
    "export_enabled": False,
}
NOTES = (
    {"id": "N1", "text": "Spill near gate."},
    {"id": "N2", "text": "Light repaired at berth two."},
)


class Handler(BaseHTTPRequestHandler):
    def reply(self, status, body):
        payload = json.dumps(body).encode("utf-8")
        self.send_response(status)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Content-Length", str(len(payload)))
        self.end_headers()
        self.wfile.write(payload)

    def do_GET(self):
        url = urlsplit(self.path)
        if url.path == "/version":
            self.reply(200, VERSION)
        elif url.path == "/api/search":
            query = parse_qs(url.query, keep_blank_values=True).get("q", [""])[0].strip()
            found = [note for note in NOTES if query in note["text"].lower()]
            self.reply(200, {"notes": found, "count": len(found)})
        elif url.path == "/api/export":
            self.reply(403, {"error": "export disabled in this fixture"})
        else:
            self.reply(404, {"error": "unknown fixture route"})

    def do_POST(self):
        self.reply(405, {"error": "fixture accepts GET requests only"})


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--port", type=int, default=0)
    args = parser.parse_args()
    server = HTTPServer(("127.0.0.1", args.port), Handler)
    print(
        f"Harbor Log fixture: http://127.0.0.1:{server.server_port} (Ctrl+C to stop)",
        flush=True,
    )
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        pass
    finally:
        server.server_close()


if __name__ == "__main__":
    main()
