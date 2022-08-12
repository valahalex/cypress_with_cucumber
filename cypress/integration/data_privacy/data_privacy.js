const { Given, When, And, Then } = require("cypress-cucumber-preprocessor/steps");
const mainPage = require('../../pages/main.page.js');
const data_privacyPage = require('../../pages/data_privacy.page.js');


Given('A user open site page', ()=> {
    cy.visit('/')
})

When('A user clicks on green button', ()=> {
    mainPage.clickOnGreenButton();
})

And('A user clicks on data and privacy button and go to that page', ()=> {
    mainPage.clickOnDataButton();
})

And('A user clicks on link Learn more to see what about DL in Mission Control Portal', ()=> {
    data_privacyPage.clickOnLearnMoreButton();
})

Then('A user will go to correct page with label links-jumps to product update, faq, comlianse and data transfere', ()=> {
    data_privacyPage.elements.updateButton().should('be.visible');
    data_privacyPage.elements.faqButton().should('be.visible');
    data_privacyPage.elements.coplianceButton().should('be.visible');
    data_privacyPage.elements.datatransferButton().should('be.visible');
})

Then('A user will go to correct page with label {string}', (text)=> {
    data_privacyPage.elements.dlrLabel(text).should('be.visible');
})