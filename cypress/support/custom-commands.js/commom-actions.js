let data
before(()=>{
    cy.fixture("selectors").then((sel)=>{
      data = sel
    })
})

Cypress.Commands.add('typeAField', (field, text) => { 
    cy.get(field).should('be.visible').fill(text)
 })