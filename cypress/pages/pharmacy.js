class pharmacys {

    /*
    navigate() {
        cy.visit('http://192.168.0.30/UpJohnweb/')
    }
    */

    elements = {

        logo: () => cy.get('.image'),
        bannerppal: () => cy.get('.banner-farmacia'),
        pharmacyIcon: () => cy.get('.title-seccion > p'),
        textContent: () => cy.get('.mrg-btm > :nth-child(1) > :nth-child(1)'),
        selectCountry: () => cy.get('#select_pais'), 
        //pharmacyList: () => cy.get('#div_productos'),
        pharmacydetails: (productNames) => cy.get('#div_productos').contains(productNames),
    }



}
module.exports = new pharmacys();