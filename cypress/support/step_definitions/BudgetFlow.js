// type definitions for Cypress object "cy"
// <reference types="cypress" />

import {And} from "cypress-cucumber-preprocessor/steps";
import HomePage from '../../integration/PageObjects/HomePage';
import BudgetPage from '../../integration/PageObjects/BudgetPage';
import BudgetLineModal from "../../integration/PageObjects/BudgetLineModal";
import BookOFAccounts from "../../integration/PageObjects/BookOFAccounts";
 
//Object Creation for PageObject Page Class and assigning it to a constant variable
 
const homePage = new HomePage();
const budgetPage = new BudgetPage();
const budgetLineModal = new BudgetLineModal();
const bookOFAccounts = new BookOFAccounts();


beforeEach(() => {
    // alias the users fixtures
   
    cy.fixture('user.json').as('user');
  })
 
//test steps 

And('I give the Following input in the Budget Create page',datatable => {
    datatable.hashes().forEach(row => {
        budgetPage.getBudgetName().type(row.BudgetName);

        budgetPage.getRequestDepartmentDropDown().click().then(function() {
        budgetPage.getSearchBox().clear().type(row.RequestDepartment);
        budgetPage.setRequestDepartment(row.RequestDepartment);
    })
    
        budgetPage.getResponsiblePersonDropBox().click().then(function(){
        budgetPage.getResponsiblePersonSearchBox().clear().type(row.responsible_person);
        budgetPage.getResponsiblePersonSelectorOption({ timeout: 15000 }).click({multiple:true},{force:true});

    })
        budgetPage.getBookOFAccountsDropDown().click().then(function() {
        budgetPage.getSearchBoxBookofAccounts().clear().type(row.BookOFAccount);
        
        bookOFAccounts.getBookOFAccounts_Cottages_Selector({ timeout: 15000 }).click({multiple:true},{force:true});
    })
})    

})


And("I enter the Budget Period Date From as {string}",(PeriodDateFrom) => {

    budgetPage.getPeriodDateFrom().type(PeriodDateFrom);

})

And("I enter the Budget Period Date To as {string}",(PeriodDateTo) => {

 budgetPage.getPeriodDateTo().type(PeriodDateTo);


})


And("I enter the Budgetary position as {string}",(budgetaryposition1) => {

        budgetLineModal.getBudgetaryPosition().type(budgetaryposition1);
        budgetLineModal.setBudgetaryPosition(budgetaryposition1);
       
        
})

And('I enter the Planned Amount as {string}',(PlannedAmount1) => {

    budgetLineModal.getPlannedAmount().clear().type(PlannedAmount1);
        
       
})

And('I give the Complete Name as {string}',(CompleteName) => {

    budgetLineModal.getCompleteName().type(CompleteName);

})

And("I give the Budget Line Period From Date as {string}",(BudgetLineFrom) => {
        
        
        budgetLineModal.getPeriodDateFrom().click({multiple:true});
        budgetLineModal.getPeriodDateFrom().type(BudgetLineFrom).type('{enter}');
        
})


And("I give the Budget Line Period Date To as {string}",(BudgetLineTo) => {

        budgetLineModal.getPeriodDateTo().click({multiple:true},{force:true}).pause();
        budgetLineModal.getPeriodDateTo().type(BudgetLineTo);
        
    })

And('I get the generated Budget Name',(CompleteName) => {
    cy.get("body > div.o_action_manager > div > div.o_content > div > div.o_form_sheet_bg > div.clearfix.position-relative.o_form_sheet > div.oe_title > h1 > span").then(function($elem) {
         //budget_Name = $elem;
        
         cy.fixture("user").then((user)=>{

            CompleteName  = user.CompleteName;
            
            cy.writeFile('cypress/fixtures/BudgetName.json',{budgetname : $elem.text() + "" + "|" + ""+ CompleteName});
           
        
          })
        
     })
})

And("I give the Company as {string}",(Company) =>{

    budgetPage.getCompanySelector().type(Company);
    //budgetPage.setCompanySelector(Company);

})

And("I enter the Purpose code as {string}", (PurposeCode1) => {

    budgetLineModal.getPurposeCode().type(PurposeCode1);
    budgetLineModal.setPurposeCode(PurposeCode1);
    
})







