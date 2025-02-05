import { saldodisponivel, clienteComRota, selecionarPrimeiraPromoProduto, clicarEditarParcelas, ticketPrestamistaAdicionado,
         escolherProdutoPesquisa, clicarVoltagemProduto, addProduto, ticketPrestAdicionadoRecebAgrupado, compararSubtotalTotalFinanceiro } from '../../../../support/para_pedidos/gerais_pedidos.js';
import { produtoNormalPrimeiro, produtoNormalSegundo } from '../../../../support/produtos_pedidos/prd_normal.js';
import { prdPromoPrazoPrestPrimAbatVF, prdPromoPrazoPrestSegAbatVF, prdPromoPrazoPrestTercAbatVF, escolherRecebPromoPrazoFutComJurosPrestAbatVF } from '../../../../support/produtos_pedidos/prd_promo_prestamista.js';
import { garantiaNaoSepara,  modalServicosVinculados, okServicosVinculados, okSeguroPrestamista, messPrestamistaRemovido, addSeguroPrestamista } from '../../../../support/para_pedidos/apenas_servicos.js';
import { botaoGerarParcelas, carregandoFormaPagamento, escolherQuatroParcelaPagamento, 
         inserirDataAmanha1Vencimento, botaoGerarParcelasAlterVencimento,  escolherUmaParcelaPagamento, inserirData31Dias1Vencimento } from '../../../../support/para_pedidos/parcelas_pedido.js';
import { escolherFormaPagamentoPrincipal, escolherSegundaFormaPagamento, escolherRecebFutComJurosPrestAbatOrigemPrd } from '../../../../support/para_pedidos/processo_recebimento.js';
import { botaoFinalizarPedido, pedidoGerado } from '../../../../support/para_pedidos/apenas_finalizar_pedido.js';
import { processoVendaNFe } from '../../../../support/para_pedidos/processo_venda.js';
import { avancarParaParcelas, avancarFinal, avancarParaTransportadora, avancarParcelasEntrega } from '../../../../support/para_pedidos/apenas_botoes_avancar.js';
import { tirarEntrega, tirarEntregaSegundo } from '../../../../support/para_pedidos/apenas_entrega.js';
import { agruparLancamentos } from '../../../../support/para_pedidos/para_ped_varios_recebimentos.js';

describe('Gerar pedidos com serviço Prestamista Abatimento Valor Fixo - Origem Produto (162)', () => {

    beforeEach(() => {
        cy.visit('/')
        cy.clearAllSessionStorage()
        cy.login()
        cy.urlAposLogin()
        cy.tituloPagina() 
        processoVendaNFe()
        clienteComRota()
    })   

    context('Com entrega / Produtos sem promoção - Prestamista com abatimento Valor Fixo', () => {

        it.skip('1. Ped venda: produto 1860 0 0, inclusão 3881, prestamista 162 (99,30), 4 parcelas no recebimento Futuro com juros.', () => {
    
            produtoNormalPrimeiro()
            saldodisponivel()
            escolherProdutoPesquisa()
            clicarVoltagemProduto() //PRODUTO
            addProduto()
            modalServicosVinculados()
            okServicosVinculados() //SERVIÇOS
            avancarParaTransportadora()
            avancarParcelasEntrega()
            botaoGerarParcelas() //GERAR PARCELAS
            carregandoFormaPagamento()
            escolherRecebFutComJurosPrestAbatOrigemPrd()
            escolherQuatroParcelaPagamento()
            okSeguroPrestamista()
            ticketPrestamistaAdicionado() //Validando adição do prestamista
            avancarFinal()
            botaoFinalizarPedido() //RESUMO
            pedidoGerado()
        })

        it.skip('2. Ped venda: produto 1860 0 0 e 1870 0 0, inclusão 3881 e 3860, prestamista 162 (99,30), 4 parcelas no recebimento Futuro com juros.', () => {
    
            produtoNormalPrimeiro()
            saldodisponivel()
            escolherProdutoPesquisa()
            clicarVoltagemProduto() //PRODUTO
            addProduto()
            modalServicosVinculados()
            garantiaNaoSepara()
            okServicosVinculados() //SERVIÇOS
            produtoNormalSegundo()
            saldodisponivel()
            escolherProdutoPesquisa()
            clicarVoltagemProduto() //PRODUTO
            addProduto()
            modalServicosVinculados()
            okServicosVinculados()
            avancarParaTransportadora()
            avancarParcelasEntrega()
            botaoGerarParcelas() //GERAR PARCELAS
            carregandoFormaPagamento()
            escolherRecebFutComJurosPrestAbatOrigemPrd()
            escolherQuatroParcelaPagamento()
            okSeguroPrestamista()
            ticketPrestamistaAdicionado()
            avancarFinal()
            botaoFinalizarPedido() //RESUMO
            pedidoGerado()
        })
    })
})