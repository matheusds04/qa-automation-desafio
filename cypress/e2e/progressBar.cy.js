/// <reference types="cypress" />

describe("Progress Bar", () => {
  it("Para antes de 25%, valida e depois vai até 100% para resetar", () => {
    cy.visit("/progress-bar");

    cy.get("#startStopButton").click();

    cy.wait(900);       
    cy.get("#startStopButton").click();

    cy.get(".progress-bar").invoke("text").then(txt => {
      const percent = parseInt(txt);
      expect(percent).to.be.at.most(25);
    });

    cy.get("#startStopButton").click();

    cy.get("#resetButton", { timeout: 15000 }).should("be.visible").click();

    cy.get(".progress-bar").should("contain.text", "0%");
  });
});
