import { ProcessoVendaPage } from '../../../pages/pedido/ProcessoVendaPage.js';
import { AvancarPage } from '../../../pages/pedido/AvancarPage.js';
import { EntregaPage, TirarEntrega } from '../../../pages/pedido/EntregaPage.js';
import { GeralPagamentoPage } from '../../../pages/pedido/GeralPagamentoPage.js';
import { ParcelasPage } from '../../../pages/pedido/ParcelasPage.js';
import { ProcessoRecebPage } from '../../../pages/pedido/ProcessoRecebPage.js';
import { PedExclusiva } from '../../../pages/pedido/PedidoExclusivaPage.js';
import { ProductExclusiva, ValidateBalance } from '../../../pages/pedido/ProdutoPage.js';
import { GeralPedidosPage } from '../../../pages/pedido/GeralPedidosPage.js';
import { Service } from '../../../pages/pedido/ServicosPage.js';

describe('Exclusive Orders - Company parameter 1019 checked', () => {

    beforeEach(() => {
        cy.visit('/');
        cy.clearAllSessionStorage();
        cy.login();
        cy.urlAposLogin();
        cy.tituloPagina();
        ProcessoVendaPage.NFe();
        cy.chooseCliente();
    })

    context('Process configuration - Exclusive: 36 = 2; 139 = 6; 552 = 5 days', () => {

        it('1.Order: normal product (with balance and with delivery, 15 days) and a remote kit (2 compositions, without balance and without receiving, 20 days).', () => {

            ProductExclusiva.firstNormal();
            ValidateBalance.withBalance();
            cy.selectProductSearch();
            cy.clickVoltageProduct();
            cy.clickAddProduct();
            Service.validateModalServLinked(); 
            Service.clickOKServiceLinked();
            ProductExclusiva.kitWithoutBalanceScheduling();
            ValidateBalance.withoutBalance();
            cy.clickVoltageProduct();
            cy.clickAddProduc();
            GeralPedidosPage.trocarFilialFaturamento();
            cy.clickAddProduct();
            AvancarPage.toTransporter();
            EntregaPage.modalInconsApenasTransp();
            EntregaPage.escolherTransportadora();
            AvancarPage.toInstallments();
            GeralPagamentoPage.clickGenerateInstallments(); 
            GeralPagamentoPage.carregandoFormaPagamento();
            ProcessoRecebPage.main();
            ParcelasPage.two();
            AvancarPage.final();
            cy.clickFinalizarPedidoPage();
            cy.validateOrderGenerated();
        })

        it('2.Order: normal product (with balance and with delivery) and a kit with 6 compositions (current date + parameter 552/ 5 days).', () => {

            ProductExclusiva.firstNormal();
            ValidateBalance.withBalance();
            cy.selectProductSearch();
            cy.clickVoltageProduct();
            cy.clickAddProduct();
            Service.validateModalServLinked(); 
            Service.clickOKServiceLinked();
            ProductExclusiva.kitVolumes();
            ValidateBalance.withBalance();
            cy.selectProductSearch();
            cy.clickVoltageProduct();
            cy.clickAddProduct();
            AvancarPage.toTransporter();
            EntregaPage.modalInconsApenasTransp();
            EntregaPage.escolherTransportadora();
            AvancarPage.toInstallments();
            GeralPagamentoPage.clickGenerateInstallments(); 
            GeralPagamentoPage.carregandoFormaPagamento();
            ProcessoRecebPage.main();
            ParcelasPage.two();
            AvancarPage.final();
            cy.clickFinalizarPedidoPage();
            cy.validateOrderGenerated();
        })
    })

    context('Process configuration - Exclusive: 36 = 2; 139 = 6; 552 = 5 days', () => {

        it('3.Order: product (without balance and with balance to receive for 10 days, and with delivery), and have an appointment for the forecast date.', () => {

            ProductExclusiva.balanceReceive();
            ValidateBalance.withBalance();
            cy.selectProductSearch();
            cy.clickVoltageProduct();
            cy.clickAddProduct();
            Service.validateModalServLinked(); 
            Service.clickOKServiceLinked();
            AvancarPage.toTransporter();
            EntregaPage.modalInconsApenasTransp();
            EntregaPage.escolherTransportadora();
            AvancarPage.toInstallments();
            GeralPagamentoPage.clickGenerateInstallments(); 
            GeralPagamentoPage.carregandoFormaPagamento();
            ProcessoRecebPage.main();
            ParcelasPage.two();
            AvancarPage.final();
            cy.clickFinalizarPedidoPage();
            cy.validateOrderGenerated();
        })

        it('4.Order: product in two lines (one with 5 units to receive and 10 to request purchase), and have an appointment for the forecast date to receive.', () => {

            ProductExclusiva.balanceReceiveTwoLines()
            PedExclusiva.balanceRemoteReceive()
            cy.clickVoltageProduct();
            cy.clickAddProduc() 
            GeralPedidosPage.trocarFilialFaturamento()
            PedExclusiva.increaseAmountSaleFive()
            cy.selectProductSearch();
            ProductExclusiva.balanceReceiveTwoLines() 
            PedExclusiva.balanceRemoteReceive()
            cy.clickVoltageProduct(); 
            cy.clickAddProduct();
            GeralPedidosPage.trocarFilialFaturamento()
            PedExclusiva.increaseAmountSaleTen()
        })

        it('5.Order: normal sale: product 1896 0 0 (without delivery)', () => {
    
            ProductExclusiva.firstNormal();
            ValidateBalance.withBalance();
            cy.selectProductSearch();
            cy.clickVoltageProduct();
            cy.clickAddProduct();
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
    })
})