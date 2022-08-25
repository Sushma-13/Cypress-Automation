Feature: Validate availablity of UCITS deposit checkboxes on autogiro agreement

    UCITS single and monthly deposits checkboxes should be disabled for autogiro no, else enabled

    Background: Login
        Given I open Alfakraft
        * I login with valid SSN "194203052222"

    Scenario: Checkboxes should be disabled, for autogiro No
        And I select autogiro "No"
        Then UCITS checkboxes should be "disabled"

    Scenario: Verifying checkbox availability when autogiro option is toggled
        And I select autogiro "Yes"
        Then UCITS checkboxes should be "enabled"
        When I select autogiro "No"
        Then UCITS checkboxes should be "disabled"
