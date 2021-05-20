Feature: Purchase Request Creation
    I want to create a Purchase Request  in Sulaba Website

    Scenario: Create PR for Test IT department which needs Ledger Verification

        Given I open the login Page in Sulaba Website
        And I do the login by entering username as 'abarajith.sadagopan@ishafoundation.org' and password as '123'
        And I do the assertions for login Button and login successfully
        And I take the screenshot
        And I wait for "12" secs
        And I click on "dropdown" Bar
        And I wait for "12" secs
        And I click on "Purchase requests" Button
        And I wait for "45" secs
        And I click on "nav-item dropdown o_extra_menu_items" Bar
        And I wait for "12" secs
        And I click on "Purchase Requests" button
        #And I click on "Ok" Button
        And I wait for "25" secs
        And I click on "Create" button
        And I take the screenshot
        And I wait for "20" secs
        And I give the Following input in the Purchase Create page
            | BudgetName     | RequestDepartment | BookOFAccount     |
            | TestBudget1723 | Test IT           | IF Cottages 20-21 |
        And I take the screenshot
        And I click on "Add a product" Button
        And I wait for "20" secs
        And I give the product as "Slate Pencil"
        And I wait for "45" secs
        And I give the quantity as "10"
        And I wait for "45" secs
        And I give the UnitOFMeasurement as "Case of 25Pack"
        And I wait for "45" secs
        And I give the Purpose Code as "Stationery for Department/Office Use"

        #And I give the Following input in the 1st Row of Purchase Product page
        #| Product      | Quantity | UnitOFMeasurement | Purposecode                          |
        #| Slate Pencil | 10 | Case of 25Pack | Stationery for Department/Office Use |
        And I wait for "25" secs
        And I check on Need Ledger Verification Checkbox
        And I wait for "25" secs
        And I click on "Save" Button
        And I wait for "45" secs
        And I click on "Submitted for Item Correction" Button
        And I wait for "25" secs
        And I click on "Item Variant Correction" button
        And I wait for "25" secs
        And I select on 1st row checkbox for item correction
        And I wait for "60" secs
        And I click on Save button in Item variant modal
        And I wait for "20" secs
        And I click on "close" icon button in the modal
        And I wait for "30" secs
        #And I click on "Submitted for Item Correction" Button
        #And I wait for "12" secs
        #And I click on "Submitted for Ledger Correction" Button
        #And I wait for "12" secs
        And I click on "Submitted for Finance Verification" Button
        And I wait for "45" secs
        And I click on "Finance verified" Button
        And I wait for "30" secs
        And I click on "Submited For Approval" Button