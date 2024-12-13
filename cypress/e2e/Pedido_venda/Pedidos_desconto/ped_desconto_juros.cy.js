import { titulopagina } from '../../../support/para_todos';
import { saldodisponivel, escolherClientePedido, pedidoGerado, botaoFinalizarPedido, finalizandoPedido, clicarAdicionarProduto,
         tirarEntrega, botaoGerarParcelas, processoVendaPrincipal, modalServicosVinculados, okServicosVinculados,
         escolherProdutoPesquisa, escolherVoltagemProduto, avancarFinal, carregandoFormaPagamento, escolherFormaPagamentoPrincipal,
         escolherUmaParcelaPagamento, avancarParaParcelas} from '../../../support/para_pedidos/gerais_pedidos';
import { produtoArredondarCimaBaixo } from '../../../support/para_pedidos/produtos_pedidos';
import { arrastarFormaPagamento, clicarAlterarValor, modalAlterarValor, alterarValorParaBaixo, alterarValorParaCima } from '../../../support/para_pedidos/para_pedido_desconto';

describe('Gerar pedido normal com desconto nos juros - parametros 243 e 244 definidos no processo de inclusão', () => {

    beforeEach(() => {
        cy.visit('/');
        cy.clearAllSessionStorage();
        cy.login();
        titulopagina()
        processoVendaPrincipal()
        escolherClientePedido()
        cy.wait(500)
        produtoArredondarCimaBaixo()
        saldodisponivel()
        escolherProdutoPesquisa()
        cy.wait(200)
    })

    context('Sem frete/ processo 9860 - caminho feliz', () => {

        it('1-Pedido de venda: produto 1860 0 0 - arredondar para baixo', () => {

            escolherVoltagemProduto() //PRODUTO
            clicarAdicionarProduto()
            cy.wait(500)
            modalServicosVinculados() //SERVICOS
            okServicosVinculados()
            tirarEntrega() //ENTREGA
            cy.wait(400)
            avancarParaParcelas()
            cy.wait(5000)
            botaoGerarParcelas() //GERAR PARCELAS
            carregandoFormaPagamento()
            cy.wait(4000)
            escolherFormaPagamentoPrincipal()
            escolherUmaParcelaPagamento()
            cy.wait(400)
            arrastarFormaPagamento() //DESCONTO
            clicarAlterarValor()
            modalAlterarValor()
            alterarValorParaBaixo()
            cy.wait(400)
            avancarFinal()
            cy.wait(6000)
        })

        it('-2Pedido de venda: produtos 1860 0 0 - arredondar para cima', () => {

            escolherVoltagemProduto() //PRODUTO
            clicarAdicionarProduto()
            cy.wait(500)
            modalServicosVinculados() //SERVICOS
            okServicosVinculados()
            tirarEntrega() //ENTREGA
            cy.wait(400)
            avancarParaParcelas()
            cy.wait(5000)
            botaoGerarParcelas() //GERAR PARCELAS
            carregandoFormaPagamento()
            cy.wait(4000)
            escolherFormaPagamentoPrincipal()
            escolherUmaParcelaPagamento()
            cy.wait(400)
            arrastarFormaPagamento() //DESCONTO
            clicarAlterarValor()
            modalAlterarValor()
            alterarValorParaCima()
            cy.wait(400)
            avancarFinal()
            cy.wait(6000)
        })
    })

    afterEach(() => {
        botaoFinalizarPedido() //RESUMO 
        finalizandoPedido()
        cy.wait(8000)
        pedidoGerado()
      });
})