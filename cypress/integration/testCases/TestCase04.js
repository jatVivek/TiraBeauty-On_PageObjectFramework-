import Others from "../others/Others";
import HomePage from "../pageObject/HomePage";

class TestCase04 {
    testCase04() {
        const others = new Others();
        const homePage = new HomePage();

        cy.log('Opening URL');
        others.WebURL();

        cy.log('Getting Search Button').then(() => {
            homePage.searchButton().should('be.visible').click().then(() => {
                cy.log('Typing "Beard Oil" into the search input');
                homePage.searchInput().type('Beard Oil');

                cy.log('Submitting the search form');
                homePage.searchButton().click();

                cy.log('Verifying if the URL contains "Beard"');
                cy.url().should('contain', 'Beard').timeout(10000).then((url) => {
                    cy.log('URL contains the expected keyword: "Beard"');
                }).catch((error) => {
                    cy.log('URL does not contain the expected keyword');
                    throw new Error('Search validation failed');
                });
            });
        });
    }
}

export default TestCase04;
