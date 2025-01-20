import { saldodisponivel, clienteComRota, clicarAdicionarProduto, escolherProdutoPesquisa, escolherVoltagemProduto } from '../../../support/para_pedidos/gerais_pedidos.js'
import { produtoNormalSegundo } from '../../../support/para_pedidos/apenas_produtos_pedidos.js';
import { produtoPromoPartida, produtoPromoPrazoEntrada, produtoPromoPrazoParcelado, clicarUsarPromocao, selecionarFormaPagPromo } from '../../../support/para_pedidos/para_pedidos_promocao.js';
import { botaoGerarParcelas, escolherFormaPagamentoPrincipal, carregandoFormaPagamento, escolherDuasParcelaPagamento } from '../../../support/para_pedidos/apenas_formas_pagamento.js';
import { modalServicosVinculados, okServicosVinculados } from '../../../support/para_pedidos/apenas_servicos.js';
import { botaoFinalizarPedido, finalizandoPedido, pedidoGerado } from '../../../support/para_pedidos/apenas_finalizar_pedido.js';
import { processoVendaNFCe } from '../../../support/para_pedidos/apenas_processos_venda.js';
import { avancarParaParcelas, avancarFinal, avancarParaTransportadora, avancarParcelasEntrega } from '../../../support/para_pedidos/apenas_botoes_avancar.js';
import { escolherTransportadora, escolherRota, modalInconsRotaTransp, tirarEntrega, tirarEntregaSegundo } from '../../../support/para_pedidos/apenas_entrega.js';
import { pegarAPICidade, esperarAPICidade } from '../../../support/para_pedidos/apenas_APIs.js';

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
    
            produtoPromoPartida() //PRODUTO
            saldodisponivel()
            escolherProdutoPesquisa()
            cy.wait(200)    
            escolherVoltagemProduto()
            clicarUsarPromocao()
            selecionarFormaPagPromo()
            clicarAdicionarProduto()
            cy.wait(500)
            modalServicosVinculados() //SERVIÇOS
            okServicosVinculados()
            cy.wait(400)
            pegarAPICidade()
            avancarParaTransportadora()
            cy.wait(6000)
            modalInconsApenasTransp() //ESCOLHER TRANSPORTADORA
            esperarAPICidade()
            escolherTransportadora()
            avancarParcelasEntrega()
            cy.wait(6000)
            botaoGerarParcelas() //GERAR PARCELAS

            //Escolher "Forma de pagamento"
            cy.get('[style=""] > md-collapsible-header.layout-row > .md-collapsible-tools > .ng-scope').click()
            cy.wait(4000)
            //Escolher parcelamento
            cy.get('.active > md-collapsible-body > .layout-column > [style="position: relative"] > :nth-child(1) > div.ng-binding').click()

            cy.wait(400)
            avancarFinal()
        })
    
        it('7-Pedido com promoção a prazo com entrada (promoção 150): produto 1866 0 0', () => {
    
            produtoPromoPrazoEntrada() //PRODUTO
            saldodisponivel()
            escolherProdutoPesquisa()
            cy.wait(200)       
            escolherVoltagemProduto()
            clicarUsarPromocao() //PROMOÇÃO
            selecionarFormaPagPromo()
            clicarAdicionarProduto()
            cy.wait(500)
            modalServicosVinculados() //SERVIÇOS
            okServicosVinculados()
            cy.wait(400)
            pegarAPICidade()
            avancarParaTransportadora()
            cy.wait(6000)
            modalInconsApenasTransp() //ESCOLHER TRANSPORTADORA
            esperarAPICidade()
            escolherTransportadora()
            avancarParcelasEntrega()
            cy.wait(6000)

            //"GERAR PAGAMENTO"
            cy.get('.white > :nth-child(3)').click({force:true})
            cy.contains('3861 - T.A. A Receber A Vista').click({force:true})
            cy.get('.white > .layout-align-center-center > .md-primary').click({force:true})

            botaoGerarParcelas() //GERAR PARCELAS
            carregandoFormaPagamento()
            escolherFormaPagamentoPrincipal()
            escolherDuasParcelaPagamento()
            cy.wait(400)
            avancarFinal()
        })

        it('8-Pedido com promoção a prazo parcelado (promoção 151): produto 1867 0 0', () => {
    
            produtoPromoPrazoParcelado() //PRODUTO
            saldodisponivel()
            escolherProdutoPesquisa()
            cy.wait(200)
            escolherVoltagemProduto()
            clicarUsarPromocao() //PROMOÇÃO
            selecionarFormaPagPromo()
            clicarAdicionarProduto()
            cy.wait(500)
            modalServicosVinculados() //SERVIÇOS
            okServicosVinculados()
            cy.wait(400)
            pegarAPICidade()
            avancarParaTransportadora()
            cy.wait(6000)
            modalInconsApenasTransp() //ESCOLHER TRANSPORTADORA
            esperarAPICidade()
            escolherTransportadora()
            avancarParcelasEntrega()
            cy.wait(7000)
            botaoGerarParcelas() //GERAR PARCELAS

            //Escolher a forma de pagamento
            cy.get('[style=""] > md-collapsible-header.layout-row > .md-collapsible-tools > .ng-scope').click({force:true})
            cy.wait(3000)
            //Escolher a forma de pagamento/parcelas
            cy.get('.active > md-collapsible-body > .layout-column > [style="position: relative"] > :nth-child(1) > div.ng-binding').click({force:true})

            cy.wait(400)
            avancarFinal()
        })  
    }) 

    context('Com entrega/ com promoção e sem promoção/ processo 9890 - caminho feliz', () => {

        it('9-Pedido com promoção partida (promoção 152): produto 1868 0 0 e produto 1870 0 0 (sem promoção)', () => {
    
            produtoPromoPartida() //PRODUTO
            saldodisponivel()
            escolherProdutoPesquisa()
            cy.wait(200)
            escolherVoltagemProduto()
            clicarUsarPromocao() //PROMOÇÃO
            selecionarFormaPagPromo()
            clicarAdicionarProduto()
            cy.wait(500)
            modalServicosVinculados() //SERVIÇOS
            okServicosVinculados()
            cy.wait(800)
            produtoNormalSegundo() //SEGUNDO PRODUTO
            cy.wait(3500)
            saldodisponivel()
            escolherProdutoPesquisa()
            cy.wait(800)
            escolherVoltagemProduto() 
            clicarAdicionarProduto()
            cy.wait(1000)
            okServicosVinculados()
            cy.wait(400)
            pegarAPICidade()
            avancarParaTransportadora()
            cy.wait(6000)
            modalInconsApenasTransp() //ESCOLHER TRANSPORTADORA
            esperarAPICidade()
            escolherTransportadora()
            avancarParcelasEntrega()
            botaoGerarParcelas() //GERAR PARCELAS
            cy.wait(6000)

            //Escolher forma de pagemento
            cy.get('[style=""] > md-collapsible-header.layout-row > .md-collapsible-tools > .ng-scope').click({force: true})
            cy.wait(3000)
            //Escolher parcelamento
            cy.get('.active > md-collapsible-body > .layout-column > [style="position: relative"] > :nth-child(1) > div.ng-binding').click({force: true})

            cy.wait(400)
            avancarFinal()
        })
    })

    // afterEach(() => {
    //     botaoFinalizarPedido() //RESUMO
    //     finalizandoPedido()
    //     cy.wait(9000)
    //     pedidoGerado()
    //   });
})