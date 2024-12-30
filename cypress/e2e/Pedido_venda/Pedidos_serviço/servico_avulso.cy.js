import { titulopagina } from '../../../support/para_todos';
import { processoVendaServicoAvulso, escolherClientePedido, clicarCarrinhoCompras, botaoAvancarPedido, produtoServicoAvulso,
         saldoDisponivelServico, escolherServicoPesquisa } from '../../../support/para_pedidos/para_servicos_avulsos';
import { botaoGerarParcelas, avancarFinal, botaoFinalizarPedido, finalizandoPedido, pedidoGerado, carregandoFormaPagamento, 
         escolherFormaPagamentoPrincipal, escolherDuasParcelaPagamento } from '../../../support/para_pedidos/gerais_pedidos';

describe('Venda de serviço avulso', () => {

    beforeEach(() => {
        cy.visit('/');
        cy.clearAllSessionStorage();
        cy.login(); 
        titulopagina() 
        processoVendaServicoAvulso()
        escolherClientePedido()
        cy.wait(500)
    })

    context('Processo 9888 - caminho feliz', () => {

        it.skip('Venda de Mão de obra - 144 (T.A. MO Não Destaca e Separa Processo Diferente)', () => {

            produtoServicoAvulso() //PRODUTO
            saldoDisponivelServico()
            escolherServicoPesquisa()
            cy.wait(200)
            clicarCarrinhoCompras() //CARRINHO COMPRAS
            botaoAvancarPedido()
            cy.wait(3000)
            botaoGerarParcelas() //GERAR PARCELAS
            carregandoFormaPagamento()
            cy.wait(2000)
            escolherFormaPagamentoPrincipal()
            cy.wait(2000)
            escolherDuasParcelaPagamento()
            cy.wait(400)
            avancarFinal()
            cy.wait(4000) 
        })
    })

    afterEach(() => {
        botaoFinalizarPedido() //RESUMO
        finalizandoPedido()
        cy.wait(4000)
        pedidoGerado()
      });
})