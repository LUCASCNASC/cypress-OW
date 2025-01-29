import { umDiaAposHoje } from '../gerarDados'


//Validando modal de carregamento "Adicionando produtos/serviços..."
export function messAdicionandoProdutosServicos (selector) {

    //validando ícone de carregamento
    cy.get('.conteudo > .layout-align-center-center > .md-accent')
        .should('be.visible')

    //validando mensagem de carregamento
    cy.get('h3')
        .should('be.visible')
        .and('have.text', 'Adicionando produtos/serviços...')
}

//validando e adicionando serviço prestamista
export function adicionarPrestamista (selector) {

    //validando ícone de serviço
    cy.get('.btn-remove-item-list > :nth-child(2) > .md-raised > .ng-scope')
        .should('be.visible')
        .and('not.be.disabled')

    //validando botão de serviço
    cy.get('.btn-remove-item-list > :nth-child(2) > .md-raised')
        .should('be.visible')
        .and('not.be.disabled')
        .click({force:true})

    //validando título do modal "Seguro prestamista"
    cy.get('.md-dialog-fullscreen > ._md-toolbar-transitions > .md-toolbar-tools > .flex')
        .should('be.visible')
        .and('have.text', 'Seguro prestamista')

    //validando botão X do modal "Seguro prestamista"
    cy.get('.md-dialog-fullscreen > ._md-toolbar-transitions > .md-toolbar-tools > .md-icon-button > .ng-binding')
        .should('be.visible')
        .and('not.be.disabled')

    //validando subtítulo do modal "Seguro prestamista"
    cy.get('.md-subheader-content')
        .should('be.visible')
        .and('contain.text', 'Seguro Prestamista')

    //validando nome do seguro prestamista
    cy.get('.md-no-style > .md-list-item-text > :nth-child(1)') 
        .should('be.visible')

    //validando Quantidade do seguro prestamista
    cy.get('.md-list-item-text > :nth-child(2)')
        .should('be.visible')
        .and('contain', 'Quantidade')

    //validando Valor unitário do seguro prestamista
    cy.get('.md-list-item-text > :nth-child(3)')
        .should('be.visible')
        .and('contain', 'Valor unitário')

    //validando R$ do valor do seguro prestamista
    cy.get('.md-no-style > .md-secondary-container > :nth-child(1) > .ng-binding > sup')
        .should('be.visible')
        .and('contain', 'R$')

    //validando valor do seguro prestamista
    cy.get('.md-no-style > .md-secondary-container > :nth-child(1) > .ng-binding')
        .should('be.visible')

    //selecionar seguro prestamista
    cy.get('#checkbox-145-0 > .md-container')
        .should('be.visible')
        .and('not.be.disabled')
        .click({force:true})

    //botão OK
    cy.get('md-dialog-actions.layout-row > .md-primary')
        .should('be.visible')
        .and('not.be.disabled')
        .and('have.text', ' Ok ')
        .click({force:true})
}

//validando e clicando para usar promoção
export function clicarUsarPromocao (selector) {

    //validando título do modal Promoções
    cy.get('h2.flex')
        .should('be.visible')
        .and('not.be.disabled')
        .and('contain.text', 'Promoções')

    //validando seta do modal Promoções
    cy.get('.md-dialog-fullscreen > ._md-toolbar-transitions > .md-toolbar-tools > .flex')
        .should('be.visible')
        .and('not.be.disabled')

    //validando X modal Promoções
    cy.get('.md-dialog-fullscreen > ._md-toolbar-transitions > .md-toolbar-tools > [ng-click="cancel()"] > .ng-binding')
        .should('be.visible')
        .and('not.be.disabled')

    //validando NÃO USAR PROMOÇÃO modal Promoções
    cy.get('[style="padding: 0 5px"] > .md-primary')
        .should('be.visible')
        .and('not.be.disabled')
        .and('contain', 'Não usar promoção')

    //validando existencia da promoção no modal Promoções
    cy.get('.md-3-line > div.md-button > .md-no-style')
        .should('be.visible')
        .and('not.be.disabled')

    //clicar na promoção
    cy.get('.md-3-line > div.md-button > .md-no-style')
        .click({force:true})
}

//validando e escolhendo forma de pagamento da promoção
export function selecionarFormaPagPromo (selector) {

    //validando título do modal Formas de pagamento
    cy.get('h2.flex')
        .should('be.visible')
        .and('not.be.disabled')
        .and('contain.text', 'Formas de pagamento')

    //validando seta do modal Formas de pagamento
    cy.get('.md-toolbar-tools > [ng-click="modalPromocao()"] > .ng-binding')
        .should('be.visible')
        .and('not.be.disabled')

    //validando X modal Formas de pagamento
    cy.get('#modal-formaPagamento > .md-dialog-fullscreen > .md-primary > .md-toolbar-tools > [ng-click="cancel()"] > .ng-binding')
        .should('be.visible')
        .and('not.be.disabled')

    //Escolher uma forma de pagamento, no card de "Formas de pagamento"
    cy.get('button[aria-label="3860 - T.A. A Receber Futuro   Futuro"]')
        .should('be.visible')
        .and('not.be.disabled')
        .click()
}

//Validando Tipo "Tipo(s) Serviço(s) Isento(s):" dentro do modal Promoções
export function tipoServicoIsentoValidar (selector) {

    //Validando Tipo "Tipo(s) Serviço(s) Isento(s):" dentro do modal Promoções
    cy.contains('Tipo(s) Serviço(s) Isento(s):')
        .should('be.visible')

    //Validando "Garantias" dentro do modal Promoções
    cy.contains('Garantias')
        .should('be.visible')
}

//no campo 1 vencimento, modificar a data para um dia após hoje, ou seja, data de amanhã
export function incluirDataAmanha (selector) {

    const data_amanha = umDiaAposHoje()

    cy.get('[ng-show="parcelamentoAutomaticoDisponivel"] > .md-subheader-inner > .md-subheader-content').click()

    cy.get('.layout-align-end-end > :nth-child(2) > .md-primary')
        .scrollIntoView()
        .wait(200)

    cy.get('.md-datepicker-input[inputmode="numeric"]').clear()

    // cy.contains('1º Vencimento').parent().find('input')
    //     .clear()
}