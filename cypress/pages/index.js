class index {

    navigate() {
        cy.visit('http://192.168.0.30/UpJohnweb')
    }

    elements = {

        bannerppal: () => cy.get('.banner-principal'),
        menuHeaderOptions: () => cy.get('.title > .prg-url'),
        titleppal: () => cy.get('h2'),
        textheader: () => cy.get('.text-simple > p'),
        linklogo: () => cy.get('.image'),
        btntextheader: () => cy.get('.text-simple > .btn-orange'),
        logo: () => cy.get('.logo'),
        img_program: () => cy.get('.card-sup'),
        tittle_program: () => cy.get('.card-sup > .text > .title-card > b'),
        text_program: () => cy.get('.card-sup > .text > .text-cont'),
        btntextprogram: () => cy.get('.card-sup > .text > .btn-orange'),
        img_benefits: () => cy.get('.card-izda'),
        tittle_benefits: () => cy.get('.card-izda > .text > .title-card > b'),
        text_benefits: () => cy.get('.card-izda > .text > .text-cont'),
        btntextbenefits: () => cy.get('.card-izda > .text > .btn-orange'),
        title_pharmacy: () => cy.get('.card-drcha > .text > .title-card > b'),
        img_pharmacy: () => cy.get('.card-drcha'),
        text_pharmacy: () => cy.get('.card-drcha > .text > .text-cont'),
        btntextpharmacy: () => cy.get('.card-drcha > .text > .btn-orange'),
        divfooter: () => cy.get('.programa > :nth-child(2)')


    }

    clicklinklogo() {
        this.elements.linklogo().click();
    }

    clickbtntextheader() {
        this.elements.btntextheader().click();
    }

    clickbtntextprogram() {
        this.elements.btntextprogram().click();
    }

    clickbtntextbenefits() {
        this.elements.btntextbenefits().click();
    }

    clickbtnpharmacy() {
        this.elements.btntextpharmacy().click();
    }

}
module.exports = new index();