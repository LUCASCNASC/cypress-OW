import { saldodisponivel, clienteComRota, escolherProdutoPesquisa, clicarVoltagemProduto, addProduto } from '../../../support/para_pedidos/gerais_pedidos.js';
import { prdPrimeiroFinanBaixa, prdSegundoFinanBaixa } from '../../../support/produtos_pedidos/prd_financeiro_baixa.js'
import { botaoGerarParcelas, carregandoFormaPagamento, escolherDuasParcelaPagamento } from '../../../support/para_pedidos/parcelas_pedido.js';
import { escolherFormaPagamentoPrincipal } from '../../../support/para_pedidos/processo_recebimento.js';
import { modalServicosVinculados, okServicosVinculados } from '../../../support/para_pedidos/apenas_servicos.js';
import { botaoFinalizarPedido, pedidoGerado } from '../../../support/para_pedidos/apenas_finalizar_pedido.js';
import { processoFinanceiroBaixaNFe } from '../../../support/para_pedidos/processo_venda.js';
import { avancarParaParcelas, avancarFinal, avancarParaTransportadora, avancarParcelasEntrega } from '../../../support/para_pedidos/apenas_botoes_avancar.js';
import { tirarEntrega, tirarEntregaSegundo } from '../../../support/para_pedidos/apenas_entrega.js';

describe('Gerar pedido com financeiro na baixa', () => {

    beforeEach(() => {
        cy.visit('/');
        cy.clearAllSessionStorage();
        cy.login();
        cy.urlAposLogin()
        cy.tituloPagina()
        processoFinanceiroBaixaNFe()
        clienteComRota()
        prdPrimeiroFinanBaixa() //PESQUISA PRODUTO
        saldodisponivel()
        escolherProdutoPesquisa() //ESCOLHER PRODUTO
    })
  
    context('Sem entrega/ processo 9863 - caminho feliz', () => {

        it('1. Ped venda: produto 1860 0 0', () => {
                      
            clicarVoltagemProduto() //VOLTAGEM
            addProduto()
            modalServicosVinculados() //SERVIÇOS
            okServicosVinculados()
            tirarEntrega() //ENTREGA
            avancarParaParcelas() 
            botaoGerarParcelas() //GERAR PARCELAS
            carregandoFormaPagamento() 
            escolherFormaPagamentoPrincipal()
            escolherDuasParcelaPagamento()
            avancarFinal()
            botaoFinalizarPedido() //RESUMO
            pedidoGerado()
        })

        it('2. Ped venda: produtos 1860 0 0 e 1870 0 0', () => {
                      
            clicarVoltagemProduto() //VOLTAGEM
            addProduto()
            modalServicosVinculados() //SERVICOS
            okServicosVinculados()
            tirarEntrega() //ENTREGA
            prdSegundoFinanBaixa() //PESQUISA PRODUTO - SEGUNDO
            saldodisponivel()
            escolherProdutoPesquisa() //ESCOLHER PRODUTO
            clicarVoltagemProduto() //VOLTAGEM
            addProduto()
            modalServicosVinculados() //SERVIÇOS
            okServicosVinculados()
            tirarEntregaSegundo() //ENTREGA - SEGUNDO PRODUTO
            avancarParaParcelas() 
            botaoGerarParcelas() //GERAR PARCELAS
            carregandoFormaPagamento()
            escolherFormaPagamentoPrincipal()
            escolherDuasParcelaPagamento()
            avancarFinal()
            botaoFinalizarPedido() //RESUMO
            pedidoGerado()
        })
    })
    
    context('Com entrega/ processo 9863 - caminho feliz', () => {

        it('3. Ped venda: produto 1860 0 0', () => {
                      
            clicarVoltagemProduto() //VOLTAGEM
            addProduto()
            modalServicosVinculados() //SERVIÇOS
            okServicosVinculados()
            avancarParaTransportadora()
            avancarParcelasEntrega()
            botaoGerarParcelas() //GERAR PARCELAS
            carregandoFormaPagamento() 
            escolherFormaPagamentoPrincipal()
            escolherDuasParcelaPagamento()
            avancarFinal()
            botaoFinalizarPedido() //RESUMO
            pedidoGerado()
        })

        it('4. Ped venda: produtos 1860 0 0 e 1870 0 0', () => {
                      
            clicarVoltagemProduto() //VOLTAGEM
            addProduto()
            modalServicosVinculados() //SERVIÇOS
            okServicosVinculados()
            prdSegundoFinanBaixa() //PESQUISA PRODUTO - SEGUNDO
            saldodisponivel()
            escolherProdutoPesquisa() //ESCOLHER PRODUTO
            clicarVoltagemProduto() //VOLTAGEM
            addProduto()
            modalServicosVinculados() //SERVIÇOS
            okServicosVinculados()
            avancarParaTransportadora()
            avancarParcelasEntrega()
            botaoGerarParcelas() //GERAR PARCELAS
            carregandoFormaPagamento()
            escolherFormaPagamentoPrincipal()
            escolherDuasParcelaPagamento()
            avancarFinal()
            botaoFinalizarPedido() //RESUMO
            pedidoGerado()
        })
    })
})