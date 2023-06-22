import {chromium, Page} from "@playwright/test";
import { hrmLoginPage } from "../pages/hrmLoginPage";
import { test } from "../fixtures/pageFixtures";
import { hrmHomepage } from "../pages/hrmHomepage";

test.describe('SMOKE',async () => {
    test('Valid Login', async ({page, hrmLoginPage, hrmHomepage }) => {
        await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        await hrmLoginPage.loginToHrmApplication();
        await hrmHomepage.verifyHomepage();
        
    })
})