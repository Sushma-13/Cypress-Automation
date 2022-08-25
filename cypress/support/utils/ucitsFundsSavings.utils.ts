export const ucitsSection = () => cy.get("#productpurchase2-alfakraft");

export const ucitsSingleTimeDeposit = () => cy.get("#checkbox_autogiro_single");
export const ucitsMonthlyDeposit = () => cy.get("#checkbox_autogiro_monthly");

export const ucitsSingleAmountField = () =>
  cy.get("#customer_autogiro_single_amount");
export const ucitsMonthlyAmountField = () =>
  cy.get("#customer_autogiro_monthly_amount");

export const ucitsSingleFundDropdown = (index: number = 0) =>
  cy.get(`#fund_name_single_${index + 1}`);
export const ucitsMonthlyFundDropdown = (index: number = 0) =>
  cy.get(`#fund_name_monthly_${index + 1}`);

export const fundShareAmountSingle = (index: number = 0) =>
  cy.get(`#fund_amount_single_${index + 1}`);

export const fundShareAmountMonthly = (index: number = 0) =>
  cy.get(`#fund_amount_monthly_${index + 1}`);

export const addSingleAmount = (amount: string) => {
  ucitsSingleAmountField().click().type(amount, { force: true });
};

export const addMonthlyAmount = (amount: string) => {
  ucitsMonthlyAmountField().click().type(amount, { force: true });
};

export const selectFundForSingleDeposit = (
  index: number = 0,
  name?: string
) => {
  ucitsSingleFundDropdown(index).within(() => {
    cy.get("input[type='text']")
      .click({ force: true })
      .type((name || "{downarrow}") + "{enter}", {
        force: true,
      });
  });
};

export const selectFundForMonthlyDeposit = (
  index: number = 0,
  name?: string
) => {
  ucitsMonthlyFundDropdown(index).within(() => {
    cy.get("input[type='text']").type((name || "{downarrow}") + "{enter}", {
      force: true,
    });
  });
};

export const getAllSingleFundShareElements = () =>
  cy.get('[id^="fund_share_single_"]');
export const getAllMonthlyFundShareElements = () =>
  cy.get('[id^="fund_share_monthly_"]');

export const singleFundShareField = (index: number = 0) =>
  cy.get(`#fund_share_single_${index + 1}`);
export const monthlyFundShareField = (index: number = 0) =>
  cy.get(`#fund_share_monthly_${index + 1}`);

export const addSingleFundShare = (share: string, index: number = 0) =>
  singleFundShareField(index)
    .clear()
    .type("{selectall}" + share);

export const addMonthlyFundShare = (share: string, index: number = 0) =>
  monthlyFundShareField(index)
    .clear()
    .type("{selectall}" + share);

export const addSingleDepositFund = (
  share: string,
  index: number = 0,
  fundname?: string
) => {
  selectFundForSingleDeposit(index, fundname);
  addSingleFundShare(share, index);
};

export const addMonthlyDepositFund = (
  share: string,
  index: number = 0,
  fundname?: string
) => {
  selectFundForMonthlyDeposit(index, fundname);
  addMonthlyFundShare(share, index);
};

export const addNewSingleDepositFundButton = () =>
  cy.get("#add_funds_single_savings");

export const removeSingleDepositFundButton = () =>
  cy.get("#remove_funds_single_savings");

export const addNewMonthlyDepositFundButton = () =>
  cy.get("#add_funds_monthly_savings");

export const removeMonthlyDepositFundButton = () =>
  cy.get("#remove_funds_monthly_savings");

export enum Period {
  single = "single",
  monthly = "monthly",
}

export const fundsAddingLimit: number = 4;
