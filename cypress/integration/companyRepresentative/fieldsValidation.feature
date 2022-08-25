Feature: Validate all fields in company representative section

    Background: Visit application
        Given I open Alfakraft

    Scenario Outline: Verifying first name, last name, ssn, email, city, visiblity of ownership filter, for "<ssn>"
        Given I login with valid SSN "<ssn>"
        Then Verify first name field
            | f_name | status |
            | a      | valid  |
            | 12     | valid  |
            | ab3    | valid  |

        And Verify second name field
            | l_name | status |
            | a      | valid  |
            | 12     | valid  |
            | ab3    | valid  |

        And Verify customer ssn
            | customer_ssn        | status  |
            | abc                 | invalid |
            | @                   | invalid |
            | 1111111111111111111 | invalid |
            | 11111               | invalid |
            | 194203052222        | valid   |
            | 19420305222-        | invalid |
            | 165560001975        | invalid |

        And Verify email
            | email    | status  |
            | a        | invalid |
            | a@       | invalid |
            | a@a.     | invalid |
            | a@.in    | invalid |
            | a@abc.in | valid   |

        And Verify city
            | city   |
            | a      |
            | a@     |
            | Indien |
            |        |

        But Ownership filter should only be visible for real principal

        Examples:
            | ssn          |
            | 165560001975 |



