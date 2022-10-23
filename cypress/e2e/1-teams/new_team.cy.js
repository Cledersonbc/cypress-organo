/// <reference types="cypress" />

describe('1 - Validar novos times', () => {

    beforeEach(() => {
        cy.visit('/')
    })

    it('Cadastro de colaborador', () => {
        const defaultWorker = require('../../fixtures/worker_example.json');

        cy.get('input[placeholder="Digite seu nome"]').type(defaultWorker.name)
        cy.get('input[placeholder="Digite seu cargo"]').type(defaultWorker.position)
        cy.get('input[placeholder="Digite o endereço da imagem"]').type(defaultWorker.image)
        cy.get('select[required]').select('Back-end')
        cy.get('button').contains('Enviar').click()

    })

})