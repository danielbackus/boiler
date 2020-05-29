it("loads page", () => {
  cy.visit("/");
  cy.contains("The status of the API server is OK.");
});
