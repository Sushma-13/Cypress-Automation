Feature: Validate UCITS deposit amount as per shares

    Scenario Outline: Shares <shares> % should have share amount <shareAmount> SEK, for <period> deposit funds
        Given I open Alfakraft
        * I login with valid SSN "194203052222"
        * I select autogiro "Yes"
        * I click UCITS "<period>" deposit checkbox
        * I add "<period>" deposit amount "<amount>"
        When I add "<period>" deposit fund and its share "<shares>"
        Then "<period>" shares amount should be "<shareAmount>"

        Examples:
            | period  | amount | shares      | shareAmount     |
            | single  | 60000  | 4,96,0,0    | 2400,57600,0,0  |
            | monthly | 2000   | 30,20,40,10 | 600,400,800,200 |