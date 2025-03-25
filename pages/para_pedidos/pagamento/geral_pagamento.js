import { umDiaAposHoje, trintaUmDiasAposHoje } from '../../gerarDados'

export class GeralPagamento{

    constructor(page) {
        this.page = page
    }

    //------------------- OUTROS ------
    //Carregamento de forma de pagamento, quando clicamos no botão Gerar parcelas
    async loadingFormPayment (selector) {

        //Modal Forma de pagamento - título Forma de pagamento
        cy.get('.md-dialog-fullscreen > .md-primary > .md-toolbar-tools > .flex')
            .should('be.visible')
            .and('have.text', 'Forma de pagamento')

        //botão x do modal Serviços Vinculados
        cy.get('.md-dialog-fullscreen > .md-primary > .md-toolbar-tools > .md-icon-button > .ng-binding')
            .should('be.visible')
            .and('not.be.disabled')
    }

    //------------------- BOTÕES GERAR PARCELAS ------
    //Botão "GERAR PARCELAS"
    async clickGenerateInstallments (selector) {

        cy.intercept('POST', '/services/v3/pedido_forma_pagamento_lista').as('api_pedido_forma_pagamento_lista')
        cy.intercept('GET', '/views/carrinho/modalFormasPgto.html').as('api_modal_forma_pagamento')

        //Botão "GERAR PARCELAS" - validações
        cy.get('.gerar-parcelas > .layout-wrap > [style="padding: 0 5px"] > .md-primary')
            .scrollIntoView()
            .wait(200)
            .should('exist')
            .and('have.text', 'Gerar parcelas')

        //Botão "GERAR PARCELAS" - clicar
        cy.get('.gerar-parcelas > .layout-wrap > [style="padding: 0 5px"] > .md-primary')
            .click({force:true})
            
        cy.wait('@api_pedido_forma_pagamento_lista', { timeout: 40000 })
        cy.wait('@api_modal_forma_pagamento', { timeout: 40000 })
    }

    //Botão "GERAR PARCELAS" quando alteramos a data de vencimento da 1
    async clickGenerateInstallAlterDue (selector) {

        //.intercept('POST', '/services/v3/pedido_forma_pagamento_lista').as('api_formas_pagamento')
        //cy.wait('@api_formas_pagamento', { timeout: 40000 })

        cy.wait(2000)

        //Botão "GERAR PARCELAS" - clicar
        cy.get('.gerar-parcelas > .layout-wrap > [style="padding: 0 5px"] > .md-primary')
            .click({force:true})
    }


    //------------------- GERAR ENTRADA NO PAGAMENTO ------
    //preencher pagamento entrada
    async chooseEntryFormPayment (selector) {

        //texto "Valor máximo da entrada"
        cy.get('[ng-show="carrinho.getValorParcelamento() > 0"] > .btn-rounded > .layout-wrap > :nth-child(1) > md-list.md-default-theme > .padding-0 > .md-list-item-text > p')
            .should('exist')
            .and('be.visible')

        //R$ do Valor máximo da entrada
        cy.get('[ng-show="carrinho.getValorParcelamento() > 0"] > .btn-rounded > .layout-wrap > :nth-child(1) > md-list.md-default-theme > .padding-0 > .md-secondary-container > div > .ng-binding > sup')
            .should('exist')
            .and('be.visible')
            .and('have.text', 'R$')

        //Valor do Valor máximo da entrada
        cy.get('[ng-show="carrinho.getValorParcelamento() > 0"] > .btn-rounded > .layout-wrap > :nth-child(1) > md-list.md-default-theme > .padding-0 > .md-secondary-container > div > .ng-binding')
            .should('exist')
            .and('be.visible')

        //botão $
        cy.get('.layout-row.flex-100 > :nth-child(1) > .md-fab')
            .should('exist')
            .and('be.visible')
            .and('not.be.disabled')

        //botão X
        cy.get(':nth-child(3) > .md-fab')
            .should('exist')
            .and('be.visible')
            .and('not.be.disabled')

        //Campo máximo da parcela
        cy.get('input.campoMoeda_totalEntrada')
            .should('exist')
            .and('be.visible')
            .type('30000')

        //clicando em "Formas de pagamento na Entrada" para abrir forma de pagamento de entrada
        cy.get('[flex="100"][ng-show="(exibeBoxFormasPgtoEntrada)"] > .md-primary > .md-toolbar-tools > .flex')
            .click({force:true})

        //clicando para abrir formas de pagamento disponíveis
        cy.get('div.md-text.ng-binding')
            .contains('3861 - T.A. A Receber A Vista')
            .click({force:true})
    }

    //validando e clicando no botão GERAR PAGAMENTO
    async clickGeneratePayment (selector) {

        //botão
        cy.get('.white > .layout-align-center-center > .md-primary')
            .should('be.visible')
            .and('not.be.disabled')
            .and('have.text', 'Gerar pagamento')
            .click({force:true})
    }


    //------------------- MODIFICAR PRIMEIRO DIA DE VENCIMENTO ------
    //no campo 1 vencimento, colocar o dia de amanha para mudar as formas de pagamento
    async insertDateTomorrow1Due (selector) {

        const data_hoje = umDiaAposHoje();

        //cy.contains('1º Vencimento').parent().find('input')
        cy.get('.gerar-parcelas > .layout-wrap')
            .scrollIntoView()
            .wait(300)

        //Clicar na data que desejo
        cy.contains('1º Vencimento').parent().find('input')
            .clear()
            .wait(200)
            .type(data_hoje)
    }

    //no campo 1 vencimento, colocar 31 dias após a data de hoje
    async insertDate31Days1Due (selector) {

        const data_31_dias = trintaUmDiasAposHoje();

        //cy.contains('1º Vencimento').parent().find('input')
        cy.get('.gerar-parcelas > .layout-wrap')
            .scrollIntoView()
            .wait(300)

        //Clicar na data que desejo
        cy.contains('1º Vencimento').parent().find('input')
            .clear()
            .wait(200)
            .type(data_31_dias)
    }
}