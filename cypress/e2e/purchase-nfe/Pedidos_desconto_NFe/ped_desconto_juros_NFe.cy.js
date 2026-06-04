import { ProcessoVendaPage } from '../../../pages/pedido/ProcessoVendaPage.js';
import { Product, ValidateBalance } from '../../../pages/pedido/ProdutoPage.js';
import { Service } from '../../../pages/pedido/ServicosPage.js';
import { AvancarPage } from '../../../pages/pedido/AvancarPage.js';
import { TirarEntrega } from '../../../pages/pedido/EntregaPage.js';
import { GeralPagamentoPage } from '../../../pages/pedido/GeralPagamentoPage.js';
import { ParcelasPage } from '../../../pages/pedido/ParcelasPage.js';
import { ProcessoRecebPage } from '../../../pages/pedido/ProcessoRecebPage.js';
import { OrderDiscount } from '../../../pages/pedido/PedidoDecontoPage.js';

describe('PStandard order with interest discount - parameters 243 and 244 defined in the inclusion process', () => {

    beforeEach(() => {
        cy.visit('/');
        cy.clearAllSessionStorage();
        cy.login();
        cy.validateTitlePage();
        ProcessoVendaPage.NFe();
        cy.chooseCliente();
    })

    context('Without delivery/ process 9860 - happy path - inclusion process 3860', () => {

        it('1.Pedido: product 1860 0 0 - round down', () => {

            Product.roundUpDown();
            ValidateBalance.withBalance();
            cy.clickVoltageProduct();
            cy.clickVoltageProduct();
            cy.clickAddProduc();
            Service.validateModalServLinked(); 
            Service.clickOKServiceLinked();
            TirarEntrega.freightFirst();
            AvancarPage.toInstallments();
            GeralPagamentoPage.clickGenerateInstallments(); 
            GeralPagamentoPage.loadingFormPayment();
            ProcessoRecebPage.main();
            ParcelasPage.one();
            OrderDiscount.dragFormPayment() ;
            OrderDiscount.clickChangeValue();
            OrderDiscount.modalChangeValue();
            OrderDiscount.changeValueToLow();
            AvancarPage.final();
            cy.clickFinalizarPedidoPage();
            cy.validateOrderGenerated();
        })

        it('2.Order: products 1860 0 0 - round up', () => {

            Product.roundUpDown();
            ValidateBalance.withBalance();
            cy.clickVoltageProduct();
            cy.clickVoltageProduct();
            cy.clickAddProduc();
            Service.validateModalServLinked(); 
            Service.clickOKServiceLinked();
            TirarEntrega.freightFirst();
            AvancarPage.toInstallments();
            GeralPagamentoPage.clickGenerateInstallments(); 
            GeralPagamentoPage.loadingFormPayment();
            ProcessoRecebPage.main();
            ParcelasPage.one();
            OrderDiscount.dragFormPayment();
            OrderDiscount.clickChangeValue();
            OrderDiscount.modalChangeValue();
            OrderDiscount.changeValueToTop();
            AvancarPage.final();
            cy.clickFinalizarPedidoPage();
            cy.validateOrderGenerated();
        })
    })
})