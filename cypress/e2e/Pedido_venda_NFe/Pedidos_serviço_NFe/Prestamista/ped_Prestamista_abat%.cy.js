import {selecionarPrimeiraPromoProduto, clicarEditarParcelas, ticketPrestamistaAdicionado, ticketPrestAdicionadoRecebAgrupado, ticketPrestamistaPaginaFinal } from '../../../../support/para_pedidos/gerais_pedidos.js';
import { garantiaNaoSepara, okSeguroPrestamista, messPrestamistaRemovido, addSeguroPrestamista } from '../../../../support/para_pedidos/servicos/apenas_servicos.js';
import { validarServicosVinculados, validaAddGarantSepMesmoProc, validaAddGarantNaoSep } from '../../../../support/para_pedidos/servicos/valida_servicos_adicionados.js';
import { clicarGerarParcelas, carregandoFormaPagamento, escolherQuatroParcelaPagamento, inserirDataAmanha1Vencimento, 
         clicarGerarParcAlterarVenc, escolherUmaParcelaPagamento, inserirData31Dias1Vencimento, agruparLancamentos } from '../../../../support/para_pedidos/parcelas_pedido.js';
import { escolherFormaPagamentoPrincipal, escolherSegundaFormaPagamento, escolherRecebFuturoPrestamistaComJuros, escolherRecebFuturoPrestamistaSemJuros, 
         escolherRecebPresentePrestamista } from '../../../../support/para_pedidos/processos/processo_recebimento.js';
import { clicarFinalizarPedido, validarPedidoGerado } from '../../../../support/para_pedidos/apenas_finalizar_pedido.js';
import { escolherRecebPromoPrazoFuturoComJurosPrest, escolherRecebPromoPrazoFuturoSemJurosPrest, escolherRecebPromoPartidaPresentePrest } from '../../../../support/para_pedidos/processos/processo_recebimento_promo.js';
import { tirarEntrega, tirarEntregaSegundo } from '../../../../support/para_pedidos/apenas_entrega.js';
import { infoFinalClienteSemEntrega, infoFinalClienteComEntrega, infoFinalEntrega, validarObsNotaFiscalVazio, validarObsInternaVazio } from '../../../../support/para_pedidos/validar_tela/tela_final.js';
import { ProcessoVenda } from '../../../../../pages/para_pedidos/processos/processo_venda.js'
import { EscolherCliente } from '../../../../../pages/para_pedidos/cliente/cliente.js'
import { ValidarSaldo } from '../../../../../pages/para_pedidos/saldo/validar_saldo.js'
import { Produto } from '../../../../../pages/produtos/prd_normal.js'
import { GeralProduto } from '../../../../../pages/produtos/gerais_pedido.js'
import { Servico } from '../../../../../pages/para_pedidos/servicos/valida_servicos_adicionados.js'
import { AvancarNormal } from '../../../../../pages/para_pedidos/botoes/avancar/avancar_normal.js'

describe('Gerar pedidos com serviço Prestamista Abatimento % (158)', () => {

    beforeEach(() => {
        cy.visit('/')
        cy.clearAllSessionStorage()
        cy.login()
        cy.urlAposLogin()
        cy.tituloPagina() 
        ProcessoVenda.NFe()
        EscolherCliente.comRota()
    })   

    context('Sem entrega / Produtos sem promoção - Prestamista com abatimento %', () => {

        it('1. Ped venda: produtos 1860 0 0 e 1870 0 0, inclusão 3874, prestamista 158, 4 parcelas no recebimento Futuro com juros.', () => {
    
            Produto.primeiro() //PRODUTO
            ValidarSaldo.comSaldo()
            GeralProduto.escolherProdutoPesquisa()
            GeralProduto.clicarVoltagemProduto() //PRODUTO
            GeralProduto.clicarAdicionarProduto()
            Servico.validarModalServVinc()
            Servico.clicarOKServVinc() //SERVIÇOS
            tirarEntrega()
            Produto.segundo() //PRODUTO
            ValidarSaldo.comSaldo()
            GeralProduto.escolherProdutoPesquisa()
            GeralProduto.clicarVoltagemProduto() //PRODUTO
            GeralProduto.clicarAdicionarProduto()
            Servico.validarModalServVinc() //SERVICOS - SEGUNDO PRODUTO
            Servico.clicarOKServVinc()
            tirarEntregaSegundo()
            AvancarNormal.paraParcelas()
            clicarGerarParcelas() //GERAR PARCELAS
            carregandoFormaPagamento()
            escolherRecebFuturoPrestamistaComJuros()
            escolherQuatroParcelaPagamento()
            okSeguroPrestamista()
            ticketPrestamistaAdicionado() //Validando adição do prestamista
            AvancarNormal.final()
            ticketPrestamistaPaginaFinal()
            clicarFinalizarPedido() //RESUMO
            validarPedidoGerado()
        })

        it('2. Ped venda: produtos 1860 0 0 e 1870 0 0, inclusão 3875, prestamista 158, 4 parcelas no recebimento Presente.', () => {
    
            Produto.primeiro() //PRODUTO
            ValidarSaldo.comSaldo()
            GeralProduto.escolherProdutoPesquisa()
            GeralProduto.clicarVoltagemProduto() //PRODUTO
            GeralProduto.clicarAdicionarProduto()
            Servico.validarModalServVinc() //SERVICOS
            Servico.clicarOKServVinc()
            tirarEntrega()
            Produto.segundo() //PRODUTO
            ValidarSaldo.comSaldo()
            GeralProduto.escolherProdutoPesquisa()
            GeralProduto.clicarVoltagemProduto() //PRODUTO
            GeralProduto.clicarAdicionarProduto()
            Servico.validarModalServVinc() //SERVICOS
            Servico.clicarOKServVinc()
            tirarEntregaSegundo()
            AvancarNormal.paraParcelas()
            clicarGerarParcelas() //GERAR PARCELAS
            carregandoFormaPagamento()
            escolherRecebPresentePrestamista()
            escolherQuatroParcelaPagamento()
            okSeguroPrestamista()
            ticketPrestamistaAdicionado() //Validando adição do prestamista
            AvancarNormal.final()
            ticketPrestamistaPaginaFinal()
            clicarFinalizarPedido() //RESUMO
            validarPedidoGerado()
        })
    })

    context('Com entrega / Produtos sem promoção - Prestamista com abatimento %', () => {

        it('3. Ped venda: produtos 1860 0 0 e 1870 0 0, inclusão 3876, prestamista 158, 4 parcelas no recebimento Futuro sem juros.', () => {
    
            Produto.primeiro() //PRODUTO
            ValidarSaldo.comSaldo()
            GeralProduto.escolherProdutoPesquisa()
            GeralProduto.clicarVoltagemProduto() //PRODUTO
            GeralProduto.clicarAdicionarProduto()
            Servico.validarModalServVinc() //SERVICOS
            Servico.clicarOKServVinc()
            Produto.segundo() //PRODUTO
            ValidarSaldo.comSaldo()
            GeralProduto.escolherProdutoPesquisa()
            GeralProduto.clicarVoltagemProduto() //PRODUTO
            GeralProduto.clicarAdicionarProduto()
            Servico.validarModalServVinc() //SERVICOS
            Servico.clicarOKServVinc()
            AvancarNormal.paraTransportadora()
            AvancarNormal.paraParcelas()
            clicarGerarParcelas() //GERAR PARCELAS
            carregandoFormaPagamento()
            escolherRecebFuturoPrestamistaSemJuros()
            escolherQuatroParcelaPagamento()
            okSeguroPrestamista()
            ticketPrestamistaAdicionado() //Validando adição do prestamista
            AvancarNormal.final()
            ticketPrestamistaPaginaFinal()
            clicarFinalizarPedido() //RESUMO
            validarPedidoGerado()
        })

        it('4. Ped venda: produtos 1860 0 0 (com garantia não separa) e 1870 0 0, inclusão 3874, prestamista 158, 4 parcelas no recebimento Futuro com juros.', () => {
    
            Produto.primeiro() //PRODUTO
            ValidarSaldo.comSaldo()
            GeralProduto.escolherProdutoPesquisa()
            GeralProduto.clicarVoltagemProduto() //PRODUTO
            GeralProduto.clicarAdicionarProduto()
            Servico.validarModalServVinc()
            garantiaNaoSepara()
            Servico.clicarOKServVinc() //SERVIÇOS
            validarServicosVinculados() ; validaAddGarantSepMesmoProc()
            Produto.segundo() //PRODUTO
            ValidarSaldo.comSaldo()
            GeralProduto.escolherProdutoPesquisa()
            GeralProduto.clicarVoltagemProduto() //PRODUTO
            GeralProduto.clicarAdicionarProduto()
            Servico.validarModalServVinc() //SERVICOS
            Servico.clicarOKServVinc()
            AvancarNormal.paraTransportadora()
            AvancarNormal.paraParcelas()
            clicarGerarParcelas() //GERAR PARCELAS
            carregandoFormaPagamento()
            escolherRecebFuturoPrestamistaComJuros()
            escolherQuatroParcelaPagamento()
            okSeguroPrestamista()
            ticketPrestamistaAdicionado() //Validando adição do prestamista
            AvancarNormal.final()
            ticketPrestamistaPaginaFinal()
            clicarFinalizarPedido() //RESUMO
            validarPedidoGerado()
        })

        it('5. Ped venda: produtos 1860 0 0 (com garantia não separa) e 1870 0 0, inclusão 3876, prestamista 158, 4 parcelas no recebimento Futuro sem juros.', () => {

            Produto.primeiro() //PRODUTO
            ValidarSaldo.comSaldo()
            GeralProduto.escolherProdutoPesquisa()
            GeralProduto.clicarVoltagemProduto() //PRODUTO
            GeralProduto.clicarAdicionarProduto()
            Servico.validarModalServVinc()
            garantiaNaoSepara()
            Servico.clicarOKServVinc() //SERVIÇOS
            validarServicosVinculados() ; validaAddGarantSepMesmoProc()
            Produto.segundo() //PRODUTO
            ValidarSaldo.comSaldo()
            GeralProduto.escolherProdutoPesquisa()
            GeralProduto.clicarVoltagemProduto() //PRODUTO
            GeralProduto.clicarAdicionarProduto()
            Servico.validarModalServVinc() //SERVICOS - SEGUNDO PRODUTO
            Servico.clicarOKServVinc()
            AvancarNormal.paraTransportadora()
            AvancarNormal.paraParcelas()
            clicarGerarParcelas() //GERAR PARCELAS
            carregandoFormaPagamento()
            escolherRecebFuturoPrestamistaSemJuros()
            escolherQuatroParcelaPagamento()
            okSeguroPrestamista()
            ticketPrestamistaAdicionado() //Validando adição do prestamista
            AvancarNormal.final()
            ticketPrestamistaPaginaFinal()
            clicarFinalizarPedido() //RESUMO
            validarPedidoGerado()
        })

        it('6. Ped venda: produtos 1860 0 0 (com garantia não separa) e 1870 0 0, inclusão 3875, prestamista 158, 4 parcelas no recebimento Presente sem juros.', () => {
    
            Produto.primeiro() //PRODUTO
            ValidarSaldo.comSaldo()
            GeralProduto.escolherProdutoPesquisa()
            GeralProduto.clicarVoltagemProduto() //PRODUTO
            GeralProduto.clicarAdicionarProduto()
            Servico.validarModalServVinc()
            garantiaNaoSepara()
            Servico.clicarOKServVinc() //SERVIÇOS
            validarServicosVinculados() ; validaAddGarantSepMesmoProc()
            Produto.segundo() //PRODUTO
            ValidarSaldo.comSaldo()
            GeralProduto.escolherProdutoPesquisa()
            GeralProduto.clicarVoltagemProduto() //PRODUTO
            GeralProduto.clicarAdicionarProduto()
            Servico.validarModalServVinc() //SERVICOS - SEGUNDO PRODUTO
            Servico.clicarOKServVinc()
            AvancarNormal.paraTransportadora()
            AvancarNormal.paraParcelas()
            clicarGerarParcelas() //GERAR PARCELAS
            carregandoFormaPagamento()
            escolherRecebPresentePrestamista()
            escolherQuatroParcelaPagamento()
            okSeguroPrestamista()
            ticketPrestamistaAdicionado() //Validando adição do prestamista
            AvancarNormal.final()
            ticketPrestamistaPaginaFinal()
            clicarFinalizarPedido() //RESUMO
            validarPedidoGerado()
        })
    })

    context('Sem entrega / Produtos com promoção - Prestamista com abatimento %', () => {

        it('7. Ped venda: produto 1918 0 0 (promoção a prazo 167), inclusão 3874, prestamista 158, 4 parcelas no recebimento Futuro com juros.', () => {
    
            Produto.prazoParcelaPrest() //PRODUTO
            ValidarSaldo.comSaldo()
            GeralProduto.escolherProdutoPesquisa() ; ticketPromocao()
            GeralProduto.clicarVoltagemProduto() //PRODUTO
            selecionarPrimeiraPromoProduto()
            escolherRecebPromoPrazoFuturoComJurosPrest()
            GeralProduto.clicarAdicionarProduto()
            Servico.validarModalServVinc()
            Servico.clicarOKServVinc() //SERVIÇOS
            tirarEntrega()
            AvancarNormal.paraParcelas()
            cy.intercept('GET', '/images/icons/chain.svg').as('api_icons')
            cy.wait('@api_icons', { timeout: 40000 })
            clicarEditarParcelas()
            escolherQuatroParcelaPagamento()
            okSeguroPrestamista()
            ticketPrestamistaAdicionado() //Validando adição do prestamista
            AvancarNormal.final()
            ticketPrestamistaPaginaFinal()
            clicarFinalizarPedido() //RESUMO
            validarPedidoGerado()
        })

        it('8. Ped venda: produto 1918 0 0 (promoção a prazo 167), inclusão 3876, prestamista 158, 4 parcelas no recebimento Futuro sem juros.', () => {
    
            Produto.prazoParcelaPrest() //PRODUTO
            ValidarSaldo.comSaldo()
            GeralProduto.escolherProdutoPesquisa() ; ticketPromocao()
            GeralProduto.clicarVoltagemProduto() //PRODUTO
            selecionarPrimeiraPromoProduto()
            escolherRecebPromoPrazoFuturoSemJurosPrest()
            GeralProduto.clicarAdicionarProduto()
            Servico.validarModalServVinc()
            Servico.clicarOKServVinc() //SERVIÇOS
            tirarEntrega()
            AvancarNormal.paraParcelas()
            cy.intercept('GET', '/images/icons/chain.svg').as('api_icons')
            cy.wait('@api_icons', { timeout: 40000 })
            clicarEditarParcelas()
            escolherQuatroParcelaPagamento()
            okSeguroPrestamista()
            ticketPrestamistaAdicionado() //Validando adição do prestamista
            AvancarNormal.final()
            ticketPrestamistaPaginaFinal()
            clicarFinalizarPedido() //RESUMO
            validarPedidoGerado()
        })

        it('9. Ped venda: produto 1918 0 0 (promoção a prazo 167), com garantia Não separa, inclusão 3876, prestamista 158, 4 parcelas no recebimento Futuro sem juros.', () => {
    
            Produto.prazoParcelaPrest() //PRODUTO
            ValidarSaldo.comSaldo()
            GeralProduto.escolherProdutoPesquisa() ; ticketPromocao()
            GeralProduto.clicarVoltagemProduto() //PRODUTO
            selecionarPrimeiraPromoProduto()
            escolherRecebPromoPrazoFuturoSemJurosPrest()
            GeralProduto.clicarAdicionarProduto()
            Servico.validarModalServVinc()
            garantiaNaoSepara()
            Servico.clicarOKServVinc() //SERVIÇOS
            tirarEntrega()
            AvancarNormal.paraParcelas()
            cy.intercept('GET', '/images/icons/chain.svg').as('api_icons')
            cy.wait('@api_icons', { timeout: 40000 })
            clicarEditarParcelas()
            escolherQuatroParcelaPagamento()
            okSeguroPrestamista()
            ticketPrestamistaAdicionado() //Validando adição do prestamista
            AvancarNormal.final()
            ticketPrestamistaPaginaFinal()
            clicarFinalizarPedido() //RESUMO
            validarPedidoGerado()
        })
    })

    context('Com entrega / Produtos com promoção - Prestamista com abatimento %', () => {

        it('10. Ped venda: produto 1919 0 0 (promoção a prazo 168), com garantia Não separa, inclusão 3876, prestamista 158, 4 parcelas no recebimento Futuro sem juros.', () => {

            Produto.prazoParcelaPrest() //PRODUTO
            ValidarSaldo.comSaldo()
            GeralProduto.escolherProdutoPesquisa() ; ticketPromocao()
            GeralProduto.clicarVoltagemProduto() //PRODUTO
            selecionarPrimeiraPromoProduto()
            escolherRecebPromoPrazoFuturoSemJurosPrest()
            GeralProduto.clicarAdicionarProduto()
            Servico.validarModalServVinc()
            garantiaNaoSepara()
            Servico.clicarOKServVinc() //SERVIÇOS
            validarServicosVinculados() ; validaAddGarantNaoSep()
            AvancarNormal.paraTransportadora()
            AvancarNormal.paraParcelas()
            cy.intercept('GET', '/images/icons/chain.svg').as('api_pagamentoPedido')
            cy.wait('@api_pagamentoPedido', { timeout: 40000 })
            inserirDataAmanha1Vencimento()
            cy.wait(4000)
            clicarGerarParcAlterarVenc()
            cy.contains('3876 - T.A. A Receber Futuro - para Prestamista sem juros').click()
            cy.intercept('/services/v3/pedido_forma_pagamento').as('api_pedido_forma_pagamento')
            cy.wait('@api_pedido_forma_pagamento', { timeout: 40000 })
            escolherUmaParcelaPagamento()
            okSeguroPrestamista()
            ticketPrestamistaAdicionado() //Validando adição do prestamista
            avancAvancarNormal.finalarFinal()
            ticketPrestamistaPaginaFinal()
            clicarFinalizarPedido() //RESUMO
            validarPedidoGerado()
        })

        it('11. Ped venda: produto 1919 0 0 (promoção a prazo 168), com garantia Não separa, inclusão 3874, prestamista 158, 4 parcelas no recebimento Futuro com juros.', () => {

            Produto.prazoParcelaPrest() //PRODUTO
            ValidarSaldo.comSaldo()
            GeralProduto.escolherProdutoPesquisa() ; ticketPromocao()
            GeralProduto.clicarVoltagemProduto() //PRODUTO
            selecionarPrimeiraPromoProduto()
            escolherRecebPromoPrazoFuturoComJurosPrest()
            GeralProduto.clicarAdicionarProduto()
            Servico.validarModalServVinc()
            garantiaNaoSepara()
            Servico.clicarOKServVinc() //SERVIÇOS
            validarServicosVinculados() ; validaAddGarantNaoSep()
            AvancarNormal.paraTransportadora()
            AvancarNormal.paraParcelas()
            cy.intercept('GET', '/images/icons/chain.svg').as('api_pagamentoPedido')
            cy.wait('@api_pagamentoPedido', { timeout: 40000 })
            //ticketPrestamistaAdicionado() //Validando adição do prestamista
            inserirDataAmanha1Vencimento()
            cy.wait(4000)
            clicarGerarParcAlterarVenc()
            cy.contains('3874 - T.A. A Receber Futuro - para Prestamista').click()
            cy.intercept('/services/v3/pedido_forma_pagamento').as('api_pedido_forma_pagamento')
            cy.wait('@api_pedido_forma_pagamento', { timeout: 40000 })
            escolherUmaParcelaPagamento()
            okSeguroPrestamista()
            ticketPrestamistaAdicionado() //Validando adição do prestamista
            AvancarNormal.final()
            ticketPrestamistaPaginaFinal()
            clicarFinalizarPedido() //RESUMO
            validarPedidoGerado()
        })
        
        it('12. Ped venda: produto 1920 0 0 (promoção partida 169), com garantia Não separa, inclusão 3876, prestamista 158, 4 parcelas no recebimento Futuro com juros.', () => {
    
            Produto.prazoParcelaPrest() //PRODUTO
            ValidarSaldo.comSaldo()
            GeralProduto.escolherProdutoPesquisa() ; ticketPromocao()
            GeralProduto.clicarVoltagemProduto() //PRODUTO
            selecionarPrimeiraPromoProduto()
            escolherRecebPromoPartidaPresentePrest()
            GeralProduto.clicarAdicionarProduto()
            Servico.validarModalServVinc()
            garantiaNaoSepara()
            Servico.clicarOKServVinc() //SERVIÇOS
            validarServicosVinculados() ; validaAddGarantNaoSep()
            tirarEntrega()
            AvancarNormal.paraParcelas()
            cy.intercept('GET', '/images/icons/chain.svg').as('api_icons')
            cy.wait('@api_icons', { timeout: 40000 })
            clicarEditarParcelas()
            escolherQuatroParcelaPagamento()
            okSeguroPrestamista()
            ticketPrestamistaAdicionado() //Validando adição do prestamista
            AvancarNormal.final()
            ticketPrestamistaPaginaFinal()
            clicarFinalizarPedido() //RESUMO
            validarPedidoGerado()
        })
    })

    context('Sem entrega / Misto com e sem Promoção - Prestamista abatimento %', () => {

        it('13. Ped venda: produto 1918 0 0 (promo a prazo 167) e 1860 0 0 (sem promoção), inclusão 3874 (outro recebimento 3860), prestamista 158, 4 parcelas no recebimento Futuro com juros.', () => {
    
            Produto.prazoParcelaPrest() //PRODUTO
            ValidarSaldo.comSaldo()
            GeralProduto.escolherProdutoPesquisa() ; ticketPromocao()
            GeralProduto.clicarVoltagemProduto() //PRODUTO
            selecionarPrimeiraPromoProduto()
            escolherRecebPromoPrazoFuturoComJurosPrest()
            GeralProduto.clicarAdicionarProduto()
            Servico.validarModalServVinc()
            Servico.clicarOKServVinc() //SERVIÇOS
            tirarEntrega()
            Produto.segundo() //PRODUTO
            ValidarSaldo.comSaldo()
            GeralProduto.escolherProdutoPesquisa()
            GeralProduto.clicarVoltagemProduto() //PRODUTO
            GeralProduto.clicarAdicionarProduto()
            Servico.validarModalServVinc()
            Servico.clicarOKServVinc()
            tirarEntrega()
            AvancarNormal.paraParcelas()
            cy.intercept('GET', '/images/icons/chain.svg').as('api_icons')
            cy.wait('@api_icons', { timeout: 40000 })
            clicarEditarParcelas()
            escolherQuatroParcelaPagamento()
            okSeguroPrestamista()
            ticketPrestamistaAdicionado() //Validando adição do prestamista
            inserirDataAmanha1Vencimento()
            clicarGerarParcAlterarVenc()
            escolherFormaPagamentoPrincipal()
            escolherUmaParcelaPagamento()
            AvancarNormal.final()
            ticketPrestamistaPaginaFinal()
            clicarFinalizarPedido() //RESUMO
            validarPedidoGerado()
        })

        it('14. Ped venda: produto 1918 0 0 (promo a prazo 167) e 1860 0 0 (sem promoção), inclusão 3874 (outro recebimento 3874 agrupar), prestamista 158, 4 parcelas no recebimento Futuro com juros.', () => {
    
            Produto.prazoParcelaPrest() //PRODUTO
            ValidarSaldo.comSaldo()
            GeralProduto.escolherProdutoPesquisa() ; ticketPromocao()
            GeralProduto.clicarVoltagemProduto() //PRODUTO
            selecionarPrimeiraPromoProduto()
            escolherRecebPromoPrazoFuturoComJurosPrest()
            GeralProduto.clicarAdicionarProduto()
            Servico.validarModalServVinc()
            Servico.clicarOKServVinc() //SERVIÇOS
            tirarEntrega()
            Produto.segundo() //PRODUTO
            ValidarSaldo.comSaldo()
            GeralProduto.escolherProdutoPesquisa()
            GeralProduto.clicarVoltagemProduto() //PRODUTO
            GeralProduto.clicarAdicionarProduto()
            Servico.validarModalServVinc()
            Servico.clicarOKServVinc()
            tirarEntrega()
            AvancarNormal.paraParcelas()
            cy.intercept('GET', '/images/icons/chain.svg').as('api_icons')
            cy.wait('@api_icons', { timeout: 40000 })
            clicarEditarParcelas()
            escolherQuatroParcelaPagamento()
            okSeguroPrestamista()
            ticketPrestamistaAdicionado() //Validando adição do prestamista
            inserirData31Dias1Vencimento()
            clicarGerarParcAlterarVenc()
            escolherRecebFuturoPrestamistaComJuros()
            cy.get('[style="position: relative"] > :nth-child(4) > div.ng-binding').click({force:true}) //escolher 4 parcelas
            agruparLancamentos()
            messPrestamistaRemovido()
            addSeguroPrestamista()
            ticketPrestAdicionadoRecebAgrupado()
            AvancarNormal.final()
            ticketPrestamistaPaginaFinal()
            clicarFinalizarPedido() //RESUMO
            validarPedidoGerado()
        })

        it('15. Ped venda: produto 1918 0 0 (promo a prazo 167) e 1860 0 0 (sem promoção), inclusão 3876 (outro recebimento 3860), prestamista 158, 4 parcelas no recebimento Futuro sem juros.', () => {
    
            Produto.prazoParcelaPrest() //PRODUTO
            ValidarSaldo.comSaldo()
            GeralProduto.escolherProdutoPesquisa() ; ticketPromocao()
            GeralProduto.clicarVoltagemProduto() //PRODUTO
            selecionarPrimeiraPromoProduto()
            escolherRecebPromoPrazoFuturoSemJurosPrest()
            GeralProduto.clicarAdicionarProduto()
            Servico.validarModalServVinc()
            Servico.clicarOKServVinc() //SERVIÇOS
            tirarEntrega()
            Produto.segundo() //PRODUTO
            ValidarSaldo.comSaldo()
            GeralProduto.escolherProdutoPesquisa()
            GeralProduto.clicarVoltagemProduto() //PRODUTO
            GeralProduto.clicarAdicionarProduto()
            Servico.validarModalServVinc()
            Servico.clicarOKServVinc()
            tirarEntrega()
            AvancarNormal.paraParcelas()
            cy.intercept('GET', '/images/icons/chain.svg').as('api_icons')
            cy.wait('@api_icons', { timeout: 40000 })
            clicarEditarParcelas()
            escolherQuatroParcelaPagamento()
            okSeguroPrestamista()
            ticketPrestamistaAdicionado() //Validando adição do prestamista
            inserirDataAmanha1Vencimento()
            clicarGerarParcAlterarVenc()
            escolherFormaPagamentoPrincipal()
            escolherUmaParcelaPagamento()
            AvancarNormal.final()
            ticketPrestamistaPaginaFinal()
            clicarFinalizarPedido() //RESUMO
            validarPedidoGerado()
        })

        it('16. Ped venda: produto 1918 0 0 (promo a prazo 167) e 1860 0 0 (sem promoção), inclusão 3876 (outro recebimento 3876 agrupar), prestamista 158, 4 parcelas no recebimento Futuro sem juros.', () => {
    
            Produto.prazoParcelaPrest() //PRODUTO
            ValidarSaldo.comSaldo()
            GeralProduto.escolherProdutoPesquisa() ; ticketPromocao()
            GeralProduto.clicarVoltagemProduto() //PRODUTO
            selecionarPrimeiraPromoProduto()
            escolherRecebPromoPrazoFuturoSemJurosPrest()
            GeralProduto.clicarAdicionarProduto()
            Servico.validarModalServVinc()
            Servico.clicarOKServVinc() //SERVIÇOS
            tirarEntrega()
            Produto.segundo() //PRODUTO
            ValidarSaldo.comSaldo()
            GeralProduto.escolherProdutoPesquisa()
            GeralProduto.clicarVoltagemProduto() //PRODUTO
            GeralProduto.clicarAdicionarProduto()
            Servico.validarModalServVinc()
            Servico.clicarOKServVinc()
            tirarEntrega()
            AvancarNormal.paraParcelas()
            cy.intercept('GET', '/images/icons/chain.svg').as('api_icons')
            cy.wait('@api_icons', { timeout: 40000 })
            clicarEditarParcelas()
            escolherQuatroParcelaPagamento()
            okSeguroPrestamista()
            ticketPrestamistaAdicionado() //Validando adição do prestamista
            inserirData31Dias1Vencimento()
            clicarGerarParcAlterarVenc()
            cy.intercept('POST', '/services/v3/pedido_forma_pagamento_lista').as('api_pedido_forma_pagamento_lista')
            cy.wait('@api_pedido_forma_pagamento_lista', { timeout: 40000 })
            escolherRecebFuturoPrestamistaSemJuros()
            cy.get('[style="position: relative"] > :nth-child(4) > div.ng-binding').click({force:true}) //escolher 4 parcelas
            agruparLancamentos()
            messPrestamistaRemovido()
            addSeguroPrestamista()
            ticketPrestAdicionadoRecebAgrupado()
            AvancarNormal.final()
            ticketPrestamistaPaginaFinal()
            clicarFinalizarPedido() //RESUMO
            validarPedidoGerado()
        })

        it('17. Ped venda: produto 1921 0 0 (promo a prazo 170), inclusão 3874, prestamista 158, 4 parcelas no recebimento Futuro com juros.', () => {
    
            Produto.prazoParcelaPrest() //PRODUTO
            ValidarSaldo.comSaldo()
            GeralProduto.escolherProdutoPesquisa() ; ticketPromocao()
            GeralProduto.clicarVoltagemProduto() //PRODUTO
            selecionarPrimeiraPromoProduto()
            escolherRecebPromoPrazoFuturoComJurosPrest()
            GeralProduto.clicarAdicionarProduto()
            Servico.validarModalServVinc()
            Servico.clicarOKServVinc() //SERVIÇOS
            tirarEntrega()
            AvancarNormal.paraParcelas()
            cy.intercept('GET', '/images/icons/chain.svg').as('api_icons')
            cy.wait('@api_icons', { timeout: 40000 })
            clicarEditarParcelas()
            escolherQuatroParcelaPagamento()
            okSeguroPrestamista()
            ticketPrestamistaAdicionado() //Validando adição do prestamista
            AvancarNormal.final()
            ticketPrestamistaPaginaFinal()
            clicarFinalizarPedido() //RESUMO
            validarPedidoGerado()
        })
    })

    context('Com entrega / Misto com e sem Promoção - Prestamista abatimento %', () => {

        it('18. Ped venda: produto 1918 0 0 (promo a prazo 167) (com garantia não separa) e 1860 0 0 (sem promoção), inclusão 3874 (outro recebimento 3860), prestamista 158, 4 parcelas no recebimento Futuro com juros.', () => {
    
            Produto.prazoParcelaPrest() //PRODUTO
            ValidarSaldo.comSaldo()
            GeralProduto.escolherProdutoPesquisa() ; ticketPromocao()
            GeralProduto.clicarVoltagemProduto() //PRODUTO
            selecionarPrimeiraPromoProduto()
            escolherRecebPromoPrazoFuturoComJurosPrest()
            GeralProduto.clicarAdicionarProduto()
            Servico.validarModalServVinc()
            garantiaNaoSepara()
            Servico.clicarOKServVinc() //SERVIÇOS
            validarServicosVinculados() ; validaAddGarantNaoSep()
            Produto.segundo() //PRODUTO
            ValidarSaldo.comSaldo()
            GeralProduto.escolherProdutoPesquisa()
            GeralProduto.clicarVoltagemProduto() //PRODUTO
            GeralProduto.clicarAdicionarProduto()
            Servico.validarModalServVinc()
            Servico.clicarOKServVinc()
            AvancarNormal.paraTransportadora()
            AvancarNormal.paraParcelas()
            cy.intercept('GET', '/images/icons/chain.svg').as('api_icons')
            cy.wait('@api_icons', { timeout: 40000 })
            clicarEditarParcelas()
            escolherQuatroParcelaPagamento()
            okSeguroPrestamista()
            ticketPrestamistaAdicionado() //Validando adição do prestamista
            inserirDataAmanha1Vencimento()
            clicarGerarParcAlterarVenc()
            cy.intercept('POST', '/services/v3/pedido_forma_pagamento_lista').as('api_pedido_forma_pagamento_lista')
            cy.wait('@api_pedido_forma_pagamento_lista', { timeout: 40000 })
            escolherFormaPagamentoPrincipal()
            escolherUmaParcelaPagamento()
            AvancarNormal.final()
            ticketPrestamistaPaginaFinal()
            clicarFinalizarPedido() //RESUMO
            validarPedidoGerado()
        })

        it('19. Ped venda: produto 1918 0 0 (promo a prazo 167) (com garantia não separa) e 1860 0 0 (sem promoção), inclusão 3874 (outro recebimento 3874 agrupar), prestamista 158, 4 parcelas no recebimento Futuro com juros.', () => {
    
            Produto.prazoParcelaPrest() //PRODUTO
            ValidarSaldo.comSaldo()
            GeralProduto.escolherProdutoPesquisa() ; ticketPromocao()
            GeralProduto.clicarVoltagemProduto() //PRODUTO
            selecionarPrimeiraPromoProduto()
            escolherRecebPromoPrazoFuturoComJurosPrest()
            GeralProduto.clicarAdicionarProduto()
            Servico.validarModalServVinc()
            garantiaNaoSepara()
            Servico.clicarOKServVinc() //SERVIÇOS
            validarServicosVinculados() ; validaAddGarantNaoSep()
            Produto.segundo() //PRODUTO
            ValidarSaldo.comSaldo()
            GeralProduto.escolherProdutoPesquisa()
            GeralProduto.clicarVoltagemProduto() //PRODUTO
            GeralProduto.clicarAdicionarProduto()
            Servico.validarModalServVinc()
            Servico.clicarOKServVinc()
            AvancarNormal.paraTransportadora()
            AvancarNormal.paraParcelas()
            cy.intercept('GET', '/images/icons/chain.svg').as('api_icons')
            cy.wait('@api_icons', { timeout: 40000 })
            // ticketPrestamistaAdicionado() //Validando adição do prestamista
            clicarEditarParcelas()
            escolherQuatroParcelaPagamento()
            okSeguroPrestamista()
            ticketPrestamistaAdicionado() //Validando adição do prestamista
            inserirData31Dias1Vencimento()
            clicarGerarParcAlterarVenc()
            cy.intercept('POST', '/services/v3/pedido_forma_pagamento_lista').as('api_pedido_forma_pagamento_lista')
            cy.wait('@api_pedido_forma_pagamento_lista', { timeout: 40000 })
            escolherRecebFuturoPrestamistaComJuros()
            cy.get('[style="position: relative"] > :nth-child(4) > div.ng-binding').click({force:true}) //escolher 4 parcelas
            agruparLancamentos()
            messPrestamistaRemovido()
            addSeguroPrestamista()
            ticketPrestAdicionadoRecebAgrupado()
            AvancarNormal.final()
            ticketPrestamistaPaginaFinal()
            clicarFinalizarPedido() //RESUMO
            validarPedidoGerado()
        })

        it('20. Ped venda: produto 1918 0 0 (promo a prazo 167) (com garantia não separa) e 1860 0 0 (sem promoção), inclusão 3876 (outro recebimento 3860), prestamista 158, 4 parcelas no recebimento Futuro sem juros.', () => {

            Produto.prazoParcelaPrest() //PRODUTO
            ValidarSaldo.comSaldo()
            GeralProduto.escolherProdutoPesquisa() ; ticketPromocao()
            GeralProduto.clicarVoltagemProduto() //PRODUTO
            selecionarPrimeiraPromoProduto()
            escolherRecebPromoPrazoFuturoSemJurosPrest()
            GeralProduto.clicarAdicionarProduto()
            Servico.validarModalServVinc()
            garantiaNaoSepara()
            Servico.clicarOKServVinc() //SERVIÇOS
            validarServicosVinculados() ; validaAddGarantNaoSep()
            Produto.segundo() //PRODUTO
            ValidarSaldo.comSaldo()
            GeralProduto.escolherProdutoPesquisa()
            GeralProduto.clicarVoltagemProduto() //PRODUTO
            GeralProduto.clicarAdicionarProduto()
            Servico.validarModalServVinc()
            Servico.clicarOKServVinc()
            AvancarNormal.paraTransportadora()
            AvancarNormal.paraParcelas()
            cy.intercept('GET', '/images/icons/chain.svg').as('api_icons')
            cy.wait('@api_icons', { timeout: 40000 })
            clicarEditarParcelas()
            escolherQuatroParcelaPagamento()
            okSeguroPrestamista()
            ticketPrestamistaAdicionado() //Validando adição do prestamista
            inserirDataAmanha1Vencimento()
            clicarGerarParcAlterarVenc()
            cy.intercept('POST', '/services/v3/pedido_forma_pagamento_lista').as('api_pedido_forma_pagamento_lista')
            cy.wait('@api_pedido_forma_pagamento_lista', { timeout: 40000 })
            escolherFormaPagamentoPrincipal()
            escolherUmaParcelaPagamento()
            AvancarNormal.final()
            ticketPrestamistaPaginaFinal()
            clicarFinalizarPedido() //RESUMO
            validarPedidoGerado()
        })

        it('21. Ped venda: produto 1918 0 0 (promo a prazo 167) (com garantia não separa) e 1860 0 0 (sem promoção), inclusão 3876 (outro recebimento 3876 agrupar), prestamista 158, 4 parcelas no recebimento Futuro sem juros.', () => {
    
            Produto.prazoParcelaPrest() //PRODUTO
            ValidarSaldo.comSaldo()
            GeralProduto.escolherProdutoPesquisa() ; ticketPromocao()
            GeralProduto.clicarVoltagemProduto() //PRODUTO
            selecionarPrimeiraPromoProduto()
            escolherRecebPromoPrazoFuturoSemJurosPrest()
            GeralProduto.clicarAdicionarProduto()
            Servico.validarModalServVinc()
            garantiaNaoSepara()
            Servico.clicarOKServVinc() //SERVIÇOS)
            validarServicosVinculados() ; validaAddGarantNaoSep()
            Produto.segundo() //PRODUTO
            ValidarSaldo.comSaldo()
            GeralProduto.escolherProdutoPesquisa()
            GeralProduto.clicarVoltagemProduto() //PRODUTO
            GeralProduto.clicarAdicionarProduto()
            Servico.validarModalServVinc()
            Servico.clicarOKServVinc()
            AvancarNormal.paraTransportadora()
            AvancarNormal.paraParcelas()
            cy.intercept('GET', '/images/icons/chain.svg').as('api_icons')
            cy.wait('@api_icons', { timeout: 40000 })
            // ticketPrestamistaAdicionado() //Validando adição do prestamista
            clicarEditarParcelas()
            escolherQuatroParcelaPagamento()
            okSeguroPrestamista()
            ticketPrestamistaAdicionado() //Validando adição do prestamista
            inserirData31Dias1Vencimento()
            clicarGerarParcAlterarVenc()
            cy.intercept('POST', '/services/v3/pedido_forma_pagamento_lista').as('api_pedido_forma_pagamento_lista')
            cy.wait('@api_pedido_forma_pagamento_lista', { timeout: 40000 })
            escolherRecebFuturoPrestamistaSemJuros()
            cy.get('[style="position: relative"] > :nth-child(4) > div.ng-binding').click({force:true}) //escolher 4 parcelas
            agruparLancamentos()
            messPrestamistaRemovido()
            addSeguroPrestamista()
            ticketPrestAdicionadoRecebAgrupado()
            AvancarNormal.final()
            ticketPrestamistaPaginaFinal()
            clicarFinalizarPedido() //RESUMO
            validarPedidoGerado()
        })

        it('22. Ped venda: produto 1920 0 0 (promo a prazo 169) (com garantia não separa) e 1860 0 0 (sem promoção), inclusão 3875 (outro recebimento 3874), prestamista 158, 4 parcelas no recebimento Presente.', () => {

            Produto.prazoParcelaPrest() //PRODUTO
            ValidarSaldo.comSaldo()
            GeralProduto.escolherProdutoPesquisa() ; ticketPromocao()
            GeralProduto.clicarVoltagemProduto() //PRODUTO
            selecionarPrimeiraPromoProduto()
            escolherRecebPromoPartidaPresentePrest()
            GeralProduto.clicarAdicionarProduto()
            Servico.validarModalServVinc()
            garantiaNaoSepara()
            Servico.clicarOKServVinc() //SERVIÇOS
            validarServicosVinculados() ; validaAddGarantNaoSep()
            Produto.segundo() //PRODUTO
            ValidarSaldo.comSaldo()
            GeralProduto.escolherProdutoPesquisa()
            GeralProduto.clicarVoltagemProduto() //PRODUTO
            GeralProduto.clicarAdicionarProduto()
            Servico.validarModalServVinc()
            garantiaNaoSepara()
            Servico.clicarOKServVinc()
            AvancarNormal.paraTransportadora()
            AvancarNormal.paraParcelas()
            cy.intercept('GET', '/images/icons/chain.svg').as('api_icons')
            cy.wait('@api_icons', { timeout: 40000 })
            clicarEditarParcelas()
            escolherQuatroParcelaPagamento()
            okSeguroPrestamista()
            ticketPrestamistaAdicionado() //Validando adição do prestamista
            inserirDataAmanha1Vencimento()
            clicarGerarParcAlterarVenc()
            cy.intercept('POST', '/services/v3/pedido_forma_pagamento_lista').as('api_pedido_forma_pagamento_lista')
            cy.wait('@api_pedido_forma_pagamento_lista', { timeout: 40000 })
            escolherSegundaFormaPagamento()
            escolherUmaParcelaPagamento()
            AvancarNormal.final()
            ticketPrestamistaPaginaFinal()
            clicarFinalizarPedido() //RESUMO
            validarPedidoGerado()
        })

        it('23. Ped venda: produto 1920 0 0 (promo a prazo 169) (com garantia não separa) e 1860 0 0 (sem promoção), inclusão 3875 (outro recebimento 3875 agrupar), prestamista 158, 4 parcelas no recebimento Presente.', () => {
    
            Produto.prazoParcelaPrest() //PRODUTO
            ValidarSaldo.comSaldo()
            GeralProduto.escolherProdutoPesquisa() ; ticketPromocao()
            GeralProduto.clicarVoltagemProduto() //PRODUTO
            selecionarPrimeiraPromoProduto()
            escolherRecebPromoPartidaPresentePrest()
            GeralProduto.clicarAdicionarProduto()
            Servico.validarModalServVinc()
            garantiaNaoSepara()
            Servico.clicarOKServVinc() //SERVIÇOS)
            validarServicosVinculados() ; validaAddGarantNaoSep()
            Produto.segundo() //PRODUTO
            ValidarSaldo.comSaldo()
            GeralProduto.escolherProdutoPesquisa()
            GeralProduto.clicarVoltagemProduto() //PRODUTO
            GeralProduto.clicarAdicionarProduto()
            Servico.validarModalServVinc()
            garantiaNaoSepara()
            Servico.clicarOKServVinc()
            AvancarNormal.paraTransportadora()
            AvancarNormal.paraParcelas()
            cy.intercept('GET', '/images/icons/chain.svg').as('api_icons')
            cy.wait('@api_icons', { timeout: 40000 })
            // ticketPrestamistaAdicionado() //Validando adição do prestamista
            clicarEditarParcelas()
            escolherQuatroParcelaPagamento()
            okSeguroPrestamista()
            ticketPrestamistaAdicionado() //Validando adição do prestamista
            inserirData31Dias1Vencimento()
            clicarGerarParcAlterarVenc()
            cy.intercept('POST', '/services/v3/pedido_forma_pagamento_lista').as('api_pedido_forma_pagamento_lista')
            cy.wait('@api_pedido_forma_pagamento_lista', { timeout: 40000 })
            escolherRecebPresentePrestamista()
            cy.get('[style="position: relative"] > :nth-child(4) > div.ng-binding').click({force:true}) //escolher 4 parcelas
            agruparLancamentos()
            messPrestamistaRemovido()
            addSeguroPrestamista()
            ticketPrestAdicionadoRecebAgrupado()
            AvancarNormal.final()
            ticketPrestamistaPaginaFinal()
            clicarFinalizarPedido() //RESUMO
            validarPedidoGerado()
        })
    })
})