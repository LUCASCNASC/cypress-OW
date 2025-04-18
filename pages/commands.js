// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import '@testing-library/cypress/add-commands'
import 'cypress-file-upload';


// cypress/support/commands.js

//fazer login no pedido web, com o usuário 393
Cypress.Commands.add('login', (username, password) => {
  
  cy.visit('/');
  cy.get('#txtusername').type('sabium.automacao'); //login
  cy.get('#txtpassword').type('123.automacao'); //senha
  cy.intercept('GET', '/images/icons/discount.svg').as('api_discount')
  cy.get('.test_btnSalvarCliente').click(); //botão entrar
  cy.get('.ng-scope > .ng-binding').should('contain','Entrando no sistema') //Validando mensagem "Entrando no sistema" 
  cy.wait('@api_discount', { timeout: 40000 })
  cy.get('.click-cliente > .informe-o-cliente > .cliente-header').should('contain','Cliente') //Validando se realmente fez o login
});

//validar url após logarmos no pedido web
Cypress.Commands.add('urlAposLogin', (username, password) => {
  
  cy.url()
    .should('include', '/')
});

//validar título da página após logarmos no pedido web - título da aba do navegador
Cypress.Commands.add('tituloPagina', (username, password) => {
  
  cy.title()
    .should('eq', 'Sabium Mobile') //Validando título da página
});

//Clicar para selecionar o produto que queremos adicionar ao pedido
Cypress.Commands.add('selectProductSearch', (username, password) => {
  
  cy.intercept('GET', '/services/v3/produto_tambem_compraram**').as('api_produto_tambem_compraram')

        //Imagem do produto
        cy.get('.resultado-imagem')
            .should('be.visible')

        //Nome do produto
        cy.get('.md-resultado-titulo')
            .should('be.visible')

        //Saldo disponível
        cy.get('.md-list-item-text > .ng-scope')
            .should('be.visible')

        //Código do produto
        cy.get('.badge-saldo.ng-binding')
            .should('be.visible')

        //Cifrão do valor do produto
        cy.get('sup')
            .should('be.visible')
            .and('have.text', 'R$')

        //Valor do produto
        cy.get('.valor-busca')
            .should('be.visible')

        // //Check box do produto
        // cy.get('.expandeIcone')
        //     .should('be.visible')

        //Clicar para adicionar no carrinho
        cy.get('.md-list-item-text')
            .should('be.visible')
            .click({force:true})

        cy.wait('@api_produto_tambem_compraram', { timeout: 40000 })
});

//Clicar para selecionar a voltagem que queremos adicionar ao pedido
Cypress.Commands.add('clickVoltageProduct', (username, password) => {
  
  cy.intercept('GET', '/services/v3/produto_relacionado**').as('api_produto_relacionado_lista')

        //Mensagem "Selecione a cor, a voltagem e o local de saldo "
        cy.get('md-list.md-default-theme > .btn-rounded > .md-toolbar-tools > .flex')
            .should('be.visible')
            .and('have.text', 'Selecione a cor, a voltagem e o local de saldo')

        //Botão de expandir produto
        cy.get('.layout-align-end-center > .md-fab')
            .should('be.visible')
            .and('not.be.disabled')

        //ícone do botão de expandir produto
        cy.get('.layout-align-end-center > .md-fab')
            .should('be.visible')
            .and('not.be.disabled')

        //Card de voltagem - Cifrão
        cy.get('.md-secondary-container > div > .ng-binding > sup')
            .should('be.visible')
            .and('have.text', 'R$')

        //Card de voltagem 
        cy.get('.md-list-item-inner')
            .should('be.visible')
            .and('contain', 'Cód. Fabricante:')
            .and('contain', 'Filial:')
            .and('contain', 'Saldo Local:')
            .and('contain', 'Saldo Depósito:')

        //Card de voltagem - clicar
        cy.get(':nth-child(1) > md-list.md-default-theme > .md-2-line > div.md-button > .md-no-style')
            .click({force:true})

        cy.wait('@api_produto_relacionado_lista', { timeout: 40000 })
});

//Botão adicionar produto após selecionar voltagem do produto
Cypress.Commands.add('clickAddProduct', (username, password) => {
  
  cy.intercept('GET', '/services/v3/produto_servico_vinculado**').as('api_servicos_vinculados')

        //Botão adicionar produto após selecionar voltagem do produto
        cy.get('[style="padding: 0px 5px;"] > .md-accent')
            .scrollIntoView()
            .wait(200)
            .should('be.visible')
            .and('not.be.disabled')
            .and('contain','Adicionar')

        //Botão adicionar produto após selecionar voltagem do produto, clicar no botão
        cy.get('[style="padding: 0px 5px;"] > .md-accent')
            .click({force:true})

        cy.wait('@api_servicos_vinculados', { timeout: 40000 })
});

//Botão para finalizar o pedido
Cypress.Commands.add('clickFinishOrder', () => {
  
    cy.intercept('GET', '/services/v3/produto_servico_vinculado**').as('api_servicos_vinculados')
  
    cy.intercept('POST', '/services/v3/pedido_finalizar').as('api_pedido_finalizar')

    //Botão FINALIZAR PEDIDO
    cy.get('button.md-primary.btn-rounded.md-raised.btn-block.md-default-theme.md-ink-ripple[type="button"][ng-click="confirmarPedido()"]')
        .scrollIntoView()
        .wait(200)
        .should('be.visible')
        .and('not.be.disabled')
        .should('have.text', 'Finalizar pedido')

    //Clicar para finalizar pedido
    cy.get('button[ng-click="confirmarPedido()"]')
        .click({force:true})

    //Card pedido concluído (carregando finalização do pedido) - Título Pedido Concluído
    cy.get('.md-toolbar-tools h2.flex')
        .should('be.visible')
        .and('contain','Pedido Concluído')

    //Card pedido concluído (carregando finalização do pedido) - X para sair da aba
    cy.get('.md-content-overflow > :nth-child(1) > .md-toolbar-tools > .md-icon-button > .ng-binding')
        .should('be.visible')
        .and('not.have.attr', 'disabled')

    //Card pedido concluído (carregando finalização do pedido) - girando carregar
    cy.get('.layout-column > .md-accent')
        .should('be.visible')

    //Card pedido concluído (carregando finalização do pedido) - Mensagem Finalizando pedido...
    cy.get('.layout-column > h4')
        .should('be.visible')
        .and('have.text','Finalizando pedido...')

    //Card pedido concluído (carregando finalização do pedido) - ATENÇÃO
    cy.get('.layout-column > p > span')
        .should('be.visible')
        .and('have.text','ATENÇÃO:')
        .and('have.css', 'color', 'rgb(204, 0, 0)')

    //Card pedido concluído (carregando finalização do pedido) -  Não atualize a página ...
    cy.get('.layout-column > p')
        .should('be.visible')
        .and('contain','Não atualize a página enquanto o pedido estiver sendo finalizado.')
        .and('have.css', 'color', 'rgb(204, 0, 0)')

    cy.wait('@api_pedido_finalizar', { timeout: 40000 })
});

//Função para validar card de Pedido Concluído
Cypress.Commands.add('validateOrderGenerated', () => {
  
    cy.intercept('GET', '/services/v3/produto_servico_vinculado**').as('api_servicos_vinculados')
  
    cy.intercept('POST', '/services/v3/pedido_finalizar').as('api_pedido_finalizar')

    //Botão FINALIZAR PEDIDO
    cy.get('button.md-primary.btn-rounded.md-raised.btn-block.md-default-theme.md-ink-ripple[type="button"][ng-click="confirmarPedido()"]')
        .scrollIntoView()
        .wait(200)
        .should('be.visible')
        .and('not.be.disabled')
        .should('have.text', 'Finalizar pedido')

    //Clicar para finalizar pedido
    cy.get('button[ng-click="confirmarPedido()"]')
        .click({force:true})

    //Card pedido concluído (carregando finalização do pedido) - Título Pedido Concluído
    cy.get('.md-toolbar-tools h2.flex')
        .should('be.visible')
        .and('contain','Pedido Concluído')

    //Card pedido concluído (carregando finalização do pedido) - X para sair da aba
    cy.get('.md-content-overflow > :nth-child(1) > .md-toolbar-tools > .md-icon-button > .ng-binding')
        .should('be.visible')
        .and('not.have.attr', 'disabled')

    //Card pedido concluído (carregando finalização do pedido) - girando carregar
    cy.get('.layout-column > .md-accent')
        .should('be.visible')

    //Card pedido concluído (carregando finalização do pedido) - Mensagem Finalizando pedido...
    cy.get('.layout-column > h4')
        .should('be.visible')
        .and('have.text','Finalizando pedido...')

    //Card pedido concluído (carregando finalização do pedido) - ATENÇÃO
    cy.get('.layout-column > p > span')
        .should('be.visible')
        .and('have.text','ATENÇÃO:')
        .and('have.css', 'color', 'rgb(204, 0, 0)')

    //Card pedido concluído (carregando finalização do pedido) -  Não atualize a página ...
    cy.get('.layout-column > p')
        .should('be.visible')
        .and('contain','Não atualize a página enquanto o pedido estiver sendo finalizado.')
        .and('have.css', 'color', 'rgb(204, 0, 0)')

    cy.wait('@api_pedido_finalizar', { timeout: 40000 })
  });