describe('Slider - Comportamento', () => {

  beforeEach(() => {
    cy.visit('/');
  });

  it('deve renderizar o slider', () => {
    cy.get('[data-cy="slider"]').should('exist').and('be.visible');
  });

  it('deve iniciar no primeiro slide', () => {
    cy.get('[data-cy="slider-slides"]')
      .should('have.attr', 'data-active', '0');
  });

  it('deve mudar de slide ao clicar nos dots', () => {
    cy.get('[data-cy="dot-1"]').click();

    cy.get('[data-cy="slider-slides"]')
      .should('have.attr', 'data-active', '1');

    cy.get('[data-cy="dot-2"]').click();

    cy.get('[data-cy="slider-slides"]')
      .should('have.attr', 'data-active', '2');
  });
});
