it("Abre os detalhes de um livro e valida ISBN", () => {
  cy.visit("/books");
  cy.get("#searchBox").clear().type("Git Pocket Guide");
  cy.contains("Git Pocket Guide").click();

  cy.url().should("include", "/books?book=");

  // valida que existe um campo ISBN
  cy.get(".profile-wrapper").should("contain.text", "ISBN");
});
