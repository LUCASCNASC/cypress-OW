import { ProcessoVendaPage } from '../../../pages/pedido/ProcessoVendaPage.js';
import { Product, ValidateBalance } from '../../../pages/pedido/ProdutoPage.js';
import { Service } from '../../../pages/pedido/ServicosPage.js';
import { AvancarPage } from '../../../pages/pedido/AvancarPage.js';
import { EntregaPage } from '../../../pages/pedido/EntregaPage.js';
import { GeralPagamentoPage } from '../../../pages/pedido/GeralPagamentoPage.js';
import { ParcelasPage } from '../../../pages/pedido/ParcelasPage.js';
import { ProcessoRecebPage } from '../../../pages/pedido/ProcessoRecebPage.js';
import { GeralPedidosPage } from '../../../pages/pedido/GeralPedidosPage.js';

describe('Remote/process 9890 - Balance rule Parameter 36 = 4 - Parameter 139 = 4 - Trial 653 not configured', () => {

    beforeEach(() => {
        cy.visit('/');
        cy.clearAllSessionStorage();
        cy.login();
        cy.urlAposLogin();
        cy.validateTitlePage(); 
        ProcessoVendaPage.NFCe();
        cy.chooseCliente();
    })
  
    context('Standard remote sales orderl', () => {

        it('1.Remote order: product 1860 0 0 - (Remote sale of product with stock available at the billing branch)', () => {

            Product.fisrt();
            ValidateBalance.withBalance();
            cy.clickVoltageProduct();
            cy.clickAddProduc();
            GeralPedidosPage.changeBranchInvoicing();
            cy.clickAddProduct();
            Service.validateModalServLinked(); 
            Service.clickOKServiceLinked();
            AvancarPage.toTransporter();
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

        it('2.Remote order: products 1860 0 0 and 1870 0 0', () => {

            Product.fisrt();
            ValidateBalance.withBalance();
            cy.clickVoltageProduct();
            cy.clickAddProduc();
            GeralPedidosPage.changeBranchInvoicing();
            cy.clickAddProduct();
            Service.validateModalServLinked(); 
            Service.clickOKServiceLinked();
            Product.second();
            ValidateBalance.withBalance();
            cy.clickVoltageProduct();
            cy.clickAddProduc();
            GeralPedidosPage.changeBranchInvoicing()
            cy.clickAddProduct();
            Service.validateModalServLinked(); 
            Service.clickOKServiceLinked();
            AvancarPage.toTransporter();
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
        
        it('3.Remote order: kit 1877 0 0', () => {

            Product.kitRemote();
            ValidateBalance.withBalance();
            cy.clickVoltageProduct();
            cy.clickAddProduc();
            GeralPedidosPage.changeBranchInvoicing();
            GeralPedidosPage.composicaoDesteKit();
            cy.clickAddProduct();
            Service.validateModalServLinked(); 
            Service.clickOKServiceLinked();
            AvancarPage.toTransporter();
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
    
    context('Remote sales order without remote balance, pick up CD', () => {

        it('4.Remote order - with balance in CD (branch 1) - allow ordering - (Remote sale of product (1883 0 0) without balance in the billing branch, but with balance in the billing CD - with delivery)', () => {

            Product.remoteWithCD();
            ValidateBalance.withBalance();
            cy.clickVoltageProduct();
            cy.clickAddProduc();
            GeralPedidosPage.changeBranchInvoicing();
            cy.clickAddProduct();
            Service.validateModalServLinked(); 
            Service.clickOKServiceLinked();
            AvancarPage.toTransporter();
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
        
        it('5.Remote order - NO balance in CD (branch 1) - DO NOT allow order to be placed - (Remote sale of product (1882 0 0) without balance in the billing branch, no balance in the billing CD)', () => {

            Product.remoteWithoutCD();
            ValidateBalance.withBalance();
            cy.clickVoltageProduct();
            cy.clickAddProduc();
            GeralPedidosPage.changeBranchInvoicing();

            //Validando mensagem "Este produto não possui saldo na filial selecionada."
            cy.get('[ng-if=""][style=""] > p')
                .should('exist')
                .and('be.visible')
                .and('have.text','Este produto não possui saldo na filial selecionada.')
                .invoke('css', 'color') // Obtém a cor do elemento
                .should('equal', 'rgb(244, 67, 54)');

            //Validando mensagem "Este produto não possui saldo na filial selecionada, será permitido apenas a simulação da venda."
            cy.get('[ng-show="(itemGradeSelecionado && itemGradeSelecionado.valor > 0)"] > :nth-child(1) > .mensagem-erro-centralizada > p')
                .should('exist')
                .and('be.visible')
                .and('have.text','Este produto não possui saldo na filial selecionada, será permitido apenas a simulação da venda.')
                .invoke('css', 'color') // Obtém a cor do elemento
                .should('equal', 'rgb(244, 67, 54)');

            //Validando botão Adicionar para Simulação
            cy.get('.md-primary.btn-rounded.md-raised.btn-block')
                .should('exist')
                .and('not.be.disabled')
                .and('contain',' Adicionar para Simulação');
        })    
    })
})