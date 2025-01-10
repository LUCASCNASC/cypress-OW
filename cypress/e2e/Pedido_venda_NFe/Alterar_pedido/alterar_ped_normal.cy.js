import { saldodisponivel, clienteComRota, clicarAdicionarProduto, escolherProdutoPesquisa, escolherVoltagemProduto, composicaoDesteKit }  from '../../../support/para_pedidos/gerais_pedidos.js';
import { produtoNormalPrimeiro, produtoNormalSegundo, produtoKitPrimeiro } from '../../../support/para_pedidos/apenas_produtos_pedidos.js';
import { okPedidoGerado, iconeMenuOpcoesPed, pedidosPendentesOpcaoMenuPed, escolherPedidoPendente, clicarDetalhes, clicarEditarPedido, 
         menssCarregarPedAlterar, clicarAumentoQtdProduto, clicarRemoverProduto, clicarFecharIntencaoCompra, removerFormaPagamento, 
         adicionarEntrega, adicionarServico } from '../../../support/para_pedidos/para_alterar_pedido.js';
import { arrastarFormaPagamento } from '../../../support/para_pedidos/para_pedido_desconto';
import { garantiaSeparaMesmoProcesso, modalServicosVinculados, okServicosVinculados } from '../../../support/para_pedidos/apenas_servicos';
import { botaoGerarParcelas, escolherFormaPagamentoPrincipal, escolherSegundaFormaPagamento, carregandoFormaPagamento,
         escolherEntradaFormaPagamento, clicarGerarPagamento, escolherUmaParcelaPagamento, escolherDuasParcelaPagamento } from '../../../support/para_pedidos/apenas_formas_pagamento.js';
import { botaoFinalizarPedido, finalizandoPedido, pedidoGerado, pedidoAlteradoSucesso } from '../../../support/para_pedidos/apenas_finalizar_pedido.js';
import { processoVendaNFe } from '../../../support/para_pedidos/apenas_processos_venda.js';
import { avancarParaParcelas, avancarFinal, avancarParaTransportadora, avancarParcelasEntrega } from '../../../support/para_pedidos/apenas_botoes_avancar.js';
import { tirarEntrega, tirarEntregaSegundo, tirarEntregaTerceiro, pegarAPICidade, esperarAPICidade } from '../../../support/para_pedidos/apenas_entrega.js';

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

    context('Sem frete/ processo 9860 - caminho feliz', () => {

        it.only('Gerar pedido, alterar aumentando quantidade de produto e adicionando outro produto e um kit.', () => {

            produtoNormalPrimeiro() //PRODUTO
            saldodisponivel()
            escolherProdutoPesquisa()
            cy.wait(200)
            escolherVoltagemProduto() 
            clicarAdicionarProduto()
            cy.wait(500)
            modalServicosVinculados() //SERVICOS
            okServicosVinculados()
            tirarEntrega() //ENTREGA
            cy.wait(400)
            avancarParaParcelas()
            cy.wait(5500)
            botaoGerarParcelas() //GERAR PARCELAS
            carregandoFormaPagamento()
            cy.wait(6000)
            escolherFormaPagamentoPrincipal()
            cy.wait(2000)
            escolherDuasParcelaPagamento()
            cy.wait(400)
            avancarFinal()
            botaoFinalizarPedido() //RESUMO
            finalizandoPedido()
            cy.wait(6000)
            pedidoGerado()
            okPedidoGerado()
            cy.wait(1500)

            iconeMenuOpcoesPed() //ALTERAÇÃO PEDIDO WEB
            pedidosPendentesOpcaoMenuPed() //PEDIDOS PENDENTES
            escolherPedidoPendente()
            clicarDetalhes()
            clicarEditarPedido()
            menssCarregarPedAlterar()
            cy.wait(6000)

            clicarAumentoQtdProduto() //AUMENTANDO QUANTIDADE DO PRODUTO
            cy.wait(500)
            avancarParaParcelas()
            cy.wait(5500)

            produtoNormalPrimeiro() //SEGUNDO PRODUTO
            cy.wait(800)
            escolherProdutoPesquisa()
            cy.wait(200)
            escolherVoltagemProduto() 
            clicarAdicionarProduto()
            cy.wait(500)
            okServicosVinculados()
            tirarEntregaSegundo() //ENTREGA - SEGUNDO PRODUTO
            cy.wait(500)

            produtoKitPrimeiro() //PRODUTO KIT
            cy.wait(1300)
            escolherProdutoPesquisa()
            cy.wait(200)
            escolherVoltagemProduto() 
            composicaoDesteKit()
            clicarAdicionarProduto()
            cy.wait(500)
            okServicosVinculados()
            cy.wait(500)
            tirarEntregaTerceiro()
            cy.wait(400)
            avancarParaParcelas()
            cy.wait(8000)

            botaoGerarParcelas() //GERAR PARCELAS
            carregandoFormaPagamento()
            escolherFormaPagamentoPrincipal()
            escolherDuasParcelaPagamento()
            cy.wait(400)
            avancarFinal()
            botaoFinalizarPedido() //RESUMO
            finalizandoPedido()
            cy.wait(6000)
            pedidoAlteradoSucesso()
        })

        it('Gerar pedido, alterar removendo o produto e adicionando outros dois.', () => {

            produtoNormalPrimeiro() //PRODUTO
            saldodisponivel()
            escolherProdutoPesquisa()
            cy.wait(200)
            escolherVoltagemProduto() 
            clicarAdicionarProduto()
            cy.wait(500)
            modalServicosVinculados() //SERVICOS
            okServicosVinculados()
            tirarEntrega() //ENTREGA
            cy.wait(400)
            avancarParaParcelas()
            cy.wait(5500)
            botaoGerarParcelas() //GERAR PARCELAS
            carregandoFormaPagamento()
            cy.wait(6000)
            escolherFormaPagamentoPrincipal()
            cy.wait(2000)
            escolherDuasParcelaPagamento()
            cy.wait(400)
            avancarFinal()
            botaoFinalizarPedido() //RESUMO
            finalizandoPedido()
            cy.wait(6000)
            pedidoGerado()
            okPedidoGerado()
            cy.wait(1500)

            iconeMenuOpcoesPed()  //ALTERAÇÃO PEDIDO WEB
            pedidosPendentesOpcaoMenuPed() //PEDIDOS PENDENTES
            escolherPedidoPendente()
            clicarDetalhes()
            clicarEditarPedido()
            menssCarregarPedAlterar()
            cy.wait(6000)

            clicarRemoverProduto()
            cy.wait(500)
            clicarFecharIntencaoCompra()
            cy.wait(1000)

            produtoNormalPrimeiro() //SEGUNDO PRODUTO - APÓS REMOVER O PRIMEIRO
            cy.wait(2000)
            produtoNormalSegundo() //SEGUNDO PRODUTO - APÓS REMOVER O PRIMEIRO
            cy.wait(2000)
            saldodisponivel()
            escolherProdutoPesquisa()
            cy.wait(200)
            escolherVoltagemProduto() 
            clicarAdicionarProduto()
            cy.wait(500)

            modalServicosVinculados() //SERVICOS -SEGUNDO PRODUTO - APÓS REMOVER O PRIMEIRO
            okServicosVinculados()
            tirarEntregaSegundo() //ENTREGA -SEGUNDO PRODUTO - APÓS REMOVER O PRIMEIRO
            cy.wait(600)

            produtoNormalPrimeiro() //TERCEIRO PRODUTO - APÓS REMOVER O PRIMEIRO
            cy.wait(2000)
            saldodisponivel()
            escolherProdutoPesquisa()
            cy.wait(200)
            escolherVoltagemProduto() 
            clicarAdicionarProduto()
            cy.wait(500)

            modalServicosVinculados() //SERVICOS -TERCEIRO PRODUTO - APÓS REMOVER O PRIMEIRO
            okServicosVinculados()
            tirarEntregaSegundo() //ENTREGA -TERCEIRO PRODUTO - APÓS REMOVER O PRIMEIRO
            cy.wait(600)
            avancarParaParcelas()
            cy.wait(6000)

            botaoGerarParcelas() //GERAR PARCELAS
            carregandoFormaPagamento()
            escolherFormaPagamentoPrincipal()
            cy.wait(2000)
            escolherDuasParcelaPagamento()
            cy.wait(400)
            avancarFinal()
            botaoFinalizarPedido() //RESUMO
            finalizandoPedido()
            cy.wait(7000)
            pedidoAlteradoSucesso()
        })

        //erro de inconsistencia quando colocamos o serviço de entrega
        it('Gerar pedido, alterar colocando garantia e entrega.', () => {

            produtoNormalPrimeiro() //PRODUTO
            saldodisponivel()
            escolherProdutoPesquisa()
            cy.wait(200)
            escolherVoltagemProduto() 
            clicarAdicionarProduto()
            cy.wait(500)
            modalServicosVinculados() //SERVICOS
            okServicosVinculados()
            tirarEntrega() //ENTREGA
            cy.wait(400)
            avancarParaParcelas()
            cy.wait(5500)
            botaoGerarParcelas() //GERAR PARCELAS
            carregandoFormaPagamento()
            cy.wait(6000)
            escolherFormaPagamentoPrincipal()
            cy.wait(2000)
            escolherDuasParcelaPagamento()
            cy.wait(400)
            avancarFinal()
            botaoFinalizarPedido() //RESUMO
            finalizandoPedido()
            cy.wait(6000)
            pedidoGerado()
            okPedidoGerado()
            cy.wait(1500)

            iconeMenuOpcoesPed() //ALTERAÇÃO PEDIDO WEB
            pedidosPendentesOpcaoMenuPed() //PEDIDOS PENDENTES
            escolherPedidoPendente()
            clicarDetalhes()
            clicarEditarPedido()
            menssCarregarPedAlterar()
            cy.wait(6000)
            adicionarEntrega()
            adicionarServico()
            cy.wait(2000)
            garantiaSeparaMesmoProcesso()
            okServicosVinculados()
            pegarAPICidade()
            avancarParaTransportadora()
            cy.wait(7000)
            esperarAPICidade()
            avancarParcelasEntrega()
            
        })
    })

    context('Com frete/ processo 9860 - caminho feliz', () => {

        it('Gerar pedido com frete, alterar forma de pagamento.', () => {
                      
            produtoNormalPrimeiro() //PRODUTO
            saldodisponivel()
            escolherProdutoPesquisa()
            cy.wait(200)
            escolherVoltagemProduto() //PRODUTO
            clicarAdicionarProduto()
            cy.wait(500)
            modalServicosVinculados() //SERVICOS
            okServicosVinculados()
            cy.wait(400)
            pegarAPICidade()
            avancarParaTransportadora()
            cy.wait(6000)
            esperarAPICidade()
            avancarParcelasEntrega()
            botaoGerarParcelas() //GERAR PARCELAS
            cy.wait(5000)
            carregandoFormaPagamento()
            escolherFormaPagamentoPrincipal()
            cy.wait(3000)
            escolherDuasParcelaPagamento()
            cy.wait(400)
            avancarFinal()
            botaoFinalizarPedido()
            finalizandoPedido()
            cy.wait(8000)
            pedidoGerado()
            okPedidoGerado()
            cy.wait(1500)

            iconeMenuOpcoesPed() //ALTERAÇÃO PEDIDO WEB
            pedidosPendentesOpcaoMenuPed() //PEDIDOS PENDENTES
            escolherPedidoPendente()
            clicarDetalhes()
            clicarEditarPedido()
            cy.wait(8000)
            avancarParaTransportadora()
            cy.wait(11000)
            avancarParcelasEntrega()
            arrastarFormaPagamento() //ARRASTAR PARA REMOVER FORMA DE PAGAMENTO ANTIGA
            removerFormaPagamento()
            cy.wait(10000)
            avancarParcelasEntrega()

            botaoGerarParcelas() //GERAR PARCELAS
            carregandoFormaPagamento()
            escolherSegundaFormaPagamento()
            cy.wait(3000)
            escolherUmaParcelaPagamento()
            cy.wait(400)
            avancarFinal()
            botaoFinalizarPedido() //RESUMO
            cy.wait(8000)
            finalizandoPedido()
            pedidoAlteradoSucesso()
        })
    })
})