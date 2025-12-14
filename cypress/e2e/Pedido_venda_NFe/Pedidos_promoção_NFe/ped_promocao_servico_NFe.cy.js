import { ProcessoVendaPage } from '../../../pages/pedido/processos/ProcessoVendaPage.js'
import { Product, ValidateBalance } from '../../../pages/pedido/ProdutoPage.js'
import { Service, ValidateService } from '../../../pages/pedido/ServicosPage.js'
import { AvancarPage } from '../../../pages/pedido/AvancarPage.js'
import { TirarEntrega } from '../../../pages/pedido/EntregaPage.js'
import { ProcessoRecebPromoPage } from '../../../pages/pedido/processos/ProcessoRecebPagePromoPage.js'
import { PromocaoPage } from '../../../../pages/pedido/promocao/promocao.js'
import { ValidadePrestamistaPage } from '../../../pages/pedido/ValidadePrestamistaPage.js'
import { ProcessoRecebPage } from '../../../pages/pedido/processos/ProcessoRecebPage.js'
import { PromocaoPage } from '../../../pages/pedido/PromocaoPage.js'

describe('Gerar pedidos com promoção e serviços com isenção de juros', () => {

    beforeEach(() => {
        cy.visit('/')
        cy.clearAllSessionStorage()
        cy.login()
        cy.urlAposLogin()
        cy.tituloPagina()
        ProcessoVendaPage.NFe() 
        cy.chooseCliente()
    })
  
    context('Sem entrega/ com promoção/ com serviço processo 9860 - caminho feliz', () => {

        it('1.Pedido com promoção a prazo/parcelas (promoção 159): produto 1891 0 0 com garantia (isenta de juros)', () => {
    
            Product.firstInstallmentDeadline()
            ValidateBalance.withBalance() 
            cy.clickVoltageProduct()
            cy.clickAddProduc()
            PromocaoPage.typeServiceFreeValidate()
            PromocaoPage.selectFirstPromoProduct()
            ProcessoRecebPromoPage.pagPrincipal()
            cy.clickAddProduct()
            Service.validateModalServLinked() 
            Service.garantiaSepMesmoProc() 
            Service.clickOKServiceLinked()
            ValidateService.servLinked() ; ValidateService.addMONaoDestSepMesmoProc()
            TirarEntrega.freightFirst() 
            AvancarPage.toInstallments()
            cy.intercept('POST', '/services/v3/pedido_forma_pagamento_lista').as('api_pedido_forma_pagamento_lista')
            cy.wait('@api_pedido_forma_pagamento_lista', { timeout: 40000 })
            AvancarPage.final()
            cy.clickFinalizarPedidoPage()
            cy.validateOrderGenerated()
        })
    
        it('2.Pedido com promoção a prazo/entrada + parcelas (promoção 158): produto 1895 0 0 com garantia (isenta de juros)', () => {
    
            Product.secondInstallmentDeadline()
            ValidateBalance.withBalance() 
            cy.clickVoltageProduct()
            cy.clickAddProduc()
            PromocaoPage.typeServiceFreeValidate()
            PromocaoPage.selectFirstPromoProduct()
            ProcessoRecebPromoPage.pagPrincipal()
            cy.clickAddProduct()
            Service.validateModalServLinked() 
            Service.garantiaSepMesmoProc() 
            Service.clickOKServiceLinked()
            ValidateService.servLinked() ; ValidateService.addMONaoDestSepMesmoProc()
            TirarEntrega.freightFirst() 
            AvancarPage.toInstallments()
            cy.intercept('POST', '/services/v3/pedido_forma_pagamento_lista').as('api_pedido_forma_pagamento_lista')
            cy.wait('@api_pedido_forma_pagamento_lista', { timeout: 40000 })

            //Selecionando opções de pagamento de entrada
            cy.get('md-option .md-text')
                .contains('3861 - T.A. A Receber A Vista')
                .click({force:true})

            //Selecionando processo de receber entrada
            cy.contains('div.md-text.ng-binding', '3861 - T.A. A Receber A Vista')
                .should('be.visible')
                .click({force:true})

            //Clicando no botão GERAR PAGAMENTO da entrada
            cy.get('.white > .layout-align-center-center > .md-primary')
                .should('be.visible')
                .and('not.be.disabled')
                .and('contain','Gerar pagamento')
                .click({force:true})

            AvancarPage.final()
            cy.clickFinalizarPedidoPage() //RESUMO
            cy.validateOrderGenerated()
        })
    
        it('3.Pedido com promoção a partida (promoção 161): produto 1893 0 0 com prestamista (isento de juros)', () => {
    
            Product.thirdInstallmentDeadline()
            ValidateBalance.withBalance() 
            cy.clickVoltageProduct()
            cy.clickAddProduc()
            PromocaoPage.selectFirstPromoProduct()
            ProcessoRecebPage.withMoneylender()
            cy.clickAddProduct()
            Service.validateModalServLinked() 
            Service.clickOKServiceLinked()
            ValidateService.servLinked() ; ValidateService.addMONaoDestSepMesmoProc()
            TirarEntrega.freightFirst() 
            AvancarPage.toInstallments()
            cy.intercept('POST', '/services/v3/pedido_forma_pagamento_lista').as('api_pedido_forma_pagamento_lista')
            cy.wait('@api_pedido_forma_pagamento_lista', { timeout: 40000 })
            PromocaoPage.addPrestamista()
            ValidadePrestamistaPage.added()
            AvancarPage.final()
            ValidadePrestamistaPage.pageFinal()
            cy.clickFinalizarPedidoPage()
            cy.validateOrderGenerated()
        })

        it('4.Pedido com promoção a prazo/parcelas (promoção 162): produto 1894 0 0 com garantia (isenta de juros) e prestamista (com juros)', () => {
    
            Product.fourthInstallmentDeadline()
            ValidateBalance.withBalance() 
            cy.clickVoltageProduct()
            cy.clickAddProduc()
            PromocaoPage.typeServiceFreeValidate()
            PromocaoPage.selectFirstPromoProduct()
            ProcessoRecebPage.withMoneylender()
            cy.clickAddProduct()
            Service.validateModalServLinked() 
            Service.garantiaSepMesmoProc() 
            Service.clickOKServiceLinked()
            ValidateService.servLinked() ; ValidateService.AddGarantSepMesmoProc()
            TirarEntrega.freightFirst() 
            AvancarPage.toInstallments()
            cy.intercept('POST', '/services/v3/pedido_forma_pagamento_lista').as('api_pedido_forma_pagamento_lista')
            cy.wait('@api_pedido_forma_pagamento_lista', { timeout: 40000 })
            PromocaoPage.addPrestamista()
            ValidadePrestamistaPage.added()
            AvancarPage.final()
            ValidadePrestamistaPage.pageFinal()
            cy.clickFinalizarPedidoPage()
            cy.validateOrderGenerated()
        })
    })
 })