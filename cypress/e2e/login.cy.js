describe('Login Page', () => {
  it('should display login form and submit with test data', () => {
    cy.visit('http://localhost:8080/SCM-Web-App/login');

    // Type into username and password fields
    cy.get('input[placeholder="Enter your username"]').type('testuser');
    cy.get('input[placeholder="Enter your password"]').type('123456');

    // Click Sign In
    cy.contains('Sign In').click();

    // Optional: Assert something happens after login
    // cy.url().should('not.include', '/login');
    // or check for success message
  });
});
