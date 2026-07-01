const {test,expect} = require('@playwright/test');
class HomePage{
// constructor
constructor(page)
{
    this.page = page;

    // locators
    this.myAccountIcon = page.getByRole('link', { name: ' My Account ' });
    this.clickOnLogin =  page.getByRole('link', { name: 'Login' });
    
    
}





//action methods
async gotoCBPage(){
await this.page.goto("https://cloudberrystore.services");
console.log(await this.page.title());
await expect(this.page).toHaveTitle("Your store of fun");

}

async openMyAccount(){
await this.myAccountIcon.click();
await this.clickOnLogin.click();

}


}
module.exports = {HomePage}