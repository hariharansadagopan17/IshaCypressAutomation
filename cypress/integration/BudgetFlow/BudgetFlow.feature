Feature: Budget Creation 
Scenario: Create Budget for  IT Team
 
Given I open the login Page in Sulaba Website
And I do the login by entering username as 'abarajith.sadagopan@ishafoundation.org' and password as '123'
And I do the assertions for login Button and login successfully
And I take the screenshot
And I wait for "8" secs
And I click on "dropdown" Bar
And I wait for "12" secs
And I click on "Budget" Button
And I click on "Create" Button
And I give the Following input in the Budget Create page 
 | BudgetName      | RequestDepartment |responsible_person | BookOFAccount    | 
 | TestBudget2026  | Test IT           |abarajith.sadagopan|IF Cottages 20-21 |
And I wait for "12" secs
And I enter the Budget Period Date From as '03/06/2021'
And I enter the Budget Period Date To as '04/06/2021'
And I click on "Add a line" Button
And I wait for "12" secs
And I enter the Budgetary position as "21 Ft Adhi Yogi - UC"
And I enter the Purpose code as "Maintain Buildings & Facilities"
And I enter the Planned Amount as "25000"
And I give the Complete Name as "TestBudget2026"
And I give the Budget Line Period From Date as "03/06/2021"
And I give the Budget Line Period Date To as "04/06/2021"
And I click on "Save & Close" Button
And I wait for "12" secs
And I click on "Add a line" Button
And I wait for "12" secs
And I enter the Budgetary position as "Adhi Yogi Aalayam - UC"
And I enter the Purpose code as "Maintain Buildings & Facilities"
And I enter the Planned Amount as "25000"
And I give the Complete Name as "TestBudget2026"
And I give the Budget Line Period From Date as "03/06/2021"
And I give the Budget Line Period Date To as "04/06/2021"
And I click on "Save & Close" Button
And I wait for "12" secs
And I click on "Save" Button
And I get the generated Budget Name
And I click on "Finance Approved" Button
And I wait for "12" secs


