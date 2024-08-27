// cypress/e2e/loginTest.js
import LoginPage from './pageObjects/LoginPage';

describe('Login Test', () => {
    it('should log in with valid credentials', () => {
        const loginPage = new LoginPage();
        loginPage.visit();

        loginPage.login('standard_user', 'secret_sauce');

        // Add assertions here
        cy.url().should('include', '/inventory.html');
    });
});
