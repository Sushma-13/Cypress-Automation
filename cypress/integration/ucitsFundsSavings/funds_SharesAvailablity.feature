Feature: Validate availablity of UCITS funds and share fields

    Funds and shares fields should be disabled for min amount(50000 SEK for single, 1000 SEK for monthly)

    Background: Login and set autogiro as yes
        Given I open Alfakraft
        And I login with valid SSN "194203052222"
        And I select autogiro "Yes"

    Scenario: Verifying field availablity, for single deposit
        Given I click UCITS "single" deposit checkbox
        Then Validate availablity of "single" deposit funds and shares dropdown
            | amount | availablity |
            | 0      | unavailable |
            | 2000   | unavailable |
            | 50000  | available   |
            | 120000 | available   |

    Scenario: Verifying field availablity, for monthly deposit
        Given I click UCITS "monthly" deposit checkbox
        Then Validate availablity of "monthly" deposit funds and shares dropdown
            | amount | availablity |
            | 0      | unavailable |
            | 200    | unavailable |
            | 1000   | available   |
            | 50000  | available   |