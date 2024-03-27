class PDP{
    productDecriptionButton(){
        return cy.contains(' Product Description ');
    }
    productDescriptionHeader(){
        return cy.get(':nth-child(2) > .accordion__header-wrapper');
    }
    productDescription(){
        return cy.get(':nth-child(2) > .accordion__content')
    }
    addToCartButton(){
        return cy.get('.bag-btn-main > div > .custom-btn');
    }
    cartButton(){
        return cy.get('.wishlist-icon > .profile-icons > img')
    }
    pickingPrice(){
        return cy.get('.current-amount');
    }
    gettingProductPACSmallPizzaPuff3Pcs(){
        return cy.get('#item_name');
    }
    gettingImageCards(){
        return cy.get('.product-image-main');
    }
    productImage(){
        return cy.get('.pdp-image');
    }
    shareButton(){
        return cy.get('[data-v-7cf8c739=""] > .share-button > .share-img');
    }
    saveToWishlistButton(){
        return cy.get('.wrapper > .custom-btn');
    }
    authenticProductBadge(){
        return cy.get('div.badge-wrapper');
    }
    easyReturnBadge(){
        return cy.get('a.badge-wrapper');
    }
    deliveryOptions(){
        return cy.get('a.badge-wrapper');
    }
    deliveryOptionsPinCode(){
        return cy.get('.delivery-pin');
    }
    pinCodeLogo(){
        return cy.get('.pincode-address > img');
    }
    expectedDeliveryDateTitle(){
        return cy.get('.title');
    }
    expectedDeliveryDateLogo(){
        return cy.get('.pincode-check > img');
    }
    pinCodeChangeButton(){
        return cy.get('.change-btn');
    }
    productDetailsHeader(){
        return cy.get(':nth-child(3) > .accordion__header-wrapper');
    }
    customerReviewSection(){
        return cy.get('.customer-review');
    }
    feedbackButton(){
        return cy.get('.feedback-button');
    }
    recommendedProductsSection(){
        return cy.get(':nth-child(4) > .recommended-products');
    }
}
export default PDP;
