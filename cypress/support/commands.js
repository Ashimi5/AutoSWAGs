// cypress/support/commands.js

//Custom commands using Cypress.Commands.add()

Cypress.Commands.add('login', (username, password) => {
    cy.visit('https://www.saucedemo.com/'); // Navigate to the login page
  
    cy.get('#user-name').type(username); // Enter username
    cy.get('#password').type(password); // Enter password
  
    cy.get('#login-button').click(); // Click the login button
  });
  