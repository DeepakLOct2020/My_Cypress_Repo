class PasswordRecovery {

    static enterEmailAddress(emailAddress){
        cy.get('.inputs > input[type=email]').type(emailAddress)
    }

    static clickButtonRecover(){
        cy.get('.buttons > button[type=submit]').click()
    }


    static getErrorTextEmailNotFound(){

        cy.get('.content').should('have.text','Email not found.')
    }
    
    static verifyPasswordRecoveryPageTitle(){

        cy.title().should('eq','nopCommerce demo store. Password Recovery')
    }

    static verifyPasswordRecoverySuccessMessage(){
        cy.get('.content').should('have.text', 'Email with instructions has been sent to you.')
    }
}

export default PasswordRecovery