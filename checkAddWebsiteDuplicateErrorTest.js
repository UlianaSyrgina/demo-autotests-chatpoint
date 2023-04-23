const puppeteer = require('puppeteer');
const steps = require('./common/steps/steps');

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
    await steps.clickAddWebSiteStep(page)
    await steps.fillWebsiteFieldAndClickStepSecond(page)
    await steps.checkTextErrorStep(page)
    await steps.clickCloseButtonSecondStep(page)
    await steps.clickDeleteButtonStep(page)
    await steps.clickOkButtonSecondStep(page)

    console.log('Закрытие браузера');
    await browser.close();

})()