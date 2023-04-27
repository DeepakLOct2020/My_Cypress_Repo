import LoginPage from 'D:/Training/Cypress_For_Session/Demo_Store/My_Cypress_Repo/cypress/e2e/page_objects/Page_Classes/LoginPage.js'
import HomePage from 'D:/Training/Cypress_For_Session/Demo_Store/My_Cypress_Repo/cypress/e2e/page_objects/Page_Classes/HomePage.js'
import SearchProductsPage from 'D:/Training/Cypress_For_Session/Demo_Store/My_Cypress_Repo/cypress/e2e/page_objects/Page_Classes/SearchProductsPage.js'
import WishListPage from 'D:/Training/Cypress_For_Session/Demo_Store/My_Cypress_Repo/cypress/e2e/page_objects/Page_Classes/WishListPage.js'
import example from 'D:/Training/Cypress_For_Session/Demo_Store/My_Cypress_Repo/cypress/fixtures/example.json'

describe('Test Wish List Functionality', () => {

  beforeEach(function() {
    cy.readFile('D:/Training/Cypress_For_Session/Demo_Store/My_Cypress_Repo/cypress/fixtures/example.json').as('user')})

  const hp = new HomePage()
  const lp = new LoginPage()
  const wp = new WishListPage()

  it('Verify WishList is Empty', () => {

      hp.launchApplication()
      //hp.verifyHomePageTitle()
      hp.clickLinkLogin()
      cy.get('@user').then((user) => {
      lp.enterEmailAddress(user[0].validEmail)
      lp.enterPassword(user[0].validPassword)
      lp.clickBtnLogin()
      lp.verifyLoginPageTitle()
      lp.clickLinkWishList()
      wp.verifyWishListIsEmpty()
      wp.clickLogo()
      hp.clicklinkLogout()
    })

  })

  it('Verify Add To Wish List Functionality', () => {
    
    hp.launchApplication()
    hp.verifyHomePageTitle()   //
    hp.clickLinkLogin()
    cy.get('@user').then((user) => {
    lp.enterEmailAddress(user[0].validEmail)
    lp.enterPassword(user[0].validPassword)
    lp.clickBtnLogin()
    lp.verifyLoginPageTitle()  //
    lp.searchProduct()
    const spp = new SearchProductsPage()
    spp.verifySearchProductTitle()
    spp.clickAddProductToWishListProduct()
    spp.verifyMessageProdcutAddedToWishList()
    spp.clickLogo()
    hp.clicklinkLogout()
  })
})

  it('Verify Remove Product From WishList', () => {

    hp.launchApplication()
    //hp.verifyHomePageTitle()
    hp.clickLinkLogin()
    cy.get('@user').then((user) => {
    lp.enterEmailAddress(user[0].validEmail)
    lp.enterPassword(user[0].validPassword)
    lp.clickBtnLogin()
    //lp.verifyLoginPageTitle()
    lp.clickLinkWishList()
    wp.verifyWishListIsNotEmpty()
    wp.deleteItemsFromWishList()
    wp.verifyWishListIsEmpty()
    wp.clickLogo()
    hp.clicklinkLogout()

    })
    
})

})