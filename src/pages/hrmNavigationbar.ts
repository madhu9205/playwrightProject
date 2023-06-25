import { expect, Locator, Page } from '@playwright/test';

export class hrmNavigationbar {
    readonly page: Page;

    //Page elements

    private adminLink = "//*[@id='app']/div[1]/div[1]/aside/nav/div[2]/ul/li[1]/a/span";
    private adminpageheader = "//*[@id='app']/div[1]/div[1]/header/div[1]/div[1]/span/h6[1]";
     
    constructor(page: Page) {
        this.page= page;
    }

    private async clickAdminButton(){
        await Promise.all([
            await expect(this.page.locator(this.adminLink)).toBeVisible(),
            await this.page.click(this.adminLink)
        ]);
        console.log ("Admin button clicked")
    }

    async loginToHrmAdminview() {
       
        await this.clickAdminButton();
    }
    private async verifyAdminpageHeading() {
        const ADMINHEADING = this.page.locator(this.adminpageheader);
        await expect(ADMINHEADING).toHaveText('Admin',{timeout:70000});        
    }

    //Composite test methods
    async verifyAdminpage() {
        await this.verifyAdminpageHeading();
    }

}