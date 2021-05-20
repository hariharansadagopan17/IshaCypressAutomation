class BudgetLineModal {

    getBudgetaryPosition(){

        return cy.get('div[name="general_budget_id"]').click({multiple:true});
    }
   
    setBudgetaryPosition(string){
        return cy.contains(string).trigger('mouseover').click({multiple:true})
    }

    getPurposeCode(){

        return cy.get('div[name="purpose_code"]');
    }

    setPurposeCode(string){
        return cy.contains(string).trigger('mouseover').click({multiple:true})
    }

   getPlannedAmount(){

      return cy.get('input[class="o_input"]');

   }

   getCompleteName(){
       return cy.get('input[name="complete_name"]')
   }

   getPeriodDateFrom(){
    

    return cy.xpath('/html/body/div[17]/div/div/main/div/div/div/div[1]/table[2]/tbody/tr[1]/td[2]/div/div[1]/input');

   }

   getPeriodDateFrom_new(){

    return cy.xpath('/html/body/div[17]/div/div/main/div/div/div/div[1]/table[2]/tbody/tr[1]/td[2]/div/div[1]/input');
   }

   getPeriodDateTo(){

    return cy.xpath('/html/body/div[17]/div/div/main/div/div/div/div[1]/table[2]/tbody/tr[1]/td[2]/div/div[2]/input');
   }

   getPeriodDateTo_new(){

    return cy.xpath('/html/body/div[17]/div/div/main/div/div/div/div[1]/table[2]/tbody/tr[1]/td[2]/div/div[2]/input');
   }
   getSave_And_New_Button_Selector(){

    return cy.xpath('//*[contains(text(),"Save & New")]');
    //return cy.xpath('/html/body/div[17]/div/div/footer/button[2]/span');

   }

  getSave_And_Close_Button(){

    return cy.xpath('//*[contains(text(),"Save & Close")]');
  }

  getFinanceApproved(){

    return cy.xpath('//*[contains(text(),"Finance Approved")]');
  }
} 

export default BudgetLineModal