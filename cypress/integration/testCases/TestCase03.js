import Others from "../others/Others";
import HomePage from "../pageObject/HomePage";

class TestCase03 {
    testCase03() {
        const others = new Others();
        const homePage = new HomePage();

        cy.log('Opening URL');
        others.WebURL();

        cy.log('Navigating to What\'s New section').then(() => {
            homePage.What_sNew().should('be.visible').click().then(() => {
                cy.url().should('include', '/sections/').and('include', 'What_sNew');
            });
        });
    }
}

export default TestCase03;
