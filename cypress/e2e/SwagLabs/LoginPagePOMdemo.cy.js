// Test script page

import LoginPage from './pageObjects/LoginPage';
import LogoutPage from './pageObjects/LogoutPage';

// Test Script for login page and similarly we can create test scripts for other module too 

describe('Login Test', () => {
    it('should log in with valid credentials', () => {
        const loginPage = new LoginPage();
        loginPage.visit();

        loginPage.login('standard_user', 'secret_sauce');

        // Add assertions here
        cy.url().should('include', '/inventory.html');
   
        const logoutPage = new LogoutPage();
        logoutPage.getBurgerButton().click();
        logoutPage.getLogoutButtton().click();
   
   
   
    });

    /*
    
    it('should log out after clicking logout button ',()=>{

        const logoutPage = new LogoutPage();
        const loginPage = new LoginPage();  // We need to log in too for logging out

        loginPage.visit();

        loginPage.login('standard_user', 'secret_sauce');

        cy.url().should('include', '/inventory.html');          // Assertions

        logoutPage.getBurgerButton().click();
        logoutPage.getLogoutButtton().click();
        


    })
        */
});
