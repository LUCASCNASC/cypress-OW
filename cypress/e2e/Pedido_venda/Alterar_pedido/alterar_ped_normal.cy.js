import { titulopagina } from '../../../support/para_todos.js';
import { escolherTransportadora, saldodisponivel, escolherRota, escolherClientePedido, pedidoGerado, botaoFinalizarPedido,
         finalizandoPedido, clicarAdicionarProduto, tirarEntrega, tirarEntregaSegundo, botaoGerarParcelas, processoVendaPrincipal,
         avancarParaParcelas, avancarParaTransportadora, avancarParcelasEntrega, modalServicosVinculados, okServicosVinculados,
         escolherProdutoPesquisa, escolherVoltagemProduto, avancarFinal, modalInconsRotaTransp, carregandoFormaPagamento,
         escolherFormaPagamentoPrincipal, escolherDuasParcelaPagamento, escolherEntradaFormaPagamento, clicarGerarPagamento,
         escolherUmaParcelaPagamento, composicaoDesteKit, tirarEntregaTerceiro, pedidoAlteradoSucesso }  from '../../../support/para_pedidos/gerais_pedidos.js';
import { produtoNormalPrimeiro, produtoNormalSegundo, produtoKitPrimeiro } from '../../../support/para_pedidos/produtos_pedidos.js';
import { okPedidoGerado, iconeMenuOpcoesPed, pedidosPendentesOpcaoMenuPed, escolherPedidoPendente, clicarDetalhes, infosPedidoValidarInfos,
         infosPedidoValidarBotoes, clicarEditarPedido, menssCarregarPedAlterar, clicarAumentoQtdProduto, clicarRemoverProduto,
         clicarFecharIntencaoCompra } from '../../../support/para_pedidos/para_alterar_pedido.js';

describe('Gerar pedido normal, entrar alterando, modificar e salvar.', () => {

    beforeEach(() => {
        cy.visit('/');
        cy.clearAllSessionStorage();
        cy.login();
        titulopagina()
        processoVendaPrincipal()
        escolherClientePedido()
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

            iconeMenuOpcoesPed()
            pedidosPendentesOpcaoMenuPed() //PEDIDOS PENDENTES
            escolherPedidoPendente()
            clicarDetalhes()
            //infosPedidoValidarInfos()
            //infosPedidoValidarBotoes()
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
            cy.wait(5500)

            botaoGerarParcelas() //GERAR PARCELAS
            carregandoFormaPagamento()
            cy.wait(5000)
            escolherFormaPagamentoPrincipal()
            escolherDuasParcelaPagamento()
            cy.wait(400)
            avancarFinal()
            cy.wait(7000)
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

            okServicosVinculados() //SERVICOS
            tirarEntrega() //ENTREGA
            cy.wait(400)
            avancarParaParcelas()
            cy.wait(5500)

            botaoGerarParcelas() //GERAR PARCELAS
            carregandoFormaPagamento()
            cy.wait(5000)
            escolherFormaPagamentoPrincipal()
            escolherDuasParcelaPagamento()
            cy.wait(400)
            avancarFinal()
            cy.wait(6000)
            botaoFinalizarPedido() //RESUMO
            cy.wait(8000)
            finalizandoPedido()
            pedidoGerado()
            okPedidoGerado()
            cy.wait(1500)

            iconeMenuOpcoesPed()
            pedidosPendentesOpcaoMenuPed() //PEDIDOS PENDENTES
            escolherPedidoPendente()
            clicarDetalhes()
            clicarEditarPedido()
            cy.wait(8000)
            avancarParaParcelas()
            cy.wait(11000)

            produtoNormalPrimeiro() //PRODUTO
            cy.wait(800)
            escolherProdutoPesquisa()
            cy.wait(200)
            escolherVoltagemProduto() 
            clicarAdicionarProduto()
            cy.wait(500)
            okServicosVinculados()
            tirarEntregaSegundo() //ENTREGA
            cy.wait(500)

            clicarRemoverProduto()
            cy.wait(500)
            clicarFecharIntencaoCompra()
            cy.wait(1000)

            produtoNormalSegundo() //SEGUNDO PRODUTO
            cy.wait(1500)
            escolherProdutoPesquisa()
            cy.wait(200)
            escolherVoltagemProduto() 
            clicarAdicionarProduto()
            cy.wait(500)
            okServicosVinculados()
            tirarEntregaSegundo() //ENTREGA - SEGUNDO PRODUTO
            cy.wait(500)
            avancarParaParcelas()
            cy.wait(8000)

            botaoGerarParcelas() //GERAR PARCELAS
            carregandoFormaPagamento()
            cy.wait(8000)
            escolherFormaPagamentoPrincipal()
            escolherDuasParcelaPagamento()
            cy.wait(400)
            avancarFinal()
            cy.wait(10000)
            botaoFinalizarPedido() //RESUMO
            finalizandoPedido()
            cy.wait(10000)
            pedidoAlteradoSucesso()
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
            avancarParaTransportadora()
            cy.wait(11000)
    
            modalInconsRotaTransp() //ESCOLHER TRANSPORTADORA
            escolherTransportadora()
            escolherRota()
            avancarParcelasEntrega()
            cy.wait(6500)

            botaoGerarParcelas() //GERAR PARCELAS
            carregandoFormaPagamento()
            cy.wait(5500)
            escolherFormaPagamentoPrincipal()
            escolherDuasParcelaPagamento()
            cy.wait(400)
            avancarFinal()
            cy.wait(8000)
            botaoFinalizarPedido()
            finalizandoPedido()
            cy.wait(8000)
            pedidoGerado()
            okPedidoGerado()
            cy.wait(1500)

            iconeMenuOpcoesPed()
            pedidosPendentesOpcaoMenuPed() //PEDIDOS PENDENTES
            escolherPedidoPendente()
            clicarDetalhes()
            clicarEditarPedido()
            cy.wait(8000)
            avancarParaTransportadora()
            cy.wait(11000)
            avancarParcelasEntrega()
            cy.wait(6500)

            botaoGerarParcelas() //GERAR PARCELAS
            carregandoFormaPagamento()
            cy.wait(5000)
            escolherFormaPagamentoPrincipal()
            escolherUmaParcelaPagamento()
            cy.wait(400)
            avancarFinal()
            cy.wait(6000)
            botaoFinalizarPedido() //RESUMO
            cy.wait(8000)
            finalizandoPedido()
            pedidoGerado()
        })
    })
})