"""Check real generated HTML routes, fragment targets and local assets."""

import os
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import unquote, urljoin, urlsplit


class Page(HTMLParser):
    def __init__(self, content):
        super().__init__(convert_charrefs=True)
        self.ids = set()
        self.references = []
        self.feed(content)

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if "id" in attrs:
            self.ids.add(attrs["id"])
        for attr in ("href", "src"):
            if attr in attrs:
                self.references.append((tag, attrs[attr]))


root = Path("build").resolve()
base = os.environ.get("BASE_URL", "/learn-to-code/")
assert root.is_dir(), "Run npm run build first"
assert base.startswith("/") and base.endswith("/"), "Invalid BASE_URL"
pages = {p: Page(p.read_text()) for p in root.rglob("*.html")}
assert pages, "No generated HTML found"
failures = []
checked = 0
for path, page in pages.items():
    relative = path.relative_to(root).as_posix()
    route = base + (relative[:-10] if relative.endswith("index.html") else relative)
    for tag, reference in page.references:
        parts = urlsplit(reference)
        if parts.scheme or parts.netloc:
            continue
        target = urlsplit(urljoin(route, reference))
        pathname = unquote(target.path)
        if not pathname.startswith(base):
            failures.append(f"{relative}: escapes BASE_URL: {reference}")
            continue
        dest = root / pathname[len(base):]
        if dest.is_dir():
            dest /= "index.html"
        if not dest.is_file():
            failures.append(f"{relative}: missing target: {reference}")
        elif target.fragment and tag == "a" and dest in pages:
            fragment = unquote(target.fragment)
            if not fragment.startswith(":~:text=") and fragment not in pages[dest].ids:
                failures.append(f"{relative}: missing fragment: {reference}")
        checked += 1

assert not failures, "\n".join(failures)
print(f"PASS: {len(pages)} generated HTML files, {checked} local links/assets/fragments at {base}")
