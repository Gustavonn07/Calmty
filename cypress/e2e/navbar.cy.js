describe('Navbar - Persistência entre rotas', () => {

  const routes = [
    '/',
    '/product',
    '/about',
    '/contact',
    '/quiz'
  ];

  beforeEach(() => {
    cy.visit('/');
  });

  routes.forEach((route) => {
    it(`deve manter a navbar visível na rota ${route}`, () => {
      cy.visit(route);

      cy.get('[data-cy="navbar"]').should('exist');

      cy.get('[data-cy="navbar"]').should('be.visible');

      cy.contains('Calmty').should('be.visible');
    });
  });

  it('deve exibir o menu hamburguer em telas pequenas', () => {
    cy.viewport(375, 667); 
    cy.visit('/');

    cy.get('[data-cy="navbar"]').should('exist');
    cy.get('.logo').should('be.visible');
    });
});
