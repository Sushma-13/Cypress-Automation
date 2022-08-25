import { Given } from "cypress-cucumber-preprocessor/steps";
import { clickSingleDepositCheckbox } from "../../utils/aifFundSaving.util";

Given("I click one-time deposit AIF checkbox", () => {
  clickSingleDepositCheckbox();
});
