// This is Page Object or Page elements

class LogoutPage {
  

    getBurgerButton(){

        return cy.get("#react-burger-menu-btn");
    }

    getLogoutButtton(){

        return cy.get("#logout_sidebar_link");
    }

    
}

export default LogoutPage;
