import { clicarCarrinhoCompras, botaoAvancarPedido, produtoServicoAvulso, saldoDisponivelServico, escolherServicoPesquisa, 
         messItemAdicionadoSucesso, servicoAdicionadoCarrinho, botaoGerarParcelasServicos } from '../../../support/para_pedidos/para_servicos_avulsos.js';
import { carregandoFormaPagamento, escolherDuasParcelaPagamento } from '../../../support/para_pedidos/parcelas_pedido.js';
import { escolherFormaPagamentoPrincipal } from '../../../support/para_pedidos/processo_recebimento.js';
import { botaoFinalizarPedido, pedidoGerado } from '../../../support/para_pedidos/apenas_finalizar_pedido.js';
import { processoVendaServicoAvulso } from '../../../support/para_pedidos/processo_venda.js';
import { avancarFinal } from '../../../support/para_pedidos/apenas_botoes_avancar.js';
import { clienteComRota } from '../../../support/para_pedidos/gerais_pedidos.js';

describe('Venda de serviço avulso', () => {

    beforeEach(() => {
        cy.visit('/')
        cy.clearAllSessionStorage()
        cy.login()
        cy.urlAposLogin()
        cy.tituloPagina() 
        processoVendaServicoAvulso()
        clienteComRota()
    })

    context('Processo 9888 - caminho feliz', () => {

        it('1. Venda de Mão de obra - 144 (T.A. MO Não Destaca e Separa Processo Diferente)', () => {

            produtoServicoAvulso() //PRODUTO
            saldoDisponivelServico()
            escolherServicoPesquisa()
            messItemAdicionadoSucesso()
            clicarCarrinhoCompras() //CARRINHO COMPRAS
            servicoAdicionadoCarrinho()
            botaoAvancarPedido()
            botaoGerarParcelasServicos() //GERAR PARCELAS
            carregandoFormaPagamento()
            escolherFormaPagamentoPrincipal()
            escolherDuasParcelaPagamento()
            avancarFinal()
            botaoFinalizarPedido() //RESUMO
            pedidoGerado()
        })
    })
})