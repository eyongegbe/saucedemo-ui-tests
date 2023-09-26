import { test, expect } from '@playwright/test';
import {LoginPage} from '../pages/loginPage';




test('can navigate to inventory page', async({page}) =>{
    const Login = new LoginPage(page);
    await Login.gotoLoginPage();
    await Login.login('problem_user','standard_user');
    let url = page.url();
    await expect(page).toHaveURL(url);
})