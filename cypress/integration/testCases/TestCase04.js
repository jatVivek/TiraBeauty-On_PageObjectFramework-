import Others from "../others/Others";
import HomePage from "../pageObject/HomePage";

class TestCase04{
    testCase04(){
        const others = new Others();
        const homePage= new HomePage();
        cy.log('Opening URL')
        others.WebURL();
        cy.log('Getting Search Button').then(() =>{
            homePage.searchButton().should('be.visible').then(()=>{
                homePage.searchButton().type('Beard Oil').type('{enter}').then(()=>{
                    cy.url().should('contain', 'Beard');
                })
            })
        })

    }

}
export default TestCase04;