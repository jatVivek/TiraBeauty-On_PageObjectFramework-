import Others from "../others/Others";
import HomePage from "../pageObject/HomePage";
import ErrorMessages from "../pageObject/ErrorMessages";
import PLP from "../pageObject/PLP";
import PDP from "../pageObject/PDP";
import ProductContainers from "../pageObject/ProductContainers";

class TestCase07{
    testCase07(){
        const others = new Others();
        const homePage= new HomePage();
        const errorMessage = new ErrorMessages();
        const plp = new PLP();
        const pdp = new PDP();
        const productContainers = new ProductContainers();
        cy.log('Opening URL')
        others.WebURL();
        cy.log('Adding product in Cart').then(()=>{
            homePage.searchButton().should('be.visible').then(()=>{
                homePage.searchButton().type('Man Arden 7X Hydra Sport Beard Oil').then(()=>{
                   productContainers.ManArden7XHydraSportBeardOil().should('be.visible').then(()=>{
                       productContainers.ManArden7XHydraSportBeardOil().click().then(()=>{
                           pdp.addToCartButton().should('be.visible').then(()=>{
                               pdp.addToCartButton().click();
                           })
                           })
                       })
                   })
                })
            })
    }
}
export default TestCase07;