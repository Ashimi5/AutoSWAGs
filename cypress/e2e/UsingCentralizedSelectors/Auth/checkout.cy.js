import { loginSelectors } from "../../../support/Selectors/loginSelectors";
import { addToCart } from "../../../support/Selectors/addToCart";
import { checkout } from "../../../support/Selectors/checkout";

describe('SwagLabDemo Tests', () => {
    
    it('Verify products should be added and removed from the cart', () => {
        
        cy.visit("https://www.saucedemo.com");
        cy.url().should('contain',"https://www.saucedemo.com");
        cy.get(loginSelectors.loginFormEmail).click().clear().type("standard_user");
        cy.get(loginSelectors.loginFormPassword).click().clear().type("secret_sauce");
        cy.get(loginSelectors.loginSubmit).click();
        cy.url().should('include', '/inventory.html');
    
        //Adding products to the Cart page--------------------------------------------------------->
      
       
        cy.get(addToCart.addToCart1).click();
        cy.get(addToCart.addToCart2).click();
        cy.get(addToCart.addToCart3).click();
        cy.get(addToCart.addToCart4).click();

        //Removing 2 products

        cy.get(checkout.removeCart1).click();
        cy.get(checkout.removeCart2).click();
        
        //Inside the Cart Page--------------------------------------------------------------------->
        
        cy.get(checkout.cartLink).click();
        cy.get(".title").should('have.text','Your Cart');

    
        //Removing the products--------------------------------------------------------------------->

       

        cy.get(checkout.cartQtyLabel).should('have.text','QTY');
        cy.get(checkout.cartDescLabel).should('have.text','Description');
        cy.title().should('contain','Swag Labs');
        cy.get(checkout.checkoutButton).click();

        
   
   
        //Inside Check out step one------------------------------------------------------------------>
    //All the fields are empty
        
        cy.get(checkout.fname);
        cy.get(checkout.lname);
        cy.get(checkout.postalcode);
        cy.get(checkout.continueBut).click();
        cy.get(checkout.testError).should('have.text','Error: First Name is required');
        cy.get(checkout.fname).clear();
        cy.get(checkout.lname).clear();
        cy.get(checkout.postalcode).clear();
        
    //First name only given

        cy.get(checkout.fname).type("TesterX");
        cy.get(checkout.lname);
        cy.get(checkout.postalcode);
        cy.get(checkout.continueBut).click();
        cy.get(checkout.testError).should('have.text','Error: Last Name is required');
        cy.get(checkout.fname).clear();
        cy.get(checkout.lname).clear();
        cy.get(checkout.postalcode).clear();
        
    //Last name only given

        cy.get(checkout.fname);
        cy.get(checkout.lname).type("Sins");
        cy.get(checkout.postalcode);
        cy.get(checkout.continueBut).click();
        cy.get(checkout.testError).should('have.text','Error: First Name is required');
        cy.get(checkout.fname).clear();
        cy.get(checkout.lname).clear();
        cy.get(checkout.postalcode).clear();

    //Only postal code given

        cy.get(checkout.fname);
        cy.get(checkout.lname);
        cy.get(checkout.postalcode).type("12345");
        cy.get(checkout.continueBut).click();
        cy.get(checkout.testError).should('have.text','Error: First Name is required');
        cy.get(checkout.fname).clear();
        cy.get(checkout.lname).clear();
        cy.get(checkout.postalcode).clear();
    

    //All the fields are given i.e. positive 

        cy.get(checkout.fname).type("TesterA");
        cy.get(checkout.lname).type("Singh");
        cy.get(checkout.postalcode).type("12345");
        cy.get(checkout.continueBut).click();
      
      
    
    
    //Inside Check out step two----------------------------------------------------------------->

        cy.get(".title").should('have.text','Checkout: Overview');
        cy.get(".cart_quantity_label").should('have.text','QTY');
        cy.get(".cart_desc_label").should('have.text','Description');
      
        
        
    //Checkout Description---------------------------------------------------------------------->

        cy.get("div[data-test='payment-info-label']").should('have.text','Payment Information:');
        cy.get("div[data-test='payment-info-value']").should('have.text','SauceCard #31337');
        cy.get("div[data-test='shipping-info-label']").should('have.text','Shipping Information:');
        cy.get("div[data-test='shipping-info-value']").should('have.text','Free Pony Express Delivery!');
        cy.get("div[data-test='total-info-label']").should('have.text','Price Total');
        cy.get(".summary_subtotal_label").should('have.text','Item total: $39.98');
        cy.get(".summary_total_label").should('have.text','Total: $43.18')
        

        cy.get("#finish").click();

    // Final Page after checkout----------------------------------------------------------------->


        cy.get(".complete-header").should('have.text','Thank you for your order!');
        cy.get(".complete-text").should('have.text','Your order has been dispatched, and will arrive just as fast as the pony can get there!');

        cy.get("#back-to-products").click();
    

        
    });

   
  })