import { Then } from "cypress-cucumber-preprocessor/steps";

Then("I see {string} in the title", (title) => {
  cy.title().should("include", title);
});

Then("I see {string} in the heading", (title) => {
  cy.get("h1").should("include.text", title);
});
