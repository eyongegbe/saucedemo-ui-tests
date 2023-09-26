exports.LoginPage = class LoginPage{

    constructor(page){

        this.page = page;
        this.username_textbox = page.locator('[data-test="username"]');
        this.password_textbox = page.locator('[data-test="password"]');
        this.login_button = page.locator('[data-test="login-button"]');
        this.press_Tabpress_Tab = page.locator('press("Tab")') ;
        

    }

    async gotoLoginPage(){
        await this.page.goto('https://www.saucedemo.com/');
    }

   async enterUserName(username){
     await this.username_textbox.fill();

    }

    async enterPassword(password){
        await this.password_textbox.fill(password);

    }

    async clickLogin(){

        await this.login_button.click()
    }

    async login(username, password){
        await this.username_textbox.fill(username);
        await this.password_textbox.fill(password);
        await this.login_button.click();
    }
    
    
}