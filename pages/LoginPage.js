const {test,expect} = require('@playwright/test');

class LoginPage 
{

    constructor(page) {

       // #locator
        this.page = page;
        this.username = page.getByRole('textbox', { name: 'E-Mail Address' });
        this.pwd = page.getByRole('textbox', { name: 'Password' });
        this.loginButton = page.getByRole('button', { name: 'Login' });
       
    }

    async login(username,pwd){

        await this.username.fill(username);
        await this.pwd.fill(pwd);
        await this.loginButton.click();
        
    }

       
}
module.exports = {LoginPage};



