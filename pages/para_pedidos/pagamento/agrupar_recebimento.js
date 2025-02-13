export class agruparReceb{

    constructor(page) {
        this.page = page
    }

    //clicar para NÃO agrupar lançamentos com o mesmo processo de recebimento
    async naoAgruparLancamentos (selector) {

        //validar mensagem do modal de aviso
        cy.get('.md-title')
            .should('be.visible')
            .and('have.text', 'Identificamos que já existe um pagamento lançado com esta mesma forma escolhida')

        //validar pergunta dentro do modal de aviso
        cy.get('.md-dialog-content-body > .ng-binding')
            .should('be.visible')
            .and('have.text', 'Deseja agrupar este pagamento em um único pagamento?')

        //validando opção "Sim, desejo agrupar este pagamento"
        cy.get('.md-confirm-button')
            .should('be.visible')
            .and('have.text', 'Sim, desejo agrupar este pagamento')
            .and('not.be.disabled')
            .invoke('css', 'color') // Obtém a cor do elemento
            .should('equal', 'rgb(36, 13, 105)')

        //validando opção "Não, desejo mantê-los individuais"
        cy.get('.md-cancel-button')
            .should('be.visible')
            .and('have.text', 'Não, desejo mantê-los individuais')
            .and('not.be.disabled')
            .invoke('css', 'color') // Obtém a cor do elemento
            .should('equal', 'rgb(36, 13, 105)')

        //clicar em NÃO
        cy.get('.md-cancel-button')
            .click()
    }

    //clicar para SIM agrupar lançamentos com o mesmo processo de recebimento
    async agruparLancamentos (selector) {

        //validar mensagem do modal de aviso
        cy.get('.md-title')
            .should('be.visible')
            .and('have.text', 'Identificamos que já existe um pagamento lançado com esta mesma forma escolhida')

        //validar pergunta dentro do modal de aviso
        cy.get('.md-dialog-content-body > .ng-binding')
            .should('be.visible')
            .and('have.text', 'Deseja agrupar este pagamento em um único pagamento?')

        //validando opção "Sim, desejo agrupar este pagamento"
        cy.get('.md-confirm-button')
            .should('be.visible')
            .and('have.text', 'Sim, desejo agrupar este pagamento')
            .and('not.be.disabled')
            // .invoke('css', 'color') // Obtém a cor do elemento
            // .should('equal', 'rgb(36, 13, 105)')

        //validando opção "Não, desejo mantê-los individuais"
        cy.get('.md-cancel-button')
            .should('be.visible')
            .and('have.text', 'Não, desejo mantê-los individuais')
            .and('not.be.disabled')
            // .invoke('css', 'color') // Obtém a cor do elemento
            // .should('equal', 'rgb(36, 13, 105)')

        //clicar em SIM
        cy.get('.md-confirm-button')
            .click()
    }

    //selecionar dois lançamentos com o mesmo processo de recebimento para posteriormente clicar no botão AGRUPAR
    async selecionarLancAgrupar (selector) {

        //texto "Lançamentos já realizados"
        cy.get('[ng-show="parcelamentoAutomaticoDisponivel"] > .md-subheader-inner > .md-subheader-content')
            .should('be.visible')
            .and('have.text', 'Lançamentos já realizados')

        //Processo - primeiro lançamento
        cy.get(':nth-child(1) > .md-whiteframe-2dp > .layout-gt-sm-row > :nth-child(2) > span.ng-binding > .ng-binding')
            .should('be.visible')

        //Informação Processo - primeiro lançamento
        cy.get(':nth-child(1) > .md-whiteframe-2dp > .layout-gt-sm-row > :nth-child(2) > span.ng-binding')
            .should('be.visible')

        //"1º Vencimento:" - primeiro lançamento
        cy.get(':nth-child(1) > .md-whiteframe-2dp > .layout-gt-sm-row > :nth-child(3) > .ng-binding > b')
            .should('be.visible')
            .and('have.text', '1º Vencimento:')

        //Informação "1º Vencimento:" - primeiro lançamento
        cy.get(':nth-child(1) > .md-whiteframe-2dp > .layout-gt-sm-row > :nth-child(3) > .ng-binding')
            .should('be.visible')

        //"Valor sem juros:" - primeiro lançamento
        cy.get(':nth-child(1) > .md-whiteframe-2dp > .layout-gt-sm-row > :nth-child(5) > .ng-binding > b')
            .should('be.visible')
            .and('have.text', 'Valor sem juros:')

        //Informação "Valor sem juros:" - primeiro lançamento
        cy.get(':nth-child(1) > .md-whiteframe-2dp > .layout-gt-sm-row > :nth-child(5) > .ng-binding')
            .should('be.visible')

        //"Valor da Parcela:" - primeiro lançamento
        cy.get(':nth-child(1) > .md-whiteframe-2dp > .layout-gt-sm-row > :nth-child(6) > .ng-binding > b')
            .should('be.visible')
            .and('have.text', 'Valor da Parcela:')

        //Informação "Valor da Parcela:" - primeiro lançamento
        cy.get(':nth-child(1) > .md-whiteframe-2dp > .layout-gt-sm-row > :nth-child(6) > .ng-binding')
            .should('be.visible')

        //"Subtotal:" - primeiro lançamento
        cy.get(':nth-child(1) > .md-whiteframe-2dp > .layout-gt-sm-row > :nth-child(7) > .ng-binding > b')
            .should('be.visible')
            .and('have.text', 'Subtotal:')

        //Informação "Subtotal:" - primeiro lançamento
        cy.get(':nth-child(1) > .md-whiteframe-2dp > .layout-gt-sm-row > :nth-child(7) > .ng-binding')
            .should('be.visible')

        //"Agrupar" - primeiro lançamento
        cy.get(':nth-child(1) > .md-whiteframe-2dp > .layout-gt-sm-row > [ng-show="item.opcaoAgrupar && item.permiteAgrupar"] > span > b')
            .should('be.visible')
            .and('have.text', 'Agrupar')

        //checkbox "Agrupar" - primeiro lançamento
        cy.get(':nth-child(1) > .md-whiteframe-2dp > .layout-gt-sm-row > [ng-show="item.opcaoAgrupar && item.permiteAgrupar"] > span > .md-auto-horizontal-margin > .md-container')
            .should('be.visible')
            .and('not.be.disabled')
            .click()

        //SEGUNDO LANÇAMENTO

        //texto "Lançamentos já realizados"
        cy.get('[ng-show="parcelamentoAutomaticoDisponivel"] > .md-subheader-inner > .md-subheader-content')
            .should('be.visible')
            .and('have.text', 'Lançamentos já realizados')

        //Processo - segundo lançamento
        cy.get(':nth-child(2) > .md-whiteframe-2dp > .layout-gt-sm-row > :nth-child(2) > span.ng-binding > .ng-binding')
            .should('be.visible')

        //Informação Processo - segundo lançamento
        cy.get(':nth-child(2) > .md-whiteframe-2dp > .layout-gt-sm-row > :nth-child(2) > span.ng-binding')
            .should('be.visible')

        //"1º Vencimento:" - segundo lançamento
        cy.get(':nth-child(2) > .md-whiteframe-2dp > .layout-gt-sm-row > :nth-child(3) > .ng-binding > b')
            .should('be.visible')
            .and('have.text', '1º Vencimento:')

        //Informação "1º Vencimento:" - segundo lançamento
        cy.get(':nth-child(2) > .md-whiteframe-2dp > .layout-gt-sm-row > :nth-child(3) > .ng-binding')
            .should('be.visible')

        //"Valor sem juros:" - segundo lançamento
        cy.get(':nth-child(2) > .md-whiteframe-2dp > .layout-gt-sm-row > :nth-child(5) > .ng-binding > b')
            .should('be.visible')
            .and('have.text', 'Valor sem juros:')

        //Informação "Valor sem juros:" - segundo lançamento
        cy.get(':nth-child(2) > .md-whiteframe-2dp > .layout-gt-sm-row > :nth-child(5) > .ng-binding')
            .should('be.visible')

        //"Valor da Parcela:" - segundo lançamento
        cy.get(':nth-child(2) > .md-whiteframe-2dp > .layout-gt-sm-row > :nth-child(6) > .ng-binding > b')
            .should('be.visible')
            .and('have.text', 'Valor da Parcela:')

        //Informação "Valor da Parcela:" - segundo lançamento
        cy.get(':nth-child(2) > .md-whiteframe-2dp > .layout-gt-sm-row > :nth-child(6) > .ng-binding')
            .should('be.visible')

        //"Subtotal:" - segundo lançamento
        cy.get(':nth-child(2) > .md-whiteframe-2dp > .layout-gt-sm-row > :nth-child(7) > .ng-binding > b')
            .should('be.visible')
            .and('have.text', 'Subtotal:')

        //Informação "Subtotal:" - segundo lançamento
        cy.get(':nth-child(2) > .md-whiteframe-2dp > .layout-gt-sm-row > :nth-child(7) > .ng-binding')
            .should('be.visible')

        //"Agrupar" - segundo lançamento
        cy.get(':nth-child(2) > .md-whiteframe-2dp > .layout-gt-sm-row > [ng-show="item.opcaoAgrupar && item.permiteAgrupar"] > span > b')
            .should('be.visible')
            .and('have.text', 'Agrupar')

        //checkbox "Agrupar" - segundo lançamento
        cy.get(':nth-child(2) > .md-whiteframe-2dp > .layout-gt-sm-row > [ng-show="item.opcaoAgrupar && item.permiteAgrupar"] > span > .md-auto-horizontal-margin > .md-container')
            .should('be.visible')
            .and('not.be.disabled')
            .click()
    }

    //clicar no botão AGRUPAR
    async clicarAgrupar (selector) {

        //botão AGRUPAR
        cy.get('.layout-align-center-end > .flex-gt-sm-50 > .md-primary')
            .should('be.visible')
            .and('have.text', 'Agrupar')
            .click()

        //botão AGRUPAR
    }

    //colocar o valor da primeira forma de pagamento no campo valor a parcelar
    async primeiroValorAParcelar (selector) {

        //informativo "Valor a parcelar"
        cy.contains('label', 'Valor a parcelar')
            .should('be.visible')

        cy.get('.campoMoeda_valorAparcelar')
            .clear()
            .wait(200)
            .type('40000')
    }
}