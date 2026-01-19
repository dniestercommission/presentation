#!/usr/bin/env python3
from __future__ import annotations

import argparse
import shutil
from pathlib import Path

from jinja2 import Environment, FileSystemLoader, select_autoescape

ROOT = Path(__file__).resolve().parent

SRC_DIR = ROOT / "src"
TEMPLATES_DIR = SRC_DIR / "templates"
PAGES_DIR = SRC_DIR / "pages"
STATIC_DIR = SRC_DIR / "static"

DIST_DIR = ROOT / "dist"

# One environment for the whole build:
# - pages are loaded from src/pages
# - base/partials are loaded from src/templates
env = Environment(
    loader=FileSystemLoader([str(PAGES_DIR), str(TEMPLATES_DIR)]),
    autoescape=select_autoescape(["html", "xml"]),
)


def copy_tree(src: Path, dst: Path) -> None:
    """Copy a folder recursively, preserving structure and timestamps."""
    if not src.exists():
        return
    dst.mkdir(parents=True, exist_ok=True)
    for item in src.rglob("*"):
        rel = item.relative_to(src)
        target = dst / rel
        if item.is_dir():
            target.mkdir(parents=True, exist_ok=True)
        else:
            target.parent.mkdir(parents=True, exist_ok=True)
            shutil.copy2(item, target)


def render_pages() -> None:
    """Render all *.jinja files from src/pages into dist/*.html."""
    DIST_DIR.mkdir(parents=True, exist_ok=True)

    pages = sorted(PAGES_DIR.glob("*.jinja"))
    if not pages:
        print(f"No pages found in: {PAGES_DIR}")
        return

    for page in pages:
        template = env.get_template(page.name)  # page name is resolved via loader
        out_name = f"{page.stem}.html"
        out_path = DIST_DIR / out_name
        out_path.write_text(template.render(), encoding="utf-8")
        print(f"Rendered: {out_path.relative_to(ROOT)}")


def build(clean: bool = True) -> None:
    if clean and DIST_DIR.exists():
        shutil.rmtree(DIST_DIR)
    DIST_DIR.mkdir(parents=True, exist_ok=True)

    # 1) Render HTML pages
    render_pages()

    # 2) Copy static (optional)
    # Put your images into src/static/images to have them copied automatically.
    copy_tree(STATIC_DIR, DIST_DIR)


def main() -> None:
    ap = argparse.ArgumentParser()
    ap.add_argument("--no-clean", action="store_true", help="Do not wipe dist/ before building")
    args = ap.parse_args()
    build(clean=not args.no_clean)


if __name__ == "__main__":
    main()
