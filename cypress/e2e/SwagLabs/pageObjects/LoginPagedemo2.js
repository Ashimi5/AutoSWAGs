class Login2
{
    txtUserName=("#user-name");
    txtPassword=("#password");
    btnSubmit=("#login-button");
    lblmsg=".app_logo";
    

    setUserName(username)
    {
        cy.get(this.txtUserName).type("standard_user");
    }

    setPassword(password)
    {
        cy.get(this.txtPassword).type("secret_sauce");
    }

    clickSubmit()
    {
        cy.get(this.btnSubmit).click();
    }

    verifyLogin()
    {

        cy.get(this.lblmsg).should('contain','Swag Labs');

    }

}

export default Login2;