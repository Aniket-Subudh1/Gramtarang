#!/usr/bin/env python3
"""Compose Open Graph cards from the real Gram Tarang mark.

The mark is a tilted badge, so its bounding box is much wider than the
type beside it. This script keeps a hard two-column grid: logo on the
left, copy on the right, with a fixed gap so they never overlap.
"""

from pathlib import Path
from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parents[1]
PUBLIC = ROOT / "public"
APP = ROOT / "app"
FONT = str(PUBLIC / "fonts/Geo231Rm.ttf")

W, H = 1200, 630
PAD = 48
GAP = 72
LOGO_MAX_W = 320
LOGO_MAX_H = 280

INDIGO = (20, 32, 74)
INDIGO_DEEP = (12, 18, 42)
WHITE = (255, 255, 255)
MIST = (184, 198, 226)
TURMERIC = (229, 168, 60)
MADDER = (178, 58, 43)

SECTORS = [
    ("manufacturing", "MFG", "Manufacturing",
     "Machining, fitting and electrical trades taught on production machines, not mock-ups."),
    ("apparel-textiles", "APP", "Apparel & textiles",
     "A three-month residential route into the garment export industry, with an employment assurance."),
    ("automotive", "AUT", "Automotive",
     "Service technicians for dealerships and fleets, built with the manufacturers themselves."),
    ("retail-hospitality", "RET", "Retail & hospitality",
     "Café and quick-service roles, including the brewmaster line built with Café Coffee Day."),
    ("healthcare", "HLT", "Healthcare",
     "Diagnostic and theatre technician roles for district hospitals and labs."),
    ("agriculture", "AGR", "Agriculture",
     "Recognition of prior learning for farmers already doing the work, plus allied trades."),
    ("bfsi", "BFS", "Banking & financial services",
     "Sales and service roles for banks, insurers and micro-finance lenders."),
    ("beauty-wellness", "BWL", "Beauty & wellness",
     "Our newest vertical, opened in 2024-25, and almost entirely taken up by women."),
]


def load_logo() -> Image.Image:
    mark = Image.open(PUBLIC / "images/logo-mark.png").convert("RGBA")
    mark = mark.crop(mark.getbbox())
    scale = min(LOGO_MAX_W / mark.width, LOGO_MAX_H / mark.height)
    size = (round(mark.width * scale), round(mark.height * scale))
    return mark.resize(size, Image.Resampling.LANCZOS)


def wash() -> Image.Image:
    canvas = Image.new("RGB", (W, H), INDIGO)
    px = canvas.load()
    for x in range(W):
        t = x / (W - 1)
        for y in range(H):
            v = 1 - (y / (H - 1)) * 0.08
            r = int((INDIGO_DEEP[0] * (1 - t * 0.25) + INDIGO[0] * (0.75 + t * 0.25)) * v)
            g = int((INDIGO_DEEP[1] * (1 - t * 0.25) + INDIGO[1] * (0.75 + t * 0.25)) * v)
            b = int((INDIGO_DEEP[2] * (1 - t * 0.15) + 88) * v)
            px[x, y] = (r, g, min(255, b))
    return canvas


def wrap(draw: ImageDraw.ImageDraw, text: str, font: ImageFont.FreeTypeFont, max_w: int, limit: int = 4):
    words = text.split()
    lines, cur = [], ""
    for word in words:
        trial = f"{cur} {word}".strip()
        if draw.textlength(trial, font=font) <= max_w:
            cur = trial
        else:
            if cur:
                lines.append(cur)
            cur = word
    if cur:
        lines.append(cur)
    return lines[:limit]


def layout_text_box(logo: Image.Image) -> tuple[int, int]:
    text_x = PAD + logo.width + GAP
    text_w = W - text_x - PAD
    return text_x, text_w


def compose(logo: Image.Image, draw_copy) -> Image.Image:
    canvas = wash()
    canvas.paste(logo, (PAD, (H - logo.height) // 2), logo)
    draw = ImageDraw.Draw(canvas)
    text_x, text_w = layout_text_box(logo)
    draw_copy(draw, text_x, text_w)
    draw.rectangle([0, H - 8, W, H], fill=MADDER)
    return canvas


def save(image: Image.Image, path: Path) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    image.save(path, "PNG", optimize=True)
    print(f"{path.relative_to(ROOT)}  {image.size[0]}x{image.size[1]}")


def main() -> None:
    logo = load_logo()

    code_f = ImageFont.truetype(FONT, 20)
    title_f = ImageFont.truetype(FONT, 56)
    lede_f = ImageFont.truetype(FONT, 26)
    small_f = ImageFont.truetype(FONT, 20)
    kicker_f = ImageFont.truetype(FONT, 22)

    def home_copy(draw, x, max_w):
        y = 108
        for line in wrap(draw, "GRAM TARANG", title_f, max_w, 2):
            draw.text((x, y), line, font=title_f, fill=WHITE)
            y += 64
        draw.rectangle([x, y + 4, x + 64, y + 8], fill=TURMERIC)
        y += 28
        draw.text((x, y), "Employability Training Services", font=kicker_f, fill=MIST)
        y += 52
        for line in wrap(draw, "Skills that hold where jobs don't reach.", lede_f, max_w, 3):
            draw.text((x, y), line, font=lede_f, fill=WHITE)
            y += 36
        draw.text((x, 478), "Vocational skill training  ·  Placement", font=small_f, fill=MIST)
        draw.text((x, 512), "Odisha  ·  since 2006", font=small_f, fill=TURMERIC)

    home = compose(logo, home_copy)
    save(home, PUBLIC / "og.png")
    save(home, APP / "opengraph-image.png")
    save(home, APP / "twitter-image.png")

    for slug, code, name, blurb in SECTORS:
        def sector_copy(draw, x, max_w, code=code, name=name, blurb=blurb):
            y = 108
            draw.text((x, y), code, font=code_f, fill=TURMERIC)
            y = 148
            title_lines = wrap(draw, name, title_f, max_w, 3)
            for line in title_lines:
                draw.text((x, y), line, font=title_f, fill=WHITE)
                y += 62
            draw.rectangle([x, y + 2, x + 64, y + 6], fill=TURMERIC)
            y += 28
            for line in wrap(draw, blurb, lede_f, max_w, 4):
                draw.text((x, y), line, font=lede_f, fill=MIST)
                y += 34
            draw.text((x, 512), "Gram Tarang  ·  skill training since 2006", font=small_f, fill=TURMERIC)

        save(compose(logo, sector_copy), PUBLIC / "og" / "sectors" / f"{slug}.png")


if __name__ == "__main__":
    main()
