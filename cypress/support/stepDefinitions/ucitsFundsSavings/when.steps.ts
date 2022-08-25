import {
  addSingleDepositFund,
  fundsAddingLimit,
  addNewSingleDepositFundButton,
  addMonthlyDepositFund,
  addNewMonthlyDepositFundButton,
} from "./../../utils/ucitsFundsSavings.utils";
import { Period } from "./../../utils/UCITSFundsSavings.utils";
import { When } from "cypress-cucumber-preprocessor/steps";

When(
  "I add {string} deposit fund and its share {string}",
  (period: Period, shares?: any) => {
    shares.split(",").forEach((share: string, index: number) => {
      share = share.trim();
      if (share) {
        if (index > 0 && index < fundsAddingLimit) {
          period === Period.single
            ? addNewSingleDepositFundButton().click({ force: true })
            : addNewMonthlyDepositFundButton().click({ force: true });
        }
        period === Period.single
          ? addSingleDepositFund(share, index)
          : addMonthlyDepositFund(share, index);
      }
    });
  }
);
