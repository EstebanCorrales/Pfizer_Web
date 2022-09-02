const home = require("../../pages/index")
const menu = require('../../fixtures/menuheader.json')
const product = require('../../pages/products')
const content = require('../../fixtures/producttext.json')
const productDetailscr = require('../../fixtures/productsdetailcr.json')
const productDetailsrd = require('../../fixtures/productsdetailrd.json')
const productDetailshn = require('../../fixtures/productsdetailrd.json')
const productDetailsgt = require('../../fixtures/productsdetailrd.json')


describe('Test Sección Productos', () => {


    before(() => {
        home.navigate();
    });

    it('Verificación Menús del Header', () => {

        cy.contains('Productos participantes').click()

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

        cy.contains('Productos participantes').click()

        //Se valida que el Banner Principal cuente con una propiedad background-imgage y que el logo este. Ambos deben coincidir
        product.elements.logo().should('have.attr', 'src').should('include', '/images/viatris_upjohn_logos.png')
        product.elements.bannerppal().should('have.css', 'background-image').should('include', 'https://uatviatrisweb.conexus-group.com/images/viatris_upjohn_beneficio_int.jpg')
        product.elements.productsIcon().should('have.text', 'PRODUCTOS')

    });

    it('Validación Contenido de la sección medica', () => {

        cy.contains('Productos participantes').click()

        const textoSeccion = content

        //Se verifica que el texto central este correctamente
        product.elements.textContent().each((texto, index, list) => {
            cy.log(texto.text())
            cy.wrap(texto).invoke('text').then((contenido) => {
                expect(contenido).to.contain(textoSeccion[index])
            })

        });

    });

    it('Validación Dropdowm Productos y Lista Costa Rica', () => {

        cy.contains('Productos participantes').click()

        product.elements.selectCountry().select('Costa Rica')


    });

    productDetailscr.forEach(element => {
        it(element.name, function () {

            product.elements.productsdetails(element.name).should("have.text", element.name)
        });

    });

    it('Validación Dropdowm Productos y Lista Honduras', () => {

        cy.contains('Productos participantes').click()

        product.elements.selectCountry().select('Honduras')


    });

    productDetailshn.forEach(element => {
        it(element.name, function () {

            product.elements.productsdetails(element.name).should("have.text", element.name)
        });

    });

    it('Validación Dropdowm Productos y Lista Guatemala', () => {

        cy.contains('Productos participantes').click()

        product.elements.selectCountry().select('Guatemala')


    });
    

    productDetailsgt.forEach(element => {
        it(element.name, function () {

            product.elements.productsdetails(element.name).should("have.text", element.name)
        });

    });


    it('Validación Dropdowm Productos y Lista República Dominicana', () => {

        cy.contains('Productos participantes').click()

        product.elements.selectCountry().select('República Dominicana')


    });

    productDetailsrd.forEach(element => {
        it(element.name, function () {

            product.elements.productsdetails(element.name).should("have.text", element.name)
        });

    });

    it('Verificación Menús del Footer', () => {

        //Se valida que las rutas de las opciones del menú redireccionen correctamente
        cy.contains('Programa').click()
        cy.url().should('include', '/Programa')
        cy.contains('Productos participantes').click()

        cy.contains('Beneficios').click()
        cy.url().should('include', '/Beneficios')
        cy.contains('Productos participantes').click()

        cy.contains('Productos participantes').click()
        cy.url().should('include', '/Productos')
        cy.contains('Productos participantes').click()

        cy.contains('Farmacias afiliadas').click()
        cy.url().should('include', '/Farmacias')
        cy.contains('Productos participantes').click()

        cy.contains('Inscripción de pacientes').click()
        cy.url().should('include', '/InscripcionPacientes')
        cy.contains('Productos participantes').click()

        cy.contains('Inscripción de Farmacias').click()
        cy.url().should('include', '/InscripcionFarmacias')
        cy.contains('Productos participantes').click()

        cy.contains('Ingreso de usuario').click()
        cy.url().should('include', '/IngresoUsuario')
        cy.contains('Productos participantes').click()

        cy.contains('Reglamento del Programa').click()
        cy.url().should('include', '/Reglamento')
        cy.contains('Productos participantes').click()

        cy.contains('Contacto').click()
        cy.url().should('include', '/Contacto')
        cy.contains('Productos participantes').click()

        cy.contains('Términos y Condiciones').click()
        cy.url().should('include', '/TerminosCondiciones')
        cy.contains('Productos participantes').click()

        cy.contains('Preguntas Frecuentes').click()
        cy.url().should('include', '/PreguntasFrecuentes')
        cy.contains('Productos participantes').click()

        home.elements.divfooter().should('contains.text', '\n                    Línea de Atención al Paciente, Lunes a viernes \n                    De 7:00 a.m. a 6:00 p.m. - \tCosta Rica: (506) 4000-0553 - Guatemala: (502) 2268-6216 - Honduras: (504) 2276-9550 / (504) 2231-3118  \n                    De 9:00 a.m. a 8:00 p.m. - República Dominicana: Santo Domingo 1-(829) 946-1068 Santiago: 1-(849) 937-0841\n')

    });
    

});