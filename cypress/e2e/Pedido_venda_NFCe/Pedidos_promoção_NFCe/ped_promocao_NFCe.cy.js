import { ProcessoVendaPage } from '../../../pages/pedido/processos/ProcessoVendaPage.js'
import { Product, ValidateBalance } from '../../../pages/pedido/ProdutoPage.js'
import { Service } from '../../../pages/pedido/ServicosPage.js'
import { AvancarPage } from '../../../pages/pedido/AvancarPage.js'
import { EntregaPage } from '../../../pages/pedido/EntregaPage.js'
import { GeralPagamentoPage } from '../../../pages/pedido/GeralPagamentoPage.js'
import { PromocaoPage } from '../../../pages/pedido/PromocaoPage.js'

describe('Pedidos com promoção com entrega', () => {

    beforeEach(() => {
        cy.visit('/')
        cy.clearAllSessionStorage()
        cy.login()
        cy.urlAposLogin()
        cy.tituloPagina()
        ProcessoVendaPage.NFCe() 
        cy.chooseCliente()
    })

    context('Com entrega /com promoção/ processo 9890 - caminho feliz', () => {

        it('1.Pedido com promoção partida (promoção 152): produto 1868 0 0', () => {
    
            Product.promoMatch()
            ValidateBalance.withBalance() 
            cy.selectProductSearch() ; PromocaoPage.ticketPromocaoPage() 
            cy.clickVoltageProduct()
            PromocaoPage.selectFirstPromoProduct()
            cy.clickAddProduct()
            Service.validateModalServLinked() 
            Service.clickOKServiceLinked() 
            AvancarPage.toTransporter()
            EntregaPage.modalInconsOnlyTransporter() 
            EntregaPage.chooseTransporter()
            AvancarPage.installmentDelivery()
            GeralPagamentoPage.clickGenerateInstallments() 

            //Escolher "Forma de pagamento"
            cy.get('[style=""] > md-collapsible-header.layout-row > .md-collapsible-tools > .ng-scope').click()
            //Escolher parcelamento
            cy.get('.active > md-collapsible-body > .layout-column > [style="position: relative"] > :nth-child(1) > div.ng-binding').click()

            AvancarPage.final()
            cy.clickFinalizarPedidoPage()
            cy.validateOrderGenerated()
        })
    
        it('2.Pedido com promoção a prazo com entrada (promoção 150): produto 1866 0 0', () => {
    
            Product.promoDeadlineEntry()
            ValidateBalance.withBalance() 
            cy.selectProductSearch() ; PromocaoPage.ticketPromocaoPage() 
            cy.clickVoltageProduct()
            PromocaoPage.selectFirstPromoProduct() 
            cy.clickAddProduct()
            Service.validateModalServLinked() 
            Service.clickOKServiceLinked()
            AvancarPage.toTransporter()
            EntregaPage.modalInconsOnlyTransporter() 
            EntregaPage.chooseTransporter()
            AvancarPage.installmentDelivery()

            //"PAGAMENTO"
            cy.get('.layout-wrap > .md-primary').scrollTo('top').wait(200)
            cy.contains('.md-select-value', 'Forma de pagamento').click()
        })

        it('3.Pedido com promoção a prazo parcelado (promoção 151): produto 1867 0 0', () => {
    
            Product.promoDeadlineInstallment()
            ValidateBalance.withBalance() 
            cy.selectProductSearch() ; PromocaoPage.ticketPromocaoPage()
            cy.clickVoltageProduct()
            PromocaoPage.selectFirstPromoProduct() 
            cy.clickAddProduct()
            Service.validateModalServLinked() 
            Service.clickOKServiceLinked()
            AvancarPage.toTransporter()
            EntregaPage.modalInconsOnlyTransporter() 
            EntregaPage.chooseTransporter()
            AvancarPage.installmentDelivery()
            GeralPagamentoPage.clickGenerateInstallments() 

            //Escolher a forma de pagamento
            cy.get('[style=""] > md-collapsible-header.layout-row > .md-collapsible-tools > .ng-scope').click({force:true})
            //Escolher a forma de pagamento/parcelas
            cy.get('.active > md-collapsible-body > .layout-column > [style="position: relative"] > :nth-child(1) > div.ng-binding').click({force:true})
            AvancarPage.final()
            cy.clickFinalizarPedidoPage()
            cy.validateOrderGenerated()
        })  
    })
})