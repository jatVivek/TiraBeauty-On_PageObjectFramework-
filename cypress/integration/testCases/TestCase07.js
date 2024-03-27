import Others from "../others/Others";
import HomePage from "../pageObject/HomePage";
import ErrorMessages from "../pageObject/ErrorMessages";
import PLP from "../pageObject/PLP";
import PDP from "../pageObject/PDP";
import ProductContainers from "../pageObject/ProductContainers";

class TestCase07 {
    testCase07() {
        const others = new Others();
        const homePage = new HomePage();
        const errorMessage = new ErrorMessages();
        const plp = new PLP();
        const pdp = new PDP();
        const productContainers = new ProductContainers();

        cy.log('Opening URL');
        others.WebURL();

        cy.log('Adding product to Cart').then(() => {
            homePage.searchButton().should('be.visible').click().then(() => {
                cy.log('Typing the product name into the search input');
                homePage.searchButton().type('Man Arden 7X Hydra Sport Beard Oil');

                cy.log('Submitting the search form');
                homePage.searchButton().click();

                cy.log('Selecting the product from the search results');
                productContainers.ManArden7XHydraSportBeardOil().should('be.visible').click().then(() => {
                    cy.log('Adding the product to the cart');
                    pdp.addToCartButton().should('be.visible').click();

                    cy.log('Verifying if the product is successfully added to the cart');
                    // Add assertions to verify that the product is added to the cart
                    // For example:
                    // pdp.cartButton().should('be.visible');
                });
            });
        });
    }
}

export default TestCase07;
