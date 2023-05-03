import LoginPage from 'D:/Training/Cypress_For_Session/Demo_Store/My_Cypress_Repo/cypress/e2e/page_objects/Page_Classes/LoginPage.js'
import HomePage from 'D:/Training/Cypress_For_Session/Demo_Store/My_Cypress_Repo/cypress/e2e/page_objects/Page_Classes/HomePage.js'
import SearchProductsPage from 'D:/Training/Cypress_For_Session/Demo_Store/My_Cypress_Repo/cypress/e2e/page_objects/Page_Classes/SearchProductsPage.js'
import WishListPage from 'D:/Training/Cypress_For_Session/Demo_Store/My_Cypress_Repo/cypress/e2e/page_objects/Page_Classes/WishListPage.js'
import example from 'D:/Training/Cypress_For_Session/Demo_Store/My_Cypress_Repo/cypress/fixtures/example.json'

describe('Test Wish List Functionality', () => {

  beforeEach(function() {
    cy.readFile('D:/Training/Cypress_For_Session/Demo_Store/My_Cypress_Repo/cypress/fixtures/example.json').as('user')})

  //const hp = new HomePage()
  //const lp = new LoginPage()
  //const wp = new WishListPage()

  it('Verify WishList is Empty', () => {

     cy.get('@user').then((user) => {
      HomePage.launchApplication()
     /*HomePage.verifyHomePageTitle()
      HomePage.clickLinkLogin()
      LoginPage.enterEmailAddress(user[0].validEmail)
      LoginPage.enterPassword(user[0].validPassword)
      LoginPage.clickBtnLogin()*/
      cy.login(user[0].validEmail,user[0].validPassword)

      LoginPage.verifyLoginPageTitle()
      LoginPage.clickLinkWishList()
      WishListPage.verifyWishListIsEmpty()
      WishListPage.clickLogo()
      HomePage.clicklinkLogout()
    })

  })

  it('Verify Add To Wish List Functionality', () => {
    
    HomePage.launchApplication()
    HomePage.verifyHomePageTitle()
    HomePage.clickLinkLogin()
    cy.get('@user').then((user) => {
    LoginPage.enterEmailAddress(user[0].validEmail)
    LoginPage.enterPassword(user[0].validPassword)
    LoginPage.clickBtnLogin()
    LoginPage.verifyLoginPageTitle()
    LoginPage.searchProduct()
   // const spp = new SearchProductsPage()
   SearchProductsPage.verifySearchProductTitle()
   SearchProductsPage.clickAddProductToWishListProduct()
   SearchProductsPage.verifyMessageProdcutAddedToWishList()
   SearchProductsPage.clickLogo()
    HomePage.clicklinkLogout()
  })
})

  it('Verify Remove Product From WishList', () => {

    HomePage.launchApplication()
    //HomePage.verifyHomePageTitle()
    HomePage.clickLinkLogin()
    cy.get('@user').then((user) => {
    LoginPage.enterEmailAddress(user[0].validEmail)
    LoginPage.enterPassword(user[0].validPassword)
    LoginPage.clickBtnLogin()
    //LoginPage.verifyLoginPageTitle()
    LoginPage.clickLinkWishList()
    WishListPage.verifyWishListIsNotEmpty()
    WishListPage.deleteItemsFromWishList()
    WishListPage.verifyWishListIsEmpty()
    WishListPage.clickLogo()
    HomePage.clicklinkLogout()

    })
  })
})