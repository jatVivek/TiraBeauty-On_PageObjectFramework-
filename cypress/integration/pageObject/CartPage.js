class CartPage{
        ManArden730ml(){
            return cy.contains(' Man Arden 7X Hydra Sport Beard Oil For Beard Growth & Nourishment (30ml) ');
        }
        pickingPriceMRP(){
            return cy.get('.prices > .effective-price');
        }
        quantityContainer(){
            return cy.get('.quantity');
        }
        incrementButton(){
            return cy.get('.qty-control > :nth-child(3)');
        }
        quantity(){
            return cy.get('.light-xs');
        }
}
export default CartPage;