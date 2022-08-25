Feature: Validate UCITS section

    If All fields are filled, UCITS section should be valid

    Background: Login
        Given I open Alfakraft
        * I login with valid SSN "194203052222"

    Scenario Outline: UCITS section should be fulfilled, when Autogiro is <autogiro_status>
        Given I select autogiro "<autogiro_status>"
        Then UCITS section should be "fulfilled"

        Examples:
            | autogiro_status |
            | No              |
            | Yes             |

    Scenario Outline: UCITS section should be <status>, when only <period> deposit funds are added with shares <shares> percent
        * I select autogiro "Yes"
        * I click UCITS "<period>" deposit checkbox
        * I add "<period>" deposit amount "60000"
        When I add "<period>" deposit fund and its share "<shares>"
        Then UCITS section should be "<status>"

        Examples:
            | period  | shares      | status      |
            | single  | 10,20,30,40 | fulfilled   |
            | single  | 10,20,0,0   | unfulfilled |
            | monthly | 10,20,30,40 | fulfilled   |
            | monthly | 10,20,0,0   | unfulfilled |

    Scenario Outline: UCITS section should be <status>, when both single and monthly deposit funds are added with shares <single_shares> and <monthly_shares> percent respectevely
        * I select autogiro "Yes"
        * I click UCITS "single" deposit checkbox
        * I add "single" deposit amount "60000"
        * I add "single" deposit fund and its share "<single_shares>"
        * I click UCITS "monthly" deposit checkbox
        * I add "monthly" deposit amount "3000"
        * I add "monthly" deposit fund and its share "<monthly_shares>"
        Then UCITS section should be "<status>"

        Examples:
            | single_shares | monthly_shares | status      |
            | 10,20,30,40   | 90,10,0,0      | fulfilled   |
            | 10,20,0,0     | 90,10,0,0      | unfulfilled |

