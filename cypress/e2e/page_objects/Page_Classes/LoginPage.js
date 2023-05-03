class LoginPage {

static enterEmailAddress(emailAddress){
    const emailField = cy.get('#Email')
    emailField.clear()
    emailField.type(emailAddress)
    return this
}

static enterPassword(password){
    const passwordField = cy.get('input[id=Password]')
    passwordField.clear()
    passwordField.type(password)
    return this
}

static clickBtnLogin(){
    //cy.get('.button-1 login-button').click()
    cy.get('form > .buttons > .button-1').click()
}

static searchProduct() {
    cy.get('input[id=small-searchterms]').type('Cell Phones')
    cy.get('#small-search-box-form > .button-1').click()
}

static verifyLoginPageTitle(){
    cy.title().should('eq','nopCommerce demo store')
}

static clickLinkWishList(){
    cy.get('.ico-wishlist').click()
}

static clickLinkForgotPassword(){
    cy.get('.forgot-password').click()
}

}
export default LoginPage
