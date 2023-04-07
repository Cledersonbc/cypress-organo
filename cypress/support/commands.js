// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

const { getCurrentFormatedDate } = require("./util")

Cypress.Commands.add('print', (printName) => {
    const testName = `${Cypress.spec.name}/${getCurrentFormatedDate()}-${Cypress.currentTest.title}`
    const fullPath = `${testName}/${Cypress.env('printNumber')} - ${printName === undefined ? 'screenshot' : printName}`
    const options = {
        overwrite: true,
        scale: true
    }

    cy.screenshot(fullPath, options)

    const newPrintNumber = Cypress.env('printNumber') + 1
    Cypress.env('printNumber', newPrintNumber)
})