import {chromium, expect, Page} from "@playwright/test";
import { hrmLoginPage } from "../pages/hrmLoginPage";
import { test } from "../fixtures/pageFixtures";
import { hrmHomepage } from "../pages/hrmHomepage";
import { VALID_LOGINS, INVALID_LOGINS} from "../tests/testData/userLogins.json";

test.describe('SMOKE',async () => {
    test('1. Valid Login', async ({page, hrmLoginPage, hrmHomepage}) => {
        await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        await hrmLoginPage.loginToHrmApplication(VALID_LOGINS);
        await hrmHomepage.verifyHomepage();
    })

    test('2. Invalid Login', async ({page, hrmLoginPage, hrmHomepage }) => {
        await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        await hrmLoginPage.loginToHrmApplication(INVALID_LOGINS);
        await hrmLoginPage.verifyInvalidPasswordError();
    })
})