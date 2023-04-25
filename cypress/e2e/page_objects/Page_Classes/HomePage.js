class HomePage {

    launchApplication(){

        cy.visit('https://demo.nopcommerce.com')
        return HomePage
    }

    verifyHomePageTitle(){

        cy.title().should('eq', 'nopCommerce demo store')
    }

    clickLinkLogin(){

        cy.get('.ico-login').click()
        //return LoginPage
    }

    clickLinkRegister(){

        cy.get('.ico-register').click()
        //return RegisterUserPage
    } 

    clicklinkLogout(){

        cy.get('.ico-logout').click()
    }
}

export default HomePage
