import { saldodisponivel, clienteComRota, escolherProdutoPesquisa, clicarVoltagemProduto, addProduto }  from '../../../support/para_pedidos/gerais_pedidos.js';
import { produtoNormalPrimeiro } from '../../../support/produtos_pedidos/prd_normal';
import { okPedidoGerado, iconeMenuOpcoesPed, pedidosPendentesOpcaoMenuPed, escolherPedidoPendente, clicarDetalhes, clicarEditarPedido, 
         removerFormaPagamento } from '../../../support/para_pedidos/para_alterar_pedido.js';
import { arrastarFormaPagamento } from '../../../support/para_pedidos/para_pedido_desconto.js';
import { modalServicosVinculados, okServicosVinculados } from '../../../support/para_pedidos/servicos/apenas_servicos.js';
import { botaoGerarParcelas, carregandoFormaPagamento, escolherUmaParcelaPagamento, escolherDuasParcelaPagamento } from '../../../support/para_pedidos/parcelas_pedido.js';
import { escolherFormaPagamentoPrincipal, escolherSegundaFormaPagamento, } from '../../../support/para_pedidos/processos/processo_recebimento.js';
import { clicarFinalizarPedido, validarPedidoGerado, validarPedidoAlteradoSucesso } from '../../../support/para_pedidos/apenas_finalizar_pedido.js';
import { processoVendaNFCe } from '../../../support/para_pedidos/processos/processo_venda.js';
import { avancarFinal, avancarParaTransportadora, avancarParcelasEntrega } from '../../../support/para_pedidos/apenas_botoes_avancar.js';
import { escolherTransportadora, modalInconsApenasTransp } from '../../../support/para_pedidos/apenas_entrega.js';
import { infoFinalClienteSemEntrega, infoFinalClienteComEntrega, infoFinalEntrega, validarObsNotaFiscalVazio, validarObsInternaVazio } from '../../../support/para_pedidos/validar_tela/tela_final.js';

describe('Gerar pedido normal com entrega, entrar alterando, modificar e salvar.', () => {

    beforeEach(() => {
        cy.visit('/')
        cy.clearAllSessionStorage()
        cy.login()
        cy.urlAposLogin()
        cy.tituloPagina()
        processoVendaNFCe()
        clienteComRota()
    })

    context('Com entrega/ processo 9890 - caminho feliz', () => {

        it.skip('1. Gerar pedido com entrega, alterar forma de pagamento. Produto 1860 0 0.', () => {
                      
            produtoNormalPrimeiro() //PRODUTO
            saldodisponivel()
            escolherProdutoPesquisa()
            clicarVoltagemProduto() //PRODUTO
            addProduto()
            modalServicosVinculados() //SERVICOS
            okServicosVinculados()
            avancarParaTransportadora()
            modalInconsApenasTransp() //ESCOLHER TRANSPORTADORA
            escolherTransportadora()
            avancarParcelasEntrega()
            botaoGerarParcelas() //GERAR PARCELAS
            carregandoFormaPagamento()
            escolherFormaPagamentoPrincipal()
            escolherDuasParcelaPagamento()
            avancarFinal()
            clicarFinalizarPedido() //RESUMO
            validarPedidoGerado()
            okPedidoGerado()
            cy.wait(1500)

            iconeMenuOpcoesPed() //ALTERAÇÃO PEDIDO WEB
            pedidosPendentesOpcaoMenuPed() //PEDIDOS PENDENTES
            escolherPedidoPendente()
            clicarDetalhes()
            clicarEditarPedido()
            avancarParaTransportadora()
            avancarParcelasEntrega()
            arrastarFormaPagamento() //ARRASTAR PARA REMOVER FORMA DE PAGAMENTO ANTIGA
            removerFormaPagamento()
            cy.wait(10000)
            avancarParcelasEntrega()

            botaoGerarParcelas() //GERAR PARCELAS
            carregandoFormaPagamento()
            escolherSegundaFormaPagamento()
            escolherUmaParcelaPagamento()
            avancarFinal()
            clicarFinalizarPedido() //RESUMO
            validarPedidoAlteradoSucesso()
        })
    })
})