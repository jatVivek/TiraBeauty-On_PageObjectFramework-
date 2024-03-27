class PLP{
    GettingLayerrWottagirlSecretCrushBodySplash60ml(){
        return cy.contains('Layer\'r Wottagirl! Secret Crush Body Splash (60ml)');
    }
    GettingManArden7XHydraSportBeardOil(){
        return cy.get('.product-card');
    }
    selectingPerfumeforhim(){
        return cy.contains(' for him');
    }
    categoryFilter(){
        return cy.get('#Category > .filters > .filter-title');
    }
    gettingFilterMensPerfumesEDTEDP(){
        return cy.contains(' Mens Perfumes (EDT & EDP) ');
    }
    gettingSelectedCategory(){
        return cy.get('.selected-item > span');
    }
    gettingCategoryTitle(){
        return cy.get('.product-title-text');
    }
    productContainers(){
        return cy.get(':nth-child(1) > .product-wrap > .product-wrapper > .product-card');
    }
    gettingProductPACSmallPizzaPuff3Pcs(){
        return cy.contains('PAC Small Pizza Puff - (3Pcs)');
    }
}
export default PLP;