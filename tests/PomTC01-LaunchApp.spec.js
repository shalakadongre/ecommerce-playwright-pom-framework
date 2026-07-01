const {test,expect} = require('@playwright/test');
const {HomePage} = require ('../pages/HomePage');

test('@sanity PomTC01-LaunchApp', async({page}) =>
{
const home = new HomePage(page);
await home.gotoCBPage();
});