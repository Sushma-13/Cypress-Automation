import { clickCheckboxForCompany, enterSSN, ssnField } from "./home.util";

export const isSSNCompany = (ssn: string) => !ssn.startsWith("19");

export const setSSNForLogin = (ssn: string) => {
  enterSSN(ssn);
  if (isSSNCompany(ssn)) {
    clickCheckboxForCompany();
    ssnField().click({ force: true });
  }
};

export const getNumberFromText = (text: string) => {
  return text
    .split("")
    .filter((c) => !Number.isNaN(parseInt(c)))
    .join("");
};
