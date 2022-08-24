class benefits {

    /*
    navigate() {
        cy.visit('http://192.168.0.30/UpJohnweb/')
    }
    */

    elements = {

        logo: () => cy.get('.image'),
        bannerppal: () => cy.get('.banner-beneficios'),
        benefitsIcon: () => cy.get('.title-seccion > p'),
        textContent: () => cy.get('.sub-text')
    }



}
module.exports = new benefits();