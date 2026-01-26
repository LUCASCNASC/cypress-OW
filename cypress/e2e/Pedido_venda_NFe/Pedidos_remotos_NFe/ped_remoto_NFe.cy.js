import { ProcessoVendaPage } from '../../../pages/pedidos/ProcessoVendaPage.js'
import { Product, ValidateBalance } from '../../../pages/pedido/ProdutoPage.js'
import { Service } from '../../../pages/pedido/ServicosPage.js'
import { AvancarPage } from '../../../pages/pedido/AvancarPage.js'
import { ProcessoRecebPage } from '../../../pages/pedido/ProcessoRecebPage.js'
import { GeralPedidosPage } from '../../../pages/pedido/GeralPedidosPage.js'
import { GeralPagamentoPage } from '../../../pages/pedido/GeralPagamentoPage.js'
import { ParcelasPage } from '../../../pages/ParcelasPage.js'

describe('Remote/process 9860 - Balance rule Parameter 36 = 4 - Parameter 139 = 4 - Trial 653 not configured', () => {

    beforeEach(() => {
        cy.visit('/');
        cy.clearAllSessionStorage();
        cy.login();
        cy.urlAposLogin();
        cy.tituloPagina(); 
        ProcessoVendaPage.NFe() 
        cy.chooseCliente();
    })

    context('Remote order normal', () => {

        it('1.Remote order: product 1860 0 0 - (Remote sale of product with balance in the invoicing branch)', () => {

            Product.fisrt();
            ValidateBalance.withBalance();
            cy.clickVoltageProduct();
            cy.clickAddProduc()
            GeralPedidosPage.changeBranchInvoicing()
            cy.clickAddProduct();
            Service.validateModalServLinked(); 
            Service.clickOKServiceLinked();
            AvancarPage.toTransporter();
            AvancarPage.toInstallments()
            GeralPagamentoPage.clickGenerateInstallments(); 
            GeralPagamentoPage.loadingFormPayment();
            ProcessoRecebPage.main();
            ParcelasPage.duas()
            AvancarPage.final();
            cy.clickFinalizarPedidoPage();
            cy.validateOrderGenerated();
        })

        it('2.Remote order: products 1860 0 0 and 1870 0 0', () => {

            Product.fisrt();
            ValidateBalance.withBalance();
            cy.clickVoltageProduct();
            cy.clickAddProduc()
            GeralPedidosPage.changeBranchInvoicing()
            cy.clickAddProduct();
            Service.validateModalServLinked(); 
            Service.clickOKServiceLinked();
            Product.freightSecond() 
            ValidateBalance.withBalance();
            cy.clickVoltageProduct();
            cy.clickAddProduc()
            GeralPedidosPage.changeBranchInvoicing()
            cy.clickAddProduct();
            Service.validateModalServLinked();
            Service.clickOKServiceLinked();
            AvancarPage.toTransporter();
            AvancarPage.toInstallments()
            GeralPagamentoPage.clickGenerateInstallments(); 
            GeralPagamentoPage.loadingFormPayment();
            ProcessoRecebPage.main();
            ParcelasPage.duas()
            AvancarPage.final();
            cy.clickFinalizarPedidoPage();
            cy.validateOrderGenerated();
        })

        it('3.Remote order: kit 1877 0 0', () => {

            Product.kitRemote()
            ValidateBalance.withBalance();
            cy.clickVoltageProduct(); 
            cy.clickAddProduc()
            GeralPedidosPage.changeBranchInvoicing()
            GeralPedidosPage.compositionKit()
            cy.clickAddProduct();
            Service.validateModalServLinked(); 
            Service.clickOKServiceLinked();
            AvancarPage.toTransporter();
            AvancarPage.toInstallments()
            GeralPagamentoPage.clickGenerateInstallments(); 
            GeralPagamentoPage.loadingFormPayment();
            ProcessoRecebPage.main();
            ParcelasPage.duas()
            AvancarPage.final();
            cy.clickFinalizarPedidoPage();
            cy.validateOrderGenerated();
        })
    })

    context('Remote order without remote balance, get CD', () => {

        it('4.Remote order - with balance in CD (branch 1) - should allow making the order - (Remote sale of product without balance in the invoicing branch, but with balance in the invoicing branch CD - with delivery)', () => {

            Product.remoteWithCD()
            ValidateBalance.withBalance();
            cy.clickVoltageProduct();
            cy.clickAddProduc()
            GeralPedidosPage.changeBranchInvoicing()
            cy.clickAddProduct();
            Service.validateModalServLinked(); 
            Service.clickOKServiceLinked();
            AvancarPage.toTransporter();
            AvancarPage.toInstallments()
            GeralPagamentoPage.clickGenerateInstallments(); 
            GeralPagamentoPage.loadingFormPayment();
            ProcessoRecebPage.main();
            ParcelasPage.duas()
            AvancarPage.final();
            cy.clickFinalizarPedidoPage();
            cy.validateOrderGenerated();
        })    

        it('5.Remote order - without balance in CD (branch 1) - should NOT allow making the order - (Remote sale of product without balance in the invoicing branch, without balance of the invoicing branch CD)', () => {

            Product.remoteWithoutCD()
            ValidateBalance.withoutBalance() 
            cy.clickVoltageProduct();
            cy.clickAddProduc()
            GeralPedidosPage.changeBranchInvoicing()

            //Validando mensagem "Este produto não possui saldo na filial selecionada."
            cy.get('[ng-if="semSaldoCD"][style=""] > p')
                .should('exist')
                .and('be.visible')
                .and('have.text','Este produto não possui saldo na filial selecionada.')
                .invoke('css', 'color') // Obtém a cor do elemento
                .should('equal', 'rgb(244, 67, 54)')

            //Validando mensagem "Este produto não possui saldo na filial selecionada, será permitido apenas a simulação da venda."
            cy.get('[ng-show="(itemGradeSelecionado && itemGradeSelecionado.valor > 0)"] > :nth-child(1) > .mensagem-erro-centralizada > p')
                .should('exist')
                .and('be.visible')
                .and('have.text','Este produto não possui saldo na filial selecionada, será permitido apenas a simulação da venda.')
                .invoke('css', 'color') // Obtém a cor do elemento
                .should('equal', 'rgb(244, 67, 54)')  

            //Validando botão Adicionar para Simulação
            cy.get('.md-primary.btn-rounded.md-raised.btn-block')
                .should('exist')
                .and('not.be.disabled')
                .and('contain',' Adicionar para Simulação')
        })    
    })
})