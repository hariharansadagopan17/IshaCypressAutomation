Feature: Purchase Request Creation 
I want to create a Purchase Request  in Sulaba Website

Scenario: The user inputs the respective company  associated to him

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
And I wait for "8" secs
And I click on "Create" button
And I take the screenshot
And I give the company as "Isha Foundation"
And I should see "Isha Foundation" text displayed
And I take the screenshot
