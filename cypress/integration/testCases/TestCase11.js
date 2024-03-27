import Others from "../others/Others";
import HomePage from "../pageObject/HomePage";
import PLP from "../pageObject/PLP";
import PDP from "../pageObject/PDP";

class TestCase11{
    testCase11(){
        const others = new Others();
        const homePage = new HomePage();
        const plp = new PLP();
        const pdp = new PDP();

        cy.log('Opening URL');
        others.WebURL();
        cy.log('Verifying Tools and Appliances button visible').then(()=>{
            homePage.tools_Appliances().should('be.visible').then(()=>{
                cy.log('Clicking on Tools & Appliances').then(()=>{
                    homePage.tools_Appliances().invoke('removeAttr', 'target').click().then(()=>{
                        cy.log('Scrolling till product cards appears').then(()=>{
                            plp.productContainers().scrollIntoView().then(()=>{
                                plp.productContainers().should('be.visible').then(()=>{
                                    cy.log('Verifying wether product is available')
                                    plp.gettingProductPACSmallPizzaPuff3Pcs().should('be.visible').then(()=>{
                                        plp.gettingProductPACSmallPizzaPuff3Pcs().invoke('removeAttr', 'target').click().then(()=>{
                                            cy.log('Verifying product name is same as shown in PLP')
                                            pdp.gettingProductPACSmallPizzaPuff3Pcs().invoke('text').should('include', 'PAC Small Pizza Puff - (3Pcs)')
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })

    }
}
export default TestCase11;