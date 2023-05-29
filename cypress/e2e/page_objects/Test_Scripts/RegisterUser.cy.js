import HomePage from '../Page_Classes'
import RegisterUserPage from '../Page_Classes'
import example from 'D:/Training/Cypress_For_Session/Demo_Store/My_Cypress_Repo/cypress/fixtures/example.json'

describe('template spec', () => {

  before(function() {
  cy.readFile('D:/Training/Cypress_For_Session/Demo_Store/My_Cypress_Repo/cypress/fixtures/example.json').as('user')})

  it('Verify User Registration is Successful', () => {

    HomePage.launchApplication()
    HomePage.clickLinkRegister()
    cy.get('@user').then((user) => {
    RegisterUserPage.selectGender(user[1].gender1)
    RegisterUserPage.enterTextFirstName(user[1].fName)
    RegisterUserPage.enterTextLastName(user[1].lName)
    RegisterUserPage.enterDOB(user[1].dayOfBirth, user[1].monthOfBirth,user[1].yearOfBirth )
    RegisterUserPage.enterTExtEmailAddress(user[1].email)
    RegisterUserPage.enterTextPassword(user[1].password)
    RegisterUserPage.enterTextConfirmPassword(user[1].password)
    RegisterUserPage.clickButtonRegister()
    cy.title().should('eq', 'nopCommerce demo store')
  })
})
})