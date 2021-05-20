Feature: Purchase Request Creation 
I want to create a Purchase Request  in Sulaba Website
 
Scenario: Create PR for Test IT to change the L1 Approval within limit
 
Given I open the login Page in Sulaba Website
And I do the login by entering username as 'abarajith.sadagopan@ishafoundation.org' and password as '123'
And I do the assertions for login Button and login successfully
#And I take the screenshot
And I wait for "12" secs
And I click on "dropdown" Bar
And I wait for "12" secs
And I click on "Purchase" Button
And I wait for "45" secs
And I click on "nav-item dropdown o_extra_menu_items" Bar
And I wait for "12" secs
And I click on "PR/Bills L1 approval limits" button
#And I click on "Ok" Button
And I wait for "8" secs
And I search for respective department as "Test IT"
And I enter the PR limit as "700"
And I click on "Save" Button
And I wait for "8" secs
And I click on "dropdown" Bar
And I wait for "12" secs
And I click on "Purchase requests" Button
And I wait for "45" secs
And I click on "nav-item dropdown o_extra_menu_items" Bar
And I wait for "12" secs
And I click on "Purchase Requests" button
And I click on "Ok" Button
And I click on "Create" button
And I take the screenshot
And I wait for "20" secs
And I give the Following input in the Purchase Create page 
 | BudgetName      | RequestDepartment | BookOFAccount     | 
 | TestBudget2025  | Test IT           | IF Cottages 20-21 |
And I take the screenshot
And I click on "Add a product" Button
And I give the Following input in the 1st Row of Purchase Product page
| Product       |Quantity|UnitOFMeasurement|Purposecode                          |
| Slate Pencil  | 10     |Case of 25Pack   |Stationery for Department/Office Use |
And I click on "Add a product" Button
And I give the Following input in the 2rd Row of Purchase Product page
| Product         |Quantity | UnitOFMeasurement |Purposecode                     |
| Gel Pen         | 5       | Pkt of 5Units     |Maintain Buildings & Facilities |
And I take the screenshot
And I give comment as "urgency" in exception remarks
And I click on "Save" Button
And I wait for "8" secs
And I wait for "8" secs
And I press button "Item Variant Correction"
And I select on 1st row checkbox for item correction
And I select on 2rd row checkbox for item correction
And I wait for "8" secs
And I click on "Save" Button
And I wait for "8" secs
And I click on "close" icon button in the modal
And I wait for "8" secs
And I click on "Submitted for Ledger Correction" Button
And I wait for "8" secs
And I click on "Submited For Approval" Button
And I wait for "8" secs
And I get the generated PR
And I take the screenshot
And I wait for "8" secs 
And I click on "o_user_menu" Bar
And I click on "Log out" Button
And I open the login Page in Sulaba Website
And I do the login for the L1 user by entering username as 'senthilprasad.c@ishafoundation.org' and password as '123'
And I do the assertions for login Button and login successfully
And I wait for "12" secs
And I click on "dropdown" Bar
And I wait for "8" secs
And I click on "Approver Dashboard" Button
And I click on "PR Pending In Request Approval" Button
And I wait for "5" secs
And I search for PR
And I click on PR
And I click on "L1 Approved" Button
And I take the screenshot