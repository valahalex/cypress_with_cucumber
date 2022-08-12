const { Given, When, And, Then } = require("cypress-cucumber-preprocessor/steps");
const mainPage = require('../../pages/main.page.js');
const explorePage = require('../../pages/explore.page.js');


Given('A user open site page', ()=> {
    cy.visit('/')
})

When('A user clicks on green button', ()=> {
    mainPage.clickOnGreenButton();
})

And('A user clicks on explore product button', ()=> {
    mainPage.clickOnExploreProductButton();
})

And('A user clicks on sms button', ()=> {
    explorePage.clickOnSmsButton();
})

And('A user clicks on See sms pricing button', ()=> {
    explorePage.clickOnSeeButton();
})

Then('A user will go to explore product page with label {string}', (text)=> {
    explorePage.elements.productLabel(text).should('be.visible');
})

Then('A user will go to page with pricing and it will have the label {string}', (text)=> {
    explorePage.elements.priceLabel(text).should('be.visible');
})
