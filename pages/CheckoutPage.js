const {test,expect} = require('@playwright/test');
const {HomePage} = require ('../pages/HomePage');
class CheckoutPage{

    constructor(page){
        this.page = page;
        this.myAccountIcon = page.getByRole('link', { name: ' My Account ' });
        this.logout = page.getByRole('link', { name: 'Logout' });
        this.shoppingCartSuccessmsg = (page.getByRole('link', { name: 'Shopping Cart', exact: true }));

        
        
    }
    
    async shoppingCartMsg()
    {
        await expect (this.shoppingCartSuccessmsg).toBeVisible();


    }

    async logOut(){
        await this.myAccountIcon.click();
        await this.logout.click();
        
    }
}
module.exports = {CheckoutPage};



