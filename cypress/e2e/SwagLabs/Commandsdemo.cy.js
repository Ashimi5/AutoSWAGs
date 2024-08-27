// cypress/e2e/login_spec.js

describe('Login Test', () => {
    it('should log in successfully', () => {
      cy.login('standard_user', 'secret_sauce'); // Use the custom command
  
      // Add your assertions here
      cy.url().should('include', '/inventory.html'); // Verify that the URL includes '/inventory.html'
      

     // cy.get('.welcome-message').should('contain', 'Welcome, testuser'); // Verify welcome message
    });
  });
  