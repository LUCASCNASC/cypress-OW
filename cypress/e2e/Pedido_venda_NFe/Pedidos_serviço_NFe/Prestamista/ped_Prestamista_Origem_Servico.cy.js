import { ProcessoVendaPage } from '../../../../pages/pedido/ProcessoVendaPage.js';
import { Product, ValidateBalance } from '../../../../pages/pedido/ProdutoPage.js';
import { AvancarPage } from '../../../../pages/pedido/AvancarPage.js';
import { GeralPagamentoPage } from '../../../../pages/pedido/GeralPagamentoPage.js';
import { ParcelasPage } from '../../../../pages/pedido/ParcelasPage.js';
import { ProcessoRecebPage } from '../../../pages/pedido/ProcessoRecebPage.js';
import { ProcessoRecebPromoPage } from '../../../pages/pedido/ProcessoRecebPromoPage.js';
import { Service, ValidateService } from '../../../../pages/pedido/ServicosPage.js';
import { PromocaoPage } from '../../../../pages/pedido/PromocaoPage.js';
import { ValidadePrestamistaPage } from '../../../../pages/pedido/ValidadePrestamistaPage.js';
import { GeralPedidosPage } from '../../../../pages/pedido/GeralPedidosPage.js';


describe('Orders with Fixed Value Discount Service - Service Origin (162)', () => {

    beforeEach(() => {
        cy.visit('/');
        cy.clearAllSessionStorage();
        cy.login();
        cy.urlAposLogin();
        cy.tituloPagina(); 
        ProcessoVendaPage.NFe();
        cy.chooseCliente();
    })   

    context('With delivery / Products without promotion - Lender with fixed discount - Service Origin (162)', () => {

        it('1.Order: product 1860 0 0, inclusion 3881, lender 162 (99,30), 4 installments upon receipt Future with interest.', () => {
    
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
            ProcessoRecebPage.futComJurosPrestAbatOrigemPrd();
            ParcelasPage.for();
            ValidateService.okInsurancePrest();
            ValidadePrestamistaPage.added();
            AvancarPage.final();
            ValidadePrestamistaPage.pageFinal();
            cy.clickFinalizarPedidoPage();
            cy.validateOrderGenerated();
        })

        it('2.Order: product 1860 0 0 and 1870 0 0, inclusion 3881 and 3860, lender 162 (99,30), 4 installments upon receipt Future with interest.', () => {
    
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
            ProcessoRecebPage.futComJurosPrestAbatOrigemPrd();
            ParcelasPage.for();
            ValidateService.okInsurancePrest();
            ValidadePrestamistaPage.added();
            AvancarPage.final();
            ValidadePrestamistaPage.pageFinal();
            cy.clickFinalizarPedidoPage();
            cy.validateOrderGenerated();
        })
    })

    context('With delivery / Products with promotion - Lender with fixed discount - Service Origin (162)', () => {

        it('3.Order: product 1922 0 0 (promo a prazo 171), inclusion 3881, lender 162, 4 installments upon receipt Future with interest', () => {
    
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

        it('4.Order: product 1923 0 0 + warranty. Does not separate (promo on term 172 - exempt interest on services), inclusion 3881, lender 162, 4 installments upon receipt. Future with interest', () => {

            Product.termSecondPrestAbatVF();
            ValidateBalance.withBalance();
            cy.clickVoltageProduct();
            cy.clickAddProduc();
            PromocaoPage.selectFirstPromoProduct();
            cy.clickAddProduct();
            Service.validateModalServLinked();
            ValidateService.garantiaNaoSep()
            Service.clickOKServiceLinked(); 
            ValidateService.servLinked(); ValidateService.addGarantNaoSep();
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

        it('5.Order: product 1924 0 0 + warranty. Does not separate (promo on term 173 - exempt interest on warranty), inclusion 3882, lender 162, 4 installments upon receipt Future with interest', () => {

            Product.prazoPrestTercAbatVF();
            ValidateBalance.withBalance();
            cy.clickVoltageProduct();
            cy.clickAddProduc();
            PromocaoPage.selectFirstPromoProduct();
            ProcessoRecebPromoPage.termPresentWithFeesPrestAbatVFOS();
            cy.clickAddProduct();
            Service.validateModalServLinked();
            ValidateService.garantiaNaoSep();
            Service.clickOKServiceLinked(); 
            ValidateService.servLinked(); ValidateService.addGarantNaoSep();
            AvancarPage.toTransporter();
            AvancarPage.paraPatoInstallmentsrcelas();
            cy.intercept('GET', '/images/icons/chain.svg').as('api_icons');
            cy.wait('@api_icons', { timeout: 40000 });
            GeralPedidosPage.clickEditInstallments();
            ParcelasPage.for();
            ValidateService.okInsurancePrest();
            ValidadePrestamistaPage.pageFinal();
            AvancarPage.final();
            ValidadePrestamistaPage.pageFinal();
            cy.clickFinalizarPedidoPage();
            cy.validateOrderGenerated();
        })
    })
})