import fs from 'fs';

export const config = {
    runner: 'local',
    specs: ['./features/**/*.feature'],
    maxInstances: 1,
    capabilities: [{
        maxInstances: 1,
        browserName: 'chrome',
        'goog:chromeOptions': {
            args: [
                '--headless=new',
                '--disable-gpu',
                '--window-size=1920,1080',
                '--no-sandbox',
                '--disable-dev-shm-usage'
            ]
    }
        acceptInsecureCerts: true
    }],
    logLevel: 'info',
    bail: 0,
    baseUrl: 'http://opencart.abstracta.us/',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: [],
    framework: 'cucumber',
    cucumberOpts: {
        require: ['./step-definitions/*.js'],
        timeout: 60000
    },
    reporters: ['spec'],
    async afterStep(test, context, { error }) {
        if (error) {
            const dir = './screenshots';
            if (!fs.existsSync(dir)) {
                fs.mkdirSync(dir);
            }
            await browser.saveScreenshot(`${dir}/${Date.now()}.png`);
        }
    }
};
