import { ProcessoVendaPage } from '../../../../pages/pedidos/processos/ProcessoVendaPage.js'
import { Product, ValidateBalance } from '../../../../pages/pedido/ProdutoPage.js'
import { Service, ValidateService } from '../../../../pages/pedido/ServicosPage.js'
import { AvancarPage } from '../../../../pages/pedido/AvancarPage.js'
import { GeralPagamentoPage } from '../../../../pages/pedido/pagamento/GeralPagamentoPage.js'
import { ParcelasPage } from '../../../../pages/pedido/pagamento/ParcelasPage.js'
import { ProcessoRecebPage } from '../../../pages/pedido/processos/ProcessoRecebPage.js'
import { ProcessoRecebPromoPage } from '../../../pages/pedido/processos/ProcessoRecebPromoPage.js'
import { PromocaoPage } from '../../../../pages/pedido/PromocaoPage.js'
import { ValidadePrestamistaPage } from '../../../../pages/pedido/ValidadePrestamistaPage.js'
import { GeralPedidosPage } from '../../../../pages/pedido/GeralPedidosPage.js'

describe('Gerar pedidos com serviço Prestamista Abatimento Valor Fixo (161)', () => {

    beforeEach(() => {
        cy.visit('/')
        cy.clearAllSessionStorage()
        cy.login()
        cy.urlAposLogin()
        cy.tituloPagina() 
        ProcessoVendaPage.NFe() 
        cy.chooseCliente()
    })   

    context('Com entrega / Produtos sem promoção - Prestamista com abatimento Valor Fixo', () => {

        it('1.Pedido: produto 1860 0 0, inclusão 3880, prestamista 161 (55,90), 4 parcelas no recebimento Futuro com juros.', () => {
    
            Product.fisrt()
            ValidateBalance.withBalance() 
            cy.selectProductSearch()
            cy.clickVoltageProduct()
            cy.clickAddProduct()
            Service.validateModalServLinked() 
            Service.clickOKServiceLinked()
            AvancarPage.toTransporter()
            AvancarPage.toInstallments()
            GeralPagamentoPage.clickGenerateInstallments() 
            GeralPagamentoPage.loadingFormPayment()
            ProcessoRecebPage.futWithoutRebVF()
            ParcelasPage.for()
            ValidateService.okInsurancePrest()
            ValidadePrestamistaPage.added() 
            AvancarPage.final()
            ValidadePrestamistaPage.pageFinal()
            cy.clickFinalizarPedidoPage()
            cy.validateOrderGenerated()
        })

        it('2.Pedido: produto 1860 0 0 e 1870 0 0, inclusão 3880, prestamista 161 (55,90), 4 parcelas no recebimento Futuro com juros.', () => {
    
            Product.fisrt()
            ValidateBalance.withBalance() 
            cy.selectProductSearch()
            cy.clickVoltageProduct()
            cy.clickAddProduct()
            Service.validateModalServLinked()
            ValidateService.garantiaNaoSep()
            Service.clickOKServiceLinked() 
            Product.second()
            ValidateBalance.withBalance() 
            cy.selectProductSearch()
            cy.clickVoltageProduct()
            cy.clickAddProduct()
            Service.validateModalServLinked() 
            Service.clickOKServiceLinked()
            AvancarPage.toTransporter()
            AvancarPage.toInstallments()
            GeralPagamentoPage.clickGenerateInstallments() 
            GeralPagamentoPage.loadingFormPayment()
            ProcessoRecebPage.futWithoutRebVF()
            ParcelasPage.for()
            ValidateService.okInsurancePrest()
            ValidadePrestamistaPage.added()
            AvancarPage.final()
            ValidadePrestamistaPage.pageFinal()
            cy.clickFinalizarPedidoPage()
            cy.validateOrderGenerated()
        })
    })

    context('Com entrega / Produtos com promoção - Prestamista com abatimento Valor Fixo', () => {

        it('3.Pedido: produto 1922 0 0 (promo a prazo 171), inclusão 3880 (outro recebimento 3860), prestamista 161, 4 parcelas no recebimento Futuro com juros', () => {
    
            Product.termFisrtPrestAbatVF()
            ValidateBalance.withBalance() 
            cy.clickVoltageProduct()
            cy.clickAddProduc()
            PromocaoPage.selectFirstPromoProduct()
            ProcessoRecebPromoPage.termFutWithFeesPrestAbatVF()
            cy.clickAddProduct()
            Service.validateModalServLinked() 
            Service.clickOKServiceLinked()
            AvancarPage.toTransporter()
            AvancarPage.toInstallments()
            cy.intercept('GET', '/images/icons/chain.svg').as('api_icons')
            cy.wait('@api_icons', { timeout: 40000 })
            GeralPedidosPage.clickEditInstallments()
            ParcelasPage.for()
            ValidateService.okInsurancePrest()
            ValidadePrestamistaPage.added() 
            AvancarPage.final()
            ValidadePrestamistaPage.pageFinal()
            cy.clickFinalizarPedidoPage()
            cy.validateOrderGenerated()
        })

        it('4.Pedido: produto 1923 0 0 + garantia Não separa (promo a prazo 172 - isentar juros serviços), inclusão 3880 (outro recebimento 3860), prestamista 161, 4 parcelas no recebimento Futuro com juros', () => {

            Product.termSecondPrestAbatVF()
            ValidateBalance.withBalance() 
            cy.clickVoltageProduct()
            cy.clickAddProduc()
            PromocaoPage.selectFirstPromoProduct()
            ProcessoRecebPromoPage.termFutWithFeesPrestAbatVF()
            cy.clickAddProduct()
            Service.validateModalServLinked()
            ValidateService.garantiaNaoSep()
            Service.clickOKServiceLinked() 
            ValidateService.servLinked() ; ValidateService.garantiaNaoSep()
            AvancarPage.toTransporter()
            AvancarPage.toInstallments()
            cy.intercept('GET', '/images/icons/chain.svg').as('api_icons')
            cy.wait('@api_icons', { timeout: 40000 })
            GeralPedidosPage.clickEditInstallments()
            ParcelasPage.for()
            ValidateService.okInsurancePrest()
            ValidadePrestamistaPage.added() 
            AvancarPage.final()
            ValidadePrestamistaPage.pageFinal()
            cy.clickFinalizarPedidoPage()
            cy.validateOrderGenerated()
        })

        it('5.Pedido: produto 1924 0 0 + garantia Não separa (promo a prazo 173 - isentar juros garantia), inclusão 3880 (outro recebimento 3860), prestamista 161, 4 parcelas no recebimento Futuro com juros', () => {

            Product.termThirdPrestAbatVF()
            ValidateBalance.withBalance() 
            cy.clickVoltageProduct()
            cy.clickAddProduc()
            PromocaoPage.selectFirstPromoProduct()
            ProcessoRecebPromoPage.termFutWithFeesPrestAbatVF()
            cy.clickAddProduct()
            Service.validateModalServLinked()
            ValidateService.garantiaNaoSep()
            Service.clickOKServiceLinked() 
            ValidateService.servLinked() ; ValidateService.garantiaNaoSep()
            AvancarPage.toTransporter()
            AvancarPage.toInstallments()
            cy.intercept('GET', '/images/icons/chain.svg').as('api_icons')
            cy.wait('@api_icons', { timeout: 40000 })
            GeralPedidosPage.clickEditInstallments()
            ParcelasPage.for()
            ValidateService.okInsurancePrest()
            ValidadePrestamistaPage.added() 
            AvancarPage.final()
            ValidadePrestamistaPage.pageFinal()
            cy.clickFinalizarPedidoPage()
            cy.validateOrderGenerated()
        })
    })

    context('Com entrega / Produto sem promoção - Prestamista com abatimento Valor Fixo', () => {

        it('6.Pedido: produto 1860 0 0, inclusão 3878, prestamista 161 (55,90), 4 parcelas no recebimento Presente com juros.', () => {
    
            Product.fisrt()
            ValidateBalance.withBalance() 
            cy.selectProductSearch()
            cy.clickVoltageProduct()
            cy.clickAddProduct()
            Service.validateModalServLinked() 
            Service.clickOKServiceLinked()
            AvancarPage.toTransporter()
            AvancarPage.toInstallments()
            GeralPagamentoPage.clickGenerateInstallments() 
            GeralPagamentoPage.loadingFormPayment()
            ProcessoRecebPage.presentMoneyRebVF()
            ParcelasPage.for()
            ValidateService.okInsurancePrest()
            ValidadePrestamistaPage.added() 
            AvancarPage.final()
            ValidadePrestamistaPage.pageFinal()
            cy.clickFinalizarPedidoPage()
            cy.validateOrderGenerated()
        })
    })
})