import { ProcessoVendaPage } from '../../../pages/pedido/ProcessoVendaPage.js';
import { Product, ValidateBalance } from '../../../pages/pedido/ProdutoPage.js';
import { Service } from '../../../pages/pedido/ServicosPage.js';
import { AvancarPage } from '../../../pages/pedido/AvancarPage.js';
import { TirarEntrega } from '../../../pages/pedido/EntregaPage.js';
import { GeralPagamentoPage } from '../../../pages/pedido/GeralPagamentoPage.js';
import { ParcelasPage } from '../../../pages/pedido/pagento/ParcelasPage.js';
import { ProcessoRecebPage } from '../../../pages/pedido/ProcessoRecebPage.js';

describe('Future delivery order', () => {

    beforeEach(() => {
        cy.visit('/');
        cy.clearAllSessionStorage();
        cy.login();
        cy.urlAposLogin();
        cy.tituloPagina();
        ProcessoVendaPage.deliveryFutureNFe();
        cy.chooseCliente();
    })

    context('No delivery/ process 9862 - happy path', () => {

        it('1.Order: product 1860 0 0', () => {
                      
            Product.fisrt();
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
            ParcelasPage.two();
            AvancarPage.final();
            cy.clickFinalizarPedidoPage();
            cy.validateOrderGenerated();
        })

        it('2.Order: products 1860 0 0 and 1870 0 0', () => {
              
            Product.fisrt();
            ValidateBalance.withBalance();
            cy.clickVoltageProduct();
            cy.clickVoltageProduct();
            cy.clickAddProduc();
            Service.validateModalServLinked(); 
            clicarOKServVinServico.clickOKServiceLinked();
            TirarEntrega.freightFirst();
            Product.second();
            ValidateBalance.withBalance();
            cy.selectProductSearch();
            cy.clickVoltageProduct();
            cy.clickAddProduct();
            Service.validateModalServLinked(); 
            Service.clickOKServiceLinked();
            TirarEntrega.freightSecond();
            AvancarPage.clickGenerateInstallments();
            GeralPagamentoPage.clicarGerarParcelas();
            GeralPagamentoPage.loadingFormPayment();
            ProcessoRecebPage.main(); 
            ParcelasPage.two();
            AvancarPage.final(); 
            cy.clickFinalizarPedidoPage();
            cy.validateOrderGenerated();
        })
    })

    context('With delivery/ process 9862 - happy path', () => {

        it('3.Order: product 1860 0 0', () => {
             
            Product.fisrt();
            ValidateBalance.withBalance();
            cy.clickVoltageProduct();
            cy.clickVoltageProduct();
            cy.clickAddProduc();
            Service.validateModalServLinked(); 
            Service.clickOKServiceLinked();
            AvancarPage.toTransporter();
            AvancarPage.toInstallments()
            GeralPagamentoPage.clickGenerateInstallments(); 
            GeralPagamentoPage.loadingFormPayment();
            ProcessoRecebPage.main(); 
            ParcelasPage.two();
            AvancarPage.final();
            cy.clickFinalizarPedidoPage();
            cy.validateOrderGenerated();
        })    

        it('4.Order: products 1860 0 0 and 1870 0 0', () => {
                   
            Product.fisrt();
            ValidateBalance.withBalance();
            cy.clickVoltageProduct();
            cy.clickVoltageProduct();
            cy.clickAddProduc();
            Service.validateModalServLinked(); 
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
            ProcessoRecebPage.main(); 
            ParcelasPage.two();
            AvancarPage.final(); 
            cy.clickFinalizarPedidoPage();
            cy.validateOrderGenerated();
        })  
    })
})