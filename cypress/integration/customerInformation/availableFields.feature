Feature: Availablity of fields in customer information form

    Background: Visit application
        Given I open Alfakraft

    Scenario Outline: <customer_information_fields> fields should be present for <ssn>
        And I login with valid SSN "<ssn>"
        Then I see "<customer_information_fields>" fields in customer information form
        And "<readonly_fields>" fields should be disabled

        Examples:
            | ssn          | customer_information_fields                                                                                  | readonly_fields                                           |
            | 194203052222 | Förnamn, Efternamn, Utdelningsadress, Postnummer, Postort                                                    | Förnamn, Efternamn, Utdelningsadress, Postnummer, Postort |
            | 165560001975 | Bolag,Organisationsnummer, Utdelningsadress, Postnummer, Postort, Telefon, E-postadress, LEI-kod (20 tecken) | Bolag, Organisationsnummer, Utdelningsadress,  Postnummer |

    # Examples table have 3 columns ssn, customer_information_fields, readonly_fields
    # customer_information_fields should have all the field have we are expecting in the form
    # readonly_fields should have fields we are expecting to be readonly

    Scenario: Clicking Sök LEI-kod, for company
        Given I login with valid SSN "165560001975"
        Then "Sök LEI-kod" should redirect to "https://www.gleif.org/en/lei/search"