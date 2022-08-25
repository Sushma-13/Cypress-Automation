Feature: Validate Customer information section fulfillment

    If All fields are filled, customer information form should be fulfilled.
    Phone number and Lei code are not required fields.

    Scenario Outline: Customer information section should be <fulfill_status>, when <fields_to_clear> fields are cleared, for <ssn>
        Given I open Alfakraft
        * I login with valid SSN "<ssn>"
        And All customer information fields are  validly filled
        When I clear "<fields_to_clear>" field in customer information form
        Then Customer Information section should be "<fulfill_status>"

        Examples:
            | ssn          | fields_to_clear | fulfill_status |
            | 194203052222 | phone           | fulfilled      |
            | 194203052222 | email           | unfulfilled    |
            | 194203052222 | phone, email    | unfulfilled    |
            | 194203052222 | no              | fulfilled      |
            | 165560001975 | phone           | fulfilled      |
            | 165560001975 | email           | unfulfilled    |
            | 165560001975 | phone, email    | unfulfilled    |
            | 165560001975 | no              | fulfilled      |
