import { saldodisponivel, clienteComRota, escolherProdutoPesquisa, clicarVoltagemProduto, addProduto } from '../../../support/para_pedidos/gerais_pedidos.js';
import { produtoArredondarCimaBaixo } from '../../../support/produtos_pedidos/prd_normal.js';
import { arrastarFormaPagamento, clicarAlterarValor, modalAlterarValor, alterarValorParaBaixo, alterarValorParaCima } from '../../../support/para_pedidos/para_pedido_desconto.js';
import { botaoGerarParcelas, carregandoFormaPagamento, escolherUmaParcelaPagamento } from '../../../support/para_pedidos/parcelas_pedido.js';
import { escolherFormaPagamentoPrincipal } from '../../../support/para_pedidos/processos/processo_recebimento.js';
import { modalServicosVinculados, okServicosVinculados } from '../../../support/para_pedidos/servicos/apenas_servicos.js';
import { botaoFinalizarPedido, pedidoGerado } from '../../../support/para_pedidos/apenas_finalizar_pedido.js';
import { processoVendaNFe } from '../../../support/para_pedidos/processos/processo_venda.js';
import { avancarParaParcelas, avancarFinal } from '../../../support/para_pedidos/apenas_botoes_avancar.js';
import { tirarEntrega } from '../../../support/para_pedidos/apenas_entrega.js';
import { infoFinalClienteSemEntrega, infoFinalClienteComEntrega, infoFinalEntrega, validarObsNotaFiscalVazio, validarObsInternaVazio } from '../../../support/para_pedidos/validar_tela/tela_final.js';

describe('Gerar pedido normal com desconto nos juros - parametros 243 e 244 definidos no processo de inclusão', () => {

    beforeEach(() => {
        cy.visit('/')
        cy.clearAllSessionStorage()
        cy.login()
        cy.urlAposLogin()
        cy.tituloPagina()
        processoVendaNFe()
        clienteComRota()
        produtoArredondarCimaBaixo()
        saldodisponivel()
        escolherProdutoPesquisa()
    })

    context('Sem entrega/ processo 9860 - caminho feliz - processo de inclusão 3860', () => {

        it('1. Ped venda: produto 1860 0 0 - arredondar para baixo', () => {

            clicarVoltagemProduto() //PRODUTO
            addProduto()
            modalServicosVinculados() //SERVICOS
            okServicosVinculados()
            tirarEntrega() //ENTREGA
            avancarParaParcelas()
            botaoGerarParcelas() //GERAR PARCELAS
            carregandoFormaPagamento()
            escolherFormaPagamentoPrincipal()
            escolherUmaParcelaPagamento()
            arrastarFormaPagamento() //DESCONTO
            clicarAlterarValor()
            modalAlterarValor()
            alterarValorParaBaixo()
            cy.wait(400)
            avancarFinal()
            botaoFinalizarPedido() //RESUMO
            pedidoGerado()
        })

        it('2. Ped venda: produtos 1860 0 0 - arredondar para cima', () => {

            clicarVoltagemProduto() //PRODUTO
            addProduto()
            modalServicosVinculados() //SERVICOS
            okServicosVinculados()
            tirarEntrega() //ENTREGA
            avancarParaParcelas()
            botaoGerarParcelas() //GERAR PARCELAS
            carregandoFormaPagamento()
            escolherFormaPagamentoPrincipal()
            escolherUmaParcelaPagamento()
            arrastarFormaPagamento() //DESCONTO
            clicarAlterarValor()
            modalAlterarValor()
            alterarValorParaCima()
            cy.wait(400)
            avancarFinal()
            botaoFinalizarPedido() //RESUMO
            pedidoGerado()
        })
    })
})