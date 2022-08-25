import { Then } from "cypress-cucumber-preprocessor/steps";
import {
  autogiroSection,
  addClearingNumber,
  clearingNumberField,
  addAccountNumber,
  accountNumberField,
  addCustomBankName,
  customBankNameField,
} from "../../utils/autogiro.util";

Then("Autogiro section should be {string}", (status: string) => {
  cy.assertSectionFulfillment(autogiroSection, status);
});

Then("Verify clearing number field", (dataTable: any) => {
  dataTable.hashes().forEach(({ clr_num, accepted_value, status }) => {
    addClearingNumber(clr_num);
    autogiroSection().click();
    if (accepted_value) {
      clearingNumberField()
        .should("have.value", accepted_value)
        .parent()
        .should("have.class", status);
    } else {
      clearingNumberField().should("not.have.value");
    }
    clearingNumberField().clear({ force: true });
  });
});

Then("Verify account field", (dataTable: any) => {
  dataTable.hashes().forEach(({ acc_num, accepted_value, status }) => {
    addAccountNumber(acc_num);
    autogiroSection().click();
    if (accepted_value) {
      accountNumberField()
        .should("have.value", accepted_value)
        .parent()
        .should("have.class", status);
    } else {
      accountNumberField().should("not.have.value");
    }
    accountNumberField().clear({ force: true });
  });
});

Then("Verify custom bank name", (dataTable: any) => {
  dataTable.hashes().forEach(({ custom_bank_name, status }) => {
    addCustomBankName(custom_bank_name);
    autogiroSection().click();
    customBankNameField().parent().should("have.class", status);
    customBankNameField().clear({ force: true });
  });
});
