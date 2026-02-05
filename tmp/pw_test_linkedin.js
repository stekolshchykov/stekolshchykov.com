const { chromium } = require('playwright');
(async()=>{
  const userDataDir = process.env.ATLAS_PROFILE;
  const context = await chromium.launchPersistentContext(userDataDir, {headless:true});
  const page = context.pages()[0] || await context.newPage();
  await page.goto('https://www.linkedin.com/in/me/', {waitUntil:'domcontentloaded', timeout:60000});
  await page.waitForTimeout(3000);
  console.log('URL', page.url());
  console.log('TITLE', await page.title());
  await context.close();
})();
