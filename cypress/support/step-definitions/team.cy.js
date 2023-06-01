/// <reference types='cypress' />
import { Given, Then, When } from 'cypress-cucumber-preprocessor/steps'
import TeamPage from '../pages/team-page'
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