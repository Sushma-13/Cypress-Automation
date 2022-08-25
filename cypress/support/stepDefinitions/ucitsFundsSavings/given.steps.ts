import {
    addSingleAmount,
    addMonthlyAmount,
} from "./../../utils/ucitsFundsSavings.utils";
import {
    Period,
    ucitsSingleTimeDeposit,
    ucitsMonthlyDeposit,
} from "../../utils/ucitsFundsSavings.utils";
import { Given } from "cypress-cucumber-preprocessor/steps";

Given("I click UCITS {string} deposit checkbox", (period: Period) => {
    const checkbox =
        period === Period.single ? ucitsSingleTimeDeposit : ucitsMonthlyDeposit;
    checkbox().click({ force: true });
});

Given(
    "I add {string} deposit amount {string}",
    (period: Period, amount: string = "50000") => {
        if (period === Period.single) {
            addSingleAmount(amount);
        } else if (period === Period.monthly) {
            addMonthlyAmount(amount);
        }
    }
);
