import { test } from '@playwright/test'

test('Register form', async ({ page }) => {
    //Open material Playwright
    await test.step('Navigate to material Playwright', async () => {
        await page.goto('https://material.playwrightvn.com/');
    })

    //Click on Bài học 1: Register Page (có đủ các element)
    await test.step('Click on Register Page', async () => {
        await page.locator('//a[@href="01-xpath-register-page.html"]').click();
    })

    //Input username
    await test.step('Input usename', async () => {
        await page.locator('//input[@id="username"]').fill('Van Minh');
    })

    //Input email
    await test.step('Input email', async () => {
        await page.locator('//input[@id="email"]').fill('test@example.com');
    })

    // //Select gender
    await test.step('Select gender', async () => {
        let maleXpath = await page.locator('//input[@id="male"]');
        let isCheckedMale = await maleXpath.isChecked();

        if (isCheckedMale) {
            console.log(`Checked Male`);
        } else {
            await maleXpath.check();
        }
    })

    //Select hobies
    await test.step('Select hobies', async () => {

        //Select traveling
        let travelingXpath = await page.locator('//input[@id="traveling"]');
        let isCheckedTraveling = await travelingXpath.isChecked();

        if (isCheckedTraveling) {
            console.log(`Checked Male`);
        } else {
            await travelingXpath.check();
        }

        //Select cooking
        let cookingXpath = await page.locator('//input[@id="cooking"]');
        let isCheckedCooking = await cookingXpath.isChecked();

        if (isCheckedCooking) {
            console.log(`Checked Male`);
        } else {
            await cookingXpath.check();
        }

    })

    //Select interests
    await test.step('Select interests', async () => {
        await page.locator('//option[text()="Technology"]').click();
    })

    //Select country
    await test.step('Select country', async () => {
        await page.locator('//select[@id="country"]').selectOption({ value: 'australia' });
    })

    // Select date of birth
    await test.step('Select date', async () => {
        const date = '2025-03-07';
        await page.fill('//input[@id="dob"]', date);
    })
    //Upload file
    await test.step('Upload file', async () => {
        await page.locator('//input[@id="profile"]').setInputFiles('tests/lesson-5/image.png');
    })
    //Input biography
    await test.step('Input Biography', async () => {
        let scrollElement = await page.locator('//textarea[@id="bio"]');
        //await scrollElement.scrollIntoViewIfNeeded();

        for (let i = 1; i <= 3; i++) {
            await scrollElement.fill(`Đôi khi trong phần tử HTML, phần tử sẽ bị thừa khoảng trắng`);
            await page.keyboard.press('Enter');
        }
    })

    //Hover
    await test.step('Hover', async () => {
        await page.locator('//div[@class="tooltip"]').hover();
    })

    //Check subcribe
    await test.step('Select hobies', async () => {

        //Select traveling
        let newLetterXpath = await page.locator('//input[@id="newsletter"]');
        let isCheckedSubcribe = await newLetterXpath.isChecked();

        if (isCheckedSubcribe) {
            console.log(`Checked Male`);
        } else {
            await newLetterXpath.check();
        }
    })

    //Click enable feature
    await test.step('Click enbale feature', async () => {
        await page.locator('//span[@class="slider round"]').click();
    })

    //Click Register button
    await test.step('Click Register button', async () => {
        await page.locator('//button[@type="submit"]').click();
    })
})