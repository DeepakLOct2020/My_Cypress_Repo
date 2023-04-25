class RegisterUserPage {

    selectGender(genderValue) {

        if(genderValue == 'Male') {
            cy.get('input[id=gender-male]').check('M')
        }

        else
            cy.get('input[id=gender-female]').click('F')
    }

    enterTextFirstName(fname){

        cy.get('input[id=FirstName]').type(fname)
    }

    enterTextLastName(lname){

        cy.get('input[id=LastName]').type(lname)
        return this
    }

    //Enter DOB
    enterDOB(date, month, year){

        cy.get('select[name=DateOfBirthDay]').select(date)
        cy.get('select[name=DateOfBirthMonth]').select(month)
        cy.get('select[name=DateOfBirthYear]').select(year)
    }

    enterTExtEmailAddress(emailAddress){

        cy.get('input[id=Email]').type(emailAddress)
        return this
    }

    enterTextPassword(password){

        cy.get('input[name=Password]').type(password)
        return this
    }

    enterTextConfirmPassword(password){

        cy.get('input[name=ConfirmPassword]').type(password)
        return this
    }

    clickButtonRegister(){

        cy.get('button[id=register-button]').click()
        return 
    }
}

export default RegisterUserPage