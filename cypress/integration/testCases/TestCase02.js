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
        cy.url().should('include', 'sections/hair');
    }
}

export default TestCase02;
