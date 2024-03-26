import Others from "../others/Others";
import HomePage from "../pageObject/HomePage";
import ErrorMessages from "../pageObject/ErrorMessages";
import errorMessages from "../pageObject/ErrorMessages";

class TestCase05{
    testCase05(){
        const others = new Others();
        const homePage= new HomePage();
        const errorMessage = new ErrorMessages();
        cy.log('Opening URL')
        others.WebURL();
        cy.log('Searching Invalid Item').then(()=>{
            homePage.searchButton().should('be.visible').then(()=>{
                homePage.searchButton().type('fhbhfvbhfvb').type('{enter}').then(()=>{
                    errorMessage.NoItemsAvailable().should('be.visible');
                })
            })
        })
    }

}
export default TestCase05;