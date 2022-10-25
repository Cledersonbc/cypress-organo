/// <reference types="cypress" />

describe('1 - Validar novos times', () => {

    beforeEach(() => {
        cy.visit('/')
    })

    it('Cadastro de colaborador', () => {
        const worker = require('../../fixtures/worker_example.json')

        cy.get('.main-form form input[placeholder="Digite seu nome"]').type(worker.name)
        cy.get('.main-form form input[placeholder="Digite seu cargo"]').type(worker.position)
        cy.get('.main-form form input[placeholder="Digite o endereço da imagem"]').type(worker.image)
        cy.get('.main-form form select[required]').select(worker.teamName)
        cy.get('.main-form form button').contains('Enviar').click()

        cy.get('.team')
            .should('exist', worker.teamName)
            .find('.worker')
            .should('contain', worker.name)

    })

})