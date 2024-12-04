import Login1 from "./pageObjects/LoginPagedemo1";
import Login2 from "./pageObjects/LoginPagedemo2";


describe('Login Page Swag Labs Demo',()=>{

    //General approach

    it('LoginTest General Approach',()=>{

        cy.visit('https://www.saucedemo.com');
        cy.get("#user-name").type("standard_user");
        cy.get("#password").type("secret_sauce");
        cy.get("#login-button").click();
        cy.url().should('contain',"saucedemo.com");

        

     })

     //After making POM class now using POM
     // First of all import the class at the top
     //First Approach

    it('LoginTest First approach pom',()=>{

        cy.visit("https://www.saucedemo.com/");

     const ln = new Login1();

     ln.setUserName("standard_user")
     ln.setPassword("secret_sauce")
     ln.clickSubmit();
     ln.verifyLogin();


    })

    it('LoginTest second approach pom',()=>{

        cy.visit("https://www.saucedemo.com");

     const ln = new Login2();

     ln.setUserName("standard_user")
     ln.setPassword("secret_sauce")
     ln.clickSubmit();
     ln.verifyLogin();


    })


    it('LoginTest third approach pom using fixture',()=>{

    cy.visit("https://www.saucedemo.com");

    cy.fixture('swaglabsdemodata').then((data) => {   //Where swaglabsdemodata is a fixture
 
    const ln = new Login2();

     ln.setUserName(data.username)  // From fixtures data 
     ln.setPassword(data.password)
     ln.clickSubmit();
     ln.verifyLogin();
    
    })


    })


})
 