import { Then } from "cypress-cucumber-preprocessor/steps";
import { loginButton, ssnField } from "../../utils/home.util";

Then("I see agreement form", () => {
  cy.get(".Cob-sections").should("be.visible");
});

Then("SSN field should be {string}", (ssnFieldStatus: string) => {
  ssnField().parent().should("have.class", ssnFieldStatus);
});

Then("Gå vidare button should be {string}", (status: string) => {
  loginButton().should(status === "enabled" ? "be.enabled" : "be.disabled");
});
