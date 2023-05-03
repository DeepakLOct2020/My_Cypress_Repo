class SearchProductsPage {

    static verifySearchProductTitle(){
        cy.title().should('eq', 'nopCommerce demo store. Search')
    }

    static clickAddProductToWishListProduct(){

        cy.get(':nth-child(1) > .product-item > .details > .add-info > .buttons > .add-to-wishlist-button').click()
    }

    static verifyMessageProdcutAddedToWishList(){
        cy.get('.content').should('have.text', 'The product has been added to your wishlist')
    }

    static clickLogo(){

        cy.get('.header-logo').click()
    }

    static clickAddProductToCart(){
        cy.get(':nth-child(1) > .product-item > .details > .add-info > .buttons > .product-box-add-to-cart-button').click()
    }
}
export default SearchProductsPage