/// <reference types="cypress"/>

describe('US-012-Funcionalidade: Cadstro de membros', () => {
  it('Deve fazer o cadastro de campos obrigatórios', () => {
    cy.visit('http://127.0.0.1:8080/')
    cy.get('#signup-firstname').type('Rodrigo')
    cy.get('#signup-lastname').type('Costa')
    cy.get('#signup-email').type('rodrigo2@testes.com')
    cy.get('#signup-phone').type('2345678')
    cy.get('#signup-password').type('Teste123!')
    cy.get('#signup-button').click()
    cy.get('#signup-button').should('contain', 'Cadastro realizado com sucesso!')
  })
})