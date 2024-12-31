import { processoVendaServicoAvulso, escolherClientePedido, clicarServicosMenu, clicarCarrinhoCompras, botaoAvancarPedido,
         produtoServicoHost, saldoDisponivelServico, escolherServicoPesquisa, escolherValorRecarga } from '../../../support/para_pedidos/para_servicos_avulsos';
import { botaoGerarParcelas, avancarFinal, botaoFinalizarPedido, finalizandoPedido, pedidoGerado, carregandoFormaPagamento, 
         escolherFormaPagamentoPrincipal, escolherUmaParcelaPagamento } from '../../../support/para_pedidos/gerais_pedidos';
import { iconeMenuOpcoes } from '../../../support/para_menus/para_menu_opcoes';

//Para este cenário, é necessário fazer update na coluna dataultimaatualizacao, da tabela glb.servicofaixavalorfixo
describe('Venda de serviço avulso Host - 104', () => {

    beforeEach(() => {
        cy.visit('/')
        cy.clearAllSessionStorage()
        cy.login()
        cy.urlAposLogin()
        cy.tituloPagina()
        processoVendaServicoAvulso()
        escolherClientePedido()
        cy.wait(500)
    })

    context('Processo 9888 - caminho feliz', () => {

        it.skip('Venda de Mão de obra - 144 (T.A. MO Não Destaca e Separa Processo Diferente)', () => {

            iconeMenuOpcoes()
            clicarServicosMenu()
            cy.wait(400)
            produtoServicoHost() //PRODUTO
            saldoDisponivelServico()
            escolherServicoPesquisa()
            cy.wait(200)
            escolherValorRecarga()
            cy.wait(200)
            clicarCarrinhoCompras() //CARRINHO COMPRAS
            botaoAvancarPedido()
            cy.wait(3000)
            botaoGerarParcelas() //GERAR PARCELAS
            carregandoFormaPagamento()
            cy.wait(2000)
            escolherFormaPagamentoPrincipal()
            escolherUmaParcelaPagamento()
            cy.wait(400)
            avancarFinal()
        })
    })

    // afterEach(() => {
    //     botaoFinalizarPedido() //RESUMO
    //     finalizandoPedido()
    //     cy.wait(4000)
    //     pedidoGerado()
    //   });
})