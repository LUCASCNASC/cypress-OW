import { saldodisponivel, clienteComRota, selecionarPrimeiraPromoProduto, clicarEditarParcelas, ticketPrestamistaAdicionado,
         escolherProdutoPesquisa, clicarVoltagemProduto, addProduto } from '../../../support/para_pedidos/gerais_pedidos.js';
import { produtoNormalPrimeiro, produtoNormalSegundo } from '../../../support/para_pedidos_NFe/NFe_prd_normal.js';
import { prdPromoPrazoParcelaPrest, escolherRecebPromoPrazoFuturoComJurosPrest, escolherRecebPromoPrazoFuturoSemJurosPrest, 
         prdSegPromoPrazoParcelaPrest, prdPromoPartidaPrest, escolherRecebPromoPartidaPresentePrest, botaoGerarParcAlterVencPrest } from '../../../support/para_pedidos_NFe/NFe_prd_promo_prestamista.js';
import { garantiaNaoSepara, garantiaSeparaMesmoProcesso, garantiaSeparaTituloProcessoDiferente, modalServicosVinculados, okServicosVinculados, 
         okSeguroPrestamista } from '../../../support/para_pedidos/apenas_servicos.js';
import { botaoGerarParcelas, escolherFormaPagamentoPrincipal, carregandoFormaPagamento, escolherDuasParcelaPagamento,
         escolherRecebFuturoPrestamistaComJuros, escolherQuatroParcelaPagamento, escolherRecebPresentePrestamista, 
         escolherRecebFuturoPrestamistaSemJuros, inserirDataAmanha1Vencimento, botaoGerarParcelasAlterVencimento, 
         escolherRecebAVista,
         escolherUmaParcelaPagamento} from '../../../support/para_pedidos/apenas_formas_pagamento.js';
import { botaoFinalizarPedido, pedidoGerado } from '../../../support/para_pedidos/apenas_finalizar_pedido.js';
import { processoVendaNFe } from '../../../support/para_pedidos/apenas_processos_venda.js';
import { avancarParaParcelas, avancarFinal, avancarParaTransportadora, avancarParcelasEntrega } from '../../../support/para_pedidos/apenas_botoes_avancar.js';
import { escolherTransportadora, tirarEntrega, tirarEntregaSegundo } from '../../../support/para_pedidos/apenas_entrega.js';

describe('Gerar pedidos com serviço Prestamista', () => {

    beforeEach(() => {
        cy.visit('/')
        cy.clearAllSessionStorage()
        cy.login()
        cy.urlAposLogin()
        cy.tituloPagina() 
        processoVendaNFe()
        clienteComRota()
        cy.wait(500)
    })   

    context('Sem entrega / Produtos sem promoção - Prestamista com abatimento %', () => {

        it.skip('1. Ped venda: produtos 1860 0 0 e 1870 0 0, processo de inclusão 3874, prestamista 158, 4 parcelas no recebimento Futuro com juros.', () => {
    
            produtoNormalPrimeiro()
            saldodisponivel()
            escolherProdutoPesquisa()
            clicarVoltagemProduto() //PRODUTO
            addProduto()
            modalServicosVinculados()
            okServicosVinculados() //SERVIÇOS
            tirarEntrega()
            produtoNormalSegundo() //SEGUNDO PRODUTO
            saldodisponivel()
            escolherProdutoPesquisa()
            clicarVoltagemProduto()
            addProduto()
            modalServicosVinculados() //SERVICOS - SEGUNDO PRODUTO
            okServicosVinculados()
            tirarEntregaSegundo()
            avancarParaParcelas()
            botaoGerarParcelas() //GERAR PARCELAS
            carregandoFormaPagamento()
            escolherRecebFuturoPrestamistaComJuros()
            escolherQuatroParcelaPagamento()
            okSeguroPrestamista()
            //ticketPrestamistaAdicionado() //Validando adição do prestamista
            avancarFinal()
            botaoFinalizarPedido() //RESUMO
            pedidoGerado()
        })

        it.skip('2. Ped venda: produtos 1860 0 0 e 1870 0 0, processo de inclusão 3875, prestamista 158, 4 parcelas no recebimento Presente.', () => {
    
            produtoNormalPrimeiro()
            saldodisponivel()
            escolherProdutoPesquisa()
            clicarVoltagemProduto() //PRODUTO
            addProduto()
            modalServicosVinculados()
            okServicosVinculados() //SERVIÇOS
            tirarEntrega()
            produtoNormalSegundo() //SEGUNDO PRODUTO
            saldodisponivel()
            escolherProdutoPesquisa()
            clicarVoltagemProduto()
            addProduto()
            modalServicosVinculados() //SERVICOS - SEGUNDO PRODUTO
            okServicosVinculados()
            tirarEntregaSegundo()
            avancarParaParcelas()
            botaoGerarParcelas() //GERAR PARCELAS
            carregandoFormaPagamento()
            escolherRecebPresentePrestamista()
            escolherQuatroParcelaPagamento()
            okSeguroPrestamista()
            //ticketPrestamistaAdicionado() //Validando adição do prestamista
            avancarFinal()
            botaoFinalizarPedido() //RESUMO
            pedidoGerado()
        })
    })

    context('Com entrega / Produtos sem promoção - Prestamista com abatimento %', () => {

        it.skip('3. Ped venda: produtos 1860 0 0 e 1870 0 0, processo de inclusão 3876, prestamista 158, 4 parcelas no recebimento Futuro sem juros.', () => {
    
            produtoNormalPrimeiro()
            saldodisponivel()
            escolherProdutoPesquisa()
            clicarVoltagemProduto() //PRODUTO
            addProduto()
            modalServicosVinculados()
            okServicosVinculados() //SERVIÇOS
            produtoNormalSegundo() //SEGUNDO PRODUTO
            saldodisponivel()
            escolherProdutoPesquisa()
            clicarVoltagemProduto()
            addProduto()
            modalServicosVinculados() //SERVICOS - SEGUNDO PRODUTO
            okServicosVinculados()
            avancarParaTransportadora()
            avancarParcelasEntrega()
            botaoGerarParcelas() //GERAR PARCELAS
            carregandoFormaPagamento()
            escolherRecebFuturoPrestamistaSemJuros()
            escolherQuatroParcelaPagamento()
            okSeguroPrestamista()
            //ticketPrestamistaAdicionado() //Validando adição do prestamista
            avancarFinal()
            botaoFinalizarPedido() //RESUMO
            pedidoGerado()
        })

        it.skip('4. Ped venda: produtos 1860 0 0 (com garantia não separa) e 1870 0 0, processo de inclusão 3874, prestamista 158, 4 parcelas no recebimento Futuro com juros.', () => {
    
            produtoNormalPrimeiro()
            saldodisponivel()
            escolherProdutoPesquisa()
            clicarVoltagemProduto() //PRODUTO
            addProduto()
            modalServicosVinculados()
            garantiaNaoSepara()
            okServicosVinculados() //SERVIÇOS
            produtoNormalSegundo() //SEGUNDO PRODUTO
            saldodisponivel()
            escolherProdutoPesquisa()
            clicarVoltagemProduto()
            addProduto()
            modalServicosVinculados() //SERVICOS - SEGUNDO PRODUTO
            okServicosVinculados()
            avancarParaTransportadora()
            avancarParcelasEntrega()
            botaoGerarParcelas() //GERAR PARCELAS
            carregandoFormaPagamento()
            escolherRecebFuturoPrestamistaComJuros()
            escolherQuatroParcelaPagamento()
            okSeguroPrestamista()
            //ticketPrestamistaAdicionado() //Validando adição do prestamista
            avancarFinal()
            botaoFinalizarPedido() //RESUMO
            pedidoGerado()
        })

        it.skip('5. Ped venda: produtos 1860 0 0 e 1870 0 0, processo de inclusão 3876, prestamista 158, 4 parcelas no recebimento Futuro sem juros.', () => {
    
            produtoNormalPrimeiro()
            saldodisponivel()
            escolherProdutoPesquisa()
            clicarVoltagemProduto() //PRODUTO
            addProduto()
            modalServicosVinculados()
            garantiaNaoSepara()
            okServicosVinculados() //SERVIÇOS
            produtoNormalSegundo() //SEGUNDO PRODUTO
            saldodisponivel()
            escolherProdutoPesquisa()
            clicarVoltagemProduto()
            addProduto()
            modalServicosVinculados() //SERVICOS - SEGUNDO PRODUTO
            okServicosVinculados()
            avancarParaTransportadora()
            avancarParcelasEntrega()
            botaoGerarParcelas() //GERAR PARCELAS
            carregandoFormaPagamento()
            escolherRecebFuturoPrestamistaSemJuros()
            escolherQuatroParcelaPagamento()
            okSeguroPrestamista()
            //ticketPrestamistaAdicionado() //Validando adição do prestamista
            avancarFinal()
            botaoFinalizarPedido() //RESUMO
            pedidoGerado()
        })

        it.skip('6. Ped venda: produtos 1860 0 0 e 1870 0 0, processo de inclusão 3875, prestamista 158, 4 parcelas no recebimento Presente sem juros.', () => {
    
            produtoNormalPrimeiro()
            saldodisponivel()
            escolherProdutoPesquisa()
            clicarVoltagemProduto() //PRODUTO
            addProduto()
            modalServicosVinculados()
            garantiaNaoSepara()
            okServicosVinculados() //SERVIÇOS
            produtoNormalSegundo() //SEGUNDO PRODUTO
            saldodisponivel()
            escolherProdutoPesquisa()
            clicarVoltagemProduto()
            addProduto()
            modalServicosVinculados() //SERVICOS - SEGUNDO PRODUTO
            okServicosVinculados()
            avancarParaTransportadora()
            avancarParcelasEntrega()
            botaoGerarParcelas() //GERAR PARCELAS
            carregandoFormaPagamento()
            escolherRecebPresentePrestamista()
            escolherQuatroParcelaPagamento()
            okSeguroPrestamista()
            //ticketPrestamistaAdicionado() //Validando adição do prestamista
            avancarFinal()
            botaoFinalizarPedido() //RESUMO
            pedidoGerado()
        })
    })

    context('Sem entrega / Produtos com promoção - Prestamista com abatimento %', () => {

        it.skip('7. Ped venda: produto 1918 0 0 (promoção a prazo 167), processo de inclusão 3874, prestamista 158, 4 parcelas no recebimento Futuro com juros.', () => {
    
            prdPromoPrazoParcelaPrest()
            saldodisponivel()
            escolherProdutoPesquisa()
            clicarVoltagemProduto() //PRODUTO
            selecionarPrimeiraPromoProduto()
            escolherRecebPromoPrazoFuturoComJurosPrest()
            addProduto()
            modalServicosVinculados()
            okServicosVinculados() //SERVIÇOS
            tirarEntrega()
            avancarParaParcelas()
            cy.wait(2000)
            clicarEditarParcelas()
            escolherQuatroParcelaPagamento()
            okSeguroPrestamista()
            ticketPrestamistaAdicionado() //Validando adição do prestamista
            avancarFinal()
            botaoFinalizarPedido() //RESUMO
            pedidoGerado()
        })

        it.skip('8. Ped venda: produto 1918 0 0 (promoção a prazo 167), processo de inclusão 3876, prestamista 158, 4 parcelas no recebimento Futuro sem juros.', () => {
    
            prdPromoPrazoParcelaPrest()
            saldodisponivel()
            escolherProdutoPesquisa()
            clicarVoltagemProduto() //PRODUTO
            selecionarPrimeiraPromoProduto()
            escolherRecebPromoPrazoFuturoSemJurosPrest()
            addProduto()
            modalServicosVinculados()
            okServicosVinculados() //SERVIÇOS
            tirarEntrega()
            avancarParaParcelas()
            cy.wait(2000)
            // clicarEditarParcelas()
            // escolherQuatroParcelaPagamento()
            // okSeguroPrestamista()
            // ticketPrestamistaAdicionado() //Validando adição do prestamista
            // avancarFinal()
            // botaoFinalizarPedido() //RESUMO
            // pedidoGerado()
        })

        it.skip('9. Ped venda: produto 1918 0 0 (promoção a prazo 167), com garantia Não separa, processo de inclusão 3876, prestamista 158, 4 parcelas no recebimento Futuro sem juros.', () => {
    
            prdPromoPrazoParcelaPrest()
            saldodisponivel()
            escolherProdutoPesquisa()
            clicarVoltagemProduto() //PRODUTO
            selecionarPrimeiraPromoProduto()
            escolherRecebPromoPrazoFuturoComJurosPrest()
            addProduto()
            modalServicosVinculados()
            garantiaNaoSepara()
            okServicosVinculados() //SERVIÇOS
            tirarEntrega()
            avancarParaParcelas()
            cy.wait(2000)
            // clicarEditarParcelas()
            // escolherQuatroParcelaPagamento()
            // okSeguroPrestamista()
            // ticketPrestamistaAdicionado() //Validando adição do prestamista
            // avancarFinal()
            // botaoFinalizarPedido() //RESUMO
            // pedidoGerado()
        })
    })

    context('Com entrega / Produtos com promoção - Prestamista com abatimento %', () => {

        it.skip('10. Ped venda: produto 1919 0 0 (promoção a prazo 168), com garantia Não separa, processo de inclusão 3876, prestamista 158, 4 parcelas no recebimento Futuro sem juros.', () => {
    
            prdSegPromoPrazoParcelaPrest()
            saldodisponivel()
            escolherProdutoPesquisa()
            clicarVoltagemProduto() //PRODUTO
            selecionarPrimeiraPromoProduto()
            escolherRecebPromoPrazoFuturoSemJurosPrest()
            addProduto()
            modalServicosVinculados()
            garantiaNaoSepara()
            okServicosVinculados() //SERVIÇOS
            avancarParaTransportadora()
            avancarParcelasEntrega()
            cy.intercept('GET', '/images/icons/chain.svg').as('api_pagamentoPedido')
            cy.wait('@api_pagamentoPedido', { timeout: 40000 })
            //ticketPrestamistaAdicionado() //Validando adição do prestamista
            inserirDataAmanha1Vencimento()
            cy.wait(4000)
            botaoGerarParcAlterVencPrest()
            cy.contains('3876 - T.A. A Receber Futuro - para Prestamista sem juros').click()
            cy.intercept('/services/v3/pedido_forma_pagamento').as('api_pedido_forma_pagamento')
            cy.wait('@api_pedido_forma_pagamento', { timeout: 40000 })
            escolherUmaParcelaPagamento()
            okSeguroPrestamista()
            // ticketPrestamistaAdicionado() //Validando adição do prestamista
            // avancarFinal()
            // botaoFinalizarPedido() //RESUMO
            // pedidoGerado()
        })

        it.skip('11. Ped venda: produto 1919 0 0 (promoção a prazo 168), com garantia Não separa, processo de inclusão 3874, prestamista 158, 4 parcelas no recebimento Futuro com juros.', () => {
    
            prdSegPromoPrazoParcelaPrest()
            saldodisponivel()
            escolherProdutoPesquisa()
            clicarVoltagemProduto() //PRODUTO
            selecionarPrimeiraPromoProduto()
            escolherRecebPromoPrazoFuturoComJurosPrest()
            addProduto()
            modalServicosVinculados()
            garantiaNaoSepara()
            okServicosVinculados() //SERVIÇOS
            avancarParaTransportadora()
            avancarParcelasEntrega()
            cy.intercept('GET', '/images/icons/chain.svg').as('api_pagamentoPedido')
            cy.wait('@api_pagamentoPedido', { timeout: 40000 })
            //ticketPrestamistaAdicionado() //Validando adição do prestamista
            inserirDataAmanha1Vencimento()
            cy.wait(4000)
            botaoGerarParcAlterVencPrest()
            cy.contains('3874 - T.A. A Receber Futuro - para Prestamista').click()
            cy.intercept('/services/v3/pedido_forma_pagamento').as('api_pedido_forma_pagamento')
            cy.wait('@api_pedido_forma_pagamento', { timeout: 40000 })
            escolherUmaParcelaPagamento()
            okSeguroPrestamista()
            // ticketPrestamistaAdicionado() //Validando adição do prestamista
            // avancarFinal()
            // botaoFinalizarPedido() //RESUMO
            // pedidoGerado()
        })
        
        it.skip('12. Ped venda: produto 1920 0 0 (promoção partida 169), com garantia Não separa, processo de inclusão 3876, prestamista 158, 4 parcelas no recebimento Futuro com juros.', () => {
    
            prdPromoPartidaPrest()
            saldodisponivel()
            escolherProdutoPesquisa()
            clicarVoltagemProduto() //PRODUTO
            selecionarPrimeiraPromoProduto()
            escolherRecebPromoPartidaPresentePrest()
            addProduto()
            modalServicosVinculados()
            garantiaNaoSepara()
            okServicosVinculados() //SERVIÇOS
            tirarEntrega()
            cy.intercept('GET', '/images/icons/chain.svg').as('api_pagamentoPedido')
            avancarParaParcelas()
            cy.wait('@api_pagamentoPedido', { timeout: 40000 })
            //ticketPrestamistaAdicionado() //Validando adição do prestamista
            // clicarEditarParcelas()
            // escolherQuatroParcelaPagamento()
            // okSeguroPrestamista()
            // ticketPrestamistaAdicionado() //Validando adição do prestamista
            // avancarFinal()
            // botaoFinalizarPedido() //RESUMO
            // pedidoGerado()
        })
    })
})