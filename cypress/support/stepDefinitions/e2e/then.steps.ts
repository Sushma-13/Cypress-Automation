import { Then } from "cypress-cucumber-preprocessor/steps";
import { createAgreementsButton } from "../../utils/e2e.util";

Then("Create Agreement button should be {string}", (status: string) => {
    if (status === "enabled") {
        createAgreementsButton().should("be.enabled");
    } else if (status === "disabled") {
        createAgreementsButton().should("be.disabled");
    } else {
        createAgreementsButton().should("have.class", status);
    }
});
