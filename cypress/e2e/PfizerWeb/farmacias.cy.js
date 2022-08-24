const home = require("../../pages/index")
const menu = require('../../fixtures/menuheader.json')
const pharmacy = require("../../pages/pharmacy")
const content = require('../../fixtures/pharmacytext.json')


describe('Test Sección Farmacias', () => {


    before(() => {
        home.navigate();
    });

    it('Verificación Menús del Header', () => {

        cy.contains('Farmacias afiliadas').click()

        const menuList = menu

        //Se valida que el menú contenga los elementos correctos
        home.elements.menuHeaderOptions().each((myMenu, index, list) => {
            cy.log(myMenu.text())
            cy.wrap(myMenu).invoke('text').then((menuopt) => {
                expect(menuopt).to.contain(menuList[index])
            })

        });

    });
    
    it('Validación Banner del Header, Icono y Logo', () => {

        cy.contains('Farmacias afiliadas').click()

        //Se valida que el Banner Principal cuente con una propiedad background-imgage y que el logo este. Ambos deben coincidir
        pharmacy.elements.logo().should('have.attr', 'src').should('include', '/UpjohnWeb/images/viatris_upjohn_logos.png')
        pharmacy.elements.bannerppal().should('have.css', 'background-image').should('include', '/UpjohnWeb/images/viatris_upjohn_farmacia_int.jpg')
        pharmacy.elements.pharmacyIcon().should('have.text', 'FARMACIAS')

    });

    
    it('Validación Contenido de la sección medica', () => {

        cy.contains('Farmacias afiliadas').click()

        const textoSeccion = content

        //Se verifica que el texto central este correctamente
        pharmacy.elements.textContent().each((texto, index, list) => {
            cy.log(texto.text())
            cy.wrap(texto).invoke('text').then((contenido) => {
                expect(contenido).to.contain(textoSeccion[index])
            })

        });

    });

    //Para limpiar la consola en caso de fallar por petición
    Cypress.on('window:before:load', win => {
        win.fetch = null;
      });

    it('Validación Dropdowm Farmacias y Lista Costa Rica', () => {
        

        cy.contains('Farmacias afiliadas').click()

        pharmacy.elements.selectCountry().select('Costa Rica')


    });











})
