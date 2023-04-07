/// <reference types="cypress" />
const { Given, Then, When } = require("cypress-cucumber-preprocessor/steps")
const { TeamPage } = require("../../../support/pages/TeamPage")

Given('I open Organo page', () => {
    cy.visit('/')
})

When('I fill the {string} user correctly', (teamName) => {
    TeamPage.fillRecord(teamName)
})

Then('an user from {string} is recorded with successful', (teamName) => {
    TeamPage.checkRecord(teamName)
})