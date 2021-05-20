class BudgetPage {
    getBudgetName() {
        return cy.get('input[class="o_field_char o_field_widget o_input"]');
    }
   
    getRequestDepartmentDropDown(){

        return cy.xpath('/html/body/div[2]/div/div[2]/div/div[2]/div[2]/div[2]/table[1]/tbody/tr[3]/td[2]/div/div');
    }

    getSearchBox(){

        return cy.xpath('/html/body/div[2]/div/div[2]/div/div[2]/div[2]/div[2]/table[1]/tbody/tr[3]/td[2]/div/div/input');
    }


    getBookOFAccountsDropDown(){

        return cy.xpath('/html/body/div[2]/div/div[2]/div/div[2]/div[2]/div[2]/table[1]/tbody/tr[4]/td[2]/div/div/div');
    }

    getSearchBoxBookofAccounts(){

        return cy.xpath('/html/body/div[2]/div/div[2]/div/div[2]/div[2]/div[2]/table[1]/tbody/tr[4]/td[2]/div/div/div/input');
    }
    getRequestDepartment(){
        return cy.get('div[name="requesting_department_id"]');
        
        //cy.contains('').trigger('mouseover')
    }
    
    getResponsiblePersonDropBox(){

        return cy.xpath('/html/body/div[2]/div/div[2]/div/div[2]/div[2]/div[2]/table[1]/tbody/tr[1]/td[2]/div/div');
    }

     getResponsiblePersonSearchBox(){

        return cy.xpath('/html/body/div[2]/div/div[2]/div/div[2]/div[2]/div[2]/table[1]/tbody/tr[1]/td[2]/div/div/input');
     }

    setRequestDepartment(string){
        return cy.contains(string).trigger('mouseover').click({multiple:true});

    }
    //getBookOFAccounts() {
        //return cy.get('div[name="boa_id"]').click({multiple:true}).pause();
    //}
   
    //setBookOFAccounts(){
        //return cy.contains(BookOFAccounts).trigger('mouseover').click({multiple:true});
          
           //return cy.xpath("/html/body/ul[8]/li[2]/a").click({multiple:true})
        //return cy.get('.ui-menu-item').contains(BookOFAccounts).trigger('mouseover').click({multiple:true});

        //return cy.get('.ui-menu-item')
                 //.contains('.ui-menu-item-wrapper','IF Cottages 20-21').should('be.visible').click({multiple:true});
    //}
       
    getPeriodDateFromSelector(){

        return cy.xpath('//*[@name="date_from"]');
    }
    
    getPeriodDateFrom(){

        return cy.get('input[name="date_from"]');
    }
    
       setPeriodDateFrom(string){

        return cy.contains(string).trigger('mouseover').click({multiple:true});
       }

    getPeriodDateTo(){


        return cy.get('input[name="date_to"]');
    }
    
    getCompanySelector(){

        return cy.get('div[name="company_id"]')
    }

    setCompanySelector(company){

        return cy.contains(company).trigger('mouseover').click({multiple:true})
    }
    getAddLineButton(){

        return cy.contains("Add a line");
    
    
    }
    
    getSaveButton(){

        return cy.xpath('//span[contains(text(),"Save")]');
    }

   getResponsiblePersonSelectorOption(){

     

    return cy.xpath('/html/body/ul[1]/li[2]/a');
             
   }

    getResponsiblePersonFieldSelector(){

        return cy.get('div[name="creating_user_id"]').click({multiple:true});
    }

    setResponsiblePerson(string){


 return cy.contains(string).trigger('mouseover').click({multiple:true})

    }
   }
    export default BudgetPage