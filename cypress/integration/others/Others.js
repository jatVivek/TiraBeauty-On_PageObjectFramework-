

class Others{
    WebURL(){
       return  cy.visit('https://www.tirabeauty.com/')
    }
    Wait(){
        return cy.wait(4000);
    }
    productName(){
        return 'Layer Wottagirl! Secret Crush Body Splash';
    }
}
export default Others;
