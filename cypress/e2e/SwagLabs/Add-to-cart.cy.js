describe('SwagLabDemo Tests', () => {
    it('Verify products should be added and removed from the cart', () => {
      cy.visit('https://www.saucedemo.com/');
      cy.get('[data-test="username"]').type('standard_user');
      cy.get('[data-test="password"]').type('secret_sauce');
      cy.get('[data-test="login-button"]').click();
      cy.url().should('include', '/inventory.html');
      
      //Adding products to the cart
      
      cy.get("#add-to-cart-sauce-labs-backpack").click();
      cy.get("#add-to-cart-sauce-labs-bike-light").click();
      cy.get("#add-to-cart-sauce-labs-bolt-t-shirt").click();
      cy.get("#add-to-cart-sauce-labs-fleece-jacket").click();
      
      
      //Removing products from the cart
      
      cy.get("#remove-sauce-labs-backpack").click();
      cy.get("#remove-sauce-labs-bike-light").click();
    
    });

   
  })