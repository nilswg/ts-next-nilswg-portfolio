describe('Home Page Testing', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('should have opening tests', () => {
    cy.get(`[data-cy="Hi, "]`).should('have.length', 1)
    cy.get(`[data-cy="I'm Nilson Weng,"]`).should('have.length', 1)
    cy.get(`[data-cy="full-stack developer."]`).should('have.length', 1)
  })

  it('should have accessible social links', () => {
    cy.get(`[data-cy="LinkedIn"] > a`)
      .should('have.length', 3)
      .each((x, i) => {
        expect(x.attr('href')).to.equal(
          'https://www.linkedin.com/in/nilson-weng-470672218/'
        )
      })
    cy.get(`[data-cy="Github"] > a`)
      .should('have.length', 3)
      .each((x, i) => {
        expect(x.attr('href')).to.equal('https://github.com/nilswg')
      })
  })
})

export {}

