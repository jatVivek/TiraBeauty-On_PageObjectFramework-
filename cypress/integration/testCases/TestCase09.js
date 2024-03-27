import Others from "../others/Others";
import HomePage from "../pageObject/HomePage";
import ErrorMessages from "../pageObject/ErrorMessages";
import PLP from "../pageObject/PLP";

class TestCase09 {
    testCase09() {
        const others = new Others();
        const homePage = new HomePage();
        const errorMessage = new ErrorMessages();
        const plp = new PLP();
        const category = 'Perfumes';

        cy.log('Opening URL').then(() => {
            others.WebURL().then(() => {
                cy.log('Searching for category: ' + category).then(() => {
                    homePage.searchButton().should('be.visible').click().then(() => {
                        homePage.searchButton().type(category).type('{enter}').then(() => {
                            cy.log('Selecting Perfumes category for him').then(() => {
                                plp.selectingPerfumeforhim().should('be.visible').click().then(() => {
                                    cy.log('Verifying if category filter is present').then(() => {
                                        plp.categoryFilter().should('be.visible').click().then(() => {
                                            cy.log('Verifying if Mens Perfumes (EDT & EDP) filter is present').then(() => {
                                                plp.gettingFilterMensPerfumesEDTEDP().should('be.visible').click();
                                            });
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    }
}

export default TestCase09;
