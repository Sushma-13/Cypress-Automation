import {
  companyDraftsmanCheckbox,
  trusteeCheckbox,
  realPrincipalCheckbox,
  addValidCRInformation,
  addNewCRButton,
  crMapping,
} from "./../../utils/companyRepresentative.util";
import { When } from "cypress-cucumber-preprocessor/steps";

When(
  "I add {string} representatives valid information",
  (cr_number: string = "first") => {
    const seq: number = crMapping(cr_number);
    if (seq === 0) {
      console.error("Can't add more than 6 representatives");
    } else {
      addValidCRInformation(seq - 1);
    }
  }
);

When(
  "I select {string} roles for {string} representative",
  (checkedOptions: string, cr_number: string = "first") => {
    const seq: number = crMapping(cr_number);
    if (seq === 0) {
      console.error("Can't select role for more than 6 representatives");
    } else {
      const index: number = seq - 1;
      const options = {
        "Company Draftsman": () =>
          companyDraftsmanCheckbox(index).parent().click(),
        "Real Principal": () => realPrincipalCheckbox(index).parent().click(),
        Trustee: () => trusteeCheckbox(index).parent().click(),
      };
      const selectedOptions: string[] = checkedOptions
        .replace(", ", ",")
        .split(",")
        .filter((option: string) => option);
      selectedOptions.forEach((option: string) => {
        options[option]();
      });
    }
  }
);

When("I click on add new company representative", () => {
  addNewCRButton().click();
});
