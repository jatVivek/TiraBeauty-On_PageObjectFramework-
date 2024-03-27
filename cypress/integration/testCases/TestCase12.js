import Others from "../others/Others";
import HomePage from "../pageObject/HomePage";
import PLP from "../pageObject/PLP";
import PDP from "../pageObject/PDP";

class TestCase12{
    testCase12(){
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
        cy.log('Verifying wether All relevant details of the product are shown on the PDP.').then(()=>{
            cy.log('Verifying price').then(()=>{
                pdp.pickingPrice().should('be.visible').then(()=>{
                    cy.log('Verifying Image Cards').then(()=>{
                        pdp.gettingImageCards().should('be.visible').then(()=>{
                            cy.log('Verifying avaibility of Image')
                            pdp.productImage().should('be.visible').then(()=>{
                                cy.log('Verifying Share, Add to Cart and Wishlist button')
                                pdp.shareButton().should('be.visible')
                                pdp.addToCartButton().should('be.visible')
                                pdp.saveToWishlistButton().should('be.visible').then(()=>{
                                    cy.log('Verifying Badges')
                                    pdp.authenticProductBadge().should('be.visible')
                                    pdp.easyReturnBadge().should('be.visible').then(()=>{
                                        cy.log('Verifying Deliver options')
                                        pdp.deliveryOptions().should('be.visible')
                                        pdp.deliveryOptionsPinCode().should('be.visible')
                                        pdp.pinCodeLogo().should('be.visible')
                                        pdp.pinCodeChangeButton().should('be.visible')
                                        pdp.expectedDeliveryDateTitle().should('be.visible')
                                        pdp.expectedDeliveryDateLogo().should('be.visible').then(()=>{
                                            cy.log('Verifying product Description')
                                            pdp.productDescriptionHeader().should('be.visible')
                                            pdp.productDescriptionHeader().click()
                                            pdp.productDescription().should('be.visible')
                                            pdp.productDescriptionHeader().click().then(()=>{
                                                cy.log('Verifying Product Details Section')
                                                pdp.productDetailsHeader().should('be.visible').then(()=>{
                                                    cy.log('Verifying Customer Review section')
                                                    pdp.customerReviewSection().should('be.visible')
                                                    pdp.feedbackButton().should('be.visible').then(()=>{
                                                        cy.log('Vrifying Reccomnded product section is visible or not')
                                                        pdp.recommendedProductsSection().should('be.visible')
                                                    })
                                                })
                                            })
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
export default TestCase12;