import LoginPage from '../../Page_Classes/LoginPage'
import HomePage from '../../Page_Classes/HomePage'
import example from 'D:/Training/Cypress_For_Session/Demo_Store/My_Cypress_Repo/cypress/fixtures/example.json'

describe('Login Page Test', () => {

 beforeEach(function() {
  cy.readFile('D:/Training/Cypress_For_Session/Demo_Store/My_Cypress_Repo/cypress/fixtures/example.json').as('user')})
  
  //const hp = new HomePage()
  //const lp = new LoginPage()

  it('Successful Login', () => {

    HomePage.launchApplication()
    HomePage.clickLinkLogin()
    cy.get('@user').then((user) => {
    LoginPage.enterEmailAddress(user[0].validEmail)
    LoginPage.enterPassword(user[0].validPassword)
    LoginPage.clickBtnLogin()
    cy.title().should('eq', 'nopCommerce demo store')
    cy.get('.ico-logout').click()
})
})

  it('Unsuccesful Login Invalid Username', () => {

    HomePage.launchApplication()
    HomePage.clickLinkLogin()
    cy.get('@user').then((user) => {
    LoginPage.enterEmailAddress(user[0].invalidEmail)
    LoginPage.enterPassword(user[0].validPassword)
    LoginPage.clickBtnLogin()
    cy.title().should('eq', 'nopCommerce demo store. Login')
  })
})

  it('Unsuccesful Login Invalid Password', () => {

    HomePage.launchApplication()
    HomePage.clickLinkLogin()
    cy.get('@user').then((user) => {
    LoginPage.enterEmailAddress(user[0].validEmail)
    LoginPage.enterPassword(user[0].invalidPassword)
    LoginPage.clickBtnLogin()
    cy.title().should('eq', 'nopCommerce demo store. Login')
  })
  })

  it('Unsuccesful Login Invalid Username & Password', () => {

    HomePage.launchApplication()
    HomePage.clickLinkLogin()
    cy.get('@user').then((user) => {
    LoginPage.enterEmailAddress(user[0].invalidEmail)
    LoginPage.enterPassword(user[0].invalidPassword)
    LoginPage.clickBtnLogin()
    cy.title().should('eq', 'nopCommerce demo store. Login')
  })
})
}) 