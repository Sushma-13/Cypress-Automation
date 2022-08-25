import { Given } from "cypress-cucumber-preprocessor/steps";

Given("I open Alfakraft", () => {
  cy.visit("/");
});
