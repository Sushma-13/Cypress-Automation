Feature: Validate AIF section

    If all fields are filled, AIF section should be valid

    Background: Login
        Given I open Alfakraft
        * I login with valid SSN "194203052222"

    Scenario: Initially AIF section should be fulfilled
        Then AIF section should be "fulfilled"

    Scenario Outline: AIF section should be <status>, when autogiro is <autogiro_option>, and one-time deposit checkbox is not selected
        * I select autogiro "<autogiro_option>"
        Then AIF section should be "<status>"

        Examples:
            | autogiro_option | status    |
            | Yes             | fulfilled |
            | No              | fulfilled |

    Scenario Outline: AIF section should be <status>, when amount <amount> SEK is invested
        Given I click one-time deposit AIF checkbox
        * I select autogiro "Yes"
        When I Add AIF fund amount "<amount>"
        Then AIF section should be "<status>"

        Examples:
            | amount | status      |
            | 100000 | fulfilled   |
            | 223    | unfulfilled |

    Scenario: Verifying AIF section fulfillment, when one-time deposit checkbox is toggled 
        Given I click one-time deposit AIF checkbox
        * I Add AIF fund amount "100000"
        When I click one-time deposit AIF checkbox
        Then AIF section should be "fulfilled"

