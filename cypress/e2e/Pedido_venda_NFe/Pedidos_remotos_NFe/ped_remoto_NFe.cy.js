import { ProcessoVendaPage } from '../../../pages/pedidos/ProcessoVendaPage.js'
import { Product, ValidateBalance } from '../../../pages/pedido/ProdutoPage.js'
import { Service } from '../../../pages/pedido/ServicosPage.js'
import { AvancarPage } from '../../../pages/pedido/AvancarPage.js'
import { ProcessoRecebPage } from '../../../pages/pedido/ProcessoRecebPage.js'
import { GeralPedidosPage } from '../../../pages/pedido/GeralPedidosPage.js'
import { GeralPagamentoPage } from '../../../pages/pedido/GeralPagamentoPage.js'
import { ParcelasPage } from '../../../pages/ParcelasPage.js'

//verificar todos
describe('Remoto/processo 9860 - Regra de saldo Parâmetro 36 = 4 - Parâmetro 139 = 4 - Trial 653 não configurado', () => {

    beforeEach(() => {
        cy.visit('/')
        cy.clearAllSessionStorage()
        cy.login()
        cy.urlAposLogin()
        cy.tituloPagina() 
        ProcessoVendaPage.NFe() 
        cy.chooseCliente()
    })
  
    context('Pedido de venda remoto normal', () => {

        it('1.Pedido remoto: produto 1860 0 0 - (Venda remota de produto com saldo na filial do faturamento )', () => {

            Product.fisrt()
            ValidateBalance.withBalance() 
            cy.clickVoltageProduct()
            cy.clickAddProduc()
            GeralPedidosPage.changeBranchInvoicing()
            cy.clickAddProduct()
            Service.validateModalServLinked() 
            Service.clickOKServiceLinked()
            AvancarPage.toTransporter()
            AvancarPage.toInstallments()
            GeralPagamentoPage.clickGenerateInstallments() 
            GeralPagamentoPage.loadingFormPayment()
            ProcessoRecebPage.main()
            ParcelasPage.duas()
            AvancarPage.final()
            cy.clickFinalizarPedidoPage()
            cy.validateOrderGenerated()
        })

        it('2.Pedido remoto: produtos 1860 0 0 e 1870 0 0', () => {

            Product.fisrt()
            ValidateBalance.withBalance() 
            cy.clickVoltageProduct()
            cy.clickAddProduc()
            GeralPedidosPage.changeBranchInvoicing()
            cy.clickAddProduct()
            Service.validateModalServLinked() 
            Service.clickOKServiceLinked()
            Product.freightSecond() 
            ValidateBalance.withBalance() 
            cy.clickVoltageProduct()
            cy.clickAddProduc()
            GeralPedidosPage.changeBranchInvoicing()
            cy.clickAddProduct()
            Service.validateModalServLinked()
            Service.clickOKServiceLinked()
            AvancarPage.toTransporter()
            AvancarPage.toInstallments()
            GeralPagamentoPage.clickGenerateInstallments() 
            GeralPagamentoPage.loadingFormPayment()
            ProcessoRecebPage.main()
            ParcelasPage.duas()
            AvancarPage.final()
            cy.clickFinalizarPedidoPage()
            cy.validateOrderGenerated()
        })
        
        it('3.Pedido remoto: kit 1877 0 0', () => {

            Product.kitRemote()
            ValidateBalance.withBalance()
            cy.clickVoltageProduct() 
            cy.clickAddProduc()
            GeralPedidosPage.changeBranchInvoicing()
            GeralPedidosPage.compositionKit()
            cy.clickAddProduct()
            Service.validateModalServLinked() 
            Service.clickOKServiceLinked()
            AvancarPage.toTransporter()
            AvancarPage.toInstallments()
            GeralPagamentoPage.clickGenerateInstallments() 
            GeralPagamentoPage.loadingFormPayment()
            ProcessoRecebPage.main()
            ParcelasPage.duas()
            AvancarPage.final()
            cy.clickFinalizarPedidoPage()
            cy.validateOrderGenerated()
        })
    })
    
    context('Pedido de venda remoto sem saldo remoto, pegar CD', () => {

        it('4.Pedido remoto - com saldo no CD (filial 1) - deve permitir fazer o pedido - (Venda remota de produto sem saldo na filial do faturamento, mas com saldo no CD do faturamento - com entrega)', () => {

            Product.remoteWithCD()
            ValidateBalance.withBalance() 
            cy.clickVoltageProduct()
            cy.clickAddProduc()
            GeralPedidosPage.changeBranchInvoicing()
            cy.clickAddProduct()
            Service.validateModalServLinked() 
            Service.clickOKServiceLinked()
            AvancarPage.toTransporter()
            AvancarPage.toInstallments()
            GeralPagamentoPage.clickGenerateInstallments() 
            GeralPagamentoPage.loadingFormPayment()
            ProcessoRecebPage.main()
            ParcelasPage.duas()
            AvancarPage.final()
            cy.clickFinalizarPedidoPage()
            cy.validateOrderGenerated()
        })    
        
        it('5.Pedido remoto - SEM saldo no CD (filial 1) - NÃO deve permitir fazer o pedido - (Venda remota de produto sem saldo na filial do faturamento, sem saldo da CD do faturamento)', () => {

            Product.remoteWithoutCD()
            ValidateBalance.withoutBalance() 
            cy.clickVoltageProduct()
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