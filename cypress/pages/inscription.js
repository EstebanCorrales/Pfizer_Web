class inscription {

    /*
    navigate() {
        cy.visit('http://192.168.0.30/UpJohnweb/')
    }
    */


    elements = {

        pais: () => cy.get('#select_pais'),
        region: () => cy.get('#select_region'),
        canton: () => cy.get('#select_canton'),
        medico: () => cy.get('#txt_medico'),
        medicoOtro: () => cy.get('#txt_otroMedicco'),
        producto: () => cy.get('#txt_producto'),
        agregar: () => cy.get('#btn_agregar_producto'),
        mensajeError: () => cy.get('.jconfirm-box'),
        botonOkPopup: () => cy.get('.jconfirm-buttons > .btn'),
        primeraVezConsume: () => cy.get(':nth-child(6) > .col-lg-7 > :nth-child(1) > .container-check > .checkmark'),
        
    }

    clickbtnAgregarProducto() {
        this.elements.agregar().click();
    }

    clickbtnOkPopUp() {
        this.elements.botonOkPopup().click();
    }



}
module.exports = new inscription();