import { PlaywrightTestConfig, defineConfig, devices } from '@playwright/test';

const config: PlaywrightTestConfig ={

  //testMatch:["tests\hrmadminPage.test.ts"],
    use:{
      
        headless:true
        
      },
      reporter: [["dot"],["json",{
        outputFile:"jsonReports/Jreport.json"
      }],["html",{open:"always"}]] ,
      timeout: 30000
     
      
}
export default config;
