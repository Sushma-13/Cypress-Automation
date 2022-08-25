import {
  dropdowns,
  numberFields,
  addAIFTransactions,
  addUCITSTransactions,
  kyc_experience_fonder_UCITS_investments,
  kyc_experience_fonder_AIF_specialfonder_investments,
  radio_kyc_knowledge_fonder_UCITS,
  radio_kyc_knowledge_fonder_AIF_specialfonder,
  mapExperience,
  questionnaireSection,
} from "./../../utils/questionnaire.util";
import { Then } from "cypress-cucumber-preprocessor/steps";

Then("Validate all dropdowns", () => {
  questionnaireSection().within(() => {
    dropdowns().each(($ele) => {
      cy.wrap($ele)
        .click()
        .type("{enter}")
        .should("be.visible")
        .type("{downarrow}{enter}")
        .should("have.class", "valid");
    });
  });
});

Then("Validate all number fields", (dataTable: any) => {
  questionnaireSection().within(() => {
    numberFields().each(($ele) => {
      const ele = cy.wrap($ele);
      ele.within(() => {
        dataTable
          .hashes()
          .forEach(({ typed_value, displayed_value, status }) => {
            ele.click().type(typed_value);
            ele.get(".TextField-input").should("have.value", displayed_value);
            ele
              .get(".Cob-NumberField-TextField")
              .should(
                status === "valid" ? "have.class" : "not.have.class",
                "valid"
              );
            cy.wrap($ele).click().clear();
          });
      });
    });
  });
});

Then("Validate experience with {string}", (fund: string, dataTable: any) => {
  questionnaireSection().within(() => {
    dataTable.hashes().forEach(({ years, experience }) => {
      if (fund === "UCITS") {
        if (years) {
          addUCITSTransactions(years);
        }
        radio_kyc_knowledge_fonder_UCITS().within(() => {
          cy.get(`input[value=${mapExperience(experience)}]`).should(
            "be.checked"
          );
        });
        kyc_experience_fonder_UCITS_investments().click().clear();
      } else if (fund === "AIF") {
        if (years) {
          addAIFTransactions(years);
        }
        radio_kyc_knowledge_fonder_AIF_specialfonder().within(() => {
          cy.get(`input[value=${mapExperience(experience)}]`).should(
            "be.checked"
          );
        });
        kyc_experience_fonder_AIF_specialfonder_investments().click().clear();
      }
    });
  });
});

Then(`Questionnaire section should be {string}`, (status: string) => {
  cy.assertSectionFulfillment(questionnaireSection, status);
});
