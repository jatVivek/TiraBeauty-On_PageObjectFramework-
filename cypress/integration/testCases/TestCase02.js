import Others from "../others/Others";
import HomePage from "../pageObject/HomePage";

class TestCase02 {
    testCase02() {
        const others = new Others();
        const homePage = new HomePage();

        cy.log('Opening URL');
        others.WebURL();

        cy.log('Navigating to Hair products');
        homePage.hairCategoryButton().should('be.visible').click();

        cy.log('Validating navigation');
        cy.url().should('include', 'sections/hair').timeout(10000).then((url) => {
            cy.log('URL includes the expected path: ' + url);
        }).catch((error) => {
            cy.log('URL does not include the expected path');
            throw new Error('Navigation validation failed');
        });
    }
}

export default TestCase02;
