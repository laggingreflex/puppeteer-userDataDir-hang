const puppeteer = require('puppeteer');

main().catch(console.error)

async function main() {
  const browser = await puppeteer.launch({
    // headless: false, // un-commenting this makes it works
    userDataDir: 'test-profile-dir',
  });
  await browser.newPage();
  // Never reaches here
  console.log('If this logs, it worked!');
}
