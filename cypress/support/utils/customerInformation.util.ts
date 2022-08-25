export const customerInformationSection = () => cy.get("#customer-information");

export const companyCheckbox = () => cy.get("#isCompany");

export const firstNameField = () => cy.get("#name");
export const lastNameField = () => cy.get("#surname");
export const ssnNumberField = () => cy.get("#ssn-number");

export const streetAddressField = () => cy.get("#customer_address_street");
export const zipCodeField = () => cy.get("#customer_address_zipcode");
export const cityField = () => cy.get("#customer_address_city");

export const phoneNumberField = () => cy.get("#customer_phonenumber_cell");
export const emailField = () => cy.get("#customer_email");

export const leiCodeField = () => cy.get("#customer_lei");

export const addPhoneNumber = (number?: string) => {
  const num = number || "1234567890";
  phoneNumberField().click().clear().type(num);
};

export const addEmail = (email?: string) => {
  const emailAddress = email || "xyz@gmail.com";
  emailField().click().clear().type(emailAddress);
};

export const addLeiCode = (leiCode?: string) => {
  const lei = leiCode || "77777777777777777777";
  leiCodeField().click().clear().type(lei);
};

export const fieldMapping = (fieldName: string) =>
  fieldName === "first name"
    ? firstNameField
    : fieldName === "last name"
    ? lastNameField
    : fieldName === "ssn"
    ? ssnNumberField
    : fieldName === "street address"
    ? streetAddressField
    : fieldName === "zip-code"
    ? zipCodeField
    : fieldName === "city"
    ? cityField
    : fieldName === "company checkbox"
    ? companyCheckbox
    : fieldName === "phone"
    ? phoneNumberField
    : fieldName === "email"
    ? emailField
    : null;
