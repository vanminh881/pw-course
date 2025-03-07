import { test } from '@playwright/test'

test('Register form', async ({ page }) => {
    //Open material Playwright
    await test.step('Navigate to material Playwright', async () => {
        await page.goto('https://material.playwrightvn.com/');
    })

    // //Click on 	Bài học 2: Product page
    await test.step('Click on 	Bài học 2: Product page', async () => {
        await page.locator('//a[@href="02-xpath-product-page.html"]').click();
    })

    //Add 2 items from San pham 1
    await test.step('Add 2 items from San pham 1', async () => {
        await page.locator('//button[@data-product-id="1"]').dblclick()
    })

    //Add 3 items from San pham 2
    await test.step('Add 3 items from San pham 2', async () => {
        let addToCartBtn2 = await page.locator('//button[@data-product-id="2"]');

        //await addToCartBtn2.scrollIntoViewIfNeeded();

        for (let i = 1; i <= 3; i++) {
            await addToCartBtn2.click();
        }
    })

    //Add 1 item from San pham 3
    await test.step('Add 1 item from San pham 3', async () => {
        await page.locator('//button[@data-product-id="3"]').click();
    })

})
