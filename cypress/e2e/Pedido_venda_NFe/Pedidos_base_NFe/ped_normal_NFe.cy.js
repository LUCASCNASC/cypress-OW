import { ProcessoVenda } from '../../../../pages/para_pedidos/processos/processo_venda.js'
import { EscolherCliente } from '../../../../pages/para_pedidos/cliente/cliente.js'
import { Produto } from '../../../../pages/produtos/prd_normal.js'
import { ValidarSaldo } from '../../../../pages/para_pedidos/saldo/validar_saldo.js'
import { Servico } from '../../../../pages/para_pedidos/servicos/valida_servicos_adicionados.js'
import { AvancarNormal } from '../../../../pages/para_pedidos/botoes/avancar/avancar_normal.js'
import { FinalizarPed } from '../../../../pages/para_pedidos/finalizar_pedido.js'
import { TirarEntrega } from '../../../../pages/para_pedidos/entrega/tirar_entrega.js'
import { GeralPagamento } from '../../../../pages/para_pedidos/pagamento/geral_pagamento.js'
import { EscolherParcelaReceb } from '../../../../pages/para_pedidos/pagamento/parcelas.js'
import { GeralPagamento } from '../../../../pages/para_pedidos/pagamento/geral_pagamento.js'
import { Recebimento } from '../../../../pages/para_pedidos/processos/processo_recebimento.js'


describe('Gerar pedido normal', () => {

    beforeEach(() => {
        cy.visit('/')
        cy.clearAllSessionStorage()
        cy.login()
        cy.urlAposLogin()
        cy.tituloPagina()
        ProcessoVenda.NFe()
        EscolherCliente.withRoute()
        Produto.fisrt() //PRODUTO
        ValidarSaldo.withBalance()
        cy.selectProductSearch()
    })

    context('Sem entrega/ processo 9860 - caminho feliz', () => {

        it('1. Ped venda: produto 1860 0 0 - (Venda local de produto com saldo - sem entrega)', () => {

            cy.clickVoltageProduct()
            cy.clickAddProduc()
            Servico.validateModalServLinked() //SERVICOS
            Servico.clickOKServiceLinked()
            TirarEntrega.freightFirst() //ENTREGA
            AvancarNormal.toInstallments()
            GeralPagamento.clickGenerateInstallments() //GERAR PARCELAS
            GeralPagamento.loadingFormPayment()
            Recebimento.main()
            EscolherParcelaReceb.two()
            AvancarNormal.final()
            FinalizarPed.clicarFinalizarPed() //RESUMO
            FinalizarPed.validarPedGerado()
        })

        it('2. Ped venda: produtos 1860 0 0 e 1870 0 0', () => {
                      
            cy.clickVoltageProduct()
            cy.clickAddProduc()
            Servico.validateModalServLinked() //SERVICOS
            Servico.clickOKServiceLinked()
            TirarEntrega.freightFirst() //ENTREGA
            Produto.second() //PRODUTO
            ValidarSaldo.withBalance()
            cy.selectProductSearch()
            cy.clickVoltageProduct()
            cy.clickAddProduct()
            Servico.validateModalServLinked() //SERVICOS
            Servico.clickOKServiceLinked()
            TirarEntrega.freightSecond() //ENTREGA - SEGUNDO PRODUTO
            AvancarNormal.toInstallments()
            GeralPagamento.clickGenerateInstallments() //GERAR PARCELAS
            GeralPagamento.loadingFormPayment()
            Recebimento.main()
            EscolherParcelaReceb.two()
            AvancarNormal.final()
            FinalizarPed.clicarFinalizarPed() //RESUMO
            FinalizarPed.validarPedGerado()
        })

        it('3. Ped venda: produto 1860 0 0 - (Pedido de venda sem entrega. Com Entrada + parcelamento.)', () => {

            cy.clickVoltageProduct()
            cy.clickAddProduc()
            Servico.validateModalServLinked() //SERVICOS
            Servico.clickOKServiceLinked()
            TirarEntrega.freightFirst() //ENTREGA
            AvancarNormal.toInstallments()
            GeralPagamento.chooseEntryFormPayment() //GERAR PARCELAS
            GeralPagamento.clickGeneratePayment()
            GeralPagamento.clickGenerateInstallments()
            GeralPagamento.loadingFormPayment()
            Recebimento.main()
            EscolherParcelaReceb.one()
            AvancarNormal.final()
            FinalizarPed.clicarFinalizarPed() //RESUMO
            FinalizarPed.validarPedGerado()
        })
    })

    context('Com entrega/ processo 9860 - caminho feliz', () => {

        it('4. Ped venda: produto 1860 0 0 - (Venda local de produto com saldo - com entrega)', () => {
                      
            cy.clickVoltageProduct()
            cy.clickAddProduc()
            Servico.validateModalServLinked() //SERVICOS
            Servico.clickOKServiceLinked()
            AvancarNormal.toTransporter()
            AvancarNormal.toInstallments()
            GeralPagamento.clickGenerateInstallments() //GERAR PARCELAS
            GeralPagamento.loadingFormPayment()
            Recebimento.main() 
            EscolherParcelaReceb.two()
            AvancarNormal.final()
            FinalizarPed.clicarFinalizarPed() //RESUMO
            FinalizarPed.validarPedGerado()
        })

        it('5. Ped venda: produtos 1860 0 0 e 1870 0 0', () => {
                      
            cy.clickVoltageProduct()
            cy.clickAddProduc()
            Servico.validateModalServLinked() //SERVICOS
            Servico.clickOKServiceLinked()
            Produto.second() //PRODUTO
            ValidarSaldo.withBalance()
            cy.selectProductSearch()
            cy.clickVoltageProduct()
            cy.clickAddProduct()
            Servico.validateModalServLinked() //SERVICOS
            Servico.clickOKServiceLinked()
            AvancarNormal.toTransporter()
            AvancarNormal.toInstallments()
            GeralPagamento.clickGenerateInstallments() //GERAR PARCELAS
            GeralPagamento.loadingFormPayment()
            Recebimento.main() 
            EscolherParcelaReceb.two()
            AvancarNormal.final()
            FinalizarPed.clicarFinalizarPed() //RESUMO
            FinalizarPed.validarPedGerado()
        })

        it('6. Ped venda: produto 1860 0 0 - (Pedido de venda com entrega. Com Entrada + parcelamento.)', () => {
                      
            cy.clickVoltageProduct()
            cy.clickAddProduc()
            Servico.validateModalServLinked() //SERVICOS
            Servico.clickOKServiceLinked()
            AvancarNormal.toTransporter()
            AvancarNormal.toInstallments()
            GeralPagamento.chooseEntryFormPayment() //GERAR PARCELAS
            GeralPagamento.clickGeneratePayment()
            GeralPagamento.clickGenerateInstallments()
            GeralPagamento.loadingFormPayment()
            Recebimento.main() 
            EscolherParcelaReceb.two()
            AvancarNormal.final()
            FinalizarPed.clicarFinalizarPed() //RESUMO
            FinalizarPed.validarPedGerado()
        })
    })
})