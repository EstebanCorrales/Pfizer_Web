class products {

    /*
    navigate() {
        cy.visit('http://192.168.0.30/UpJohnweb/')
    }
    */

    elements = {

        logo: () => cy.get('.image'),
        bannerppal: () => cy.get('.banner-producto'),
        productsIcon: () => cy.get('.title-seccion > p'),
        textContent: () => cy.get('.mrg-btm > :nth-child(1) > p'),
        selectCountry: () => cy.get('#select_pais'), 
        productList: () => cy.get('#div_productos'),
        productsdetails: (productNames) => cy.get('#div_productos').contains(productNames),
    }



}
module.exports = new products();