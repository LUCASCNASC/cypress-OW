import { ProcessoVendaPage } from '../../../pages/pedido/processos/ProcessoVendaPage.js'
import { AvancarPage } from '../../../pages/pedido/AvancarPage.js'
import { EntregaPage, TirarEntrega } from '../../../pages/pedido/EntregaPage.js'
import { GeralPagamentoPage } from '../../../pages/pedido/GeralPagamentoPage.js'
import { ParcelasPage } from '../../../pages/pedido/ParcelasPage.js'
import { ProcessoRecebPage } from '../../../pages/pedido/ProcessoRecebPage.js'
import { PedExclusiva } from '../../../pages/pedido/PedidoExclusivaPage.js'
import { ProductExclusiva, ValidateBalance } from '../../../pages/pedido/ProdutoPage.js'
import { GeralPedidosPage } from '../../../pages/pedido/GeralPedidosPage.js'
import { Service } from '../../../pages/pedido/ServicosPage.js'

//Para testarmos esses cenários, é necessário mudar para a versão da exclusiva e criar um agendamento na filial que está sendo usada
describe('Pedidos Exclusiva - Parâmetro de empresa 1019 marcado', () => {

    beforeEach(() => {
        cy.visit('/')
        cy.clearAllSessionStorage()
        cy.login()
        cy.urlAposLogin()
        cy.tituloPagina()
        ProcessoVendaPage.NFe() 
        cy.chooseCliente()
    })

    context('Configuração de processo - Exclusiva: 36 = 2; 139 = 6; 552= 5 dias', () => {

        it('1.Pedido: produto normal (com saldo e com entrega, 15 dias) e um kit remoto (2 composições, sem saldo e sem a receber, 20 dias).', () => {

            ProductExclusiva.firstNormal()
            ValidateBalance.withBalance() 
            cy.selectProductSearch()
            cy.clickVoltageProduct()
            cy.clickAddProduct()
            Service.validateModalServLinked() 
            Service.clickOKServiceLinked()
            ProductExclusiva.kitWithoutBalanceScheduling() 
            ValidateBalance.withoutBalance() 
            cy.clickVoltageProduct()
            cy.clickAddProduc()
            GeralPedidosPage.trocarFilialFaturamento()
            cy.clickAddProduct()
            AvancarPage.toTransporter()
            EntregaPage.modalInconsApenasTransp()
            EntregaPage.escolherTransportadora()
            AvancarPage.toInstallments()
            GeralPagamentoPage.clickGenerateInstallments() 
            GeralPagamentoPage.carregandoFormaPagamento()
            ProcessoRecebPage.main()
            ParcelasPage.two()
            AvancarPage.final()
            cy.clickFinalizarPedidoPage()
            cy.validateOrderGenerated()
        })

        it('2.Pedido: produto normal (com saldo e com entrega) e um kit com composição 6 volumes (data atual + parametro 552/ 5 dias).', () => {

            ProductExclusiva.firstNormal()
            ValidateBalance.withBalance() 
            cy.selectProductSearch()
            cy.clickVoltageProduct()
            cy.clickAddProduct()
            Service.validateModalServLinked() 
            Service.clickOKServiceLinked()
            ProductExclusiva.kitVolumes() 
            ValidateBalance.withBalance() 
            cy.selectProductSearch()
            cy.clickVoltageProduct()
            cy.clickAddProduct()
            AvancarPage.toTransporter()
            EntregaPage.modalInconsApenasTransp()
            EntregaPage.escolherTransportadora()
            AvancarPage.toInstallments()
            GeralPagamentoPage.clickGenerateInstallments() 
            GeralPagamentoPage.carregandoFormaPagamento()
            ProcessoRecebPage.main()
            ParcelasPage.two()
            AvancarPage.final()
            cy.clickFinalizarPedidoPage()
            cy.validateOrderGenerated()
        })
    })

    context('Configuração de processo - Exclusiva: 36 = 2; 139 = 6; 552= 5 dias', () => {

        it('3.Pedido: produto (sem saldo e com saldo a receber para 10 dias, e com entrega), e ter um agendamento para a data de previsão.', () => {

            ProductExclusiva.balanceReceive()
            ValidateBalance.withBalance() 
            cy.selectProductSearch()
            cy.clickVoltageProduct()
            cy.clickAddProduct()
            Service.validateModalServLinked() 
            Service.clickOKServiceLinked()
            AvancarPage.toTransporter()
            EntregaPage.modalInconsApenasTransp()
            EntregaPage.escolherTransportadora()
            AvancarPage.toInstallments()
            GeralPagamentoPage.clickGenerateInstallments() 
            GeralPagamentoPage.carregandoFormaPagamento()
            ProcessoRecebPage.main()
            ParcelasPage.two()
            AvancarPage.final()
            cy.clickFinalizarPedidoPage()
            cy.validateOrderGenerated()
        })

        it('4.Pedido: produto em duas linhas (um com 5 unidades a receber e 10 para solicitar compra), e ter um agendamento para a data de previsão para a receber.', () => {

            ProductExclusiva.balanceReceiveTwoLines()
            PedExclusiva.balanceRemoteReceive()
            cy.clickVoltageProduct()
            cy.clickAddProduc() 
            GeralPedidosPage.trocarFilialFaturamento()
            PedExclusiva.increaseAmountSaleFive()
            cy.selectProductSearch()
            ProductExclusiva.balanceReceiveTwoLines() 
            PedExclusiva.balanceRemoteReceive()
            cy.clickVoltageProduct() 
            cy.clickAddProduct()
            GeralPedidosPage.trocarFilialFaturamento()
            PedExclusiva.increaseAmountSaleTen()
        })

        it('5.Pedido: venda normal: produto 1896 0 0 (sem entrega)', () => {
    
            ProductExclusiva.firstNormal() 
            ValidateBalance.withBalance() 
            cy.selectProductSearch()
            cy.clickVoltageProduct()
            cy.clickAddProduct()
            Service.validateModalServLinked() 
            Service.clickOKServiceLinked()
            TirarEntrega.freightFirst() 
            AvancarPage.toInstallments()
            GeralPagamentoPage.clickGenerateInstallments() 
            GeralPagamentoPage.loadingFormPayment()
            ProcessoRecebPage.main()
            ParcelasPage.two()
            AvancarPage.final()
            cy.clickFinalizarPedidoPage()
            cy.validateOrderGenerated()
        })
    })
})