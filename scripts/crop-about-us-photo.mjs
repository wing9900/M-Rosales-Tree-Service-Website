import sharp from "sharp";

const inputPath = process.argv[2] ?? "public/assets/gallery/about-us-crew-source.png";
const outputPath = "public/assets/gallery/about-us-crew-cropped.png";

const EDGE_PADDING = 4;

function luminance(r, g, b) {
  return 0.299 * r + 0.587 * g + 0.114 * b;
}

const { data, info } = await sharp(inputPath)
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true });

const { width, height, channels } = info;

function rowMaxLuminance(y) {
  let max = 0;
  for (let x = 0; x < width; x++) {
    const i = (y * width + x) * channels;
    max = Math.max(max, luminance(data[i], data[i + 1], data[i + 2]));
  }
  return max;
}

function isPureBlackRow(y) {
  return rowMaxLuminance(y) <= 2;
}

/** Skip top/bottom screenshot letterbox (pure black bands). */
let top = 0;
for (; top < height && isPureBlackRow(top); top++) {}

/** Walk down from content start; stop at first long pure-black run after real photo content. */
let lastContentRow = top;
let bottom = top;

for (let y = top; y < height; y++) {
  const max = rowMaxLuminance(y);
  if (max > 80) {
    lastContentRow = y;
  }

  if (y > top + 40 && isPureBlackRow(y)) {
    let blackRun = 0;
    for (let k = y; k < Math.min(height, y + 20); k++) {
      if (isPureBlackRow(k)) blackRun++;
    }
    if (blackRun >= 12) {
      bottom = lastContentRow;
      break;
    }
  }
}

if (bottom === top) {
  bottom = height - 1;
  for (; bottom > top && isPureBlackRow(bottom); bottom--) {}
}

top = Math.max(0, top - EDGE_PADDING);
bottom = Math.min(height - 1, bottom + EDGE_PADDING);

const cropHeight = bottom - top + 1;

await sharp(inputPath)
  .extract({ left: 0, top, width, height: cropHeight })
  .png()
  .toFile(outputPath);

console.log(`Cropped ${width}x${height} -> ${width}x${cropHeight} (rows ${top}-${bottom})`);
