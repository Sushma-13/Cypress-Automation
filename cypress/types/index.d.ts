/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    login(ssn: string): void;
    assertSectionFulfillment(section: any, status: string): void;
  }
}
