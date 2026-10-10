import { ProcessoVendaPage } from '../../../pages/pedido/ProcessoVendaPage.js';
import { Product, ValidateBalance } from '../../../pages/pedido/ProdutoPage.js';
import { Service } from '../../../pages/pedido/ServicosPage.js';
import { AvancarPage } from '../../../pages/pedido/AvancarPage.js';
import { TirarEntrega } from '../../../pages/pedido/EntregaPage.js';
import { GeralPagamentoPage } from '../../../pages/pedido/GeralPagamentoPage.js';
import { ParcelasPage } from '../../../pages/pedido/ParcelasPage.js';
import { GeralPagamentoPage } from '../../../../pages/pedido/pagamento/geral_pagamento.js';
import { ProcessoRecebPage } from '../../../pages/pedido/ProcessoRecebPage.js';

describe('order with finances in the low', () => {

    beforeEach(() => {
        cy.visit('/');
        cy.clearAllSessionStorage();
        cy.login();
        cy.validateTitlePage();
        ProcessoVendaPage.financePaymentNFe();
        cy.chooseCliente();
    })

    context('no delivery/ process 9863 - happy path', () => {

        it('order: product 1860 0 0', () => {
                 
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

        it('order: products 1860 0 0 and 1870 0 0', () => {
              
            Product.fisrt();
            ValidateBalance.withBalance();
            cy.clickVoltageProduct();
            cy.clickVoltageProduct();
            cy.clickAddProduc();
            Service.validateModalServLinked(); 
            Service.clickOKServiceLinked();
            TirarEntrega.freightFirst();
            Product.second();
            ValidateBalance.withBalance();
            cy.selectProductSearch();
            cy.clickVoltageProduct();
            cy.clickAddProduct();
            Service.validateModalServLinked(); 
            Service.clickOKServiceLinked();
            TirarEntrega.freightSecond();
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

    context('with delivery/ process 9863 - happy path', () => {

        it('order: product 1860 0 0', () => {
                
            Product.fisrt();
            ValidateBalance.withBalance();
            cy.clickVoltageProduct();
            cy.clickVoltageProduct();
            cy.clickAddProduc();
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

        it('order: products 1860 0 0 and 1870 0 0', () => {
                 
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
