#!/usr/bin/env python3
from __future__ import annotations

import time
from pathlib import Path

from watchfiles import watch

import build

WATCH_DIRS = [
    Path(__file__).resolve().parent / "src" / "pages",
    Path(__file__).resolve().parent / "src" / "templates",
]


def main() -> None:
    print("Watching Jinja templates... (Ctrl+C to stop)")
    # Initial build (no clean to keep assets in dist/assets)
    build.build(clean=False)

    for changes in watch(*[str(p) for p in WATCH_DIRS]):
        # Debounce tiny bursts
        time.sleep(0.05)
        print("\nChange detected:")
        for change, path in changes:
            print(f" - {change.name}: {path}")
        build.build(clean=False)


if __name__ == "__main__":
    main()
