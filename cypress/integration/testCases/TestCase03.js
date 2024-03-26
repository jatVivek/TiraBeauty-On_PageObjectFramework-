import Others from "../others/Others";
import HomePage from "../pageObject/HomePage";

class TestCase03{
    testCase03(){
        const others = new Others();
        const homePage= new HomePage();
        cy.log('Opening URL')
        others.WebURL();
        cy.log('Navigating to What new section').then(() =>{
            homePage.What_sNew().should('be.visible').then(() =>{
                homePage.What_sNew().click().then(() =>{
                    cy.url().should('eq', 'https://www.tirabeauty.com/sections/');
                })
            })
        })
    }
}
export default TestCase03;