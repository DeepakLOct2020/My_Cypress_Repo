class HomePage {

    static launchApplication(){

        cy.visit('https://demo.nopcommerce.com')
        return HomePage
    }

    static verifyHomePageTitle(){

        cy.title().should('eq', 'nopCommerce demo store')
    }

    static clickLinkLogin(){

        cy.get('.ico-login').click()
        //return LoginPage
    }

    static clickLinkRegister(){

        cy.get('.ico-register').click()
        //return RegisterUserPage
    } 

    static clicklinkLogout(){

        cy.get('.ico-logout').click()
    }
}

export default HomePage
