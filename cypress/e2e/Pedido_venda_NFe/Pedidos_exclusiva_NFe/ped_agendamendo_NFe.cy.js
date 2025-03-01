import { validarComSaldo, escolherProdutoPesquisa, clicarVoltagemProduto, clicarAdicionarProduto, validarSemSaldo, trocarFilialFaturamento } from '../../../support/para_pedidos/gerais_pedidos.js';
import { aumentarQuantVendaCinco, saldoRemotoAReceber, aumentarQuantVendaDez } from '../../../support/para_pedidos/para_pedidos_exclusiva.js';
import { primeiroPrdNormalExclusiva, kitSemSaldoAgendamento, kitVolumes, produtoSaldoReceber, prdSaldoReceberDuasLinhas } from '../../../support/produtos_pedidos/prd_exclusiva';
import { botaoGerarParcelas, carregandoFormaPagamento, escolherUmaParcelaPagamento, escolherDuasParcelaPagamento } from '../../../support/para_pedidos/parcelas_pedido.js';
import { escolherFormaPagamentoPrincipal } from '../../../support/para_pedidos/processos/processo_recebimento.js';
import { validarModalServVinculado, clicarOKServVinculado } from '../../../support/para_pedidos/servicos/apenas_servicos.js';
import { ProcessoVenda } from '../../../../pages/para_pedidos/processos/processo_venda.js'
import { EscolherCliente } from '../../../../pages/para_pedidos/cliente/cliente.js'
import { AvancarNormal } from '../../../../pages/para_pedidos/botoes/avancar/avancar_normal.js'
import { FinalizarPed } from '../../../../pages/para_pedidos/finalizar_pedido.js'
import { TirarEntrega } from '../../../../pages/para_pedidos/entrega/tirar_entrega.js'
import { GeralEntrega } from '../../../../pages/para_pedidos/entrega/geral_entrega.js'

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
            AvancarNormal.paraTransportadora()
            GeralEntrega.modalInconsApenasTransp()
            GeralEntrega.escolherTransportadora()
            AvancarNormal.paraParcelas()
            botaoGerarParcelas() //GERAR PARCELAS
            carregandoFormaPagamento()
            escolherFormaPagamentoPrincipal()
            escolherDuasParcelaPagamento()
            AvancarNormal.final()
            FinalizarPed.clicarFinalizarPed() //RESUMO
            FinalizarPed.validarPedGerado()
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
            AvancarNormal.paraTransportadora()
            GeralEntrega.modalInconsApenasTransp()
            GeralEntrega.escolherTransportadora()
            AvancarNormal.paraParcelas()
            botaoGerarParcelas() //GERAR PARCELAS
            carregandoFormaPagamento()
            escolherFormaPagamentoPrincipal()
            escolherDuasParcelaPagamento()
            AvancarNormal.final()
            FinalizarPed.clicarFinalizarPed() //RESUMO
            FinalizarPed.validarPedGerado()
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
            AvancarNormal.paraTransportadora()
            GeralEntrega.modalInconsApenasTransp()
            GeralEntrega.escolherTransportadora()
            AvancarNormal.paraParcelas()
            botaoGerarParcelas() //GERAR PARCELAS
            carregandoFormaPagamento()
            escolherFormaPagamentoPrincipal()
            escolherDuasParcelaPagamento()
            AvancarNormal.final()
            FinalizarPed.clicarFinalizarPed() //RESUMO
            FinalizarPed.validarPedGerado()
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
            TirarEntrega.primeiro() //ENTREGA
            AvancarNormal.paraParcelas()
            botaoGerarParcelas() //GERAR PARCELAS
            carregandoFormaPagamento()
            escolherFormaPagamentoPrincipal()
            escolherDuasParcelaPagamento()
            AvancarNormal.final()
            FinalizarPed.clicarFinalizarPed() //RESUMO
            FinalizarPed.validarPedGerado()
        })
    })
})