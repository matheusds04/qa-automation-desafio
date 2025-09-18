/// <reference types="cypress" />

describe("Web Tables", () => {
  it("Cria, edita e deleta um registro", () => {
    cy.visit("/webtables", {
      timeout: 120000,
      waitUntil: "domcontentloaded",
      failOnStatusCode: false,
    });

    cy.get("#addNewRecordButton").click();
    cy.get("#firstName").type("Teste");
    cy.get("#lastName").type("QA");
    cy.get("#userEmail").type("testeqa@example.com");
    cy.get("#age").type("30");
    cy.get("#salary").type("5000");
    cy.get("#department").type("Qualidade");
    cy.get("#submit").click();

    cy.contains(".rt-tr", "Teste").within(() => {
      cy.get("[title='Edit']").click();
    });
    cy.get("#age").clear().type("31");
    cy.get("#submit").click();

    cy.contains(".rt-tr", "Teste").within(() => {
      cy.get("[title='Delete']").click();
    });

    cy.contains(".rt-tr", "Teste").should("not.exist");
  });
});
