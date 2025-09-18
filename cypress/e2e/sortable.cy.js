/// <reference types="cypress" />


const item = (text) => cy.contains(".list-group-item", text);

describe("Sortable", () => {
  it("Ordena a lista em ordem crescente", () => {
    cy.visit("/sortable");

    cy.contains('[role="tab"]', "List").click();

    item("Six").drag(item("One"));
    item("Five").drag(item("Two"));
    item("Four").drag(item("Three"));

    const ordemEsperada = ["One", "Two", "Three", "Four", "Five", "Six"];
    cy.get(".vertical-list-container .list-group-item")
      .then($els => [...$els].map(el => el.innerText.trim()))
      .should("deep.equal", ordemEsperada);
  });
});
