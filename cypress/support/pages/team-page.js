/// <reference types='cypress' />
const locators = require('../elements/team.json')

class TeamPage {

	fillRecord(teamName) {
		cy.fixture('worker-team.json').then((mocks) => {
			const worker = mocks.find((mock) => mock.teamName === teamName)

			cy.print('Formulário Limpo')
			cy.get(locators.INPUT_WORKER_NAME).type(worker.name)
			cy.get(locators.INPUT_POSITION).type(worker.position)
			cy.get(locators.INPUT_IMG_ADDRESS).type(worker.image || '{backspace}')

			cy.get(locators.SELECT_TEAM).select(worker.teamName)
			cy.print('Formulário Preenchido')
			cy.get(locators.BTN_SUBMIT).contains('Enviar').click()
			cy.log('Formulário Preenchido')
		})
	}

	checkRecord(teamName) {
		cy.fixture('worker-team.json').then((mocks) => {
			const worker = mocks.find((mock) => mock.teamName === teamName)

			cy.print('Usuário Adicionado')
			cy.get(locators.SECTION_TEAM).should('contain', teamName)
			cy.get(locators.CARD_WORKER).should('contain', worker.name)
			cy.get(locators.CARD_WORKER).should('contain', worker.position)
			cy.log('Usuário Adicionado')
		})
	}
}

module.exports = TeamPage