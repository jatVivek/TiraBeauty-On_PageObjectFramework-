class PDP{
    productDecriptionButton(){
        return cy.contains(' Product Description ');
    }
    productDescription(){
        return cy.get(':nth-child(2) > .accordion__content')
    }
    addToCartButton(){
        return cy.get('.bag-btn-main > div > .custom-btn');
    }
}
export default PDP;
