

import { faker } from '@faker-js/faker';
describe('FEATURE: LOGIN', () => {


  beforeEach(() => {
    cy.visit('/')
    
  })
  let usuario = faker.internet.userName()
  let senha = faker.internet.password(6)
  let nome = faker.person.fullName()
  
  let formVariaveis = ['usuario', 'senha', 'nome']

  it('Cadastro realizado com sucesso', () => {
    cy.preencherCampoUsuario(usuario)
    cy.preencherCampoSenha(senha)
    cy.preencherCampoNome(nome)
    cy.clicarNoBotaoEnviar()
    cy.conferirCampoUsuario(usuario)
    cy.conferirCampoSenha(senha)
    cy.conferirCampoNome(nome)
    

  })
  
  it('Teste de Login com Credenciais Vazias (Usuário em Branco)', () => {
    
    cy.preencherCampoSenha(senha)
    cy.preencherCampoNome(nome)
    cy.clicarNoBotaoEnviar()
    cy.get('input[name="form_usuario"]').should('have.attr', 'required')
  })
  
  it('Teste de Login com Credenciais Vazias (Senha em Branco)', () => {
    cy.preencherCampoUsuario(usuario)
    cy.preencherCampoNome(nome)
    cy.clicarNoBotaoEnviar()
    cy.get('input[name="form_senha"]').should('have.attr', 'required')  
  })

  it('Teste de Login com Credenciais Vazias (Nome em Branco)', () => {
    cy.preencherCampoUsuario(usuario)
    cy.preencherCampoSenha(senha)
    cy.clicarNoBotaoEnviar()
    cy.get(':nth-child(7) > td').should('have.text', 'Existem campos em branco.')  
  })
  
  it('Teste de Login com Credenciais Inválidas (Usuário com caracteres especiais)', () => {
    cy.get(':nth-child(2) > td > input')
      .type('@#*%$')
    cy.get(':nth-child(4) > td > input')
      .type(senha)
    cy.get(':nth-child(6) > td > input')
      .type(nome)
    cy.clicarNoBotaoEnviar()
    cy.conferirCampoUsuario('@#*%$')
    cy.conferirCampoSenha(senha)
    cy.conferirCampoNome(nome) 
  })


  it('Teste de Login com Credenciais Inválidas (Nome em formato de numero)', () => {
    let usuario = faker.internet.userName()
    let senha = faker.internet.password(6)
    

    cy.preencherCampoUsuario(usuario)
    cy.preencherCampoSenha(senha)
    cy.preencherCampoNome(123)
    cy.clicarNoBotaoEnviar()
    cy.conferirCampoUsuario(usuario)
    cy.conferirCampoSenha(senha)
    
  })

})