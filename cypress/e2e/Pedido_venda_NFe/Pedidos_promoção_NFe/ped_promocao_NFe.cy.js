import { ProcessoVendaPage } from '../../../pages/pedido/processos/ProcessoVendaPage.js'
import { Product, ValidateBalance } from '../../../pages/pedido/ProdutoPage.js'
import { Service } from '../../../pages/pedido/ServicosPage.js'
import { AvancarPage } from '../../../pages/pedido/AvancarPage.js'
import { TirarEntrega } from '../../../pages/pedido/EntregaPage.js'
import { GeralPagamentoPage } from '../../../pages/pedido/pagamento/GeralPagamentoPage.js'
import { ParcelasPage } from '../../../pages/pedido/pagamento/ParcelasPage.js'
import { ProcessoRecebPage } from '../../../pages/pedido/processos/ProcessoRecebPage.js'
import { ProcessoRecebPromoPage } from '../../../pages/pedido/processos/ProcessoRecebPagePromoPage.js'
import { PromocaoPage } from '../../../pages/pedido/PromocaoPage.js'

describe('Gerar pedidos com promoção', () => {

    beforeEach(() => {
        cy.visit('/')
        cy.clearAllSessionStorage()
        cy.login()
        cy.urlAposLogin()
        cy.tituloPagina()
        ProcessoVendaPage.NFe() //processo normal
        cy.chooseCliente()
    })
  
    context('Sem entrega/ com promoção/ processo 9860 - caminho feliz', () => {

        it('1.Pedido com promoção partida (promoção 152): produto 1868 0 0', () => {
    
            Product.promoMatch() //PRODUTO
            ValidateBalance.withBalance() //VALIDAR SALDO
            cy.clickVoltageProduct()
            cy.clickAddProduc()
            PromocaoPage.selectFirstPromoProduct() //PROMOCAO
            ProcessoRecebPromoPage.pagPrincipal()
            cy.clickAddProduct()
            Service.validateModalServLinked() //SERVICOS
            Service.clickOKServiceLinked()
            TirarEntrega.freightFirst() //ENTREGA
            AvancarPage.toInstallments()
            cy.intercept('POST', '/services/v3/pedido_forma_pagamento_lista').as('api_pagamento_lista')
            cy.wait('@api_pagamento_lista', { timeout: 40000 })
            AvancarPage.final() 
            cy.clickFinalizarPedidoPage() //FINALIZAR PEDIDO
            cy.validateOrderGenerated()
        })
    
        it('2.Pedido com promoção a prazo com entrada (promoção 150): produto 1866 0 0', () => {
    
            Product.promoDeadlineEntry() //PRODUTO
            ValidateBalance.withBalance() //VALIDAR SALDO
            cy.clickVoltageProduct()
            cy.clickAddProduc()
            PromocaoPage.selectFirstPromoProduct() //PROMOÇÃO
            ProcessoRecebPromoPage.pagPrincipal()
            cy.clickAddProduct()
            Service.validateModalServLinked() //SERVICOS
            Service.clickOKServiceLinked()
            TirarEntrega.freightFirst() //ENTREGA
            AvancarPage.toInstallments()
    
            //GERAR PARCELAS
            cy.get('.white > :nth-child(3)').click()
            cy.contains('3861 - T.A. A Receber A Vista').click()
    
            //Botão "GERAR PAGAMENTO"
            cy.get('.white > .layout-align-center-center > .md-primary').click()
    
            AvancarPage.final() 
            cy.clickFinalizarPedidoPage() //FINALIZAR PEDIDO
            cy.validateOrderGenerated()
        })
    
        it('3.Pedido com promoção a prazo parcelado (promoção 151): produto 1867 0 0', () => {
    
            Product.promoDeadlineInstallment() //PRODUTO
            ValidateBalance.withBalance() //VALIDAR SALDO
            cy.clickVoltageProduct()
            cy.clickAddProduc()
            PromocaoPage.selectFirstPromoProduct() //PROMOÇÃO
            ProcessoRecebPromoPage.pagPrincipal()
            cy.clickAddProduct()
            Service.validateModalServLinked() //SERVICOS
            Service.clickOKServiceLinked()
            TirarEntrega.freightFirst() //ENTREGA
            AvancarPage.toInstallments()
            cy.intercept('GET', 'images/icons/chain.svg').as('api_icons')
            cy.wait('@api_icons', { timeout: 40000 })
            AvancarPage.final()
            cy.clickFinalizarPedidoPage() //FINALIZAR PEDIDO
            cy.validateOrderGenerated()
        })
    })

    context('Sem entrega/ com promoção e sem promoção/ processo 9860 - caminho feliz', () => {

        it('4.Pedido com promoção partida (promoção 152): produto 1868 0 0 e produto 1870 0 0 (sem promoção)', () => {
    
            Product.promoMatch() //PRODUTO
            ValidateBalance.withBalance() //VALIDAR SALDO
            cy.clickVoltageProduct()
            cy.clickAddProduc()
            PromocaoPage.selectFirstPromoProduct() //PROMOÇÃO
            ProcessoRecebPromoPage.pagPrincipal()
            cy.clickAddProduct()
            Service.validateModalServLinked() //SERVICOS
            Service.clickOKServiceLinked()
            TirarEntrega.freightFirst() //ENTREGA
            Product.second() //PRODUTO
            ValidateBalance.withBalance() //VALIDAR SALDO
            cy.selectProductSearch()
            cy.clickVoltageProduct()
            cy.clickAddProduct()
            Service.validateModalServLinked() //SERVICOS
            Service.clickOKServiceLinked()
            TirarEntrega.freightSecond() //ENTREGA - SEGUNDO PRODUTO
            AvancarPage.toInstallments()
            GeralPagamentoPage.clickGenerateInstallments() //GERAR PARCELAS

            //Escolher forma de pagamento
            cy.contains('3868 - T.A. A Receber PIX TEF').click({force:true})
            cy.intercept('GET', '/services/v3/pedido_forma_pagamento').as('api_pedido_forma_pagamento')
            cy.wait('@api_pedido_forma_pagamento', { timeout: 40000 })
            //Escolher parcelamento
            //cy.get('.active > md-collapsible-body > .layout-column > [style="position: relative"] > :nth-child(1) > div.ng-binding').click({force:true})

            // AvancarPage.final()
            // cy.clickFinalizarPedidoPage() //RESUMO
            // cy.validateOrderGenerated()
        })

        it('5.Pedido com promoção a prazo com entrada (promoção 150): produto 1866 0 0 e produto 1870 0 0 (sem promoção)', () => {
    
            Product.promoDeadlineEntry() //PRODUTO
            ValidateBalance.withBalance() //VALIDAR SALDO
            cy.clickVoltageProduct()
            cy.clickAddProduc()
            PromocaoPage.selectFirstPromoProduct() //PROMOÇÃO
            ProcessoRecebPromoPage.pagPrincipal()
            cy.clickAddProduct()
            Service.validateModalServLinked() //SERVICOS
            Service.clickOKServiceLinked()
            TirarEntrega.freightFirst() //ENTREGA
            Product.second() //PRODUTO
            ValidateBalance.withBalance() //VALIDAR SALDO
            cy.selectProductSearch()
            cy.clickVoltageProduct()
            cy.clickAddProduct()
            Service.validateModalServLinked() //SERVICOS
            Service.clickOKServiceLinked()
            TirarEntrega.freightSecond() //ENTREGA - SEGUNDO PRODUTO
            AvancarPage.toInstallments()

            //GERAR PARCELAS 
            cy.get('.layout-row.flex-100 > :nth-child(1) > .md-fab').should('be.visible').click({force:true})
            cy.get('.white > :nth-child(3)').click({force:true})
            cy.contains('div.md-text', '3861 - T.A. A Receber A Vista').click({force:true}) //Escolher forma de pagamento entrada
            cy.get('.white > .layout-align-center-center > .md-primary').click({force:true}) //clicar GERAR PAGAMENTO
    
            AvancarPage.final()
            cy.clickFinalizarPedidoPage() //FINALIZAR PEDIDO
            cy.validateOrderGenerated()
        })
    })

    context('Com entrega /com promoção/ processo 9860 - caminho feliz', () => {

        it('6.Pedido com promoção partida (promoção 152): produto 1868 0 0', () => {
    
            Product.promoMatch() //PRODUTO
            ValidateBalance.withBalance() //VALIDAR SALDO
            cy.clickVoltageProduct()
            cy.clickAddProduc()
            PromocaoPage.selectFirstPromoProduct()
            ProcessoRecebPromoPage.pagPrincipal()
            cy.clickAddProduct()
            Service.validateModalServLinked() //SERVICOS
            Service.clickOKServiceLinked()
            AvancarPage.toTransporter()
            AvancarPage.toInstallments() //ENTREGA
            cy.intercept('POST', '/services/v3/pedido_forma_pagamento_lista').as('api_pagamento_lista')
            cy.wait('@api_pagamento_lista', { timeout: 40000 })
            GeralPagamentoPage.insertDateTomorrow1Due()
            GeralPagamentoPage.clicarGerarParcAlterarVenc()
            Receipt.principal()
            ParcelasPage.one()
            AvancarPage.final()
            cy.clickFinalizarPedidoPage() //FINALIZAR PEDIDO
            cy.validateOrderGenerated()
        })
    
        it('7.Pedido com promoção a prazo com entrada (promoção 150): produto 1866 0 0', () => {
    
            Product.promoDeadlineEntry() //PRODUTO
            ValidateBalance.withBalance() //VALIDAR SALDO
            cy.clickVoltageProduct()
            cy.clickAddProduc()
            PromocaoPage.selectFirstPromoProduct() //PROMOÇÃO
            ProcessoRecebPromoPage.pagPrincipal()
            cy.clickAddProduct()
            Service.validateModalServLinked() //SERVICOS
            Service.clickOKServiceLinked()
            AvancarPage.toTransporter()
            AvancarPage.toInstallments()
            cy.intercept('GET', 'images/icons/chain.svg').as('api_icons')
            cy.wait('@api_icons', { timeout: 40000 })

            GeralPagamentoPage.insertDateTomorrow1Due()
            cy.get('.gerar-parcelas > .layout-wrap > [style="padding: 0 5px"] > .md-primary').click({force:true})
            Receipt.main()
            ParcelasPage.one()
        })

        it('8.Pedido com promoção a prazo parcelado (promoção 151): produto 1867 0 0', () => {
    
            Product.promoDeadlineInstallment() //PRODUTO
            ValidateBalance.withBalance() //VALIDAR SALDO
            cy.clickVoltageProduct()
            cy.clickAddProduc()
            PromocaoPage.selectFirstPromoProduct() //PROMOÇÃO
            ProcessoRecebPromoPage.pagPrincipal()
            cy.clickAddProduct()
            Service.validateModalServLinked() //SERVICOS
            Service.clickOKServiceLinked()
            AvancarPage.toTransporter()
            AvancarPage.toInstallments()
            GeralPagamentoPage.clickGenerateInstallments() //GERAR PARCELAS

            //Escolher a forma de pagamento
            cy.get('[style=""] > md-collapsible-header.layout-row > .md-collapsible-tools > .ng-scope').click({force:true})
            //Escolher a forma de pagamento/parcelas
            cy.get('.active > md-collapsible-body > .layout-column > [style="position: relative"] > :nth-child(1) > div.ng-binding').click({force:true})

            AvancarPage.final()
            cy.clickFinalizarPedidoPage() //FINALIZAR PEDIDO
            cy.validateOrderGenerated()
        })  
    }) 

    context('Com entrega/ com promoção e sem promoção/ processo 9860 - caminho feliz', () => {

        it('9.Pedido com promoção partida (promoção 152): produto 1868 0 0 e produto 1870 0 0 (sem promoção)', () => {
    
            Product.promoMatch() //PRODUTO
            ValidateBalance.withBalance() //VALIDAR SALDO
            cy.clickVoltageProduct()
            cy.clickAddProduc()
            PromocaoPage.selectFirstPromoProduct() //PROMOÇÃO
            ProcessoRecebPromoPage.pagPrincipal()
            cy.clickAddProduct()
            Service.validateModalServLinked() //SERVICOS
            Service.clickOKServiceLinked()
            Product.second() //PRODUTO
            ValidateBalance.withBalance() //VALIDAR SALDO
            cy.selectProductSearch()
            cy.clickVoltageProduct()
            cy.clickAddProduct()
            Service.clickOKServiceLinked() //SERVIÇOS
            AvancarPage.toTransporter()
            AvancarPage.toInstallments()
            GeralPagamentoPage.clickGenerateInstallments() //GERAR PARCELAS

            //Escolher forma de pagemento
            cy.get('[style=""] > md-collapsible-header.layout-row > .md-collapsible-tools > .ng-scope').click({force: true})
            //Escolher parcelamento
            cy.get('.active > md-collapsible-body > .layout-column > [style="position: relative"] > :nth-child(1) > div.ng-binding').click({force: true})

            AvancarPage.final()
            cy.clickFinalizarPedidoPage() //FINALIZAR PEDIDO
            cy.validateOrderGenerated()
        })
    })
})