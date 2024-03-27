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
    tools_Appliances(){
        return cy.get('#app > div > div > div.ct-header-wrapper > div > div.desktop-header-container.no-tap-highlight.stop-user-select > div.desktop-header > div.sub-header-container > div > div > div:nth-child(9) > div > div > a');
    }

}
export default HomePage;