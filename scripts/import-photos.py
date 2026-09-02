#!/usr/bin/env python3
"""Convert the new website photographs into web-ready WebP files.

Sources live in public/Gram Tarang New Website Photos/. Destinations go
under public/photos/ with URL-safe names. Dimensions are printed as
TypeScript so lib/assets.ts can be updated without guessing.
"""

from __future__ import annotations

from pathlib import Path

from PIL import Image, ImageOps

ROOT = Path(__file__).resolve().parents[1]
SRC = ROOT / "public" / "Gram Tarang New Website Photos"
OUT = ROOT / "public" / "photos"

Image.MAX_IMAGE_PIXELS = 80_000_000

# dest relative to public/photos  →  (source relative to SRC, max long edge, alt)
JOBS: list[tuple[str, str, int, str]] = [
    # Hero / banners
    (
        "hero/workshop.webp",
        "Manufacturing/DSC_5905.JPG",
        1800,
        "Trainees in Centurion ITI uniforms working on a live electrical circuit",
    ),
    (
        "hero/cnc.webp",
        "Manufacturing/DSC_5514.JPG",
        1800,
        "A CNC mill cutting metal, with a Renishaw probe on the machine bed",
    ),
    (
        "hero/sewing.webp",
        "Apparel & Textiles/DSC_9394.jpg",
        1800,
        "A trainee sewing on a JUKI industrial machine in the apparel centre",
    ),
    (
        "hero/ashok-leyland.webp",
        "Automotive/ASHOK/ASHOK LEYLAND.jpg",
        1800,
        "Cutaway commercial-vehicle engines in the Ashok Leyland zonal training centre",
    ),
    # Sectors
    (
        "sectors/manufacturing.webp",
        "Manufacturing/5 Axis (2).jpg",
        1600,
        "A Jyoti five-axis machining centre on the Mini Tool Room floor",
    ),
    (
        "sectors/apparel-textiles.webp",
        "Apparel & Textiles/MRC_0430.JPG",
        1600,
        "Trainees spreading fabric on the cutting table in the apparel centre",
    ),
    (
        "sectors/automotive.webp",
        "Automotive/YAMAHA (/MRC_2972.JPG",
        1600,
        "Yamaha service technicians training on motorcycle engines",
    ),
    (
        "sectors/retail-hospitality.webp",
        "Retail & Hospitality/FoodRetail.JPG",
        1600,
        "A brewmaster trainee steaming milk at a café training bar",
    ),
    (
        "sectors/healthcare.webp",
        "Healthcare/Emergency Medicine Technology Lab/DSC_2975.JPG",
        1600,
        "The emergency medicine technology lab, with hospital beds and training mannequins",
    ),
    (
        "sectors/agriculture.webp",
        "Agriculture/Practical Gr1 2026-04-29 at 4.11.34 PM.jpeg",
        1600,
        "A practical agriculture assessment with trainees in the field",
    ),
    (
        "sectors/beauty-wellness.webp",
        "Beauty & Wellness/DSC09529.JPG",
        1600,
        "Trainees in a yoga and wellness session",
    ),
    # Facilities / production
    (
        "facilities/training-floor.webp",
        "Manufacturing/Wood Engineering Production Centre/MRC_2321.JPG",
        1600,
        "An instructor and trainee operating a Felder panel saw in the wood engineering centre",
    ),
    (
        "facilities/ashok-leyland.webp",
        "Automotive/ASHOK/ASHOK LEYLAND.jpg",
        1600,
        "The Ashok Leyland zonal training centre at Bhubaneswar",
    ),
    (
        "facilities/mtrtc-1.webp",
        "Manufacturing/5 Axis (2).jpg",
        1400,
        "Five-axis machining centre in the Mini Tool Room",
    ),
    (
        "facilities/mtrtc-2.webp",
        "Manufacturing/5 Axis (18).JPG",
        1400,
        "Precision machining on the Mini Tool Room floor",
    ),
    (
        "facilities/mtrtc-3.webp",
        "Manufacturing/Transformer NABL/NIKON D7501154.JPG",
        1400,
        "Transformer testing in the NABL-accredited laboratory",
    ),
    (
        "facilities/mtrtc-4.webp",
        "Manufacturing/Printing Lab/_MRC7705.JPG",
        1400,
        "The printing laboratory production floor",
    ),
    (
        "facilities/mtrtc-5.webp",
        "Manufacturing/DSC_5514.JPG",
        1400,
        "Live CNC cutting in the tool room",
    ),
    (
        "facilities/skyy.webp",
        "Automotive/Skyy/DSC_1660.jpg",
        1600,
        "E-rickshaw assembly at Sky Rider Auto, a live production unit",
    ),
    (
        "facilities/apparel-line.webp",
        "Apparel & Textiles/DSC_9394.jpg",
        1600,
        "A live garment production line run by trainees",
    ),
    # Pedagogy / production output
    (
        "pedagogy/production-1.webp",
        "Manufacturing/5 Axis (3).jpg",
        1200,
        "A five-axis machining centre used in production training",
    ),
    (
        "pedagogy/production-2.webp",
        "Manufacturing/Wood Engineering Production Centre/MRC_2321.JPG",
        1200,
        "Furniture production on an industrial panel saw",
    ),
    (
        "pedagogy/production-3.webp",
        "Manufacturing/Printing Lab/DSC06832.JPG",
        1200,
        "A printed mug produced in the printing laboratory",
    ),
    (
        "pedagogy/production-4.webp",
        "Apparel & Textiles/MRC_5582.JPG",
        1200,
        "Finished garments packed on the apparel production line",
    ),
    # Workforce
    (
        "workforce/recruitment.webp",
        "Automotive/YAMAHA (/MRC_2972.JPG",
        1400,
        "Technicians trained and ready for dealership deployment",
    ),
    (
        "workforce/staffing.webp",
        "Apparel & Textiles/MRC_0430.JPG",
        1400,
        "Apparel trainees on a live production floor",
    ),
    (
        "workforce/payroll.webp",
        "Manufacturing/DSC_5905.JPG",
        1400,
        "Electrical trainees on the workshop floor",
    ),
    # Story atmosphere
    (
        "stories/cafe-counter.webp",
        "Retail & Hospitality/FoodRetail.JPG",
        1400,
        "A brewmaster at work on a café espresso bar",
    ),
    # Sector galleries
    (
        "gallery/manufacturing-1.webp",
        "Manufacturing/5 Axis (2).jpg",
        1400,
        "Five-axis CNC machining centre",
    ),
    (
        "gallery/manufacturing-2.webp",
        "Manufacturing/DSC_5514.JPG",
        1400,
        "CNC mill in a cutting cycle",
    ),
    (
        "gallery/manufacturing-3.webp",
        "Manufacturing/DSC_5905.JPG",
        1400,
        "Electrical trainees at a live circuit board",
    ),
    (
        "gallery/manufacturing-4.webp",
        "Manufacturing/Wood Engineering Production Centre/MRC_2321.JPG",
        1400,
        "Wood engineering production centre",
    ),
    (
        "gallery/manufacturing-5.webp",
        "Manufacturing/Transformer NABL/NIKON D7501154.JPG",
        1400,
        "NABL transformer laboratory",
    ),
    (
        "gallery/manufacturing-6.webp",
        "Manufacturing/Printing Lab/_MRC7705.JPG",
        1400,
        "Printing laboratory",
    ),
    (
        "gallery/apparel-1.webp",
        "Apparel & Textiles/DSC_9394.jpg",
        1400,
        "Sewing machine operator on a JUKI industrial machine",
    ),
    (
        "gallery/apparel-2.webp",
        "Apparel & Textiles/MRC_0430.JPG",
        1400,
        "Cutting table in the apparel centre",
    ),
    (
        "gallery/apparel-3.webp",
        "Apparel & Textiles/MRC_5582.JPG",
        1400,
        "Finished garments from the production line",
    ),
    (
        "gallery/apparel-4.webp",
        "Apparel & Textiles/DSC_6650.JPG",
        1400,
        "The Advance Centre of Excellence for Apparel & Textile",
    ),
    (
        "gallery/automotive-1.webp",
        "Automotive/YAMAHA (/MRC_2972.JPG",
        1400,
        "Yamaha two-wheeler service lab",
    ),
    (
        "gallery/automotive-2.webp",
        "Automotive/ASHOK/ASHOK LEYLAND.jpg",
        1400,
        "Ashok Leyland commercial vehicle training centre",
    ),
    (
        "gallery/automotive-3.webp",
        "Automotive/Skyy/DSC_1660.jpg",
        1400,
        "Sky Rider Auto e-rickshaw production",
    ),
    (
        "gallery/automotive-4.webp",
        "Automotive/HYUNDAI/HYUNDAI.jpg",
        1400,
        "Hyundai four-wheel service laboratory",
    ),
    (
        "gallery/automotive-5.webp",
        "Automotive/EICHER/EICHER.jpg",
        1400,
        "Volvo Eicher commercial vehicle training",
    ),
    (
        "gallery/healthcare-1.webp",
        "Healthcare/Emergency Medicine Technology Lab/DSC_2975.JPG",
        1400,
        "Emergency medicine technology laboratory",
    ),
    (
        "gallery/healthcare-2.webp",
        "Healthcare/Physiotherapy Lab/DSC09467.JPG",
        1400,
        "Physiotherapy laboratory with suspension therapy equipment",
    ),
    (
        "gallery/healthcare-3.webp",
        "Healthcare/Emergency Medicine Technology Lab/DSC_2980.JPG",
        1400,
        "Clinical skills practice in the healthcare lab",
    ),
    (
        "gallery/healthcare-4.webp",
        "Healthcare/Physiotherapy Lab/DSC09472.JPG",
        1400,
        "Rehabilitation equipment in the physiotherapy lab",
    ),
    (
        "gallery/agriculture-1.webp",
        "Agriculture/Practical Gr1 2026-04-29 at 4.11.34 PM.jpeg",
        1400,
        "Agriculture practical session",
    ),
    (
        "gallery/agriculture-2.webp",
        "Agriculture/Practical Gr2 2026-04-29 at 4.11.33 PM.jpeg",
        1400,
        "Field practical with agriculture trainees",
    ),
    (
        "gallery/agriculture-3.webp",
        "Agriculture/VM practical Group Photo (1).jpeg",
        1400,
        "Village mobilisation practical group",
    ),
    (
        "gallery/agriculture-4.webp",
        "Agriculture/DSC_6510.JPG",
        1400,
        "Compost preparation in an agriculture practical",
    ),
    (
        "gallery/beauty-1.webp",
        "Beauty & Wellness/DSC09529.JPG",
        1400,
        "Yoga and wellness training session",
    ),
    (
        "gallery/beauty-2.webp",
        "Beauty & Wellness/DSC00290.JPG",
        1400,
        "A campus wellness session at Centurion University",
    ),
    (
        "gallery/beauty-3.webp",
        "Beauty & Wellness/DSC09567.JPG",
        1400,
        "Group yoga practice in the wellness hall",
    ),
    (
        "gallery/beauty-4.webp",
        "Beauty & Wellness/_DSC8079.JPG",
        1400,
        "Beauty and wellness training",
    ),
    (
        "gallery/retail-1.webp",
        "Retail & Hospitality/FoodRetail.JPG",
        1400,
        "Café brewmaster training",
    ),
]


def convert(src: Path, dest: Path, max_edge: int) -> tuple[int, int]:
    dest.parent.mkdir(parents=True, exist_ok=True)
    with Image.open(src) as im:
        im = ImageOps.exif_transpose(im)
        if im.mode not in ("RGB", "L"):
            im = im.convert("RGB")
        elif im.mode == "L":
            im = im.convert("RGB")
        w, h = im.size
        scale = min(1.0, max_edge / max(w, h))
        if scale < 1:
            im = im.resize((round(w * scale), round(h * scale)), Image.Resampling.LANCZOS)
        im.save(dest, "WEBP", quality=80, method=4)
        return im.size


def main() -> None:
    missing = []
    rows: list[tuple[str, int, int, str]] = []
    for dest_rel, src_rel, max_edge, alt in JOBS:
        src = SRC / src_rel
        dest = OUT / dest_rel
        if not src.exists():
            missing.append(src_rel)
            print(f"MISSING  {src_rel}")
            continue
        w, h = convert(src, dest, max_edge)
        kb = dest.stat().st_size // 1024
        print(f"{w:>5}×{h:<5}  {kb:>5} KB  /photos/{dest_rel}")
        rows.append((f"/photos/{dest_rel}", w, h, alt))

    if missing:
        raise SystemExit(f"{len(missing)} source files missing")

    print("\n--- TypeScript snippets ---\n")
    for src, w, h, alt in rows:
        print(f'  {{ src: "{src}", w: {w}, h: {h}, alt: "{alt}" }},')


if __name__ == "__main__":
    main()
