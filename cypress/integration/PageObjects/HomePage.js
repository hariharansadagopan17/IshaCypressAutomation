class HomePage {
    getUserName() {
        return cy.get('input[name="login"]');
    }
   
    getPassword(){
        return cy.get('input[name="password"]');
    }
    
    getSignInButton() {
        //return cy.xpath('//*[contains(text(),"Sign in")]');
         return cy.get('#wrapwrap > main > div > div.container > div > div > div > div > form > div.clearfix.oe_login_buttons.text-center.mb-1 > button');
    
          //return cy.contains("Sign in");
    
        }
   
    getMenuBarButton(){

        return cy.get('body > header > nav > ul.o_menu_apps > li > a');
    }
    
    getBudgetIconButton(){


        return cy.get('body > header > nav > ul.o_menu_apps > li > div > a:nth-child(18) > img');
    }
    
    getCreateButton(){

        return cy.get('body > div.o_action_manager > div > div.o_cp_controller > div > div:nth-child(2) > div.o_cp_left > div > div > button.btn.btn-primary.o_list_button_add')

    }
    
    getPurchaseRequestIcon(){

        return cy.xpath('/html/body/header/nav/ul[1]/li/div/a[15]/img');
    }


    getAccountMenuBar(){

        return cy.xpath('/html/body/header/nav/ul[3]/li[4]/a');
    }

    getLogOutButton(string){
        
        return cy.contains(string);
        //return cy.xpath('/html/body/header/nav/ul[3]/li[4]/div/a[6]');
    }

    getApprovalDashboardIconButton(){

        return cy.xpath('/html/body/header/nav/ul[1]/li/div/a[2]/img');
    }

    
   }
    export default HomePage