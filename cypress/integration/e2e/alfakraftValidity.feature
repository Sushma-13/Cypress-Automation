Feature: Validate create agreements button enablity

    Create agreements button should only be enabled when all alfakraft feilds are valid

    Background: Login
        Given I open Alfakraft

    Scenario: customer logs in and compelete the form will allow him to create agreements
        Given I login with valid SSN "194203052222"
        * All customer information fields are  validly filled
        * I select autogiro "No"
        * I Fill all details in questionnaire
        Then Create Agreement button should be "enabled"

    Scenario: customer logs in and leave customer information form will dis-allow him to create agreements
        Given I login with valid SSN "194203052222"
        * I select autogiro "No"
        * I Fill all details in questionnaire
        Then Create Agreement button should be "disabled"

    Scenario: customer logs in and leave autogiro form will dis-allow him to create agreements
        Given I login with valid SSN "194203052222"
        * All customer information fields are  validly filled
        * I Fill all details in questionnaire
        Then Create Agreement button should be "disabled"

    Scenario: customer logs in and leave questionnaire form will dis-allow him to create agreements
        Given I login with valid SSN "194203052222"
        * All customer information fields are  validly filled
        * I select autogiro "No"
        Then Create Agreement button should be "disabled"

    Scenario: company logs in and compelete the form will allow them to create agreements
        Given I login with valid SSN "165560001975"
        * All customer information fields are  validly filled
        * I add "first" representatives valid information
        * I select "Company Draftsman,Trustee" roles for "first" representative
        * I select autogiro "No"
        * I Fill all details in questionnaire
        Then Create Agreement button should be "enabled"

    Scenario: company logs in and leave customer information form will dis-allow him to create agreements
        Given I login with valid SSN "165560001975"
        * I add "first" representatives valid information
        * I select "Company Draftsman,Trustee" roles for "first" representative
        * I select autogiro "No"
        * I Fill all details in questionnaire
        Then Create Agreement button should be "disabled"

    Scenario: company logs in and leave autogiro form will dis-allow him to create agreements
        Given I login with valid SSN "165560001975"
        * All customer information fields are  validly filled
        * I add "first" representatives valid information
        * I select "Company Draftsman,Trustee" roles for "first" representative
        * I Fill all details in questionnaire
        Then Create Agreement button should be "disabled"

    Scenario: company logs in and fill company representative form invalid will dis-allow him to create agreements
        Given I login with valid SSN "165560001975"
        * All customer information fields are  validly filled
        * I add "first" representatives valid information
        * I select "" roles for "first" representative
        * I select autogiro "No"
        * I Fill all details in questionnaire
        Then Create Agreement button should be "disabled"

    Scenario: company logs in and leave questionnaire form will dis-allow him to create agreements
        Given I login with valid SSN "165560001975"
        * All customer information fields are  validly filled
        * I add "first" representatives valid information
        * I select "Company Draftsman,Trustee" roles for "first" representative
        * I select autogiro "No"
        Then Create Agreement button should be "disabled"