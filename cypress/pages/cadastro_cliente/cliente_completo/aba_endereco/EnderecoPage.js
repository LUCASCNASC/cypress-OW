export class EnderecoPage {
  
  //Valida e clica na aba Endereço.
  static addEndereco() {
    cy.get('#menu_items_pri > :nth-child(2)')
      .should('be.visible')
      .and('have.text', 'Endereço');
    cy.intercept('GET', '/services/v3/dados_tabela/tipoendereco').as('api_cliente_completo_endereco');
    cy.get('#menu_items_pri > :nth-child(2)').scrollIntoView().click({ force: true });
    cy.wait('@api_cliente_completo_endereco', { timeout: 40000 });


    //Valida mensagem de sucesso após incluir endereço. - messEnderecoAdicionadoSucesso
    cy.get('.toast-success').should('be.visible');
    cy.get('.toast-success > .toast-title').should('be.visible').and('have.text', 'Aviso');
    cy.get('.toast-success > .toast-message').should('be.visible').and('have.text', 'Endereço incluído com sucesso.');


    //Clica no botão "+" para adicionar novo endereço. - clickAdicionarNovoEndereco
    cy.get('.layout-align-end-end > .md-fab')
      .should('be.visible')
      .and('not.have.attr', 'disabled');
    cy.intercept('GET', '/views/cliente/ModalClienteEndereco.html').as('api_ModalClienteEndereco');
    cy.get('.layout-align-end-end > .md-fab').click();
    cy.wait('@api_ModalClienteEndereco', { timeout: 40000 });


    //Valida os campos do modal de endereço quando está vazio. - validateEnderecoVazio
    cy.get('label[for="txtRuaEndereco"]').should('have.text', 'Endereço');
    cy.get('#txtRuaEndereco').should('be.visible').and('have.value', '');

    cy.get('label[for="txtNumEndereco"]').should('have.text', 'Número');
    cy.get('#txtNumEndereco').should('be.visible').and('have.value', '');

    cy.get('label[for="txtComplEndereco"]').should('have.text', 'Complemento');
    cy.get('#txtComplEndereco').should('be.visible').and('have.value', '');

    cy.get('label[for="txtBairroEndereco"]').should('have.text', 'Bairro');
    cy.get('#txtBairroEndereco').should('be.visible').and('have.value', '');

    cy.get('label[for="txtCxPostEndereco"]').should('have.text', 'Caixa Postal');
    cy.get('#txtCxPostEndereco').should('be.visible').and('have.value', '');

    cy.get('label[for="txtUfEndereco"]').should('have.text', 'Estado');
    cy.get('#txtUfEndereco').should('be.visible').and('have.value', '');

    cy.get('label[for="txtCidEndereco"]').should('have.text', 'Cidade');
    cy.get('#txtCidEndereco').should('be.visible').and('have.value', '');


    //Clica para abrir as opções de tipo de endereço. - clickAbrirTipoEndereco
    cy.get('#txtTpEndereco').click({ force: true });


    //Valida informações que foram adicionadas no endereço. - infoEnderecoAdicionado
    cy.get('.md-whiteframe-2dp')
      .should('be.visible')
      .and('contain', 'Padrão')
      .and('contain', 'RUA PETÚNIA - 66 - PARQUE INDUSTRIAL')
      .and('contain', '87065-300');


    //Clica no botão salvar endereço. - clickSalvarEndereco
    cy.get('#btnModalAddEndereco').click();


    //Seleciona o tipo de endereço "Padrão". - chooseTipoEndereco
    cy.get('.md-text.ng-binding').contains('Padrão').click({ force: true });


    //Preenche o campo CEP no cadastro de endereço e pesquisa. - fillCEPEndereco
    const CEPcadastro = "87065300";
    cy.get('#txtCepEndereco').type(CEPcadastro, { force: true });
    cy.get('.md-icon-float > .ng-binding').should('be.visible');
    cy.intercept('GET', '/services/v3/cidade?uf=PR').as('api_cidade');
    cy.get('.md-icon-float > .ng-binding').click({ force: true });
    cy.wait('@api_cidade', { timeout: 40000 });


    //Preenche o campo Número no cadastro de endereço. - fillNumeroEndereco
    const numero_endereco = "66";
    cy.get('#txtNumEndereco').type(numero_endereco, { force: true });
    
  }
}