export const questionnaireSection = () => cy.get("#questionnaire");
export const questionnaireCollections = () =>
  cy.get(".Cob-Questionnaire-Collection");
export const dropdowns = () => cy.get(".Select");
export const numberFields = () => cy.get(".Cob-NumberField");

export const kyc_experience_fonder_UCITS_investments = () =>
  cy.get("#kyc_experience_fonder_UCITS_investments");
export const radio_kyc_knowledge_fonder_UCITS = () =>
  cy.get("#radio_kyc_knowledge_fonder_UCITS");

export const kyc_experience_fonder_AIF_specialfonder_investments = () =>
  cy.get("#kyc_experience_fonder_AIF_specialfonder_investments");
export const radio_kyc_knowledge_fonder_AIF_specialfonder = () =>
  cy.get("#radio_kyc_knowledge_fonder_AIF_specialfonder");

export const addUCITSTransactions = (val: string) => {
  return kyc_experience_fonder_UCITS_investments().click().type(val);
};

export const addAIFTransactions = (val: string) => {
  return kyc_experience_fonder_AIF_specialfonder_investments()
    .click()
    .type(val);
};

export const selectFirstOptionInDropdowns = () => {
  questionnaireSection().within(() => {
    dropdowns().each(($ele) => {
      cy.wrap($ele).type("{downarrow}{enter}");
    });
  });
};

export const fillDetailsInNumberFields = () => {
  questionnaireSection().within(() => {
    numberFields().each(($ele) => {
      cy.wrap($ele).click().type(Math.round(10).toString());
    });
  });
};

export const selectProductA = (index: number = 0) => {
  cy.get("#radio_product_class_a").within(() => {
    cy.get(`#radio_product_class_a_option_${index}`).click({ force: true });
  });
};

export const selectIsPEP = (index: number = 0) =>
  cy.get(`#radio_customer_pep_option_${index}`).click({ force: true });

export const radioIsUSPerson = (index: number = 0) =>
  cy.get(`#radio_customer_us_person_option_${index}`);
export const selectUSPerson = () => radioIsUSPerson(1).click({ force: true });
export const giveConsent = () =>
  cy.get("#checkbox_customer_kyc_gdpr").click({ force: true });

export const addValidQuestionnaireDetails = () => {
  selectFirstOptionInDropdowns();
  fillDetailsInNumberFields();
  selectProductA(0);
  selectIsPEP(1);
  radioIsUSPerson().click({ force: true });
  giveConsent();
};

export const mapExperience = (exp: string) => {
  exp = exp.toLowerCase();
  return exp === "no"
    ? "ingen"
    : exp === "basic"
    ? "grundlaggande"
    : exp === "informed"
    ? "informerad"
    : exp === "advanced"
    ? "avancerad"
    : "";
};
