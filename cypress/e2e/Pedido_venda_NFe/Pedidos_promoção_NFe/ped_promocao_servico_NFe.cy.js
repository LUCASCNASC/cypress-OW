import { saldodisponivel, clienteComRota, escolherProdutoPesquisa, clicarVoltagemProduto, addProduto, selecionarPrimeiraPromoProduto, 
         ticketPrestamistaAdicionado, ticketPrestamistaPaginaFinal, ticketPromocao } from '../../../support/para_pedidos/gerais_pedidos.js'
import { adicionarPrestamista, tipoServicoIsentoValidar } from '../../../support/para_pedidos/para_pedidos_promocao.js';
import { prd1PrazoParcela, prd2PrazoParcela, prd3PrazoParcela, prd4PrazoParcela } from '../../../support/produtos_pedidos/prd_normal.js';
import { garantiaSeparaMesmoProcesso } from '../../../support/para_pedidos/apenas_servicos.js'
import { modalServicosVinculados, okServicosVinculados } from '../../../support/para_pedidos/servicos/apenas_servicos.js';
import { validarServicosVinculados, validaAddGarantSepMesmoProc } from '../../../support/para_pedidos/servicos/valida_servicos_adicionados.js';
import { botaoFinalizarPedido, pedidoGerado } from '../../../support/para_pedidos/apenas_finalizar_pedido.js';
import { processoVendaNFe } from '../../../support/para_pedidos/processos/processo_venda.js';
import { escolherRecebPromoPagPrincipal, escolherRecebReceberPrestamista } from '../../../support/para_pedidos/processos/processo_recebimento_promo.js';
import { avancarParaParcelas, avancarFinal } from '../../../support/para_pedidos/apenas_botoes_avancar.js';
import { tirarEntrega } from '../../../support/para_pedidos/apenas_entrega.js';

describe('Gerar pedidos com promoção e serviços com isenção de juros', () => {

    beforeEach(() => {
        cy.visit('/')
        cy.clearAllSessionStorage()
        cy.login()
        cy.urlAposLogin()
        cy.tituloPagina()
        processoVendaNFe()
        clienteComRota()
    })
  
    context('Sem entrega/ com promoção/ com serviço processo 9860 - caminho feliz', () => {

        it('1. Ped venda com promoção a prazo/parcelas (promoção 159): produto 1891 0 0 com garantia (isenta de juros)', () => {
    
            prd1PrazoParcela() //PRODUTO PROMOÇÃO
            saldodisponivel()
            escolherProdutoPesquisa() ; ticketPromocao()
            clicarVoltagemProduto()
            tipoServicoIsentoValidar()
            selecionarPrimeiraPromoProduto()
            escolherRecebPromoPagPrincipal()
            addProduto()
            modalServicosVinculados() //SERVICOS
            garantiaSeparaMesmoProcesso() //Marcar garantia "T.A. Garantia Separa Mesmo Processo"
            okServicosVinculados()
            validarServicosVinculados() ; validaAddGarantSepMesmoProc()
            tirarEntrega() //ENTREGA
            avancarParaParcelas()
            cy.intercept('POST', '/services/v3/pedido_forma_pagamento_lista').as('api_pedido_forma_pagamento_lista')
            cy.wait('@api_pedido_forma_pagamento_lista', { timeout: 40000 })
            avancarFinal()
            botaoFinalizarPedido() //RESUMO
            pedidoGerado()
        })
    
        it('2. Ped venda com promoção a prazo/entrada + parcelas (promoção 158): produto 1895 0 0 com garantia (isenta de juros)', () => {
    
            prd2PrazoParcela() //PRODUTO PROMOCAO
            saldodisponivel()
            escolherProdutoPesquisa() ; ticketPromocao()
            clicarVoltagemProduto()
            tipoServicoIsentoValidar()
            selecionarPrimeiraPromoProduto()
            escolherRecebPromoPagPrincipal()
            addProduto()
            modalServicosVinculados() //SERVICOS
            garantiaSeparaMesmoProcesso() //Marcar garantia "T.A. Garantia Separa Mesmo Processo"
            okServicosVinculados()
            validarServicosVinculados() ; validaAddGarantSepMesmoProc()
            tirarEntrega() //ENTREGA
            avancarParaParcelas()
            cy.intercept('POST', '/services/v3/pedido_forma_pagamento_lista').as('api_pedido_forma_pagamento_lista')
            cy.wait('@api_pedido_forma_pagamento_lista', { timeout: 40000 })

            //Selecionando opções de pagamento de entrada
            cy.get('md-option .md-text')
                .contains('3861 - T.A. A Receber A Vista')
                .click({force:true})

            //Selecionando processo de receber entrada
            cy.contains('div.md-text.ng-binding', '3861 - T.A. A Receber A Vista')
                .should('be.visible')
                .click({force:true})

            //Clicando no botão GERAR PAGAMENTO da entrada
            cy.get('.white > .layout-align-center-center > .md-primary')
                .should('be.visible')
                .and('not.be.disabled')
                .and('contain','Gerar pagamento')
                .click({force:true})

            avancarFinal()
            botaoFinalizarPedido() //RESUMO
            pedidoGerado()
        })
    
        it('3. Ped venda com promoção a partida (promoção 161): produto 1893 0 0 com prestamista (isento de juros)', () => {
    
            prd3PrazoParcela() //PRODUTO PROMOCAO
            saldodisponivel()
            escolherProdutoPesquisa() ; ticketPromocao()
            clicarVoltagemProduto()
            selecionarPrimeiraPromoProduto()
            escolherRecebReceberPrestamista()
            addProduto()
            modalServicosVinculados() //SERVICOS
            okServicosVinculados()
            validarServicosVinculados() ; validaAddGarantSepMesmoProc()
            tirarEntrega() //ENTREGA
            avancarParaParcelas()
            cy.intercept('POST', '/services/v3/pedido_forma_pagamento_lista').as('api_pedido_forma_pagamento_lista')
            cy.wait('@api_pedido_forma_pagamento_lista', { timeout: 40000 })
            adicionarPrestamista()
            ticketPrestamistaAdicionado()
            avancarFinal()
            ticketPrestamistaPaginaFinal()
            botaoFinalizarPedido() //RESUMO
            pedidoGerado()
        })

        it('4. Ped venda com promoção a prazo/parcelas (promoção 162): produto 1894 0 0 com garantia (isenta de juros) e prestamista (com juros)', () => {
    
            prd4PrazoParcela() //PRODUTO PROMOCAO
            saldodisponivel()
            escolherProdutoPesquisa() ; ticketPromocao()
            clicarVoltagemProduto()
            tipoServicoIsentoValidar()
            selecionarPrimeiraPromoProduto()
            escolherRecebReceberPrestamista()
            addProduto()
            modalServicosVinculados() //SERVICOS
            garantiaSeparaMesmoProcesso() //Marcar garantia "T.A. Garantia Separa Mesmo Processo"
            okServicosVinculados()
            validarServicosVinculados() ; validaAddGarantSepMesmoProc()
            tirarEntrega() //ENTREGA
            avancarParaParcelas()
            cy.intercept('POST', '/services/v3/pedido_forma_pagamento_lista').as('api_pedido_forma_pagamento_lista')
            cy.wait('@api_pedido_forma_pagamento_lista', { timeout: 40000 })
            adicionarPrestamista()
            ticketPrestamistaAdicionado()
            avancarFinal()
            ticketPrestamistaPaginaFinal()
            botaoFinalizarPedido() //RESUMO
            pedidoGerado()
        })
    })
 })