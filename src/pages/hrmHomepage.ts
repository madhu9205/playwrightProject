import { expect, Locator, Page } from '@playwright/test';

export class hrmHomepage {
    readonly page: Page;

    //Page elements
    private homepageHeader = '//*[@id="app"]/div[1]/div[1]/header/div[1]/div[1]/span/h6';

    constructor(page: Page) {
        this.page= page;
    }

    private async verifyHomepageHeading() {
        const HOMEHEADING = this.page.locator(this.homepageHeader);
        await expect(HOMEHEADING).toHaveText('Dashboard',{timeout:70000});        
    }

    //Composite test methods
    async verifyHomepage() {
        await this.verifyHomepageHeading();
    }

}