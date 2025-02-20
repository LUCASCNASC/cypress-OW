import { clienteComRota, validarComSaldo, escolherProdutoPesquisa, clicarVoltagemProduto, clicarAdicionarProduto, validarSemSaldo,
         trocarFilialFaturamento } from '../../../support/para_pedidos/gerais_pedidos.js';
import { aumentarQuantVendaCinco, saldoRemotoAReceber, aumentarQuantVendaDez } from '../../../support/para_pedidos/para_pedidos_exclusiva.js';
import { primeiroPrdNormalExclusiva, kitSemSaldoAgendamento, kitVolumes, produtoSaldoReceber, prdSaldoReceberDuasLinhas } from '../../../support/produtos_pedidos/prd_exclusiva';
import { botaoGerarParcelas, carregandoFormaPagamento, escolherUmaParcelaPagamento, escolherDuasParcelaPagamento } from '../../../support/para_pedidos/parcelas_pedido.js';
import { escolherFormaPagamentoPrincipal } from '../../../support/para_pedidos/processos/processo_recebimento.js';
import { validarModalServVinculado, clicarOKServVinculado } from '../../../support/para_pedidos/servicos/apenas_servicos.js';
import { clicarFinalizarPedido, validarPedidoGerado } from '../../../support/para_pedidos/apenas_finalizar_pedido.js';
import { processoVendaExclusiva } from '../../../support/para_pedidos/processos/processo_venda.js';
import { avancarParaParcelas, avancarFinal, avancarParaTransportadora, avancarParcelasEntrega } from '../../../support/para_pedidos/apenas_botoes_avancar.js';
import { tirarEntrega, modalInconsApenasTransp, escolherTransportadora } from '../../../support/para_pedidos/apenas_entrega.js';
import { ProcessoVenda } from '../../../../pages/para_pedidos/processos/processo_venda.js'
import { EscolherCliente } from '../../../../pages/para_pedidos/cliente/cliente.js'

//Para testarmos esses cenários, é necessário mudar para a versão da exclusiva e criar um agendamento na filial que está sendo usada
describe('Pedidos Exclusiva - Parâmetro de empresa 1019 marcado', () => {

    beforeEach(() => {
        cy.visit('/')
        cy.clearAllSessionStorage()
        cy.login()
        cy.urlAposLogin()
        cy.tituloPagina()
        ProcessoVenda.NFe()
        EscolherCliente.comRota()
    })

    context('Configuração de processo - Exclusiva: 36 = 2; 139 = 6; 552= 5 dias', () => {

        //cenário dependente - não colocar no fluxo
        it.skip('1. Vender um produto normal (com saldo e com entrega, 15 dias) e um kit remoto (2 composições, sem saldo e sem a receber, 20 dias).', () => {

            primeiroPrdNormalExclusiva() //PRODUTO EXCLUSIVA
            validarComSaldo()
            escolherProdutoPesquisa()
            clicarVoltagemProduto() 
            clicarAdicionarProduto()
            validarModalServVinculado() //SERVICOS
            clicarOKServVinculado()
            kitSemSaldoAgendamento() //PRODUTO KIT
            validarSemSaldo()
            escolherProdutoPesquisa()
            clicarVoltagemProduto()
            trocarFilialFaturamento()
            clicarAdicionarProduto()
            avancarParaTransportadora()
            modalInconsApenasTransp()
            escolherTransportadora()
            avancarParcelasEntrega()
            botaoGerarParcelas() //GERAR PARCELAS
            carregandoFormaPagamento()
            escolherFormaPagamentoPrincipal()
            escolherDuasParcelaPagamento()
            avancarFinal()
            clicarFinalizarPedido() //RESUMO
            validarPedidoGerado()
        })

        //cenário dependente - não colocar no fluxo
        it.skip('2. Vender um produto normal (com saldo e com entrega) e um kit com composição 6 volumes (data atual + parametro 552/ 5 dias).', () => {

            primeiroPrdNormalExclusiva() //PRODUTO
            validarComSaldo()
            escolherProdutoPesquisa()      
            clicarVoltagemProduto() 
            clicarAdicionarProduto()
            validarModalServVinculado() //SERVICOS
            clicarOKServVinculado()
            kitVolumes() //PRODUTO KIT
            validarComSaldo()
            escolherProdutoPesquisa()
            clicarVoltagemProduto()
            clicarAdicionarProduto()
            avancarParaTransportadora()
            modalInconsApenasTransp()
            escolherTransportadora()
            avancarParcelasEntrega()
            botaoGerarParcelas() //GERAR PARCELAS
            carregandoFormaPagamento()
            escolherFormaPagamentoPrincipal()
            escolherDuasParcelaPagamento()
            avancarFinal()
            clicarFinalizarPedido() //RESUMO
            validarPedidoGerado()
        })
    })

    context('Configuração de processo - Exclusiva: 36 = 2; 139 = 6; 552= 5 dias', () => {

        //cenário dependente - não colocar no fluxo
        it.skip('3. Vender um produto (sem saldo e com saldo a receber para 10 dias, e com entrega), e ter um agendamento para a data de previsão.', () => {

            produtoSaldoReceber() //PRODUTO
            validarComSaldo()
            escolherProdutoPesquisa()
            clicarVoltagemProduto() 
            clicarAdicionarProduto()
            validarModalServVinculado() //SERVICOS
            clicarOKServVinculado()
            avancarParaTransportadora()
            modalInconsApenasTransp()
            escolherTransportadora()
            avancarParcelasEntrega()
            botaoGerarParcelas() //GERAR PARCELAS
            carregandoFormaPagamento()
            escolherFormaPagamentoPrincipal()
            escolherDuasParcelaPagamento()
            avancarFinal()
            clicarFinalizarPedido() //RESUMO
            validarPedidoGerado()
        })

        //cenário dependente - não colocar no fluxo
        it.skip('4. Vender um produto em duas linhas (um com 5 unidades a receber e 10 para solicitar compra), e ter um agendamento para a data de previsão para a receber.', () => {

            prdSaldoReceberDuasLinhas() //PRODUTO
            saldoRemotoAReceber()
            escolherProdutoPesquisa()
            clicarVoltagemProduto() 
            trocarFilialFaturamento()
            aumentarQuantVendaCinco()
            clicarAdicionarProduto()
            prdSaldoReceberDuasLinhas() //SEGUNDO PRODUTO
            saldoRemotoAReceber()
            escolherProdutoPesquisa()  
            clicarVoltagemProduto() 
            trocarFilialFaturamento()
            aumentarQuantVendaDez()
        })

        //cenário dependente - não colocar no fluxo
        it.skip('5. Pedido de venda normal: produto 1896 0 0 (sem entrega)', () => {
    
            primeiroPrdNormalExclusiva() //PRODUTO EXCLUSIVA
            validarComSaldo()
            escolherProdutoPesquisa()
            clicarVoltagemProduto()
            clicarAdicionarProduto()
            validarModalServVinculado() //SERVICOS
            clicarOKServVinculado()
            tirarEntrega() //ENTREGA
            avancarParaParcelas()
            botaoGerarParcelas() //GERAR PARCELAS
            carregandoFormaPagamento()
            escolherFormaPagamentoPrincipal()
            escolherDuasParcelaPagamento()
            avancarFinal()
            clicarFinalizarPedido() //RESUMO
            validarPedidoGerado()
        })
    })
})