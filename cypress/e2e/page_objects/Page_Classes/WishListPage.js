class WishListPage {

static verifyWishListIsEmpty(){

    cy.get('span[class=wishlist-qty]').should('have.text','(0)')
}

static deleteItemsFromWishList(){
    cy.get('table > tbody > tr > td > input[name=addtocart]').click()
    cy.get('table > tbody > tr > td > button[name=updatecart]').click()
}

static verifyWishListIsNotEmpty(){

    cy.get('span[class=wishlist-qty]').should('have.text','(1)')
}


static clickLogo(){
    cy.get('div[class=no-data]').click()
}

}
export default WishListPage