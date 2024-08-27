class Login1
{

    setUserName(username)
    {
        cy.get("#user-name").type("Admin");
    }

    setPassword(password)
    {
        cy.get("#password").type("admin123");
    }

    clickSubmit()
    {
        cy.get("#login-button").click();
    }

    verifyLogin()
    {

        cy.url().should('contain',"saucedemo.com");

    }

}

export default Login1;