Feature: Option to choose direct debit

    This should be visible only when autogiro is selected

    Scenario Outline: direct debit question should be visible when autogiro is selected as <autogiro_option>
        Given I open Alfakraft
        * I login with valid SSN "194203052222"
        * I select autogiro "<autogiro_option>"
        And I click one-time deposit AIF checkbox
        Then Question to use direct debit for one-time deposit should be "<availablity>"

        Examples:
            | autogiro_option | availablity  |
            | Yes             | available    |
            | No              | un-available |
