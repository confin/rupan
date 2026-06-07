const puppeteer = require("puppeteer-core");
const path = require("path");
const fs = require("fs");

const CHROME = "C:/Users/Administrator/AppData/Local/ms-playwright/chromium-1223/chrome-win64/chrome.exe";
const OUT = "E:/21.rupan/rupan-web/screenshots";
if (!fs.existsSync(OUT)) fs.mkdirSync(OUT, { recursive: true });

const pages = [
  ["home",        "http://localhost:3000/"],
  ["camps",       "http://localhost:3000/camps"],
  ["camp-detail", "http://localhost:3000/camp/mt-dro-7"],
  ["checkout",    "http://localhost:3000/checkout?program=mt-dro-7"],
  ["partner",     "http://localhost:3000/partner"],
  ["about",       "http://localhost:3000/about"]
];

(async () => {
  const browser = await puppeteer.launch({
    executablePath: CHROME,
    headless: "new",
    args: ["--no-sandbox", "--disable-setuid-sandbox", "--disable-dev-shm-usage"]
  });
  for (const [name, url] of pages) {
    const page = await browser.newPage();
    await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1 });
    try {
      await page.goto(url, { waitUntil: "networkidle2", timeout: 30000 });
      await new Promise(r => setTimeout(r, 800));
      const file = path.join(OUT, name + ".png");
      await page.screenshot({ path: file, fullPage: true });
      const stat = fs.statSync(file);
      console.log("OK", name, stat.size, "bytes");
    } catch (e) {
      console.log("ERR", name, e.message);
    }
    await page.close();
  }
  await browser.close();
})();
