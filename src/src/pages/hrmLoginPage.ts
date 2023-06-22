import { expect, Locator, Page } from '@playwright/test';

export class hrmLoginPage {
    readonly page: Page;

    //page elements
    private loginPageTitle = '//*[@id="app"]/div[1]/div/div[1]/div/div[2]/h5';
    private loginPageLogo = '//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[1]/img';
    private loginPageBrandingHeader = '//*[@id="app"]/div[1]/div/div[1]/div/div[1]';
    private usernameLabel = '//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[1]/div/div[1]/label';
    private passwordLabel = '//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[2]/div/div[1]/label';
    private usernameInput = '//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[1]/div/div[2]/input';
    private passwordInput = '//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[2]/div/div[2]/input';
    private loginButton = '//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[3]/button';
    private forgotPasswordLink = '//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[4]/p';

    constructor(page: Page) {
        this.page= page;
    }

    private async verifyLoginPage(){
        const HEADING = this.page.locator(this.loginPageTitle);
        await expect(HEADING).toHaveText('Login',{timeout:70000});    
    }

    private async enterUsername(){
        await this.page.waitForSelector(this.usernameInput);
        await this.page.fill(this.usernameInput, "Admin");
        console.log("Username filled");
    }

    private async enterPassword(){
        await this.page.waitForSelector(this.passwordInput);
        await this.page.fill(this.passwordInput, "admin123");
        console.log("Password filled");
    }

    private async clickLoginButton(){
        await Promise.all([
            await expect(this.page.locator(this.loginButton)).toBeVisible(),
            await this.page.click(this.loginButton)
        ]);
        console.log ("Login button clicked")
    }

    //Composite test methods
    async loginToHrmApplication() {
        await this.verifyLoginPage();
        await this.enterUsername();
        await this.enterPassword();
        await this.clickLoginButton();
    }
}
