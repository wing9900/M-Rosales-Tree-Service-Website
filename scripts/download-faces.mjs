import fs from 'fs';
import path from 'path';

const candidates = JSON.parse(fs.readFileSync('scripts/reviewer-candidates.json', 'utf8'));
const priority = [
  'Joshua Hall', 'Ashley Lopez', 'Victoria Perla', 'Steven Hughes', 'Andrew Ellis',
  'Jackie Davidson', 'Amy R', 'Sabrina Peng', 'Sumit Shah', 'Miss Tasha',
  'Rick Bailey', 'David', 'Melinda Jordan', 'Kevin Conway', 'Jimmy Friday',
  'Christine O\'Reilly', 'Ryan Corrigan', 'Cuko Lopez', 'TL Keneaster', 'Clint Warner',
  'oscar navarrete', 'J S Lira', 'Mari Nicholson-Preuss', 'Jack Boteler', 'rudy festari',
  'Robert Wilson', 'Vikram U', 'Jonathan Jaramillo', 'Alyson Guest', 'Modiste',
  'Julie Archer', 'Brissa Gaona', 'Patricia Nix', 'Ga Biz', 'Pham Nguyen',
];

const ordered = [
  ...priority.map((n) => candidates.find((c) => c.name === n)).filter(Boolean),
  ...candidates.filter((c) => !priority.includes(c.name)),
].slice(0, 35);

const outDir = 'scripts/reviewer-faces';
fs.mkdirSync(outDir, { recursive: true });

for (const item of ordered) {
  const safe = item.name.replace(/[^a-z0-9]+/gi, '_').slice(0, 40);
  const file = path.join(outDir, `${safe}.jpg`);
  try {
    const res = await fetch(item.url, { headers: { 'User-Agent': 'Mozilla/5.0' } });
    if (!res.ok) {
      console.log('FAIL', item.name, res.status);
      continue;
    }
    const buf = Buffer.from(await res.arrayBuffer());
    fs.writeFileSync(file, buf);
    console.log('OK', item.name, buf.length);
  } catch (e) {
    console.log('ERR', item.name, e.message);
  }
}
