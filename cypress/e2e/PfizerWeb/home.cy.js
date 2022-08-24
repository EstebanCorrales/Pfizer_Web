const home = require("../../pages/index");
const menu = require('../../fixtures/menuheader.json')

describe('Test Home del Sitio Web', () => {

    beforeEach(() => {
        home.navigate();
    });


    it('Verificación Menús del Header', () => {

        const menuList = menu

        //Se valida que el menú contenga los elementos correctos
        home.elements.menuHeaderOptions().each((myMenu, index, list) => {
            cy.log(myMenu.text())
            cy.wrap(myMenu).invoke('text').then((menuopt) => {
                expect(menuopt).to.contain(menuList[index])
            })

        });

    });

    it('Valida Sección del Header', () => {

        home.elements.bannerppal().should('have.css', 'background-image').should('include', '/UpjohnWeb/images/viatris_upjohn_un_programa_para_ti.jpg')
        //Se valida que el contenido de la sección superior derecha del Header este correcto
        home.elements.logo().find('img').should('have.attr', 'src').should('include', '/UpjohnWeb/images/viatris_upjohn_logo.png')
        home.elements.titleppal().should('have.text', '¡UN PROGRAMA PARA TÍ!')
        home.elements.textheader().should('have.text', 'Tu salud es lo más importante por lo  que hemos creado un programa  soló para ti.')
        home.clickbtntextheader()
        //Se verifica ruta del botón bajo dicha sección
        cy.url().should('include', '/Programa')
        //cy.url().should('eq', 'http://192.168.0.30/UpJohnweb/Programa') --> Cambio de path al 30
        home.clicklinklogo()

    });

    it('Validación Sección El Programa', () => {

        //Se valida contenido y elementos sección El Programa
        home.elements.img_program().should('have.css', 'background-image').should('include', '/UpjohnWeb/images/viatris_upjohn_programa.jpg')
        home.elements.tittle_program().should('have.text', 'SÍ SE PUEDE VIVIR UNA VIDA PLENA')
        home.elements.text_program().should('have.text', 'En Viatris nos esforzamos diariamente por promover la calidad de vida de los pacientes con patologías cardiacas que cuentan con prescripción médica.')
        home.clickbtntextprogram()
        //Se verifica ruta del botón bajo dicha sección
        cy.url().should('include', '/Programa')
        home.clicklinklogo()

    });

    it('Validación Sección Beneficios', () => {

        //Se valida contenido y elementos sección Beneficios
        home.elements.img_benefits().should('have.css', 'background-image').should('include', '/UpjohnWeb/images/viatris_upjohn_beneficios.jpg')
        home.elements.tittle_benefits().should('have.text', 'TENEMOS GRANDES BENEFICIOS')
        home.elements.text_benefits().should('have.text', 'Al comprar alguno de los productos que forman parte del programa Viatris a tu lado, en las farmacias participantes, los pacientes registrados podrán acumular puntos a su nombre.')
        home.clickbtntextbenefits()
        cy.url().should('include', '/Beneficios')
        home.clicklinklogo()

    });

    it('Validación Sección Farmacias Participantes', () => {
        //Se valida contenido y elementos sección Farmacias Participantes
        home.elements.img_pharmacy().should('have.css', 'background-image').should('include', '/UpjohnWeb/images/viatris_upjohn_farmacias.jpg')
        home.elements.title_pharmacy().should('have.text', 'UNA CERCA DE USTED')
        home.elements.text_pharmacy().should('have.text', 'Al seleccionar uno de los países participantes en el siguiente menú se desplegará la lista de farmacias participantes y su respectiva dirección.')
        home.clickbtnpharmacy()
        cy.url().should('include', '/Farmacias')
        home.clicklinklogo()

    });

    it('Verificación Menús del Footer', () => {

        //Se valida que las rutas de las opciones del menú redireccionen correctamente
        cy.contains('Programa').click()
        cy.url().should('include', '/Programa')
        home.clicklinklogo()

        cy.contains('Beneficios').click()
        cy.url().should('include', '/Beneficios')
        home.clicklinklogo()

        cy.contains('Productos participantes').click()
        cy.url().should('include', '/Productos')
        home.clicklinklogo()

        cy.contains('Farmacias afiliadas').click()
        cy.url().should('include', '/Farmacias')
        home.clicklinklogo()

        cy.contains('Inscripción de pacientes').click()
        cy.url().should('include', '/InscripcionPacientes')
        home.clicklinklogo()

        cy.contains('Inscripción de Farmacias').click()
        cy.url().should('include', '/InscripcionFarmacias')
        home.clicklinklogo()

        cy.contains('Ingreso de usuario').click()
        cy.url().should('include', '/IngresoUsuario')
        home.clicklinklogo()

        cy.contains('Reglamento del Programa').click()
        cy.url().should('include', '/Reglamento')
        home.clicklinklogo()

        cy.contains('Contacto').click()
        cy.url().should('include', '/Contacto')
        home.clicklinklogo()

        cy.contains('Términos y Condiciones').click()
        cy.url().should('include', '/TerminosCondiciones')
        home.clicklinklogo()

        cy.contains('Preguntas Frecuentes').click()
        cy.url().should('include', '/PreguntasFrecuentes')
        home.clicklinklogo()

        home.elements.divfooter().should('contains.text', '\n                    Línea de Atención al Paciente, Lunes a viernes \n                    De 7:00 a.m. a 6:00 p.m. - \tCosta Rica: (506) 4000-0553 - Guatemala: (502) 2268-6216 - Honduras: (504) 2276-9550 / (504) 2231-3118  \n                    De 9:00 a.m. a 8:00 p.m. - República Dominicana: Santo Domingo 1-(829) 946-1068 Santiago: 1-(849) 937-0841\n')

    });


});