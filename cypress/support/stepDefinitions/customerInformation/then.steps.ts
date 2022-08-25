import {
  companyCheckbox,
  customerInformationSection,
  emailField,
  fieldMapping,
  leiCodeField,
  phoneNumberField,
  ssnNumberField,
} from "./../../utils/customerInformation.util";
import { Then } from "cypress-cucumber-preprocessor/steps";

Then(`I see {string} fields in customer information form`, (fields: string) => {
  fields.split(",").forEach((field: string) => {
    customerInformationSection().contains(field.trim()).should("be.visible");
  });
});

Then(`{string} fields should be disabled`, (fields: string) => {
  fields.split(",").forEach((field: string) => {
    customerInformationSection()
      .contains(field.trim())
      .parent()
      .should("have.class", "read-only")
      .should("have.class", "valid");
  });
});

Then(`{string} should redirect to {string}`, (label: string, url: string) => {
  cy.contains(label)
    .should("have.attr", "href", url)
    .should("have.attr", "target", "_blank");
});

Then("Verify {string} fields", (fieldsName: string) => {
  ssnNumberField()
    .invoke("val")
    .then((ssn: string) => {
      fieldsName.split(",").forEach((fieldName) => {
        const cleanFieldName = fieldName.trim().toLowerCase();
        const field = fieldMapping(cleanFieldName);
        if (!ssn) {
          if (field === companyCheckbox) {
            field().parent().should("be.visible");
          } else {
            field()
              .should("be.empty")
              .parent()
              .should("have.class", "required");
          }
        } else {
          field()
            .parent()
            .should("have.class", "required")
            .and("not.be.empty")
            .and("have.class", "read-only")
            .and("have.class", "valid");
        }
      });
    });
});

Then("Verify phone number field for different inputs", (dataTable: any) => {
  dataTable.hashes().forEach(({ phone, isValid }) => {
    const emptyPhoneField = phoneNumberField().parent().click().clear();
    if (phone) {
      emptyPhoneField.type(phone);
    }
    emptyPhoneField.should(
      isValid === "true" ? "have.class" : "not.have.class",
      "valid"
    );
  });
});

Then("Verify email field for different inputs", (dataTable: any) => {
  emailField().parent().should("have.class", "required");
  dataTable.hashes().forEach(({ email, isValid }) => {
    const emptyEmailField = emailField().parent().click().clear();
    if (email) {
      emptyEmailField.type(email);
    }
    emptyEmailField.should(
      isValid === "true" ? "have.class" : "not.have.class",
      "valid"
    );
  });
});

Then("Verify Lei code for different inputs", (dataTable: any) => {
  dataTable.hashes().forEach(({ leiCode, isValid }) => {
    const emptyLeiCodeField = leiCodeField().parent().click().clear();
    if (leiCode) {
      emptyLeiCodeField.type(leiCode.replaceAll("/", ""));
    }
    emptyLeiCodeField.should(
      isValid === "true" ? "have.class" : "not.have.class",
      "valid"
    );
  });
});

Then("Customer Information section should be {string}", (status: string) => {
  cy.assertSectionFulfillment(customerInformationSection, status);
});
