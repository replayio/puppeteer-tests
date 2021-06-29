const puppeteer = require("@recordreplay/puppeteer");

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto("http://whatsmyuseragent.org");
  await new Promise(resolve => setTimeout(resolve, 1000));
  await browser.close();
})();
