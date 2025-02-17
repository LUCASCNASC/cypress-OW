export class GeralEntrega {

    constructor(page) {
        this.page = page
    }

    //Função criada para clicar no campo transportadora e escolher a trasportadora
    async escolherTransportadora (selector) {

        //rolando até um elemento da parte de cima da página
        cy.get('.progressbar') 
            .scrollIntoView()
            .wait(200)

        //clicando para aparecerem as opçoes de transportadora
        cy.get('[name="transportadora"]')
            .click({force:true})
            .wait(300)

        //clicando para selecionar a transportadora
        cy.get('span[md-highlight-text="transpAutoCompleteSearchText"]')
            .contains('1')  // Filtra pelo texto "1"
            .click()
    }

    //Escolher rota completa, rota maringá
    async escolherRota (selector) {

        //Lupa de pesquisa de rota - clicar para pesquisar
        cy.get('.rota-frete > .md-icon-right > .ng-binding')
            .scrollIntoView()
            .click({force:true})

        cy.wait(400)

        //Pesquisar rota
        cy.get('#txtBuscaRotaModal')
            .type('1')

        //Clicar na lupa para pesquisar rota depois de preencher campo
        cy.get('md-icon[ng-click="pesquisar()"]')
            .click()

        cy.wait(400)

        //Escolher rota após pesquisarmos
        cy.get('v-pane-header.ng-scope > div')
            .click() //clicar na rota 1

        //Escolher rota 2
        cy.get(':nth-child(4) > .padding-10-0')
            .click() //clicar na rota 1

        cy.wait (200)
    }

    //Card Inconsistências - rota e transportadora
    async modalInconsRotaTransp (selector) {

        //Título Inconsistências
        cy.get('.md-dialog-fullscreen > :nth-child(1) > .md-toolbar-tools > .flex')
            .should('be.visible')
            .and('have.text', 'Inconsistências')

        //Mensagem dentro do modal - "Restriçoes geradas (triais), por favor comunique à seu gerente:"
        cy.get(':nth-child(1) > h3')
            .should('be.visible')
            .and('have.text', 'Restriçoes geradas (triais), por favor comunique à seu gerente:')

        //Título Processo de venda - Processo de venda
        cy.get('.ng-scope.flex-100 > .md-primary > .md-toolbar-tools > h2')
            .should('be.visible')
            .and('have.text', 'Processo de venda')

        //Primeiro ícone Inconsistências
        cy.get(':nth-child(1) > .md-avatar-icon')
            .should('be.visible')

        //Mensagem "A Rota é obrigatória."
        cy.get(':nth-child(1) > .md-list-item-text > .no-truncate')
            .should('be.visible')
            .and('have.text', 'A Rota é obrigatória.')

        //Segundo ícone Inconsistências
        cy.get(':nth-child(1) > .md-avatar-icon')
            .should('be.visible')

        //Mensagem "Pedidos referêntes a NFC-e com definição de entrega deverão possuir entidade transportadora preenchida, favor verificar."
        cy.get(':nth-child(2) > .md-list-item-text > .no-truncate')
            .should('be.visible')
            .and('have.text', 'Pedidos referêntes a NFC-e com definição de entrega deverão possuir entidade transportadora preenchida, favor verificar.')
        
        //Botão X para fechar
        cy.get('.md-dialog-fullscreen > :nth-child(1) > .md-toolbar-tools > .md-icon-button > .ng-binding')
            .should('be.visible')
            .and('not.be.disabled')
            .click({force:true})

        // cy.wait(5000)

        // cy.get('.md-dialog-fullscreen > :nth-child(1) > .md-toolbar-tools > .md-icon-button > .ng-binding')
        //     .should('be.visible')
        //     .and('not.be.disabled')
        //     .click({force:true})
    }

    //Card Inconsistências - apenas transportadora
    async modalInconsApenasTransp (selector) {

        //Título Inconsistências
        cy.get('.md-dialog-fullscreen > :nth-child(1) > .md-toolbar-tools > .flex')
            .should('be.visible')
            .and('have.text', 'Inconsistências')

        //Mensagem dentro do modal - "Restriçoes geradas (triais), por favor comunique à seu gerente:"
        cy.get(':nth-child(1) > h3')
            .should('be.visible')
            .and('have.text', 'Restriçoes geradas (triais), por favor comunique à seu gerente:')

        //Título Processo de venda - Processo de venda
        cy.get('.ng-scope.flex-100 > .md-primary > .md-toolbar-tools > h2')
            .should('be.visible')
            .and('have.text', 'Processo de venda')

        //Ícone Inconsistências
        cy.get('.md-avatar-icon')
            .should('be.visible')

        //Mensagem "Pedidos referêntes a NFC-e com definição de entrega deverão possuir entidade transportadora preenchida, favor verificar."
        cy.get('.no-truncate')
            .should('be.visible')
            .and('have.text', 'Pedidos referêntes a NFC-e com definição de entrega deverão possuir entidade transportadora preenchida, favor verificar.')
        
        //Botão X para fechar
        cy.get('.md-dialog-fullscreen > :nth-child(1) > .md-toolbar-tools > .md-icon-button > .ng-binding')
            .should('be.visible')
            .and('not.be.disabled')
            .click({force:true})

        // cy.wait(5000)

        // //Botão X para fechar
        // cy.get('.md-dialog-fullscreen > :nth-child(1) > .md-toolbar-tools > .md-icon-button > .ng-binding')
        //     .click({force:true})
    }

    //Card Inconsistências - apenas transportadora
    async modalInconsApenasRota (selector) {

        //Título Inconsistências
        cy.get('.md-dialog-fullscreen > :nth-child(1) > .md-toolbar-tools > .flex')
            .should('be.visible')
            .and('have.text', 'Inconsistências')

        //Mensagem dentro do modal - "Restriçoes geradas (triais), por favor comunique à seu gerente:"
        cy.get(':nth-child(1) > h3')
            .should('be.visible')
            .and('have.text', 'Restriçoes geradas (triais), por favor comunique à seu gerente:')

        //Título Processo de venda - Processo de venda
        cy.get('.ng-scope.flex-100 > .md-primary > .md-toolbar-tools > h2')
            .should('be.visible')
            .and('have.text', 'Processo de venda')

        //Ícone Inconsistências
        cy.get('.md-avatar-icon')
            .should('be.visible')

        //Mensagem "Pedidos referêntes a NFC-e com definição de entrega deverão possuir entidade transportadora preenchida, favor verificar."
        cy.get('.no-truncate')
            .should('be.visible')
            .and('have.text', 'A Rota é obrigatória.')
        
        //Botão X para fechar
        cy.get('.md-dialog-fullscreen > :nth-child(1) > .md-toolbar-tools > .md-icon-button > .ng-binding')
            .should('be.visible')
            .and('not.be.disabled')
            .click({force:true})

        // cy.wait(5000)

        // //Botão X para fechar
        // cy.get('.md-dialog-fullscreen > :nth-child(1) > .md-toolbar-tools > .md-icon-button > .ng-binding')
        //     .click({force:true})
    }
}