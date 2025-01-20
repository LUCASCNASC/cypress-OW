import { saldodisponivel, clienteComRota, escolherProdutoPesquisa, escolherVoltagemProduto, clicarAdicionarProduto, composicaoDesteKit } from '../../../support/para_pedidos/gerais_pedidos.js';
import { produtoKitPrimeiro } from '../../../support/para_pedidos/apenas_produtos_pedidos.js';
import { botaoGerarParcelas, escolherFormaPagamentoPrincipal, carregandoFormaPagamento, escolherDuasParcelaPagamento } from '../../../support/para_pedidos/apenas_formas_pagamento.js';
import { modalServicosVinculados, okServicosVinculados } from '../../../support/para_pedidos/apenas_servicos.js';
import { botaoFinalizarPedido, finalizandoPedido, pedidoGerado } from '../../../support/para_pedidos/apenas_finalizar_pedido.js';
import { processoVendaNFCe } from '../../../support/para_pedidos/apenas_processos_venda.js';
import { avancarParaParcelas, avancarFinal, avancarParaTransportadora, avancarParcelasEntrega } from '../../../support/para_pedidos/apenas_botoes_avancar.js';
import { escolherTransportadora, modalInconsApenasTransp } from '../../../support/para_pedidos/apenas_entrega.js';
import { pegarAPICidade, esperarAPICidade } from '../../../support/para_pedidos/apenas_APIs.js';

describe('Gerar pedido normal', () => {

    beforeEach(() => {
        cy.visit('/')
        cy.clearAllSessionStorage()
        cy.login()
        cy.urlAposLogin()
        cy.tituloPagina()
        processoVendaNFCe()
        clienteComRota()
        cy.wait(500)
        produtoKitPrimeiro()
        saldodisponivel()
        escolherProdutoPesquisa()
        cy.wait(200)
    })
    
    context('Com frete/processo 9890 - caminho feliz', () => {
        
        it('2-Pedido de venda: kit 1862 0 0', () => {
                      
            escolherVoltagemProduto() //PRODUTO
            composicaoDesteKit()
            clicarAdicionarProduto()
            cy.wait(500)
            modalServicosVinculados() //SERVICOS
            okServicosVinculados()
            cy.wait(400)
            pegarAPICidade()
            avancarParaTransportadora()
            cy.wait(6000)
            modalInconsApenasTransp() //ESCOLHER TRANSPORTADORA
            esperarAPICidade()
            escolherTransportadora()
            avancarParcelasEntrega()
            botaoGerarParcelas() //GERAR PARCELAS
            cy.wait(7000)
            carregandoFormaPagamento()
            escolherFormaPagamentoPrincipal()
            cy.wait(3000)
            escolherDuasParcelaPagamento()
            cy.wait(400)
            avancarFinal()
        })
    })

    // afterEach(() => {
    //     botaoFinalizarPedido() //RESUMO
    //     finalizandoPedido()
    //     cy.wait(9000)
    //     pedidoGerado()
    //   });
})