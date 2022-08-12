const { Given, When, And, Then } = require("cypress-cucumber-preprocessor/steps");
const mainPage = require('../../pages/main.page.js');
const supportCenterPage = require('../../pages/support_center.page.js');

Given('A user open site page', ()=> {
    cy.visit('/')
})

When('A user clicks on green button', ()=> {
    mainPage.clickOnGreenButton();
})

And('A user clicks on Suport center button', ()=> {
    mainPage.clickOnSupportCenterButton();
})

And('A user enter in search field {string} and tap enter', (text)=> {
    supportCenterPage.typeTest(text);
})

And('A user clicks on Getting Started section', ()=> {
    supportCenterPage.clickOnGettingStartedButton();
})

Then('A user will receive a message - search result about {string}', (text)=> {
    supportCenterPage.elements.searchResultMessage(text).should('be.visible');
})

Then('A user will see a {string} label', (text)=> {
    supportCenterPage.elements.searchLabel(text).should('be.visible');
})

Then('A title of current page is eq {string}', (text)=> {
    cy.title().should('include', text)
})