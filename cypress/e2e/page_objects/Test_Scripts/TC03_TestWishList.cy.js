import LoginPage from 'F:/Interview_Notes/Cypress/Page_Object_Model/cypress/e2e/page_objects/Page_Classes/LoginPage.js'
import HomePage from 'F:/Interview_Notes/Cypress/Page_Object_Model/cypress/e2e/page_objects/Page_Classes/HomePage.js'
import SearchProductsPage from 'F:/Interview_Notes/Cypress/Page_Object_Model/cypress/e2e/page_objects/Page_Classes/SearchProductsPage.js'
import WishListPage from 'F:/Interview_Notes/Cypress/Page_Object_Model/cypress/e2e/page_objects/Page_Classes/WishListPage.js'
import example from 'F:/Interview_Notes/Cypress/Page_Object_Model/cypress/fixtures/example.json'

describe('Test Wish List Functionality', () => {

  beforeEach(function() {
    cy.readFile('F:/Interview_Notes/Cypress/Page_Object_Model/cypress/fixtures/example.json').as('user')})

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