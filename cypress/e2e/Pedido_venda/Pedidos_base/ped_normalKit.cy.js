import { titulopagina } from '../../../support/para_todos';
import { escolherTransportadora, saldodisponivel, escolherRota, escolherClientePedido, pedidoGerado, botaoFinalizarPedido, processoVendaPrincipal,
         avancarParaParcelas, avancarParaTransportadora, avancarParcelasEntrega, finalizandoPedido, modalServicosVinculados, okServicosVinculados,
         escolherProdutoPesquisa, escolherVoltagemProduto, avancarFinal, clicarAdicionarProduto, botaoGerarParcelas, modalInconsRotaTransp,
         carregandoFormaPagamento, tirarEntrega, escolherFormaPagamentoPrincipal, escolherDuasParcelaPagamento, composicaoDesteKit } from '../../../support/para_pedidos/gerais_pedidos';
import { produtoKitPrimeiro } from '../../../support/para_pedidos/produtos_pedidos';

describe('Gerar pedido normal', () => {

    beforeEach(() => {
        cy.visit('/');
        cy.clearAllSessionStorage();
        cy.login();
        titulopagina()
        processoVendaPrincipal()
        escolherClientePedido()
        cy.wait(500)
        produtoKitPrimeiro()
        saldodisponivel()
        escolherProdutoPesquisa()
        cy.wait(200)
    })
  
    context('Sem frete/ processo 9860 - caminho feliz', () => {
        
        it.skip('1-Pedido de venda: kit 1862 0 0', () => {
                      
            escolherVoltagemProduto() //PRODUTO
            composicaoDesteKit()
            clicarAdicionarProduto()
            cy.wait(500)
            modalServicosVinculados() //SERVICOS
            okServicosVinculados()
            tirarEntrega() //ENTREGA
            cy.wait(400)
            avancarParaParcelas()
            cy.wait(6500)
            botaoGerarParcelas() //GERAR PARCELAS
            carregandoFormaPagamento()
            cy.wait(6000)
            escolherFormaPagamentoPrincipal()
            cy.wait(3000)
            escolherDuasParcelaPagamento()
            cy.wait(400)
            avancarFinal()
        })
    })
    
    context('Com frete/processo 9860 - caminho feliz', () => {
        
        it.skip('2-Pedido de venda: kit 1862 0 0', () => {
                      
            escolherVoltagemProduto() //PRODUTO
            composicaoDesteKit()
            clicarAdicionarProduto()
            cy.wait(500)
            modalServicosVinculados() //SERVICOS
            okServicosVinculados()
            cy.wait(400)
            avancarParaTransportadora() //ENTREGA
            cy.wait(8000)
            modalInconsRotaTransp() //ESCOLHER TRANSPORTADORA
            escolherRota()
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