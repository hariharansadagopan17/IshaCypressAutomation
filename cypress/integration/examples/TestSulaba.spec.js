// type definitions for Cypress object "cy"
  /// <reference types="cypress" />


  describe('Sulaba Cypress Test', function() {
    it('Visits the Sulaba Portal Page and click on  the Budget icon', function() {
    //Visit the Demo QA Website
    cy.visit("https://purchase.sushumna.isha.in/web/login");
    
    
    cy.fixture('user').then((user) => {
      // "this" is still the test context object
     
      const Username = user.username;
      const password = user.password;
     
       cy.get('input[name="login"]').type(Username);

      cy.get('input[name="password"]').type(password);

      cy.screenshot('Capturing the screenshot before successful login');

    })
  

    //Clicking on Sign in Button 

     cy.get('#wrapwrap > main > div > div.container > div > div > div > div > form > div.clearfix.oe_login_buttons.text-center.mb-1 > button').click({multiple:true});
  

     //Taking screenshots

     cy.screenshot('Capturing the screenshot after successful login');
  
     // Clicking on Interactions Menu Item
  //cy.get(':nth-child(5) > :nth-child(1) > .avatar > svg').click();
 
    //Verify number of items present under the Widget Tab
    //cy.get(':nth-child(5) > .element-list > .menu-list > li').should('have.length',5);
 
  })
  })