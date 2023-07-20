import {test as baseTest } from "@playwright/test";
import { hrmLoginPage } from "../pages/hrmLoginPage";
import { hrmHomepage } from "../pages/hrmHomepage";
import { hrmNavigationbar } from "../pages/hrmNavigationbar";
import { hrmAdminPage } from "../pages/hrmAdminPage";


type page = {
    hrmLoginPage: hrmLoginPage;
    hrmHomepage: hrmHomepage;
    hrmNavigationbar: hrmNavigationbar;
    hrmAdminPage:hrmAdminPage;
}

const MY_PAGE = baseTest.extend({
    testPage: async ({ }, use) => {
        await use(page => page = page);
    }
});

const TEST_PAGES = baseTest.extend<page>({
    hrmLoginPage: async ({ page}, use) => {
        await use(new hrmLoginPage(page));
    },
    hrmHomepage: async ({ page}, use) => {
        await use(new hrmHomepage(page));
    },
    hrmNavigationbar: async ({page},use)=> {
        await use (new hrmNavigationbar(page));
    },
    hrmAdminPage: async ({page},use)=> {
        await use (new hrmAdminPage(page));
    }
});
export const test = TEST_PAGES;
export { expect, Page } from '@playwright/test';
