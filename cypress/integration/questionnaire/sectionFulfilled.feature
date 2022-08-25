Feature: Validate fulfillment of Questionnaire section

    If All fields are filled, Questionnaire section should be valid

    Background: Visit application
        Given I open Alfakraft

    Scenario Outline: Questionnaire section should be fulfilled, when form is complete, for <ssn>
        Given I login with valid SSN "<ssn>"
        When I Fill all details in questionnaire
        Then Questionnaire section should be "fulfilled"

        Examples:
            | ssn          |
            | 194203052222 |
            | 165560001975 |

    Scenario Outline: Questionnaire section not should be fulfilled, when form is in-complete, for <ssn>
        Given I login with valid SSN "<ssn>"
        Then Questionnaire section should be "unfulfilled"

        Examples:
            | ssn          |
            | 194203052222 |
            | 165560001975 |

    Scenario Outline: Questionnaire section not should be fulfilled, for US customer with ssn <ssn>
        Given I login with valid SSN "<ssn>"
        When I Fill all details in questionnaire
        And Select for US person
        Then Questionnaire section should be "unfulfilled"

        Examples:
            | ssn          |
            | 194203052222 |
            | 165560001975 |