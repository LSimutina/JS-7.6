describe('template spec', () => {

  beforeEach(() => {
    cy.visit('/')
  })

  it.skip('test login', () => {
    cy.login('test@test.com', 'test')
    cy.contains('Добро пожаловать ').should('be.visible')
  })

  it.skip('test empty email', () => {
    cy.login(' ', 'test')
    cy.get('#mail').then((elements) => {
        expect(elements[0].checkValidity()).to.be.false
    })
  })

  it.skip('test empty pass', () => {
    cy.login('test@test.com', ' ')
    cy.get('#pass').then((elements) => {
        expect(elements[0].checkValidity()).to.be.true
    })
  })

  it.skip('test add book', () => {
    cy.login('bropet@mail.ru', '123')
    cy.add_book('Война и мир', 'Роман', 'Толстой Л.Н.')
  })

  it.skip('test add to favorite', () => {
    cy.login('bropet@mail.ru', '123')
    cy.contains('Add to favorite').click()
  })

  it.skip('test Delete from favorite', () => {
    cy.login('bropet@mail.ru', '123')
    cy.contains('Delete from favorite').click()
  })

  it('test favorite', () => {
    cy.login('bropet@mail.ru', '123')
    cy.get('h4').click()
  })

})