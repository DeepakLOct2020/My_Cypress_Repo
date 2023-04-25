import LoginPage from 'F:/Interview_Notes/Cypress/Page_Object_Model/cypress/e2e/page_objects/Page_Classes/LoginPage.js'
import HomePage from 'F:/Interview_Notes/Cypress/Page_Object_Model/cypress/e2e/page_objects/Page_Classes/HomePage.js'
import example from 'F:/Interview_Notes/Cypress/Page_Object_Model/cypress/fixtures/example.json'

describe('Login Page Test', () => {

 beforeEach(function() {
  cy.readFile('F:/Interview_Notes/Cypress/Page_Object_Model/cypress/fixtures/example.json').as('user')})
  
  const hp = new HomePage()
  const lp = new LoginPage()

  it('Successful Login', () => {

    hp.launchApplication()
    hp.clickLinkLogin()
    cy.get('@user').then((user) => {
    lp.enterEmailAddress(user[0].validEmail)
    lp.enterPassword(user[0].validPassword)
    lp.clickBtnLogin()
    cy.title().should('eq', 'nopCommerce demo store')
    cy.get('.ico-logout').click()
})
})

  it('Unsuccesful Login Invalid Username', () => {

    hp.launchApplication()
    hp.clickLinkLogin()
    cy.get('@user').then((user) => {
    lp.enterEmailAddress(user[0].invalidEmail)
    lp.enterPassword(user[0].validPassword)
    lp.clickBtnLogin()
    cy.title().should('eq', 'nopCommerce demo store. Login')
  })
})

  it('Unsuccesful Login Invalid Password', () => {

    hp.launchApplication()
    hp.clickLinkLogin()
    cy.get('@user').then((user) => {
    lp.enterEmailAddress(user[0].validEmail)
    lp.enterPassword(user[0].invalidPassword)
    lp.clickBtnLogin()
    cy.title().should('eq', 'nopCommerce demo store. Login')
  })
  })

  it('Unsuccesful Login Invalid Username & Password', () => {

    hp.launchApplication()
    hp.clickLinkLogin()
    cy.get('@user').then((user) => {
    lp.enterEmailAddress(user[0].invalidEmail)
    lp.enterPassword(user[0].invalidPassword)
    lp.clickBtnLogin()
    cy.title().should('eq', 'nopCommerce demo store. Login')
  })
})
}) 