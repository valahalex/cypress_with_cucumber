const { Given, When, And, Then } = require("cypress-cucumber-preprocessor/steps");
const mainPage = require('../../pages/main.page.js');
const signUpPage = require('../../pages/sign_up.page.js');



Given('A user open site page', ()=> {
    cy.visit('/')
})

When('A user clicks on green button', ()=> {
    mainPage.clickOnGreenButton();
})

And('A user clicks on Sing up button', ()=> {
    mainPage.clickOnSignUpButton();
})

And('A user enter the email {string}', (email)=> {
    signUpPage.typeEmail(email);
})

And('A user enter the Full name {string}', (fullName)=> {
    signUpPage.typeFullName(fullName);
})

And('A user enter the password {string}', (password)=> {
    signUpPage.typePassword(password);
})

And('A user clicks on Create account button', ()=> {
    signUpPage.clickOnCreateAccountButton();
})

Then('A user will receive a blocked message about range, number, symbol and upper-case letter', ()=> {
    signUpPage.elements.rangeError().should('be.visible');
    signUpPage.elements.numberError().should('be.visible');
    signUpPage.elements.symbolError().should('be.visible');
    signUpPage.elements.upperCaseError().should('be.visible');
})

Then('A user will receive a blocked message the field Full name is required', ()=> {
    signUpPage.elements.fullNameError().should('be.visible');
})

Then('A user will receive a blocked message the field Email is required', ()=> {
    signUpPage.elements.emailError().should('be.visible');
})

Then('A user will receive a blocked message to tap checkbox is required', ()=> {
    signUpPage.elements.checkboxError().should('be.visible');
})
