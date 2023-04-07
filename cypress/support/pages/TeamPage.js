const locators = {
    INPUT_WORKER_NAME: '.main-form form input[placeholder="Digite seu nome"]',
    INPUT_POSITION: '.main-form form input[placeholder="Digite seu cargo"]',
    INPUT_IMG_ADDRESS: '.main-form form input[placeholder="Digite o endereço da imagem"]',
    SELECT_TEAM: '.main-form form select[required]',
    BTN_SUBMIT: '.main-form form button'
}

const TeamPage = {
    fillRecord: (teamName) => {
        const worker = require('../../fixtures/worker_team.json').find((mock) => mock.teamName === teamName)

        cy.get(locators.INPUT_WORKER_NAME).type(worker.name)
        cy.get(locators.INPUT_POSITION).type(worker.position)
        cy.get(locators.INPUT_IMG_ADDRESS).type(worker.image || '{backspace}')
        cy.get(locators.SELECT_TEAM).select(worker.teamName)
        cy.get(locators.BTN_SUBMIT).contains('Enviar').click()
    },

    checkRecord: (teamName) => {
        const worker = require('../../fixtures/worker_team.json').find((mock) => mock.teamName === teamName)

        cy.get('.team')
            .should('contain', teamName)
            .find('.worker')
            .should('contain', worker.name)
            .and('contain', worker.position)
    }
}

module.exports = { TeamPage }