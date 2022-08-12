class ExplorePage {
    elements = {
        productLabel: (text)=> cy.get('h1').contains(text), 
        smsButton: ()=> cy.xpath("//*[text()='SMS']/../../../.."),
        seeButton: ()=> cy.xpath("//*/div[2]/div[2]/span/a"),
        priceLabel: (text)=> cy.xpath("//span[text()='Messaging pricing']").contains(text),
    }

    clickOnSmsButton() {
        this.elements.smsButton().click();
    }

    clickOnSeeButton() {
        this.elements.seeButton().click();
    }
}
module.exports = new ExplorePage();