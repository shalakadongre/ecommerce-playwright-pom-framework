const {test,expect} = require('@playwright/test');
const {HomePage} = require ('../pages/HomePage');
const {LoginPage} = require('../pages/LoginPage');
const {AccountPage} = require('../pages/AccountPage');
const {ProductPage} = require('../pages/ProductPage');
const {CheckoutPage} = require('../pages/CheckoutPage');



const dataset = JSON.parse(JSON.stringify(require("../utils/cbtestdata.json")));
const users = dataset.Sheet1;
for(const data of users)



    test(`@sanity @regression PomTC03-AddtoCart-${data.username}`, async ({page})=>
     {
        const homePg = new HomePage(page);
        const loginPg = new LoginPage(page);
        const accountPg = new AccountPage(page);
        const productPg = new ProductPage(page);
        const checkoutPg = new CheckoutPage(page);

        await homePg.gotoCBPage();
        await homePg.openMyAccount();
        await loginPg.login(data.username,data.pwd);
        await accountPg.accountHeader();
        await accountPg.productMac();
        await productPg.addToCart();
        await checkoutPg.shoppingCartMsg();
        await checkoutPg.logOut();
        
        
    });
