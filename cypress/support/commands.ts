import { setSSNForLogin } from "./utils/common.util";
import { loginButton } from "./utils/home.util";

Cypress.Commands.add("login", (ssn: string) => {
  setSSNForLogin(ssn);
  loginButton().click();
});

Cypress.Commands.add(
  "assertSectionFulfillment",
  (section: any, status: string) => {
    section().should(
      status.toLowerCase() === "fulfilled" ? "have.class" : "not.have.class",
      "fulfilled"
    );
  }
);
