//SCRIPT
describe('POC Cypress', () => {

  //Cenário - Fluxo Positivo
  describe('telaBitCoin', () => {

    //Repetição para cada passo
    beforeEach(() => {
    cy.visit('http://localhost:3000');
    })

      //Passo 1 - Abrir Projeto
      it('Expetativa: Abrir URL', () => {
        cy.url()
        .should('eq', 'http://localhost:3000/');
      })

      //Passo 2 - Funcionalidade campo positiva
      it('Expectativa: Selecionar e verificar campo', () => {
        cy.get('.input-wallet');
      })

      //Passo 3 - Funcionalidade Digitar e Depositar
      it('Expectativa: Depositar corretamente', () => {
        cy.get('.input-wallet')
        .type('1000')
        .should('have.value', '1000');
        cy.get('.btn-deposit')
        .click();
        cy.get('.balance')
        .should('contain', '1000');
        cy.get('.input-wallet')
        .clear();
      })

      /*/Passo 4 - Funcionalidade Digitar e Sacar
      it('Expectativa: Sacar corretamente', () => {
        cy.get('.input-wallet')
        .type('200')
        .should('have.value', '200');
        cy.get('.btn-withdraw')
        .click();
        cy.get('.balance')
        .should('contain', '800');
       
      })*/
  })
})