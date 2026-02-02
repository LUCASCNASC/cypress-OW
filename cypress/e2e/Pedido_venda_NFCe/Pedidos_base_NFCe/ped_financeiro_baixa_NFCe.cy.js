import { ProcessoVendaPage } from '../../../pages/pedido/ProcessoVendaPage.js';
import { Product, ValidateBalance } from '../../../pages/pedido/ProdutoPage.js';
import { Service } from '../../../pages/pedido/ServicosPage.js';
import { AvancarPage } from '../../../pages/pedido/AvancarPage.js';
import { EntregaPage } from '../../../pages/pedido/EntregaPage.js';
import { GeralPagamentoPage } from '../../../pages/pedido/GeralPagamentoPage.js';
import { ParcelasPage } from '../../../pages/pedido/ParcelasPage.js';
import { ProcessoRecebPage } from '../../../pages/pedido/ProcessoRecebPage.js';

describe('Order with financial details on file with delivery.', () => {

    beforeEach(() => {
        cy.visit('/');
        cy.clearAllSessionStorage();
        cy.login();
        cy.urlAposLogin();
        cy.tituloPagina();
        ProcessoVendaPage.financePaymentNFCe();
        cy.chooseCliente();
    })
    
    context('With delivery/process 9892 - happy path', () => {

        it('1.Order: product 1860 0 0', () => {
                      
            Product.fisrt();
            ValidateBalance.withBalance();
            cy.selectProductSearch();
            cy.clickVoltageProduct();
            cy.clickAddProduct();
            Service.validateModalServLinked(); 
            Service.clickOKServiceLinked();
            AvancarPage.toTransporter();
            EntregaPage.modalInconsOnlyTransporter();
            EntregaPage.chooseTransporter();
            AvancarPage.installmentDelivery();
            GeralPagamentoPage.clickGenerateInstallments(); 
            GeralPagamentoPage.loadingFormPayment(); 
            ProcessoRecebPage.main();
            ParcelasPage.two();
            AvancarPage.final();
            cy.clickFinalizarPedidoPage();
            cy.validateOrderGenerated();
        })

        it('2.Order: products 1860 0 0 e 1870 0 0', () => {
                
            Product.fisrt();
            ValidateBalance.withBalance();
            cy.selectProductSearch();
            cy.clickVoltageProduct();
            cy.clickAddProduct();
            Service.validateModalServLinked(); 
            Service.clickOKServiceLinked();
            Product.second(); 
            ValidateBalance.withBalance();
            cy.clickVoltageProduct();
            cy.clickAddProduct();
            cy.selectProductSearch();
            Service.validateModalServLinked(); 
            Service.clickOKServiceLinked();
            AvancarPage.toTransporter(); 
            EntregaPage.modalInconsOnlyTransporter();
            EntregaPage.chooseTransporter();
            AvancarPage.installmentDelivery();
            GeralPagamentoPage.clickGenerateInstallments(); 
            GeralPagamentoPage.loadingFormPayment(); 
            ProcessoRecebPage.main();
            ParcelasPage.two();
            AvancarPage.final();
            cy.clickFinalizarPedidoPage();
            cy.validateOrderGenerated();
        })
    })
})