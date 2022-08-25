import { When } from "cypress-cucumber-preprocessor/steps";
import { addAIFAmount } from "../../utils/aifFundSaving.util";

When("I Add AIF fund amount {string}", (amount: string) => {
  addAIFAmount(amount);
});
