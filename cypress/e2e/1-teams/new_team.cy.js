/// <reference types="cypress" />

describe('1 - Validar novo time', () => {

    beforeEach(() => {
        cy.visit('/')
    })

    const locators = {
        INPUT_WORKER_NAME: '.main-form form input[placeholder="Digite seu nome"]',
        INPUT_POSITION: '.main-form form input[placeholder="Digite seu cargo"]',
        INPUT_IMG_ADDRESS: '.main-form form input[placeholder="Digite o endereço da imagem"]',
        SELECT_TEAM: '.main-form form select[required]',
        BTN_SUBMIT: '.main-form form button'
    }

    it('1.1 - Cadastro de colaborador Front-end', () => {
        const teamName = 'Front-end'
        const worker = require('../../fixtures/worker_team.json').find((mock) => mock.teamName === teamName)

        validateWorkerRegister(worker, teamName)

    })

    it('1.2 - Cadastro de colaborador Back-end', () => {
        const teamName = 'Back-end'
        const worker = require('../../fixtures/worker_team.json').find((mock) => mock.teamName === teamName)

        validateWorkerRegister(worker, teamName)
    })

    it('1.3 - Cadastro de colaborador UX & Design', () => {
        const teamName = 'UX & Design'
        const worker = require('../../fixtures/worker_team.json').find((mock) => mock.teamName === teamName)

        validateWorkerRegister(worker, teamName)
    })

    it('1.4 - Cadastro de colaborador Mobile', () => {
        const teamName = 'Mobile'
        const worker = require('../../fixtures/worker_team.json').find((mock) => mock.teamName === teamName)

        validateWorkerRegister(worker, teamName)
    })

    it('1.5 - Cadastro de colaborador DevOps', () => {
        const teamName = 'DevOps'
        const worker = require('../../fixtures/worker_team.json').find((mock) => mock.teamName === teamName)

        validateWorkerRegister(worker, teamName)
    })

    it('1.6 - Cadastro de colaborador Data Science', () => {
        const teamName = 'Data Science'
        const worker = require('../../fixtures/worker_team.json').find((mock) => mock.teamName === teamName)

        validateWorkerRegister(worker, teamName)
    })

    it('1.7 - Cadastro de colaborador Inovação e Gestão', () => {
        const teamName = 'Inovação e Gestão'
        const worker = require('../../fixtures/worker_team.json').find((mock) => mock.teamName === teamName)

        validateWorkerRegister(worker, teamName)
    })

    const validateWorkerRegister = (worker, teamName) => {
        cy.get(locators.INPUT_WORKER_NAME).type(worker.name)
        cy.get(locators.INPUT_POSITION).type(worker.position)
        cy.get(locators.INPUT_IMG_ADDRESS).type(worker.image || '{backspace}')
        cy.get(locators.SELECT_TEAM).select(worker.teamName)
        cy.get(locators.BTN_SUBMIT).contains('Enviar').click()

        cy.get('.team')
            .should('contain', teamName)
            .find('.worker')
            .should('contain', worker.name)
            .and('contain', worker.position)
    }

})