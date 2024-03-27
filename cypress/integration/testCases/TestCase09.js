import Others from "../others/Others";
import HomePage from "../pageObject/HomePage";
import ErrorMessages from "../pageObject/ErrorMessages";
import PLP from "../pageObject/PLP";
import PDP from "../pageObject/PDP";

class TestCase09 {
    testCase09() {
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
                        plp.selectingPerfumeforhim().click().then(()=>{
                            cy.log('Verifying wether category is present or not')
                            plp.categoryFilter().should('be.visible').then(()=>{
                                plp.categoryFilter().click().then(()=>{
                                    cy.log('Verifying wether Filter( Mens Perfumes (EDT & EDP) ) is present or not')
                                    plp.gettingFilterMensPerfumesEDTEDP().should('be.visible');
                                })
                            })
                        })
                    });
                });
            });
        });
    }
}

export default TestCase09;
