Feature: Validate Autogiro section

    If All fields are validly filled, autogiro section should be fulfilled else not

    Background: Visit application
        Given I open Alfakraft

    Scenario Outline: Autogiro section should be fulfilled when selected No , for <ssn>
        Given I login with valid SSN "<ssn>"
        And I select autogiro "No"
        Then Autogiro section should be "fulfilled"

        Examples:
            | ssn          |
            | 194203052222 |
            | 165560001975 |

    Scenario Outline: Autogiro section should be <fulfill_status>, when autogiro is yes, and bank details <bank_name>,<clearing_number>,<account_number> are added, for <ssn>
        Given I login with valid SSN "<ssn>"
        * I select autogiro "Yes"
        * I select a bank "<bank_name>"
        When I enter clearing number "<clearing_number>" and account number "<account_number>"
        Then Autogiro section should be "<fulfill_status>"

        Examples:
            | ssn          | bank_name   | clearing_number | account_number | fulfill_status |
            | 194203052222 | Danske Bank | 123             | 1234567        | unfulfilled    |
            | 194203052222 | Danske Bank | 1234            | 12345          | unfulfilled    |
            | 194203052222 | Danske Bank | 1234            | 1234567        | fulfilled      |
            | 165560001975 | Danske Bank | 123             | 1234567        | unfulfilled    |
            | 165560001975 | Danske Bank | 1234            | 12345          | unfulfilled    |
            | 165560001975 | Danske Bank | 1234            | 1234567        | fulfilled      |

    Scenario Outline: Autogiro section should be <fulfill_status>, while adding custom bank as <custom_bank_name>,<clearing_number>,<account_number>, for <ssn>
        Given I login with valid SSN "<ssn>"
        * I select autogiro "Yes"
        And I select a bank "Övriga"
        When I enter custom bank name "<custom_bank_name>"
        And I enter clearing number "<clearing_number>" and account number "<account_number>"
        Then Autogiro section should be "<fulfill_status>"

        Examples:
            | ssn          | custom_bank_name | clearing_number | account_number | fulfill_status |
            | 194203052222 | ICICI            | 123             | 1234567        | unfulfilled    |
            | 194203052222 | ICICI            | 1234            | 12345          | unfulfilled    |
            | 194203052222 | ICICI            | 1234            | 1234567        | fulfilled      |
            | 165560001975 | ICICI            | 123             | 1234567        | unfulfilled    |
            | 165560001975 | ICICI            | 1234            | 12345          | unfulfilled    |
            | 165560001975 | ICICI            | 1234            | 1234567        | fulfilled      |
