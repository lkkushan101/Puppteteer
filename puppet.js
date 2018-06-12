const puppeteer = require('d:/slimerTest/node_modules/puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://angularjs.org/');
  await page.click('body > div.container > div:nth-child(2) > div.span4 > div.well.ng-scope > div > input');
  await page.type('body > div.container > div:nth-child(2) > div.span4 > div.well.ng-scope > div > input','Kushan'); 
  await page.screenshot({path: 'example.png'});
  await page.click('[ng-model="todoList.todoText"]');
  await page.type('[ng-model="todoList.todoText"]','Kushan Option');
  await page.click('[class="btn-primary"]');
  await page.screenshot({path: 'example1.png'});
  await browser.close();
})();