import { saldodisponivel, clienteComRota, composicaoDesteKit }  from '../../../support/para_pedidos/gerais_pedidos.js';
import { produtoNormalPrimeiro, produtoNormalSegundo, produtoKitPrimeiro, escolherProdutoPesquisaNormalPrimeiroNFCe, 
         escolherVoltagemProdutoNormalPrimeiroNFCe, escolherProdutoPesquisaNormalSegundoNFCe, escolherVoltagemProdutoNormalSegundoNFCe, 
         escolherProdutoKitPrimeiroNFCe, escolherVoltagemProdutoKitPrimeiroNFCe, clicarAddProdutoNormalPrimeiro, clicarAddProdutoNormalSegundo, 
         clicarAddProdutoKitPrimeiro } from '../../../support/para_pedidos/apenas_produtos_pedidos.js';
import { okPedidoGerado, iconeMenuOpcoesPed, pedidosPendentesOpcaoMenuPed, escolherPedidoPendente, clicarDetalhes, clicarEditarPedido, 
         menssCarregarPedAlterar, clicarAumentoQtdProduto, clicarRemoverProduto, clicarFecharIntencaoCompra, removerFormaPagamento, 
         adicionarEntrega, adicionarServico } from '../../../support/para_pedidos/para_alterar_pedido.js';
import { arrastarFormaPagamento } from '../../../support/para_pedidos/para_pedido_desconto.js';
import { garantiaSeparaMesmoProcesso, modalServicosVinculados, okServicosVinculados } from '../../../support/para_pedidos/apenas_servicos.js';
import { botaoGerarParcelas, escolherFormaPagamentoPrincipal, escolherSegundaFormaPagamento, carregandoFormaPagamento,
         escolherEntradaFormaPagamento, clicarGerarPagamento, escolherUmaParcelaPagamento, escolherDuasParcelaPagamento } from '../../../support/para_pedidos/apenas_formas_pagamento.js';
import { botaoFinalizarPedido, pedidoGerado, pedidoAlteradoSucesso } from '../../../support/para_pedidos/apenas_finalizar_pedido.js';
import { processoVendaNFe } from '../../../support/para_pedidos/apenas_processos_venda.js';
import { avancarParaParcelas, avancarFinal, avancarParaTransportadora, avancarParcelasEntrega } from '../../../support/para_pedidos/apenas_botoes_avancar.js';
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

        it('Gerar pedido, alterar aumentando quantidade de produto e adicionando outro produto e um kit.', () => {

            produtoNormalPrimeiro() //PRODUTO
            saldodisponivel()
            escolherProdutoPesquisaNormalPrimeiroNFCe()
            escolherVoltagemProdutoNormalPrimeiroNFCe() 
            clicarAddProdutoNormalPrimeiro()
            modalServicosVinculados() //SERVICOS
            okServicosVinculados()
            tirarEntrega() //ENTREGA
            avancarParaParcelas()
            botaoGerarParcelas() //GERAR PARCELAS
            carregandoFormaPagamento()
            escolherFormaPagamentoPrincipal()
            cy.wait(3000)
            escolherDuasParcelaPagamento()
            cy.wait(400)
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
            menssCarregarPedAlterar()
            cy.wait(6000)

            clicarAumentoQtdProduto() //AUMENTANDO QUANTIDADE DO PRODUTO
            cy.wait(500)
            avancarParaParcelas()
            cy.wait(5500)

            produtoNormalPrimeiro() //SEGUNDO PRODUTO
            escolherProdutoPesquisaNormalPrimeiroNFCe()
            escolherVoltagemProdutoNormalPrimeiroNFCe() 
            clicarAddProdutoNormalPrimeiro()
            okServicosVinculados()
            tirarEntregaSegundo() //ENTREGA - SEGUNDO PRODUTO
            cy.wait(500)

            produtoKitPrimeiro() //PRODUTO KIT
            escolherProdutoKitPrimeiroNFCe()
            escolherVoltagemProdutoKitPrimeiroNFCe() 
            composicaoDesteKit()
            clicarAddProdutoKitPrimeiro()
            okServicosVinculados()
            tirarEntregaTerceiro()
            avancarParaParcelas()

            botaoGerarParcelas() //GERAR PARCELAS
            carregandoFormaPagamento()
            escolherFormaPagamentoPrincipal()
            cy.wait(3000)
            escolherDuasParcelaPagamento()
            cy.wait(400)
            avancarFinal()
            botaoFinalizarPedido() //RESUMO
            pedidoAlteradoSucesso()
        })

        it('Gerar pedido, alterar removendo o produto e adicionando outros dois.', () => {

            produtoNormalPrimeiro() //PRODUTO
            saldodisponivel()
            escolherProdutoPesquisaNormalPrimeiroNFCe()
            escolherVoltagemProdutoNormalPrimeiroNFCe() 
            clicarAddProdutoNormalPrimeiro()
            modalServicosVinculados() //SERVICOS
            okServicosVinculados()
            tirarEntrega() //ENTREGA
            avancarParaParcelas()
            botaoGerarParcelas() //GERAR PARCELAS
            carregandoFormaPagamento()
            escolherFormaPagamentoPrincipal()
            cy.wait(3000)
            escolherDuasParcelaPagamento()
            cy.wait(400)
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
            menssCarregarPedAlterar()
            cy.wait(6000)

            clicarRemoverProduto()
            cy.wait(500)
            clicarFecharIntencaoCompra()
            cy.wait(1000)

            produtoNormalPrimeiro() //SEGUNDO PRODUTO - APÓS REMOVER O PRIMEIRO
            cy.wait(2000)
            produtoNormalSegundo() //SEGUNDO PRODUTO - APÓS REMOVER O PRIMEIRO
            saldodisponivel()
            escolherProdutoPesquisaNormalSegundoNFCe()
            escolherVoltagemProdutoNormalSegundoNFCe() 
            clicarAddProdutoNormalSegundo()
            modalServicosVinculados() //SERVICOS -SEGUNDO PRODUTO - APÓS REMOVER O PRIMEIRO
            okServicosVinculados()
            tirarEntregaSegundo() //ENTREGA -SEGUNDO PRODUTO - APÓS REMOVER O PRIMEIRO

            produtoNormalPrimeiro() //TERCEIRO PRODUTO - APÓS REMOVER O PRIMEIRO
            saldodisponivel()
            escolherProdutoPesquisaNormalPrimeiroNFCe()
            escolherVoltagemProdutoNormalPrimeiroNFCe() 
            clicarAddProdutoNormalPrimeiro()
            modalServicosVinculados() //SERVICOS -TERCEIRO PRODUTO - APÓS REMOVER O PRIMEIRO
            okServicosVinculados()
            tirarEntregaSegundo() //ENTREGA -TERCEIRO PRODUTO - APÓS REMOVER O PRIMEIRO
            avancarParaParcelas()

            botaoGerarParcelas() //GERAR PARCELAS
            carregandoFormaPagamento()
            escolherFormaPagamentoPrincipal()
            cy.wait(3000)
            escolherDuasParcelaPagamento()
            cy.wait(400)
            avancarFinal()
            botaoFinalizarPedido() //RESUMO
            pedidoAlteradoSucesso()
        })

        //erro de inconsistencia quando colocamos o serviço de entrega
        it('Gerar pedido, alterar colocando garantia e entrega.', () => {

            produtoNormalPrimeiro() //PRODUTO
            saldodisponivel()
            escolherProdutoPesquisaNormalPrimeiroNFCe()
            escolherVoltagemProdutoNormalPrimeiroNFCe() 
            clicarAddProdutoNormalPrimeiro()
            modalServicosVinculados() //SERVICOS
            okServicosVinculados()
            tirarEntrega() //ENTREGA
            avancarParaParcelas()
            botaoGerarParcelas() //GERAR PARCELAS
            carregandoFormaPagamento()
            escolherFormaPagamentoPrincipal()
            cy.wait(3000)
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
            menssCarregarPedAlterar()
            cy.wait(6000)
            adicionarEntrega()
            adicionarServico()
            cy.wait(2000)
            garantiaSeparaMesmoProcesso()
            okServicosVinculados()
            avancarParaTransportadora()
            avancarParcelasEntrega()
            botaoGerarParcelas() //GERAR PARCELAS
            carregandoFormaPagamento()
            escolherFormaPagamentoPrincipal()
            cy.wait(3000)
            escolherDuasParcelaPagamento()
            cy.wait(400)
            avancarFinal()
            botaoFinalizarPedido() //RESUMO
            pedidoAlteradoSucesso()
            
        })
    })

    context('Com entrega/ processo 9860 - caminho feliz', () => {

        it('Gerar pedido com frete, alterar forma de pagamento.', () => {
                      
            produtoNormalPrimeiro() //PRODUTO
            saldodisponivel()
            escolherProdutoPesquisaNormalPrimeiroNFCe()
            escolherVoltagemProdutoNormalPrimeiroNFCe() //PRODUTO
            clicarAddProdutoNormalPrimeiro()
            modalServicosVinculados() //SERVICOS
            okServicosVinculados()
            avancarParaTransportadora()
            avancarParcelasEntrega()
            botaoGerarParcelas() //GERAR PARCELAS
            carregandoFormaPagamento()
            escolherFormaPagamentoPrincipal()
            cy.wait(3000)
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
            cy.wait(8000)
            avancarParaTransportadora()
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
            avancarFinal()
            botaoFinalizarPedido() //RESUMO
            pedidoAlteradoSucesso()
        })
    })
})