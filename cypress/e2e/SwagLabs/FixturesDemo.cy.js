describe("Fixtures",(()=>{

    it.skip('Without using fixtures Demo ',()=>{

            cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
            cy.get("input[placeholder='Username']").type("Admin");
            cy.get("input[placeholder='Password']").type("admin123");
            cy.get("button[type='submit']").click();

            cy.get(".oxd-main-menu-item.active").should('have.text',"Dashboard");
          
    })



    it('Fixtures Demo Test',()=>{

        cy.visit("https://www.saucedemo.com");

        cy.fixture('credentials').then((data)=>{

                cy.get("#user-name").type(data.username);
                cy.get("#password").type(data.password);

               
                cy.get("#login-button").click();
        })

    })

   



}))
