export class MenuPage {
  
  //Valida e clica no menu de opções.
  static iconeMenuPage() {
    cy.get('[aria-label="Menu de opções"] > .ng-binding')
      .should('be.visible')
      .and('not.have.attr', 'disabled');

    cy.get('[aria-label="Menu de opções"] > .ng-binding').click({ force: true });
  }

  //Valida o topo colorido da página.
  static topoPagina() {
    cy.get('.topo > .md-toolbar-tools').should('be.visible');
  }

  //Valida imagem no início do modal menu.
  static imageMenu() {
    cy.get('.md-primary > .logo > .md-default-theme > img')
      .should('be.visible')
      .and('not.have.attr', 'disabled');
  }

  //Valida ícone do computador e busca produto após sair do pedido web.
  static iconeComputadorLogin() {
    cy.get('[ng-click="clienteStatsOpen()"] > .ng-binding')
      .should('be.visible')
      .and('not.have.attr', 'disabled');

    cy.get('#searchText').should('be.visible').and('not.be.disabled');

    cy.get('label[for="searchText"]').should('have.text', 'Buscar produtos');
  }

  //Valida e clica na opção Início do menu de opções.
  static inicioOpcaoMenu() {
    cy.get('md-icon[md-svg-src="images/icons/home.svg"]')
      .scrollIntoView()
      .wait(300)
      .should('be.visible');

    cy.get('a[aria-label="Início"]')
      .should('be.visible')
      .and('not.have.attr', 'disabled')
      .and('have.attr', 'aria-label', 'Início')
      .click({ force: true });
  }

  //Valida e clica na opção Departamentos do menu de opções.
  static departamentoOpcaoMenu() {
    cy.get('md-icon[md-svg-src="images/icons/departamentos.svg"]')
      .scrollIntoView()
      .should('be.visible');

    cy.get('a[aria-label="Departamentos"]')
      .should('be.visible')
      .and('not.have.attr', 'disabled')
      .and('have.attr', 'aria-label', 'Departamentos')
      .click({ force: true });

    cy.get('.breadcrumbDepartamentos')
      .should('be.visible')
      .and('contain', 'Departamentos');
  }

  //Valida e clica na opção Serviços do menu de opções.
  static servicosOpcaoMenu() {
    cy.get('md-icon[md-svg-src="images/icons/services.svg"]')
      .scrollIntoView()
      .should('be.visible');

    cy.get('a[aria-label="Serviços"]')
      .should('be.visible')
      .and('not.have.attr', 'disabled')
      .and('have.attr', 'aria-label', 'Serviços')
      .click({ force: true });

    cy.get('[ng-click="alterarOrdenacaoPorDescricao()"]')
      .should('be.visible')
      .and('not.have.attr', 'disabled');
  }

  //Valida e clica na opção Pedidos Pendentes do menu de opções.
  static pedidosPendentesOpcaoMenu() {
    cy.get('md-icon[md-svg-src="images/icons/pedido.svg"]')
      .scrollIntoView()
      .should('be.visible');

    cy.get('a[aria-label="Pedidos pendentes"]')
      .should('be.visible')
      .and('not.have.attr', 'disabled')
      .and('have.attr', 'aria-label', 'Pedidos pendentes')
      .click({ force: true });

    cy.get('.header')
      .should('exist')
      .and('contain', 'PEDIDOS PENDENTES');
  }

  //Valida e clica na opção Cliente do menu de opções.
  static clienteOpcaoMenu() {
    cy.get('md-icon[md-svg-src="images/icons/cliente.svg"]')
      .scrollIntoView()
      .should('be.visible');

    cy.get('a[aria-label="Cliente"]')
      .should('be.visible')
      .and('not.have.attr', 'disabled')
      .and('have.attr', 'aria-label', 'Cliente')
      .click({ force: true });

    cy.get('.md-default').should('exist').and('not.have.attr', 'disabled');
  }

  //Valida e clica na opção Cliente Completo do menu de opções.
  static clienteCompletoOpcaoMenu() {
    cy.get('md-icon[md-svg-src="images/icons/cliente_completo.svg"]')
      .scrollIntoView()
      .should('be.visible');

    cy.get('a[aria-label="Cliente completo"]')
      .should('be.visible')
      .and('not.have.attr', 'disabled')
      .and('have.attr', 'aria-label', 'Cliente completo')
      .click({ force: true });

    cy.get('#menu_items_pri > .on').should('exist').and('not.have.attr', 'disabled');
  }

  //Valida e clica na opção Pós Venda do menu de opções.
  static posVendaOpcaoMenu() {
    cy.get('md-icon[md-svg-src="images/icons/pos-venda.svg"]')
      .scrollIntoView()
      .should('be.visible');

    cy.get('a[aria-label="Pós-venda"]')
      .should('be.visible')
      .and('not.have.attr', 'disabled')
      .and('have.attr', 'aria-label', 'Pós-venda')
      .click({ force: true });

    cy.get('.header').should('be.visible');
  }

  //Valida e clica na opção Intenção de compra do menu de opções.
  static intencaoCompraOpcaoMenu() {
    cy.get('md-icon[md-svg-src="images/icons/intencao.svg"]')
      .scrollIntoView()
      .should('be.visible');

    cy.get('button[aria-label="Intenção de compra"]')
      .should('be.visible')
      .and('not.have.attr', 'disabled')
      .and('have.attr', 'aria-label', 'Intenção de compra')
      .click({ force: true });

    cy.get('.header').should('be.visible');
  }

  //Valida e clica na opção Proposta de crédito do menu de opções.
  static propostaCreditoOpcaoMenu() {
    cy.get('md-icon[md-svg-src="images/icons/aprovacao_credito.svg"]')
      .scrollIntoView()
      .should('be.visible');

    cy.get('a[aria-label="Proposta de crédito"]')
      .should('be.visible')
      .and('not.have.attr', 'disabled')
      .and('have.attr', 'aria-label', 'Proposta de crédito')
      .click({ force: true });

    cy.get('.header').should('be.visible');
  }

  //Valida e clica na opção Configurações do menu de opções.
  static configuracoesOpcaoMenu() {
    cy.get('md-icon[md-svg-src="images/icons/settings.svg"]')
      .scrollIntoView()
      .should('be.visible');

    cy.get('a[aria-label="Configurações"]')
      .should('be.visible')
      .and('not.have.attr', 'disabled')
      .and('have.attr', 'aria-label', 'Configurações')
      .click({ force: true });

    cy.get('ui-view.ng-scope > :nth-child(2)').should('be.visible');
  }

  //Valida e clica na opção Minha performance do menu de opções.
  static minhaPerformanceOpcaoMenu() {
    cy.get('md-icon[md-svg-src="images/icons/performance.svg"]')
      .scrollIntoView()
      .should('be.visible');
      
    cy.get('a[aria-label="Minha performance"]')
      .should('be.visible')
      .and('not.have.attr', 'disabled')
      .and('have.attr', 'aria-label', 'Minha performance')
      .click({ force: true });

    cy.get('.header').should('be.visible');
  }

  //Valida e clica na opção Sair (fora do menu de opções).
  static botaoSair() {
    cy.get('.rodape > ._md-button-wrap > div.md-button > .md-no-style')
      .should('be.visible')
      .and('not.have.attr', 'disabled')
      .and('have.attr', 'aria-label', 'Sair')
      .click({ force: true });
  }
}