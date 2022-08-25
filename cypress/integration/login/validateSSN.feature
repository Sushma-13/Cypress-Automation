Feature: Validate SSN number

    Ga vidare button should be disabled and error icon should appear
    when SSN is invalid, else enabled

    Scenario Outline: Gå vidare button is <button_status>, for ssn <ssn>
        Given I open Alfakraft
        When I enter SSN as "<ssn>"
        Then SSN field should be "<ssn_field_status>"
        And Gå vidare button should be "<button_status>"

        Examples:
            | ssn          | ssn_field_status | button_status |
            | 194203052222 | valid            | enabled       |
            | 1942030522   | invalid          | disabled      |
            | 165560001975 | valid            | enabled       |
            | 165501975    | invalid          | disabled      |

# Examples table have 3 columns ssn, ssn_field_status, button_status
# ssn_field_status have 2 values = valid, invalid
# button_status have 2 values = enabled, disabled