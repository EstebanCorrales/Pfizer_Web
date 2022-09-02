const home = require("../../pages/index")
const menu = require('../../fixtures/menuheader.json')
const pharmacy = require("../../pages/pharmacy")
const content = require('../../fixtures/pharmacytext.json')
const pharmacycr = require("../../fixtures/pharmacycr.json")
const pharmacyhn = require("../../fixtures/pharmacyhn.json")
const pharmacygt = require("../../fixtures/pharmacygt.json")


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
        pharmacy.elements.logo().should('have.attr', 'src').should('include', '/images/viatris_upjohn_logos.png')
        pharmacy.elements.bannerppal().should('have.css', 'background-image').should('include', 'https://uatviatrisweb.conexus-group.com/images/viatris_upjohn_farmacia_int.jpg')
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
        //Pausa antes de continuar con las pruebas de Farmacias
        cy.wait(2000)
    });

    //Para limpiar la consola en caso de fallar por petición
    Cypress.on('window:before:load', win => {
        win.fetch = null;
    });

    it('Validación Dropdowm Farmacias y Lista Costa Rica', () => {


        //cy.contains('Farmacias afiliadas').click()

        pharmacy.elements.selectCountry().select('Costa Rica')
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false;
        });

    });
    //Carga Farmacias CR para hacer el Should
    
    pharmacycr.forEach(element => {
        it(element.farmacia, function () {            
            pharmacy.elements.pharmacydetails(element.farmacia).should("have.text", element.farmacia)
            pharmacy.elements.pharmacydetails(element.direccion).should("contain.text", element.direccion)
            pharmacy.elements.pharmacydetails(element.telefono).should("contain.text", element.telefono)
            pharmacy.elements.pharmacydetails(element.horario).should("have.text", element.horario)
        });

    });

    
    it('Validación Dropdowm Farmacias y Lista Honduras', () => {


        //cy.contains('Farmacias afiliadas').click()

        pharmacy.elements.selectCountry().select('Honduras')
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false;
        });

    });
    //Carga Farmacias HN para hacer el Should
    pharmacyhn.forEach(element => {
        it(element.farmacia, function () {

            pharmacy.elements.pharmacydetails(element.farmacia).should("have.text", element.farmacia)
            pharmacy.elements.pharmacydetails(element.direccion).should("contain.text", element.direccion)
            pharmacy.elements.pharmacydetails(element.telefono).should("contain.text", element.telefono)
            pharmacy.elements.pharmacydetails(element.horario).should("have.text", element.horario)
        });

    });

        
    it('Validación Dropdowm Farmacias y Lista Guatemala', () => {


        //cy.contains('Farmacias afiliadas').click()

        pharmacy.elements.selectCountry().select('Guatemala')
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false;
        });

    });
    //Carga Farmacias GT para hacer el Should
    pharmacygt.forEach(element => {
        it(element.farmacia, function () {

            pharmacy.elements.pharmacydetails(element.farmacia).should("have.text", element.farmacia)
            pharmacy.elements.pharmacydetails(element.direccion).should("contain.text", element.direccion)
            pharmacy.elements.pharmacydetails(element.telefono).should("contain.text", element.telefono)
            pharmacy.elements.pharmacydetails(element.horario).should("have.text", element.horario)
        });

    });

    it('Verificación Menús del Footer', () => {

        //Se valida que las rutas de las opciones del menú redireccionen correctamente
        cy.contains('Programa').click()
        cy.url().should('include', '/Programa')
        cy.contains('Farmacias afiliadas').click()

        cy.contains('Beneficios').click()
        cy.url().should('include', '/Beneficios')
        cy.contains('Farmacias afiliadas').click()

        cy.contains('Productos participantes').click()
        cy.url().should('include', '/Productos')
        cy.contains('Farmacias afiliadas').click()

        cy.contains('Farmacias afiliadas').click()
        cy.url().should('include', '/Farmacias')
        cy.contains('Farmacias afiliadas').click()

        cy.contains('Inscripción de pacientes').click()
        cy.url().should('include', '/InscripcionPacientes')
        cy.contains('Farmacias afiliadas').click()

        cy.contains('Inscripción de Farmacias').click()
        cy.url().should('include', '/InscripcionFarmacias')
        cy.contains('Farmacias afiliadas').click()

        cy.contains('Ingreso de usuario').click()
        cy.url().should('include', '/IngresoUsuario')
        cy.contains('Farmacias afiliadas').click()

        cy.contains('Reglamento del Programa').click()
        cy.url().should('include', '/Reglamento')
        cy.contains('Farmacias afiliadas').click()

        cy.contains('Contacto').click()
        cy.url().should('include', '/Contacto')
        cy.contains('Farmacias afiliadas').click()

        cy.contains('Términos y Condiciones').click()
        cy.url().should('include', '/TerminosCondiciones')
        cy.contains('Farmacias afiliadas').click()

        cy.contains('Preguntas Frecuentes').click()
        cy.url().should('include', '/PreguntasFrecuentes')
        cy.contains('Farmacias afiliadas').click()

        home.elements.divfooter().should('contains.text', '\n                    Línea de Atención al Paciente, Lunes a viernes \n                    De 7:00 a.m. a 6:00 p.m. - \tCosta Rica: (506) 4000-0553 - Guatemala: (502) 2268-6216 - Honduras: (504) 2276-9550 / (504) 2231-3118  \n                    De 9:00 a.m. a 8:00 p.m. - República Dominicana: Santo Domingo 1-(829) 946-1068 Santiago: 1-(849) 937-0841\n')

    });











})
