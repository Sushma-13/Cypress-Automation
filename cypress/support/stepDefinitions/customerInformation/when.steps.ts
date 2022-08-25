import { isSSNCompany } from "./../../utils/common.util";
import {
  fieldMapping,
  ssnNumberField,
  phoneNumberField,
  emailField,
  leiCodeField,
} from "./../../utils/customerInformation.util";
import { When } from "cypress-cucumber-preprocessor/steps";

When(
  "I clear {string} field in customer information form",
  (fieldsName: string) => {
    fieldsName.split(",").forEach((fieldName) => {
      if (fieldName === "no") return;
      const cleanFieldName = fieldName.trim().toLowerCase();
      const field = fieldMapping(cleanFieldName);
      field().clear({ force: true });
    });
  }
);

When("Required customer information fields are invalid", () => {
  ssnNumberField()
    .invoke("val")
    .then((ssn: string) => {
      phoneNumberField().click().clear();
      emailField().click().clear();
      if (ssn && isSSNCompany(ssn)) {
        leiCodeField().click().clear();
      }
    });
});
