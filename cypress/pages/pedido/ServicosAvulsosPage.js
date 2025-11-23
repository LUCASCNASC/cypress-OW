export class ServicosAvulsosPage {
  /**
   * Escolher cliente CPF para gerar pedido de venda.
   */
  static chooseClientOrder() {
    cy.get('.click-cliente > .informe-o-cliente > .cliente-header')
      .wait(500)
      .type('48976249089 {downArrow}');
    cy.wait(200);
    cy.get('.md-block > .ng-binding').should('be.visible').click();
    cy.wait(1500);
    cy.get('.md-3-line > div.md-button > .md-no-style').should('be.visible').click();
  }

  /**
   * Validar e clicar no menu de opções.
   */
  static clickMenuOpcoes() {
    cy.get('[aria-label="Menu de opções"] > .ng-binding').should('be.visible').and('not.have.attr', 'disabled').click({ force: true });
  }

  /**
   * Validando opção Cliente Completo no menu de opções.
   */
  static clientCompleteOptionMenu() {
    cy.get('md-icon[md-svg-src="images/icons/cliente_completo.svg"]').scrollIntoView().should('exist');
    cy.get('a[aria-label="Cliente completo"]').should('be.visible').and('not.have.attr', 'disabled').and('have.attr', 'aria-label', 'Cliente completo').click({ force: true });
  }

  /**
   * Validar e inserir número do pedido no campo Cliente ou pedido.
   */
  static searchOrderNumber(nomeClienteCPF) {
    cy.get('label[for="input_96"]').should('have.text', 'Cliente ou pedido');
    cy.get('#input_96').should('be.visible').and('have.value', '').type(nomeClienteCPF, { force: true });
  }

  /**
   * Validar menu dentro do cadastro de cliente completo.
   */
  static clickMenuClientComplete() {
    cy.get('#menu_click_pri').should('be.visible').and('not.have.attr', 'disabled').click({ force: true });
  }

  /**
   * Validando opção Serviços.
   */
  static clickOptionServices() {
    cy.get('div[ng-repeat="tab in tabs"][ng-if="tab.checked"]').should('be.visible').and('contain', 'Serviços').and('not.have.attr', 'disabled');
    cy.get('#menu_mais_pri > :nth-child(3)').click({ force: true });
  }

  /**
   * Mensagem de carregamento aba serviços.
   */
  static waitLoadingService() {
    cy.get('.layout-align-center-center > .md-accent').should('be.visible');
    cy.get('.carregando').should('be.visible').and('have.text', 'Aguarde carregando...');
  }

  /**
   * Validando botão ADICIONAR MÃO DE OBRA.
   */
  static buttonAddMaoObra() {
    cy.get('[ng-show="filtroShow(pedidoAtual)"][aria-hidden="false"] > .md-list-item-text > .prodServicoUl > :nth-child(1) > .md-default')
      .should('be.visible')
      .and('contain', 'Adicionar Mão de Obra')
      .and('not.have.attr', 'disabled');
  }

  /**
   * Validando botão ADICIONAR GARANTIAS.
   */
  static buttonAddGarantias() {
    cy.get('[ng-show="filtroShow(pedidoAtual)"][aria-hidden="false"] > .md-list-item-text > .prodServicoUl > :nth-child(2) > .md-default')
      .should('be.visible')
      .and('contain', 'Adicionar Garantias')
      .and('not.have.attr', 'disabled');
  }

  /**
   * Clicar no botão ADICIONAR MÃO DE OBRA.
   */
  static clickAddMaoObra() {
    cy.get('[ng-show="filtroShow(pedidoAtual)"][aria-hidden="false"] > .md-list-item-text > .prodServicoUl > :nth-child(1) > .md-default').click({ force: true });
  }

  /**
   * Clicar no botão ADICIONAR GARANTIAS.
   */
  static clickAddGarantias() {
    cy.get('[ng-show="filtroShow(pedidoAtual)"][aria-hidden="false"] > .md-list-item-text > .prodServicoUl > :nth-child(2) > .md-default').click({ force: true });
  }

  /**
   * Validações card de serviços apenas com Garantias.
   */
  static modalGarantiasServicesLinked() {
    cy.get('.md-dialog-fullscreen > ._md-toolbar-transitions > .md-toolbar-tools > .flex').should('be.visible').and('contain', 'Serviços Vinculados');
    cy.get('.md-dialog-fullscreen > ._md-toolbar-transitions > .md-toolbar-tools > .md-icon-button > .ng-binding').should('be.visible').and('not.be.disabled');
    cy.get('p.ng-binding').contains('Garantias').should('be.visible');
  }

  /**
   * Validações card de serviços (Mão de Obra).
   */
  static modalMaoObraServicesLinked() {
    cy.get('.md-dialog-fullscreen > ._md-toolbar-transitions > .md-toolbar-tools > .flex').should('be.visible').and('contain', 'Serviços Vinculados');
    cy.get('.md-dialog-fullscreen > ._md-toolbar-transitions > .md-toolbar-tools > .md-icon-button > .ng-binding').should('be.visible').and('not.be.disabled');
    cy.get('p.ng-binding').contains('Mão de Obra').scrollIntoView().wait(200).should('be.visible');
  }

  /**
   * Botão OK modal Serviços Vinculados.
   */
  static okServicesLinked() {
    cy.get('button[ng-click="salvar()"]').should('be.visible').and('not.be.disabled').and('have.text', ' Ok ').click({ force: true });
  }

  /**
   * Mensagem de "Item adicionado com sucesso!".
   */
  static messLinkedAddedSucess() {
    cy.get('.toast').should('be.visible');
    cy.get('.toast-title').should('be.visible').and('have.text', 'Aviso');
    cy.get('.toast-message').should('be.visible').and('have.text', 'Item adicionado com sucesso!');
  }

  /**
   * Botão SALVAR.
   */
  static buttonSaveService() {
    cy.get('.btn').should('be.visible').and('not.be.disabled').and('contain', ' SALVAR ');
    cy.get('.btn > .ng-scope').should('be.visible').and('not.be.disabled');
    cy.get('.btn').click({ force: true });
  }

  /**
   * Mensagem de carregamento após clicarmos em SALVAR.
   */
  static messWaitLoading() {
    cy.get('svg').should('be.visible');
    cy.contains('Aguarde carregando...').should('exist');
  }

  /**
   * Mensagem de "Registro salvo com sucesso!".
   */
  static messResgistrationSaveSucess() {
    cy.get('[style="display: block;"]').should('be.visible');
    cy.get(':nth-child(1) > .toast-title').should('be.visible').and('have.text', 'Aviso');
    cy.get(':nth-child(1) > .toast-message').should('be.visible').and('have.text', 'Registro salvo com sucesso!');
  }

  /**
   * Mensagem de "O Serviço Garantias já foi adicionado à esse produto."
   */
  static messGarantiaAdded() {
    cy.get('.toast-warning').should('be.visible');
    cy.get('.toast-warning > .toast-title').should('be.visible').and('have.text', 'Atenção');
    cy.get('.toast-warning').should('be.visible').and('contain', 'O Serviço Garantias já foi adicionado à esse produto.');
  }

  /**
   * Clicar no carrinho de compras.
   */
  static clickCartShopping() {
    cy.intercept('GET', '/images/icons/brazil-real-symbol.svg').as('api_produto_carrinho_compra');
    cy.get('#test_btnCarrinho > .md-icon-button > .ng-binding').should('be.visible').click({ force: true });
    cy.wait('@api_produto_carrinho_compra', { timeout: 40000 });
  }

  /**
   * Botão AVANÇAR.
   */
  static buttonAdvanceOrder() {
    cy.get('.flex-gt-sm-50 > .md-primary').scrollIntoView().should('be.visible').and('not.be.disabled').and('have.text', ' Avançar ');
    cy.intercept('POST', '/services/v3/pedido_forma_pagamento_lista').as('api_pedido_forma_pagamento_lista');
    cy.get('.flex-gt-sm-50 > .md-primary').click({ force: true });
    cy.wait('@api_pedido_forma_pagamento_lista', { timeout: 40000 });
  }

  /**
   * Botão "GERAR PARCELAS".
   */
  static buttonGenerateInstallmentsServices() {
    cy.get('.gerar-parcelas > .layout-wrap > [style="padding: 0 5px"] > .md-primary')
      .scrollIntoView()
      .wait(200)
      .should('exist')
      .and('have.text', 'Gerar parcelas');
    cy.intercept('GET', '/views/carrinho/modalFormasPgto.html').as('api_modal_forma_pagamento');
    cy.get('.gerar-parcelas > .layout-wrap > [style="padding: 0 5px"] > .md-primary').click({ force: true });
    cy.wait('@api_modal_forma_pagamento', { timeout: 40000 });
  }

  /**
   * Escolher serviço, para vende-lo - 144 (T.A. MO Não Destaca e Separa Processo Diferente)
   */
  static productServiceLoose() {
    const codigo_servico = '144';
    cy.intercept('GET', /\/consultaprodutos\/.*144.*/).as('apiConsultaProdutos_produtoServicoAvulso');
    cy.get('#searchText').should('be.visible').and('not.be.disabled');
    cy.get('label[for="searchText"]').should('have.text', 'Buscar produtos');
    cy.get('#searchText').type(codigo_servico).wait(100).should('have.value', codigo_servico);
    cy.wait('@apiConsultaProdutos_produtoServicoAvulso', { timeout: 40000 });
  }

  /**
   * Validando serviço com saldo disponível local.
   */
  static balanceAvailableService() {
    cy.get('.resultado-imagem').should('be.visible');
    cy.get('.label')
      .should('be.visible')
      .and('have.text', 'Saldo disponivel')
      .invoke('css', 'background-color')
      .should('equal', 'rgb(92, 184, 92)');
    cy.get('.md-resultado-titulo').should('be.visible');
    cy.get('.badge-saldo.ng-binding').should('be.visible');
    cy.get('sup').should('be.visible').and('have.text', 'R$');
    cy.get('.valor-busca').should('be.visible');
  }

  /**
   * Clicar para selecionar o produto que queremos adicionar ao pedido.
   */
  static chooseServiceSearch() {
    cy.get('.resultado-imagem').should('be.visible');
    cy.get('.md-resultado-titulo').should('be.visible');
    cy.get('.md-list-item-text > .ng-scope').should('be.visible');
    cy.get('.badge-saldo.ng-binding').should('be.visible');
    cy.get('sup').should('be.visible').and('have.text', 'R$');
    cy.get('.valor-busca').should('be.visible');
    cy.intercept('GET', '/services/v3/produto_servico/*').as('api_produto_produto_servico');
    cy.get('.md-list-item-text').should('be.visible').click({ force: true });
    cy.wait('@api_produto_produto_servico', { timeout: 40000 });
  }

  /**
   * Mensagem de "Item adicionado com sucesso!".
   */
  static messItemAddedSucess() {
    cy.get('.toast').should('be.visible');
    cy.get('.toast-title').should('be.visible').and('have.text', 'Aviso');
    cy.get('.toast-message').should('be.visible').and('contain', 'Item adicionado com sucesso!');
  }

  /**
   * Validando que serviço foi adicionando ao carrinho.
   */
  static serviceAddedCart() {
    cy.get('.servicos > .noscroll').should('be.visible');
    cy.get('span.list-title').should('be.visible');
    cy.get('.flex-60 > :nth-child(2) > b').should('be.visible').and('have.text', 'Quantidade:');
    cy.get('.flex-60 > :nth-child(2)').should('be.visible');
    cy.get('.flex-60 > :nth-child(3) > b').should('be.visible').and('have.text', 'Vendedor:');
    cy.get('.flex-60 > :nth-child(3)').should('be.visible');
    cy.get('.flex-60 > :nth-child(3) > .md-primary').should('be.visible').and('not.be.disabled');
    cy.get('input[ng-model="servAtual.valorFinal"]').should('be.visible');
    cy.get('.btn-remove-item-list > .md-button').should('be.visible').and('not.be.disabled');
  }

  /**
   * Escolher serviço host, para vende-lo - 104 (Recarga Homologação TIM TIM)
   */
  static productServiceHost() {
    const codigo_servicoHost = '104';
    cy.get('#searchText').should('be.visible').and('not.be.disabled');
    cy.get('label[for="searchText"]').should('have.text', 'Buscar produtos');
    cy.get('#searchText').type(codigo_servicoHost).wait(100).should('have.value', codigo_servicoHost);
  }

  /**
   * Validando e clicando opção Serviços, do menu de opções.
   */
  static clickServiceMenu() {
    cy.get('a[aria-label="Serviços"]').should('be.visible').and('not.have.attr', 'disabled').and('have.attr', 'aria-label', 'Serviços');
    cy.get('[role="listitem"][href="#!/servicos"] > div.md-button > .md-no-style').scrollIntoView().should('be.visible').click({ force: true });
  }

  /**
   * Modal para selecionar faixa de preço para o serviço - clicar e escolher o valor.
   */
  static chooseValueRecharge() {
    cy.get('.md-dialog-fullscreen > ._md-toolbar-transitions > .md-toolbar-tools > .flex').should('be.visible').and('contain', 'Selecione uma faixa de preço para o serviço');
    cy.get('.md-dialog-fullscreen > ._md-toolbar-transitions > .md-toolbar-tools > .md-icon-button > .ng-binding').should('be.visible').and('not.be.disabled');
    cy.get('.md-subheader-content').should('be.visible').and('contain.text', 'Recarga Celular HOST');
    cy.get('h3.ng-binding').should('be.visible');
    cy.get('.md-no-style > .md-list-item-text > p.ng-binding').should('be.visible').and('contain', 'Valor:');
    cy.get('.md-secondary-container > :nth-child(1)').should('be.visible').and('contain', 'Valor');
    cy.contains('.md-text.ng-binding', '2,00').parents('md-select-value').click();
    cy.contains('10,00').click({ force: true });
    cy.wait(200);
    cy.get('.layout-align-end-end > .md-raised').should('be.visible').and('not.be.disabled').and('have.text', ' Ok ').click({ force: true });
  }
}