const home = require("../../pages/index")
const menu = require('../../fixtures/menuheader.json')
const benefits = require('../../pages/benefits')
const content = require('../../fixtures/benefittext.json')

describe('Test Sección Beneficios', () => {

    beforeEach(() => {
        home.navigate();
    });


    it('Verificación Menús del Header', () => {

        cy.contains('Beneficios').click()

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

        cy.contains('Beneficios').click()

        //Se valida que el Banner Principal cuente con una propiedad background-imgage y que el logo este. Ambos deben coincidir
        benefits.elements.logo().should('have.attr', 'src').should('include', '/images/viatris_upjohn_logos.png')
        benefits.elements.bannerppal().should('have.css', 'background-image').should('include', 'https://uatviatrisweb.conexus-group.com/images/viatris_upjohn_productos_int.jpg')
        benefits.elements.benefitsIcon().should('have.text', 'BENEFICIOS')

    });

    it('Validación Contenido de la sección medica', () => {

        cy.contains('Beneficios').click()

        const textoSeccion = content

        //Se verifica que el texto central este correctamente
        benefits.elements.textContent().each((texto, index, list) => {
            cy.log(texto.text())
            cy.wrap(texto).invoke('text').then((contenido) => {
                expect(contenido).to.contain(textoSeccion[index])
            })

        });

    });

    it('Verificación Menús del Footer', () => {

        cy.contains('Beneficios').click()


        //Se valida que las rutas de las opciones del menú redireccionen correctamente
        cy.contains('Programa').click()
        cy.url().should('include', '/Programa')
        cy.contains('Beneficios').click()

        cy.contains('Beneficios').click()
        cy.url().should('include', '/Beneficios')
        cy.contains('Beneficios').click()

        cy.contains('Productos participantes').click()
        cy.url().should('include', '/Productos')
        cy.contains('Beneficios').click()

        cy.contains('Farmacias afiliadas').click()
        cy.url().should('include', '/Farmacias')
        cy.contains('Beneficios').click()

        cy.contains('Inscripción de pacientes').click()
        cy.url().should('include', '/InscripcionPacientes')
        cy.contains('Beneficios').click()

        cy.contains('Inscripción de Farmacias').click()
        cy.url().should('include', '/InscripcionFarmacias')
        cy.contains('Beneficios').click()

        cy.contains('Ingreso de usuario').click()
        cy.url().should('include', '/IngresoUsuario')
        cy.contains('Beneficios').click()

        cy.contains('Reglamento del Programa').click()
        cy.url().should('include', '/Reglamento')
        cy.contains('Beneficios').click()

        cy.contains('Contacto').click()
        cy.url().should('include', '/Contacto')
        cy.contains('Beneficios').click()

        cy.contains('Términos y Condiciones').click()
        cy.url().should('include', '/TerminosCondiciones')
        cy.contains('Beneficios').click()

        cy.contains('Preguntas Frecuentes').click()
        cy.url().should('include', '/PreguntasFrecuentes')
        cy.contains('Beneficios').click()

        home.elements.divfooter().should('contains.text', '\n                    Línea de Atención al Paciente, Lunes a viernes \n                    De 7:00 a.m. a 6:00 p.m. - \tCosta Rica: (506) 4000-0553 - Guatemala: (502) 2268-6216 - Honduras: (504) 2276-9550 / (504) 2231-3118  \n                    De 9:00 a.m. a 8:00 p.m. - República Dominicana: Santo Domingo 1-(829) 946-1068 Santiago: 1-(849) 937-0841\n')

    });

});