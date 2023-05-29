import HomePage from "../../Page_Classes/HomePage"
import LoginPage from "../../Page_Classes/LoginPage"
import PasswordRecoveryPage from "../../Page_Classes/PasswordRecoveryPage"
import example from 'D:/Training/Cypress_For_Session/Demo_Store/My_Cypress_Repo/cypress/fixtures/example.json'


describe('Forgot Password Test SUite', () => {

    beforeEach(function() {
        cy.readFile('D:/Training/Cypress_For_Session/Demo_Store/My_Cypress_Repo/cypress/fixtures/example.json').as('user')
    })
        
    it('Test Forgot Password with invalid email address', () => {

        HomePage.launchApplication()
        HomePage.clickLinkLogin()
        LoginPage.clickLinkForgotPassword()
        PasswordRecoveryPage.verifyPasswordRecoveryPageTitle()
        cy.get('@user').then((user) => {
        PasswordRecoveryPage.enterEmailAddress(user[0].invalidEmail)
         })
        PasswordRecoveryPage.clickButtonRecover()
        PasswordRecoveryPage.getErrorTextEmailNotFound()
    })

    it('Test Forgot Password with valid email address', () => {

        HomePage.launchApplication()
        HomePage.clickLinkLogin()
        LoginPage.clickLinkForgotPassword()
        PasswordRecoveryPage.verifyPasswordRecoveryPageTitle() 
        cy.get('@user').then((user) => {
        PasswordRecoveryPage.enterEmailAddress(user[0].validEmail)
        })
        PasswordRecoveryPage.clickButtonRecover()
        PasswordRecoveryPage.verifyPasswordRecoverySuccessMessage()
    })
})