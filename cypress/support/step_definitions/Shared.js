import { Given, And, After } from "cypress-cucumber-preprocessor/steps";
import HomePage from '../../integration/PageObjects/HomePage';
import BudgetPage from '../../integration/PageObjects/BudgetPage';
import BudgetLineModal from "../../integration/PageObjects/BudgetLineModal";
import BookOFAccounts from "../../integration/PageObjects/BookOFAccounts";
import PurchaseRequestPage from "../../integration/PageObjects/PurchaseRequestPage";
import ApprovalDashboard from "../../integration/PageObjects/ApprovalDashBoard";
import ProductTablePage from "../../integration/PageObjects/ProductTablePage";


const homePage = new HomePage();
const budgetPage = new BudgetPage();
const budgetLineModal = new BudgetLineModal();
const bookOFAccounts = new BookOFAccounts();
const purchaseRequestPage = new PurchaseRequestPage();
const approvaldashboard = new ApprovalDashboard();
const productTablePage = new ProductTablePage();




Given('I open the login Page in Sulaba Website', () => {
    cy.visit(Cypress.env('url'));

})


And('I do the login by entering username as {string} and password as {string}', (Username, Password) => {

    homePage.getUserName().type(Username);
    homePage.getPassword().type(Password);


})

And('I do the login for the L2 user by entering username as {string} and password as {string}', (Username, Password) => {

    homePage.getUserName().type(Username);
    homePage.getPassword().type(Password);

})

And("I take the screenshot", () => {

    cy.screenshot();
})
And("I give the Following input in the Purchase Create page", datatable => {
    datatable.hashes().forEach(row => {

        cy.wait(10000);
        purchaseRequestPage.getRequestDepartment().type(row.RequestDepartment);
        purchaseRequestPage.setRequestDepartment(row.RequestDepartment);



        /*purchaseRequestPage.getRequestDepartmentDropDown().click().then(function () {

            purchaseRequestPage.getSearchBoxRequestDepartment().type(row.RequestDepartment);
            budgetPage.setRequestDepartment(row.RequestDepartment);
            }) */


        cy.wait(30000);
        purchaseRequestPage.getBudgetLineSelector().type(row.BudgetName);
        cy.wait(30000);
        purchaseRequestPage.setBudgetLineSelector(row.BudgetName);

        /*purchaseRequestPage.getBudgetNameDropDown().click().then(function(){

            purchaseRequestPage.getSearchBoxBudgetName().clear().type(row.BudgetName);
            purchaseRequestPage.setBudgetLineSelector(row.BudgetName);
        })*/
        cy.wait(30000);
        purchaseRequestPage.getBookOFAccounts().type(row.BookOFAccount);
        cy.wait(30000);
        purchaseRequestPage.setBookOFAccounts_Selector(row.BookOFAccount);

        /*purchaseRequestPage.getBookOFAccountsDropDown().click().then(function() {
            purchaseRequestPage.getSearchBookOFAccounts().clear().type(row.BookOFAccount);
            purchaseRequestPage.setBudgetLineSelector(row.BookOFAccount);

        })*/



        cy.wait(8000);
    })
})


And("I give the product as {string}", (Product) => {

    cy.wait(10000);
    productTablePage.getProduct1rdRowDropDown().click({ multiple: true }).then(function () {

        purchaseRequestPage.getSearchBoxProductTemplate1stRow().type(Product);
        purchaseRequestPage.setProduct_Template(Product);
        cy.wait(5000);
        purchaseRequestPage.getAddButton().click({ multiple: true });
        cy.wait(5000);
    })



})

And("I give the quantity as {string}", (Quantity) => {

    purchaseRequestPage.getQuantitySelector().type(Quantity);

})


And("I give the Following input in the 1st Row of Purchase Product page", datatable => {
    cy.wait(10000);
    datatable.hashes().forEach(row => {


        purchaseRequestPage.getSearchBoxProductTemplate1stRow().type(row.Product);
        purchaseRequestPage.setProduct_Template(row.Product);
        cy.wait(10000);
        purchaseRequestPage.getAddButton().click({ multiple: true });
        cy.wait(5000);
    })
    cy.wait(5000);
    purchaseRequestPage.getQuantitySelector().click({ multiple: true }).then(function () {

        purchaseRequestPage.getQuantityField1stRowSelector().clear().type(row.Quantity);
    })

    cy.wait(5000);
    purchaseRequestPage.getProduct_UoM_DropDown().click({ multiple: true }).then(function () {
        purchaseRequestPage.getSearchBoxProduct_UoM().should('be.visible').type(row.UnitOFMeasurement);
        purchaseRequestPage.setProduct_UoM_Selector(row.UnitOFMeasurement);
    })

    purchaseRequestPage.getPurposeCodeDropDown().click({ multiple: true }).then(function () {

        purchaseRequestPage.getSearchBoxPurposeCode().type(row.Purposecode);
        purchaseRequestPage.setPurposeCode_Selector(row.Purposecode);
    })

    cy.wait(8000);
})


And("I give the Following input in the 2rd Row of Purchase Product page", datatable => {

    datatable.hashes().forEach(row => {


        productTablePage.getProduct2rdRowDropDown().click().then(function () {

            purchaseRequestPage.getSearchBoxProductTemplate2rdRow().type(row.Product);
            purchaseRequestPage.setProduct_Template(row.Product);
            cy.wait(9000);
            purchaseRequestPage.getAddButton();
        })

        cy.wait(5000);
        purchaseRequestPage.getQuantityField2rdRow().click({ multiple: true }, { force: true });
        purchaseRequestPage.getQuantitySelector_New().type(row.Quantity);

        purchaseRequestPage.getProduct_UoM_DropDown2rdRow().click({ multiple: true }, { force: true }).then(function () {

            purchaseRequestPage.getSearchBoxProduct_UoM2rdRow().type(row.UnitOFMeasurement);
            purchaseRequestPage.setProduct_UoM_Selector(row.UnitOFMeasurement);
        })

        cy.wait(5000);
        purchaseRequestPage.getPurposeCodeDropDown2rdRow().click({ multiple: true }, { force: true }).then(function () {


            purchaseRequestPage.getSearchBoxPurposeCode2rdRow().type(row.Purposecode);
            purchaseRequestPage.setPurposeCode_Selector(row.Purposecode);
        })

        cy.wait(8000);
    })
})

And("I generate the Budget Amount available", function () {

    cy.get("body > div.o_action_manager.mk_chatter_position_sided > div > div.o_content > div > div.o_form_sheet_bg > div.clearfix.position-relative.o_form_sheet > div.o_group > table:nth-child(1) > tbody > tr:nth-child(6) > td:nth-child(2) > span").then(function ($elem) {
        cy.log($elem.text())
    })



})

And("I check on Need Ledger Verification Checkbox", () => {

    purchaseRequestPage.getLedgerFieldVerificationCheckBoxSelector().should('be.visible').click();
    cy.wait(7000);
    purchaseRequestPage.getLedgerVerificationCheckBox();

})

And("I check on Ledger Reviewed Checkbox", () => {


    purchaseRequestPage.getLedgerReviewedCheckBoxSelector().should('be.visible').click();
    cy.wait(7000);
    purchaseRequestPage.getLedgerReviewedCheckBox();

})
And("I do not generate the Budget Amount available", function () {

    cy.get("body > div.o_action_manager.mk_chatter_position_sided > div > div.o_content > div > div.o_form_sheet_bg > div.clearfix.position-relative.o_form_sheet > div.o_group > table:nth-child(1) > tbody > tr:nth-child(6) > td:nth-child(2) > span").then(function ($elem) {
        cy.log($elem.text()).should('not.be.visible');
    })



})
And('I give comment as {string} in exception remarks', (exception_remarks) => {

    purchaseRequestPage.getExceptionMarks().type(exception_remarks);

})

// capture snapshot
And('I capture snapshot and compare {string}', (string) => {
    cy.matchImageSnapshot(string);
});


/*
 assertions
*/
And(`I should see title {string}`, (title) => {
    cy.title().should('include', title)
})
And(`I should see {string} text displayed`, (string) => {
    cy.contains(string).invoke('show').should('be.visible');
})
And('The header should contain {string}', (string) => {
    cy.get('h1').should('contain', string)
})
And('The sub-header should contain {string}', (string) => {
    cy.get('h2').should('contain', string)
})
And('The header title should contain {string}', (string) => {
    cy.get('.header__title').invoke('text').then(function (text) {
        expect(text).to.include(string);
    })
})

And('The element should contain {string}', (string) => {


    cy.xpath('//*[contains(text(),"' + string + '")]').should('be.visible');




})

And('The element should not contain {string}', (string) => {


    cy.xpath('//*[contains(text(),"' + string + '")]').should('not.be.visible');




})

And(`I should not see {string}`, (string) => {
    cy.contains(string, { timeout: 0 }).should('not.be.visible');
})
And(`I should not see text {string}`, (string) => {
    cy.xpath('//*[contains(text(),"' + string + '")]')
        .should('not.be.visible');
})

And(`I should not see {string} text displayed`, (string) => {
    cy.contains(string).invoke('show').should('not.be.visible');
})
And('The current url should contain {string}', function (string) {
    cy.url()
        .should('contain', string)
});


And('I click on {string} Bar', (string) => {

    //cy.xpath('//*[contains(text(),"' + string + '")]')

    cy.xpath('//li[@class="' + string + '"]').click({ multiple: true }, { force: true });

});
/**
 * click action
 */
And('I click on {string} button', (string) => {

    cy.wait(10000);
    cy.get('span').should('contain', string).contains(string, { timeout: 8000 }).should('be.visible').click({ multiple: true }, { force: true });

    //cy.contains(string, { timeout: 8000 }).should('not.be.visible');
})

And('I click on {string} Button', (string) => {

    cy.wait(10000);
    cy.contains(string).click();
})

And('I click on {string} Stage Button', (string) => {

    cy.wait(10000);
    cy.get('button').should('contain', string).contains(string).should('be.visible').click();
})

And('I press button {string}', (string) => {
    cy.contains(string)
        .click();
    cy.wait(1000);
});

And('I click on Save button in Item variant modal', () => {


    purchaseRequestPage.getItemCorrection_Save_Button().should('be.visible').click({ force: true });
})


And('I click on Save button in Ledger variant modal', () => {


    purchaseRequestPage.getLedgerReviewSave_Button().should('be.visible').click({ force: true });
})
// url navigation
And('I go to {string}', (string) => {
    cy.visit(string);
});
And('I navigate to {string}', (string) => {
    cy.visit(string);
})
And('I reload page {string}', (string) => {
    cy.reload();
})
And('I go back {string}', (string) => {
    cy.go('back');
})
And('I go forward {string}', (string) => {
    cy.go('forward');
})
And('I go back to homepage', () => {
    cy.go('back')
})

// window handling
And('I wait for appReady state', () => {
    cy.window()
        .should('have.property', 'appReady', true);
})

// wait cmmds
And('I wait for {string} secs', (string) => {
    cy.wait(string * 1000);
})
And('I wait for few secs', () => {
    cy.wait(2000);
})

// logs
And('I log {string}', (string) => {
    cy.log(string);
    console.log(string);
})

And("I click on {string} icon button", (string) => {

    //cy.get('button[name').should('contain',string).contains(string,{timeout:8000}).should('be.visible').click({multiple:true},{force:true});

    cy.xpath('//button[@title="' + string + '"]').click({ multiple: true }, { force: true });
})
// check URL response status - 200
And('I check all URL response status should be 200', function () {
    cy.checkURLResponseStatus();
})

And("I give the rejection reason as {string}", (string) => {

    cy.xpath('//input[@name="rejected_reason"]').should('be.visible').type(string);
})

And("I give the Quantity as {string}", (string) => {

    cy.get('div[name="line_ids"]> div.o_list_view > div > table > tbody > tr.o_data_row.text-danger > td:nth-child(4)').should('be.visible').click({ multiple: true }, { force: true });
    cy.wait(5000);
    cy.xpath('//input[@name="product_qty"]').should('be.visible').type(string);

})

And("I clear the UnitOFMeasurement", () => {

    cy.wait(5000);
    purchaseRequestPage.getProduct_UoM_Selector().clear();

})
And('I get the generated Budget Name as ', function () {
    cy.get("body > div.o_action_manager > div > div.o_content > div > div.o_form_sheet_bg > div.clearfix.position-relative.o_form_sheet > div.oe_title > h1 > span").then(function ($elem) {
        cy.log($elem.text())
    })
})


And("I give the UnitOFMeasurement as {string}", (UnitOFMeasurement) => {


    purchaseRequestPage.getProduct_UoM_Selector().type(UnitOFMeasurement);
    cy.wait(8000);
    purchaseRequestPage.setProduct_UoM_Selector(UnitOFMeasurement);



})



And("I give the Purpose Code as {string}", (PurposeCode) => {

    purchaseRequestPage.getPurposeCode_Selector().type(PurposeCode);
    cy.wait(8000);
    purchaseRequestPage.setPurposeCode_Selector(PurposeCode);

})
And('I do the assertions for login Button and login successfully', () => {


    homePage.getSignInButton().click({ multiple: true });
})


And('I click on Purchase Request App button', () => {

    homePage.getPurchaseRequestIcon().click({ multiple: true });
})

And('I click on Purchase Plus Button', () => {

    purchaseRequestPage.getPurchaseRequestPlusButton().click({ multiple: true });
    cy.wait(8000);
})

And('I click on Purchase Request Menu bar', () => {

    purchaseRequestPage.getPurchaseRequestMenuBar().click({ multiple: true });
})


And('I cLick on Purchase Request Link', () => {

    purchaseRequestPage.getPurchaseRequestMenuLink().click({ multiple: true });
    cy.wait(15000);
})


And('I click the MenuBar button', () => {


    homePage.getMenuBarButton().click({ multiple: true });

})


And("I click on {string} button for variant checking", (string) => {

    purchaseRequestPage.getItemVariantCorrectionButton(string).should('be.visible').click();


})
And('I click on Create Button', () => {

    purchaseRequestPage.getPurchaseCreateButton().click({ multiple: true });
})

And("I click on PR as {string}", (string) => {
    cy.xpath("//*[contains(text(),'" + string + "')]")
        .first().click();
})

And('I click on Save Button', () => {

    purchaseRequestPage.getSaveButton().click({ multiple: true });
})


And('I click on Add Button', () => {

    purchaseRequestPage.getAddButton().click({ multiple: true });
})


And('I get the generated PR', function () {

    purchaseRequestPage.getPurchaseRequest();

})


And('I submit for Item Correction', () => {

    purchaseRequestPage.getItemCorrectionButton().click({ multiple: true });
})

And('I submit for Ledger Correction', () => {

    purchaseRequestPage.getLedgerCorrectionButton().click({ multiple: true });
})

And('I submit for Approval', () => {

    purchaseRequestPage.getSubmitForApproval().click({ multiple: true });
})

And('I click on Account MenuBar', () => {

    homePage.getAccountMenuBar().click({ multiple: true });
})

And("I search for respective department as {string}", (SearchString) => {


    cy.xpath('//input[@role="searchbox"]').should('be.visible').type(SearchString + "{enter}");


})

And("I enter the PR limit as {string}", (PRlimit) => {

    cy.xpath('//input[@name="pr_l1_limit"]').clear().type(PRlimit);

})

And("I give the company as {string}", (Company) => {

    purchaseRequestPage.getCompanySelectorButton(Company);
})

And("I give the respective department as {string}", (RequestDepartment) => {


    purchaseRequestPage.getRequestDepartment().type(RequestDepartment);
    purchaseRequestPage.setRequestDepartment(RequestDepartment);

})

And("I give the Book OF Accounts as {string}", (bookofaccounts) => {

    purchaseRequestPage.getBookOFAccounts().type(bookofaccounts);
    purchaseRequestPage.setBookOFAccounts_Selector(bookofaccounts);

})


And("I select on 1st row checkbox for item correction", () => {


    purchaseRequestPage.getItemCorrectionCheckbox1stRow().should('be.visible').click();
    cy.wait(9000);
    purchaseRequestPage.getItemCorrectionCheckBox()

})

And("I select on 2rd row checkbox for item correction", () => {


    purchaseRequestPage.getItemCorrectionCheckbox2rdRow().should('be.visible').click({ multiple: true }, { force: true });
})

And("I select on 3rd row checkbox for item correction", () => {

    purchaseRequestPage.getItemCorrectionCheckbox3rdRow().should('be.visible').click({ multiple: true }, { force: true });
})

And("I click on {string} icon button in the modal", (string) => {

    cy.xpath('//button[@class="' + string + '"]').click({ multiple: true }, { force: true });

})
And("I give the BudgetName as {string}", (BudgetName) => {

    purchaseRequestPage.getBudgetLineSelector().type(BudgetName);
    purchaseRequestPage.setBudgetLineSelector(BudgetName);
})
And('I open the login Page in Sulaba Website', () => {
    cy.visit(Cypress.env('url'));

})

And('I search for PR', () => {


    cy.fixture("purchaseRequest").then((purchaseRequest) => {

        const PR = purchaseRequest.pr;

        purchaseRequestPage.getSearchPr().type(PR);



    })

})

And('I click on PR', (PR) => {


    cy.fixture("purchaseRequest").then((purchaseRequest) => {

        PR = purchaseRequest.pr;


        cy.xpath("//td[contains(text(),'" + PR + "')]")
            .first().click({ multiple: true });


    })


})
And('I click on Approval Dashboard App button', () => {

    homePage.getApprovalDashboardIconButton().click({ multiple: true });

})

And('I click on Pending Request Approval button', () => {

    approvaldashboard.getPendingApprovalDashboardButton().click({ multiple: true });

})

And("I assert that the quantity is not having {string} displayed", (string) => {

    cy.xpath('//*[contains(text(),"' + string + '")]').then(function ($elem) {



        assert.isNotNumber($elem.text());

    })

})