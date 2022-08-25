Feature: Login

    Scenario Outline: Login as a valid <ssn_type>, should be successful
        Given I open Alfakraft
        And I login with valid SSN "<ssn>"
        Then I see agreement form

        Examples:
            | ssn_type | ssn          |
            | Customer | 194203052222 |
            | Company  | 165560001975 |

# Examples table have 2 columns ssn_type, ssn
# ssn_type is Customer or Company
# ssn should be a valid ssn