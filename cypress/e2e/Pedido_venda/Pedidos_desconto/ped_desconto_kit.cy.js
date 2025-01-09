import { saldodisponivel, escolherClientePedido, escolherProdutoPesquisa, escolherVoltagemProduto, clicarAdicionarProduto, composicaoDesteKit } from '../../../support/para_pedidos/gerais_pedidos.js';
import { produtoKitDesconto } from '../../../support/para_pedidos/apenas_produtos_pedidos.js';
import { clicarBotaoDesconto, validarModalSubSobre, aplicarDescontoValorFixo } from '../../../support/para_pedidos/para_pedido_desconto.js';
import { botaoGerarParcelas, escolherFormaPagamentoPrincipal, carregandoFormaPagamento, escolherDuasParcelaPagamento } from '../../../support/para_pedidos/apenas_formas_pagamento.js';
import { modalServicosVinculados, okServicosVinculados } from '../../../support/para_pedidos/apenas_servicos';
import { botaoFinalizarPedido, finalizandoPedido, pedidoGerado } from '../../../support/para_pedidos/apenas_finalizar_pedido.js';
import { processoVendaPrincipal } from '../../../support/para_pedidos/apenas_processos_venda.js';
import { avancarParaParcelas, avancarFinal } from '../../../support/para_pedidos/apenas_botoes_avancar.js';
import { escolherTransportadora, escolherRota, modalInconsRotaTransp, modalInconsApenasTransp, modalInconsApenasRota, tirarEntrega,
         tirarEntregaSegundo, tirarEntregaTerceiro, tirarMontagem, tirarMontagemSegundo } from '../../../support/para_pedidos/apenas_entrega.js';

describe('Gerar pedido de venda Kit com desconto', () => {

    beforeEach(() => {
        cy.visit('/');
        cy.clearAllSessionStorage();
        cy.login(); 
        cy.urlAposLogin()
        cy.tituloPagina()
        processoVendaPrincipal()
        escolherClientePedido()
        cy.wait(500)
    })
  
    context('Sem frete/ processo 9862 - caminho feliz', () => {
        
        it.skip('1-Pedido de venda: kit 1862 0 0 com desconto Sub (-) / VALOR FIXO', () => {
    
            produtoKitDesconto() //PRODUTO
            saldodisponivel()
            escolherProdutoPesquisa()
            cy.wait(200)  
            escolherVoltagemProduto()
            composicaoDesteKit()
            clicarAdicionarProduto()
            cy.wait(500)
            modalServicosVinculados() //SERVICOS
            okServicosVinculados()
            clicarBotaoDesconto() //DESCONTO
            validarModalSubSobre()
            aplicarDescontoValorFixo()
            tirarEntrega() //ENTREGA
            avancarParaParcelas()
            cy.wait(6500)
            botaoGerarParcelas() //GERAR PARCELAS
            carregandoFormaPagamento()
            cy.wait(8000)
            escolherFormaPagamentoPrincipal()
            cy.wait|(3000)
            escolherDuasParcelaPagamento()
            cy.wait(400)
            avancarFinal()
        })
    })

    afterEach(() => {
        botaoFinalizarPedido() //RESUMO
        finalizandoPedido()
        cy.wait(9000)
        pedidoGerado()
      });
})