import { selecionarPrimeiraPromoProduto, ticketPrestamistaAdicionado, ticketPrestamistaPaginaFinal, ticketPromocao } from '../../../support/para_pedidos/gerais_pedidos.js'
import { adicionarPrestamista, tipoServicoIsentoValidar } from '../../../support/para_pedidos/para_pedidos_promocao.js';
import { garantiaSeparaMesmoProcesso } from '../../../support/para_pedidos/apenas_servicos.js'
import { clicarFinalizarPedido, validarPedidoGerado } from '../../../support/para_pedidos/apenas_finalizar_pedido.js';
import { escolherRecebPromoPagPrincipal, escolherRecebReceberPrestamista } from '../../../support/para_pedidos/processos/processo_recebimento_promo.js';
import { tirarEntrega } from '../../../support/para_pedidos/apenas_entrega.js';
import { infoFinalClienteSemEntrega, infoFinalClienteComEntrega, infoFinalEntrega, validarObsNotaFiscalVazio, validarObsInternaVazio } from '../../../support/para_pedidos/validar_tela/tela_final.js';
import { ProcessoVenda } from '../../../../pages/para_pedidos/processos/processo_venda.js'
import { EscolherCliente } from '../../../../pages/para_pedidos/cliente/cliente.js'
import { ValidarSaldo } from '../../../../pages/para_pedidos/saldo/validar_saldo.js'
import { Produto } from '../../../../pages/produtos/prd_normal.js'
import { GeralProduto } from '../../../../pages/produtos/gerais_pedido.js'
import { Servico } from '../../../../pages/para_pedidos/servicos/valida_servicos_adicionados.js'
import { AvancarNormal } from '../../../../pages/para_pedidos/botoes/avancar/avancar_normal.js'
import { AvancarNormal } from '../../../../pages/para_pedidos/botoes/avancar/avancar_normal.js'
import { FinalizarPed } from '../../../../pages/para_pedidos/finalizar_pedido.js'

describe('Gerar pedidos com promoção e serviços com isenção de juros', () => {

    beforeEach(() => {
        cy.visit('/')
        cy.clearAllSessionStorage()
        cy.login()
        cy.urlAposLogin()
        cy.tituloPagina()
        ProcessoVenda.NFe()
        EscolherCliente.comRota()
    })
  
    context('Sem entrega/ com promoção/ com serviço processo 9860 - caminho feliz', () => {

        it('1. Ped venda com promoção a prazo/parcelas (promoção 159): produto 1891 0 0 com garantia (isenta de juros)', () => {
    
            Produto.primeiroPrazoParcela() //PRODUTO
            ValidarSaldo.comSaldo()
            GeralProduto.escolherProdutoPesquisa() ; ticketPromocao()
            GeralProduto.clicarVoltagemProduto() //PRODUTO
            tipoServicoIsentoValidar()
            selecionarPrimeiraPromoProduto()
            escolherRecebPromoPagPrincipal()
            GeralProduto.clicarAdicionarProduto()
            Servico.validarModalServVinc() //SERVICOS
            garantiaSeparaMesmoProcesso() //Marcar garantia "T.A. Garantia Separa Mesmo Processo"
            Servico.clicarOKServVinc()
            validarServicosVinculados() ; validaAddGarantSepMesmoProc()
            tirarEntrega() //ENTREGA
            AvancarNormal.paraParcelas()
            cy.intercept('POST', '/services/v3/pedido_forma_pagamento_lista').as('api_pedido_forma_pagamento_lista')
            cy.wait('@api_pedido_forma_pagamento_lista', { timeout: 40000 })
            AvancarNormal.final()
            FinalizarPed.clicarFinalizarPed() //RESUMO
            FinalizarPed.validarPedGerado()
        })
    
        it('2. Ped venda com promoção a prazo/entrada + parcelas (promoção 158): produto 1895 0 0 com garantia (isenta de juros)', () => {
    
            Produto.segundoPrazoParcela() //PRODUTO
            ValidarSaldo.comSaldo()
            GeralProduto.escolherProdutoPesquisa() ; ticketPromocao()
            GeralProduto.clicarVoltagemProduto() //PRODUTO
            tipoServicoIsentoValidar()
            selecionarPrimeiraPromoProduto()
            escolherRecebPromoPagPrincipal()
            GeralProduto.clicarAdicionarProduto()
            Servico.validarModalServVinc() //SERVICOS
            garantiaSeparaMesmoProcesso() //Marcar garantia "T.A. Garantia Separa Mesmo Processo"
            Servico.clicarOKServVinc()
            validarServicosVinculados() ; validaAddGarantSepMesmoProc()
            tirarEntrega() //ENTREGA
            AvancarNormal.paraParcelas()
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

            AvancarNormal.final()
            FinalizarPed.clicarFinalizarPed() //RESUMO
            FinalizarPed.validarPedGerado()
        })
    
        it('3. Ped venda com promoção a partida (promoção 161): produto 1893 0 0 com prestamista (isento de juros)', () => {
    
            Produto.terceiroPrazoParcela() //PRODUTO
            ValidarSaldo.comSaldo()
            GeralProduto.escolherProdutoPesquisa() ; ticketPromocao()
            GeralProduto.clicarVoltagemProduto() //PRODUTO
            selecionarPrimeiraPromoProduto()
            escolherRecebReceberPrestamista()
            GeralProduto.clicarAdicionarProduto()
            Servico.validarModalServVinc() //SERVICOS
            Servico.clicarOKServVinc()
            validarServicosVinculados() ; validaAddGarantSepMesmoProc()
            tirarEntrega() //ENTREGA
            AvancarNormal.paraParcelas()
            cy.intercept('POST', '/services/v3/pedido_forma_pagamento_lista').as('api_pedido_forma_pagamento_lista')
            cy.wait('@api_pedido_forma_pagamento_lista', { timeout: 40000 })
            adicionarPrestamista()
            ticketPrestamistaAdicionado()
            AvancarNormal.final()
            ticketPrestamistaPaginaFinal()
            FinalizarPed.clicarFinalizarPed() //RESUMO
            FinalizarPed.validarPedGerado()
        })

        it('4. Ped venda com promoção a prazo/parcelas (promoção 162): produto 1894 0 0 com garantia (isenta de juros) e prestamista (com juros)', () => {
    
            Produto.quartoPrazoParcela() //PRODUTO
            ValidarSaldo.comSaldo()
            GeralProduto.escolherProdutoPesquisa() ; ticketPromocao()
            GeralProduto.clicarVoltagemProduto() //PRODUTO
            tipoServicoIsentoValidar()
            selecionarPrimeiraPromoProduto()
            escolherRecebReceberPrestamista()
            GeralProduto.clicarAdicionarProduto()
            Servico.validarModalServVinc() //SERVICOS
            garantiaSeparaMesmoProcesso() //Marcar garantia "T.A. Garantia Separa Mesmo Processo"
            Servico.clicarOKServVinc()
            validarServicosVinculados() ; validaAddGarantSepMesmoProc()
            tirarEntrega() //ENTREGA
            AvancarNormal.paraParcelas()
            cy.intercept('POST', '/services/v3/pedido_forma_pagamento_lista').as('api_pedido_forma_pagamento_lista')
            cy.wait('@api_pedido_forma_pagamento_lista', { timeout: 40000 })
            adicionarPrestamista()
            ticketPrestamistaAdicionado()
            AvancarNormal.final()
            ticketPrestamistaPaginaFinal()
            FinalizarPed.clicarFinalizarPed() //RESUMO
            FinalizarPed.validarPedGerado()
        })
    })
 })