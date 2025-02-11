import { validarComSaldo, clienteComRota, escolherProdutoPesquisa, clicarVoltagemProduto, addProduto } from '../../../support/para_pedidos/gerais_pedidos.js';
import { prdPrimeiroFinanBaixa, prdSegundoFinanBaixa } from '../../../support/produtos_pedidos/prd_financeiro_baixa.js';
import { clicarGerarParcelas, carregandoFormaPagamento, escolherDuasParcelaPagamento } from '../../../support/para_pedidos/parcelas_pedido.js';
import { escolherFormaPagamentoPrincipal } from '../../../support/para_pedidos/processos/processo_recebimento.js';
import { validarModalServVinculado, clicarOKServVinculado } from '../../../support/para_pedidos/servicos/apenas_servicos.js';
import { clicarFinalizarPedido, validarPedidoGerado } from '../../../support/para_pedidos/apenas_finalizar_pedido.js';
import { processoFinanceiroBaixaNFCe } from '../../../support/para_pedidos/processos/processo_venda.js';
import { avancarFinal, avancarParaTransportadora, avancarParcelasEntrega } from '../../../support/para_pedidos/apenas_botoes_avancar.js';
import { escolherRota, modalInconsApenasTransp, escolherTransportadora } from '../../../support/para_pedidos/apenas_entrega.js';
import { infoFinalClienteSemEntrega, infoFinalClienteComEntrega, infoFinalEntrega, validarObsNotaFiscalVazio, validarObsInternaVazio } from '../../../support/para_pedidos/validar_tela/tela_final.js';

describe('Gerar pedido com financeiro na baixa com entrega', () => {

    beforeEach(() => {
        cy.visit('/');
        cy.clearAllSessionStorage();
        cy.login();
        cy.urlAposLogin()
        cy.tituloPagina()
        processoFinanceiroBaixaNFCe()
        clienteComRota()
        prdPrimeiroFinanBaixa()
        validarComSaldo()
        escolherProdutoPesquisa()
    })
    
    context('Com entrega/ processo 9892 - caminho feliz', () => {

        it('1. Ped venda: produto 1860 0 0', () => {
                      
            clicarVoltagemProduto() //PRODUTO
            addProduto()
            validarModalServVinculado() //SERVICOS
            clicarOKServVinculado()
            avancarParaTransportadora()
            modalInconsApenasTransp()
            escolherTransportadora()
            avancarParcelasEntrega()
            clicarGerarParcelas() //GERAR PARCELAS
            carregandoFormaPagamento() 
            escolherFormaPagamentoPrincipal()
            escolherDuasParcelaPagamento()
            avancarFinal()
            clicarFinalizarPedido() //RESUMO
            validarPedidoGerado()
        })

        it('2. Ped venda: produtos 1860 0 0 e 1870 0 0', () => {
                      
            clicarVoltagemProduto() //PRODUTO
            addProduto()
            validarModalServVinculado() //SERVICOS
            clicarOKServVinculado()
            prdSegundoFinanBaixa() //SEGUNDO PRODUTO
            validarComSaldo()
            escolherProdutoPesquisa()
            clicarVoltagemProduto()
            addProduto()
            validarModalServVinculado() //SERVICOS
            clicarOKServVinculado()
            avancarParaTransportadora() 
            modalInconsApenasTransp()
            escolherTransportadora()
            avancarParcelasEntrega()
            clicarGerarParcelas() //GERAR PARCELAS
            carregandoFormaPagamento() 
            escolherFormaPagamentoPrincipal()
            escolherDuasParcelaPagamento()
            avancarFinal()
            clicarFinalizarPedido() //RESUMO
            validarPedidoGerado()
        })
    })
})