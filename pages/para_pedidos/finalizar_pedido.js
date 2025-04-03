export class FinishOrder {

    constructor(page) {
        this.page = page
    }

    //Função para validar modal de proposta de crédito gerada
    async validatePropCreditGenerated (selector) {

        //Card pedido gravado com sucesso - Título Pedido Concluído
        cy.get(':nth-child(5) > .md-transition-in > ._md > .md-toolbar-tools > .flex')
            .should('be.visible')
            .and('contain','Análise de crédito')

        //Card pedido gravado com sucesso - X para sair da aba
        cy.get(':nth-child(5) > .md-transition-in > ._md > .md-toolbar-tools > .md-icon-button > .ng-binding')
            .should('be.visible')
            .and('not.have.attr', 'disabled')

        //validando mensagens dentro do modal
        cy.contains('Deseja enviar a proposta #')
            .should('be.visible')

        //validando mensagens dentro do modal
        cy.contains(' para a análise de crédito?')
            .should('be.visible')

        //Card Análise de crédito - Botão NÃO
        cy.get(':nth-child(5) > .md-transition-in > .layout-align-center-center.layout-row > .md-accent')
            .should('be.visible')
            .and('have.text', ' Não ')
            .and('not.have.attr', 'disabled')

        //Card Análise de crédito - Botão SIM
        cy.get(':nth-child(5) > .md-transition-in > .layout-align-center-center.layout-row > .md-primary')
            .should('be.visible')
            .and('have.text', ' Sim ')
            .and('not.have.attr', 'disabled')
        
        //Card Análise de crédito - Botão SIM
        cy.get(':nth-child(5) > .md-transition-in > .layout-align-center-center.layout-row > .md-primary')
            .click({force:true})
    }

    //Função para validar card de Pedido Concluído - alterado com sucesso
    async validateOrderChangedSucess (selector) {

        //Card pedido gravado com sucesso - Título Pedido Concluído
        cy.get('.md-toolbar-tools h2.flex')
            .should('be.visible')
            .and('contain','Pedido Concluído')

        //Card pedido gravado com sucesso - X para sair da aba
        cy.get('.md-content-overflow > :nth-child(1) > .md-toolbar-tools > .md-icon-button > .ng-binding')
            .should('be.visible')
            .and('not.have.attr', 'disabled')

        //Card pedido gravado com sucesso - ícone check
        cy.get('.icon.success.animate')
            .should('exist')
            .find('.line.tip.animateSuccessTip')
            .should('exist')

        //Card pedido gravado com sucesso - Pedido gerado
        cy.get('.padding-10 > .layout-wrap > .flex-sm-50 > :nth-child(1)')
            .should('be.visible')
            .and('contain','Pedido gerado:')
            
        //Card pedido gravado com sucesso - Pedido gravado com sucesso
        cy.get('[ng-show="editarPedido"]')
            .should('be.visible')
            .and('contain','Pedido alterado com sucesso')

        //Card pedido gravado com sucesso - Número do Pedido gravado com sucesso
        cy.get('#pedido-numero')
            .should('be.visible')

        //Card pedido gravado com sucesso - Botão IMPRIMIR
        cy.get('md-dialog-actions.layout-align-center-center > .md-accent')
            .should('be.visible')
            .and('contain', 'Imprimir')
            .and('not.have.attr', 'disabled')

        //Card pedido gravado com sucesso - Botão OK
        cy.get('md-dialog-actions.layout-align-center-center > .md-primary')
            .should('be.visible')
            .and('contain', 'Ok')
            .and('not.have.attr', 'disabled')
    }

    //Botão para finalizar o pedido
    async clickFinishOrder (selector) {

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
    }

    //Função para validar card de Pedido Concluído
    async validateOrderGenerated (selector) {

        //Card pedido gravado com sucesso - Título Pedido Concluído
        cy.get('.md-toolbar-tools h2.flex')
            .should('be.visible')
            .and('contain','Pedido Concluído')

        //Card pedido gravado com sucesso - X para sair da aba
        cy.get('.md-content-overflow > :nth-child(1) > .md-toolbar-tools > .md-icon-button > .ng-binding')
            .should('be.visible')
            .and('not.have.attr', 'disabled')

        //Card pedido gravado com sucesso - ícone check
        cy.get('.icon.success.animate')
            .should('exist')
            .find('.line.tip.animateSuccessTip')
            .should('exist')

        //Card pedido gravado com sucesso - Pedido gerado
        cy.get('.padding-10 > .layout-wrap > .flex-sm-50 > :nth-child(1)')
            .should('be.visible')
            .and('contain','Pedido gerado:')
            
        //Card pedido gravado com sucesso - Pedido gravado com sucesso
        cy.get('[ng-show="!editarPedido"]')
            .should('be.visible')
            .and('contain','Pedido gravado com sucesso!')

        //Card pedido gravado com sucesso - Número do Pedido gravado com sucesso
        cy.get('#pedido-numero')
            .should('be.visible')

        //Card pedido gravado com sucesso - Botão IMPRIMIR
        cy.get('md-dialog-actions.layout-align-center-center > .md-accent')
            .should('be.visible')
            .and('contain', 'Imprimir')
            .and('not.have.attr', 'disabled')

        //Card pedido gravado com sucesso - Botão OK
        cy.get('md-dialog-actions.layout-align-center-center > .md-primary')
            .should('be.visible')
            .and('contain', 'Ok')
            .and('not.have.attr', 'disabled')
    }
} 