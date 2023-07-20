import { expect, Locator, Page } from '@playwright/test';

export class hrmAdminPage {
    readonly page: Page;

    //Page elements
    private userName = "//*[@id='app']/div[1]/div[2]/div[2]/div/div[1]/div[2]/form/div[1]/div/div[1]/div/div[2]/input"
    private empName = "//*[@id='app']/div[1]/div[2]/div[2]/div/div[1]/div[2]/form/div[1]/div/div[3]/div/div[2]/div/div/input"
    private searchBtn = "//*[@id='app']/div[1]/div[2]/div[2]/div/div[1]/div[2]/form/div[2]/button[2]"
    private firstname = "//*[@id='app']/div[1]/div[2]/div[2]/div/div[2]/div[3]/div/div[2]/div[1]/div/div[2]/div"
    private userRole = "//*[@id='app']/div[1]/div[2]/div[2]/div/div[1]/div[2]/form/div[1]/div/div[2]/div/div[2]/div/div/div[1]"
    private  payName= "//*[@id='app']/div[1]/div[2]/div[2]/div/div/form/div[1]/div/div/div/div[2]/input"
    private paygradeAddBtn = "//*[@id='app']/div[1]/div[2]/div[2]/div/div/form/div[2]/button[2]"
    //////////////

    private pickUser;

    constructor(page: Page) {
        this.page = page;
    }

    private async enteruserName() {
        await this.page.waitForSelector(this.userName);
        await this.page.fill(this.userName, "Admin");
        console.log("Username filled");
    }
    private async enterempName() {
        await this.page.waitForSelector(this.empName);
        await this.page.fill(this.empName, "");
        console.log("empname filled");
    }
    private async enterUserRole() {
        await this.page.locator('form i').first().click();
        await this.page.getByRole('option', { name: 'Admin' }).click();
        console.log("UserRole filled");
    }
    private async enterStatus() {
        await this.page.locator('form i').nth(1).click();
        await this.page.getByRole('option', { name: 'Enabled' }).getByText('Enabled').click();
        console.log("Status filled");
    }
    private async clickSearchButton() {
        await Promise.all([
            await expect(this.page.locator(this.searchBtn)).toBeVisible(),
            await this.page.click(this.searchBtn)
        ]);
        console.log("Search Button clicked")
    }

    private async clickjobtitles(){
        await this.page.getByText('Job').click();
        await this.page.getByRole('menuitem',{name : 'Job Titles'}).click();
        console.log("JobTitle picked");

    }

     async searchUser(){
           await this.enteruserName();
            await this.enterempName();
            await this.enterUserRole();
            await this.enterStatus();
            await this.clickSearchButton();
        }

        async gotoajobtittle(){
           
             await this.clickjobtitles();
         }

    private async validateSearchFeature() {
        const value1 = this.page.locator(this.firstname);
        await expect(value1).toHaveText('Admin', { timeout: 70000 })
    }
    async verifySearchFeature() {
        await this.validateSearchFeature();
    }
    private async validateJobTitle() {
        const value2 = this.page.getByText('Job Titles');
        await expect(value2).toHaveText('Job Titles', { timeout: 70000 })
    }
    async verifyJobTitle() {
        await this.validateJobTitle();
    }

   /* private async checkDBAdmin(){

        await this.page.getByText('Database Administrator').check();
        await this.page.getByText('Database Administrator').
        
  } */ 

   private async clickpaygrades(){
    await this.page.getByText('Job').click();
    await this.page.getByRole('menuitem',{name :'Pay Grades'}).click();
    console.log("PayGrade picked");
    await this.page.getByRole('button',{name :'Add'}).click();
    console.log("button clicked");
}

    async clickpaygeadeadd (){

       await this.clickpaygrades();
    }

    private async addpaygrade(){


        await this.page.waitForSelector(this.payName);
        await this.page.fill(this.payName, "Admin");
        console.log("payName filled");

    }   

private async clickAddPayGradeButton() {
    await Promise.all([
        await expect(this.page.locator(this.paygradeAddBtn)).toBeVisible(),
        await this.page.click(this.paygradeAddBtn)
    ]);
    console.log("PayGrade Button clicked")
}

async addplaygrade2 (){

    await this.addpaygrade();
    await this.clickAddPayGradeButton(); 
 }

}

   
