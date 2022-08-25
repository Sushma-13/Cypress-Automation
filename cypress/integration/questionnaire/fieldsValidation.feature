Feature: Validate fields in Questionnaire section

    Scenario Outline: Verifying dropdowns and number fields in Questionnaire section for different values, for <ssn>
        Given I open Alfakraft
        And I login with valid SSN "<ssn>"
        Then Validate all dropdowns
        And Validate all number fields
            | typed_value | displayed_value | status  |
            | 1           | 1               | valid   |
            | 22          | 22              | valid   |
            | 2.2         | 22              | valid   |
            | 2,2         | 22              | valid   |
            | a           |                 | invalid |
            | -           |                 | invalid |

        Examples:
            | ssn          |
            | 194203052222 |
            | 165560001975 |
