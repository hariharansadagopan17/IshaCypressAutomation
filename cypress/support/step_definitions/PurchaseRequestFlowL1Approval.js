import {And} from "cypress-cucumber-preprocessor/steps";
import HomePage from '../../integration/PageObjects/HomePage';


const homePage = new HomePage();


And('I do the login for the L1 user by entering username as {string} and password as {string}',(Username,Password) => {

        homePage.getUserName().type(Username);
        homePage.getPassword().type(Password);

    
})

