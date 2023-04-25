import HomePage from 'F:/Interview_Notes/Cypress/Page_Object_Model/cypress/e2e/page_objects/Page_Classes/HomePage.js'
import RegisterUserPage from 'F:/Interview_Notes/Cypress/Page_Object_Model/cypress/e2e/page_objects/Page_Classes/RegisterUserPage.js'
import example from 'F:/Interview_Notes/Cypress/Page_Object_Model/cypress/fixtures/example.json'

describe('template spec', () => {

  beforeEach(function() {
  cy.readFile('F:/Interview_Notes/Cypress/Page_Object_Model/cypress/fixtures/example.json').as('user')})

  const hp = new HomePage()
  const rg = new RegisterUserPage()

  it('Verify User Registration is Successful', () => {

    hp.launchApplication()
    hp.clickLinkRegister()
    cy.get('@user').then((user) => {
    rg.selectGender(user[1].gender1)
    rg.enterTextFirstName(user[1].fName)
    rg.enterTextLastName(user[1].lName)
    //SELECT DBO
    rg.enterDOB(user[1].dayOfBirth, user[1].monthOfBirth,user[1].yearOfBirth )
    rg.enterTExtEmailAddress(user[1].email)
    rg.enterTextPassword(user[1].password)
    rg.enterTextConfirmPassword(user[1].password)
    rg.clickButtonRegister()
    cy.title().should('eq', 'nopCommerce demo store')
  })
})
})