import Others from "../others/Others";
import HomePage from "../pageObject/HomePage"
class TestCase01{
    TestCase01(){
        const others = new Others();
        const homePage = new HomePage();
        cy.log('Opening URL')
        others.WebURL();
        cy.log('Getting and clicking on Tira logo');
        homePage.tiraLogo().should('be.visible').then(() => {
            homePage.tiraLogo().click();
        });
        cy.log('Verifying url redirection after user clicks on logo')
        // cy.url().then(url => {
        //     if (url === 'https://www.tirabeauty.com/') {
        //         cy.log('URL is correct: ' + url);
        //     } else {
        //         cy.log('URL is incorrect');
        //         throw new Error('URL validation failed');
        //     }
        // });
        cy.url().should('eq', 'https://www.tirabeauty.com/');
    }
}
export default TestCase01;