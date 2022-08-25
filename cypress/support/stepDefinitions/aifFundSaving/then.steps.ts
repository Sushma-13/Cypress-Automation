import { getNumberFromText } from "./../../utils/common.util";
import {
  addAIFAmount,
  aifAmountToInvest,
  directDebitAIF,
  displayedInvestedAmount,
  productPurchaseAlfakraft,
} from "./../../utils/aifFundSaving.util";
import { Then } from "cypress-cucumber-preprocessor/steps";

Then(
  "Question to use direct debit for one-time deposit should be {string}",
  (availablity: string) => {
    directDebitAIF().should(
      availablity === "available" ? "exist" : "not.exist"
    );
  }
);

Then("Verify amount to invest with AIF", (dataTable: any) => {
  dataTable
    .hashes()
    .forEach(({ typed_amount, accepted_amount, invested_amount }) => {
      addAIFAmount(typed_amount);
      displayedInvestedAmount()
        .invoke("text")
        .then((text: string) => {
          const cleanedText = getNumberFromText(text);
          expect(cleanedText).to.be.equal(invested_amount);
        });
      aifAmountToInvest()
        .should("have.value", accepted_amount)
        .clear({ force: true });
    });
});

Then("AIF section should be {string}", (status: string) => {
  cy.assertSectionFulfillment(productPurchaseAlfakraft, status);
});
