Feature: Validate fields of customer information section

    Background: Visit application
        Given I open Alfakraft

    Scenario Outline: Verifying <common fields>, phone and email, for <ssn_type> ssn, <ssn> against different set of values
        And I login with valid SSN "<ssn>"
        Then Verify "<common fields>" fields
        And Verify phone number field for different inputs
            | phone        | isValid |
            | 1234567      | true    |
            | 1234567890   | true    |
            | -            | true    |
            | 123-4567890@ | true    |
            |              | false   |

        And Verify email field for different inputs
            | email        | isValid |
            | abc          | false   |
            | 12@67.com    | true    |
            | -            | false   |
            | 123456       | false   |
            | abc@gmail.in | true    |
            |              | false   |

        Examples:
            | ssn_type | ssn          | common fields                                                                |
            | Customer | 194203052222 | first name, last name, ssn, street address, zip-code, city                   |
            | Customer | 198108180533 | company checkbox, first name, last name, ssn, street address, zip-code, city |
            | Company  | 165560001975 | first name, ssn, street address, zip-code, city                              |
            | Company  | 5560001970   | company checkbox, first name, ssn, street address, zip-code, city            |

    Scenario Outline: Lei code should have 20 characters, for company ssn, <ssn>
        And I login with valid SSN "<ssn>"
        Then Verify Lei code for different inputs
            | leiCode                | isValid |
            | aaa                    | false   |
            | aaaaaaaaaaaaaaaaaaaa   | true    |
            | -                      | false   |
            | abc@gmail.in           | false   |
            | 123                    | false   |
            | 12345678901234567890   | true    |
            | 1234567890123456789012 | false   |
            | /                    / | true    |
            |                        | false   |

        Examples:
            | ssn          |
            | 165560001975 |
            | 5560001970   |