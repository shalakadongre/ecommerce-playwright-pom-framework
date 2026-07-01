const {test,expect} = require('@playwright/test');
class AccountPage{

    constructor(page){
        this.page = page;
        this.header =   page.locator('h1');
        this.desktops = page.getByRole('link', { name: 'Desktops', exact: true });
        this.mac1 =     page.getByRole('link', { name: 'Mac (1)' });

        
    }
    async accountHeader(){
        await expect (this.header).toBeVisible();
        await expect (this.header).toContainText("My Account");
        
        
    }
    async productMac(){
        await this.desktops.click();
        await this.mac1.click();

    }

}
module.exports = {AccountPage};



