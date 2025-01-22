import { saldodisponivel, clienteComRota, clicarAdicionarProduto } from '../../../support/para_pedidos/gerais_pedidos.js'
import { produtoPromoPartidaNFCe, produtoPromoPrazoEntradaNFCe, produtoPromoPrazoParceladoNFCe, escolherProdutoPromoPartidaNFCe, 
         escolherVoltagemProdutoPromoPartidaNFCe, escolherProdutoPromoPrazoEntradaNFCe, escolherVoltagemProdutoPromoPrazoEntradaNFCe, 
         escolherProdutoPromoPrazoParceladoNFCe, escolherVoltagemProdutoPromoPrazoParceladoNFCe, clicarAddProdutoPromoPartidaNFCe, 
         clicarAddProdutoPromoPrazoEntradaNFCe, clicarAddProdutoPromoPrazoParceladoNFCe } from '../../../support/para_pedidos_NFCe/apenasNFCe_produtos_pedidos.js';
import { clicarUsarPromocao, selecionarFormaPagPromo } from '../../../support/para_pedidos/para_pedidos_promocao.js';
import { botaoGerarParcelas, escolherFormaPagamentoPrincipal, carregandoFormaPagamento, escolherDuasParcelaPagamento } from '../../../support/para_pedidos/apenas_formas_pagamento.js';
import { modalServicosVinculados, okServicosVinculados } from '../../../support/para_pedidos/apenas_servicos.js';
import { botaoFinalizarPedido, pedidoGerado } from '../../../support/para_pedidos/apenas_finalizar_pedido.js';
import { processoVendaNFCe } from '../../../support/para_pedidos/apenas_processos_venda.js';
import { avancarFinal, avancarParaTransportadora, avancarParcelasEntrega } from '../../../support/para_pedidos/apenas_botoes_avancar.js';
import { escolherTransportadora, escolherRota, modalInconsRotaTransp, modalInconsApenasTransp } from '../../../support/para_pedidos/apenas_entrega.js';

describe('Gerar pedidos com promoção', () => {

    beforeEach(() => {
        cy.visit('/')
        cy.clearAllSessionStorage()
        cy.login()
        cy.urlAposLogin()
        cy.tituloPagina()
        processoVendaNFCe()
        clienteComRota()
        cy.wait(500)
    })

    context('Com entrega /com promoção/ processo 9890 - caminho feliz', () => {

        it('6-Pedido com promoção partida (promoção 152): produto 1868 0 0', () => {
    
            produtoPromoPartidaNFCe() //PRODUTO
            saldodisponivel()
            escolherProdutoPromoPartidaNFCe()    
            escolherVoltagemProdutoPromoPartidaNFCe()
            clicarUsarPromocao()
            selecionarFormaPagPromo()
            clicarAddProdutoPromoPartidaNFCe()
            modalServicosVinculados() //SERVIÇOS
            okServicosVinculados()
            avancarParaTransportadora()
            modalInconsApenasTransp() //ESCOLHER TRANSPORTADORA
            escolherTransportadora()
            avancarParcelasEntrega()
            botaoGerarParcelas() //GERAR PARCELAS

            //Escolher "Forma de pagamento"
            cy.get('[style=""] > md-collapsible-header.layout-row > .md-collapsible-tools > .ng-scope').click()
            cy.wait(4000)
            //Escolher parcelamento
            cy.get('.active > md-collapsible-body > .layout-column > [style="position: relative"] > :nth-child(1) > div.ng-binding').click()

            avancarFinal()
        })
    
        it('7-Pedido com promoção a prazo com entrada (promoção 150): produto 1866 0 0', () => {
    
            produtoPromoPrazoEntradaNFCe() //PRODUTO
            saldodisponivel()
            escolherProdutoPromoPrazoEntradaNFCe()     
            escolherVoltagemProdutoPromoPrazoEntradaNFCe()
            clicarUsarPromocao() //PROMOÇÃO
            selecionarFormaPagPromo()
            clicarAddProdutoPromoPrazoEntradaNFCe()
            modalServicosVinculados() //SERVIÇOS
            okServicosVinculados()
            avancarParaTransportadora()
            modalInconsApenasTransp() //ESCOLHER TRANSPORTADORA
            escolherTransportadora()
            avancarParcelasEntrega()
            cy.wait(6000)

            "GERAR PAGAMENTO"
            cy.get('.white > :nth-child(3)').click({force:true})
            cy.contains('3861 - T.A. A Receber A Vista').click({force:true})
            cy.get('.white > .layout-align-center-center > .md-primary').click({force:true})

            botaoGerarParcelas() //GERAR PARCELAS
            carregandoFormaPagamento()
            cy.wait(3000)
            escolherFormaPagamentoPrincipal()
            escolherDuasParcelaPagamento()
            avancarFinal()
        })

        it('8-Pedido com promoção a prazo parcelado (promoção 151): produto 1867 0 0', () => {
    
            produtoPromoPrazoParceladoNFCe() //PRODUTO
            saldodisponivel()
            escolherProdutoPromoPrazoParceladoNFCe()
            escolherVoltagemProdutoPromoPrazoParceladoNFCe()
            clicarUsarPromocao() //PROMOÇÃO
            selecionarFormaPagPromo()
            clicarAddProdutoPromoPrazoParceladoNFCe()
            modalServicosVinculados() //SERVIÇOS
            okServicosVinculados()
            avancarParaTransportadora()
            modalInconsApenasTransp() //ESCOLHER TRANSPORTADORA
            escolherTransportadora()
            avancarParcelasEntrega()
            botaoGerarParcelas() //GERAR PARCELAS

            //Escolher a forma de pagamento
            cy.get('[style=""] > md-collapsible-header.layout-row > .md-collapsible-tools > .ng-scope').click({force:true})
            cy.wait(3000)
            //Escolher a forma de pagamento/parcelas
            cy.get('.active > md-collapsible-body > .layout-column > [style="position: relative"] > :nth-child(1) > div.ng-binding').click({force:true})
            avancarFinal()
        })  
    })

    afterEach(() => {
        botaoFinalizarPedido() //RESUMO
        pedidoGerado()
      });
})