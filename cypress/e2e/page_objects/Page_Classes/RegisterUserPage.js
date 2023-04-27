class RegisterUserPage {

    static selectGender(genderValue) {

        if(genderValue == 'Male') {
            cy.get('input[id=gender-male]').check('M')
        }

        else
            cy.get('input[id=gender-female]').click('F')
    }

    static enterTextFirstName(fname){

        cy.get('input[id=FirstName]').type(fname)
    }

    static enterTextLastName(lname){

        cy.get('input[id=LastName]').type(lname)
        return this
    }

    //Enter DOB
    static enterDOB(date, month, year){

        cy.get('select[name=DateOfBirthDay]').select(date)
        cy.get('select[name=DateOfBirthMonth]').select(month)
        cy.get('select[name=DateOfBirthYear]').select(year)
    }

    static enterTExtEmailAddress(emailAddress){

        cy.get('input[id=Email]').type(emailAddress)
        return this
    }

    static enterTextPassword(password){

        cy.get('input[name=Password]').type(password)
        return this
    }

    static enterTextConfirmPassword(password){

        cy.get('input[name=ConfirmPassword]').type(password)
        return this
    }

    static clickButtonRegister(){

        cy.get('button[id=register-button]').click()
        return 
    }
}

export default RegisterUserPage