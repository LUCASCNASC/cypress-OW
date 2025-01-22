import { saldodisponivel, clienteComRota } from '../../../support/para_pedidos/gerais_pedidos.js';
import { produtoArredondarCimaBaixo, escolherProdutoArredondarCimaBaixo, escolherVoltagemProdutoArredondarCimaBaixo,
         clicarAddProdutoArredondarCimaBaixo } from '../../../support/para_pedidos/apenas_produtos_pedidos.js';
import { arrastarFormaPagamento, clicarAlterarValor, modalAlterarValor, alterarValorParaBaixo, alterarValorParaCima } from '../../../support/para_pedidos/para_pedido_desconto.js';
import { botaoGerarParcelas, escolherFormaPagamentoPrincipal, carregandoFormaPagamento, escolherUmaParcelaPagamento } from '../../../support/para_pedidos/apenas_formas_pagamento.js';
import { modalServicosVinculados, okServicosVinculados } from '../../../support/para_pedidos/apenas_servicos.js';
import { botaoFinalizarPedido, pedidoGerado } from '../../../support/para_pedidos/apenas_finalizar_pedido.js';
import { processoVendaNFe } from '../../../support/para_pedidos/apenas_processos_venda.js';
import { avancarParaParcelas, avancarFinal } from '../../../support/para_pedidos/apenas_botoes_avancar.js';
import { tirarEntrega } from '../../../support/para_pedidos/apenas_entrega.js';

describe('Gerar pedido normal com desconto nos juros - parametros 243 e 244 definidos no processo de inclusão', () => {

    beforeEach(() => {
        cy.visit('/')
        cy.clearAllSessionStorage()
        cy.login()
        cy.urlAposLogin()
        cy.tituloPagina()
        processoVendaNFe()
        clienteComRota()
        cy.wait(500)
        produtoArredondarCimaBaixo()
        saldodisponivel()
        escolherProdutoArredondarCimaBaixo()
    })

    context('Sem entrega/ processo 9860 - caminho feliz', () => {

        it('Ped venda: produto 1860 0 0 - arredondar para baixo', () => {

            escolherVoltagemProdutoArredondarCimaBaixo() //PRODUTO
            clicarAddProdutoArredondarCimaBaixo()
            modalServicosVinculados() //SERVICOS
            okServicosVinculados()
            tirarEntrega() //ENTREGA
            avancarParaParcelas()
            botaoGerarParcelas() //GERAR PARCELAS
            carregandoFormaPagamento()
            escolherFormaPagamentoPrincipal()
            cy.wait(3000)
            escolherUmaParcelaPagamento()
            cy.wait(400)
            arrastarFormaPagamento() //DESCONTO
            clicarAlterarValor()
            modalAlterarValor()
            alterarValorParaBaixo()
            cy.wait(400)
            avancarFinal()
        })

        it('Ped venda: produtos 1860 0 0 - arredondar para cima', () => {

            escolherVoltagemProdutoArredondarCimaBaixo() //PRODUTO
            clicarAddProdutoArredondarCimaBaixo()
            modalServicosVinculados() //SERVICOS
            okServicosVinculados()
            tirarEntrega() //ENTREGA
            avancarParaParcelas()
            botaoGerarParcelas() //GERAR PARCELAS
            carregandoFormaPagamento()
            escolherFormaPagamentoPrincipal()
            cy.wait(3000)
            escolherUmaParcelaPagamento()
            cy.wait(400)
            arrastarFormaPagamento() //DESCONTO
            clicarAlterarValor()
            modalAlterarValor()
            alterarValorParaCima()
            cy.wait(400)
            avancarFinal()
        })
    })

    afterEach(() => {
        botaoFinalizarPedido() //RESUMO
        pedidoGerado()
      });
})