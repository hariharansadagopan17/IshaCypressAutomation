class ApprovalDashboard {

getPendingApprovalDashboardIcon(){

    return cy.xpath('/html/body/div[2]/div/div[2]/div/div[7]');
}

getSearchBoxPR(){

    return cy.xpath('/html/body/div[2]/div/div[1]/div/div[1]/div/div/div/input');
}

getL1ApprovalButton(){

    return cy.xpath('/html/body/div[2]/div/div[2]/div/div[2]/div[1]/div[5]/button[3]');
}

getPendingApprovalDashboardButton(){

    return cy.xpath('//*[contains(text(),"PR Pending In Request Approval")]');
}

} 

export default ApprovalDashboard