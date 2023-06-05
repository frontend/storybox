#!/usr/bin/env zx

/* Require:
 * - ImageMagick (https://imagemagick.org/)
 * - rename (for macOS https://formulae.brew.sh/formula/rename)
 *
 * More on image sizes/formats for the web on https://antistatique.github.io/placeholders/
 */

const widths = [256, 384, 690, 750, 828, 1080, 1400, 1920, 2048, 3840];
const ratios = ['original', '16_9', '3_2', '1_1'];
const formats = [
  ['jpg', 65],
  ['webp', 30],
]

await $`rm -rf ./public/placeholders`;
await $`mkdir -p ./public/placeholders`;
await $`mkdir -p ./public/placeholders/tmp`;

for (const ratio of ratios) {
  await $`mkdir -p ./public/placeholders/tmp/${ratio}`;

  for (const width of widths) {
    const path = `./public/placeholders/tmp/${ratio}/${width}`;
    await $`mkdir -p ${path}`;

    for (const format of formats) {
      const [ext, quality] = format;

      if (ratio === 'original') {
        await $`mogrify -format ${ext} -quality ${quality} -resize ${width} -gravity Center -pointsize ${width * 0.05} -fill '#ffffff80' -annotate 0 ' ${ratio.replace('_', ':').toLowerCase()} - ${width}px - ${ext.toUpperCase()} ' -path ${path} src/assets/placeholders/*.jpg`;
        await $`rename -s .${ext} '_${ratio}_${width}.${ext}' ${path}/*`;
      } else {
        await $`mogrify -format ${ext} -quality ${quality} -resize ${width} -gravity Center -pointsize ${width * 0.05} -fill '#ffffff80' -annotate 0 ' ${ratio.replace('_', ':').toLowerCase()} - ${width}px - ${ext.toUpperCase()} ' -gravity center -crop ${ratio.replace('_', ':')} -path ${path} src/assets/placeholders/*.jpg`;
        await $`rename -s .${ext} '_${ratio}_${width}.${ext}' ${path}/*`;
      }
      await $`mv ${path}/*.${ext} ./public/placeholders/`;
    }
  }
}

await $`rm -rf ./public/placeholders/tmp`;
