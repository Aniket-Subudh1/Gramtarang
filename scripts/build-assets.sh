#!/usr/bin/env bash
# Converts the WordPress media library export into web-ready assets.
#
# Each mapping below was verified against how gramtarang.org.in actually
# uses the file — not guessed from the filename. Where the source page is
# non-obvious the original URL is noted.
set -euo pipefail

SRC="${1:-./media-library-export}"
OUT="$(cd "$(dirname "$0")/.." && pwd)/public"

mkdir -p "$OUT"/{images/{hero,sectors,leaders,stories,method,pedagogy,facilities,workforce,awards,logos},docs}

fill () { convert "$SRC/$1" -auto-orient -resize "${3}^" -gravity center -extent "$3" -quality 82 -strip "$OUT/$2"; }
fit  () { convert "$SRC/$1" -auto-orient -resize "$3" -quality 86 -strip "$OUT/$2"; }
logo () { convert "$SRC/$1" -auto-orient -trim +repage -resize "x$3" -background none -gravity center -extent "x$3" -strip "$OUT/$2"; }

echo "→ brand  (header logo used site-wide)"
convert "$SRC/2017/04/logo.png" -auto-orient -trim +repage -resize x120 -strip "$OUT/images/logo-gram-tarang.webp"
convert "$SRC/2020/04/cropped-GTET-logo-220x220-1.png" -auto-orient -resize 512x512 -strip "$OUT/images/logo-mark.png"
convert "$SRC/2020/04/cropped-GTET-logo-220x220-1.png" -auto-orient -resize 180x180 -strip "$OUT/apple-icon.png"
convert "$SRC/2020/04/cropped-GTET-logo-220x220-1.png" -auto-orient -resize 32x32 -strip "$OUT/favicon.ico"

echo "→ hero slides  (revslider on the home page, one slide per trade)"
fill 2017/03/Banner-1.jpg  images/hero/intro.webp            1800x820   # "Gram Tarang Employability Training Service"
fill 2017/03/Banner-3.jpg  images/hero/sewing-operator.webp  1800x820   # "Sewing Machine Operator"
fill 2017/03/Banner-2.jpg  images/hero/ashok-leyland.webp    1800x820   # "Ashok Leyland Service Technician"
fill 2017/03/Banner-4.jpg  images/hero/cnc-operator.webp     1800x820   # "CNC Operator"
fill 2017/04/Banu-SMO.jpg  images/hero/bhanu.webp            1800x820   # Bhanu, Khorda → Shahi Exports

echo "→ sectors  (from each sector page + the matching hero slide)"
fill 2017/03/Banner-4.jpg           images/sectors/manufacturing.webp      1400x900
fill 2017/03/Banner-3.jpg           images/sectors/apparel-textiles.webp   1400x900
fill 2017/03/2WheelServiceTech.jpg  images/sectors/automotive.webp         1400x900
fill 2017/03/item-4.jpg             images/sectors/retail-hospitality.webp 1400x900   # CCD brewmaster at work
fill 2016/06/IMG_5819.jpg           images/sectors/logistics.webp          1400x900   # forklift training
fill 2016/06/DSCN6283.jpg           images/mobilisation.webp               1400x900   # village mobilisation
# NOTE: healthcare, BFSI and beauty & wellness have no photograph in the
# media library. Those sector cards render a typographic panel rather than
# borrow an unrelated image.
fill 2021/10/Agri-rpl-2.jpeg        images/sectors/agriculture.webp        1400x900

echo "→ methodology  (/training-methodology-philosophy/)"
fit 2017/03/Picture1-1.jpg  images/method/three-phases.webp      1040   # three phases of learning
fit 2017/03/gtet.jpg        images/method/six-dimensions.webp     960   # six dimensions wheel
fit 2017/03/carrer-1.jpg    images/method/career-pathing.webp     400
fit 2017/03/carrer1-1.jpg   images/method/work-integrated.webp   1300

echo "→ pedagogy  (/trainers-pedagogy/ — 'Theory, practice & production')"
fill 2017/03/peda-1.jpg   images/pedagogy/production-1.webp 870x580
fill 2017/03/peda2-1.jpg  images/pedagogy/production-2.webp 870x580
fill 2017/03/peda3.jpg    images/pedagogy/production-3.webp 870x580
fill 2017/03/peda4-1.jpg  images/pedagogy/production-4.webp 870x580

echo "→ awards  (/awards-recognition/awards/)"
fit 2017/03/Picture1.jpg  images/awards/nsdc-recognition.webp 1200
fit 2017/03/Picture2.jpg  images/awards/ficci-summit.webp      880
fit 2017/03/Picture3.png  images/awards/naac-and-niti.webp     900

echo "→ success stories  (each portrait named on the page)"
fill 2017/03/Ranjeet.jpg     images/stories/ranjeet-paricha.webp      420x420
fill 2017/03/Hadibandhu.jpg  images/stories/hadibandhu-badaseth.webp  420x420
fill 2017/03/Bibhu.jpg       images/stories/bibhu-prasad-bachha.webp  420x420
fill 2017/03/sagar.jpg       images/stories/sagar-naik.webp           420x420
fill 2017/03/c1.jpg          images/stories/pushpanjali-mallick.webp  420x420
fill 2017/03/c3.jpg          images/stories/pritisudha-panda.webp     420x420
fill 2017/03/c4.jpg          images/stories/ajit-mandal.webp          420x420
fill 2017/03/c5.jpg          images/stories/sk-nakir.webp             420x420
fill 2017/03/c6.jpg          images/stories/gurudev-hansdah.webp      420x420

echo "→ leadership  (/leadership-2/)"
fill 2020/02/Mukti.png         images/leaders/mukti-mishra.webp          520x520
fill 2020/02/DN.png            images/leaders/dn-rao.webp                520x520
fill 2020/02/Abhinav.png       images/leaders/abhinav-madan.webp         520x520
fill 2023/07/swagatika_bw.jpg  images/leaders/swagatika-mohapatra.webp   520x520
fill 2023/07/partha_bw.jpg     images/leaders/parthasarathi-mohanty.webp 520x520
fill 2023/07/Debasish_bw-1.png images/leaders/debasish-panda.webp        520x520
fill 2020/02/sadat.jpg         images/leaders/sadat-ali.webp             520x520
fill 2020/02/Aditya.png        images/leaders/aditya-saikia.webp         520x520

echo "→ facilities  (/mtrtc/ and the Ashok Leyland zonal centre)"
for n in 1 2 3 4 5; do fill "2017/03/mtrtc$n.jpg" "images/facilities/mtrtc-$n.webp" 900x700; done
fill 2017/05/ashok-leyland-img.jpg images/facilities/ashok-leyland.webp 1200x880
fill 2017/03/training.jpg          images/facilities/training-floor.webp 900x700

echo "→ workforce solutions  (/workforce-solutions/)"
fill 2020/04/Workfoce-Solutions-scaled.jpg images/workforce/recruitment.webp 1400x790
fill 2020/04/StaffingPro-scaled.jpg        images/workforce/staffing.webp    1400x790
fill 2020/04/payroll-scaled.jpg            images/workforce/payroll.webp     1400x790

echo "→ partner logos  (home page government + industry rows)"
logo 2016/06/odisha-logo.png               images/logos/odisha.webp 120
# NSDC uses the current official mark in public/images/logos/nsdc.webp (not the 2016 WordPress export).
logo 2016/06/india-logo.png                images/logos/msde.webp 120
logo 2016/06/AP-logo.png                   images/logos/andhra-pradesh.webp 120
logo 2016/06/Chhattisgarh-logo.png         images/logos/chhattisgarh.webp 120
logo 2016/06/hplogo.gif                    images/logos/himachal-pradesh.webp 120
logo 2016/06/jharkhand-government-logo.png images/logos/jharkhand.webp 120
logo 2017/03/ddu.png                       images/logos/ddu-gky.webp 120
logo 2016/06/yamaha-logo.png               images/logos/yamaha.webp 120
logo 2016/06/tata-logo.png                 images/logos/tata-motors.webp 120
logo 2016/06/ccd-logo.png                  images/logos/cafe-coffee-day.webp 120
logo 2016/06/ashok-leyland-logo.png        images/logos/ashok-leyland.webp 120
logo 2017/03/logo_godrej_boyce.png         images/logos/godrej-boyce.webp 120
logo 2017/03/seda-e1490764481897.png       images/logos/seda.webp 120
logo 2017/05/eicher.jpg                    images/logos/volvo-eicher.webp 120
logo 2017/05/hyundai-1.jpg                 images/logos/hyundai.webp 120
logo 2017/03/CUTM-logo.jpg                 images/logos/centurion-university.webp 120

echo "→ documents"
cp "$SRC/2021/08/WELL-Catalogue-LR.pdf" "$OUT/docs/well-catalogue.pdf"

echo
echo "done — $(find "$OUT/images" -type f | wc -l) images, $(du -sh "$OUT/images" | cut -f1)"
