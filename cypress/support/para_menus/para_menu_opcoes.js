
//Validar e clicar no menu de opções
export function iconeMenuOpcoes (selector) {

    //Ícone do menu de opções
    cy.get('[aria-label="Menu de opções"] > .ng-binding')
        .should('exist')
        .and('be.visible')
        .and('not.have.attr', 'disabled')
            
    //Clicar ni ícone do menu de opções
    cy.get('[aria-label="Menu de opções"] > .ng-binding')
        .click({force:true})
}

//validando topo da página - parte colorida
export function topoPagina (selector) {

    //Topo da página - parte colorida
    cy.get('.topo > .md-toolbar-tools')
    .should('exist')
    .and('be.visible')
}

export function imageMenu (selector) {

    //Validando imagem no início do modal menu
    cy.get('.md-primary > .logo > .md-default-theme > img')
    .should('exist')
    .and('be.visible')
    .and('not.have.attr', 'disabled')
}

//Ícone do computador para validar se realmente saiu do pedido web
export function iconeComputadorLogin (selector) {

    //Ícone do computador
    cy.get('[ng-click="clienteStatsOpen()"] > .ng-binding')
        .should('exist')
        .and('be.visible')
        .and('not.have.attr', 'disabled')

    //Validando campo Buscar produto
    cy.get('#searchText')
        .should('exist')
        .and('be.visible')
        //.and('have.value', '')
        .and('not.be.disabled')

    //Validando campo Buscar produto - validando mensagem dentro do campo antes de preencher
    cy.get('label[for="searchText"]')
        .should('have.text', 'Buscar produtos')
}

//Validando opção Ínicio, do menu de opções
export function inicioOpcaoMenu (selector) {

    //ícone Início 
    cy.get('md-icon[md-svg-src="images/icons/home.svg"]')
        .scrollIntoView()
        .should('exist')

    //Opção Início no menu de opções
    cy.get('a[aria-label="Início"]')
        .should('exist')
        .and('be.visible')
        .and('not.have.attr', 'disabled')

    //Opção Início no menu de opções
    cy.get('a[aria-label="Início"]')
        .should('have.attr', 'aria-label', 'Início')
        .click({force:true})
}

//Validando opção Departamentos, do menu de opções
export function departamentoOpcaoMenu (selector) {

    //ícone Departamentos 
    cy.get('md-icon[md-svg-src="images/icons/departamentos.svg"]')
        .scrollIntoView()
        .should('exist')

    //Opção Departamentos no menu de opções
    cy.get('a[aria-label="Departamentos"]')
        .should('exist')
        .and('be.visible')
        .and('not.have.attr', 'disabled')

    //Opção Departamentos no menu de opções
    cy.get('a[aria-label="Departamentos"]')
        .should('have.attr', 'aria-label', 'Departamentos')
        .click({force:true})

    //validando se entrou no Departamentos
    cy.get('.breadcrumbDepartamentos')
        .should('exist')
        .and('be.visible')
        .and('contain', 'Departamentos')
}

//Validando opção Serviços, do menu de opções
export function servicosOpcaoMenu (selector) {

    //ícone Serviços 
    cy.get('md-icon[md-svg-src="images/icons/services.svg"]')
        .scrollIntoView()
        .should('exist')

    //Opção Serviços no menu de opções
    cy.get('a[aria-label="Serviços"]')
        .should('exist')
        .and('be.visible')
        .and('not.have.attr', 'disabled')

    //Opção Serviços no menu de opções
    cy.get('a[aria-label="Serviços"]')
        .should('have.attr', 'aria-label', 'Serviços')
        .click({force:true})

    //validando se entrou no Serviços
    cy.get('[ng-click="alterarOrdenacaoPorDescricao()"]')
        .should('exist')
        .and('be.visible')
        .and('not.have.attr', 'disabled')
}

//Validando opção Pedidos Pendentes, do menu de opções
export function pedidosPendentesOpcaoMenu (selector) {

    //ícone Pedidos pendentes 
    cy.get('md-icon[md-svg-src="images/icons/pedido.svg"]')
        .scrollIntoView()
        .should('exist')

    //Opção Pedidos pendentes no menu de opções
    cy.get('a[aria-label="Pedidos pendentes"]')
        .should('exist')
        .and('be.visible')
        .and('not.have.attr', 'disabled')

    //Opção Pedidos pendentes no menu de opções
    cy.get('a[aria-label="Pedidos pendentes"]')
        .should('have.attr', 'aria-label', 'Pedidos pendentes')
        .click({force:true})

    //validando se entrou no Pedidos pendentes
    cy.get('.header')
        .should('exist')
        //.and('be.visible')
        .and('contain', 'PEDIDOS PENDENTES')
}

//Validando opção Cliente, do menu de opções
export function clienteOpcaoMenu (selector) {

    //ícone Cliente
    cy.get('md-icon[md-svg-src="images/icons/cliente.svg"]')
        .scrollIntoView()
        .should('exist')

    //Opção Cliente no menu de opções
    cy.get('a[aria-label="Cliente"]')
        .should('exist')
        .and('be.visible')
        .and('not.have.attr', 'disabled')

    //Opção Cliente no menu de opções
    cy.get('a[aria-label="Cliente"]')
        .should('have.attr', 'aria-label', 'Cliente')
        .click({force:true})

    //validando se entrou no Cliente
    cy.get('.md-default')
        .should('exist')
        .and('not.have.attr', 'disabled')
}

//Validando opção Cliente Completo, do menu de opções
export function clienteCompletoOpcaoMenu (selector) {

    //ícone Cliente completo
    cy.get('md-icon[md-svg-src="images/icons/cliente_completo.svg"]')
        .scrollIntoView()
        .should('exist')

    //Opção Cliente completo no menu de opções
    cy.get('a[aria-label="Cliente completo"]')
        .should('exist')
        .and('be.visible')
        .and('not.have.attr', 'disabled')

    //Opção Cliente completo no menu de opções
    cy.get('a[aria-label="Cliente completo"]')
        .should('have.attr', 'aria-label', 'Cliente completo')
        .click({force:true})

    //validando se entrou no Cliente completo
    cy.get('#menu_items_pri > .on')
        .should('exist')
        .and('not.have.attr', 'disabled')
}

//Validando opção Pós Venda, do menu de opções
export function posVendaOpcaoMenu (selector) {

    //ícone Pós-venda 
    cy.get('md-icon[md-svg-src="images/icons/pos-venda.svg"]')
        .scrollIntoView()
        .should('exist')

    //Opção Pós-venda no menu de opções
    cy.get('a[aria-label="Pós-venda"]')
        .should('exist')
        .and('be.visible')
        .and('not.have.attr', 'disabled')

    //Opção Pós-venda no menu de opções
    cy.get('a[aria-label="Pós-venda"]')
        .should('have.attr', 'aria-label', 'Pós-venda')
        .click({force:true})

    //validando se entrou no Pos venda
    cy.get('.header')
        .should('exist')
        .and('be.visible')
}

//Validando opção Intenção de compra, do menu de opções
export function intencaoCompraOpcaoMenu (selector) {

    //ícone Intenção de compra 
    cy.get('md-icon[md-svg-src="images/icons/intencao.svg"]')
        .scrollIntoView()
        .should('exist')

    //Opção Intenção de compra no menu de opções
    cy.get('button[aria-label="Intenção de compra"]')
        .should('exist')
        .and('be.visible')
        .and('not.have.attr', 'disabled')

    //Opção Intenção de compra no menu de opções
    cy.get('button[aria-label="Intenção de compra"]')
        .should('have.attr', 'aria-label', 'Intenção de compra')
        .click({force:true})

    //validando se entrou no Intenção compra
    cy.get('.header')
        .should('exist')
        .and('be.visible')
}

//Validando opção Propósta de crédito, do menu de opções
export function propostaCreditoOpcaoMenu (selector) {

    //ícone Proposta de crédito 
    cy.get('md-icon[md-svg-src="images/icons/aprovacao_credito.svg"]')
        .scrollIntoView()
        .should('exist')

    //Opção Proposta de crédito no menu de opções
    cy.get('a[aria-label="Proposta de crédito"]')
        .should('exist')
        .and('be.visible')
        .and('not.have.attr', 'disabled')

    //Opção Proposta de crédito no menu de opções
    cy.get('a[aria-label="Proposta de crédito"]')
        .should('have.attr', 'aria-label', 'Proposta de crédito')
        .click({force:true})

    //validando se entrou no Proposta de crédito
    cy.get('.header')
        .should('exist')
        .and('be.visible')
}

//Validando opção Configurações, do menu de opções
export function configuracoesOpcaoMenu (selector) {

    //ícone Configurações
    cy.get('md-icon[md-svg-src="images/icons/settings.svg"]')
        .scrollIntoView()
        .should('exist')

    //Opção Configurações no menu de opções
    cy.get('a[aria-label="Configurações"]')
        .should('exist')
        .and('be.visible')
        .and('not.have.attr', 'disabled')

    //Opção Configurações no menu de opções
    cy.get('a[aria-label="Configurações"]')
        .should('have.attr', 'aria-label', 'Configurações')
        .click({force:true})

    //validando se entrou no Configurações
    cy.get('ui-view.ng-scope > :nth-child(2)')
        .should('exist')
        .and('be.visible')
}

//Validando opção Minha performance, do menu de opções
export function minhaPerformanceOpcaoMenu (selector) {

    //ícone Minha performance
    cy.get('md-icon[md-svg-src="images/icons/performance.svg"]')
        .scrollIntoView()
        .should('exist')

    //Opção Minha performance no menu de opções
    cy.get('a[aria-label="Minha performance"]')
        .should('exist')
        .and('be.visible')
        .and('not.have.attr', 'disabled')

    //Opção Minha performance no menu de opções
    cy.get('a[aria-label="Minha performance"]')
        .should('have.attr', 'aria-label', 'Minha performance')
        .click({force:true})

    //validando se entrou no Minha performance
    cy.get('.header')
        .should('exist')
        .and('be.visible')
}

//validando opção Sair, já fora da opção menu de opções
export function botaoSair (selector) {

    //Opção Minha performance no menu de opções
    cy.get('.rodape > ._md-button-wrap > div.md-button > .md-no-style')
        .should('exist')
        .and('be.visible')
        .and('not.have.attr', 'disabled')

    //Opção Minha performance no menu de opções
    cy.get('.rodape > ._md-button-wrap > div.md-button > .md-no-style')
        .should('have.attr', 'aria-label', 'Sair')
        .click({force:true})
}