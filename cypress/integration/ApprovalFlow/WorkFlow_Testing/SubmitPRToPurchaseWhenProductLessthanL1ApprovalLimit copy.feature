Feature: Submit PR To Purchase When Product Less Than L1 Approval Limit Request
    I want to submit a Purchase Request  in Sulaba Website when Product less than L1 Approval Limit

    Scenario: To Login With User Credentials in Sulaba Site
        Given I open the login Page in Sulaba Website
        And I do the login by entering username as 'abarajith.sadagopan@ishafoundation.org' and password as '123'
        And I do the assertions for login Button and login successfully
        And I take the screenshot

    Scenario: To Create and Submit Purchase Request
        And I wait for "12" secs
        And I click on "dropdown" Bar
        And I wait for "12" secs
        And I click on "Purchase requests" Button
        And I wait for "45" secs
        And I click on "nav-item dropdown o_extra_menu_items" Bar
        And I wait for "12" secs
        And I click on "Purchase Requests" button
        And I wait for "8" secs
        And I click on "Create" button
        And I take the screenshot
        And I wait for "20" secs
        And I give the Following input in the Purchase Create page
            | BudgetName     | RequestDepartment | BookOFAccount     |
            | TestBudget2025 | Test IT           | IF Cottages 20-21 |
        And I read the Budget Amount available
        And I take the screenshot
        And I click on "Add a product" Button
        And I give the Following input in the 1st Row of Purchase Product page
            | Product      | Quantity | UnitOFMeasurement | Purposecode                          |
            | Slate Pencil | 10       | Case of 25Pack    | Stationery for Department/Office Use |
        And I take the screenshot
        And I verify The estimated cost for the First product is visible
        And I verify The estimated cost for All product is visible
        And I verify The Total estimated cost for the products are visible
        And I click on "Save" button
        And I wait for "8" secs
        And I click on "Submitted for Item Correction" Button
        And I take the screenshot
        And I wait for "8" secs
        And I validate The estimated cost is deducted from the Budget Amount is visible
        And I wait for "8" secs
        And I click  on "Event history" Button
        And I wait for "8" secs
        And I check the Status of the PR in the Event History is visible
        And I wait for "8" secs
        And I get the generated PR
        And I wait for "8" secs
        And I click on "o_user_menu" Bar
        And I click on "Log out" Button


    Scenario: To Login with L2 Approver User
        And I open the login Page in Sulaba Website
        And I do the login for the L2 user by entering username as 'senthilprasad.c@ishafoundation.org' and password as '123'
        And I do the assertions for login Button and login successfully
        And I take the screenshot


    Scenario: Select Single Item for Correction & Submit PR for Approval
        And I wait for "12" secs
        And I click on "dropdown" Bar
        And I wait for "12" secs
        And I click on "Purchase requests" Button
        And I wait for "45" secs
        And I click on "nav-item dropdown o_extra_menu_items" Bar
        And I wait for "12" secs
        And I click on "Purchase Requests" button
        And I wait for "8" secs
        And I search for PR
        And I click on PR
        And I wait for "8" secs
        And I take the screenshot
        And I press button "Item Variant Correction"
        And I select on 1st row checkbox for item correction
        And I wait for "8" secs
        And I take the screenshot
        And I click on "Save" Button
        And I wait for "8" secs
        And I click on "close" icon button in the modal
        And I validate The estimated cost is deducted from the Budget Amount is visible
        And I take the screenshot
        And I wait for "8" secs
        And I click  on "Event history" Button
        And I wait for "8" secs
        And I check the Status of the PR in the Event History is visible
        And I take the screenshot
        And I wait for "8" secs
        And I click on "Submitted for Ledger Correction" Button
        And I wait for "8" secs
        And I take the screenshot
        And I click  on "Event history" Button
        And I wait for "8" secs
        And I check the Status of the PR in the Event History is visible
        And I wait for "8" secs
        And I take the screenshot
        And I click on "Submited For Approval" Button
        And I wait for "8" secs
        And I click  on "Event history" Button
        And I wait for "8" secs
        And I check the Status of the PR in the Event History is visible
        And I take the screenshot
        And I wait for "8" secs
        And I click on "o_user_menu" Bar
        And I click on "Log out" Button


    Scenario: To Login with L1 Approver User
        And I open the login Page in Sulaba Website
        And I do the login for the L1 user by entering username as 'senthilprasad.c@ishafoundation.org' and password as '123'
        And I do the assertions for login Button and login successfully
        And I take the screenshot


    Scenario: Approve PR using L1 Approver credentials & Verify PR is submitted for Purchase
        And I wait for "12" secs
        And I click on "dropdown" Bar
        And I wait for "12" secs
        And I click on "Purchase requests" Button
        And I wait for "45" secs
        And I click on "nav-item dropdown o_extra_menu_items" Bar
        And I wait for "12" secs
        And I click on "Purchase Requests" button
        And I wait for "8" secs
        And I search for PR
        And I click on PR
        And I wait for "8" secs
        And I take the screenshot
        And I wait for "8" secs
        And I click on "L1 Approved" Button
        And I wait for "8" secs
        And I click  on "Event history" Button
        And I wait for "8" secs
        And I check the Status of the PR in the Event History is visible
        And I wait for "8" secs
        And I click on "Submitted to Purchase" Button
        And I wait for "8" secs
        And I click  on "Event history" Button
        And I wait for "8" secs
        And I check the Status of the PR in the Event History is visible

