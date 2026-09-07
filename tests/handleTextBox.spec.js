import {test, expect} from '@playwright/test';
test('textbox1', async ({page}) => {

await page.goto("https://www.myntra.com/", {waitUntil: 'domcontentloaded'});
await page.waitForLoadState("domcontentloaded");
//await page.waitForLoadState('networkidle', {timeout: 5000});


await expect(page).toHaveTitle("Online Shopping for Women, Men, Kids Fashion & Lifestyle - Myntra");
await page.locator("//input[@class='desktop-searchBar']").waitFor({ timeout: 1000 });
await page.locator("//input[@class='desktop-searchBar']").click();

//await page.pause();

const searchbar = await page.getByPlaceholder("Search for products, brands and more");
await expect(searchbar).toBeEditable();

await page.waitForTimeout(5000);

})