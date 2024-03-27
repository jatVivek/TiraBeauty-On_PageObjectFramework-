import Others from "../others/Others";
import HomePage from "../pageObject/HomePage";

class TestCase01 {
    TestCase01() {
        const others = new Others();
        const homePage = new HomePage();

        cy.log('Opening URL');
        others.WebURL();

        cy.log('Getting and clicking on Tira logo');
        homePage.tiraLogo().should('be.visible').click();

        cy.log('Verifying URL redirection after user clicks on logo');
        cy.url().should('eq', 'https://www.tirabeauty.com/').timeout(10000).then((url) => {
            cy.log('URL is correct: ' + url);
        }).catch((error) => {
            cy.log('URL is incorrect');
            throw new Error('URL validation failed');
        });
    }
}

export default TestCase01;
