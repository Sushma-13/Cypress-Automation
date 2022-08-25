Feature: Verify experience level for different funds

    Grundläggande should be selected for knowledge more than 0, else Ingen
    
    Scenario Outline: Adding experience for "<funds>", for <ssn>
        Given I open Alfakraft
        * I login with valid SSN "<ssn>"
        Then Validate experience with "<funds>"
            | years | experience |
            |       | no         |
            | 0     | no         |
            | 1     | basic      |
            | 2     | basic      |

        Examples:
            | ssn          | funds |
            | 194203052222 | UCITS |
            | 194203052222 | AIF   |
            | 165560001975 | UCITS |
            | 165560001975 | AIF   |

# years column should have integers
# experience column should have no/basic/informed/advanced
# funds column have UCITS/AIF
