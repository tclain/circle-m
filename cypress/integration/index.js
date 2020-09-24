describe("The Home Page", () => {
  it("successfully loads", () => {
    cy.visit("/");
    cy.get("div").first().should("have.text", "hello world");
  });
});
