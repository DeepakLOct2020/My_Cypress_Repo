import HomePage from "../../Page_Classes/HomePage"
import LoginPage from "../../Page_Classes/LoginPage"
import SearchProductsPage from "../../Page_Classes/SearchProductsPage"
import example from 'D:/Training/Cypress_For_Session/Demo_Store/My_Cypress_Repo/cypress/fixtures/example.json'

describe('Forgot Password Test SUite', () => {

    beforeEach(function() {
        cy.readFile('D:/Training/Cypress_For_Session/Demo_Store/My_Cypress_Repo/cypress/fixtures/example.json').as('user')
    })
        
    it('Verify Empty Shopping Cart', () => {
        HomePage.launchApplication()
        HomePage.clickLinkLogin()
        cy.get('@user').then((user) => {
        LoginPage.enterEmailAddress(user[0].validEmail)
        LoginPage.enterPassword(user[0].validPassword)
        LoginPage.clickBtnLogin()
        cy.get('span[class=cart-label]').trigger('mouseover')
        cy.get('div[class=mini-shopping-cart]').should('have.text','\nYou have no items in your shopping cart. \n')
    })
 })

    it('Add Product to Shopping Cart', () => {

        HomePage.launchApplication()
        HomePage.clickLinkLogin()
        cy.get('@user').then((user) => {
        LoginPage.enterEmailAddress(user[0].validEmail)
        LoginPage.enterPassword(user[0].validPassword)
        LoginPage.clickBtnLogin()
        LoginPage.searchProduct()
        LoginPage.searchProduct()
        SearchProductsPage.clickAddProductToCart()


    })

})

    it('Remove Product from Shopping Cart', () => {


    })
})