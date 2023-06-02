/// <reference types='cypress' />
const { Given, Then, When } = require('cypress-cucumber-preprocessor/steps')
const TeamPage = require('../pages/team-page')
const teamPage = new TeamPage()

Given('I open Organo page', () => {
	cy.visit('/')
})

When('I fill the {string} user correctly', (teamName) => {
	teamPage.fillRecord(teamName)
})

Then('an user from {string} is recorded with successful', (teamName) => {
	teamPage.checkRecord(teamName)
})