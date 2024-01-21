const { Builder, By, Key, until } = require('selenium-webdriver');

async function getHtml() {
  const driver = await new Builder().forBrowser('chrome').build();

  try {
    const url = 'https://www.exemplo.com'; // Substitua pela URL desejada
    await driver.get(url);

    const html = await driver.getPageSource();
    console.log(html);
  } finally {
    await driver.quit();
  }
}

getHtml();
