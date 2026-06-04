import { gerarTelefoneAleatorio } from '../../../gerarDados';
export class TelefonePage {
  
  //Valida e clica na aba Telefone.
  static registerTelefone() {
    
    cy.get('#menu_items_pri > :nth-child(4)')
      .should('be.visible')
      .and('have.text', 'Telefones');
    cy.intercept('GET', '/services/v3/dados_tabela/tipotelefone').as('api_cliente_completo_telefones');
    cy.get('#menu_items_pri > :nth-child(4)').click();
    cy.wait('@api_cliente_completo_telefones', { timeout: 40000 });


    //Clica no botão "+" para adicionar novo telefone. - clickAdicionarNovoTelefone
    cy.get('.layout-align-end-end > .md-fab')
      .should('be.visible')
      .and('not.have.attr', 'disabled');
    cy.intercept('GET', '/views/cliente/ModalClienteTelefone.html').as('api_ModalClienteTelefone');
    cy.get('.layout-align-end-end > .md-fab').click();
    cy.wait('@api_ModalClienteTelefone', { timeout: 40000 });


    //Valida campos do modal Telefone enquanto está vazio. - validateTelefoneVazio
    cy.get('#btnModalAddTel')
      .should('be.visible')
      .and('not.have.attr', 'disabled');
    cy.get('#btnModalAddTel').click({ force: true });


    //Valida informações adicionadas no cadastro de telefone. - validateTelefoneAdicionado
    cy.get('.md-whiteframe-2dp')
      .should('be.visible')
      .and('contain', 'Padrão')
      .and('contain', '(44)')
      .and('contain', '435');


    //Valida mensagem de telefone incluído com sucesso. - validateMessageTelefoneAdicionado
    cy.get('.toast-success').should('be.visible');
    cy.get(':nth-child(1) > .toast-title').should('be.visible').and('have.text', 'Aviso');
    cy.get('.toast-success > .toast-message').should('be.visible').and('have.text', 'Telefone incluído com sucesso.');


    //Seleciona o tipo de telefone "Padrão". - chooseTipoTelefone
    cy.get('#txtTpTel').click({ force: true });
    cy.get('.md-text.ng-binding').contains('Padrão').click({ force: true });


    //Preenche o campo Número no cadastro de telefone. - fillNumeroTelefone
    const numero_telefone = gerarTelefoneAleatorio();
    cy.get('#txtNumTel').type(numero_telefone);


    //Preenche o campo Ramal no cadastro de telefone. - fillRamalTelefone
    const ramal_telefone = "435";
    cy.get('#txtRamalTel').type(ramal_telefone);
  }
}