import Others from "../others/Others";
import HomePage from "../pageObject/HomePage";
import ErrorMessages from "../pageObject/ErrorMessages";
import PLP from "../pageObject/PLP";
import PDP from "../pageObject/PDP";
import ProductContainers from "../pageObject/ProductContainers";
import CartPage from "../pageObject/CartPage";

class TestCase08 {
    getPriceOnCart(priceElement) {
        return priceElement.text();
    }
    getActualQuantity(priceElement){
        return priceElement.text();
    }

    testCase08() {
        const others = new Others();
        const homePage = new HomePage();
        const errorMessage = new ErrorMessages();
        const plp = new PLP();
        const pdp = new PDP();
        const cartPage = new CartPage();
        const productContainers = new ProductContainers();
        let price;
        let priceOnCart;
        let increasingQuantity = 4;
        let increasedQuantity = increasingQuantity+1;
        let actualQuantity;
        cy.log('Opening URL');
        others.WebURL();

        cy.log('Adding product to Cart').then(() => {
            homePage.searchButton().should('be.visible').then(() => {
                homePage.searchButton().type('Man Arden 7X Hydra Sport Beard Oil').then(() => {
                    productContainers.ManArden7XHydraSportBeardOil().should('be.visible').then(() => {
                        productContainers.ManArden7XHydraSportBeardOil().click().then(() => {
                            pdp.pickingPrice().then(priceElement => {
                                price = this.getPriceOnCart(priceElement);
                                cy.log('Price:', price);
                            }).then(() => {
                                pdp.addToCartButton().should('be.visible').then(() => {
                                    others.Wait().then(() => {
                                        pdp.addToCartButton().click();
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });

        cy.log('Navigating to Cart Page').then(() => {
            pdp.cartButton().should('be.visible').then(() => {
                pdp.cartButton().click().then(() => {
                    cy.url().should('include', 'cart/bag').then(() => {
                        cartPage.ManArden730ml().should('be.visible').then(() => {
                            cartPage.pickingPriceMRP().then(priceElement => {
                                priceOnCart = this.getPriceOnCart(priceElement);
                                others.Wait().then(() => {
                                    expect(priceOnCart).to.equal(price);
                                });
                            }).then(() => {
                                cartPage.quantityContainer().should('be.visible').then(() => {
                                    cartPage.incrementButton().should('be.visible').then(($incrementButton) => {

                                        Cypress._.times(increasingQuantity, () => {
                                            cy.wrap($incrementButton).click().then(priceElement =>{
                                                actualQuantity = this.getActualQuantity(priceElement);
                                                cy.log(actualQuantity).then(()=>{
                                                    if(increasingQuantity===actualQuantity){
                                                        throw new MessageChannel('Quantity increased Correctly');
                                                    }else{
                                                        throw new Error('Quantity not increased Correctly')
                                                    }
                                                })

                                            })
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

export default TestCase08;
