import { ProcessoVendaPage } from '../../../../pages/pedido/ProcessoVendaPage.js'
import { Product, ValidateBalance } from '../../../../pages/pedido/ProdutoPage.js'
import { Service, ValidateService } from '../../../../pages/pedido/ServicosPage.js'
import { AvancarPage } from '../../../../pages/pedido/AvancarPage.js'
import { GeralPagamentoPage } from '../../../../pages/pedido/GeralPagamentoPage.js'
import { ParcelasPage } from '../../../../pages/pedido/ParcelasPage.js'
import { ProcessoRecebPage } from '../../../pages/pedido/ProcessoRecebPage.js'
import { ProcessoRecebPromoPage } from '../../../pages/pedido/ProcessoRecebPromoPage.js'
import { PromocaoPage } from '../../../../pages/pedido/PromocaoPage.js'
import { ValidadePrestamistaPage } from '../../../../pages/pedido/ValidadePrestamistaPage.js'
import { GeralPedidosPage } from '../../../../pages/pedido/GeralPedidosPage.js'

describe('Orders with Lender Service Fixed Value Discount (161)', () => {

    beforeEach(() => {
        cy.visit('/');
        cy.clearAllSessionStorage();
        cy.login();
        cy.urlAposLogin();
        cy.tituloPagina(); 
        ProcessoVendaPage.NFe() 
        cy.chooseCliente();
    })   

    context('With delivery / Products without promotion - Lender with discount Fixed Value', () => {

        it('1.Order: product 1860 0 0, inclusion 3880, lender 161 (55.90), 4 installments upon receipt Future with interest.', () => {
    
            Product.fisrt();
            ValidateBalance.withBalance();
            cy.selectProductSearch();
            cy.clickVoltageProduct();
            cy.clickAddProduct();
            Service.validateModalServLinked(); 
            Service.clickOKServiceLinked();
            AvancarPage.toTransporter();
            AvancarPage.toInstallments();
            GeralPagamentoPage.clickGenerateInstallments(); 
            GeralPagamentoPage.loadingFormPayment();
            ProcessoRecebPage.futWithoutRebVF();
            ParcelasPage.for()
            ValidateService.okInsurancePrest();
            ValidadePrestamistaPage.added();
            AvancarPage.final();
            ValidadePrestamistaPage.pageFinal();
            cy.clickFinalizarPedidoPage();
            cy.validateOrderGenerated();
        })

        it('2.Order: product 1860 0 0 e 1870 0 0, inclusion 3880, lender 161 (55.90), 4 installments upon receipt Future with interest.', () => {
    
            Product.fisrt();
            ValidateBalance.withBalance();
            cy.selectProductSearch();
            cy.clickVoltageProduct();
            cy.clickAddProduct();
            Service.validateModalServLinked();
            ValidateService.garantiaNaoSep();
            Service.clickOKServiceLinked(); 
            Product.second();
            ValidateBalance.withBalance();
            cy.selectProductSearch();
            cy.clickVoltageProduct();
            cy.clickAddProduct();
            Service.validateModalServLinked(); 
            Service.clickOKServiceLinked();
            AvancarPage.toTransporter();
            AvancarPage.toInstallments();
            GeralPagamentoPage.clickGenerateInstallments(); 
            GeralPagamentoPage.loadingFormPayment();
            ProcessoRecebPage.futWithoutRebVF();
            ParcelasPage.for();
            ValidateService.okInsurancePrest();
            ValidadePrestamistaPage.added();
            AvancarPage.final();
            ValidadePrestamistaPage.pageFinal();
            cy.clickFinalizarPedidoPage();
            cy.validateOrderGenerated();
        })
    })

    context('With delivery / Products with promotion - Lender with discount Fixed Value', () => {

        it('3.Order: product 1922 0 0 (promo a prazo 171), inclusion 3880 (other receipt 3860), lender 161, 4 installments upon receipt Future with interest', () => {
    
            Product.termFisrtPrestAbatVF();
            ValidateBalance.withBalance();
            cy.clickVoltageProduct();
            cy.clickAddProduc();
            PromocaoPage.selectFirstPromoProduct();
            ProcessoRecebPromoPage.termFutWithFeesPrestAbatVF();
            cy.clickAddProduct();
            Service.validateModalServLinked(); 
            Service.clickOKServiceLinked();
            AvancarPage.toTransporter();
            AvancarPage.toInstallments();
            cy.intercept('GET', '/images/icons/chain.svg').as('api_icons');
            cy.wait('@api_icons', { timeout: 40000 });
            GeralPedidosPage.clickEditInstallments();
            ParcelasPage.for();
            ValidateService.okInsurancePrest();
            ValidadePrestamistaPage.added();
            AvancarPage.final();
            ValidadePrestamistaPage.pageFinal();
            cy.clickFinalizarPedidoPage();
            cy.validateOrderGenerated();
        })

        it('4.Order: product 1923 0 0 + insurance does not separate (promo a prazo 172 - isentar juros serviços), inclusion 3880 (other receipt 3860), lender 161, 4 installments upon receipt Future with interest', () => {

            Product.termSecondPrestAbatVF();
            ValidateBalance.withBalance();
            cy.clickVoltageProduct();
            cy.clickAddProduc();
            PromocaoPage.selectFirstPromoProduct();
            ProcessoRecebPromoPage.termFutWithFeesPrestAbatVF()
            cy.clickAddProduct();
            Service.validateModalServLinked();
            ValidateService.garantiaNaoSep()
            Service.clickOKServiceLinked(); 
            ValidateService.servLinked() ; ValidateService.garantiaNaoSep()
            AvancarPage.toTransporter();
            AvancarPage.toInstallments();
            cy.intercept('GET', '/images/icons/chain.svg').as('api_icons');
            cy.wait('@api_icons', { timeout: 40000 });
            GeralPedidosPage.clickEditInstallments();
            ParcelasPage.for();
            ValidateService.okInsurancePrest();
            ValidadePrestamistaPage.added() ;
            AvancarPage.final();
            ValidadePrestamistaPage.pageFinal();
            cy.clickFinalizarPedidoPage();
            cy.validateOrderGenerated();
        })

        it('5.Order: product 1924 0 0 + insurance does not separate (promo a prazo 173 - isentar juros garantia), inclusion 3880 (other receipt 3860), lender 161, 4 installments upon receipt Future with interest', () => {

            Product.termThirdPrestAbatVF();
            ValidateBalance.withBalance();
            cy.clickVoltageProduct();
            cy.clickAddProduc();
            PromocaoPage.selectFirstPromoProduct();
            ProcessoRecebPromoPage.termFutWithFeesPrestAbatVF();
            cy.clickAddProduct();
            Service.validateModalServLinked();
            ValidateService.garantiaNaoSep();
            Service.clickOKServiceLinked(); 
            ValidateService.servLinked(); ValidateService.garantiaNaoSep(;)
            AvancarPage.toTransporter();
            AvancarPage.toInstallments();
            cy.intercept('GET', '/images/icons/chain.svg').as('api_icons');
            cy.wait('@api_icons', { timeout: 40000 });
            GeralPedidosPage.clickEditInstallments();
            ParcelasPage.for();
            ValidateService.okInsurancePrest();
            ValidadePrestamistaPage.added();
            AvancarPage.final();
            ValidadePrestamistaPage.pageFinal();
            cy.clickFinalizarPedidoPage();
            cy.validateOrderGenerated();
        })
    })

    context('With delivery / Product without promotion - Lender with discount Fixed Value', () => {

        it('6.Order: product 1860 0 0, inclusion 3878, lender 161 (55.90), 4 installments upon receipt Present with interest.', () => {
    
            Product.fisrt();
            ValidateBalance.withBalance();
            cy.selectProductSearch();
            cy.clickVoltageProduct();
            cy.clickAddProduct();
            Service.validateModalServLinked(); 
            Service.clickOKServiceLinked();
            AvancarPage.toTransporter();
            AvancarPage.toInstallments();
            GeralPagamentoPage.clickGenerateInstallments(); 
            GeralPagamentoPage.loadingFormPayment();
            ProcessoRecebPage.presentMoneyRebVF();
            ParcelasPage.for();
            ValidateService.okInsurancePrest();
            ValidadePrestamistaPage.added() ;
            AvancarPage.final();
            ValidadePrestamistaPage.pageFinal();
            cy.clickFinalizarPedidoPage();
            cy.validateOrderGenerated();
        })
    })
})