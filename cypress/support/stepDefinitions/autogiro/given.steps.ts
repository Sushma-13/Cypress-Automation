import { Given } from "cypress-cucumber-preprocessor/steps";
import {
  autogiroYesField,
  autogiroNoField,
  selectBank,
} from "../../utils/autogiro.util";

Given("I select autogiro {string}", (option: string) => {
  if (option.toLowerCase() === "yes") {
    autogiroYesField().click();
  } else {
    autogiroNoField().click();
  }
});

Given("I select a bank", () => {
  selectBank();
});

Given("I select a bank {string}", (bankName: string) => {
  selectBank(bankName);
});
