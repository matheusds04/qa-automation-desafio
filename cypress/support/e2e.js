// cypress/support/e2e.js
Cypress.on("uncaught:exception", (err, runnable) => {
  // retorna false para impedir que Cypress falhe com erros de cross-origin
  return false;
});
