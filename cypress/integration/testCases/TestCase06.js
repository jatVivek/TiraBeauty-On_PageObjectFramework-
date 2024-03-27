import Others from "../others/Others";
import HomePage from "../pageObject/HomePage";
import ErrorMessages from "../pageObject/ErrorMessages";
import PLP from "../pageObject/PLP";
import PDP from "../pageObject/PDP";

class TestCase06 {
    testCase06() {
        const others = new Others();
        const homePage = new HomePage();
        const errorMessage = new ErrorMessages();
        const plp = new PLP();
        const pdp = new PDP();


        cy.log('Opening URL');
        others.WebURL();

        cy.log('Validating Product Page').then(() => {
            homePage.searchButton().should('be.visible').type(others.productName() + '{enter}').then(() => {
                plp.GettingProduct(productName).should('be.visible').invoke('removeAttr', 'target').click().then(() => {
                    cy.log('Moved to PDP').then(() => {
                        pdp.productDecriptionButton().should('be.visible').click().then(() => {
                            pdp.productDescription().should('be.visible');
                        });
                    });
                });
            });
        });
    }
}

export default TestCase06;
