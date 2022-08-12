class DataPrivacyPage {
    elements = {
        updateButton: ()=> cy.xpath('//a[text()="Telnyx Product Updates"]'),
        faqButton: ()=> cy.xpath('//a[text()="GDPR Frequently Asked Questions"]'),
        coplianceButton: ()=> cy.xpath('//a[text()="Compliance"]'),
        datatransferButton: ()=> cy.xpath('//a[text()="Data Transfer Impact Assessment"]'),
        learnMoreButton: ()=> cy.xpath('//div/div/p[3]/a'),
        dlrLabel: (text)=> cy.xpath('//h1[text()="Data Locality Released to General Availability"]').contains(text),
    }

    clickOnLearnMoreButton() {
        this.elements.learnMoreButton().click();
    }
}
module.exports = new DataPrivacyPage();