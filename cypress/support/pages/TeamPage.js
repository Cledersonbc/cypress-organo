const locators = {
    INPUT_WORKER_NAME: 'label:contains(Nome) ~ input[placeholder="Digite seu nome"]',
    INPUT_POSITION: 'label:contains(Cargo) ~ input[placeholder="Digite seu cargo"]',
    INPUT_IMG_ADDRESS: 'label:contains(Imagem) ~ input[placeholder="Digite o endereço da imagem"]',
    SELECT_TEAM: 'label:contains(Time) ~ select[required]',
    BTN_SUBMIT: 'button:contains(Enviar)'
}

const TeamPage = {
    fillRecord: (teamName) => {
        const worker = require('../../fixtures/worker-team.json').find((mock) => mock.teamName === teamName)

        cy.print('Formulário Limpo')
        cy.get(locators.INPUT_WORKER_NAME).type(worker.name)
        cy.get(locators.INPUT_POSITION).type(worker.position)
        cy.get(locators.INPUT_IMG_ADDRESS).type(worker.image || '{backspace}')
        cy.get(locators.SELECT_TEAM).select(worker.teamName)
        cy.print('Formulário Preenchido')
        cy.get(locators.BTN_SUBMIT).contains('Enviar').click()
    },

    checkRecord: (teamName) => {
        const worker = require('../../fixtures/worker-team.json').find((mock) => mock.teamName === teamName)

        cy.print('Usuário Adicionado')
        cy.get('.team')
            .should('contain', teamName)
            .find('.worker')
            .should('contain', worker.name)
            .and('contain', worker.position)
    }
}

module.exports = { TeamPage }