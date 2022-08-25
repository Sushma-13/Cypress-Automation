export const aifSection = () => cy.get("#funds_savings_AIF");
export const productPurchaseAlfakraft = () =>
  cy.get("#productpurchase-alfakraft");

export const clickSingleDepositCheckbox = () =>
  cy.get("#checkbox_aif_single").click({ force: true });

export const aifAmountToInvest = () => cy.get("#AIF_amount_to_invest");
export const addAIFAmount = (amount: string) =>
  aifAmountToInvest().click().type(amount);

export const displayedInvestedAmount = () => cy.get("#AIF_invested_amount");

export const directDebitAIF = () => cy.get("#customer_product_autogiro_AIF");
export const selectDirectDebit = (agree: boolean) => {
  directDebitAIF().within(() => {
    cy.get(`#customer_product_autogiro_AIF_option_${agree ? "0" : "1"}`).click({
      force: true,
    });
  });
};
