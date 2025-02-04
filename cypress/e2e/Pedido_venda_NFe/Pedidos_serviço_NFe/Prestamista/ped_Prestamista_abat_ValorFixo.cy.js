import { saldodisponivel, clienteComRota, selecionarPrimeiraPromoProduto, clicarEditarParcelas, ticketPrestamistaAdicionado,
         escolherProdutoPesquisa, clicarVoltagemProduto, addProduto, ticketPrestAdicionadoRecebAgrupado, compararSubtotalTotalFinanceiro } from '../../../../support/para_pedidos/gerais_pedidos.js';
import { produtoNormalPrimeiro, produtoNormalSegundo } from '../../../../support/para_pedidos_NFe/NFe_prd_normal.js';
import { prdPromoPrazoPrestPrimAbatVF, prdPromoPrazoPrestSegAbatVF, prdPromoPrazoPrestTercAbatVF, escolherRecebPromoPrazoFutComJurosPrestAbatVF } from '../../../../support/para_pedidos_NFe/NFe_prd_promo_prestamista.js';
import { garantiaNaoSepara,  modalServicosVinculados, okServicosVinculados, okSeguroPrestamista, messPrestamistaRemovido, addSeguroPrestamista } from '../../../../support/para_pedidos/apenas_servicos.js';
import { botaoGerarParcelas, escolherFormaPagamentoPrincipal, carregandoFormaPagamento, escolherQuatroParcelaPagamento, 
         inserirDataAmanha1Vencimento, botaoGerarParcelasAlterVencimento,  escolherUmaParcelaPagamento, inserirData31Dias1Vencimento,
         escolherSegundaFormaPagamento,escolherRecebFutSemJurosPrestAbatValFixo, escolherRecebPresentePrestAbatValFixo,
         escolherRecebFutComJurosPrestAbatValFixo } from '../../../../support/para_pedidos/apenas_formas_pagamento.js';
import { botaoFinalizarPedido, pedidoGerado } from '../../../../support/para_pedidos/apenas_finalizar_pedido.js';
import { processoVendaNFe } from '../../../../support/para_pedidos/apenas_processos_venda.js';
import { avancarParaParcelas, avancarFinal, avancarParaTransportadora, avancarParcelasEntrega } from '../../../../support/para_pedidos/apenas_botoes_avancar.js';
import { tirarEntrega, tirarEntregaSegundo } from '../../../../support/para_pedidos/apenas_entrega.js';
import { agruparLancamentos } from '../../../../support/para_pedidos/para_ped_varios_recebimentos.js';

describe('Gerar pedidos com serviço Prestamista Abatimento Valor Fixo', () => {

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

        it.skip('1. Ped venda: produto 1860 0 0, inclusão 3877, prestamista 161, 4 parcelas no recebimento Futuro com juros.', () => {
    
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
            escolherRecebFutComJurosPrestAbatValFixo()
            escolherQuatroParcelaPagamento()
            okSeguroPrestamista()
            ticketPrestamistaAdicionado() //Validando adição do prestamista
            avancarFinal()
            botaoFinalizarPedido() //RESUMO
            pedidoGerado()
        })

        it.skip('2. Ped venda: produto 1860 0 0 e 1870 0 0, inclusão 3877, prestamista 161, 4 parcelas no recebimento Futuro com juros.', () => {
    
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
            escolherRecebFutComJurosPrestAbatValFixo()
            escolherQuatroParcelaPagamento()
            okSeguroPrestamista()
            ticketPrestamistaAdicionado()
            avancarFinal()
            botaoFinalizarPedido() //RESUMO
            pedidoGerado()
        })
    })

    context('Com entrega / Produtos com promoção - Prestamista com abatimento Valor Fixo', () => {

        it.only('3. Ped venda: produtos 1860 0 0 e 1870 0 0, inclusão 3876, prestamista 158, 4 parcelas no recebimento Futuro sem juros.', () => {
    
            prdPromoPrazoPrestPrimAbatVF()
            // saldodisponivel()
            // escolherProdutoPesquisa()
            // clicarVoltagemProduto() //PRODUTO
            // selecionarPrimeiraPromoProduto()
            // escolherRecebPromoPrazoFutComJurosPrestAbatVF()

            // addProduto()
            // modalServicosVinculados()
            // okServicosVinculados() //SERVIÇOS
             
        })
    })

    
})