class ErrorMessages{
    NoItemsAvailable(){
        return cy.contains(' Nothing to find here ');
    }
}
export default ErrorMessages;