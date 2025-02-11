import { validarComSaldo, clienteComRota, selecionarPrimeiraPromoProduto, clicarEditarParcelas, ticketPrestamistaAdicionado,
         escolherProdutoPesquisa, clicarVoltagemProduto, addProduto, ticketPrestAdicionadoRecebAgrupado, compararSubtotalTotalFinanceiro,
         ticketPrestamistaPaginaFinal } from '../../../../support/para_pedidos/gerais_pedidos.js';
import { produtoNormalPrimeiro, produtoNormalSegundo } from '../../../../support/produtos_pedidos/prd_normal.js';
import { prdPromoPrazoParcelaPrest, prdSegPromoPrazoParcelaPrest, prdTerPromoPrazoParcelaPrest, prdPromoPartidaPrest } from '../../../../support/produtos_pedidos/prd_promo_prestamista.js';
import { garantiaNaoSepara,  validarModalServVinculado, clicarOKServVinculado, okSeguroPrestamista, messPrestamistaRemovido, addSeguroPrestamista } from '../../../../support/para_pedidos/servicos/apenas_servicos.js';
import { validarServicosVinculados, validaAddGarantSepMesmoProc, validaAddGarantNaoSep } from '../../../../support/para_pedidos/servicos/valida_servicos_adicionados.js';
import { botaoGerarParcelas, carregandoFormaPagamento, escolherQuatroParcelaPagamento, inserirDataAmanha1Vencimento, 
         botaoGerarParcelasAlterVencimento, escolherUmaParcelaPagamento, inserirData31Dias1Vencimento, agruparLancamentos } from '../../../../support/para_pedidos/parcelas_pedido.js';
import { escolherFormaPagamentoPrincipal, escolherSegundaFormaPagamento, escolherRecebFuturoPrestamistaComJuros, escolherRecebFuturoPrestamistaSemJuros, 
         escolherRecebPresentePrestamista } from '../../../../support/para_pedidos/processos/processo_recebimento.js';
import { clicarFinalizarPedido, validarPedidoGerado } from '../../../../support/para_pedidos/apenas_finalizar_pedido.js';
import { processoVendaNFe } from '../../../../support/para_pedidos/processos/processo_venda.js';
import { escolherRecebPromoPrazoFuturoComJurosPrest, escolherRecebPromoPrazoFuturoSemJurosPrest, escolherRecebPromoPartidaPresentePrest } from '../../../../support/para_pedidos/processos/processo_recebimento_promo.js';
import { avancarParaParcelas, avancarFinal, avancarParaTransportadora, avancarParcelasEntrega } from '../../../../support/para_pedidos/apenas_botoes_avancar.js';
import { tirarEntrega, tirarEntregaSegundo } from '../../../../support/para_pedidos/apenas_entrega.js';
import { infoFinalClienteSemEntrega, infoFinalClienteComEntrega, infoFinalEntrega, validarObsNotaFiscalVazio, validarObsInternaVazio } from '../../../../support/para_pedidos/validar_tela/tela_final.js';

describe('Gerar pedidos com serviço Prestamista Abatimento % (158)', () => {

    beforeEach(() => {
        cy.visit('/')
        cy.clearAllSessionStorage()
        cy.login()
        cy.urlAposLogin()
        cy.tituloPagina() 
        processoVendaNFe()
        clienteComRota()
    })   

    context('Sem entrega / Produtos sem promoção - Prestamista com abatimento %', () => {

        it('1. Ped venda: produtos 1860 0 0 e 1870 0 0, inclusão 3874, prestamista 158, 4 parcelas no recebimento Futuro com juros.', () => {
    
            produtoNormalPrimeiro()
            validarComSaldo()
            escolherProdutoPesquisa()
            clicarVoltagemProduto() //PRODUTO
            addProduto()
            validarModalServVinculado()
            clicarOKServVinculado() //SERVIÇOS
            tirarEntrega()
            produtoNormalSegundo() //SEGUNDO PRODUTO
            validarComSaldo()
            escolherProdutoPesquisa()
            clicarVoltagemProduto()
            addProduto()
            validarModalServVinculado() //SERVICOS - SEGUNDO PRODUTO
            clicarOKServVinculado()
            tirarEntregaSegundo()
            avancarParaParcelas()
            botaoGerarParcelas() //GERAR PARCELAS
            carregandoFormaPagamento()
            escolherRecebFuturoPrestamistaComJuros()
            escolherQuatroParcelaPagamento()
            okSeguroPrestamista()
            ticketPrestamistaAdicionado() //Validando adição do prestamista
            avancarFinal()
            ticketPrestamistaPaginaFinal()
            clicarFinalizarPedido() //RESUMO
            validarPedidoGerado()
        })

        it('2. Ped venda: produtos 1860 0 0 e 1870 0 0, inclusão 3875, prestamista 158, 4 parcelas no recebimento Presente.', () => {
    
            produtoNormalPrimeiro()
            validarComSaldo()
            escolherProdutoPesquisa()
            clicarVoltagemProduto() //PRODUTO
            addProduto()
            validarModalServVinculado() //SERVICOS
            clicarOKServVinculado()
            tirarEntrega()
            produtoNormalSegundo() //SEGUNDO PRODUTO
            validarComSaldo()
            escolherProdutoPesquisa()
            clicarVoltagemProduto()
            addProduto()
            validarModalServVinculado() //SERVICOS
            clicarOKServVinculado()
            tirarEntregaSegundo()
            avancarParaParcelas()
            botaoGerarParcelas() //GERAR PARCELAS
            carregandoFormaPagamento()
            escolherRecebPresentePrestamista()
            escolherQuatroParcelaPagamento()
            okSeguroPrestamista()
            ticketPrestamistaAdicionado() //Validando adição do prestamista
            avancarFinal()
            ticketPrestamistaPaginaFinal()
            clicarFinalizarPedido() //RESUMO
            validarPedidoGerado()
        })
    })

    context('Com entrega / Produtos sem promoção - Prestamista com abatimento %', () => {

        it('3. Ped venda: produtos 1860 0 0 e 1870 0 0, inclusão 3876, prestamista 158, 4 parcelas no recebimento Futuro sem juros.', () => {
    
            produtoNormalPrimeiro()
            validarComSaldo()
            escolherProdutoPesquisa()
            clicarVoltagemProduto() //PRODUTO
            addProduto()
            validarModalServVinculado() //SERVICOS
            clicarOKServVinculado()
            produtoNormalSegundo() //SEGUNDO PRODUTO
            validarComSaldo()
            escolherProdutoPesquisa()
            clicarVoltagemProduto()
            addProduto()
            validarModalServVinculado() //SERVICOS
            clicarOKServVinculado()
            avancarParaTransportadora()
            avancarParcelasEntrega()
            botaoGerarParcelas() //GERAR PARCELAS
            carregandoFormaPagamento()
            escolherRecebFuturoPrestamistaSemJuros()
            escolherQuatroParcelaPagamento()
            okSeguroPrestamista()
            ticketPrestamistaAdicionado() //Validando adição do prestamista
            avancarFinal()
            ticketPrestamistaPaginaFinal()
            clicarFinalizarPedido() //RESUMO
            validarPedidoGerado()
        })

        it('4. Ped venda: produtos 1860 0 0 (com garantia não separa) e 1870 0 0, inclusão 3874, prestamista 158, 4 parcelas no recebimento Futuro com juros.', () => {
    
            produtoNormalPrimeiro()
            validarComSaldo()
            escolherProdutoPesquisa()
            clicarVoltagemProduto() //PRODUTO
            addProduto()
            validarModalServVinculado()
            garantiaNaoSepara()
            clicarOKServVinculado() //SERVIÇOS
            validarServicosVinculados() ; validaAddGarantSepMesmoProc()
            produtoNormalSegundo() //SEGUNDO PRODUTO
            validarComSaldo()
            escolherProdutoPesquisa()
            clicarVoltagemProduto()
            addProduto()
            validarModalServVinculado() //SERVICOS
            clicarOKServVinculado()
            avancarParaTransportadora()
            avancarParcelasEntrega()
            botaoGerarParcelas() //GERAR PARCELAS
            carregandoFormaPagamento()
            escolherRecebFuturoPrestamistaComJuros()
            escolherQuatroParcelaPagamento()
            okSeguroPrestamista()
            ticketPrestamistaAdicionado() //Validando adição do prestamista
            avancarFinal()
            ticketPrestamistaPaginaFinal()
            clicarFinalizarPedido() //RESUMO
            validarPedidoGerado()
        })

        it('5. Ped venda: produtos 1860 0 0 (com garantia não separa) e 1870 0 0, inclusão 3876, prestamista 158, 4 parcelas no recebimento Futuro sem juros.', () => {

            produtoNormalPrimeiro()
            validarComSaldo()
            escolherProdutoPesquisa()
            clicarVoltagemProduto() //PRODUTO
            addProduto()
            validarModalServVinculado()
            garantiaNaoSepara()
            clicarOKServVinculado() //SERVIÇOS
            validarServicosVinculados() ; validaAddGarantSepMesmoProc()
            produtoNormalSegundo() //SEGUNDO PRODUTO
            validarComSaldo()
            escolherProdutoPesquisa()
            clicarVoltagemProduto()
            addProduto()
            validarModalServVinculado() //SERVICOS - SEGUNDO PRODUTO
            clicarOKServVinculado()
            avancarParaTransportadora()
            avancarParcelasEntrega()
            botaoGerarParcelas() //GERAR PARCELAS
            carregandoFormaPagamento()
            escolherRecebFuturoPrestamistaSemJuros()
            escolherQuatroParcelaPagamento()
            okSeguroPrestamista()
            ticketPrestamistaAdicionado() //Validando adição do prestamista
            avancarFinal()
            ticketPrestamistaPaginaFinal()
            clicarFinalizarPedido() //RESUMO
            validarPedidoGerado()
        })

        it('6. Ped venda: produtos 1860 0 0 (com garantia não separa) e 1870 0 0, inclusão 3875, prestamista 158, 4 parcelas no recebimento Presente sem juros.', () => {
    
            produtoNormalPrimeiro()
            validarComSaldo()
            escolherProdutoPesquisa()
            clicarVoltagemProduto() //PRODUTO
            addProduto()
            validarModalServVinculado()
            garantiaNaoSepara()
            clicarOKServVinculado() //SERVIÇOS
            validarServicosVinculados() ; validaAddGarantSepMesmoProc()
            produtoNormalSegundo() //SEGUNDO PRODUTO
            validarComSaldo()
            escolherProdutoPesquisa()
            clicarVoltagemProduto()
            addProduto()
            validarModalServVinculado() //SERVICOS - SEGUNDO PRODUTO
            clicarOKServVinculado()
            avancarParaTransportadora()
            avancarParcelasEntrega()
            botaoGerarParcelas() //GERAR PARCELAS
            carregandoFormaPagamento()
            escolherRecebPresentePrestamista()
            escolherQuatroParcelaPagamento()
            okSeguroPrestamista()
            ticketPrestamistaAdicionado() //Validando adição do prestamista
            avancarFinal()
            ticketPrestamistaPaginaFinal()
            clicarFinalizarPedido() //RESUMO
            validarPedidoGerado()
        })
    })

    context('Sem entrega / Produtos com promoção - Prestamista com abatimento %', () => {

        it('7. Ped venda: produto 1918 0 0 (promoção a prazo 167), inclusão 3874, prestamista 158, 4 parcelas no recebimento Futuro com juros.', () => {
    
            prdPromoPrazoParcelaPrest()
            validarComSaldo()
            escolherProdutoPesquisa() ; ticketPromocao()
            clicarVoltagemProduto() //PRODUTO
            selecionarPrimeiraPromoProduto()
            escolherRecebPromoPrazoFuturoComJurosPrest()
            addProduto()
            validarModalServVinculado()
            clicarOKServVinculado() //SERVIÇOS
            tirarEntrega()
            avancarParaParcelas()
            cy.intercept('GET', '/images/icons/chain.svg').as('api_icons')
            cy.wait('@api_icons', { timeout: 40000 })
            clicarEditarParcelas()
            escolherQuatroParcelaPagamento()
            okSeguroPrestamista()
            ticketPrestamistaAdicionado() //Validando adição do prestamista
            avancarFinal()
            ticketPrestamistaPaginaFinal()
            clicarFinalizarPedido() //RESUMO
            validarPedidoGerado()
        })

        it('8. Ped venda: produto 1918 0 0 (promoção a prazo 167), inclusão 3876, prestamista 158, 4 parcelas no recebimento Futuro sem juros.', () => {
    
            prdPromoPrazoParcelaPrest()
            validarComSaldo()
            escolherProdutoPesquisa() ; ticketPromocao()
            clicarVoltagemProduto() //PRODUTO
            selecionarPrimeiraPromoProduto()
            escolherRecebPromoPrazoFuturoSemJurosPrest()
            addProduto()
            validarModalServVinculado()
            clicarOKServVinculado() //SERVIÇOS
            tirarEntrega()
            avancarParaParcelas()
            cy.intercept('GET', '/images/icons/chain.svg').as('api_icons')
            cy.wait('@api_icons', { timeout: 40000 })
            clicarEditarParcelas()
            escolherQuatroParcelaPagamento()
            okSeguroPrestamista()
            ticketPrestamistaAdicionado() //Validando adição do prestamista
            avancarFinal()
            ticketPrestamistaPaginaFinal()
            clicarFinalizarPedido() //RESUMO
            validarPedidoGerado()
        })

        it('9. Ped venda: produto 1918 0 0 (promoção a prazo 167), com garantia Não separa, inclusão 3876, prestamista 158, 4 parcelas no recebimento Futuro sem juros.', () => {
    
            prdPromoPrazoParcelaPrest()
            validarComSaldo()
            escolherProdutoPesquisa() ; ticketPromocao()
            clicarVoltagemProduto() //PRODUTO
            selecionarPrimeiraPromoProduto()
            escolherRecebPromoPrazoFuturoSemJurosPrest()
            addProduto()
            validarModalServVinculado()
            garantiaNaoSepara()
            clicarOKServVinculado() //SERVIÇOS
            tirarEntrega()
            avancarParaParcelas()
            cy.intercept('GET', '/images/icons/chain.svg').as('api_icons')
            cy.wait('@api_icons', { timeout: 40000 })
            clicarEditarParcelas()
            escolherQuatroParcelaPagamento()
            okSeguroPrestamista()
            ticketPrestamistaAdicionado() //Validando adição do prestamista
            avancarFinal()
            ticketPrestamistaPaginaFinal()
            clicarFinalizarPedido() //RESUMO
            validarPedidoGerado()
        })
    })

    context('Com entrega / Produtos com promoção - Prestamista com abatimento %', () => {

        it('10. Ped venda: produto 1919 0 0 (promoção a prazo 168), com garantia Não separa, inclusão 3876, prestamista 158, 4 parcelas no recebimento Futuro sem juros.', () => {
    
            prdSegPromoPrazoParcelaPrest()
            validarComSaldo()
            escolherProdutoPesquisa() ; ticketPromocao()
            clicarVoltagemProduto() //PRODUTO
            selecionarPrimeiraPromoProduto()
            escolherRecebPromoPrazoFuturoSemJurosPrest()
            addProduto()
            validarModalServVinculado()
            garantiaNaoSepara()
            clicarOKServVinculado() //SERVIÇOS
            validarServicosVinculados() ; validaAddGarantNaoSep()
            avancarParaTransportadora()
            avancarParcelasEntrega()
            cy.intercept('GET', '/images/icons/chain.svg').as('api_pagamentoPedido')
            cy.wait('@api_pagamentoPedido', { timeout: 40000 })
            inserirDataAmanha1Vencimento()
            cy.wait(4000)
            botaoGerarParcelasAlterVencimento()
            cy.contains('3876 - T.A. A Receber Futuro - para Prestamista sem juros').click()
            cy.intercept('/services/v3/pedido_forma_pagamento').as('api_pedido_forma_pagamento')
            cy.wait('@api_pedido_forma_pagamento', { timeout: 40000 })
            escolherUmaParcelaPagamento()
            okSeguroPrestamista()
            ticketPrestamistaAdicionado() //Validando adição do prestamista
            avancarFinal()
            ticketPrestamistaPaginaFinal()
            clicarFinalizarPedido() //RESUMO
            validarPedidoGerado()
        })

        it('11. Ped venda: produto 1919 0 0 (promoção a prazo 168), com garantia Não separa, inclusão 3874, prestamista 158, 4 parcelas no recebimento Futuro com juros.', () => {
    
            prdSegPromoPrazoParcelaPrest()
            validarComSaldo()
            escolherProdutoPesquisa() ; ticketPromocao()
            clicarVoltagemProduto() //PRODUTO
            selecionarPrimeiraPromoProduto()
            escolherRecebPromoPrazoFuturoComJurosPrest()
            addProduto()
            validarModalServVinculado()
            garantiaNaoSepara()
            clicarOKServVinculado() //SERVIÇOS
            validarServicosVinculados() ; validaAddGarantNaoSep()
            avancarParaTransportadora()
            avancarParcelasEntrega()
            cy.intercept('GET', '/images/icons/chain.svg').as('api_pagamentoPedido')
            cy.wait('@api_pagamentoPedido', { timeout: 40000 })
            //ticketPrestamistaAdicionado() //Validando adição do prestamista
            inserirDataAmanha1Vencimento()
            cy.wait(4000)
            botaoGerarParcelasAlterVencimento()
            cy.contains('3874 - T.A. A Receber Futuro - para Prestamista').click()
            cy.intercept('/services/v3/pedido_forma_pagamento').as('api_pedido_forma_pagamento')
            cy.wait('@api_pedido_forma_pagamento', { timeout: 40000 })
            escolherUmaParcelaPagamento()
            okSeguroPrestamista()
            ticketPrestamistaAdicionado() //Validando adição do prestamista
            avancarFinal()
            ticketPrestamistaPaginaFinal()
            clicarFinalizarPedido() //RESUMO
            validarPedidoGerado()
        })
        
        it('12. Ped venda: produto 1920 0 0 (promoção partida 169), com garantia Não separa, inclusão 3876, prestamista 158, 4 parcelas no recebimento Futuro com juros.', () => {
    
            prdPromoPartidaPrest()
            validarComSaldo()
            escolherProdutoPesquisa() ; ticketPromocao()
            clicarVoltagemProduto() //PRODUTO
            selecionarPrimeiraPromoProduto()
            escolherRecebPromoPartidaPresentePrest()
            addProduto()
            validarModalServVinculado()
            garantiaNaoSepara()
            clicarOKServVinculado() //SERVIÇOS
            validarServicosVinculados() ; validaAddGarantNaoSep()
            tirarEntrega()
            avancarParaParcelas()
            cy.intercept('GET', '/images/icons/chain.svg').as('api_icons')
            cy.wait('@api_icons', { timeout: 40000 })
            clicarEditarParcelas()
            escolherQuatroParcelaPagamento()
            okSeguroPrestamista()
            ticketPrestamistaAdicionado() //Validando adição do prestamista
            avancarFinal()
            ticketPrestamistaPaginaFinal()
            clicarFinalizarPedido() //RESUMO
            validarPedidoGerado()
        })
    })

    context('Sem entrega / Misto com e sem Promoção - Prestamista abatimento %', () => {

        it('13. Ped venda: produto 1918 0 0 (promo a prazo 167) e 1860 0 0 (sem promoção), inclusão 3874 (outro recebimento 3860), prestamista 158, 4 parcelas no recebimento Futuro com juros.', () => {
    
            prdPromoPrazoParcelaPrest()
            validarComSaldo()
            escolherProdutoPesquisa() ; ticketPromocao()
            clicarVoltagemProduto() //PRODUTO
            selecionarPrimeiraPromoProduto()
            escolherRecebPromoPrazoFuturoComJurosPrest()
            addProduto()
            validarModalServVinculado()
            clicarOKServVinculado() //SERVIÇOS
            tirarEntrega()
            produtoNormalPrimeiro()
            escolherProdutoPesquisa()
            clicarVoltagemProduto()
            addProduto()
            validarModalServVinculado()
            clicarOKServVinculado()
            tirarEntrega()
            avancarParaParcelas()
            cy.intercept('GET', '/images/icons/chain.svg').as('api_icons')
            cy.wait('@api_icons', { timeout: 40000 })
            clicarEditarParcelas()
            escolherQuatroParcelaPagamento()
            okSeguroPrestamista()
            ticketPrestamistaAdicionado() //Validando adição do prestamista
            inserirDataAmanha1Vencimento()
            botaoGerarParcelasAlterVencimento()
            escolherFormaPagamentoPrincipal()
            escolherUmaParcelaPagamento()
            avancarFinal()
            ticketPrestamistaPaginaFinal()
            clicarFinalizarPedido() //RESUMO
            validarPedidoGerado()
        })

        it('14. Ped venda: produto 1918 0 0 (promo a prazo 167) e 1860 0 0 (sem promoção), inclusão 3874 (outro recebimento 3874 agrupar), prestamista 158, 4 parcelas no recebimento Futuro com juros.', () => {
    
            prdPromoPrazoParcelaPrest()
            validarComSaldo()
            escolherProdutoPesquisa() ; ticketPromocao()
            clicarVoltagemProduto() //PRODUTO
            selecionarPrimeiraPromoProduto()
            escolherRecebPromoPrazoFuturoComJurosPrest()
            addProduto()
            validarModalServVinculado()
            clicarOKServVinculado() //SERVIÇOS
            tirarEntrega()
            produtoNormalPrimeiro()
            escolherProdutoPesquisa()
            clicarVoltagemProduto()
            addProduto()
            validarModalServVinculado()
            clicarOKServVinculado()
            tirarEntrega()
            avancarParaParcelas()
            cy.intercept('GET', '/images/icons/chain.svg').as('api_icons')
            cy.wait('@api_icons', { timeout: 40000 })
            clicarEditarParcelas()
            escolherQuatroParcelaPagamento()
            okSeguroPrestamista()
            ticketPrestamistaAdicionado() //Validando adição do prestamista
            inserirData31Dias1Vencimento()
            botaoGerarParcelasAlterVencimento()
            escolherRecebFuturoPrestamistaComJuros()
            cy.get('[style="position: relative"] > :nth-child(4) > div.ng-binding').click({force:true}) //escolher 4 parcelas
            agruparLancamentos()
            messPrestamistaRemovido()
            addSeguroPrestamista()
            ticketPrestAdicionadoRecebAgrupado()
            avancarFinal()
            ticketPrestamistaPaginaFinal()
            clicarFinalizarPedido() //RESUMO
            validarPedidoGerado()
        })

        it('15. Ped venda: produto 1918 0 0 (promo a prazo 167) e 1860 0 0 (sem promoção), inclusão 3876 (outro recebimento 3860), prestamista 158, 4 parcelas no recebimento Futuro sem juros.', () => {
    
            prdPromoPrazoParcelaPrest()
            validarComSaldo()
            escolherProdutoPesquisa() ; ticketPromocao()
            clicarVoltagemProduto() //PRODUTO
            selecionarPrimeiraPromoProduto()
            escolherRecebPromoPrazoFuturoSemJurosPrest()
            addProduto()
            validarModalServVinculado()
            clicarOKServVinculado() //SERVIÇOS
            tirarEntrega()
            produtoNormalPrimeiro()
            escolherProdutoPesquisa()
            clicarVoltagemProduto()
            addProduto()
            validarModalServVinculado()
            clicarOKServVinculado()
            tirarEntrega()
            avancarParaParcelas()
            cy.intercept('GET', '/images/icons/chain.svg').as('api_icons')
            cy.wait('@api_icons', { timeout: 40000 })
            clicarEditarParcelas()
            escolherQuatroParcelaPagamento()
            okSeguroPrestamista()
            ticketPrestamistaAdicionado() //Validando adição do prestamista
            inserirDataAmanha1Vencimento()
            botaoGerarParcelasAlterVencimento()
            escolherFormaPagamentoPrincipal()
            escolherUmaParcelaPagamento()
            avancarFinal()
            ticketPrestamistaPaginaFinal()
            clicarFinalizarPedido() //RESUMO
            validarPedidoGerado()
        })

        it('16. Ped venda: produto 1918 0 0 (promo a prazo 167) e 1860 0 0 (sem promoção), inclusão 3876 (outro recebimento 3876 agrupar), prestamista 158, 4 parcelas no recebimento Futuro sem juros.', () => {
    
            prdPromoPrazoParcelaPrest()
            validarComSaldo()
            escolherProdutoPesquisa() ; ticketPromocao()
            clicarVoltagemProduto() //PRODUTO
            selecionarPrimeiraPromoProduto()
            escolherRecebPromoPrazoFuturoSemJurosPrest()
            addProduto()
            validarModalServVinculado()
            clicarOKServVinculado() //SERVIÇOS
            tirarEntrega()
            produtoNormalPrimeiro()
            escolherProdutoPesquisa()
            clicarVoltagemProduto()
            addProduto()
            validarModalServVinculado()
            clicarOKServVinculado()
            tirarEntrega()
            avancarParaParcelas()
            cy.intercept('GET', '/images/icons/chain.svg').as('api_icons')
            cy.wait('@api_icons', { timeout: 40000 })
            clicarEditarParcelas()
            escolherQuatroParcelaPagamento()
            okSeguroPrestamista()
            ticketPrestamistaAdicionado() //Validando adição do prestamista
            inserirData31Dias1Vencimento()
            botaoGerarParcelasAlterVencimento()
            cy.intercept('POST', '/services/v3/pedido_forma_pagamento_lista').as('api_pedido_forma_pagamento_lista')
            cy.wait('@api_pedido_forma_pagamento_lista', { timeout: 40000 })
            escolherRecebFuturoPrestamistaSemJuros()
            cy.get('[style="position: relative"] > :nth-child(4) > div.ng-binding').click({force:true}) //escolher 4 parcelas
            agruparLancamentos()
            messPrestamistaRemovido()
            addSeguroPrestamista()
            ticketPrestAdicionadoRecebAgrupado()
            avancarFinal()
            ticketPrestamistaPaginaFinal()
            clicarFinalizarPedido() //RESUMO
            validarPedidoGerado()
        })

        it('17. Ped venda: produto 1921 0 0 (promo a prazo 170), inclusão 3874, prestamista 158, 4 parcelas no recebimento Futuro com juros.', () => {
    
            prdTerPromoPrazoParcelaPrest()
            validarComSaldo()
            escolherProdutoPesquisa() ; ticketPromocao()
            clicarVoltagemProduto() //PRODUTO
            selecionarPrimeiraPromoProduto()
            escolherRecebPromoPrazoFuturoComJurosPrest()
            addProduto()
            validarModalServVinculado()
            clicarOKServVinculado() //SERVIÇOS
            tirarEntrega()
            avancarParaParcelas()
            cy.intercept('GET', '/images/icons/chain.svg').as('api_icons')
            cy.wait('@api_icons', { timeout: 40000 })
            clicarEditarParcelas()
            escolherQuatroParcelaPagamento()
            okSeguroPrestamista()
            ticketPrestamistaAdicionado() //Validando adição do prestamista
            avancarFinal()
            ticketPrestamistaPaginaFinal()
            clicarFinalizarPedido() //RESUMO
            validarPedidoGerado()
        })
    })

    context('Com entrega / Misto com e sem Promoção - Prestamista abatimento %', () => {

        it('18. Ped venda: produto 1918 0 0 (promo a prazo 167) (com garantia não separa) e 1860 0 0 (sem promoção), inclusão 3874 (outro recebimento 3860), prestamista 158, 4 parcelas no recebimento Futuro com juros.', () => {
    
            prdPromoPrazoParcelaPrest()
            validarComSaldo()
            escolherProdutoPesquisa() ; ticketPromocao()
            clicarVoltagemProduto() //PRODUTO
            selecionarPrimeiraPromoProduto()
            escolherRecebPromoPrazoFuturoComJurosPrest()
            addProduto()
            validarModalServVinculado()
            garantiaNaoSepara()
            clicarOKServVinculado() //SERVIÇOS
            validarServicosVinculados() ; validaAddGarantNaoSep()
            produtoNormalPrimeiro()
            escolherProdutoPesquisa()
            clicarVoltagemProduto()
            addProduto()
            validarModalServVinculado()
            clicarOKServVinculado()
            avancarParaTransportadora()
            avancarParcelasEntrega()
            cy.intercept('GET', '/images/icons/chain.svg').as('api_icons')
            cy.wait('@api_icons', { timeout: 40000 })
            clicarEditarParcelas()
            escolherQuatroParcelaPagamento()
            okSeguroPrestamista()
            ticketPrestamistaAdicionado() //Validando adição do prestamista
            inserirDataAmanha1Vencimento()
            botaoGerarParcelasAlterVencimento()
            cy.intercept('POST', '/services/v3/pedido_forma_pagamento_lista').as('api_pedido_forma_pagamento_lista')
            cy.wait('@api_pedido_forma_pagamento_lista', { timeout: 40000 })
            escolherFormaPagamentoPrincipal()
            escolherUmaParcelaPagamento()
            avancarFinal()
            ticketPrestamistaPaginaFinal()
            clicarFinalizarPedido() //RESUMO
            validarPedidoGerado()
        })

        it('19. Ped venda: produto 1918 0 0 (promo a prazo 167) (com garantia não separa) e 1860 0 0 (sem promoção), inclusão 3874 (outro recebimento 3874 agrupar), prestamista 158, 4 parcelas no recebimento Futuro com juros.', () => {
    
            prdPromoPrazoParcelaPrest()
            validarComSaldo()
            escolherProdutoPesquisa() ; ticketPromocao()
            clicarVoltagemProduto() //PRODUTO
            selecionarPrimeiraPromoProduto()
            escolherRecebPromoPrazoFuturoComJurosPrest()
            addProduto()
            validarModalServVinculado()
            garantiaNaoSepara()
            clicarOKServVinculado() //SERVIÇOS
            validarServicosVinculados() ; validaAddGarantNaoSep()
            produtoNormalPrimeiro()
            escolherProdutoPesquisa()
            clicarVoltagemProduto()
            addProduto()
            validarModalServVinculado()
            clicarOKServVinculado()
            avancarParaTransportadora()
            avancarParcelasEntrega()
            cy.intercept('GET', '/images/icons/chain.svg').as('api_icons')
            cy.wait('@api_icons', { timeout: 40000 })
            // ticketPrestamistaAdicionado() //Validando adição do prestamista
            clicarEditarParcelas()
            escolherQuatroParcelaPagamento()
            okSeguroPrestamista()
            ticketPrestamistaAdicionado() //Validando adição do prestamista
            inserirData31Dias1Vencimento()
            botaoGerarParcelasAlterVencimento()
            cy.intercept('POST', '/services/v3/pedido_forma_pagamento_lista').as('api_pedido_forma_pagamento_lista')
            cy.wait('@api_pedido_forma_pagamento_lista', { timeout: 40000 })
            escolherRecebFuturoPrestamistaComJuros()
            cy.get('[style="position: relative"] > :nth-child(4) > div.ng-binding').click({force:true}) //escolher 4 parcelas
            agruparLancamentos()
            messPrestamistaRemovido()
            addSeguroPrestamista()
            ticketPrestAdicionadoRecebAgrupado()
            avancarFinal()
            ticketPrestamistaPaginaFinal()
            clicarFinalizarPedido() //RESUMO
            validarPedidoGerado()
        })

        it('20. Ped venda: produto 1918 0 0 (promo a prazo 167) (com garantia não separa) e 1860 0 0 (sem promoção), inclusão 3876 (outro recebimento 3860), prestamista 158, 4 parcelas no recebimento Futuro sem juros.', () => {
    
            prdPromoPrazoParcelaPrest()
            validarComSaldo()
            escolherProdutoPesquisa() ; ticketPromocao()
            clicarVoltagemProduto() //PRODUTO
            selecionarPrimeiraPromoProduto()
            escolherRecebPromoPrazoFuturoSemJurosPrest()
            addProduto()
            validarModalServVinculado()
            garantiaNaoSepara()
            clicarOKServVinculado() //SERVIÇOS
            validarServicosVinculados() ; validaAddGarantNaoSep()
            produtoNormalPrimeiro()
            escolherProdutoPesquisa()
            clicarVoltagemProduto()
            addProduto()
            validarModalServVinculado()
            clicarOKServVinculado()
            avancarParaTransportadora()
            avancarParcelasEntrega()
            cy.intercept('GET', '/images/icons/chain.svg').as('api_icons')
            cy.wait('@api_icons', { timeout: 40000 })
            clicarEditarParcelas()
            escolherQuatroParcelaPagamento()
            okSeguroPrestamista()
            ticketPrestamistaAdicionado() //Validando adição do prestamista
            inserirDataAmanha1Vencimento()
            botaoGerarParcelasAlterVencimento()
            cy.intercept('POST', '/services/v3/pedido_forma_pagamento_lista').as('api_pedido_forma_pagamento_lista')
            cy.wait('@api_pedido_forma_pagamento_lista', { timeout: 40000 })
            escolherFormaPagamentoPrincipal()
            escolherUmaParcelaPagamento()
            avancarFinal()
            ticketPrestamistaPaginaFinal()
            clicarFinalizarPedido() //RESUMO
            validarPedidoGerado()
        })

        it('21. Ped venda: produto 1918 0 0 (promo a prazo 167) (com garantia não separa) e 1860 0 0 (sem promoção), inclusão 3876 (outro recebimento 3876 agrupar), prestamista 158, 4 parcelas no recebimento Futuro sem juros.', () => {
    
            prdPromoPrazoParcelaPrest()
            validarComSaldo()
            escolherProdutoPesquisa() ; ticketPromocao()
            clicarVoltagemProduto() //PRODUTO
            selecionarPrimeiraPromoProduto()
            escolherRecebPromoPrazoFuturoSemJurosPrest()
            addProduto()
            validarModalServVinculado()
            garantiaNaoSepara()
            clicarOKServVinculado() //SERVIÇOS)
            validarServicosVinculados() ; validaAddGarantNaoSep()
            produtoNormalPrimeiro()
            escolherProdutoPesquisa()
            clicarVoltagemProduto()
            addProduto()
            validarModalServVinculado()
            clicarOKServVinculado()
            avancarParaTransportadora()
            avancarParcelasEntrega()
            cy.intercept('GET', '/images/icons/chain.svg').as('api_icons')
            cy.wait('@api_icons', { timeout: 40000 })
            // ticketPrestamistaAdicionado() //Validando adição do prestamista
            clicarEditarParcelas()
            escolherQuatroParcelaPagamento()
            okSeguroPrestamista()
            ticketPrestamistaAdicionado() //Validando adição do prestamista
            inserirData31Dias1Vencimento()
            botaoGerarParcelasAlterVencimento()
            cy.intercept('POST', '/services/v3/pedido_forma_pagamento_lista').as('api_pedido_forma_pagamento_lista')
            cy.wait('@api_pedido_forma_pagamento_lista', { timeout: 40000 })
            escolherRecebFuturoPrestamistaSemJuros()
            cy.get('[style="position: relative"] > :nth-child(4) > div.ng-binding').click({force:true}) //escolher 4 parcelas
            agruparLancamentos()
            messPrestamistaRemovido()
            addSeguroPrestamista()
            ticketPrestAdicionadoRecebAgrupado()
            avancarFinal()
            ticketPrestamistaPaginaFinal()
            clicarFinalizarPedido() //RESUMO
            validarPedidoGerado()
        })

        it('22. Ped venda: produto 1920 0 0 (promo a prazo 169) (com garantia não separa) e 1860 0 0 (sem promoção), inclusão 3875 (outro recebimento 3874), prestamista 158, 4 parcelas no recebimento Presente.', () => {
    
            prdPromoPartidaPrest()
            validarComSaldo()
            escolherProdutoPesquisa() ; ticketPromocao()
            clicarVoltagemProduto() //PRODUTO
            selecionarPrimeiraPromoProduto()
            escolherRecebPromoPartidaPresentePrest()
            addProduto()
            validarModalServVinculado()
            garantiaNaoSepara()
            clicarOKServVinculado() //SERVIÇOS
            validarServicosVinculados() ; validaAddGarantNaoSep()
            produtoNormalPrimeiro()
            escolherProdutoPesquisa()
            clicarVoltagemProduto()
            addProduto()
            validarModalServVinculado()
            garantiaNaoSepara()
            clicarOKServVinculado()
            avancarParaTransportadora()
            avancarParcelasEntrega()
            cy.intercept('GET', '/images/icons/chain.svg').as('api_icons')
            cy.wait('@api_icons', { timeout: 40000 })
            clicarEditarParcelas()
            escolherQuatroParcelaPagamento()
            okSeguroPrestamista()
            ticketPrestamistaAdicionado() //Validando adição do prestamista
            inserirDataAmanha1Vencimento()
            botaoGerarParcelasAlterVencimento()
            cy.intercept('POST', '/services/v3/pedido_forma_pagamento_lista').as('api_pedido_forma_pagamento_lista')
            cy.wait('@api_pedido_forma_pagamento_lista', { timeout: 40000 })
            escolherSegundaFormaPagamento()
            escolherUmaParcelaPagamento()
            avancarFinal()
            ticketPrestamistaPaginaFinal()
            clicarFinalizarPedido() //RESUMO
            validarPedidoGerado()
        })

        it('23. Ped venda: produto 1920 0 0 (promo a prazo 169) (com garantia não separa) e 1860 0 0 (sem promoção), inclusão 3875 (outro recebimento 3875 agrupar), prestamista 158, 4 parcelas no recebimento Presente.', () => {
    
            prdPromoPartidaPrest()
            validarComSaldo()
            escolherProdutoPesquisa() ; ticketPromocao()
            clicarVoltagemProduto() //PRODUTO
            selecionarPrimeiraPromoProduto()
            escolherRecebPromoPartidaPresentePrest()
            addProduto()
            validarModalServVinculado()
            garantiaNaoSepara()
            clicarOKServVinculado() //SERVIÇOS)
            validarServicosVinculados() ; validaAddGarantNaoSep()
            produtoNormalPrimeiro()
            escolherProdutoPesquisa()
            clicarVoltagemProduto()
            addProduto()
            validarModalServVinculado()
            garantiaNaoSepara()
            clicarOKServVinculado()
            avancarParaTransportadora()
            avancarParcelasEntrega()
            cy.intercept('GET', '/images/icons/chain.svg').as('api_icons')
            cy.wait('@api_icons', { timeout: 40000 })
            // ticketPrestamistaAdicionado() //Validando adição do prestamista
            clicarEditarParcelas()
            escolherQuatroParcelaPagamento()
            okSeguroPrestamista()
            ticketPrestamistaAdicionado() //Validando adição do prestamista
            inserirData31Dias1Vencimento()
            botaoGerarParcelasAlterVencimento()
            cy.intercept('POST', '/services/v3/pedido_forma_pagamento_lista').as('api_pedido_forma_pagamento_lista')
            cy.wait('@api_pedido_forma_pagamento_lista', { timeout: 40000 })
            escolherRecebPresentePrestamista()
            cy.get('[style="position: relative"] > :nth-child(4) > div.ng-binding').click({force:true}) //escolher 4 parcelas
            agruparLancamentos()
            messPrestamistaRemovido()
            addSeguroPrestamista()
            ticketPrestAdicionadoRecebAgrupado()
            avancarFinal()
            ticketPrestamistaPaginaFinal()
            clicarFinalizarPedido() //RESUMO
            validarPedidoGerado()
        })
    })
})