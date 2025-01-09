import { escolherTransportadora, saldodisponivel, escolherRota, clicarAdicionarProduto, tirarEntrega,
         tirarEntregaSegundo, escolherProdutoPesquisa, escolherVoltagemProduto, modalInconsRotaTransp, escolherEntradaFormaPagamento,
         clicarGerarPagamento, modalInconsApenasTransp, escolherClientePedido} from '../../../support/para_pedidos/gerais_pedidos.js';
import { produtoNormalPrimeiro, produtoNormalSegundo } from '../../../support/para_pedidos/apenas_produtos_pedidos.js';
import { botaoGerarParcelas, escolherFormaPagamentoPrincipal, carregandoFormaPagamento, escolherUmaParcelaPagamento, escolherDuasParcelaPagamento } from '../../../support/para_pedidos/apenas_formas_pagamento.js';
import { modalServicosVinculados, okServicosVinculados } from '../../../support/para_pedidos/apenas_servicos';
import { botaoFinalizarPedido, finalizandoPedido, pedidoGerado } from '../../../support/para_pedidos/apenas_finalizar_pedido.js';
import { processoVendaPrincipal } from '../../../support/para_pedidos/apenas_processos_venda.js';
import { avancarParaParcelas, avancarFinal, avancarParaTransportadora, avancarParcelasEntrega } from '../../../support/para_pedidos/apenas_botoes_avancar.js';

describe('Gerar pedido normal', () => {

    beforeEach(() => {
        cy.visit('/')
        cy.clearAllSessionStorage()
        cy.login()
        cy.urlAposLogin()
        cy.tituloPagina()
        processoVendaPrincipal()
        escolherClientePedido()
        cy.wait(500)
        produtoNormalPrimeiro()
        saldodisponivel()
        escolherProdutoPesquisa()
        cy.wait(200)
    })

    context('Sem frete/ processo 9860 - caminho feliz', () => {

        it('1-Venda: produto 1860 0 0 - (Venda local de produto com saldo - sem entrega)', () => {

            escolherVoltagemProduto() //PRODUTO
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
            cy.wait(5000)
            escolherFormaPagamentoPrincipal()
            escolherDuasParcelaPagamento()
            cy.wait(400)
            avancarFinal()
        })

        it('2-Venda: produtos 1860 0 0 e 1870 0 0', () => {
                      
            escolherVoltagemProduto() //PRODUTO
            clicarAdicionarProduto()
            cy.wait(500)
            modalServicosVinculados() //SERVICOS
            okServicosVinculados()
            tirarEntrega() //ENTREGA
            cy.wait(800)
            produtoNormalSegundo() //SEGUNDO PRODUTO
            cy.wait(2000)
            saldodisponivel()
            escolherProdutoPesquisa()
            cy.wait(800)
            escolherVoltagemProduto()
            clicarAdicionarProduto()
            cy.wait(500)
            modalServicosVinculados() //SERVICOS - SEGUNDO PRODUTO
            okServicosVinculados()
            tirarEntregaSegundo() //ENTREGA - SEGUNDO PRODUTO
            cy.wait(400)
            avancarParaParcelas()
            cy.wait(5500)
            botaoGerarParcelas() //GERAR PARCELAS
            carregandoFormaPagamento()
            cy.wait(6000)
            escolherFormaPagamentoPrincipal()
            cy.wait(3000)
            escolherDuasParcelaPagamento()
            cy.wait(400)
            avancarFinal()
        })

        it('3-Venda: produto 1860 0 0 - (Pedido de venda sem entrega. Com Entrada + parcelamento.)', () => {

            escolherVoltagemProduto() //PRODUTO
            clicarAdicionarProduto()
            cy.wait(500)
            modalServicosVinculados() //SERVICOS
            okServicosVinculados()
            tirarEntrega() //ENTREGA
            cy.wait(400)
            avancarParaParcelas()
            cy.wait(5500)
            escolherEntradaFormaPagamento() //GERAR PARCELAS
            clicarGerarPagamento()
            botaoGerarParcelas()
            carregandoFormaPagamento()
            cy.wait(5000)
            escolherFormaPagamentoPrincipal()
            escolherUmaParcelaPagamento()
            cy.wait(400)
            avancarFinal()
        })
    })

    context('Com frete/ processo 9860 - caminho feliz', () => {

        it('4-Venda: produto 1860 0 0 - (Venda local de produto com saldo - com entrega)', () => {
                      
            escolherVoltagemProduto() //PRODUTO
            clicarAdicionarProduto()
            cy.wait(500)
            modalServicosVinculados() //SERVICOS
            okServicosVinculados()
            cy.wait(400)
            avancarParaTransportadora()
            cy.wait(5000)
            modalInconsApenasTransp() //ESCOLHER TRANSPORTADORA
            escolherTransportadora()
            avancarParcelasEntrega()
            // cy.wait(5000)
            // botaoGerarParcelas() //GERAR PARCELAS
            // cy.wait(5500)
            // escolherFormaPagamentoPrincipal()
            // cy.wait(4000)
            // escolherDuasParcelaPagamento()
            // cy.wait(400)
            // avancarFinal()
        })

        it('5-Venda: produtos 1860 0 0 e 1870 0 0', () => {
                      
            escolherVoltagemProduto() //PRODUTO
            clicarAdicionarProduto()
            cy.wait(500)
            modalServicosVinculados() //SERVICOS
            okServicosVinculados()
            cy.wait(400)
            produtoNormalSegundo() //SEGUNDO PRODUTO
            cy.wait(4000)
            saldodisponivel()
            escolherProdutoPesquisa()
            cy.wait(800)
            escolherVoltagemProduto()
            clicarAdicionarProduto()
            cy.wait(500)
            modalServicosVinculados() //SERVICOS - SEGUNDO PRODUTO
            okServicosVinculados()
            cy.wait(1000)
            avancarParaTransportadora()
            cy.wait(8000)
            modalInconsRotaTransp() //ESCOLHER TRANSPORTADORA
            escolherRota()
            escolherTransportadora()
            avancarParcelasEntrega()
            botaoGerarParcelas() //GERAR PARCELAS
            cy.wait(6000)
            carregandoFormaPagamento()
            escolherFormaPagamentoPrincipal()
            cy.wait(3000)
            escolherDuasParcelaPagamento()
            cy.wait(400)
            avancarFinal()
        })

        it('6-Venda: produto 1860 0 0 - (Pedido de venda com entrega. Com Entrada + parcelamento.)', () => {
                      
            escolherVoltagemProduto() //PRODUTO
            clicarAdicionarProduto()
            cy.wait(500)
            modalServicosVinculados() //SERVICOS
            okServicosVinculados()
            cy.wait(400)
            avancarParaTransportadora()
            cy.wait(7000)
            modalInconsRotaTransp() //ESCOLHER TRANSPORTADORA
            escolherRota()
            escolherTransportadora()
            avancarParcelasEntrega()
            cy.wait(6500)
            escolherEntradaFormaPagamento() //GERAR PARCELAS
            clicarGerarPagamento()
            botaoGerarParcelas()
            carregandoFormaPagamento()
            cy.wait(5500)
            escolherFormaPagamentoPrincipal()
            escolherUmaParcelaPagamento()
            cy.wait(400)
            avancarFinal()
        })
    })

    // afterEach(() => {
    //     botaoFinalizarPedido() //RESUMO
    //     finalizandoPedido()
    //     cy.wait(8000)
    //     pedidoGerado()
    //   });
})