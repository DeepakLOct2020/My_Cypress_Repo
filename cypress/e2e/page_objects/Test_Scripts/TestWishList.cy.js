import LoginPage from '../Page_Classes/HomePage'
import HomePage from '../Page_Classes/HomePage'
import SearchProductsPage from '../Page_Classes/SearchProductsPage'
import WishListPage from '../Page_Classes'
import LoginData from 'D:/Training/Cypress_For_Session/Demo_Store/My_Cypress_Repo/cypress/fixtures/LoginData.json'

describe('Wish List Tet Suite', () => {

  beforeEach(function() {
    cy.readFile('D:/Training/Cypress_For_Session/Demo_Store/My_Cypress_Repo/cypress/fixtures/LoginData.json').as('user')
  })

  it('Verify WishList is Empty', () => {

     cy.get('@user').then((user) => {

      HomePage.launchApplication()
      //Custom Command
      cy.login(user.validEmail,user.validPassword)
      LoginPage.verifyLoginPageTitle()
      LoginPage.clickLinkWishList()
      WishListPage.verifyWishListIsEmpty()
      WishListPage.clickLogo()
      HomePage.clicklinkLogout()
    })

  })

  it('Verify Add To Wish List Functionality', () => {
    
    HomePage.launchApplication()
    cy.get('@user').then((user) => {
    //Custom Command
    cy.login(user.validEmail,user.validPassword)
    LoginPage.verifyLoginPageTitle()
    LoginPage.searchProduct()
   SearchProductsPage.verifySearchProductTitle()
   SearchProductsPage.clickAddProductToWishListProduct()
   SearchProductsPage.verifyMessageProdcutAddedToWishList()
   SearchProductsPage.clickLogo()
    HomePage.clicklinkLogout()
  })
})

  it('Verify Remove Product From WishList', () => {

    HomePage.launchApplication()
    HomePage.clickLinkLogin()
    cy.get('@user').then((user) => {

    //Custom Command
    cy.login(user.validEmail,user.validPassword)
    LoginPage.verifyLoginPageTitle()
    LoginPage.clickLinkWishList()
    WishListPage.verifyWishListIsNotEmpty()
    WishListPage.deleteItemsFromWishList()
    WishListPage.verifyWishListIsEmpty()
    WishListPage.clickLogo()
    HomePage.clicklinkLogout()

    })
  })
})