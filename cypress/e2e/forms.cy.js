/// <reference types="cypress" />

it("Preenche, faz upload, submete e fecha o popup", () => {
  cy.visit("https://demoqa.com/automation-practice-form", {
    timeout: 120000,
    failOnStatusCode: false,
    waitUntil: "domcontentloaded",
  });

  cy.get("#firstName").type("Matheus");
  cy.get("#lastName").type("Sousa");
  cy.get("#userEmail").type("teste@example.com");
  cy.get("label[for='gender-radio-1']").click();
  cy.get("#userNumber").type("11999999999");

  cy.get("#uploadPicture").selectFile("cypress/fixtures/upload.txt");
  cy.get("#currentAddress").type("Rua Cypress, 123");

  cy.get("#submit").click();

  cy.get(".modal-content").should("be.visible");

  cy.get("#closeLargeModal")
    .scrollIntoView()
    .click({ force: true });

  cy.get(".modal-content").should("not.exist");
});
