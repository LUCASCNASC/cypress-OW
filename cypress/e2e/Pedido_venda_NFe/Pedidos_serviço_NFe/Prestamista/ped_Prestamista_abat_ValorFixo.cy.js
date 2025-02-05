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

describe('Gerar pedidos com serviço Prestamista Abatimento Valor Fixo (161)', () => {

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

        it.skip('1. Ped venda: produto 1860 0 0, inclusão 3880, prestamista 161 (55,90), 4 parcelas no recebimento Futuro com juros.', () => {
    
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

        it.skip('2. Ped venda: produto 1860 0 0 e 1870 0 0, inclusão 3880, prestamista 161 (55,90), 4 parcelas no recebimento Futuro com juros.', () => {
    
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

        it.only('3. Ped venda: produto 1922 0 0 (promo a prazo 171), inclusão 3880 (outro recebimento 3860), prestamista 161, 4 parcelas no recebimento Futuro com juros', () => {
    
            prdPromoPrazoPrestPrimAbatVF()
            saldodisponivel()
            escolherProdutoPesquisa()
            clicarVoltagemProduto() //PRODUTO
            selecionarPrimeiraPromoProduto()
            escolherRecebPromoPrazoFutComJurosPrestAbatVF()
            addProduto()
            modalServicosVinculados()
            okServicosVinculados() //SERVIÇOS
            avancarParaTransportadora()
            avancarParcelasEntrega()
            cy.intercept('GET', '/images/icons/chain.svg').as('api_icons')
            cy.wait('@api_icons', { timeout: 40000 })
            clicarEditarParcelas()
            escolherQuatroParcelaPagamento()
            okSeguroPrestamista()
            ticketPrestamistaAdicionado() //Validando adição do prestamista
             
        })

        it('4. Ped venda: produto 1923 0 0 (promo a prazo 172 - isentar juros serviços), inclusão 3880 (outro recebimento 3860), prestamista 161, 4 parcelas no recebimento Futuro com juros', () => {
        })

        it('5. Ped venda: produto 1924 0 0 + garantia Não separa (promo a prazo 173 - isentar juros garantia), inclusão 3880 (outro recebimento 3860), prestamista 161, 4 parcelas no recebimento Futuro com juros', () => {
        })
    })

    context('Com entrega / Produto sem promoção - Prestamista com abatimento Valor Fixo', () => {

        it.skip('6. Ped venda: produto 1860 0 0, inclusão 3878, prestamista 161 (55,90), 4 parcelas no recebimento Presente com juros.', () => {
    
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
            escolherRecebPresentePrestAbatValFixo()
            escolherQuatroParcelaPagamento()
            okSeguroPrestamista()
            ticketPrestamistaAdicionado() //Validando adição do prestamista
            avancarFinal()
            botaoFinalizarPedido() //RESUMO
            pedidoGerado()
        })

    })
})