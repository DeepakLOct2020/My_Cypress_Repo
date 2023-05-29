import LoginPage from '../Page_Classes/HomePage'
import HomePage from '../Page_Classes/HomePage'
import LoginData from 'D:/Training/Cypress_For_Session/Demo_Store/My_Cypress_Repo/cypress/fixtures/LoginData.json'

describe('Login Page Test Suite', () => {

 beforeEach(function() {
  cy.readFile('D:/Training/Cypress_For_Session/Demo_Store/My_Cypress_Repo/cypress/fixtures/LoginData.json').as('user')})
  
  it('Successful Login', () => {

    HomePage.launchApplication()
    HomePage.clickLinkLogin()
    cy.get('@user').then((user) => {
   //Custom Command
    cy.login(user.validEmail,user.validPassword)
    cy.title().should('eq', 'nopCommerce demo store')
    cy.get('.ico-logout').click()
})
})

  it('Unsuccesful Login Invalid Username', () => {

    HomePage.launchApplication()
    HomePage.clickLinkLogin()
    cy.get('@user').then((user) => {
    //Custom Command
    cy.login(user.invalidEmail,user.validPassword)
    cy.title().should('eq', 'nopCommerce demo store. Login')
  })
})

  it('Unsuccesful Login Invalid Password', () => {

    HomePage.launchApplication()
    HomePage.clickLinkLogin()
    cy.get('@user').then((user) => {
    //Custom Command
    cy.login(user.validEmail,user.invalidPassword)
    cy.title().should('eq', 'nopCommerce demo store. Login')
  })
  })

  it('Unsuccesful Login Invalid Username & Password', () => {

    HomePage.launchApplication()
    HomePage.clickLinkLogin()
    cy.get('@user').then((user) => {
    //Custom Command
    cy.login(user.invalidEmail,user.invalidPassword)
    cy.title().should('eq', 'nopCommerce demo store. Login')
  })
})
}) 