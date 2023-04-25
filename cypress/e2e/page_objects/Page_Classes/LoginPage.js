
class LoginPage {

enterEmailAddress(emailAddress){
    const emailField = cy.get('#Email')
    emailField.clear()
    emailField.type(emailAddress)
    return this
}

enterPassword(password){
    const passwordField = cy.get('input[id=Password]')
    passwordField.clear()
    passwordField.type(password)
    return this
}

clickBtnLogin(){
    //cy.get('.button-1 login-button').click()
    cy.get('form > .buttons > .button-1').click()
}

searchProduct() {
    cy.get('input[id=small-searchterms]').type('Cell Phones')
    cy.get('#small-search-box-form > .button-1').click()
}

verifyLoginPageTitle(){
    cy.title().should('eq','nopCommerce demo store')
}

clickLinkWishList(){
    cy.get('.ico-wishlist').click()
}

}
export default LoginPage
