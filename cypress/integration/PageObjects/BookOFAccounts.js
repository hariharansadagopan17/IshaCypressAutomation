/// <reference types="cypress-xpath" />
class BookOfAccounts {

getBookOFAccounts_Field_Selector() {
        return cy.get('div[name="boa_id"]').click({multiple:true});
       
           
    }
   
getBookOFAccounts_Field_Purchase_Selector(){

   //return cy.get('div[name="book_of_account"]').click({multiple:true});

   return cy.xpath('/html/body/div[2]/div/div[2]/div/div[2]/div[2]/div[3]/table[1]/tbody/tr[10]/td[2]/div/div/input').click({multiple:true});

}
    getBookOFAccounts_Cottages_Selector(){
        
       const IF_Cottages_20_21 = "/html/body/ul[8]/li[2]/a";
        //return cy.xpath("//*[contains(text(),'"+BookOFAccount+"')]");
         
        return cy.xpath(IF_Cottages_20_21);
    }

    getBookOFAccounts_Books_Selector(){

     const IF_Books_20_21 = "/html/body/ul[8]/li[1]/a";
        return cy.xpath(IF_Books_20_21);
    }
   
    getBookOFAccounts_Kayanthasthanam_Selector(){
        
       const  IF_Kayanthasthanam_20_21 = "/html/body/ul[8]/li[3]/a";
        return cy.xpath(IF_Kayanthasthanam_20_21);
    }

     getBookOFAccounts_Yoga_And_Rejuvenation_Selector(){
         
        const IF_Yoga_And_Rejuvenation_20_21 = "/html/body/ul[9]/li[4]/a";
        return cy.xpath(IF_Yoga_And_Rejuvenation_20_21);
     }

     getBookOFAccounts_Isha_Foundation_HO_Selector(){
        
        const Isha_Foundation_HO_20_21 = "/html/body/ul[9]/li[5]/a";
        return cy.xpath(Isha_Foundation_HO_20_21);
     }

     getBookOFAccounts_IF_Cottages_20_Purchase_Selector(){

      const IF_Cottages_20_21_Purchase = "/html/body/ul[6]/li/a";

      return cy.xpath(IF_Cottages_20_21_Purchase);
     }
} 

export default BookOfAccounts