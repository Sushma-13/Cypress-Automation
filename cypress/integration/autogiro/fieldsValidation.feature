Feature: Validate clearing number and account field in autogiro

    Valid clearing number and account number should have 4 and 6-10 digits respectively

    Scenario Outline: Verifying clearing and account number against a bank, for <ssn>
        Given I open Alfakraft
        * I login with valid SSN "<ssn>"
        * I select autogiro "Yes"
        And I select a bank
        Then Verify clearing number field
            | clr_num | accepted_value | status  |
            | 12      | 12             | invalid |
            | 1234    | 1234           | valid   |
            | 12-4    | 124            | invalid |
            | 12345   | 1234           | valid   |
            | abc     |                | invalid |

        Then Verify account field
            | acc_num     | accepted_value | status  |
            | 12345       | 12345          | invalid |
            | 12345678    | 12345678       | valid   |
            | 1234567890  | 1234567890     | valid   |
            | 12345678901 | 1234567890     | valid   |
            | abc         |                | invalid |
            | 123456789-  | 123456789      | valid   |

        Examples:
            | ssn          |
            | 194203052222 |
            | 165560001975 |


