import {
  fundShareAmountMonthly,
  fundShareAmountSingle,
  ucitsSection,
  addNewSingleDepositFundButton,
  monthlyFundShareField,
  singleFundShareField,
  removeSingleDepositFundButton,
  removeMonthlyDepositFundButton,
  addNewMonthlyDepositFundButton,
  getAllSingleFundShareElements,
  getAllMonthlyFundShareElements,
  ucitsSingleTimeDeposit,
  ucitsMonthlyDeposit,
  Period,
  ucitsSingleAmountField,
  ucitsMonthlyAmountField,
  ucitsSingleFundDropdown,
  ucitsMonthlyFundDropdown,
} from "../../utils/ucitsFundsSavings.utils";
import { Then } from "cypress-cucumber-preprocessor/steps";

Then("UCITS checkboxes should be {string}", (status: string) => {
  ucitsSingleTimeDeposit().should(`be.${status}`);
  ucitsMonthlyDeposit().should(`be.${status}`);
});

Then(
  "Validate availablity of {string} deposit funds and shares dropdown",
  (period: string, dataTable: any) => {
    const amountField =
      period === Period.single
        ? ucitsSingleAmountField
        : ucitsMonthlyAmountField;
    const fundsDropdown =
      period === Period.single
        ? ucitsSingleFundDropdown
        : ucitsMonthlyFundDropdown;
    const fundShareField =
      period === Period.single ? singleFundShareField : monthlyFundShareField;

    dataTable.hashes().forEach(({ amount, availablity }) => {
      amountField().click().type(amount, { force: true });
      fundsDropdown().should(
        availablity === "available" ? "not.have.class" : "have.class",
        "disabled"
      );
      fundShareField().should(
        availablity === "available" ? "not.be.disabled" : "be.disabled"
      );
      amountField().clear({ force: true });
    });
  }
);

Then(
  "Add new fund button for {string} should be {string}",
  (period: Period, status: string) => {
    const addButton =
      period === Period.single
        ? addNewSingleDepositFundButton
        : addNewMonthlyDepositFundButton;
    addButton().should(
      status === "disabled" ? "be.disabled" : "not.be.disabled"
    );
  }
);

Then(
  "Verify remove button status for UCITS {string} deposit funds",
  (period: Period) => {
    if (period === Period.single) {
      getAllSingleFundShareElements().then((elements) => {
        for (let i = elements.length; i > 0; i--) {
          if (i <= 1) {
            removeSingleDepositFundButton().should("be.disabled");
          } else {
            removeSingleDepositFundButton().should("be.enabled").click();
          }
        }
      });
    } else {
      getAllMonthlyFundShareElements().then((elements) => {
        for (let i = elements.length; i > 0; i--) {
          if (i <= 1) {
            removeMonthlyDepositFundButton().should("be.disabled");
          } else {
            removeMonthlyDepositFundButton().should("be.enabled").click();
          }
        }
      });
    }
  }
);

Then(
  "{string} shares amount should be {string}",
  (period: Period, sharesAmount: string) => {
    sharesAmount.split(",").forEach((amount: string, index: number) => {
      amount = amount.trim();
      const shareAmountField =
        period === Period.single
          ? fundShareAmountSingle
          : fundShareAmountMonthly;
      shareAmountField(index)
        .invoke("text")
        .then((text: string) => {
          const actualAmount = text
            .split("")
            .filter((digit: string) => !isNaN(parseInt(digit)))
            .join("");
          expect(actualAmount).to.be.equal(amount);
        });
    });
  }
);

Then("UCITS section should be {string}", (status: string) => {
  cy.assertSectionFulfillment(ucitsSection, status);
});
