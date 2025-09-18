describe("Browser Windows", () => {
  it("Simula o clique em 'New Window' e valida a nova página", () => {
    cy.visit("/browser-windows");

    cy.get("#windowButton").then(() => {
      cy.visit("/sample");
    });

    cy.contains("This is a sample page").should("be.visible");
  });
});
