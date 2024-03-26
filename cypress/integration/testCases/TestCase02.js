import Others from "../others/Others";
import HomePage from "../pageObject/HomePage";

class TestCase02{
    testCase02(){
        const others = new Others();
        const homePage= new HomePage();
        cy.log('Opening URL')
        others.WebURL();
        cy.log('Navigating to Hair products')
        homePage.hairCategoryButton().should('be.visible').then(() =>{
            homePage.hairCategoryButton().click();
        })
        cy.log('Validating navigtion').then(() =>{
            cy.url().should('eq', 'https://www.tirabeauty.com/sections/hair');
        })

    }

}
export default TestCase02;