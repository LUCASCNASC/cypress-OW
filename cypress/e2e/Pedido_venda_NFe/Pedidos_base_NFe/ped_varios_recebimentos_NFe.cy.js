import { ProcessoVendaPage } from '../../../pages/pedido/processos/ProcessoVendaPage.js'
import { Product, ValidateBalance } from '../../../pages/pedido/ProdutoPage.js'
import { Service } from '../../../pages/pedido/ServicosPage.js'
import { AvancarPage } from '../../../pages/pedido/AvancarPage.js'
import { TirarEntrega } from '../../../pages/pedido/EntregaPage.js'
import { GeralPagamentoPage } from '../../../pages/pedido/pagamento/GeralPagamentoPage.js'
import { ParcelasPage } from '../../../pages/pedido/pagamento/ParcelasPage.js'
import { AgruparRecebPage } from '../../../pages/pedido/pagamento/AgruparRecebPage.js'
import { ProcessoRecebPage } from '../../../pages/pedido/processos/ProcessoRecebPage.js'

describe('Gerar pedido com mais de uma forma de pagamento', () => {

    beforeEach(() => {
        cy.visit('/')
        cy.clearAllSessionStorage()
        cy.login()
        cy.urlAposLogin()
        cy.tituloPagina()
        ProcessoVendaPage.NFe() //processo normal
        cy.chooseCliente()
    })

    context('Sem entrega/ processo 9860 - caminho feliz', () => {

        it('1.Pedido: produto 1860 0 0 - duas formas de pagamento 3871 e 3860', () => {

            Product.fisrt()
            ValidateBalance.withBalance() //VALIDAR SALDO
            cy.selectProductSearch()
            cy.clickVoltageProduct()
            cy.clickAddProduc()
            Service.validateModalServLinked() //SERVICOS
            Service.clickOKServiceLinked()
            TirarEntrega.freightFirst() //ENTREGA
            AvancarPage.toInstallments()
            AgruparRecebPage.firstValueInstallment() //COLOCAR VALOR DA PRIMEIRA FORMA DE PAGAMENTO
            GeralPagamentoPage.clickGenerateInstallments() //GERAR PARCELAS - PRIMEIRA FORMA DE PAGAMENTO
            GeralPagamentoPage.carregandoFormaPagamento()
            ProcessoRecebPage.debitTEF()
            ParcelasPage.one()
            GeralPagamentoPage.clickGenerateInstallments() //GERAR PARCELAS - SEGUNDA FORMA DE PAGAMENTO
            GeralPagamentoPage.carregandoFormaPagamento()
            ProcessoRecebPage.main() //SEGUNDA FORMA DE PAGAMENTO
            ParcelasPage.two()
            AvancarPage.final()
            cy.clickFinalizarPedidoPage()
            cy.validateOrderGenerated()
        })

        it('2.Pedido: produto 1860 0 0 - com entrada (3861) e outra forma de pagamento (3860)', () => {

            Product.fisrt()
            ValidateBalance.withBalance() //VALIDAR SALDO
            cy.selectProductSearch()
            cy.clickVoltageProduct()
            cy.clickAddProduc()
            Service.validateModalServLinked() //SERVICOS
            Service.clickOKServiceLinked()
            TirarEntrega.freightFirst() //ENTREGA
            AvancarPage.toInstallments()
            GeralPagamentoPage.chooseEntryFormPayment()
            GeralPagamentoPage.clicarGerarPagamento()
            GeralPagamentoPage.clickGenerateInstallments() //GERAR PARCELAS - SEGUNDA FORMA DE PAGAMENTO
            GeralPagamentoPage.carregandoFormaPagamento()
            ProcessoRecebPage.main() //SEGUNDA FORMA DE PAGAMENTO
            ParcelasPage.two()
            AvancarPage.final()
            cy.clickFinalizarPedidoPage()
            cy.validateOrderGenerated()
        })

        it('3.Pedido: produto 1860 0 0 - duas formas de pagamento iguais (3860) - clicar para NÃO agrupar', () => {

            Product.fisrt()
            ValidateBalance.withBalance() //VALIDAR SALDO
            cy.selectProductSearch()
            cy.clickVoltageProduct()
            cy.clickAddProduc()
            Service.validateModalServLinked() //SERVICOS
            Service.clickOKServiceLinked()
            TirarEntrega.freightFirst() //ENTREGA
            AvancarPage.toInstallments()
            AgruparRecebPage.firstValueInstallment() //COLOCAR VALOR DA PRIMEIRA FORMA DE PAGAMENTO
            GeralPagamentoPage.clickGenerateInstallments() //GERAR PARCELAS - PRIMEIRA FORMA DE PAGAMENTO
            GeralPagamentoPage.carregandoFormaPagamento()
            ProcessoRecebPage.main()
            ParcelasPage.one()
            GeralPagamentoPage.clickGenerateInstallments() //GERAR PARCELAS - SEGUNDA FORMA DE PAGAMENTO
            GeralPagamentoPage.carregandoFormaPagamento()
            ProcessoRecebPage.main() //SEGUNDA FORMA DE PAGAMENTO
            ParcelasPage.one()
            AgruparRecebPage.notGroupReleases()
            AvancarPage.final()
            cy.clickFinalizarPedidoPage()
            cy.validateOrderGenerated()
        })

        it('4.Pedido: produto 1860 0 0 - duas formas de pagamento iguais (3860) - clicar para SIM agrupar', () => {

            Product.fisrt()
            ValidateBalance.withBalance() //VALIDAR SALDO
            cy.selectProductSearch()
            cy.clickVoltageProduct()
            cy.clickAddProduc()
            Service.validateModalServLinked() //SERVICOS
            Service.clickOKServiceLinked()
            TirarEntrega.freightFirst() //ENTREGA
            AvancarPage.toInstallments()
            AgruparRecebPage.firstValueInstallment() //COLOCAR VALOR DA PRIMEIRA FORMA DE PAGAMENTO
            GeralPagamentoPage.clickGenerateInstallments() //GERAR PARCELAS - PRIMEIRA FORMA DE PAGAMENTO
            GeralPagamentoPage.carregandoFormaPagamento()
            ProcessoRecebPage.main()
            ParcelasPage.one()
            GeralPagamentoPage.clickGenerateInstallments() //GERAR PARCELAS - SEGUNDA FORMA DE PAGAMENTO
            GeralPagamentoPage.carregandoFormaPagamento()
            ProcessoRecebPage.main() //SEGUNDA FORMA DE PAGAMENTO
            ParcelasPage.one()
            AgruparRecebPage.groupReleases()
            AvancarPage.final()
            cy.clickFinalizarPedidoPage()
            cy.validateOrderGenerated()
        })

        it('5.Pedido: produto 1860 0 0 - duas formas de pagamento iguais (3860) - clicar para NÃO agrupar, mas logo em seguida agrupar selecionando os dois.', () => {

            Product.fisrt()
            ValidateBalance.withBalance() //VALIDAR SALDO
            cy.selectProductSearch()
            cy.clickVoltageProduct()
            cy.clickAddProduc()
            Service.validateModalServLinked() //SERVICOS
            Service.clickOKServiceLinked()
            TirarEntrega.freightFirst() //ENTREGA
            AvancarPage.toInstallments()
            AgruparRecebPage.firstValueInstallment() //COLOCAR VALOR DA PRIMEIRA FORMA DE PAGAMENTO
            GeralPagamentoPage.clickGenerateInstallments() //GERAR PARCELAS - PRIMEIRA FORMA DE PAGAMENTO
            GeralPagamentoPage.carregandoFormaPagamento()
            ProcessoRecebPage.main()
            ParcelasPage.one()
            GeralPagamentoPage.clickGenerateInstallments() //GERAR PARCELAS - SEGUNDA FORMA DE PAGAMENTO
            GeralPagamentoPage.carregandoFormaPagamento()
            ProcessoRecebPage.main() //SEGUNDA FORMA DE PAGAMENTO
            ParcelasPage.one()
            AgruparRecebPage.notGroupReleases()
            AgruparRecebPage.selectReleasesGroup()
            AgruparRecebPage.clickGroup()
            AvancarPage.final()
            cy.clickFinalizarPedidoPage()
            cy.validateOrderGenerated()
        })
    })
})