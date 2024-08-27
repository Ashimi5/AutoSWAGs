// This is Page Object or Page elements

class LoginPage {
    visit() {
        cy.visit('https://www.saucedemo.com');
    }

    getUsernameInput() {
        return cy.get("#user-name");
    }

    getPasswordInput() {
        return cy.get("#password");
    }

    getLoginButton() {
        return cy.get("#login-button");
    }

    login(username, password) {
        this.getUsernameInput().type(username);
        this.getPasswordInput().type(password);
        this.getLoginButton().click();
    }
}

export default LoginPage;
