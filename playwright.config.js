// @ts-check
import { chromium, defineConfig, devices } from '@playwright/test';
import { channel } from 'node:diagnostics_channel';

/** 
 * @see https://playwright.dev/docs/test-configuration
 */
const config = ({
  testDir: './tests',
  retries:0,
timeout:31000,
expect:
{
timeout: 10000
},
reporter:'html',

projects:
[
  {
    name: 'chrome',
    use: {
   browserName: 'chromium',
   headless: false,
   screenshot:'only-on-failure',
   video:'retain-on-failure',
   trace: 'retain-on-failure',
    
    }
  },
/*  
{
   name: 'firefox',
    use: {
   browserName: 'firefox',
   headless: false,
   screenshot:'only-on-failure',
   video:'retain-on-failure',
   trace: 'retain-on-failure'
    
  }
},
  {
    name: 'edge',
    use: {
    browserName: 'chromium',
    channel:'msedge',
    headless: false,
    screenshot:'only-on-failure',
    video:'retain-on-failure',
    trace: 'retain-on-failure'
    
  }
  },
  { 
    name: 'safari',
     use: {
   browserName: 'webkit',
   headless: false,
   screenshot:'only-on-failure',
   video:'retain-on-failure',
   trace: 'retain-on-failure'
    
  }
  },
*/

]



});

  
  

  /* Configure projects for major browsers 
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ]
    */

module.exports = config;