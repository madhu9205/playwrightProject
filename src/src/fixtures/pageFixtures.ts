import {test as baseTest } from "@playwright/test";
import { hrmLoginPage } from "../pages/hrmLoginPage";
import { hrmHomepage } from "../pages/hrmHomepage";

type page = {
    hrmLoginPage: hrmLoginPage;
    hrmHomepage: hrmHomepage
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
    }

});
export const test = TEST_PAGES;
export { expect, Page } from '@playwright/test';
