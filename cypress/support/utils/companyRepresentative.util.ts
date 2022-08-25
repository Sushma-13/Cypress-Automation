export const companyRepresentativeSection = () => cy.get("#poa");

export const companyDraftsmanCheckbox = (index: number) =>
  cy.get(`input[name="checkbox_signatory_${index}"]`).last();
export const realPrincipalCheckbox = (index: number) =>
  cy.get(`input[name="checkbox_ubo_${index}"]`).last();
export const trusteeCheckbox = (index: number) =>
  cy.get(`input[name="checkbox_mng_${index}"]`).last();

export const cr_FirstnameField = (index: number) =>
  cy.get(`input[name="company_representative_firstname_${index}"]`).last();
export const cr_LastnameField = (index: number) =>
  cy.get(`input[name="company_representative_lastname_${index}"]`).last();
export const cr_SSNField = (index: number) =>
  cy.get(`input[name="company_representative_sec_num_${index}"]`).last();
export const cr_EmailField = (index: number) =>
  cy.get(`input[name="company_representative_email_${index}"]`).last();
export const cr_CityField = (index: number) =>
  cy
    .get(`input[name="company_representative_citizenship_${index}"]`)
    .last()
    .parent()
    .parent();
export const cr_OwnershipField = (index: number) =>
  cy.get(`input[name="company_representative_percentage_${index}"]`).last();

export const addNewCRButton = () => cy.get("#poa").contains("Lägg till");
export const removeLastCRButton = () =>
  cy.get("#poa").contains("Ta bort sista");

export const companyRepresentatives = () => cy.get(".rep");

export const addFirstName = (index: number, name: string = "a") => {
  cr_FirstnameField(index).click().type(name);
  companyRepresentativeSection().click();
};

export const addLastName = (index: number, name: string = "z") => {
  cr_LastnameField(index).click().type(name);
  companyRepresentativeSection().click();
};

export const addSSN = (index: number, ssn: string = "198108180533") => {
  cr_SSNField(index).click().type(ssn);
  companyRepresentativeSection().click();
};

export const addEmail = (index: number, email: string = "abc@xyz.com") => {
  cr_EmailField(index).click().type(email);
  companyRepresentativeSection().click();
};

export const addCity = (index: number, city: string = "Andorra") => {
  cr_CityField(index)
    .click()
    .type("{selectall}{backspace}")
    .type(city)
    .type("{enter}");
  companyRepresentativeSection().click();
};

export const addValidCRInformation = (index: number) => {
  addFirstName(index);
  addLastName(index);
  addSSN(index);
  addEmail(index);
  addCity(index);
};

export const crMapping = (sequence: string): number => {
  switch (sequence) {
    case "first":
      return 1;
    case "second":
      return 2;
    case "third":
      return 3;
    case "fourth":
      return 4;
    case "fifth":
      return 5;
    case "sixth":
      return 6;
    default:
      return 0;
  }
};
