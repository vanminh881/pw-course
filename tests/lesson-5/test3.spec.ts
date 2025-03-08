import { test } from '@playwright/test'

test('Register form', async ({ page }) => {
    //Open material Playwright
    await test.step('Navigate to material Playwright', async () => {
        await page.goto('https://material.playwrightvn.com/');
    })

    // Click on Bài học 3: Todo page
    await test.step('Click on Bài học 3: Todo page', async () => {
        await page.locator('//a[@href="03-xpath-todo-list.html"]').click();
    })

    //Add new 100 task
    await test.step('Add new 100 lines', async () => {
        const inputTaskXpath = await page.locator('//input[@id="new-task"]');
        const addTaskBtn = await page.locator('//button[@id="add-task"]');

        //Add 100 tasks
        for (let i = 1; i <= 100; i++) {
            await inputTaskXpath.fill(`Todo ${i}`);
            await addTaskBtn.click();
        }
    })

    //Delete odd tasks (task số lẻ)
    await test.step('Delete odd tasks (task số lẻ)', async () => {
        page.on('dialog', async dialog => dialog.accept());
        for (let i = 1; i <= 100; i += 2) {
            //const textTaskXpath = await page.locator('//span[contains(text(), "Todo ${i}")]');
            const deleteTaskXpath = await page.locator(`//button[@id="todo-${i}-delete"]`);

            await deleteTaskXpath.click();
        }
    })
})