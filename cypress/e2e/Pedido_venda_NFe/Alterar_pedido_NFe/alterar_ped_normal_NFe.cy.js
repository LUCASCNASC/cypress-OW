import { saldodisponivel, clienteComRota, composicaoDesteKit }  from '../../../support/para_pedidos/gerais_pedidos.js';
import { produtoNormalPrimeiro, produtoNormalSegundo, produtoKitPrimeiro, escolherProdutoPesquisaNormalPrimeiro, 
         escolherVoltagemProdutoNormalPrimeiro, escolherProdutoPesquisaNormalSegundo, escolherVoltagemProdutoNormalSegundo, 
         escolherProdutoKitPrimeiro, escolherVoltagemProdutoKitPrimeiro, clicarAddProdutoNormalPrimeiro, clicarAddProdutoNormalSegundo, 
         clicarAddProdutoKitPrimeiro } from '../../../support/para_pedidos_NFe/NFe_prd_normal.js';
import { okPedidoGerado, iconeMenuOpcoesPed, pedidosPendentesOpcaoMenuPed, escolherPedidoPendente, clicarDetalhes, clicarEditarPedido, 
         menssCarregarPedAlterar, clicarAumentoQtdProduto, clicarRemoverProduto, clicarFecharIntencaoCompra, removerFormaPagamento, 
         adicionarEntrega, adicionarServico, botaoGerarParcelasAlterar, escolherFormaPagamentoPrincipalAlterar } from '../../../support/para_pedidos/para_alterar_pedido.js';
import { arrastarFormaPagamento } from '../../../support/para_pedidos/para_pedido_desconto.js';
import { garantiaSeparaMesmoProcesso, modalServicosVinculados, okServicosVinculados } from '../../../support/para_pedidos/apenas_servicos.js';
import { botaoGerarParcelas, escolherFormaPagamentoPrincipal, escolherSegundaFormaPagamento, carregandoFormaPagamento,
         escolherEntradaFormaPagamento, clicarGerarPagamento, escolherUmaParcelaPagamento, escolherDuasParcelaPagamento } from '../../../support/para_pedidos/apenas_formas_pagamento.js';
import { botaoFinalizarPedido, pedidoGerado, pedidoAlteradoSucesso } from '../../../support/para_pedidos/apenas_finalizar_pedido.js';
import { processoVendaNFe } from '../../../support/para_pedidos/apenas_processos_venda.js';
import { avancarParaParcelas, avancarFinal, avancarParaTransportadora, avancarParcelasEntrega, avancarParaParcelasAlterar,
         avancarFinalAlterar, avancarParaTransportadoraAlterar, avancarParcelasEntregaAlterar } from '../../../support/para_pedidos/apenas_botoes_avancar.js';
import { tirarEntrega, tirarEntregaSegundo, tirarEntregaTerceiro } from '../../../support/para_pedidos/apenas_entrega.js';

describe('Gerar pedido normal, entrar alterando, modificar e salvar.', () => {

    beforeEach(() => {
        cy.visit('/')
        cy.clearAllSessionStorage()
        cy.login()
        cy.urlAposLogin()
        cy.tituloPagina()
        processoVendaNFe()
        clienteComRota()
        cy.wait(500)
    })

    context('Sem entrega/ processo 9860 - caminho feliz', () => {

        it('1. Gerar pedido, alterar aumentando quantidade de produto e adicionando outro produto e um kit.', () => {

            produtoNormalPrimeiro() //PRODUTO
            saldodisponivel()
            escolherProdutoPesquisaNormalPrimeiro()
            escolherVoltagemProdutoNormalPrimeiro() 
            clicarAddProdutoNormalPrimeiro()
            modalServicosVinculados() //SERVICOS
            okServicosVinculados()
            tirarEntrega() //ENTREGA
            avancarParaParcelas()
            botaoGerarParcelas() //GERAR PARCELAS
            carregandoFormaPagamento()
            escolherFormaPagamentoPrincipal()
            escolherDuasParcelaPagamento()
            avancarFinal()
            botaoFinalizarPedido() //RESUMO
            pedidoGerado()
            okPedidoGerado()
            cy.wait(1500)

            iconeMenuOpcoesPed() //ALTERAÇÃO PEDIDO WEB
            pedidosPendentesOpcaoMenuPed() //PEDIDOS PENDENTES
            escolherPedidoPendente()
            clicarDetalhes()
            clicarEditarPedido()

            clicarAumentoQtdProduto() //AUMENTANDO QUANTIDADE DO PRODUTO

            produtoNormalPrimeiro() //SEGUNDO PRODUTO
            escolherProdutoPesquisaNormalPrimeiro()
            escolherVoltagemProdutoNormalPrimeiro() 
            clicarAddProdutoNormalPrimeiro()
            okServicosVinculados()
            tirarEntregaSegundo() //ENTREGA - SEGUNDO PRODUTO
            cy.wait(500)

            produtoKitPrimeiro() //PRODUTO KIT
            escolherProdutoKitPrimeiro()
            escolherVoltagemProdutoKitPrimeiro() 
            composicaoDesteKit()
            clicarAddProdutoKitPrimeiro()
            okServicosVinculados()
            tirarEntregaTerceiro()
            avancarParaParcelasAlterar()

            botaoGerarParcelasAlterar() //GERAR PARCELAS
            escolherFormaPagamentoPrincipalAlterar()
            escolherDuasParcelaPagamento()
            avancarFinalAlterar()
            botaoFinalizarPedido() //RESUMO
            pedidoAlteradoSucesso()
        })

        it('2. Gerar pedido, alterar removendo o produto e adicionando outros dois.', () => {

            produtoNormalPrimeiro() //PRODUTO
            saldodisponivel()
            escolherProdutoPesquisaNormalPrimeiro()
            escolherVoltagemProdutoNormalPrimeiro() 
            clicarAddProdutoNormalPrimeiro()
            modalServicosVinculados() //SERVICOS
            okServicosVinculados()
            tirarEntrega() //ENTREGA
            avancarParaParcelas()
            botaoGerarParcelas() //GERAR PARCELAS
            carregandoFormaPagamento()
            escolherFormaPagamentoPrincipal()
            escolherDuasParcelaPagamento()
            avancarFinal()
            botaoFinalizarPedido() //RESUMO
            pedidoGerado()
            okPedidoGerado()
            cy.wait(1500)

            iconeMenuOpcoesPed()  //ALTERAÇÃO PEDIDO WEB
            pedidosPendentesOpcaoMenuPed() //PEDIDOS PENDENTES
            escolherPedidoPendente()
            clicarDetalhes()
            clicarEditarPedido()

            clicarRemoverProduto()
            clicarFecharIntencaoCompra()

            produtoNormalSegundo() //SEGUNDO PRODUTO - APÓS REMOVER O PRIMEIRO
            saldodisponivel()
            escolherProdutoPesquisaNormalSegundo()
            escolherVoltagemProdutoNormalSegundo() 
            clicarAddProdutoNormalSegundo()
            modalServicosVinculados() //SERVICOS -SEGUNDO PRODUTO - APÓS REMOVER O PRIMEIRO
            okServicosVinculados()
            tirarEntregaSegundo() //ENTREGA -SEGUNDO PRODUTO - APÓS REMOVER O PRIMEIRO

            produtoNormalPrimeiro() //TERCEIRO PRODUTO - APÓS REMOVER O PRIMEIRO
            saldodisponivel()
            escolherProdutoPesquisaNormalPrimeiro()
            escolherVoltagemProdutoNormalPrimeiro() 
            clicarAddProdutoNormalPrimeiro()
            modalServicosVinculados() //SERVICOS -TERCEIRO PRODUTO - APÓS REMOVER O PRIMEIRO
            okServicosVinculados()
            tirarEntregaSegundo() //ENTREGA -TERCEIRO PRODUTO - APÓS REMOVER O PRIMEIRO
            avancarParaParcelasAlterar()

            botaoGerarParcelasAlterar() //GERAR PARCELAS
            carregandoFormaPagamento()
            escolherFormaPagamentoPrincipalAlterar()
            escolherDuasParcelaPagamento()
            avancarFinalAlterar()
            botaoFinalizarPedido() //RESUMO
            pedidoAlteradoSucesso()
        })

        //erro de inconsistencia quando colocamos o serviço de entrega
        it.skip('3. Gerar pedido, alterar colocando garantia e entrega.', () => {

            produtoNormalPrimeiro() //PRODUTO
            saldodisponivel()
            escolherProdutoPesquisaNormalPrimeiro()
            escolherVoltagemProdutoNormalPrimeiro() 
            clicarAddProdutoNormalPrimeiro()
            modalServicosVinculados() //SERVICOS
            okServicosVinculados()
            tirarEntrega() //ENTREGA
            avancarParaParcelas()
            botaoGerarParcelas() //GERAR PARCELAS
            carregandoFormaPagamento()
            escolherFormaPagamentoPrincipal()
            escolherDuasParcelaPagamento()
            avancarFinal()
            botaoFinalizarPedido() //RESUMO
            pedidoGerado()
            okPedidoGerado()
            cy.wait(1500)

            iconeMenuOpcoesPed() //ALTERAÇÃO PEDIDO WEB
            pedidosPendentesOpcaoMenuPed() //PEDIDOS PENDENTES
            escolherPedidoPendente()
            clicarDetalhes()
            clicarEditarPedido()
            adicionarEntrega()
            adicionarServico()
            garantiaSeparaMesmoProcesso()
            okServicosVinculados()
            // avancarParaTransportadora()
            // avancarParcelasEntrega()
            // botaoGerarParcelasAlterar() //GERAR PARCELAS
            // carregandoFormaPagamento()
            // escolherFormaPagamentoPrincipalAlterar()
            // escolherDuasParcelaPagamento()
            // avancarFinalAlterar()
            // botaoFinalizarPedido() //RESUMO
            // pedidoAlteradoSucesso()
            
        })
    })

    context('Com entrega/ processo 9860 - caminho feliz', () => {

        it('4. Gerar pedido com frete, alterar forma de pagamento.', () => {
                      
            produtoNormalPrimeiro() //PRODUTO
            saldodisponivel()
            escolherProdutoPesquisaNormalPrimeiro()
            escolherVoltagemProdutoNormalPrimeiro() //PRODUTO
            clicarAddProdutoNormalPrimeiro()
            modalServicosVinculados() //SERVICOS
            okServicosVinculados()
            avancarParaTransportadora()
            avancarParcelasEntrega()
            botaoGerarParcelas() //GERAR PARCELAS
            carregandoFormaPagamento()
            escolherFormaPagamentoPrincipal()
            escolherDuasParcelaPagamento()
            avancarFinal()
            botaoFinalizarPedido() //RESUMO
            pedidoGerado()
            okPedidoGerado()
            cy.wait(1500)

            iconeMenuOpcoesPed() //ALTERAÇÃO PEDIDO WEB
            pedidosPendentesOpcaoMenuPed() //PEDIDOS PENDENTES
            escolherPedidoPendente()
            clicarDetalhes()
            clicarEditarPedido()
            avancarParaTransportadoraAlterar()
            avancarParcelasEntregaAlterar()
            arrastarFormaPagamento() //ARRASTAR PARA REMOVER FORMA DE PAGAMENTO ANTIGA
            removerFormaPagamento()

            botaoGerarParcelasAlterar() //GERAR PARCELAS
            escolherSegundaFormaPagamento()
            escolherDuasParcelaPagamento()
            avancarFinalAlterar()
            botaoFinalizarPedido() //RESUMO
            pedidoAlteradoSucesso()
        })
    })
})