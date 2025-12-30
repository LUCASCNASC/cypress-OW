import { ProcessoVendaPage } from '../../../../pages/pedidos/processos/ProcessoVendaPage.js'
import { Product, ValidateBalance } from '../../../../pages/pedido/ProdutoPage.js'
import { AvancarPage } from '../../../../pages/pedido/AvancarPage.js'
import { GeralPagamentoPage } from '../../../../pages/pedido/pagamento/GeralPagamentoPage.js'
import { ParcelasPage } from '../../../../pages/pedido/ParcelasPage.js'
import { ProcessoRecebPage } from '../../../pages/pedido/ProcessoRecebPage.js'
import { ProcessoRecebPromoPage } from '../../../pages/pedido/processos/ProcessoRecebPromoPage.js'
import { Service, ValidateService } from '../../../../pages/pedido/ServicosPage.js'
import { PromocaoPage } from '../../../../pages/pedido/PromocaoPage.js'
import { ValidadePrestamistaPage } from '../../../../pages/pedido/ValidadePrestamistaPage.js'
import { GeralPedidosPage } from '../../../../pages/pedido/GeralPedidosPage.js'


describe('Pedidos com serviço Prestamista Abatimento Valor Fixo - Origem Serviço (162)', () => {

    beforeEach(() => {
        cy.visit('/')
        cy.clearAllSessionStorage()
        cy.login()
        cy.urlAposLogin()
        cy.tituloPagina() 
        ProcessoVendaPage.NFe() 
        cy.chooseCliente()
    })   

    context('Com entrega / Produtos sem promoção - Prestamista com abatimento Valor Fixo - Origem Serviço (162)', () => {

        it('1.Pedido: produto 1860 0 0, inclusão 3881, prestamista 162 (99,30), 4 parcelas no recebimento Futuro com juros.', () => {
    
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
            ProcessoRecebPage.futComJurosPrestAbatOrigemPrd()
            ParcelasPage.for()
            ValidateService.okInsurancePrest()
            ValidadePrestamistaPage.added() 
            AvancarPage.final()
            ValidadePrestamistaPage.pageFinal()
            cy.clickFinalizarPedidoPage()
            cy.validateOrderGenerated()
        })

        it('2.Pedido: produto 1860 0 0 e 1870 0 0, inclusão 3881 e 3860, prestamista 162 (99,30), 4 parcelas no recebimento Futuro com juros.', () => {
    
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
            ProcessoRecebPage.futComJurosPrestAbatOrigemPrd()
            ParcelasPage.for()
            ValidateService.okInsurancePrest()
            ValidadePrestamistaPage.added()
            AvancarPage.final()
            ValidadePrestamistaPage.pageFinal()
            cy.clickFinalizarPedidoPage()
            cy.validateOrderGenerated()
        })
    })

    context('Com entrega / Produtos com promoção - Prestamista com abatimento Valor Fixo - Origem Produto (162)', () => {

        it('3.Pedido: produto 1922 0 0 (promo a prazo 171), inclusão 3881, prestamista 162, 4 parcelas no recebimento Futuro com juros', () => {
    
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

        it('4.Pedido: produto 1923 0 0 + garantia Não separa (promo a prazo 172 - isentar juros serviços), inclusão 3881, prestamista 162, 4 parcelas no recebimento Futuro com juros', () => {

            Product.termSecondPrestAbatVF()
            ValidateBalance.withBalance() 
            cy.clickVoltageProduct()
            cy.clickAddProduc()
            PromocaoPage.selectFirstPromoProduct()
            cy.clickAddProduct()
            Service.validateModalServLinked()
            ValidateService.garantiaNaoSep()
            Service.clickOKServiceLinked() 
            ValidateService.servLinked() ; ValidateService.addGarantNaoSep()
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

        it('5.Pedido: produto 1924 0 0 + garantia Não separa (promo a prazo 173 - isentar juros garantia), inclusão 3882, prestamista 162, 4 parcelas no recebimento Futuro com juros', () => {

            Product.prazoPrestTercAbatVF()
            ValidateBalance.withBalance() 
            cy.clickVoltageProduct()
            cy.clickAddProduc()
            PromocaoPage.selectFirstPromoProduct()
            ProcessoRecebPromoPage.termPresentWithFeesPrestAbatVFOS()
            cy.clickAddProduct()
            Service.validateModalServLinked()
            ValidateService.garantiaNaoSep()
            Service.clickOKServiceLinked() 
            ValidateService.servLinked() ; ValidateService.addGarantNaoSep()
            AvancarPage.toTransporter()
            AvancarPage.paraPatoInstallmentsrcelas()
            cy.intercept('GET', '/images/icons/chain.svg').as('api_icons')
            cy.wait('@api_icons', { timeout: 40000 })
            GeralPedidosPage.clickEditInstallments()
            ParcelasPage.for()
            ValidateService.okInsurancePrest()
            ValidadePrestamistaPage.pageFinal() 
            AvancarPage.final()
            ValidadePrestamistaPage.pageFinal()
            cy.clickFinalizarPedidoPage()
            cy.validateOrderGenerated()
        })
    })
})