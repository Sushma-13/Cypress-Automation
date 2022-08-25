Feature: Validate availablity of company representative section

    company representative section should only be available for company ssn

    Background: Visit application
        Given I open Alfakraft

    Scenario Outline: Company representative section should be <availablity>, for <ssn>
        Given I login with valid SSN "<ssn>"
        Then Company Representative form should be "<availablity>"

        Examples:
            | ssn          | availablity |
            | 194203052222 | unavailable |
            | 165560001975 | available   |
