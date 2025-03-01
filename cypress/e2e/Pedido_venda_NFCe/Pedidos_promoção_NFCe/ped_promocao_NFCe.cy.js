import { selecionarPrimeiraPromoProduto, ticketPromocao } from '../../../support/para_pedidos/gerais_pedidos.js'
import { clicarGerarParcelas } from '../../../support/para_pedidos/apenas_formas_pagamento.js';
import { clicarFinalizarPedido, validarPedidoGerado } from '../../../support/para_pedidos/apenas_finalizar_pedido.js';
import { escolherRecebPromoPagPrincipal } from '../../../support/para_pedidos/processos/processo_recebimento_promo.js';
import { escolherTransportadora, modalInconsApenasTransp } from '../../../support/para_pedidos/apenas_entrega.js';
import { infoFinalClienteSemEntrega, infoFinalClienteComEntrega, infoFinalEntrega, validarObsNotaFiscalVazio, validarObsInternaVazio } from '../../../support/para_pedidos/validar_tela/tela_final.js';
import { ProcessoVenda } from '../../../../pages/para_pedidos/processos/processo_venda.js'
import { EscolherCliente } from '../../../../pages/para_pedidos/cliente/cliente.js'
import { Produto } from '../../../../pages/produtos/prd_normal.js'
import { GeralProduto } from '../../../../pages/produtos/gerais_pedido.js'
import { ValidarSaldo } from '../../../../pages/para_pedidos/saldo/validar_saldo.js'
import { Servico } from '../../../../pages/para_pedidos/servicos/valida_servicos_adicionados.js'
import { AvancarNormal } from '../../../../pages/para_pedidos/botoes/avancar/avancar_normal.js'

describe('Gerar pedidos com promoção com entrega', () => {

    beforeEach(() => {
        cy.visit('/')
        cy.clearAllSessionStorage()
        cy.login()
        cy.urlAposLogin()
        cy.tituloPagina()
        ProcessoVenda.NFCe()
        EscolherCliente.comRota()
    })

    context('Com entrega /com promoção/ processo 9890 - caminho feliz', () => {

        //verificar 
        it.skip('1. Ped venda com promoção partida (promoção 152): produto 1868 0 0', () => {
    
            Produto.promoPartida() //PRODUTO
            ValidarSaldo.comSaldo()
            GeralProduto.escolherProdutoPesquisa() ; ticketPromocao() 
            GeralProduto.clicarVoltagemProduto()
            selecionarPrimeiraPromoProduto()
            escolherRecebPromoPagPrincipal()
            GeralProduto.clicarAdicionarProduto()
            Servico.validarModalServVinc() //SERVICOS
            Servico.clicarOKServVinc()
            AvancarNormal.paraTransportadora()
            modalInconsApenasTransp() //ESCOLHER TRANSPORTADORA
            escolherTransportadora()
            AvancarNormal.parcelasEntrega()
            clicarGerarParcelas() //GERAR PARCELAS

            //Escolher "Forma de pagamento"
            cy.get('[style=""] > md-collapsible-header.layout-row > .md-collapsible-tools > .ng-scope').click()
            cy.wait(4000)
            //Escolher parcelamento
            cy.get('.active > md-collapsible-body > .layout-column > [style="position: relative"] > :nth-child(1) > div.ng-binding').click()

            AvancarNormal.final()
            clicarFinalizarPedido() //RESUMO
            validarPedidoGerado()
        })
    
        //verificar 
        it.skip('2. Ped venda com promoção a prazo com entrada (promoção 150): produto 1866 0 0', () => {
    
            Produto.promoPrazoEntrada() //PRODUTO
            ValidarSaldo.comSaldo()
            GeralProduto.escolherProdutoPesquisa() ; ticketPromocao() 
            GeralProduto.clicarVoltagemProduto()
            selecionarPrimeiraPromoProduto() //PROMOÇÃO
            escolherRecebPromoPagPrincipal()
            GeralProduto.clicarAdicionarProduto()
            Servico.validarModalServVinc() //SERVICOS
            Servico.clicarOKServVinc()
            AvancarNormal.paraTransportadora()
            modalInconsApenasTransp() //ESCOLHER TRANSPORTADORA
            escolherTransportadora()
            AvancarNormal.parcelasEntrega()
            cy.wait(6000)

            //"GERAR PAGAMENTO"
            cy.get('.layout-wrap > .md-primary').scrollTo('top').wait(200)
            cy.contains('.md-select-value', 'Forma de pagamento').click()
            // cy.get('.white > :nth-child(3)').click({force:true})
            // cy.contains('3861 - T.A. A Receber A Vista').click({force:true})
            // clicarGerarPagamento()

            // clicarGerarParcelas() //GERAR PARCELAS
            // carregandoFormaPagamento()
            // cy.wait(3000)
            // escolherFormaPagamentoPrincipal()
            // escolherDuasParcelaPagamento()
            // AvancarNormal.final()
            // clicarFinalizarPedido() //RESUMO
            // validarPedidoGerado()
        })

        //verificar 
        it.skip('3. Ped venda com promoção a prazo parcelado (promoção 151): produto 1867 0 0', () => {
    
            Produto.promoPrazoParcelado() //PRODUTO
            ValidarSaldo.comSaldo()
            GeralProduto.escolherProdutoPesquisa() ; ticketPromocao()
            GeralProduto.clicarVoltagemProduto()
            selecionarPrimeiraPromoProduto() //PROMOÇÃO
            escolherRecebPromoPagPrincipal()
            GeralProduto.clicarAdicionarProduto()
            Servico.validarModalServVinc() //SERVICOS
            Servico.clicarOKServVinc()
            AvancarNormal.paraTransportadora()
            modalInconsApenasTransp() //ESCOLHER TRANSPORTADORA
            escolherTransportadora()
            AvancarNormal.parcelasEntrega()
            clicarGerarParcelas() //GERAR PARCELAS

            //Escolher a forma de pagamento
            cy.get('[style=""] > md-collapsible-header.layout-row > .md-collapsible-tools > .ng-scope').click({force:true})
            cy.wait(3000)
            //Escolher a forma de pagamento/parcelas
            cy.get('.active > md-collapsible-body > .layout-column > [style="position: relative"] > :nth-child(1) > div.ng-binding').click({force:true})
            AvancarNormal.final()
            clicarFinalizarPedido() //RESUMO
            validarPedidoGerado()
        })  
    })
})