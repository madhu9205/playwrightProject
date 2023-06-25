import { PlaywrightTestConfig, defineConfig, devices } from '@playwright/test';

const config: PlaywrightTestConfig ={

    use:{
      
        headless:false
      },
      reporter: [["dot"],["json",{
        outputFile:"jsonReports/Jreport.json"
      }],["html",{open:"always"}]] 
  
}
export default config;
