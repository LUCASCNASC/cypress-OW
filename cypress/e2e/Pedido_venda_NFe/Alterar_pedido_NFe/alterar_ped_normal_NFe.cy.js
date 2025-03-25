import { ProcessoVenda } from '../../../../pages/para_pedidos/processos/processo_venda.js'
import { EscolherCliente } from '../../../../pages/para_pedidos/cliente/cliente.js'
import { Produto } from '../../../../pages/produtos/prd_normal.js'
import { ValidarSaldo } from '../../../../pages/para_pedidos/saldo/validar_saldo.js'
import { Servico } from '../../../../pages/para_pedidos/servicos/valida_servicos_adicionados.js'
import { AvancarAlterar } from '../../../../pages/para_pedidos/botoes/avancar/avancar_alterar.js'
import { FinalizarPed } from '../../../../pages/para_pedidos/finalizar_pedido.js'
import { TirarEntrega } from '../../../../pages/para_pedidos/entrega/tirar_entrega.js'
import { GeralPagamento } from '../../../../pages/para_pedidos/pagamento/geral_pagamento.js'
import { EscolherParcelaReceb } from '../../../../pages/para_pedidos/pagamento/parcelas.js'
import { Recebimento } from '../../../../pages/para_pedidos/processos/processo_recebimento.js'
import { AlterarPedido } from '../../../../pages/para_pedidos//para_alterar_pedido.js'

describe('Gerar pedido normal, entrar alterando, modificar e salvar.', () => {

    beforeEach(() => {
        cy.visit('/')
        cy.clearAllSessionStorage()
        cy.login()
        cy.urlAposLogin()
        cy.tituloPagina()
        ProcessoVenda.NFe()
        EscolherCliente.withRoute()
    })

    context('Sem entrega/ processo 9860 - caminho feliz', () => {

        it.skip('1. Gerar pedido, alterar aumentando quantidade de produto e adicionando outro produto e um kit.', () => {

            Produto.fisrt() //PRODUTO
            ValidarSaldo.comSaldo()
            cy.selectProductSearch()
            cy.clickVoltageProduct()
            cy.clickAddProduct()
            Servico.validarModalServVinc() //SERVICOS
            Servico.clicarOKServVinc()
            TirarEntrega.freightFirst() //ENTREGA PRODUTO
            AvancarAlterar.toInstallmentsAlter()
            GeralPagamento.clickGenerateInstallments() //GERAR PARCELAS
            GeralPagamento.loadingFormPayment()
            Recebimento.principal() //PROCESSO INCLUSÃO
            EscolherParcelaReceb.two()
            AvancarAlterar.finalAlter()
            FinalizarPed.clicarFinalizarPed() //RESUMO
            FinalizarPed.validarPedGerado()
            AlterarPedido.okPedGerado()

            AlterarPedido.iconeMenuOpcoesPed() //ALTERAÇÃO PEDIDO WEB
            AlterarPedido.pediPendOpcaoMenuPed() //PEDIDOS PENDENTES
            AlterarPedido.escolherPedPend()
            AlterarPedido.clicarDetalhes()
            AlterarPedido.clicarEditPed()

            AlterarPedido.clicarAumentoQtdPrd() //AUMENTANDO QUANTIDADE DO PRODUTO

            Produto.fisrt() //PRODUTO
            ValidarSaldo.comSaldo()
            cy.selectProductSearch()
            cy.clickVoltageProduct()
            cy.clickAddProduct()
            TirarEntrega.freightSecond() //ENTREGA - SEGUNDO PRODUTO

            Produto.kitFirst() //PESQUISA PRODUTO - KIT
            ValidarSaldo.comSaldo()
            cy.selectProductSearch()
            cy.clickVoltageProduct()
            cy.clickAddProduct()
            Servico.clicarOKServVinc()
            TirarEntrega.freightThird()
            AvancarAlterar.toInstallmentsAlter()

            GeralPagamento.clickGenerateInstallAlterDue() //GERAR PARCELAS
            AlterarPedido.escolherFormaPagPrincipalAlt()
            EscolherParcelaReceb.two()
            AvancarAlterar.finalAlter()
            FinalizarPed.clicarFinalizarPed() //PROCESSO INCLUSÃO
            FinalizarPed.validarPedAlteradoSucesso()
        })

        it.skip('2. Gerar pedido, alterar removendo o produto e adicionando outros dois.', () => {

            Produto.fisrt() //PRODUTO
            ValidarSaldo.comSaldo()
            cy.selectProductSearch()
            cy.clickVoltageProduct()
            cy.clickAddProduct()
            Servico.validarModalServVinc() //SERVICOS
            Servico.clicarOKServVinc()
            TirarEntrega.freightFirst() //ENTREGA PRODUTO
            AvancarAlterar.toInstallmentsAlter()
            GeralPagamento.clickGenerateInstallments() //GERAR PARCELAS
            GeralPagamento.loadingFormPayment()
            Recebimento.principal()
            EscolherParcelaReceb.two()
            AvancarAlterar.finalAlter()
            FinalizarPed.clicarFinalizarPed() //RESUMO
            FinalizarPed.validarPedGerado()
            AlterarPedido.okPedGerado()

            AlterarPedido.iconeMenuOpcoesPed()  //ALTERAÇÃO PEDIDO WEB
            AlterarPedido.pediPendOpcaoMenuPed() //PEDIDOS PENDENTES
            AlterarPedido.escolherPedPend()
            AlterarPedido.clicarDetalhes()
            AlterarPedido.clicarEditPed()

            AlterarPedido.clicarRemoverPrd()
            AlterarPedido.clicarFecharIntCompra()

            Produto.second() //PRODUTO
            ValidarSaldo.comSaldo()
            cy.selectProductSearch()
            cy.clickVoltageProduct()
            cy.clickAddProduct()
            Servico.validarModalServVinc() //SERVICOS
            Servico.clicarOKServVinc()
            TirarEntrega.freightSecond() //ENTREGA PRODUTO

            Produto.fisrt() //PRODUTO
            ValidarSaldo.comSaldo()
            cy.selectProductSearch()
            cy.clickVoltageProduct()
            cy.clickAddProduct()
            Servico.validarModalServVinc() //SERVICOS
            Servico.clicarOKServVinc()
            TirarEntrega.freightSecond() //ENTREGA PRODUTO
            AvancarAlterar.toInstallmentsAlter()

            GeralPagamento.clickGenerateInstallAlterDue() //GERAR PARCELAS
            GeralPagamento.loadingFormPayment()
            AlterarPedido.escolherFormaPagPrincipalAlt() //PROCESSO INCLUSÃO
            EscolherParcelaReceb.two()
            AvancarAlterar.finalAlter()
            FinalizarPed.clicarFinalizarPed() //FINAL PEDIDO
            FinalizarPed.validarPedAlteradoSucesso()
        })

        //erro de inconsistencia quando colocamos o serviço de entrega
        it.skip('3. Gerar pedido, alterar colocando garantia e entrega.', () => {

            Produto.fisrt() //PRODUTO
            ValidarSaldo.comSaldo()
            cy.selectProductSearch()
            cy.clickVoltageProduct()
            cy.clickAddProduct()
            Servico.validarModalServVinc() //SERVICOS
            Servico.clicarOKServVinc()
            TirarEntrega.freightFirst() //ENTREGA PRODUTO
            AvancarAlterar.toInstallmentsAlter()
            GeralPagamento.clickGenerateInstallments() //GERAR PARCELAS
            GeralPagamento.loadingFormPayment()
            Recebimento.principal() //PROCESSO INCLUSÃO
            EscolherParcelaReceb.two()
            AvancarAlterar.finalAlter()
            FinalizarPed.clicarFinalizarPed() //FINAL PEDIDO
            FinalizarPed.validarPedGerado()
            AlterarPedido.okPedGerado()

            AlterarPedido.iconeMenuOpcoesPed() //ALTERAÇÃO PEDIDO WEB
            AlterarPedido.pediPendOpcaoMenuPed() //PEDIDOS PENDENTES
            AlterarPedido.escolherPedPend()
            AlterarPedido.clicarDetalhes()
            AlterarPedido.clicarEditPed()
            AlterarPedido.addEntrega() 
            AlterarPedido.addServ()
            Servico.garantiaNaoSep() //Marcar Mão de Obra "T.A. MO Destaca e Não Separa"()
            Servico.clicarOKServVinc()
            // AvancarAlterar.toTransporterAlter()
            // AvancarAlterar.installmentDeliveryAlter()
            // GeralPagamento.clickGenerateInstallAlterDue() //GERAR PARCELAS
            // GeralPagamento.loadingFormPayment()
            // escolherFormaPagamentoPrincipalAlterar()
            // EscolherParcelaReceb.two()
            // AvancarAlterar.finalAlter()
            // FinalizarPed.clicarFinalizarPed() //RESUMO
            // FinalizarPed.validarPedAlteradoSucesso()
            
        })
    })

    context('Com entrega/ processo 9860 - caminho feliz', () => {

        it.skip('4. Gerar pedido com frete, alterar forma de pagamento.', () => {
                      
            Produto.fisrt() //PRODUTO
            ValidarSaldo.comSaldo()
            cy.selectProductSearch()
            cy.clickVoltageProduct()
            cy.clickAddProduct()
            Servico.validarModalServVinc() //SERVICOS
            Servico.clicarOKServVinc()
            AvancarAlterar.toTransporterAlter() //TRANSPORTADORA
            AvancarAlterar.installmentDeliveryAlter()
            GeralPagamento.clickGenerateInstallments() //GERAR PARCELAS
            GeralPagamento.loadingFormPayment()
            Recebimento.principal() //PROCESSO INCLUSÃO
            EscolherParcelaReceb.two()
            AvancarAlterar.finalAlter()
            FinalizarPed.clicarFinalizarPed() //FINAL PEDIDO
            FinalizarPed.validarPedGerado()
            AlterarPedido.okPedGerado()

            AlterarPedido.iconeMenuOpcoesPed() //ALTERAÇÃO PEDIDO WEB
            AlterarPedido.pediPendOpcaoMenuPed() //PEDIDOS PENDENTES
            AlterarPedido.escolherPedPend()
            AlterarPedido.clicarDetalhes()
            AlterarPedido.clicarEditPed()
            AvancarAlterar.toTransporterAlter()
            AvancarAlterar.installmentDeliveryAlter()
            AlterarPedido.removerFormaPag()

            GeralPagamento.clickGenerateInstallAlterDue() //GERAR PARCELAS
            Recebimento.segundaForma() //PROCESSO INCLUSÃO
            EscolherParcelaReceb.two()
            AvancarAlterar.finalAlter()
            FinalizarPed.clicarFinalizarPed() //FINAL PEDIDO
            FinalizarPed.validarPedAlteradoSucesso()
        })
    })
})