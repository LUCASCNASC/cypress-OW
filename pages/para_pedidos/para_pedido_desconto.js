export class PedDesconto {

    constructor(page) {
        this.page = page
    }

//------------------- RELACIONADOS A DESCONTO ------

    //validar e clicar botão % (desconto)
    async clicarBotaoDesconto (selector) {

        //validando botão
        cy.get('[ng-click="abrirModalDescontoProduto($index)"]')
            .scrollIntoView()
            .wait(200)
            .should('be.visible')
            .and('not.be.disabled')

        //validando ícone do botão
        cy.get('[ng-click="abrirModalDescontoProduto($index)"] > .ng-scope')
            .scrollIntoView()
            .wait(200)
            .should('be.visible')
            .and('not.be.disabled')
            .click({force:true})
    }

    //validar Sub/Sobre - Sub R$
    async validateModalSub (selector) {

        //validando título Sub/Sobre
        cy.get('.md-transition-in > ._md > .md-toolbar-tools > .flex')
            .should('be.visible')
            .and('have.text', 'Sub/Sobre')

        //validando botão X
        cy.get('.md-transition-in > ._md > .md-toolbar-tools > .md-icon-button > .ng-binding')
            .should('be.visible')
            .and('not.be.disabled')

        //validando botão arrasta
        cy.get('.md-primary > .md-container > .md-bar')
            .should('be.visible')
            .and('not.be.disabled')

        //validando texto "Sub (-)"
        cy.contains('Sub (-)')
            .should('be.visible')

        //validando texto "(+) Sobre"
        cy.contains('(+) Sobre')
            .should('be.visible')

        //validando botão R$
        cy.contains('button', 'R$')
            .should('be.visible')
            .and('not.be.disabled')

        //validando botão %
        cy.contains('button', '%')
            .should('be.visible')
            .and('not.be.disabled')

        //validando botão VALOR FIXO
        cy.contains('button', 'VALOR FIXO')
            .should('be.visible')
            .and('not.be.disabled')

        //validando ícone R$
        cy.get('md-icon')
            .should('be.visible')

        //validando campo para colocar desconto
        cy.get('input.campoMoeda_desconto.md-input')
            .should('be.visible')
            .and('have.value', '0')

        //Botão APLICAR
        cy.get('button[ng-click="aplicarSubSobre()"]')
            .should('be.visible')
            .and('contain', 'Aplicar')
            .and('not.be.disabled')
    } 

    //Desconto juros - arrastar forma de pagamento escolhida para aparecer desconto - AJUSTAR
    async dragFormPayment (selector) {
        
        cy.get('.md-whiteframe-2dp')
            .trigger('mousedown', { which: 1 })
            .trigger('mousemove', { clientX: 100, clientY: 0 }) // Ajuste clientX para a posição desejada
            .trigger('mouseup')
    }

    //Clicar no botão R$
    async clickChangeValue (selector) {

        //Validar botão como completo
        cy.get('.btn-remove-item-list > :nth-child(1) > .md-raised')
            .should('be.visible')
            .and('not.be.disabled')

        //Validar ícone dentro do botão
        cy.get('.btn-remove-item-list > :nth-child(1) > .md-raised > .ng-scope')
            .should('be.visible')
            .and('not.be.disabled')
            .click({force:true})
    }

    //validar modal Alterar o valor
    async modalChangeValue (selector) {

        //validando título "Alterar o valor"
        cy.get('.md-transition-in > ._md > .md-toolbar-tools > .flex')
            .should('be.visible')
            .and('have.text', 'Alterar o valor')

        //validando botão X 
        cy.get('.md-transition-in > ._md > .md-toolbar-tools > .md-icon-button > .ng-binding')
            .should('be.visible')
            .and('not.be.disabled')
        
        //validando texto Valor da parcela
        cy.contains('Valor da parcela')
            .should('be.visible')

        //validando campo do Valor da parcela
        cy.get('[ng-model="formaPgtoValor"]')
            .should('be.visible')
            .and('be.enabled')

        //validando texto Número de parcelas
        cy.contains('Numero de parcelas')
            .should('be.visible')

        //validando campo do Número de parcelas
        cy.get('[ng-model="formaPgtoQtdVezes"]')
            .should('be.visible')
            .and('not.be.enabled')

        //validando texto Subtotal
        cy.contains('Subtotal')
            .should('be.visible')
        
        //validando campo do Subtotal
        cy.get('[ng-model="formaPgtoSubtotal"]')
            .should('be.visible')
            .and('be.enabled')

        //Botão APLICAR
        cy.get('button.md-raised.md-primary')
            .should('be.visible')
            .and('contain', ' Aplicar ')
    }

    //alterar valor para baixo
    async changeValueToLow (selector) {

        //campo Valor da parcela
        cy.get('[ng-model="formaPgtoValor"]')
            .clear()
            .wait(200)
            .type('136000')

        //campo Subtotal
        cy.get('[ng-model="formaPgtoSubtotal"]')
            .clear()
            .wait(200)
            .type('136000')

        //clicar no botão APLICAR
        cy.get('button[ng-click="aplicarAlterarValor()"]')
            .click({force: true})
    }

    //alterar valor para cima
    async changeValueToTop (selector) {

        //campo Valor da parcela
        cy.get('[ng-model="formaPgtoValor"]')
            .clear()
            .wait(200)
            .type('137000')

        //campo Subtotal
        cy.get('[ng-model="formaPgtoSubtotal"]')
            .clear()
            .wait(200)
            .type('137000')

        //clicar no botão APLICAR
        cy.get('button[ng-click="aplicarAlterarValor()"]')
            .click({force: true})
    }


    //------------------- APLICAR DESCONTOS ------

    //aplicar desconto Sub(-) com R$
    async applyDiscountR$ (selector) {

        const valor_desconto_R$ = '1000'

        //clicar no botão R$    
        cy.contains('button', 'R$')
            .click({force:true})

        //preencher campo com valor do desconto
        cy.get('#txtReajusteReal_0')
            .type(valor_desconto_R$)

        //clicar no botão APLICAR
        cy.get('button[ng-click="aplicarSubSobre()"]')
            .click({force:true})
    }

    //aplicar desconto Sub(-) com %
    async applyDiscountPencentage (selector) {

        const valor_desconto_porcentagem = '2'

        //clicar no botão %    
        cy.contains('button', '%')
            .click({force:true})

        //preencher campo com valor do desconto
        cy.get('#txtReajustePorc_0')
            .type(valor_desconto_porcentagem)

        //clicar no botão APLICAR
        cy.get('button[ng-click="aplicarSubSobre()"]')
            .click({force:true})
    }

    //aplicar desconto Sub(-) com VALOR FIXO
    async applyDiscountVF (selector) {

        const valor_desconto_valorFixo = '280000'

        //clicar no botão VALOR FIXO    
        cy.contains('button', 'VALOR FIXO')
            .click({force:true})

        //preencher campo com valor do desconto
        cy.get('#txtReajusteFixo_0')
            .clear()
            .wait(100)
            .type(valor_desconto_valorFixo)

        //clicar no botão APLICAR
        cy.get('button[ng-click="aplicarSubSobre()"]')
            .click({force:true})
    }
} 