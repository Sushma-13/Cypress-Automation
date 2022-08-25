import {
    addValidQuestionnaireDetails,
    selectUSPerson,
} from "./../../utils/questionnaire.util";
import { When } from "cypress-cucumber-preprocessor/steps";

When("I Fill all details in questionnaire", () => {
    addValidQuestionnaireDetails();
});

When("Select for US person", () => {
    selectUSPerson();
});
