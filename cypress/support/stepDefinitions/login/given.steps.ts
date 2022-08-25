import { Given } from "cypress-cucumber-preprocessor/steps";

Given("I login with valid SSN {string}", (ssn: string) => {
  cy.login(ssn);
});
