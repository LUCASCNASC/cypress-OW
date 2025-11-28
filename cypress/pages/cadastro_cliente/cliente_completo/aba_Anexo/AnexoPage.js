//Page Object para operações e validações relacionadas à aba de anexos.
//Todos os métodos são estáticos para facilitar o uso sem instanciação.
export class AnexoPage {
  //Valida e clica na aba Anexos.
  static clickAbaAnexo() {
    cy.get('#menu_mais_pri > :nth-child(4)')
      .should('be.visible')
      .and('not.have.attr', 'disabled');
    cy.intercept('GET', '/services/v3/dados_tabela/tipoanexo').as('api_tipoanexo');
    cy.get('#menu_mais_pri > :nth-child(4)').click();
    cy.wait('@api_tipoanexo', { timeout: 40000 });
  }

  //Valida os elementos da tela de anexos antes de fazer upload.
  static validateAbaAnexoVazio() {
    cy.get('[ng-controller="ListaDeAnexosController"] > :nth-child(1)')
      .should('be.visible')
      .and('have.text', 'Anexos');
    cy.get('#ComboTipoAnexo').should('be.visible').and('not.have.attr', 'disabled');
    cy.get('label[for="ComboTipoAnexo"]').should('have.text', 'Tipo de anexo');
    cy.get('.area-botoes > .md-primary').should('be.visible').and('have.attr', 'disabled');
    cy.get('.text-align-center').should('be.visible').and('have.text', 'Não foi encontrado nenhum registro');
    cy.get('.btn').should('be.visible').and('not.have.attr', 'disabled');
  }

  //Seleciona a primeira opção de tipo de anexo.
  static selectPrimeiroTipoAnexo() {
    cy.get('#ComboTipoAnexo').click();
    cy.contains('div.md-text.ng-binding', 'Assinatura do Termo de Adesão do Titular').click();
  }

  //Confirma o envio de arquivo no modal.
  static confirmEnvioArquivo() {
    cy.get('.md-title')
      .should('be.visible')
      .and('have.text', 'Deseja enviar o arquivo selecionado?');
    cy.get('.md-cancel-button').should('be.visible').and('have.text', 'Não');
    cy.get('.md-confirm-button').should('be.visible').and('have.text', 'Sim');
    cy.get('.md-confirm-button').click();
  }

  //Valida mensagem de sucesso de anexo adicionado.
  static validateMessageAnexoAdicionado() {
    cy.get('.toast').should('be.visible');
    cy.get('.toast-title').should('be.visible').and('have.text', 'Aviso');
    cy.get('.toast-message').should('be.visible').and('have.text', 'Anexo cadastrado com sucesso!');
  }

  //Valida que o anexo foi realmente adicionado (data do dia).
  static validateAnexoAdicionado() {
    const hoje = new Date();
    const dataAtual = hoje.toLocaleDateString('pt-BR');
    cy.get('.md-whiteframe-2dp').should('be.visible');
    cy.get('small.list-title')
      .should('be.visible')
      .and('include.text', 'Anexo inserido em')
      .and('include.text', dataAtual);
  }

  //Anexa um arquivo PDF (anexo_cadastro_cliente_completo.pdf) no campo de upload.
  //O caminho do arquivo é relativo à pasta fixtures do Cypress.
  static filePDF() {
    const filePath = 'anexo_cadastro_cliente_completo.pdf';
    cy.get("[type='file']").selectFile(filePath, { force: true });
  }
}
