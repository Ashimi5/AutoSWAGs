describe("My Test Suite",(()=>{

    it('Data Driven Test',()=>{

            cy.fixture("swaglabsdemodata").then((data)=>{

                cy.visit("https://www.saucedemo.com/");

                data.forEach((userdata)=>{

                    cy.get('#first-name').clear();
                    cy.get("#last-name").clear();
                    cy.get("#postal-code").clear();
                    cy.get(("#user-name")).type(userdata.username);
                    cy.get("#password").type(userdata.password);
                    cy.get("#login-button").click();
                  

                if(userdata.username=='standard_user' && userdata.password=="secret_sauce"){

                    cy.url().should('contain',userdata.expected);
                    cy.get("#react-burger-menu-btn").click();                   
                    cy.get("#logout_sidebar_link").click();        //for logout

                }
                //else{

            //  cy.get(".oxd-text.oxd-text--p.oxd-alert-content-text").should("have.text",userdata.expected);
               // }
                    

                })


            })

    
    })

}))
