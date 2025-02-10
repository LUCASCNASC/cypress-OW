import { saldodisponivel, clienteComRota, escolherProdutoPesquisa, clicarVoltagemProduto, addProduto, selecionarPrimeiraPromoProduto,
         ticketPromocao } from '../../../support/para_pedidos/gerais_pedidos.js'
import { produtoPromoPartida, produtoPromoPrazoEntrada, produtoPromoPrazoParcelado, produtoNormalSegundo } from '../../../support/produtos_pedidos/prd_normal.js';
import { botaoGerarParcelas, carregandoFormaPagamento, escolherDuasParcelaPagamento, inserirDataAmanha1Vencimento,
         botaoGerarParcelasAlterVencimento, escolherUmaParcelaPagamento } from '../../../support/para_pedidos/parcelas_pedido.js';
import { escolherFormaPagamentoPrincipal, escolherSegundaFormaPagamento } from '../../../support/para_pedidos/processos/processo_recebimento.js';
import { modalServicosVinculados, okServicosVinculados } from '../../../support/para_pedidos/servicos/apenas_servicos.js';
import { botaoFinalizarPedido, pedidoGerado } from '../../../support/para_pedidos/apenas_finalizar_pedido.js';
import { processoVendaNFe } from '../../../support/para_pedidos/processos/processo_venda.js';
import { escolherRecebPromoPagPrincipal } from '../../../support/para_pedidos/processos/processo_recebimento_promo.js';
import { avancarParaParcelas, avancarFinal, avancarParaTransportadora, avancarParcelasEntrega } from '../../../support/para_pedidos/apenas_botoes_avancar.js';
import { tirarEntrega, tirarEntregaSegundo } from '../../../support/para_pedidos/apenas_entrega.js';
import { infoFinalClienteSemEntrega, infoFinalClienteComEntrega, infoFinalEntrega } from '../../../support/para_pedidos/validar_tela/tela_final.js';

describe('Gerar pedidos com promoção', () => {

    beforeEach(() => {
        cy.visit('/')
        cy.clearAllSessionStorage()
        cy.login()
        cy.urlAposLogin()
        cy.tituloPagina()
        processoVendaNFe()
        clienteComRota()
    })
  
    context('Sem entrega/ com promoção/ processo 9860 - caminho feliz', () => {

        //verificar
        it.skip('1. Ped venda com promoção partida (promoção 152): produto 1868 0 0', () => {
    
            produtoPromoPartida() //PRODUTO
            saldodisponivel()
            escolherProdutoPesquisa() ; ticketPromocao()
            clicarVoltagemProduto()
            selecionarPrimeiraPromoProduto() //PROMOCAO
            escolherRecebPromoPagPrincipal()
            addProduto()
            modalServicosVinculados() //SERVICOS
            okServicosVinculados()
            tirarEntrega() //ENTREGA
            avancarParaParcelas()
            cy.intercept('POST', '/services/v3/pedido_forma_pagamento_lista').as('api_pagamento_lista')
            cy.wait('@api_pagamento_lista', { timeout: 40000 })
            avancarFinal() 
            infoFinalClienteSemEntrega()
            botaoFinalizarPedido() //RESUMO
            pedidoGerado()
        })
    
        //verificar
        it.skip('2. Ped venda com promoção a prazo com entrada (promoção 150): produto 1866 0 0', () => {
    
            produtoPromoPrazoEntrada() //PRODUTO
            saldodisponivel()
            escolherProdutoPesquisa() ; ticketPromocao() 
            clicarVoltagemProduto()
            selecionarPrimeiraPromoProduto() //PROMOÇÃO
            escolherRecebPromoPagPrincipal()
            addProduto()
            modalServicosVinculados() //SERVICOS
            okServicosVinculados()
            tirarEntrega() //ENTREGA
            avancarParaParcelas()
    
            //GERAR PARCELAS
            cy.get('.white > :nth-child(3)').click()
            cy.contains('3861 - T.A. A Receber A Vista').click()
    
            //Botão "GERAR PAGAMENTO"
            cy.get('.white > .layout-align-center-center > .md-primary').click()
    
            avancarFinal() 
            infoFinalClienteSemEntrega()
            botaoFinalizarPedido() //RESUMO
            pedidoGerado()
        })
    
        //verificar
        it.skip('3. Ped venda com promoção a prazo parcelado (promoção 151): produto 1867 0 0', () => {
    
            produtoPromoPrazoParcelado() //PRODUTO
            saldodisponivel()
            escolherProdutoPesquisa() ; ticketPromocao()
            clicarVoltagemProduto()
            selecionarPrimeiraPromoProduto() //PROMOÇÃO
            escolherRecebPromoPagPrincipal()
            addProduto()
            modalServicosVinculados() //SERVIÇOS
            okServicosVinculados()
            tirarEntrega() //ENTREGA
            avancarParaParcelas()
            cy.intercept('GET', 'images/icons/chain.svg').as('api_icons')
            cy.wait('@api_icons', { timeout: 40000 })
            avancarFinal()
            infoFinalClienteSemEntrega()
            botaoFinalizarPedido() //RESUMO
            pedidoGerado()
        })
    })

    context('Sem entrega/ com promoção e sem promoção/ processo 9860 - caminho feliz', () => {

        //verificar
        it.skip('4. Ped venda com promoção partida (promoção 152): produto 1868 0 0 e produto 1870 0 0 (sem promoção)', () => {
    
            produtoPromoPartida() //PRODUTO
            saldodisponivel()
            escolherProdutoPesquisa() ; ticketPromocao()
            clicarVoltagemProduto()
            selecionarPrimeiraPromoProduto() //PROMOÇÃO
            escolherRecebPromoPagPrincipal()
            addProduto()
            modalServicosVinculados() //SERVIÇOS
            okServicosVinculados() 
            tirarEntrega() //ENTREGA
            produtoNormalSegundo() //SEGUNDO PRODUTO
            saldodisponivel()
            escolherProdutoPesquisa()
            clicarVoltagemProduto()
            addProduto()
            modalServicosVinculados() //SERVIÇOS - SEGUNDO PRODUTO
            okServicosVinculados()
            tirarEntregaSegundo() //ENTREGA - SEGUNDO PRODUTO
            avancarParaParcelas()
            botaoGerarParcelas() //GERAR PARCELAS
            cy.wait(4000)

            //Escolher forma de pagamento
            cy.contains('3868 - T.A. A Receber PIX TEF').click({force:true})
            cy.intercept('GET', '/services/v3/pedido_forma_pagamento').as('api_pedido_forma_pagamento')
            cy.wait('@api_pedido_forma_pagamento', { timeout: 40000 })
            //Escolher parcelamento
            //cy.get('.active > md-collapsible-body > .layout-column > [style="position: relative"] > :nth-child(1) > div.ng-binding').click({force:true})

            // avancarFinal()
            // infoFinalClienteSemEntrega()
            // botaoFinalizarPedido() //RESUMO
            // pedidoGerado()
        })

        //verificar
        it.skip('5. Ped venda com promoção a prazo com entrada (promoção 150): produto 1866 0 0 e produto 1870 0 0 (sem promoção)', () => {
    
            produtoPromoPrazoEntrada() //PRODUTO
            saldodisponivel()
            escolherProdutoPesquisa() ; ticketPromocao()
            clicarVoltagemProduto()
            selecionarPrimeiraPromoProduto() //PROMOÇÃO
            escolherRecebPromoPagPrincipal()
            addProduto()
            modalServicosVinculados() //SERVIÇOS
            okServicosVinculados()
            tirarEntrega() //ENTREGA
            produtoNormalSegundo() //SEGUNDO PRODUTO
            saldodisponivel()
            escolherProdutoPesquisa()
            clicarVoltagemProduto()
            addProduto()
            modalServicosVinculados() //SERVIÇOS - SEGUNDO PRODUTO
            okServicosVinculados()
            tirarEntregaSegundo() //ENTREGA - SEGUNDO PRODUTO
            avancarParaParcelas()

            //GERAR PARCELAS 
            cy.get('.layout-row.flex-100 > :nth-child(1) > .md-fab').should('be.visible').click({force:true})
            cy.get('.white > :nth-child(3)').click({force:true})
            cy.contains('div.md-text', '3861 - T.A. A Receber A Vista').click({force:true}) //Escolher forma de pagamento entrada
            cy.get('.white > .layout-align-center-center > .md-primary').click({force:true}) //clicar GERAR PAGAMENTO
    
            avancarFinal()
            infoFinalClienteSemEntrega()
            botaoFinalizarPedido() //RESUMO
            pedidoGerado()
        })
    })

    context('Com entrega /com promoção/ processo 9860 - caminho feliz', () => {

        it.skip('6. Ped venda com promoção partida (promoção 152): produto 1868 0 0', () => {
    
            produtoPromoPartida() //PRODUTO
            saldodisponivel()
            escolherProdutoPesquisa() ; ticketPromocao()
            clicarVoltagemProduto()
            selecionarPrimeiraPromoProduto()
            escolherRecebPromoPagPrincipal()
            addProduto()
            modalServicosVinculados() //SERVIÇOS
            okServicosVinculados()
            avancarParaTransportadora()
            avancarParcelasEntrega() //ENTREGA
            cy.intercept('POST', '/services/v3/pedido_forma_pagamento_lista').as('api_pagamento_lista')
            cy.wait('@api_pagamento_lista', { timeout: 40000 })
            inserirDataAmanha1Vencimento()
            cy.wait(3000)
            botaoGerarParcelasAlterVencimento()
            escolherFormaPagamentoPrincipal()
            escolherUmaParcelaPagamento()
            avancarFinal()
            infoFinalClienteComEntrega() ; infoFinalEntrega()
            botaoFinalizarPedido() //RESUMO
            pedidoGerado()
        })
    
        //verificar
        it.skip('7. Ped venda com promoção a prazo com entrada (promoção 150): produto 1866 0 0', () => {
    
            produtoPromoPrazoEntrada() //PRODUTO
            saldodisponivel()
            escolherProdutoPesquisa() ; ticketPromocao()  
            clicarVoltagemProduto()
            selecionarPrimeiraPromoProduto() //PROMOÇÃO
            escolherRecebPromoPagPrincipal()
            addProduto()
            modalServicosVinculados() //SERVIÇOS
            okServicosVinculados()
            avancarParaTransportadora()
            avancarParcelasEntrega()
            cy.intercept('GET', 'images/icons/chain.svg').as('api_icons')
            cy.wait('@api_icons', { timeout: 40000 })

            inserirDataAmanha1Vencimento()
            cy.wait(4000)
            cy.get('.gerar-parcelas > .layout-wrap > [style="padding: 0 5px"] > .md-primary').click({force:true})
            escolherFormaPagamentoPrincipal()
            escolherUmaParcelaPagamento()
            cy.wait(400)

            // //"GERAR PAGAMENTO"
            // cy.get('.white > :nth-child(3)').scrollIntoView().wait(300)
            // cy.get('.white > :nth-child(3)').click({force:true})
            // cy.contains('3861 - T.A. A Receber A Vista').click({force:true})
            // cy.get('.white > .layout-align-center-center > .md-primary').click({force:true})
            // cy.get('.md-select-backdrop').click({force:true})
            // cy.wait(500)

            // inserirDataAmanha1Vencimento()
            // botaoGerarParcelasAlterVencimento()
            // cy.wait(3000)
            // escolherFormaPagamentoPrincipal()
            // escolherDuasParcelaPagamento()
            // avancarFinal()
            // infoFinalClienteComEntrega() ; infoFinalEntrega()
            // botaoFinalizarPedido() //RESUMO
            // pedidoGerado()
        })

        //verificar
        it.skip('8. Ped venda com promoção a prazo parcelado (promoção 151): produto 1867 0 0', () => {
    
            produtoPromoPrazoParcelado() //PRODUTO
            saldodisponivel()
            escolherProdutoPesquisa() ; ticketPromocao()
            clicarVoltagemProduto()
            selecionarPrimeiraPromoProduto() //PROMOÇÃO
            escolherRecebPromoPagPrincipal()
            addProduto()
            modalServicosVinculados() //SERVIÇOS
            okServicosVinculados()
            avancarParaTransportadora()
            avancarParcelasEntrega()
            botaoGerarParcelas() //GERAR PARCELAS

            //Escolher a forma de pagamento
            cy.get('[style=""] > md-collapsible-header.layout-row > .md-collapsible-tools > .ng-scope').click({force:true})
            cy.wait(3000)
            //Escolher a forma de pagamento/parcelas
            cy.get('.active > md-collapsible-body > .layout-column > [style="position: relative"] > :nth-child(1) > div.ng-binding').click({force:true})

            avancarFinal()
            infoFinalClienteComEntrega() ; infoFinalEntrega()
            botaoFinalizarPedido() //RESUMO
            pedidoGerado()
        })  
    }) 

    context('Com entrega/ com promoção e sem promoção/ processo 9860 - caminho feliz', () => {

        //verificar
        it.skip('9. Ped venda com promoção partida (promoção 152): produto 1868 0 0 e produto 1870 0 0 (sem promoção)', () => {
    
            produtoPromoPartida() //PRODUTO
            saldodisponivel()
            escolherProdutoPesquisa() ; ticketPromocao()
            clicarVoltagemProduto()
            selecionarPrimeiraPromoProduto() //PROMOÇÃO
            escolherRecebPromoPagPrincipal()
            addProduto()
            modalServicosVinculados() //SERVIÇOS
            okServicosVinculados()
            produtoNormalSegundo() //SEGUNDO PRODUTO
            saldodisponivel()
            escolherProdutoPesquisa()
            clicarVoltagemProduto() 
            addProduto()
            okServicosVinculados() //SERVIÇOS
            avancarParaTransportadora()
            avancarParcelasEntrega()
            botaoGerarParcelas() //GERAR PARCELAS

            //Escolher forma de pagemento
            cy.get('[style=""] > md-collapsible-header.layout-row > .md-collapsible-tools > .ng-scope').click({force: true})
            cy.wait(3000)
            //Escolher parcelamento
            cy.get('.active > md-collapsible-body > .layout-column > [style="position: relative"] > :nth-child(1) > div.ng-binding').click({force: true})

            avancarFinal()
            infoFinalClienteComEntrega() ; infoFinalEntrega()
            botaoFinalizarPedido() //RESUMO
            pedidoGerado()
        })
    })
})