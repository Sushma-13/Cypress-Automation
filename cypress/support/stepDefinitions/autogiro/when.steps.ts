import { When } from "cypress-cucumber-preprocessor/steps";
import {
  addAccountNumber,
  addClearingNumber,
  addCustomBankName,
} from "../../utils/autogiro.util";

When(
  "I enter clearing number {string} and account number {string}",
  (clrNumber: string, accNumber: string) => {
    addClearingNumber(clrNumber);
    addAccountNumber(accNumber);
  }
);

When("I enter custom bank name {string}", (bankName: string) => {
  addCustomBankName(bankName);
});
