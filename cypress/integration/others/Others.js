

class Others{
    WebURL(){
       return  cy.visit('https://www.tirabeauty.com/')
    }
    Wait(){
        return cy.wait(4000);
    }
}
export default Others;
