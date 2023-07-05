
import {chromium, expect, Page} from "@playwright/test";
import { hrmLoginPage } from "../pages/hrmLoginPage";
import { test } from "../fixtures/pageFixtures";
import { hrmHomepage } from "../pages/hrmHomepage";
import { hrmNavigationbar } from "../pages/hrmNavigationbar";
import { hrmAdminPage } from "../pages/hrmAdminPage";
import { VALID_LOGINS, INVALID_LOGINS} from "../tests/testData/userLogins.json";

test.describe('AdminView',async () => {
    test('1. Admin Button', async ({page,hrmLoginPage, hrmHomepage, hrmNavigationbar}) => {
        await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        await hrmLoginPage.loginToHrmApplication(VALID_LOGINS);
        await hrmHomepage.verifyHomepage();
        await hrmNavigationbar.loginToHrmAdminview();
        await hrmNavigationbar.verifyAdminpage();
    }) 
    test('2. Search Button', async ({page,hrmLoginPage, hrmHomepage, hrmNavigationbar,hrmAdminPage}) => {
        await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        await hrmLoginPage.loginToHrmApplication(VALID_LOGINS);
        await hrmHomepage.verifyHomepage();
        await hrmNavigationbar.loginToHrmAdminview();
        await hrmNavigationbar.verifyAdminpage();
        await hrmAdminPage.searchUser();
        await hrmAdminPage.verifySearchFeature();
    }) 
    
})