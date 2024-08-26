describe('Log out',()=>{

    it('Verify log out',()=>{

        cy.visit('https://www.saucedemo.com');
        cy.get('[data-test="username"]').type('standard_user');
        cy.get('[data-test="password"]').type('secret_sauce');
        cy.get('[data-test="login-button"]').click();
        cy.url().should('include', '/inventory.html');

        cy.get("#react-burger-menu-btn").click();
        cy.get("#logout_sidebar_link").click();

        cy.get("div[id='login_credentials'] h4").should('have.text','Accepted usernames are:');
        cy.get("div[class='login_password'] h4").should('have.text','Password for all users:');

    })

})