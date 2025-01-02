import { escolherTransportadora, saldodisponivel, escolherRota, escolherClientePedido, pedidoGerado, botaoFinalizarPedido, finalizandoPedido,
         clicarAdicionarProduto, tirarEntrega, tirarEntregaSegundo, tirarMontagemSegundo, botaoGerarParcelas, processoVendaPrincipal,
         avancarParaParcelas, avancarParaTransportadora, avancarParcelasEntrega, modalServicosVinculados, okServicosVinculados,
         escolherProdutoPesquisa, escolherVoltagemProduto, avancarFinal, modalInconsRotaTransp, carregandoFormaPagamento,
         escolherFormaPagamentoPrincipal, escolherDuasParcelaPagamento } from '../../../support/para_pedidos/gerais_pedidos'
import { produtoNormalSegundo } from '../../../support/para_pedidos/produtos_pedidos';
import { produtoPromoPartida, produtoPromoPrazoEntrada, produtoPromoPrazoParcelado, clicarUsarPromocao, selecionarFormaPagPromo } from '../../../support/para_pedidos/para_pedidos_promocao';

describe('Gerar pedidos com promoção', () => {

    beforeEach(() => {
        cy.visit('/')
        cy.clearAllSessionStorage()
        cy.login()
        cy.urlAposLogin()
        cy.tituloPagina()
        processoVendaPrincipal()
        escolherClientePedido()
        cy.wait(500)
    })
  
    context('Sem entrega/ com promoção/ processo 9860 - caminho feliz', () => {

        it.skip('1-Pedido com promoção partida (promoção 152): produto 1868 0 0', () => {
    
            produtoPromoPartida() //PRODUTO
            saldodisponivel()
            escolherProdutoPesquisa()
            cy.wait(200)   
            escolherVoltagemProduto()
            clicarUsarPromocao() //PROMOCAO
            selecionarFormaPagPromo()
            clicarAdicionarProduto()
            cy.wait(500)
            modalServicosVinculados() //SERVICOS
            okServicosVinculados()
            tirarEntrega() //ENTREGA
            cy.wait(400)
            avancarParaParcelas()
            cy.wait(12000)
            avancarFinal() 
        })
    
        it.skip('2-Pedido com promoção a prazo com entrada (promoção 150): produto 1866 0 0', () => {
    
            produtoPromoPrazoEntrada() //PRODUTO
            saldodisponivel()
            escolherProdutoPesquisa()
            cy.wait(200)        
            escolherVoltagemProduto()
            clicarUsarPromocao() //PROMOÇÃO
            selecionarFormaPagPromo()
            cy.wait(400)
            clicarAdicionarProduto()
            cy.wait(500)
            modalServicosVinculados() //SERVICOS
            okServicosVinculados()
            tirarEntrega() //ENTREGA
            cy.wait(400)
            avancarParaParcelas()
            cy.wait(11000)
    
            //GERAR PARCELAS
            cy.get('.white > :nth-child(3)').click()
            cy.contains('3861 - T.A. A Receber A Vista').click()
    
            //Botão "GERAR PAGAMENTO"
            cy.get('.white > .layout-align-center-center > .md-primary').click()
    
            cy.wait(400)
            avancarFinal() 
        })
    
        it.skip('3-Pedido com promoção a prazo parcelado (promoção 151): produto 1867 0 0', () => {
    
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
            tirarEntrega() //ENTREGA
            cy.wait(400)
            avancarParaParcelas()
            cy.wait(12500)
            avancarFinal()
        })
    })

    context('Sem entrega/ com promoção e sem promoção/ processo 9860 - caminho feliz', () => {

        it.skip('4-Pedido com promoção partida (promoção 152): produto 1868 0 0 e produto 1870 0 0 (sem promoção)', () => {
    
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
            tirarEntrega() //ENTREGA
            cy.wait(800)
            produtoNormalSegundo() //SEGUNDO PRODUTO
            cy.wait(1500)
            saldodisponivel()
            escolherProdutoPesquisa()
            cy.wait(800)
            escolherVoltagemProduto()
            clicarAdicionarProduto()
            cy.wait(500)
            modalServicosVinculados() //SERVIÇOS - SEGUNDO PRODUTO
            okServicosVinculados()
            tirarEntregaSegundo() //ENTREGA - SEGUNDO PRODUTO
            cy.wait(400)
            avancarParaParcelas()
            cy.wait(6000)
            botaoGerarParcelas() //GERAR PARCELAS
            cy.wait(6000)

            //Escolher forma de pagamento
            cy.get('[style=""] > md-collapsible-header.layout-row > .md-collapsible-tools > .ng-scope').click({force:true})
            cy.wait(3000)
            //Escolher parcelamento
            cy.get('.active > md-collapsible-body > .layout-column > [style="position: relative"] > :nth-child(1) > div.ng-binding').click({force:true})

            cy.wait(1000)
            avancarFinal()
        })

        it.skip('5-Pedido com promoção a prazo com entrada (promoção 150): produto 1866 0 0 e produto 1870 0 0 (sem promoção)', () => {
    
            produtoPromoPrazoEntrada() //PRODUTO
            saldodisponivel()
            escolherProdutoPesquisa()
            cy.wait(200)
            escolherVoltagemProduto()
            clicarUsarPromocao() //PROMOÇÃO
            selecionarFormaPagPromo()
            cy.wait(400)
            clicarAdicionarProduto()
            cy.wait(500)
            modalServicosVinculados() //SERVIÇOS
            okServicosVinculados()
            tirarEntrega() //ENTREGA
            cy.wait(400)
            produtoNormalSegundo() //SEGUNDO PRODUTO
            cy.wait(2000)
            saldodisponivel()
            cy.wait(400)
            escolherProdutoPesquisa()
            cy.wait(800)
            escolherVoltagemProduto()
            clicarAdicionarProduto()
            cy.wait(500)
            modalServicosVinculados() //SERVIÇOS - SEGUNDO PRODUTO
            okServicosVinculados()
            tirarEntregaSegundo() //ENTREGA - SEGUNDO PRODUTO
            cy.wait(400)
            avancarParaParcelas()
            cy.wait(9000)

            //GERAR PARCELAS 
            cy.get('.layout-row.flex-100 > :nth-child(1) > .md-fab').should('be.visible').click({force:true})
            cy.get('.white > :nth-child(3)').click({force:true})
            cy.contains('div.md-text', '3861 - T.A. A Receber A Vista').click({force:true}) //Escolher forma de pagamento entrada
            cy.get('.white > .layout-align-center-center > .md-primary').click({force:true}) //clicar GERAR PAGAMENTO
    
            cy.wait(400)
            avancarFinal()
        })
    })

    context('Com entrega /com promoção/ processo 9860 - caminho feliz', () => {

        it.skip('6-Pedido com promoção partida (promoção 152): produto 1868 0 0', () => {
    
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
            avancarParaTransportadora()
            cy.wait(7000)
            modalInconsRotaTransp() //TRANSPORTADORA
            escolherRota()
            escolherTransportadora()
            avancarParcelasEntrega() //ENTREGA
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
    
        it.skip('7-Pedido com promoção a prazo com entrada (promoção 150): produto 1866 0 0', () => {
    
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
            avancarParaTransportadora()
            cy.wait(6000)
            modalInconsRotaTransp() //ESCOLHER TRANSPORTADORA
            escolherRota()
            escolherTransportadora()
            cy.wait(3000)
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

        it.skip('8-Pedido com promoção a prazo parcelado (promoção 151): produto 1867 0 0', () => {
    
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
            avancarParaTransportadora()
            cy.wait(7000)
            modalInconsRotaTransp() //TRANSPORTADORA
            escolherRota()
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

    context('Com entrega/ com promoção e sem promoção/ processo 9860 - caminho feliz', () => {

        it.skip('9-Pedido com promoção partida (promoção 152): produto 1868 0 0 e produto 1870 0 0 (sem promoção)', () => {
    
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
            okServicosVinculados() //SERVIÇOS
            avancarParaTransportadora()
            cy.wait(6000)
            modalInconsRotaTransp() //TRANSPORTADORA
            escolherRota()
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

    afterEach(() => {
        botaoFinalizarPedido() //RESUMO
        finalizandoPedido()
        cy.wait(9000)
        pedidoGerado()
      });
})