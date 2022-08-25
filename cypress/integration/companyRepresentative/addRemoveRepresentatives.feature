Feature: Validate addition and removal of company representatives with valid data

    Scenario Outline: Adding company representatives and then removing them, for <ssn>
        Given I open Alfakraft
        * I login with valid SSN "<ssn>"
        Then Verify add button status while adding representatives
        And Verify remove button status while removing representatives

        Examples:
            | ssn          |
            | 165560001975 |