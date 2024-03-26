class HomePage{
    tiraLogo(){
        return cy.get('.tira-logo');
    }
    hairCategoryButton(){
        return cy.get(':nth-child(4) > .category-link-text > :nth-child(1) > a');
    }
    What_sNew(){
        return cy.get(':nth-child(1) > .category-link-text > div > .router-link-active');
    }
    searchButton(){
        return cy.get('#search');
    }

}
export default HomePage;