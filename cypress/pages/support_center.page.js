class SupportCenterPage {


    elements = {
        searchField: () => cy.xpath('//*/input'),
        gettingStartedButton: ()=> cy.get('h2').contains('Getting Started'),
        searchResultMessage: (text)=> cy.xpath("//span[text()='Search results for:']/..").contains(text),
        searchLabel: (text)=> cy.get('h1').contains(text),      
    }

    clickOnGettingStartedButton() {
        this.elements.gettingStartedButton().click();
    }

    typeTest(text) {
        this.elements.searchField().type(text).type('{enter}');
    }

}

module.exports = new SupportCenterPage();