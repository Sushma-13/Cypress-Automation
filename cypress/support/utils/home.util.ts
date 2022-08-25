export const ssnField = () => cy.get("#ssnField");
export const enterSSN = (ssn: string) => ssnField().type(ssn);
export const homePage = () => cy.get("#view-start");
export const clickCheckboxForCompany = () =>
  cy.get("#isCompanyAccount").click({ force: true });
export const loginButton = () => cy.get("#login-btn");
