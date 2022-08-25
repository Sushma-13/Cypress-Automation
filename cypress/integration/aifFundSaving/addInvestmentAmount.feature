Feature: Verify amount to invest

    Scenario Outline: Verifying entered and displayed amount to invest, for ssn <ssn>
        Given I open Alfakraft
        * I login with valid SSN "<ssn>"
        * I click one-time deposit AIF checkbox
        Then Verify amount to invest with AIF
            | typed_amount | accepted_amount | invested_amount |
            | 10000        | 10000           | 10000           |
            | 78.5         | 78.5            | 79              |
            | 73.3         | 73.3            | 73              |
            | 74,1         | 741             | 741             |
            | 7y2          | 72              | 72              |
            | hi           |                 | 0               |

        Examples:
            | ssn          |
            | 194203052222 |
            | 165560001975 |