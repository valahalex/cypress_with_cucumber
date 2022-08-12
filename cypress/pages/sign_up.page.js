class SignUpPage{
    elements = {
        emailInput: ()=> cy.get('#email'),
        fullNameInput: ()=> cy.get('#full_name'),
        passwordInput: ()=> cy.get('#password'),
        createAccountButton: ()=> cy.get('button').contains('Create Account'),
        rangeError: ()=> cy.xpath("//*[text()='Be at least 12 characters long']"),
        numberError: ()=> cy.xpath("//*[text()='Contain at least one number']"),
        symbolError: ()=> cy.xpath("//*[text()='Contain at least one symbol']"),
        upperCaseError: ()=> cy.xpath("//*[text()='Contain at least one upper-case letter']"),
        emailError: ()=> cy.get('#email_error'),
        fullNameError: ()=> cy.get('#full_name_error'),
        checkboxError: ()=> cy.xpath("//*[text()='Please accept the terms and conditions']")
    }

    typeEmail(email) {
        this.elements.emailInput().type(email);
    }

    typeFullName(name) {
        this.elements.fullNameInput().type(name);
    }

    typePassword(password) {
        this.elements.passwordInput().type(password);
    }

    clickOnCreateAccountButton() {
        this.elements.createAccountButton().click();
    }

    clickOnGreenButton() {
        this.elements.greenButton().click();
    }

}

module.exports = new SignUpPage();