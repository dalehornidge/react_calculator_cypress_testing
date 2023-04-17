describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })

  // Do the number buttons update the display of the running total?
  it('should have a running total updated by the number buttons', () => {
    cy.get('#number3').click();
    cy.get('#number4').click();
    cy.get('.display').should('contain', '34')
  })

  // Do the arithmetical operations update the display with the result of the operation?
it('should have arithmetical operations updated on display', () => {
  cy.get('#number3').click();
  cy.get('#operator-multiply').click();
  cy.get('#number4').click();
  cy.get('#operator-equals').click();
  cy.get('.display').should('contain', '12')
})

// Can multiple operations be chained together?
it('should have multiple operations chained together', () => {
  cy.get('#number3').click();
  cy.get('#operator-multiply').click();
  cy.get('#number4').click();
  cy.get('#operator-subtract').click();
  cy.get('#number4').click();
  cy.get('#operator-equals').click();
  cy.get('.display').should('contain', '8')
})

// Is the output as expected for positive numbers
it('should have positive numbers', () => {
  cy.get('#number6').click();
  cy.get('#operator-multiply').click();
  cy.get('.display').invoke('text').then(parseInt).should('be.greaterThan', 0)
})

// Is the output as expected for negative numbers
it('should have negative numbers', () => {
  cy.get('#number1').click();
  cy.get('#operator-subtract').click();
  cy.get('#number5').click();
  cy.get('#operator-equals').click();
  cy.get('.display').invoke('text').then(parseInt).should('be.lessThan', 0)
})

// Is the output as expected for decimal numbers
it('should display decimal numbers', () => {
  cy.get('#number5').click();
  cy.get('#operator-subtract').click();
  cy.get('#number0').click();
  cy.get('#decimal').click();
  cy.get('#number9').click();
  cy.get('#operator-equals').click();
  cy.get('.display').should('contain', '4.1')
})

// Is the output as expected for very large numbers
it('should display very large numbers', () => {
  cy.get('#number9').click();
  cy.get('#number9').click();
  cy.get('#number9').click();
  cy.get('#number9').click();
  cy.get('#number9').click();
  cy.get('#number9').click();
  cy.get('#number9').click();
  cy.get('#number9').click();
  cy.get('#number9').click();
  cy.get('#number9').click();
  cy.get('#number9').click();
  cy.get('#number9').click();
  cy.get('#number9').click();
  cy.get('#operator-multiply').click();
  cy.get('#operator-multiply').click();
  cy.get('#operator-multiply').click();
  cy.get('#operator-multiply').click();
  cy.get('#operator-multiply').click();
  cy.get('#operator-multiply').click();
  cy.get('#operator-multiply').click();
  cy.get('#operator-multiply').click();
  cy.get('#operator-multiply').click();
  cy.get('#operator-multiply').click();
  cy.get('#operator-multiply').click();
  cy.get('.display').should('contain', 'Infinity')
})

// What does the code do in exceptional circumstances (Was Infinity which was incorrect, so edited the code to display error, you can't divide by 0)
it('should display error message in exceptional circumstances', () => {
  cy.get('#number9').click();
  cy.get('#operator-divide').click();
  cy.get('#number0').click();
  cy.get('#operator-equals').click();
  cy.get('.display').should('contain', 'Error')

})
})
