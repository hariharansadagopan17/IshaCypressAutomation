
class PurchaseRequestPage {

  getPurchaseRequestPlusButton() {

    return cy.xpath('/html/body/header/nav/ul[2]/li[2]/a/i');
  }




  getPurchaseRequestMenuBar() {

    return cy.xpath('/html/body/header/nav/ul[2]/li[3]/a');
  }

  getBudgetNameDropDown() {

    return cy.xpath('/html/body/div[2]/div/div[2]/div/div[2]/div[2]/div[3]/table[1]/tbody/tr[8]/td[2]/div/div');
  }

  getRequestDepartmentDropDown() {

    //return cy.xpath('/html/body/div[2]/div/div[2]/div/div[2]/div[2]/div[3]/table[1]/tbody/tr[3]/td[2]/div/div');


  }

  getItemCorrection_Save_Button() {

    return cy.get('div[class="modal o_technical_modal show"] > div > div > footer > div > div.o_form_buttons_edit > button.btn.btn-primary.o_form_button_save > span');
  }

  getLedgerReview_Save_Button() {


  }
  getSearchBoxRequestDepartment() {

    return cy.xpath('/html/body/div[2]/div/div[2]/div/div[2]/div[2]/div[3]/table[1]/tbody/tr[3]/td[2]/div/div/input');
  }
  getSearchBoxBudgetName() {

    return cy.xpath('/html/body/div[2]/div/div[2]/div/div[2]/div[2]/div[3]/table[1]/tbody/tr[8]/td[2]/div/div/input');
  }


  getPurchaseRequestMenuLink() {

    return cy.xpath('/html/body/header/nav/ul[2]/li[2]/ul/li[2]/div/a[1]/span');

  }

  getPurchaseCreateButton() {

    return cy.get('body > div.o_action_manager > div > div.o_cp_controller > div > div:nth-child(2) > div.o_cp_left > div > div > button.btn.btn-primary.o_list_button_add > span');
  }


  getCompanySelectorButton(string) {

    return cy.get('select[name="company_id"]').select(string).should('have.value', '3');
  }


  getRequestDepartment() {
    return cy.get('div[name="requesting_department_id"]');

    //cy.contains('').trigger('mouseover')
  }

  getBookOFAccounts() {

    return cy.get('div[name="book_of_account"]');
  }


  setRequestDepartment(string) {
    return cy.contains(string).trigger('mouseover').click({ multiple: true });

  }

  getBudgetLineSelector() {

    return cy.get('div[name="budget_line_id"]');
  }

  setBudgetLineSelector(string) {

    return cy.contains(string).trigger('mouseover').click({ multiple: true });
  }

  getBookOFAccountsDropDown() {

    return cy.xpath('/html/body/div[2]/div/div[2]/div/div[2]/div[2]/div[3]/table[1]/tbody/tr[10]/td[2]/div/div');
  }

  getSearchBookOFAccounts() {

    return cy.xpath('/html/body/div[2]/div/div[2]/div/div[2]/div[2]/div[3]/table[1]/tbody/tr[10]/td[2]/div/div/input');
  }
  getBookOFAccoutsSelect() {

    return cy.get('body > div.o_action_manager > div > div.o_content > div > div.o_form_sheet_bg > div.clearfix.position-relative.o_form_sheet > div.o_group > table:nth-child(1) > tbody > tr:nth-child(10) > td:nth-child(2) > div');

  }

  getAdd_Product_Button() {

    return cy.contains('Add a product');
  }

  getSearchBoxProductTemplate1stRow() {

    //return cy.xpath('/html/body/div[2]/div/div[2]/div/div[2]/div[2]/div[4]/div[2]/div[1]/div/div[2]/div/table/tbody/tr[1]/td[1]/div/div/input');

    //return cy.get('div[name="line_ids"] > div.o_list_view > div > table > tbody > tr:nth-child(1) > td > div > div > input');

    return cy.get("div[name='product_template_id']");

  }

  getItemCorrectionCheckbox1stRow() {

    //return cy.get('table[class="o_list_table table table-sm table-hover table-striped o_list_table_ungrouped"] > tbody >tr:nth-child(1) > td:nth-child(5)').click({ multiple: true }, { force: true });
    //return cy.get('div[name="item_verified"]').click();
    return cy.xpath('//div[@class="modal-dialog modal-lg"]/div/main/div/div/div/div/div[2]/div/table/tbody/tr[1]/td[5]');

  }

  getLedgerReviewSave_Button() {

    return cy.get('div[class="modal o_technical_modal show"] > div > div > footer > div > div.o_form_buttons_edit > button.btn.btn-primary.o_form_button_save > span')
  }
  getItemCorrectionCheckBox() {



    return cy.get('div[name="item_verified"] > input').parent('.custom-checkbox').click({ position: 'left' })

    //return cy.get('div[name="item_verified"] > input').check({ force: true }).should('be.checked')

  }

  getItemCorrectionCheckbox2rdRow() {
    return cy.get('table[class="o_list_table table table-sm table-hover table-striped o_list_table_ungrouped"] > tbody >tr:nth-child(2) > td:nth-child(6)');
  }

  getItemCorrectionCheckbox3rdRow() {

    return cy.get('table[class="o_list_table table table-sm table-hover table-striped o_list_table_ungrouped"] > tbody >tr:nth-child(3) > td:nth-child(6)');
  }


  getLedgerFieldVerificationCheckBoxSelector() {


    return cy.get('div[name="line_ids"] > div.o_list_view > div > table > tbody > tr:nth-child(1) > td:nth-child(13)');
  }

  getLedgerVerificationCheckBox() {


    return cy.get('div[name="needs_ledger_review"] > input').parent('.custom-checkbox').click({ position: 'left' })
  }
  getLedgerReviewedCheckBoxSelector() {

    return cy.get('div[name="ledger_review_lines"] > div.o_list_view > div > table > tbody > tr.o_data_row > td:nth-child(7)');
  }

  getLedgerReviewedCheckBox() {

    return cy.get('div[name="ledger_reviewed"] > input').parent('.custom-checkbox').click({ position: 'left' })
  }

  getSearchBoxProductTemplate2rdRow() {

    return cy.get('div[name="line_ids"] > div.o_list_view > div > table > tbody > tr:nth-child(2) > td:nth-child(1) > div > div > input');

  }
  getProduct_Template() {

    return cy.get('div[name="product_template_id"]');
  }

  getProduct_Template_new() {

    return cy.get('#o_field_input_739 > div.o_list_view > div > table > tbody > tr.o_data_row.o_selected_row > td.o_data_cell.o_field_cell.o_list_many2one.o_product_configurator_cell');
    //return cy.xpath('/html/body/div[2]/div/div[2]/div/div[2]/div[2]/div[4]/div[2]/div[1]/div/div[2]/div/table/tbody/tr[2]/td[1]/div');
  }


  setProduct_Template(string) {

    return cy.contains(string).trigger('mouseover').click({ multiple: true });
  }
  setProduct_Template_Slate_Pencil_Item_selector() {


    return cy.xpath("/html/body/ul[12]/li/a")

  }


  getOkButton(string) {

    return cy.contains(string);
    //return cy.get('#modal_621 > div > div > footer > button');
  }
  getAddButton() {


    return cy.xpath('//button/span[contains(text(),"Add")]');
    //return cy.get('#modal_884 > div > div > footer > div > footer > button.btn.btn-primary.o_sale_product_configurator_add > span').should('be.visible').click({multiple:true},{force:true});
    //return cy.get('span').should('contain','Add').contains('Add',{timeout:8000}).should('be.visible').click({multiple:true},{force:true});
  }

  getItemVariantCorrectionButton(string) {

    return cy.xpath('//button/span[contains(text(),"' + string + '")]');

  }
  getQuantitySelector() {

    return cy.xpath('//*[@name="line_ids"]/div[2]/div/table/tbody/tr[1]/td[3]');
  }
  getQuantityField1stRowSelector() {

    //return cy.xpath('/html/body/div[2]/div/div[2]/div/div[2]/div[2]/div[4]/div[2]/div[1]/div/div[2]/div/table/tbody/tr[1]/td[3]');
    //return cy.get('div[name="line_ids"] > div.o_list_view > div > table > tbody > tr >td:nth-child(3) > input[name="product_qty"]');

    //return cy.xpath('//*[@name="line_ids"]/div[2]/div/table/tbody/tr[1]/td[3]/input');

    return cy.get("div[name='product_qty']");
  }

  getQuantityField2rdRow() {

    return cy.xpath('//*[@name="line_ids"]/div[2]/div[1]/table/tbody/tr[2]/td[3]'); s
  }
  getQuantitySelector_New() {

    return cy.xpath('//*[@name="line_ids"]/div[2]/div[1]/table/tbody/tr[2]/td[3]/input[@name="product_qty"]');

    //return cy.get('div[name="line_ids"] > div.o_list_view > div > table > tbody > tr:nth-child(2) > td:nth-child(3) > input[name="product_qty"]');
  }

  getProduct_UoM_Selector_NextRow() {

    return cy.get('div[name="product_uom_id"]');
    //return cy.get('#o_field_input_3170 > div.o_list_view > div > table > tbody > tr.o_data_row.o_selected_row > td.o_data_cell.o_field_cell.o_list_many2one.oe_inline > div');
  }

  getProduct_UoM_Selector() {

    return cy.get('div[name="product_uom_id"]').click({ force: true });
  }

  getProduct_UoM_DropDown() {

    return cy.get('div[name="line_ids"] > div.o_list_view > div > table > tbody > tr:nth-child(1) > td:nth-child(4) > div > div');
  }

  getSearchBoxProduct_UoM() {

    // return cy.get('div[name="line_ids"] > div.o_list_view > div > table > tbody > tr:nth-child(1) > td:nth-child(4) > div > div > input');
    return cy.get("div[name='product_uom_id']");

  }

  getSearchBoxProduct_UoM2rdRow() {

    return cy.get('div[name="line_ids"] > div.o_list_view > div > table > tbody > tr:nth-child(2) > td:nth-child(4) > div > div > input');
  }
  getProduct_UoM_DropDown2rdRow() {

    return cy.get('div[name="line_ids"] > div.o_list_view > div > table > tbody > tr:nth-child(2) > td:nth-child(4) > div > div');
  }
  setProduct_UoM_Selector(string) {

    return cy.contains(string).should('be.visible').trigger('mouseover').click({ multiple: true });
  }

  getPurposeCode_Selector() {


    return cy.get('div[name="purpose_code"]');

  }

  getPurposeCodeDropDown() {

    return cy.get('div[name="line_ids"] > div.o_list_view > div > table > tbody > tr:nth-child(1) > td:nth-child(7) > div > div');
  }

  getSearchBoxPurposeCode() {

    //return cy.get('div[name="line_ids"] > div.o_list_view > div > table > tbody > tr:nth-child(1) > td:nth-child(7) > div > div > input');
    return cy.get("div[name='purpose_code']");
  }

  getPurposeCodeDropDown2rdRow() {

    return cy.get('div[name="line_ids"] > div.o_list_view > div > table > tbody > tr:nth-child(2) > td:nth-child(7) > div  > div');
  }

  getSearchBoxPurposeCode2rdRow() {

    return cy.get('div[name="line_ids"] > div.o_list_view > div > table > tbody > tr:nth-child(2) > td:nth-child(7) > div > div > input');
  }
  getPurposeCode_Selector_New() {

    return cy.get('div[name="purpose_code"]');
  }

  setPurposeCode_Selector(string) {

    return cy.contains(string).trigger('mouseover').click({ multiple: true });

  }

  setBookOFAccounts_Selector(string) {

    return cy.contains(string).trigger('mouseover').click({ multiple: true });
  }

  getItemCorrectionButton() {

    return cy.xpath('/html/body/div[2]/div/div[2]/div/div[2]/div[1]/div[5]/button[1]');
  }

  getExceptionMarks() {

    return cy.get('[name="exception_remarks"]');
  }
  getLedgerCorrectionButton() {

    return cy.xpath('//*[contains(text(),"Submitted for Ledger Correction")]');
  }

  getSubmitForApproval() {

    return cy.xpath('//*[contains(text(),"Submited For Approval")]');
  }

  getPurchaseRequest() {



    /*return  cy.get("body > div.o_action_manager > div > div.o_content > div > div.o_form_sheet_bg > div.clearfix.position-relative.o_form_sheet > h1 > span").then(function($elem){


     let pr = cy.log($elem.text());


   }).as('PR');*/


    return cy.get('body > div.o_action_manager > div > div.o_content > div > div.o_form_sheet_bg > div.clearfix.position-relative.o_form_sheet > h1 > span').then(function ($elem) {

      cy.writeFile('cypress/fixtures/purchaseRequest.json', { pr: $elem.text() });

    })






  }

  getSearchPr() {

    return cy.xpath('/html/body/div[2]/div/div[1]/div/div[1]/div/div/div/input');
  }


  getL1ApprovalButton() {


    //const  L1_approval = 'body > div.o_action_manager > div > div.o_content > div > div.o_form_sheet_bg > div.o_form_statusbar > div:nth-child(7) > button:nth-child(3)';
    //return cy.xpath('//*[contains(text(),"L1 Approved")]');

    return cy.get("body > div.o_action_manager > div > div.o_content > div > div.o_form_sheet_bg > div.o_form_statusbar > div:nth-child(7) > button:nth-child(3)");
  }


  getSubmitForPurchaseButton() {

    return cy.get('body > div.o_action_manager > div > div.o_content > div > div.o_form_sheet_bg > div.o_form_statusbar > div:nth-child(7) > button:nth-child(1)')
  }
}

export default PurchaseRequestPage