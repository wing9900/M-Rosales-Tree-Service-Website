import fs from 'fs';
import path from 'path';

const srcDir = 'C:/Users/ewing/.cursor/projects/c-Users-ewing-M-Rosales-Tree-Service-Website-M-Rosales-Tree-Service-Website/assets';
const destDir = 'public/assets/gallery';

const mappings = [
  ['About_Us-c3c67d0f-68fe-4859-9939-c7a11373bb61.png', 'about-us-crew.png'],
  ['Stump_Grinding-fc308a85-d2cc-4b7f-8b06-bdcfa626d4c9.png', 'stump-grinding-job.png'],
  ['Tree_Removals_1-2a8c10a8-f612-48d7-bd63-c877ff19fc30.png', 'tree-removal-01.png'],
  ['Tree_Removals_1-19dc593a-53fb-4b8e-867e-b759eaa32eac.png', 'tree-removal-02.png'],
  ['Tree_Removals_2-eab2fb05-5957-425c-8cef-ffd32c704397.png', 'tree-removal-03.png'],
  ['Tree_Removals_2-47f64828-3ac3-4a1e-8e6e-4497239c68ba.png', 'tree-removal-04.png'],
  ['Tree_Removals_3-0fddba74-0395-4fbd-9f5f-72d55ab19c83.png', 'tree-removal-05.png'],
  ['Tree_Removals_3-66d223f6-3ec4-486c-9e94-6ee2b3d5b08e.png', 'tree-removal-06.png'],
  ['Tree_Removals_4-9eaf3454-d5ff-4ff4-a575-0739f0a2345b.png', 'tree-removal-07.png'],
  ['Tree_Removals_5-a78013a5-4514-4af7-ab27-9dc89973a707.png', 'tree-removal-08.png'],
  ['Tree_Removals_6-2d47e27f-be64-48e7-aa08-30d497b80ed2.png', 'tree-removal-09.png'],
  ['Tree_Removals_7-8959ccfc-1669-46f5-90c4-a42929fa6188.png', 'tree-removal-10.png'],
  ['Tree_Removals_8-e4f67ce8-11d5-47b7-b54d-be14659e456b.png', 'tree-removal-11.png'],
  ['Tree_Removals_9-5f90812c-8f88-4c61-bb9b-f95df2c8ad6d.png', 'tree-removal-12.png'],
  ['Tree_Removals_10-a5ecc6b2-18cc-41e7-b2c5-6b2740917f31.png', 'tree-removal-13.png'],
  ['Tree_Removals_11-1bc18a55-12b3-4682-b055-9cce04ff0938.png', 'tree-removal-14.png'],
  ['Tree_Removals_12-cb5e985c-514e-4903-bfba-12d5c6ec3798.png', 'tree-removal-15.png'],
  ['Tree_Removals_13-0796eb44-379f-490d-aa63-75ac9aa0aa5e.png', 'tree-removal-16.png'],
  ['Tree_Removals_14-470b0a5a-117a-489a-a64e-bc39c535f8fa.png', 'tree-removal-17.png'],
  ['Tree_Removals_15-22039820-7bc1-4f07-8c45-d031258ae81e.png', 'tree-removal-18.png'],
];

fs.mkdirSync(destDir, { recursive: true });

for (const [suffix, destName] of mappings) {
  const srcFile = fs.readdirSync(srcDir).find((f) => f.includes(suffix.replace('.png', '')));
  if (!srcFile) {
    console.error('MISSING', suffix);
    continue;
  }
  fs.copyFileSync(path.join(srcDir, srcFile), path.join(destDir, destName));
  console.log('OK', destName, fs.statSync(path.join(destDir, destName)).size);
}

// Also update primary assets used elsewhere
fs.copyFileSync(path.join(destDir, 'about-us-crew.png'), 'public/assets/gallery/about-us-crew.png');
fs.copyFileSync(path.join(destDir, 'tree-removal-01.png'), 'public/assets/tree-removals.png');
fs.copyFileSync(path.join(destDir, 'tree-removal-14.png'), 'public/assets/safe-tree-removal.png');
fs.copyFileSync(path.join(destDir, 'stump-grinding-job.png'), 'public/assets/stump-grinding-job.png');

console.log('done');
