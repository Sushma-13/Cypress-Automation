Feature: Load Alfakraft application

    Scenario: Opening Alfakraft page
        Given I open Alfakraft
        Then I see "Alfakraft" in the title
        And I see "Alfakraft" in the heading