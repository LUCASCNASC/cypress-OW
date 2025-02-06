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

//Validando Tipo "Tipo(s) Serviço(s) Isento(s):" dentro do modal Promoções
export function tipoServicoIsentoValidar (selector) {

    //Validando Tipo "Tipo(s) Serviço(s) Isento(s):" dentro do modal Promoções
    cy.contains('Tipo(s) Serviço(s) Isento(s):')
        .should('be.visible')

    //Validando "Garantias" dentro do modal Promoções
    cy.contains('Garantias')
        .should('be.visible')
}