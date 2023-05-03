import HomePage from 'D:/Training/Cypress_For_Session/Demo_Store/My_Cypress_Repo/cypress/e2e/page_objects/Page_Classes/HomePage.js'
import RegisterUserPage from 'D:/Training/Cypress_For_Session/Demo_Store/My_Cypress_Repo/cypress/e2e/page_objects/Page_Classes/RegisterUserPage.js'
import example from 'D:/Training/Cypress_For_Session/Demo_Store/My_Cypress_Repo/cypress/fixtures/example.json'

describe('template spec', () => {

  before(function() {
  cy.readFile('D:/Training/Cypress_For_Session/Demo_Store/My_Cypress_Repo/cypress/fixtures/example.json').as('user')})

  //const hp = new HomePage()
  //const rg = new RegisterUserPage()

  it('Verify User Registration is Successful', () => {

    HomePage.launchApplication()
    HomePage.clickLinkRegister()
    cy.get('@user').then((user) => {
    RegisterUserPage.selectGender(user[1].gender1)
    RegisterUserPage.enterTextFirstName(user[1].fName)
    RegisterUserPage.enterTextLastName(user[1].lName)
    //SELECT DBO
    RegisterUserPage.enterDOB(user[1].dayOfBirth, user[1].monthOfBirth,user[1].yearOfBirth )
    RegisterUserPage.enterTExtEmailAddress(user[1].email)
    RegisterUserPage.enterTextPassword(user[1].password)
    RegisterUserPage.enterTextConfirmPassword(user[1].password)
    RegisterUserPage.clickButtonRegister()
    cy.title().should('eq', 'nopCommerce demo store')
  })
})
})