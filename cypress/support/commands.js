

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })

Cypress.Commands.add('clicarNoBotaoEnviar', (enviar) => {
    cy.get('td > .btn')
      .click(enviar)
  })
  
Cypress.Commands.add('preencherCampoUsuario', (usuario) => {
  cy.get(':nth-child(2) > td > input')
      .type(usuario)
  
})  

Cypress.Commands.add('preencherCampoSenha', (senha) => {
  cy.get(':nth-child(4) > td > input')
      .type(senha)
  
})  

Cypress.Commands.add('preencherCampoNome', (nome) => {
  cy.get(':nth-child(6) > td > input')
      .type(nome)
  
})  

Cypress.Commands.add('conferirCampoUsuario', (usuario) => {
  cy.get('tbody > :nth-child(2) > :nth-child(3)')
      .should('have.text', usuario)
})

Cypress.Commands.add('conferirCampoSenha', (senha) => {
  cy.get(':nth-child(2) > :nth-child(4)')
      .should('have.text', senha)
})

Cypress.Commands.add('conferirCampoNome', (nome) => {
  cy.get('tbody > :nth-child(2) > :nth-child(2)')
      .should('have.text', nome)
})

