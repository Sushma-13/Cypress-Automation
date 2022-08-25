export const autogiroSection = () => cy.get("#autogiro-alfakraft");

export const autogiroYesField = () =>
  cy.get("#customer_autogiro_option_0").parent();
export const autogiroNoField = () =>
  cy.get("#customer_autogiro_option_1").parent();

export const selectBankField = () => cy.get("#customer_account_bank");
export const selectBank = (bankName: string = dummyBank.name) =>
  selectBankField().type(bankName).type("{enter}");

export const clearingNumberField = () =>
  cy.get("#customer_account_bank_clearingno");
export const addClearingNumber = (
  clearingNumber: string = dummyBank.clearingNumber
) => clearingNumberField().click().type(clearingNumber);

export const accountNumberField = () => cy.get("#customer_account_bank_no");
export const addAccountNumber = (
  accountNumber: string = dummyBank.accountNumber
) => accountNumberField().click().type(accountNumber);

export const customBankNameField = () =>
  cy.get("#customer_account_bank_custom");
export const addCustomBankName = (
  bankName: string = dummyBank.customBankName
) => customBankNameField().click().type(bankName);

const dummyBank = {
  name: "Danske Bank",
  customBankName: "ICICI",
  clearingNumber: "1234",
  accountNumber: "1234567",
};
