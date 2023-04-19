async function loginWithGoogleStep(page) {
    const continueWithGoogle = await page.$('#root > section > main > main > div > div:nth-child(2) > a > button > div > span');
    await continueWithGoogle.evaluate(form => form.click());

    await page.waitForNavigation()

    await page.waitForSelector('#identifierId')
    await page.type('#identifierId', "@gmail.com")
    await page.click('#identifierNext')

    await page.waitForSelector('input[type="password"]', {visible: true})
    await page.type('input[type="password"]', "****")

    await page.waitForSelector('#passwordNext', {visible: true})
    await page.click('#passwordNext')
}

async function clickAddWebSiteStep(page) {
    console.log('Click "Add Website" button');
    const addWebSiteSelector = 'ul.ant-menu > li.ant-menu-item > span > span > span';
    await page.waitForSelector(addWebSiteSelector, {visible: true});
    await page.click(addWebSiteSelector);
}

async function fillWebsiteFieldAndClickStepFirst(page) {
    console.log('Fill website field  and click "Get Code" button');
    const urlInput = await page.$('#url');
    await urlInput.type('https://hello.com');

    const getCodeButtonSelector = 'body > div:nth-child(3) > div > div.ant-modal-wrap > div > div.ant-modal-content > div.ant-modal-footer > button > span';
    await page.waitForSelector(getCodeButtonSelector, {visible: true});
    await page.click(getCodeButtonSelector);
}

async function fillWebsiteFieldAndClickStepSecond(page) {
    console.log('Fill website field  with duplicate url and click "Get Code" button');
    const urlInput = await page.$('#url');
    await urlInput.type('https://hello.com');

    const getCodeButtonSelector = 'body > div:nth-child(4) > div > div.ant-modal-wrap > div > div.ant-modal-content > div.ant-modal-footer > button > span';
    await page.waitForSelector(getCodeButtonSelector, {visible: true});
    await page.click(getCodeButtonSelector);
}


async function checkTextErrorStep(page) {
    console.log('Get  text "Error"');
    const errorTextSelector = '#url_help > div'
    let element = await page.waitForSelector(errorTextSelector, {visible: true});
    let value = await page.evaluate(el => el.textContent, element)
    if (value !== 'Website hello.com has already exists') {
        throw new Error("Not exists")
    }
}


async function clickCloseButtonFirstStep(page) {
    console.log('Click "Close" button');
    const closeButtonSelector = 'body > div:nth-child(3) > div > div.ant-modal-wrap > div > div.ant-modal-content > button > span';
    await page.waitForSelector(closeButtonSelector, {visible: true});
    await page.click(closeButtonSelector);
}

async function clickCreateWidgetStep(page) {
    console.log('Click "Create Widget');
    const clickCreateWidgetButtonSelector = 'body > div:nth-child(3) > div > div.ant-modal-wrap > div > div.ant-modal-content > div.ant-modal-footer > button > span';
    await page.waitForSelector(clickCreateWidgetButtonSelector, {visible: true});
    await page.click(clickCreateWidgetButtonSelector);
}

async function clickToUploadStep(page) {
    console.log('Click "Click to Upload"');
    const clickToUploadButtonSelector = '#root > section > section > div > div > div > div.Constructor_constructorBlock__yEtgS > div.ant-row.ant-row-space-between.css-fimw3v > div.Constructor_upload__Jh5vp > span > div.ant-upload.ant-upload-select > span > button > span';
    await page.waitForSelector(clickToUploadButtonSelector, {visible: true});
    await page.click(clickToUploadButtonSelector);
}

async function fileInputStep(page) {
    console.log('Click "file download"');
    const fileInput = await page.$('input[type=file]');
    await fileInput.uploadFile('./home/vladimir/Downloads/moon.mp4');
}


async function clickCloseButtonSecondStep(page) {
    console.log('Click "Close" button');
    const closeButtonSelector = 'body > div:nth-child(4) > div > div.ant-modal-wrap > div > div.ant-modal-content > button > span';
    await page.waitForSelector(closeButtonSelector, {visible: true});
    await page.click(closeButtonSelector);
}

async function clickDeleteButtonStep(page) {
    console.log('Click "Delete" button');
    const deleteButtonSelector = '.anticon-delete';
    await page.waitForSelector(deleteButtonSelector, {visible: true});
    await page.click(deleteButtonSelector);
}

async function clickOkButtonFirstStep(page) {
    console.log('Click "Ok" button');
    const OkButtonSelector = 'body > div:nth-child(4) > div > div.ant-modal-wrap > div > div.ant-modal-content > div > div > div.ant-modal-confirm-btns > button.ant-btn.css-mxhywb.ant-btn-primary > span';
    await page.waitForSelector(OkButtonSelector, {visible: true});
    await page.click(OkButtonSelector);
}

async function clickOkButtonSecondStep(page) {
    console.log('Click "Ok" button');
    const OkButtonSelector = 'body > div:nth-child(5) > div > div.ant-modal-wrap > div > div.ant-modal-content > div > div > div.ant-modal-confirm-btns > button.ant-btn.css-mxhywb.ant-btn-primary';
    await page.waitForSelector(OkButtonSelector, {visible: true});
    await page.click(OkButtonSelector);
}


module.exports = {
    loginWithGoogleStep,
    clickAddWebSiteStep,
    fillWebsiteFieldAndClickStepFirst,
    fillWebsiteFieldAndClickStepSecond,
    checkTextErrorStep,
    clickCloseButtonFirstStep,
    clickCloseButtonSecondStep,
    clickDeleteButtonStep,
    clickOkButtonFirstStep,
    clickOkButtonSecondStep,
};