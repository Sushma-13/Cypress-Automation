Feature: Validate company representative section

    Background: Login as a company
        Given I open Alfakraft
        * I login with valid SSN "165560001975"

    Scenario Outline: Adding one representative with <cr1_role> role
        When I add "first" representatives valid information
        * I select "<cr1_role>" roles for "first" representative
        Then Company representative section should be "<status>"

        Examples:
            | cr1_role                                 | status      |
            | Company Draftsman                        | unfulfilled |
            | Real Principal                           | unfulfilled |
            | Trustee                                  | unfulfilled |
            | Company Draftsman,Real Principal         | unfulfilled |
            | Company Draftsman,Trustee                | fulfilled   |
            | Real Principal,Trustee                   | unfulfilled |
            | Company Draftsman,Real Principal,Trustee | fulfilled   |

    Scenario Outline: Adding two representatives with <cr1_role> and <cr2_role> role respectively
        When I add "first" representatives valid information
        * I click on add new company representative
        * I add "second" representatives valid information
        * I select "<cr1_role>" roles for "first" representative
        * I select "<cr2_role>" roles for "second" representative
        Then Company representative section should be "<status>"

        Examples:
            | cr1_role                                 | cr2_role       | status      |
            | Company Draftsman                        | Real Principal | unfulfilled |
            | Real Principal                           | Trustee        | unfulfilled |
            | Company Draftsman                        | Trustee        | fulfilled   |
            | Company Draftsman,Real Principal         | Trustee        | fulfilled   |
            | Company Draftsman,Real Principal,Trustee | Real Principal | fulfilled   |
