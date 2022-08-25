Feature: Validate adding custom bank

    Custom bank name field should accept all value

    Scenario Outline: Verifying adding custom bank and its name, for <ssn>
        Given I open Alfakraft
        * I login with valid SSN "<ssn>"
        * I select autogiro "Yes"
        And I select a bank "Övriga"
        Then Verify custom bank name
            | custom_bank_name | status |
            | ICICI            | valid  |
            | 1                | valid  |
            | -                | valid  |

        Examples:
            | ssn          |
            | 194203052222 |
            | 165560001975 |