const {test,expect} = require('@playwright/test');
class ProductPage{
    constructor(page){
        this.page = page;
        //#locators
        this.addtocartbutton = page.locator('.fa-solid.fa-shopping-cart');
        this.successaddtocartmsg = page.getByText('Success: You have added iMac');
        this.clickshoppingcart =  page.getByRole('link', { name: ' Shopping Cart' });    
    }
    async addToCart(){
        //await this.mouse.wheel(0, 1000);
        await this.addtocartbutton.click();
        await expect (this.successaddtocartmsg).toBeVisible();
        await expect(this.clickshoppingcart).toBeVisible();
        await this.clickshoppingcart.click();
        
        
    }
    
}
module.exports = {ProductPage};