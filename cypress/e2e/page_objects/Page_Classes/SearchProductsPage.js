class SearchProductsPage {

    verifySearchProductTitle(){
        cy.title().should('eq', 'nopCommerce demo store. Search')
    }

    clickAddProductToWishListProduct(){

        cy.get(':nth-child(1) > .product-item > .details > .add-info > .buttons > .add-to-wishlist-button').click()
    }

    verifyMessageProdcutAddedToWishList(){
        cy.get('.content').should('have.text', 'The product has been added to your wishlist')
    }

    clickLogo(){

        cy.get('.header-logo').click()
    }

}
export default SearchProductsPage