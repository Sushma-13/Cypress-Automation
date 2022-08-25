import {
  addFirstName,
  cr_FirstnameField,
  addSSN,
  addLastName,
  cr_LastnameField,
  cr_SSNField,
  addEmail,
  cr_EmailField,
  addCity,
  cr_CityField,
  realPrincipalCheckbox,
  cr_OwnershipField,
  addNewCRButton,
  removeLastCRButton,
  companyRepresentatives,
  companyRepresentativeSection,
} from "./../../utils/companyRepresentative.util";
import { But, Then } from "cypress-cucumber-preprocessor/steps";

Then(
  "Company Representative form should be {string}",
  (availablity: string) => {
    companyRepresentativeSection().should(
      `${availablity === "available" ? "exist" : "not.exist"}`
    );
  }
);

Then("Verify first name field", (dataTable: any) => {
  dataTable.hashes().forEach(({ f_name, status }) => {
    addFirstName(0, f_name);
    cr_FirstnameField(0).parent().should("have.class", status).clear();
  });
});

Then("Verify second name field", (dataTable: any) => {
  dataTable.hashes().forEach(({ l_name, status }) => {
    addLastName(0, l_name);
    cr_LastnameField(0).parent().should("have.class", status).clear();
  });
});

Then("Verify customer ssn", (dataTable: any) => {
  dataTable.hashes().forEach(({ customer_ssn, status }) => {
    addSSN(0, customer_ssn);
    cr_SSNField(0).parent().should("have.class", status).clear();
  });
});

Then("Verify email", (dataTable: any) => {
  dataTable.hashes().forEach(({ email, status }) => {
    addEmail(0, email);
    cr_EmailField(0).parent().should("have.class", status).clear();
  });
});

Then("Verify city", (dataTable: any) => {
  dataTable.hashes().forEach(({ city }) => {
    if (!city) {
      cr_CityField(0).click().type("{enter}");
    } else {
      addCity(0, city);
    }
    cr_CityField(0).within(() => {
      cy.get(".Select-selected").invoke("text").should("not.be.empty");
    });
  });
});

But("Ownership filter should only be visible for real principal", () => {
  realPrincipalCheckbox(0)
    .parent()
    .invoke("hasClass", "checked")
    .then((checked: boolean) => {
      if (checked) {
        cr_OwnershipField(0).parent().should("be.visible");
      } else {
        cr_OwnershipField(0).parent().should("not.be.visible");
        realPrincipalCheckbox(0).parent().click();
        cr_OwnershipField(0).parent().should("be.visible");
      }
    });
});

Then("Verify add button status while adding representatives", () => {
  companyRepresentatives().then((ele) => {
    for (let i = ele.length; i < 6; i++) {
      companyRepresentatives().should("have.length", i);
      if (i === 6) {
        addNewCRButton().should("be.disabled");
      } else {
        addNewCRButton().click();
      }
    }
  });
});

Then("Verify remove button status while removing representatives", () => {
  companyRepresentatives().then((ele) => {
    for (let i = ele.length; i > 0; i--) {
      companyRepresentatives().should("have.length", i);
      if (i === 1) {
        removeLastCRButton().should("be.disabled");
      } else {
        removeLastCRButton().click();
      }
    }
  });
});

Then("Company representative section should be {string}", (status: string) => {
  cy.assertSectionFulfillment(companyRepresentativeSection, status);
});
