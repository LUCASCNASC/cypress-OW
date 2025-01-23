import { saldodisponivel, clienteComRota, clicarAdicionarProduto } from '../../../support/para_pedidos/gerais_pedidos.js';
import { produtoDescontoCifrao, produtoDescontoPercentual, produtoDescontoValorFixo, escolherProdutoDescontoCifrao, 
         escolherVoltagemProdutoDescontoCifrao, escolherProdutoDescontoPercentual, escolherVoltagemProdutoDescontoPercentual, 
         escolherProdutoDescontoValorFixo, escolherVoltagemProdutoDescontoValorFixo } from '../../../support/para_pedidos_NFe/NFe_prd_normal.js';
import { clicarBotaoDesconto, validarModalSubSobre, aplicarDescontoR$, aplicarDescontoPorcentagem, aplicarDescontoValorFixo } from '../../../support/para_pedidos/para_pedido_desconto.js';
import { botaoGerarParcelas, escolherFormaPagamentoPrincipal, carregandoFormaPagamento, escolherUmaParcelaPagamento } from '../../../support/para_pedidos/apenas_formas_pagamento.js';
import { modalServicosVinculados, okServicosVinculados } from '../../../support/para_pedidos/apenas_servicos.js';
import { botaoFinalizarPedido, pedidoGerado } from '../../../support/para_pedidos/apenas_finalizar_pedido.js';
import { processoVendaNFe } from '../../../support/para_pedidos/apenas_processos_venda.js';
import { avancarParaParcelas, avancarFinal} from '../../../support/para_pedidos/apenas_botoes_avancar.js';
import { tirarEntrega } from '../../../support/para_pedidos/apenas_entrega.js';

describe('Gerar pedido de venda com desconto', () => {

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

        it('1. Ped venda: produto 1912 0 0 com desconto Sub (-) / R$', () => {

            produtoDescontoCifrao() //PRODUTO
            saldodisponivel()
            escolherProdutoDescontoCifrao()
            cy.wait(200)
            escolherVoltagemProdutoDescontoCifrao() 
            clicarAdicionarProduto()
            cy.wait(500)
            modalServicosVinculados() //SERVICOS
            okServicosVinculados()
            clicarBotaoDesconto() //DESCONTO
            validarModalSubSobre()
            aplicarDescontoR$()
            tirarEntrega() //ENTREGA
            cy.wait(2200)
            avancarParaParcelas()
            botaoGerarParcelas() //GERAR PARCELAS
            carregandoFormaPagamento()
            escolherFormaPagamentoPrincipal()
            cy.wait(3000)
            escolherUmaParcelaPagamento()
            cy.wait(400)
            avancarFinal()
        })

        it('2. Ped venda: produto 1913 0 0 com desconto Sub (-) / % (Porcentagem)', () => {

            produtoDescontoPercentual() //PRODUTO
            saldodisponivel()
            escolherProdutoDescontoPercentual()
            cy.wait(200)
            escolherVoltagemProdutoDescontoPercentual() 
            clicarAdicionarProduto()
            cy.wait(500)
            modalServicosVinculados() //SERVICOS
            okServicosVinculados()
            clicarBotaoDesconto() //DESCONTO
            validarModalSubSobre()
            aplicarDescontoPorcentagem()
            tirarEntrega() //ENTREGA
            cy.wait(400)
            avancarParaParcelas()
            botaoGerarParcelas() //GERAR PARCELAS
            carregandoFormaPagamento()
            escolherFormaPagamentoPrincipal()
            cy.wait(3000)
            escolherUmaParcelaPagamento()
            cy.wait(400)
            avancarFinal()
        })

        it('3. Ped venda: produto 1914 0 0 com desconto Sub (-) / VALOR FIXO', () => {

            produtoDescontoValorFixo() //PRODUTO
            saldodisponivel()
            escolherProdutoDescontoValorFixo()
            cy.wait(200)
            escolherVoltagemProdutoDescontoValorFixo() 
            clicarAdicionarProduto()
            cy.wait(500)
            modalServicosVinculados() //SERVICOS
            okServicosVinculados()
            clicarBotaoDesconto() //DESCONTO
            validarModalSubSobre()
            aplicarDescontoValorFixo()
            tirarEntrega() //ENTREGA
            cy.wait(400)
            avancarParaParcelas()
            botaoGerarParcelas() //GERAR PARCELAS
            carregandoFormaPagamento()
            escolherFormaPagamentoPrincipal()
            cy.wait(3000)
            escolherUmaParcelaPagamento()
            cy.wait(400)
            avancarFinal()
        })
    })

    afterEach(() => {
        botaoFinalizarPedido() //RESUMO
        pedidoGerado()
      });
})