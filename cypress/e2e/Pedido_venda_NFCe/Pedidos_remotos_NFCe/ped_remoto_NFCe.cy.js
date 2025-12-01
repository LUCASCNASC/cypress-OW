import { ProcessoVendaPage } from '../../../pages/pedido/processos/ProcessoVendaPage.js'
import { Product, ValidateBalance } from '../../../pages/pedido/ProdutoPage.js'
import { Service } from '../../../pages/pedido/ServicosPage.js'
import { AvancarPage } from '../../../pages/pedido/AvancarPage.js'
import { EntregaPage } from '../../../pages/pedido/EntregaPage.js'
import { GeralPagamentoPage } from '../../../pages/pedido/pagamento/GeralPagamentoPage.js'
import { ParcelasPage } from '../../../pages/pedido/pagamento/ParcelasPage.js'
import { ProcessoRecebPage } from '../../../pages/pedido/processos/ProcessoRecebPage.js'
import { GeralPedidosPage } from '../../../pages/pedido/GeralPedidosPage.js'

describe('Remoto/processo 9890 - Regra de saldo Parâmetro 36 = 4 - Parâmetro 139 = 4 - Trial 653 não configurado', () => {

    beforeEach(() => {
        cy.visit('/')
        cy.clearAllSessionStorage()
        cy.login()
        cy.urlAposLogin()
        cy.tituloPagina() 
        ProcessoVendaPage.NFCe() //processo normal
        cy.chooseCliente()
    })
  
    context('Pedido de venda remoto normal', () => {

        it('1.Pedido remoto: produto 1860 0 0 - (Venda remota de produto com saldo na filial do faturamento )', () => {

            Product.fisrt() //PRODUTO
            ValidateBalance.withBalance() //VALIDAR SALDO
            cy.clickVoltageProduct()
            cy.clickAddProduc()
            GeralPedidosPage.changeBranchInvoicing()
            cy.clickAddProduct()
            Service.validateModalServLinked() //SERVICOS
            Service.clickOKServiceLinked()
            AvancarPage.toTransporter()
            EntregaPage.chooseTransporter()
            AvancarPage.installmentDelivery()
            GeralPagamentoPage.clickGenerateInstallments() //GERAR PARCELAS
            GeralPagamentoPage.loadingFormPayment()
            ProcessoRecebPage.main()
            ParcelasPage.two()
            AvancarPage.final()
            cy.clickFinalizarPedidoPage() //FINALIZAR PEDIDO
            cy.validateOrderGenerated()
        })

        it('2.Pedido remota: produtos 1860 0 0 e 1870 0 0', () => {

            Product.fisrt() //PRODUTO
            ValidateBalance.withBalance() //VALIDAR SALDO
            cy.clickVoltageProduct()
            cy.clickAddProduc()
            GeralPedidosPage.changeBranchInvoicing()
            cy.clickAddProduct()
            Service.validateModalServLinked() //SERVICOS
            Service.clickOKServiceLinked()
            Product.second() //PRODUTO
            ValidateBalance.withBalance() //VALIDAR SALDO
            cy.clickVoltageProduct()
            cy.clickAddProduc()
            GeralPedidosPage.changeBranchInvoicing()
            cy.clickAddProduct()
            Service.validateModalServLinked() //SERVICOS
            Service.clickOKServiceLinked()
            AvancarPage.toTransporter()
            EntregaPage.chooseTransporter()
            AvancarPage.installmentDelivery()
            GeralPagamentoPage.clickGenerateInstallments() //GERAR PARCELAS
            GeralPagamentoPage.loadingFormPayment()
            ProcessoRecebPage.main()
            ParcelasPage.two()
            AvancarPage.final()
            cy.clickFinalizarPedidoPage() //FINALIZAR PEDIDO
            cy.validateOrderGenerated()
        })
        
        it('3.Pedido remoto: kit 1877 0 0', () => {

            Product.kitRemote() //PRODUTO
            ValidateBalance.withBalance() //VALIDAR SALDO
            cy.clickVoltageProduct()
            cy.clickAddProduc()
            GeralPedidosPage.changeBranchInvoicing()
            GeralPedidosPage.composicaoDesteKit()
            cy.clickAddProduct()
            Service.validateModalServLinked() //SERVICOS
            Service.clickOKServiceLinked()
            AvancarPage.toTransporter()
            EntregaPage.chooseTransporter()
            AvancarPage.installmentDelivery()
            GeralPagamentoPage.clickGenerateInstallments() //GERAR PARCELAS
            GeralPagamentoPage.loadingFormPayment()
            ProcessoRecebPage.main()
            ParcelasPage.two()
            AvancarPage.final()
            cy.clickFinalizarPedidoPage() //FINALIZAR PEDIDO
            cy.validateOrderGenerated()
        })
    })
    
    context('Pedido de venda remoto sem saldo remoto, pegar CD', () => {

        it('4.Pedido remoto - com saldo no CD (filial 1) - deve permitir fazer o pedido - (Venda remota de produto (1883 0 0) sem saldo na filial do faturamento, mas com saldo no CD do faturamento - com entrega)', () => {

            Product.remoteWithCD() //PRODUTO
            ValidateBalance.withBalance() //VALIDAR SALDO
            cy.clickVoltageProduct()
            cy.clickAddProduc()
            GeralPedidosPage.changeBranchInvoicing()
            cy.clickAddProduct()
            Service.validateModalServLinked() //SERVICOS
            Service.clickOKServiceLinked()
            AvancarPage.toTransporter()
            EntregaPage.chooseTransporter()
            AvancarPage.installmentDelivery()
            GeralPagamentoPage.clickGenerateInstallments() //GERAR PARCELAS
            GeralPagamentoPage.loadingFormPayment()
            ProcessoRecebPage.main()
            ParcelasPage.two()
            AvancarPage.final()
            cy.clickFinalizarPedidoPage() //FINALIZAR PEDIDO
            cy.validateOrderGenerated()
        })    
        
        it('5.Pedido remoto - SEM saldo no CD (filial 1) - NÃO deve permitir fazer o pedido - (Venda remota de produto (1882 0 0) sem saldo na filial do faturamento, sem saldo da CD do faturamento)', () => {

            Product.remoteWithoutCD() //PRODUTO
            ValidateBalance.withBalance() //VALIDAR SALDO
            cy.clickVoltageProduct()
            cy.clickAddProduc()
            GeralPedidosPage.changeBranchInvoicing()

            //Validando mensagem "Este produto não possui saldo na filial selecionada."
            cy.get('[ng-if=""][style=""] > p')
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