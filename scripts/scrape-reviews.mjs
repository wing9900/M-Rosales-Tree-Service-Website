import { chromium } from 'playwright';

const url = 'https://www.google.com/maps/place/M+Rosales+Tree+Service/@29.789,-95.494,17z/data=!4m8!3m7!1s0x8640c5332defb201:0xfdfb3017647c70e!8m2!3d29.789!4d-95.494!9m1!1b1';

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage();
await page.goto(url, { waitUntil: 'networkidle', timeout: 60000 });

// Try to accept cookies if present
try {
  const accept = page.getByRole('button', { name: /Accept all|Accept/i });
  if (await accept.isVisible({ timeout: 3000 })) await accept.click();
} catch {}

await page.waitForTimeout(3000);

// Click reviews tab if needed
try {
  const reviewsBtn = page.locator('button[aria-label*="Reviews"], button:has-text("Reviews")').first();
  if (await reviewsBtn.isVisible({ timeout: 5000 })) await reviewsBtn.click();
  await page.waitForTimeout(2000);
} catch {}

// Scroll review panel to load more
const panel = page.locator('div[role="main"]').first();
for (let i = 0; i < 15; i++) {
  await page.mouse.wheel(0, 800);
  await page.waitForTimeout(500);
}

const data = await page.evaluate(() => {
  const results = [];
  const reviewEls = document.querySelectorAll('[data-review-id], div.jftiEf, div.Jtu6Th');
  const seen = new Set();

  document.querySelectorAll('div.jftiEf').forEach((el) => {
    const name = el.querySelector('.d4r55')?.textContent?.trim() || '';
    const text = el.querySelector('.wiI7pd')?.textContent?.trim() || '';
    const date = el.querySelector('.rsqaWe')?.textContent?.trim() || '';
    const img = el.querySelector('button.WEBjve img, img.NBa7we')?.src || '';
    const ratingEl = el.querySelector('span.kvMYJc');
    const rating = ratingEl?.getAttribute('aria-label') || '';
    const key = name + text.slice(0, 40);
    if (name && text && !seen.has(key)) {
      seen.add(key);
      results.push({ name, text, date, img, rating });
    }
  });

  const total = document.querySelector('.F7nice span[aria-label*="reviews"]')?.getAttribute('aria-label')
    || document.querySelector('.HHrUdb')?.textContent
    || '';

  return { total, count: results.length, reviews: results };
});

console.log(JSON.stringify(data, null, 2));
await browser.close();
