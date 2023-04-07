// type definitions for Cypress object "cy"
/// <reference types="cypress" />

// type definitions for custom commands like "createDefaultTodos"
/// <reference types="../support" />

declare namespace Cypress {
    interface Chainable<Subject> {
        print(printName: string): void
    }
}