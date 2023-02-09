describe('template spec', () => {

  beforeEach(() => {})

  it('passes', () => {
    cy.visit('https://example.cypress.io')

    cy.get('.container > h1').should('have', 'Kitchen Sink')
  })
})

export {}
