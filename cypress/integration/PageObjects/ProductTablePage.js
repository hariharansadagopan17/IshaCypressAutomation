class ProductTablePage {

getProductTable(){

    return cy.get('div[name="line_ids"] > div.o_list_view > div > table > tbody');
  }


  getProduct1rdRowDropDown(){

    return cy.get('div[name="line_ids"] > div.o_list_view > div > table > tbody > tr:nth-child(1) > td > div > div');
  }

   getProduct2rdRowDropDown(){

    return cy.get('div[name="line_ids"] > div.o_list_view > div > table > tbody > tr:nth-child(2) > td:nth-child(1) > div > div');
   }

   getProduct3rdRowDropDown(){

    return cy.get('div[name="line_ids"] > div.o_list_view > div > table > tbody > tr:nth-child(3) > td:nth-child(1) > div > div');
   }


   getProduct4rdRowDropDown(){

    return cy.get('div[name="line_ids"] > div.o_list_view > div > table > tbody > tr:nth-child(4) > td:nth-child(1) > div > div');
   }

   getProduct5rdRowDropDown(){

    return cy.get('div[name="line_ids"] > div.o_list_view > div > table > tbody > tr:nth-child(5) > td:nth-child(1) > div > div')
   }


   

} export default ProductTablePage