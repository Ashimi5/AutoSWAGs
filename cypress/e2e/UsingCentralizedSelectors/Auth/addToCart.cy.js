import { addToCart } from "../../../support/Selectors/addToCart";
import { loginSelectors } from "../../../support/Selectors/loginSelectors";


describe('Login test',()=>{


    it('test login',()=>{

        cy.visit("https://www.saucedemo.com");
        cy.url().should('contain',"https://www.saucedemo.com");
        cy.get(loginSelectors.loginFormEmail).click().clear().type("standard_user");
        cy.get(loginSelectors.loginFormPassword).click().clear().type("secret_sauce");
        cy.get(loginSelectors.loginSubmit).click();
        cy.url().should('include', '/inventory.html');
 
        //Add to cart
        cy.get(addToCart.addToCart1).click();
        cy.get(addToCart.addToCart2).click();
        cy.get(addToCart.addToCart3).click();
        cy.get(addToCart.addToCart4).click();
        
        
    })



})