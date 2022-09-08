const home = require("../../pages/index")
const inscripcion = require('../../pages/inscription')


describe('Test Sección Inscripción', () => {

    before(() => {
        home.navigate();
    });

    it('Inscripción Sin Producto', () => {

        cy.contains('Inscripción de pacientes').click()
        inscripcion.elements.pais().select('Costa Rica')
        inscripcion.elements.region().select('San José')
        inscripcion.elements.canton().select('Escazú')
        inscripcion.elements.medico().type('ALPIZAR SALAS CARLOS - Cardiología').focus('ALPIZAR SALAS CARLOS - Cardiología').click()
        inscripcion.clickbtnAgregarProducto()
        inscripcion.elements.mensajeError().should('contain.text', 'Ingresar un producto es requerido.')
        inscripcion.clickbtnOkPopUp()
        
    });

    
    it('Inscripción Sin Médico', () => {

        cy.contains('Inscripción de pacientes').click()
        inscripcion.elements.pais().select('Costa Rica')
        inscripcion.elements.region().select('San José')
        inscripcion.elements.canton().select('Escazú')
        inscripcion.elements.producto().type('Caduet 5/20mg x 14 Tabletas').focus('Caduet 5/20mg x 14 Tabletas').click()
        inscripcion.clickbtnAgregarProducto()
        inscripcion.elements.mensajeError().should('contain.text', 'Ingresar un médico es requerido.')
        inscripcion.clickbtnOkPopUp()
        
    });

    it('Inscripción Con Médico Otro Sin Completarlo', () => {

        cy.contains('Inscripción de pacientes').click()
        inscripcion.elements.pais().select('Costa Rica')
        inscripcion.elements.region().select('San José')
        inscripcion.elements.canton().select('Escazú')
        inscripcion.elements.producto().type('Caduet 5/10mg x 14 Tabletas').focus('Caduet 5/10mg x 14 Tabletas').click()
        inscripcion.elements.medico().type('Otro - Otro').focus('Otro - Otro').click()
        inscripcion.clickbtnAgregarProducto()
        inscripcion.elements.mensajeError().should('contain.text', 'Debe ingresar el nombre del médico')
        inscripcion.clickbtnOkPopUp()
        
    });

    it('Inscripción Con Producto que No Esta en el País', () => {

        cy.contains('Inscripción de pacientes').click()
        inscripcion.elements.pais().select('República Dominicana')
        inscripcion.elements.region().select('Barahona')
        inscripcion.elements.canton().select('Cabral')
        inscripcion.elements.producto().type('Norvasc 5mg x 14 Tabletas').tab()
        inscripcion.elements.mensajeError().should('contain.text', 'El producto ingresado no está disponible.')
        inscripcion.clickbtnOkPopUp()
        
    });

    it('Inscripción Con un Médico que No Esta en el País', () => {

        cy.contains('Inscripción de pacientes').click()
        inscripcion.elements.pais().select('República Dominicana')
        inscripcion.elements.region().select('Barahona')
        inscripcion.elements.canton().select('Cabral')
        inscripcion.elements.producto().type('Caduet 5/20mg x 14 Tabletas').focus('Caduet 5/20mg x 14 Tabletas').click()
        inscripcion.elements.medico().type('ACUNA FEOLI JOSE - Medicina Interna').tab()
        inscripcion.elements.mensajeError().should('contain.text', 'Debe seleccionar un médico válido')
        inscripcion.clickbtnOkPopUp()
        
    });

    it('Inscripción Seleccionando Datos de un País y luego Cambiandolo', () => {

        cy.contains('Inscripción de pacientes').click()
        inscripcion.elements.pais().select('Costa Rica')
        inscripcion.elements.region().select('San José')
        inscripcion.elements.canton().select('Escazú')
        inscripcion.elements.producto().type('Caduet 5/10mg x 14 Tabletas').focus('Caduet 5/10mg x 14 Tabletas').click()
        inscripcion.elements.medico().type('ALPIZAR SALAS CARLOS - Cardiología').focus('ALPIZAR SALAS CARLOS - Cardiología').click()
        inscripcion.elements.pais().select('República Dominicana')
        inscripcion.clickbtnAgregarProducto()
        inscripcion.elements.mensajeError().should('contain.text', 'El producto ingresado no está disponible.')
        inscripcion.clickbtnOkPopUp()
        inscripcion.elements.mensajeError().should('contain.text', 'Debe seleccionar un médico válido')
        inscripcion.clickbtnOkPopUp()
        
    });
    
    it('Inscripción Agregando mas de una vez el Mismo Producto y Médico', () => {

        cy.contains('Inscripción de pacientes').click()
        inscripcion.elements.pais().select('Costa Rica')
        inscripcion.elements.region().select('San José')
        inscripcion.elements.canton().select('Escazú')
        inscripcion.elements.producto().type('Caduet 5/10mg x 14 Tabletas').focus('Caduet 5/10mg x 14 Tabletas').click()
        inscripcion.elements.medico().type('ALPIZAR SALAS CARLOS - Cardiología').focus('ALPIZAR SALAS CARLOS - Cardiología').click()
        inscripcion.clickbtnAgregarProducto()
        inscripcion.elements.producto().type('Caduet 5/10mg x 14 Tabletas').focus('Caduet 5/10mg x 14 Tabletas').click()
        inscripcion.elements.medico().type('ALPIZAR SALAS CARLOS - Cardiología').focus('ALPIZAR SALAS CARLOS - Cardiología').click()
        inscripcion.elements.primeraVezConsume().click({ force: true })
        inscripcion.clickbtnAgregarProducto()
        inscripcion.elements.mensajeError().should('contain.text', 'Solo puede incluir una vez el producto.')
        inscripcion.clickbtnOkPopUp()

    });


    
});