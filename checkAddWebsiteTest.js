const steps = require('./common/steps/steps');
const puppeteer = require('puppeteer');

(async function () {
    console.log('Запуск браузера');
    const browser = await puppeteer.launch({headless: false});

    console.log('Создание  новой вкладки в браузере');
    const page = await browser.newPage();

    console.log('Переход по ссылке');
    await page.goto('<<url>>/login');

    await steps.loginWithGoogleStep(page)
    await steps.clickAddWebSiteStep(page)
    await steps.fillWebsiteFieldAndClickStepFirst(page)
    await steps.clickCloseButtonFirstStep(page)
    await steps.clickDeleteButtonStep(page)
    await steps.clickOkButtonFirstStep(page)

    console.log('Закрытие браузера');
    await browser.close();

})()
