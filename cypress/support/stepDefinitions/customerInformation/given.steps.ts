import { isSSNCompany } from "./../../utils/common.util";
import {
  ssnNumberField,
  firstNameField,
  lastNameField,
  streetAddressField,
  zipCodeField,
  cityField,
  addPhoneNumber,
  addEmail,
  addLeiCode,
} from "./../../utils/customerInformation.util";
import { Given } from "cypress-cucumber-preprocessor/steps";

Given("All customer information fields are  validly filled", () => {
  ssnNumberField()
    .invoke("val")
    .then((ssn: string) => {
      if (!ssn) {
        firstNameField().click().type("abc");
        lastNameField().click().type("xyz");
        ssnNumberField().click().type("198108180533");
        streetAddressField().click().type("xyz Nagar");
        zipCodeField().click().type("0202");
        cityField().click().type("Jaipur");
      }
      addPhoneNumber();
      addEmail();
      if (ssn && isSSNCompany(ssn)) {
        addLeiCode();
      }
    });
});
