Feature: Validate UCITS funds action buttons availability

    User should be allowed to add max 4 and min 1 fund

    Scenario Outline: Verifying add and remove button status for <period> deposit funds when <shares> share percent are added
        Given I open Alfakraft
        * I login with valid SSN "194203052222"
        * I select autogiro "Yes"
        * I click UCITS "<period>" deposit checkbox
        * I add "<period>" deposit amount "<amount>"
        When I add "<period>" deposit fund and its share "<shares>"
        Then Add new fund button for "<period>" should be "<add_button_status>"
        And Verify remove button status for UCITS "<period>" deposit funds

        Examples:
            | period  | amount | shares      | add_button_status |
            | single  | 500000 | 4,96,0,0    | disabled          |
            | single  | 500000 | 4,96        | enabled           |
            | monthly | 2000   | 30,20,40,10 | disabled          |