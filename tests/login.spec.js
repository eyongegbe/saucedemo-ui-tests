import { test, expect } from '@playwright/test';
import {LoginPage} from '../pages/loginPage';
import { url } from 'inspector';


test('can login with valid user', async({page}) =>{

    const Login = new LoginPage(page);
   await Login.gotoLoginPage();
   await Login.login('standard_user','standard_user');
   let pageElement = page.getByText('Swag Labs');
   await expect(pageElement).toContainText('Swag Labs')

});


test('cannot login with locked out user', async({page}) =>{

  const Login = new LoginPage(page);
 await Login.gotoLoginPage();
 await Login.login('locked_out_user','secret_sauce');
 let errorText = page.locator('[data-test="error"]');
 expect(errorText).toHaveText('Epic sadface: Sorry, this user has been locked out.')

});
