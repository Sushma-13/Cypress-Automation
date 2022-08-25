import { When } from "cypress-cucumber-preprocessor/steps";
import { setSSNForLogin } from "../../utils/common.util";
import { homePage } from "../../utils/home.util";

When("I enter SSN as {string}", (ssn: string) => {
  setSSNForLogin(ssn);
  homePage().click();
});
