import { loginSelectors } from "../../../support/Selectors/loginSelectors";
import { logoutSelectors } from "../../../support/Selectors/logoutSelectors";

describe('Logout test',()=>{


    it('test logout',()=>{

        cy.visit("https://www.saucedemo.com");
        cy.url().should('contain',"https://www.saucedemo.com");
        cy.get(loginSelectors.loginFormEmail).click().clear().type("standard_user");
        cy.get(loginSelectors.loginFormPassword).click().clear().type("secret_sauce");
        cy.get(loginSelectors.loginSubmit).click();
        cy.url().should('include', '/inventory.html');
        cy.get(logoutSelectors.logoutBurgerMenu).should('be.visible').click();

       // cy.get(logoutSelectors.logoutBurgerMenu).click();
        cy.get(logoutSelectors.logoutLogoutMenu).click();
        cy.get(logoutSelectors.logoutText1).should('contain','Accepted usernames are:');
        cy.get(logoutSelectors.logoutText2).should('contain','Password for all users:');

        
    })



})