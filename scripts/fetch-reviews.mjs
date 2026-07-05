import { scraper } from 'google-maps-review-scraper';
import fs from 'fs';

const url = 'https://www.google.com/maps/place/M+Rosales+Tree+Service/@29.789,-95.494,17z/data=!4m8!3m7!1s0x8640c5332defb201:0xfdfb3017647c70e!8m2!3d29.789!4d-95.494!9m1!1b1';

try {
  const reviews = await scraper({ url, sort_type: 'newest', pages: 10, clean: true });
  fs.writeFileSync('scripts/google-reviews.json', JSON.stringify(reviews, null, 2));
  console.log('Count:', reviews.length);
  console.log(JSON.stringify(reviews.slice(0, 3), null, 2));
} catch (e) {
  console.error('Failed:', e.message);
}
