#!/usr/bin/env bash
# Converts the WordPress media library export into web-ready assets.
# Everything is emitted at 2x its display size so it stays crisp on
# retina screens, then served as-is (the Next image optimiser is off).
set -euo pipefail

SRC="${1:-./media-library-export}"
OUT="$(cd "$(dirname "$0")/.." && pwd)/public"

mkdir -p "$OUT"/{images/{sectors,leaders,stories,awards,method,centres,workforce,facilities,logos},docs}

# fill WxH — crop to fill the box, centre-weighted
fill () { convert "$SRC/$1" -auto-orient -resize "${3}^" -gravity center -extent "$3" -quality 82 -strip "$OUT/$2"; }
# fit W — scale to width, keep aspect
fit () { convert "$SRC/$1" -auto-orient -resize "$3" -quality 84 -strip "$OUT/$2"; }
# logo — trim whitespace, scale to height, keep alpha
logo () { convert "$SRC/$1" -auto-orient -trim +repage -resize "x$3" -background none -gravity center -extent "x$3" -strip "$OUT/$2"; }

echo "→ brand"
convert "$SRC/2020/04/GTET-logo-330x283-1.png" -auto-orient -trim +repage -resize x96 -strip "$OUT/images/logo-gram-tarang.webp"
convert "$SRC/2020/04/cropped-GTET-logo-220x220-1.png" -auto-orient -resize 512x512 -strip "$OUT/images/logo-mark.png"
convert "$SRC/2020/04/cropped-GTET-logo-220x220-1.png" -auto-orient -resize 180x180 -strip "$OUT/apple-icon.png"
convert "$SRC/2020/04/cropped-GTET-logo-220x220-1.png" -auto-orient -resize 32x32 -strip "$OUT/favicon.ico"

echo "→ hero + home"
fill 2017/03/DSC00393.jpg       images/hero-workshop.webp        1800x820
fill 2017/03/MG_2260.jpg        images/home-training.webp        1200x900
fill 2017/03/IMG_2202.jpg       images/home-classroom.webp       1200x900

echo "→ sectors"
fill 2017/03/gtettatamotors.jpg images/sectors/manufacturing.webp 1400x900
fill 2017/04/Banu-SMO.jpg       images/sectors/apparel-textiles.webp 1400x900
fill 2017/03/2WheelServiceTech.jpg images/sectors/automotive.webp 1400x900
fill 2017/03/MG_2295.jpg        images/sectors/retail-hospitality.webp 1400x900
fill 2017/03/IMG_2227.jpg       images/sectors/healthcare.webp    1400x900
fill 2021/10/Agri-rpl-2.jpeg    images/sectors/agriculture.webp   1400x900

echo "→ leadership"
fill 2020/02/Mukti.png          images/leaders/mukti-mishra.webp        520x520
fill 2020/02/DN.png             images/leaders/dn-rao.webp              520x520
fill 2020/02/Abhinav.png        images/leaders/abhinav-madan.webp       520x520
fill 2023/07/swagatika_bw.jpg   images/leaders/swagatika-mohapatra.webp 520x520
fill 2023/07/partha_bw.jpg      images/leaders/parthasarathi-mohanty.webp 520x520
fill 2023/07/Debasish_bw-1.png  images/leaders/debasish-panda.webp      520x520
fill 2020/02/sadat.jpg          images/leaders/sadat-ali.webp           520x520
fill 2020/02/Aditya.png         images/leaders/aditya-saikia.webp       520x520

echo "→ success stories"
fill 2017/03/Ranjeet.jpg        images/stories/ranjeet-paricha.webp     420x420
fill 2017/03/Bibhu.jpg          images/stories/bibhu-prasad-bachha.webp 420x420
fill 2017/03/Hadibandhu.jpg     images/stories/hadibandhu-badaseth.webp 420x420

echo "→ awards"
i=0
for f in award.png award2.png award3.png award4.png award5.png award6.png; do
  i=$((i+1)); fit "2017/03/$f" "images/awards/award-$i.webp" 760
done

echo "→ method"
fit 2017/03/peda-1.jpg          images/method/teach-me.webp       880
fit 2017/03/peda2.jpg           images/method/show-me.webp        880
fit 2017/03/peda3.jpg           images/method/let-me-practise.webp 880
fit 2017/03/peda4.jpg           images/method/assess-me.webp      880
fit 2017/03/Six_Dimensions.jpg  images/method/six-dimensions.webp 1400

echo "→ centres"
for n in 1 3 4 5 6; do fill "2017/03/c$n.jpg" "images/centres/centre-$n.webp" 700x540; done

echo "→ workforce solutions"
fill 2020/04/Workfoce-Solutions-scaled.jpg images/workforce/recruitment.webp 1400x790
fill 2020/04/StaffingPro-scaled.jpg        images/workforce/staffing.webp    1400x790
fill 2020/04/payroll-scaled.jpg            images/workforce/payroll.webp     1400x790

echo "→ facilities / action learning"
for n in 1 2 3 4 5; do fill "2017/03/mtrtc$n.jpg" "images/facilities/mtrtc-$n.webp" 900x700; done
fill 2017/03/training.jpg       images/facilities/training-floor.webp 900x700
fill 2017/05/ashok-leyland-img.jpg images/facilities/ashok-leyland.webp 1200x880

echo "→ partner logos"
logo 2016/06/ashok-leyland-logo.png       images/logos/ashok-leyland.webp 120
logo 2016/06/tata-logo.png                images/logos/tata-motors.webp 120
logo 2016/06/yamaha-logo.png              images/logos/yamaha.webp 120
logo 2016/06/ccd-logo.png                 images/logos/cafe-coffee-day.webp 120
logo 2016/06/nsdc-logo.png                images/logos/nsdc.webp 120
logo 2016/06/odisha-logo.png              images/logos/odisha.webp 120
logo 2016/06/AP-logo.png                  images/logos/andhra-pradesh.webp 120
logo 2016/06/Chhattisgarh-logo.png        images/logos/chhattisgarh.webp 120
logo 2016/06/jharkhand-government-logo.png images/logos/jharkhand.webp 120
logo 2016/06/india-logo.png               images/logos/msde.webp 120
logo 2017/03/logo_godrej_boyce.png        images/logos/godrej-boyce.webp 120
logo 2017/03/seda-e1490764481897.png      images/logos/seda.webp 120
logo 2017/05/eicher.jpg                   images/logos/volvo-eicher.webp 120
logo 2017/05/hyundai-1.jpg                images/logos/hyundai.webp 120
logo 2017/03/ddu.png                      images/logos/ddu-gky.webp 120
logo 2017/03/CUTM-logo.jpg                images/logos/centurion-university.webp 120
logo 2017/03/OSDA-Logo.jpg                images/logos/osda.webp 120
logo 2020/06/startupOdisha.png            images/logos/startup-odisha.webp 120
logo 2017/03/NSDC-MSDE-logo.png           images/logos/nsdc-msde.webp 120

echo "→ documents"
cp "$SRC/2021/08/WELL-Catalogue-LR.pdf" "$OUT/docs/well-catalogue.pdf"

echo
echo "done — $(find "$OUT/images" "$OUT/docs" -type f | wc -l) files, $(du -sh "$OUT" | cut -f1)"
