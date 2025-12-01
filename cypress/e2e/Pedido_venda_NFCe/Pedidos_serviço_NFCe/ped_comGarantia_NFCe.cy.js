import { ProcessoVendaPage } from '../../../pages/pedido/processos/ProcessoVendaPage.js'
import { Product, ValidateBalance } from '../../../pages/pedido/ProdutoPage.js'
import { Service } from '../../../pages/pedido/ServicosPage.js'
import { AvancarPage } from '../../../pages/pedido/AvancarPage.js'
import { EntregaPage } from '../../../pages/pedido/EntregaPage.js'
import { GeralPagamentoPage } from '../../../pages/pedido/pagamento/GeralPagamentoPage.js'
import { ParcelasPage } from '../../../pages/pedido/pagamento/ParcelasPage.js'
import { ProcessoRecebPage } from '../../../pages/pedido/processos/ProcessoRecebPage.js'

describe('Gerar pedidos com Garantia e com entrega', () => {

    beforeEach(() => {
        cy.visit('/')
        cy.clearAllSessionStorage()
        cy.login()
        cy.urlAposLogin()
        cy.tituloPagina() 
        ProcessoVendaPage.NFCe() //processo normal
        cy.chooseCliente()
    })   

    context('Com entrega/processo 9890 - caminho feliz', () => {

        it('1.Pedido: produto 1860 0 0 (com Garantia que separa título no mesmo processo)', () => {
    
            Product.fisrt() //PRODUTO
            ValidateBalance.withBalance() //VALIDAR SALDO
            cy.selectProductSearch()
            cy.clickVoltageProduct()
            cy.clickAddProduct()
            Service.validateModalServLinked() //SERVICOS
            Service.garantiaSepMesmoProc() //Marcar garantia "T.A. Garantia Separa Mesmo Processo"
            Service.clickOKServiceLinked()
            AvancarPage.toTransporter()
            EntregaPage.modalInconsOnlyTransporter() //ESCOLHER TRANSPORTADORA
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

        it('2.Pedido: produto 1860 0 0 (com Garantia que separa título no mesmo processo) e produto 1870 0 0 (sem serviço)', () => {
    
            Product.fisrt() //PRODUTO
            ValidateBalance.withBalance() //VALIDAR SALDO
            cy.selectProductSearch()
            cy.clickVoltageProduct()
            cy.clickAddProduct()
            Service.validateModalServLinked() //SERVICOS
            Service.garantiaSepMesmoProc() //Marcar garantia "T.A. Garantia Separa Mesmo Processo"
            Service.clickOKServiceLinked() //SERVIÇOS
            Product.second() //PRODUTO
            ValidateBalance.withBalance() //VALIDAR SALDO
            cy.selectProductSearch()
            cy.clickVoltageProduct()
            cy.clickAddProduct()
            Service.validateModalServLinked() //SERVICOS
            Service.clickOKServiceLinked()
            AvancarPage.toTransporter()
            EntregaPage.modalInconsOnlyTransporter() //ESCOLHER TRANSPORTADORA
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

        it('3.Pedido: produto 1860 0 0 (com Garantia que não separa título)', () => {
    
            Product.fisrt() //PRODUTO
            ValidateBalance.withBalance() //VALIDAR SALDO
            cy.selectProductSearch()
            cy.clickVoltageProduct()
            cy.clickAddProduct()
            Service.validateModalServLinked() //SERVICOS
            Service.garantiaNaoSep() //Marcar garantia "T.A. Garantia Não Separa"
            Service.clickOKServiceLinked()
            AvancarPage.toTransporter()
            EntregaPage.modalInconsOnlyTransporter() //ESCOLHER TRANSPORTADORA
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

        it('4.Pedido: produto 1860 0 0 (com Garantia que não separa título) e produto 1870 0 0 (sem serviço)', () => {
    
            Product.fisrt() //PRODUTO
            ValidateBalance.withBalance() //VALIDAR SALDO
            cy.selectProductSearch()
            cy.clickVoltageProduct()
            cy.clickAddProduct()
            Service.validateModalServLinked() //SERVICOS
            Service.garantiaNaoSep() //Marcar garantia "T.A. Garantia Não Separa"
            Service.clickOKServiceLinked() //SERVIÇOS
            Product.second() //PRODUTO
            ValidateBalance.withBalance() //VALIDAR SALDO
            cy.selectProductSearch()
            cy.clickVoltageProduct()
            cy.clickAddProduct()
            Service.validateModalServLinked() //SERVICOS
            Service.clickOKServiceLinked()
            AvancarPage.toTransporter()
            EntregaPage.modalInconsOnlyTransporter() //ESCOLHER TRANSPORTADORA
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

        it('5.Pedido: produto 1860 0 0 (com Garantia que separa título em um processo diferente)', () => {
    
            Product.fisrt() //PRODUTO
            ValidateBalance.withBalance() //VALIDAR SALDO
            cy.selectProductSearch()
            cy.clickVoltageProduct()
            cy.clickAddProduct()
            Service.validateModalServLinked() //SERVICOS
            Service.garantiaSepTituloProcDif() //Marcar Garantia separa titulo em um processo diferente
            Service.clickOKServiceLinked()
            AvancarPage.toTransporter()
            EntregaPage.modalInconsOnlyTransporter() //ESCOLHER TRANSPORTADORA
            EntregaPage.escolherTranspochooseTransporterrtadora()
            AvancarPage.installmentDelivery() 
            GeralPagamentoPage.clickGenerateInstallments() //GERAR PARCELAS
            GeralPagamentoPage.loadingFormPayment() 
            ProcessoRecebPage.main()
            ParcelasPage.two()
            AvancarPage.final()
            cy.clickFinalizarPedidoPage() //FINALIZAR PEDIDO
            cy.validateOrderGenerated()
        })

        it('6.Pedido: produto 1860 0 0 (com Garantia que separa título em um processo diferente) e produto 1870 0 0 (sem serviço)', () => {
    
            Product.fisrt() //PRODUTO
            ValidateBalance.withBalance() //VALIDAR SALDO
            cy.selectProductSearch()
            cy.clickVoltageProduct()
            cy.clickAddProduct()
            Service.validateModalServLinked() //SERVICOS
            Service.garantiaSepTituloProcDif() //Marcar Garantia separa titulo em um processo diferente
            Service.clickOKServiceLinked() //SERVIÇOS
            Product.second() //PRODUTO
            ValidateBalance.withBalance() //VALIDAR SALDO
            cy.selectProductSearch()
            cy.clickVoltageProduct()
            cy.clickAddProduct()
            Service.validateModalServLinked() //SERVICOS
            Service.clickOKServiceLinked()
            AvancarPage.toTransporter()
            EntregaPage.modalInconsOnlyTransporter() //ESCOLHER TRANSPORTADORA
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
})