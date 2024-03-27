import Others from "../others/Others";
import HomePage from "../pageObject/HomePage";
import ErrorMessages from "../pageObject/ErrorMessages";
import PLP from "../pageObject/PLP";
import PDP from "../pageObject/PDP";

class TestCase10 {
    testCase10() {
        const others = new Others();
        const homePage = new HomePage();
        const errorMessage = new ErrorMessages();
        const plp = new PLP();
        const pdp = new PDP();
        const category = 'Perfumes';

        cy.log('Opening URL');
        others.WebURL();

        cy.log('Searching for category: ' + category).then(() => {
            homePage.searchButton().should('be.visible').then(() => {
                homePage.searchButton().type(category).then(() => {
                    cy.wait(2000);
                    plp.selectingPerfumeforhim().should('be.visible').then(() => {
                        plp.selectingPerfumeforhim().click().then(() => {
                            cy.log('Verifying if category filter is present');
                            plp.categoryFilter().should('be.visible').click().then(() => {
                                cy.log('Verifying if Mens Perfumes (EDT & EDP) filter is present');
                                plp.gettingFilterMensPerfumesEDTEDP().should('be.visible').click().then(() => {
                                    cy.log('Scrolling to the top of the page');
                                    cy.scrollTo('top');
                                    cy.log('Verifying Selected Category');
                                    plp.gettingCategoryTitle().invoke('text').should('include', 'Mens Perfumes (EDT & EDP)');
                                });
                            });
                        });
                    });
                });
            });
        });
    }
}

export default TestCase10;
