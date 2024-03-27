import Others from "../others/Others";
import HomePage from "../pageObject/HomePage";
import ErrorMessages from "../pageObject/ErrorMessages";

class TestCase05 {
    testCase05() {
        const others = new Others();
        const homePage = new HomePage();
        const errorMessage = new ErrorMessages();

        cy.log('Opening URL');
        others.WebURL();

        cy.log('Searching for an invalid item').then(() => {
            homePage.searchButton().should('be.visible').click().then(() => {
                cy.log('Typing an invalid item into the search input');
                homePage.searchInput().type('fhbhfvbhfvb');

                cy.log('Submitting the search form');
                homePage.searchButton().click();

                cy.log('Verifying if the "No Items Available" error message is visible');
                errorMessage.NoItemsAvailable().should('be.visible').timeout(10000).then(() => {
                    cy.log('Error message is visible');
                }).catch(() => {
                    cy.log('Error message is not visible');
                    throw new Error('Error message validation failed');
                });
            });
        });
    }
}

export default TestCase05;
