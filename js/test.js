const { Builder, By, Capabilities } = require('selenium-webdriver');

const capabilities = Capabilities.chrome();
capabilities.set('chromeOptions', {
  args: [
    '--headless',
    '--no-sandbox',
    '--disable-gpu',
    '--window-size=1980,1200',
    // other chrome options
  ],
});

(async function example() {
  console.log('start google scraping');

  const driver = await new Builder().forBrowser('chrome').withCapabilities(capabilities).build();
  try {
    await driver.get('https://www.google.com/?hl=');

    const text = await driver.findElement(By.xpath('/html')).getText();
    console.log(text);
  } finally {
    await driver.quit();
    console.log('finish scraping');
  }
}());


const sleep = time => new Promise((resolve) => {
  setTimeout(() => {
    resolve();
  }, time);
});