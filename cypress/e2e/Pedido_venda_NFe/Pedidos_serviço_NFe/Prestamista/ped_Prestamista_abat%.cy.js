import { ProcessoVenda } from '../../../../../pages/para_pedidos/processos/processo_venda.js'
import { EscolherCliente } from '../../../../../pages/para_pedidos/cliente/cliente.js'
import { ValidarSaldo } from '../../../../../pages/para_pedidos/saldo/validar_saldo.js'
import { Produto } from '../../../../../pages/produtos/prd_normal.js'
import { Servico } from '../../../../../pages/para_pedidos/servicos/valida_servicos_adicionados.js'
import { AvancarNormal } from '../../../../../pages/para_pedidos/botoes/avancar/avancar_normal.js'
import { FinalizarPed } from '../../../../../pages/para_pedidos/finalizar_pedido.js'
import { TirarEntrega } from '../../../../../pages/para_pedidos/entrega/tirar_entrega.js'
import { GeralPagamento } from '../../../../pages/para_pedidos/pagamento/geral_pagamento.js'
import { EscolherParcelaReceb } from '../../../../pages/para_pedidos/pagamento/parcelas.js'
import { AgruparReceb } from '../../../../pages/para_pedidos/pagamento/agrupar_recebimento.js'
import { Recebimento } from '../../../../../pages/para_pedidos/processos/processo_recebimento.js'
import { RecebimentoPromo } from '../../../../../pages/para_pedidos/processos/processo_recebimento_promo.js'
import { ValidarServico } from '../../../../../pages/para_pedidos/servicos/valida_servicos_adicionados.js'
import { Promocao } from '../../../../../pages/para_pedidos/promocao/promocao.js'
import { TicketPrestamista } from '../../../../../pages/para_pedidos/validar_tela/prestamista.js'


describe('Gerar pedidos com serviço Prestamista Abatimento % (158)', () => {

    beforeEach(() => {
        cy.visit('/')
        cy.clearAllSessionStorage()
        cy.login()
        cy.urlAposLogin()
        cy.tituloPagina() 
        ProcessoVenda.NFe()
        EscolherCliente.withRoute()
    })   

    context('Sem entrega / Produtos sem promoção - Prestamista com abatimento %', () => {

        it('1. Ped venda: produtos 1860 0 0 e 1870 0 0, inclusão 3874, prestamista 158, 4 parcelas no recebimento Futuro com juros.', () => {
    
            Produto.fisrt() //PRODUTO
            ValidarSaldo.withBalance()
            cy.selectProductSearch()
            cy.clickVoltageProduct()
            cy.clickAddProduct()
            Servico.validateModalServLinked()
            Servico.clickOKServiceLinked() //SERVIÇOS
            TirarEntrega.freightFirst()
            Produto.second() //PRODUTO
            ValidarSaldo.withBalance()
            cy.selectProductSearch()
            cy.clickVoltageProduct()
            cy.clickAddProduct()
            Servico.validateModalServLinked() //SERVICOS - SEGUNDO PRODUTO
            Servico.clickOKServiceLinked()
            TirarEntrega.freightSecond()
            AvancarNormal.toInstallments()
            GeralPagamento.clickGenerateInstallments() //GERAR PARCELAS
            GeralPagamento.loadingFormPayment()
            Recebimento.futMoneyWithFees()
            EscolherParcelaReceb.for()
            ValidarServico.okInsurancePrest()
            TicketPrestamista.adicionado() //Validando adição do prestamista
            AvancarNormal.final()
            TicketPrestamista.paginaFinal()
            FinalizarPed.clicarFinalizarPed() //RESUMO
            FinalizarPed.validarPedGerado()
        })

        it('2. Ped venda: produtos 1860 0 0 e 1870 0 0, inclusão 3875, prestamista 158, 4 parcelas no recebimento Presente.', () => {
    
            Produto.fisrt() //PRODUTO
            ValidarSaldo.withBalance()
            cy.selectProductSearch()
            cy.clickVoltageProduct()
            cy.clickAddProduct()
            Servico.validateModalServLinked() //SERVICOS
            Servico.clickOKServiceLinked()
            TirarEntrega.freightFirst()
            Produto.second() //PRODUTO
            ValidarSaldo.withBalance()
            cy.selectProductSearch()
            cy.clickVoltageProduct()
            cy.clickAddProduct()
            Servico.validateModalServLinked() //SERVICOS
            Servico.clickOKServiceLinked()
            TirarEntrega.freightSecond()
            AvancarNormal.toInstallments()
            GeralPagamento.clickGenerateInstallments() //GERAR PARCELAS
            GeralPagamento.loadingFormPayment()
            Recebimento.presentMoney()
            EscolherParcelaReceb.for()
            ValidarServico.okInsurancePrest()
            TicketPrestamista.adicionado() //Validando adição do prestamista
            AvancarNormal.final()
            TicketPrestamista.paginaFinal()
            FinalizarPed.clicarFinalizarPed() //RESUMO
            FinalizarPed.validarPedGerado()
        })
    })

    context('Com entrega / Produtos sem promoção - Prestamista com abatimento %', () => {

        it('3. Ped venda: produtos 1860 0 0 e 1870 0 0, inclusão 3876, prestamista 158, 4 parcelas no recebimento Futuro sem juros.', () => {
    
            Produto.fisrt() //PRODUTO
            ValidarSaldo.withBalance()
            cy.selectProductSearch()
            cy.clickVoltageProduct()
            cy.clickAddProduct()
            Servico.validateModalServLinked() //SERVICOS
            Servico.clickOKServiceLinked()
            Produto.second() //PRODUTO
            ValidarSaldo.withBalance()
            cy.selectProductSearch()
            cy.clickVoltageProduct()
            cy.clickAddProduct()
            Servico.validateModalServLinked() //SERVICOS
            Servico.clickOKServiceLinked()
            AvancarNormal.toTransporter()
            AvancarNormal.toInstallments()
            GeralPagamento.clickGenerateInstallments() //GERAR PARCELAS
            GeralPagamento.loadingFormPayment()
            Recebimento.futMoneyWithoutFees()
            EscolherParcelaReceb.for()
            ValidarServico.okInsurancePrest()
            TicketPrestamista.adicionado() //Validando adição do prestamista
            AvancarNormal.final()
            TicketPrestamista.paginaFinal()
            FinalizarPed.clicarFinalizarPed() //RESUMO
            FinalizarPed.validarPedGerado()
        })

        it('4. Ped venda: produtos 1860 0 0 (com garantia não separa) e 1870 0 0, inclusão 3874, prestamista 158, 4 parcelas no recebimento Futuro com juros.', () => {
    
            Produto.fisrt() //PRODUTO
            ValidarSaldo.withBalance()
            cy.selectProductSearch()
            cy.clickVoltageProduct()
            cy.clickAddProduct()
            Servico.validateModalServLinked()
            ValidarServico.garantiaNaoSep()
            Servico.clickOKServiceLinked() //SERVIÇOS
            ValidarServico.servVinc() ; ValidarServico.garantiaSepMesmoProc()
            Produto.second() //PRODUTO
            ValidarSaldo.withBalance()
            cy.selectProductSearch()
            cy.clickVoltageProduct()
            cy.clickAddProduct()
            Servico.validateModalServLinked() //SERVICOS
            Servico.clickOKServiceLinked()
            AvancarNormal.toTransporter()
            AvancarNormal.toInstallments()
            GeralPagamento.clickGenerateInstallments() //GERAR PARCELAS
            GeralPagamento.loadingFormPayment()
            Recebimento.futMoneyWithFees()
            EscolherParcelaReceb.for()
            ValidarServico.okInsurancePrest()
            TicketPrestamista.adicionado() //Validando adição do prestamista
            AvancarNormal.final()
            TicketPrestamista.paginaFinal()
            FinalizarPed.clicarFinalizarPed() //RESUMO
            FinalizarPed.validarPedGerado()
        })

        it('5. Ped venda: produtos 1860 0 0 (com garantia não separa) e 1870 0 0, inclusão 3876, prestamista 158, 4 parcelas no recebimento Futuro sem juros.', () => {

            Produto.fisrt() //PRODUTO
            ValidarSaldo.withBalance()
            cy.selectProductSearch()
            cy.clickVoltageProduct()
            cy.clickAddProduct()
            Servico.validateModalServLinked()
            ValidarServico.garantiaNaoSep()
            Servico.clickOKServiceLinked() //SERVIÇOS
            ValidarServico.servVinc() ; ValidarServico.garantiaSepMesmoProc()
            Produto.second() //PRODUTO
            ValidarSaldo.withBalance()
            cy.selectProductSearch()
            cy.clickVoltageProduct()
            cy.clickAddProduct()
            Servico.validateModalServLinked() //SERVICOS - SEGUNDO PRODUTO
            Servico.clickOKServiceLinked()
            AvancarNormal.toTransporter()
            AvancarNormal.toInstallments()
            GeralPagamento.clickGenerateInstallments() //GERAR PARCELAS
            GeralPagamento.loadingFormPayment()
            Recebimento.futMoneyWithoutFees()
            EscolherParcelaReceb.for()
            ValidarServico.okInsurancePrest()
            TicketPrestamista.adicionado() //Validando adição do prestamista
            AvancarNormal.final()
            TicketPrestamista.paginaFinal()
            FinalizarPed.clicarFinalizarPed() //RESUMO
            FinalizarPed.validarPedGerado()
        })

        it('6. Ped venda: produtos 1860 0 0 (com garantia não separa) e 1870 0 0, inclusão 3875, prestamista 158, 4 parcelas no recebimento Presente sem juros.', () => {
    
            Produto.fisrt() //PRODUTO
            ValidarSaldo.withBalance()
            cy.selectProductSearch()
            cy.clickVoltageProduct()
            cy.clickAddProduct()
            Servico.validateModalServLinked()
            ValidarServico.garantiaNaoSep()
            Servico.clickOKServiceLinked() //SERVIÇOS
            ValidarServico.servVinc() ; ValidarServico.garantiaSepMesmoProc()
            Produto.second() //PRODUTO
            ValidarSaldo.withBalance()
            cy.selectProductSearch()
            cy.clickVoltageProduct()
            cy.clickAddProduct()
            Servico.validateModalServLinked() //SERVICOS - SEGUNDO PRODUTO
            Servico.clickOKServiceLinked()
            AvancarNormal.toTransporter()
            AvancarNormal.toInstallments()
            GeralPagamento.clickGenerateInstallments() //GERAR PARCELAS
            GeralPagamento.loadingFormPayment()
            Recebimento.presentMoney()
            EscolherParcelaReceb.for()
            ValidarServico.okInsurancePrest()
            TicketPrestamista.adicionado() //Validando adição do prestamista
            AvancarNormal.final()
            TicketPrestamista.paginaFinal()
            FinalizarPed.clicarFinalizarPed() //RESUMO
            FinalizarPed.validarPedGerado()
        })
    })

    context('Sem entrega / Produtos com promoção - Prestamista com abatimento %', () => {

        it('7. Ped venda: produto 1918 0 0 (promoção a prazo 167), inclusão 3874, prestamista 158, 4 parcelas no recebimento Futuro com juros.', () => {
    
            Produto.termInstallmentPrest() //PRODUTO
            ValidarSaldo.withBalance()
            cy.clickVoltageProduct()
            cy.clickAddProduc()
            Promocao.selectFirstPromoProduct()
            RecebimentoPromo.termFutWithFeesPrest()
            cy.clickAddProduc()
            Servico.validateModalServLinked()
            Servico.clickOKServiceLinked() //SERVIÇOS
            TirarEntrega.freightFirst()
            AvancarNormal.toInstallments()
            cy.intercept('GET', '/images/icons/chain.svg').as('api_icons')
            cy.wait('@api_icons', { timeout: 40000 })
            GeralPedido.clicarEditarParcelas()
            EscolherParcelaReceb.for()
            ValidarServico.okInsurancePrest()
            TicketPrestamista.adicionado() //Validando adição do prestamista
            AvancarNormal.final()
            TicketPrestamista.paginaFinal()
            FinalizarPed.clicarFinalizarPed() //RESUMO
            FinalizarPed.validarPedGerado()
        })

        it('8. Ped venda: produto 1918 0 0 (promoção a prazo 167), inclusão 3876, prestamista 158, 4 parcelas no recebimento Futuro sem juros.', () => {
    
            Produto.termInstallmentPrest() //PRODUTO
            ValidarSaldo.withBalance()
            cy.clickVoltageProduct()
            cy.clickAddProduc()
            Promocao.selectFirstPromoProduct()
            RecebimentoPromo.termFutWithoutFeesPrest()
            cy.clickAddProduc()
            Servico.validateModalServLinked()
            Servico.clickOKServiceLinked() //SERVIÇOS
            TirarEntrega.freightFirst()
            AvancarNormal.toInstallments()
            cy.intercept('GET', '/images/icons/chain.svg').as('api_icons')
            cy.wait('@api_icons', { timeout: 40000 })
            GeralPedido.clicarEditarParcelas()
            EscolherParcelaReceb.for()
            ValidarServico.okInsurancePrest()
            TicketPrestamista.adicionado() //Validando adição do prestamista
            AvancarNormal.final()
            TicketPrestamista.paginaFinal()
            FinalizarPed.clicarFinalizarPed() //RESUMO
            FinalizarPed.validarPedGerado()
        })

        it('9. Ped venda: produto 1918 0 0 (promoção a prazo 167), com garantia Não separa, inclusão 3876, prestamista 158, 4 parcelas no recebimento Futuro sem juros.', () => {
    
            Produto.termInstallmentPrest() //PRODUTO
            ValidarSaldo.withBalance()
            cy.clickVoltageProduct()
            cy.clickAddProduc()
            Promocao.selectFirstPromoProduct()
            RecebimentoPromo.termFutWithoutFeesPrest()
            cy.clickAddProduc()
            Servico.validateModalServLinked()
            ValidarServico.garantiaNaoSep()
            Servico.clickOKServiceLinked() //SERVIÇOS
            TirarEntrega.freightFirst()
            AvancarNormal.toInstallments()
            cy.intercept('GET', '/images/icons/chain.svg').as('api_icons')
            cy.wait('@api_icons', { timeout: 40000 })
            GeralPedido.clicarEditarParcelas()
            EscolherParcelaReceb.for()
            ValidarServico.okInsurancePrest()
            TicketPrestamista.adicionado() //Validando adição do prestamista
            AvancarNormal.final()
            TicketPrestamista.paginaFinal()
            FinalizarPed.clicarFinalizarPed() //RESUMO
            FinalizarPed.validarPedGerado()
        })
    })

    context('Com entrega / Produtos com promoção - Prestamista com abatimento %', () => {

        it('10. Ped venda: produto 1919 0 0 (promoção a prazo 168), com garantia Não separa, inclusão 3876, prestamista 158, 4 parcelas no recebimento Futuro sem juros.', () => {

            Produto.termInstallmentPrest() //PRODUTO
            ValidarSaldo.withBalance()
            cy.clickVoltageProduct()
            cy.clickAddProduc()
            Promocao.selectFirstPromoProduct()
            RecebimentoPromo.termFutWithoutFeesPrest()
            cy.clickAddProduc()
            Servico.validateModalServLinked()
            ValidarServico.garantiaNaoSep()
            Servico.clickOKServiceLinked() //SERVIÇOS
            ValidarServico.servVinc() ; ValidarServico.addGarantNaoSep()
            AvancarNormal.toTransporter()
            AvancarNormal.toInstallments()
            cy.intercept('GET', '/images/icons/chain.svg').as('api_pagamentoPedido')
            cy.wait('@api_pagamentoPedido', { timeout: 40000 })
            GeralPagamento.insertDateTomorrow1Due()
            cy.wait(4000)
            GeralPagamento.clicarGerarParcAlterarVenc()
            cy.contains('3876 - T.A. A Receber Futuro - para Prestamista sem juros').click()
            cy.intercept('/services/v3/pedido_forma_pagamento').as('api_pedido_forma_pagamento')
            cy.wait('@api_pedido_forma_pagamento', { timeout: 40000 })
            EscolherParcelaReceb.one()
            ValidarServico.okInsurancePrest()
            TicketPrestamista.adicionado() //Validando adição do prestamista
            avancAvancarNormal.finalarFinal()
            TicketPrestamista.paginaFinal()
            FinalizarPed.clicarFinalizarPed() //RESUMO
            FinalizarPed.validarPedGerado()
        })

        it('11. Ped venda: produto 1919 0 0 (promoção a prazo 168), com garantia Não separa, inclusão 3874, prestamista 158, 4 parcelas no recebimento Futuro com juros.', () => {

            Produto.termInstallmentPrest() //PRODUTO
            ValidarSaldo.withBalance()
            cy.clickVoltageProduct()
            cy.clickAddProduc()
            Promocao.selectFirstPromoProduct()
            RecebimentoPromo.termFutWithFeesPrest()
            cy.clickAddProduc()
            Servico.validateModalServLinked()
            ValidarServico.garantiaNaoSep()
            Servico.clickOKServiceLinked() //SERVIÇOS
            ValidarServico.servVinc() ; ValidarServico.addGarantNaoSep()
            AvancarNormal.toTransporter()
            AvancarNormal.toInstallments()
            cy.intercept('GET', '/images/icons/chain.svg').as('api_pagamentoPedido')
            cy.wait('@api_pagamentoPedido', { timeout: 40000 })
            //TicketPrestamista.adicionado() //Validando adição do prestamista
            GeralPagamento.insertDateTomorrow1Due()
            cy.wait(4000)
            GeralPagamento.clicarGerarParcAlterarVenc()
            cy.contains('3874 - T.A. A Receber Futuro - para Prestamista').click()
            cy.intercept('/services/v3/pedido_forma_pagamento').as('api_pedido_forma_pagamento')
            cy.wait('@api_pedido_forma_pagamento', { timeout: 40000 })
            EscolherParcelaReceb.one()
            ValidarServico.okInsurancePrest()
            TicketPrestamista.adicionado() //Validando adição do prestamista
            AvancarNormal.final()
            TicketPrestamista.paginaFinal()
            FinalizarPed.clicarFinalizarPed() //RESUMO
            FinalizarPed.validarPedGerado()
        })
        
        it('12. Ped venda: produto 1920 0 0 (promoção partida 169), com garantia Não separa, inclusão 3876, prestamista 158, 4 parcelas no recebimento Futuro com juros.', () => {
    
            Produto.termInstallmentPrest() //PRODUTO
            ValidarSaldo.withBalance()
            cy.clickVoltageProduct()
            cy.clickAddProduc()
            Promocao.selectFirstPromoProduct()
            RecebimentoPromo.entryPresentPrest()
            cy.clickAddProduc()
            Servico.validateModalServLinked()
            ValidarServico.garantiaNaoSep()
            Servico.clickOKServiceLinked() //SERVIÇOS
            ValidarServico.servVinc() ; ValidarServico.addGarantNaoSep()
            TirarEntrega.freightFirst()
            AvancarNormal.toInstallments()
            cy.intercept('GET', '/images/icons/chain.svg').as('api_icons')
            cy.wait('@api_icons', { timeout: 40000 })
            GeralPedido.clicarEditarParcelas()
            EscolherParcelaReceb.for()
            ValidarServico.okInsurancePrest()
            TicketPrestamista.adicionado() //Validando adição do prestamista
            AvancarNormal.final()
            TicketPrestamista.paginaFinal()
            FinalizarPed.clicarFinalizarPed() //RESUMO
            FinalizarPed.validarPedGerado()
        })
    })

    context('Sem entrega / Misto com e sem Promoção - Prestamista abatimento %', () => {

        it('13. Ped venda: produto 1918 0 0 (promo a prazo 167) e 1860 0 0 (sem promoção), inclusão 3874 (outro recebimento 3860), prestamista 158, 4 parcelas no recebimento Futuro com juros.', () => {
    
            Produto.termInstallmentPrest() //PRODUTO
            ValidarSaldo.withBalance()
            cy.clickVoltageProduct()
            cy.clickAddProduc()
            Promocao.selectFirstPromoProduct()
            RecebimentoPromo.termFutWithFeesPrest()
            cy.clickAddProduc()
            Servico.validateModalServLinked()
            Servico.clickOKServiceLinked() //SERVIÇOS
            tirarEntTirarEntrega.primeirorega()
            Produto.second() //PRODUTO
            ValidarSaldo.withBalance()
            cy.selectProductSearch()
            cy.clickVoltageProduct()
            cy.clickAddProduct()
            Servico.validateModalServLinked()
            Servico.clickOKServiceLinked()
            TirarEntrega.freightSecond()
            AvancarNormal.toInstallments()
            cy.intercept('GET', '/images/icons/chain.svg').as('api_icons')
            cy.wait('@api_icons', { timeout: 40000 })
            GeralPedido.clicarEditarParcelas()
            EscolherParcelaReceb.for()
            ValidarServico.okInsurancePrest()
            TicketPrestamista.adicionado() //Validando adição do prestamista
            GeralPagamento.insertDateTomorrow1Due()
            GeralPagamento.clicarGerarParcAlterarVenc()
            Recebimento.main()
            EscolherParcelaReceb.one()
            AvancarNormal.final()
            TicketPrestamista.paginaFinal()
            FinalizarPed.clicarFinalizarPed() //RESUMO
            FinalizarPed.validarPedGerado()
        })

        it('14. Ped venda: produto 1918 0 0 (promo a prazo 167) e 1860 0 0 (sem promoção), inclusão 3874 (outro recebimento 3874 agrupar), prestamista 158, 4 parcelas no recebimento Futuro com juros.', () => {
    
            Produto.termInstallmentPrest() //PRODUTO
            ValidarSaldo.withBalance()
            cy.clickVoltageProduct()
            cy.clickAddProduc()
            Promocao.selectFirstPromoProduct()
            RecebimentoPromo.termFutWithFeesPrest()
            cy.clickAddProduc()
            Servico.validateModalServLinked()
            Servico.clickOKServiceLinked() //SERVIÇOS
            TirarEntrega.freightFirst()
            Produto.second() //PRODUTO
            ValidarSaldo.withBalance()
            cy.selectProductSearch()
            cy.clickVoltageProduct()
            cy.clickAddProduct()
            Servico.validateModalServLinked()
            Servico.clickOKServiceLinked()
            TirarEntrega.freightSecond()
            AvancarNormal.toInstallments()
            cy.intercept('GET', '/images/icons/chain.svg').as('api_icons')
            cy.wait('@api_icons', { timeout: 40000 })
            GeralPedido.clicarEditarParcelas()
            EscolherParcelaReceb.for()
            ValidarServico.okInsurancePrest()
            TicketPrestamista.adicionado() //Validando adição do prestamista
            GeralPagamento.insertDate31Days1Due()
            GeralPagamento.clicarGerarParcAlterarVenc()
            Recebimento.futMoneyWithFees()
            cy.get('[style="position: relative"] > :nth-child(4) > div.ng-binding').click({force:true}) //escolher 4 parcelas
            AgruparReceb.groupReleases()
            ValidarServico.messPrestRemoved()
            ValidarServico.addInsurancePrest()
            GeralPedido.adicionadoRecebAgrupado()
            AvancarNormal.final()
            TicketPrestamista.paginaFinal()
            FinalizarPed.clicarFinalizarPed() //RESUMO
            FinalizarPed.validarPedGerado()
        })

        it('15. Ped venda: produto 1918 0 0 (promo a prazo 167) e 1860 0 0 (sem promoção), inclusão 3876 (outro recebimento 3860), prestamista 158, 4 parcelas no recebimento Futuro sem juros.', () => {
    
            Produto.termInstallmentPrest() //PRODUTO
            ValidarSaldo.withBalance()
            cy.clickVoltageProduct()
            cy.clickAddProduc()
            Promocao.selectFirstPromoProduct()
            RecebimentoPromo.termFutWithoutFeesPrest()
            cy.clickAddProduc()
            Servico.validateModalServLinked()
            Servico.clickOKServiceLinked() //SERVIÇOS
            TirarEntrega.freightFirst()
            Produto.second() //PRODUTO
            ValidarSaldo.withBalance()
            cy.selectProductSearch()
            cy.clickVoltageProduct()
            cy.clickAddProduct()
            Servico.validateModalServLinked()
            Servico.clickOKServiceLinked()
            TirarEntrega.freightSecond()
            AvancarNormal.toInstallments()
            cy.intercept('GET', '/images/icons/chain.svg').as('api_icons')
            cy.wait('@api_icons', { timeout: 40000 })
            GeralPedido.clicarEditarParcelas()
            EscolherParcelaReceb.for()
            ValidarServico.okInsurancePrest()
            TicketPrestamista.adicionado() //Validando adição do prestamista
            GeralPagamento.insertDateTomorrow1Due()
            GeralPagamento.clicarGerarParcAlterarVenc()
            Recebimento.main()
            EscolherParcelaReceb.one()
            AvancarNormal.final()
            TicketPrestamista.paginaFinal()
            FinalizarPed.clicarFinalizarPed() //RESUMO
            FinalizarPed.validarPedGerado()
        })

        it('16. Ped venda: produto 1918 0 0 (promo a prazo 167) e 1860 0 0 (sem promoção), inclusão 3876 (outro recebimento 3876 agrupar), prestamista 158, 4 parcelas no recebimento Futuro sem juros.', () => {
    
            Produto.termInstallmentPrest() //PRODUTO
            ValidarSaldo.withBalance()
            cy.clickVoltageProduct()
            cy.clickAddProduc()
            Promocao.selectFirstPromoProduct()
            RecebimentoPromo.termFutWithoutFeesPrest()
            cy.clickAddProduc()
            Servico.validateModalServLinked()
            Servico.clickOKServiceLinked() //SERVIÇOS
            TirarEntrega.freightFirst()
            Produto.second() //PRODUTO
            ValidarSaldo.withBalance()
            cy.selectProductSearch()
            cy.clickVoltageProduct()
            cy.clickAddProduct()
            Servico.validateModalServLinked()
            Servico.clickOKServiceLinked()
            TirarEntrega.freightSecond()
            AvancarNormal.toInstallments()
            cy.intercept('GET', '/images/icons/chain.svg').as('api_icons')
            cy.wait('@api_icons', { timeout: 40000 })
            GeralPedido.clicarEditarParcelas()
            EscolherParcelaReceb.for()
            ValidarServico.okInsurancePrest()
            TicketPrestamista.adicionado() //Validando adição do prestamista
            GeralPagamento.insertDate31Days1Due()
            GeralPagamento.clicarGerarParcAlterarVenc()
            cy.intercept('POST', '/services/v3/pedido_forma_pagamento_lista').as('api_pedido_forma_pagamento_lista')
            cy.wait('@api_pedido_forma_pagamento_lista', { timeout: 40000 })
            Recebimento.futMoneyWithoutFees()
            cy.get('[style="position: relative"] > :nth-child(4) > div.ng-binding').click({force:true}) //escolher 4 parcelas
            AgruparReceb.groupReleases()
            ValidarServico.messPrestRemoved()
            ValidarServico.addInsurancePrest()
            GeralPedido.adicionadoRecebAgrupado()
            AvancarNormal.final()
            TicketPrestamista.paginaFinal()
            FinalizarPed.clicarFinalizarPed() //RESUMO
            FinalizarPed.validarPedGerado()
        })

        it('17. Ped venda: produto 1921 0 0 (promo a prazo 170), inclusão 3874, prestamista 158, 4 parcelas no recebimento Futuro com juros.', () => {
    
            Produto.termInstallmentPrest() //PRODUTO
            ValidarSaldo.withBalance()
            cy.clickVoltageProduct()
            cy.clickAddProduc()
            Promocao.selectFirstPromoProduct()
            RecebimentoPromo.termFutWithFeesPrest()
            cy.clickAddProduc()
            Servico.validateModalServLinked()
            Servico.clickOKServiceLinked() //SERVIÇOS
            TirarEntrega.primeiro()
            AvancarNormal.toInstallments()
            cy.intercept('GET', '/images/icons/chain.svg').as('api_icons')
            cy.wait('@api_icons', { timeout: 40000 })
            GeralPedido.clicarEditarParcelas()
            EscolherParcelaReceb.for()
            ValidarServico.okInsurancePrest()
            TicketPrestamista.adicionado() //Validando adição do prestamista
            AvancarNormal.final()
            TicketPrestamista.paginaFinal()
            FinalizarPed.clicarFinalizarPed() //RESUMO
            FinalizarPed.validarPedGerado()
        })
    })

    context('Com entrega / Misto com e sem Promoção - Prestamista abatimento %', () => {

        it('18. Ped venda: produto 1918 0 0 (promo a prazo 167) (com garantia não separa) e 1860 0 0 (sem promoção), inclusão 3874 (outro recebimento 3860), prestamista 158, 4 parcelas no recebimento Futuro com juros.', () => {
    
            Produto.termInstallmentPrest() //PRODUTO
            ValidarSaldo.withBalance()
            cy.clickVoltageProduct()
            cy.clickAddProduc()
            Promocao.selectFirstPromoProduct()
            RecebimentoPromo.termFutWithFeesPrest()
            cy.clickAddProduct()
            Servico.validateModalServLinked()
            ValidarServico.garantiaNaoSep()
            Servico.clickOKServiceLinked() //SERVIÇOS
            ValidarServico.servVinc() ; ValidarServico.addGarantNaoSep()
            Produto.second() //PRODUTO
            ValidarSaldo.withBalance()
            cy.selectProductSearch()
            cy.clickVoltageProduct()
            cy.clickAddProduct()
            Servico.validateModalServLinked()
            Servico.clickOKServiceLinked()
            AvancarNormal.toTransporter()
            AvancarNormal.toInstallments()
            cy.intercept('GET', '/images/icons/chain.svg').as('api_icons')
            cy.wait('@api_icons', { timeout: 40000 })
            GeralPedido.clicarEditarParcelas()
            EscolherParcelaReceb.for()
            ValidarServico.okInsurancePrest()
            TicketPrestamista.adicionado() //Validando adição do prestamista
            GeralPagamento.insertDateTomorrow1Due()
            GeralPagamento.clicarGerarParcAlterarVenc()
            cy.intercept('POST', '/services/v3/pedido_forma_pagamento_lista').as('api_pedido_forma_pagamento_lista')
            cy.wait('@api_pedido_forma_pagamento_lista', { timeout: 40000 })
            Recebimento.main()
            EscolherParcelaReceb.one()
            AvancarNormal.final()
            TicketPrestamista.paginaFinal()
            FinalizarPed.clicarFinalizarPed() //RESUMO
            FinalizarPed.validarPedGerado()
        })

        it('19. Ped venda: produto 1918 0 0 (promo a prazo 167) (com garantia não separa) e 1860 0 0 (sem promoção), inclusão 3874 (outro recebimento 3874 agrupar), prestamista 158, 4 parcelas no recebimento Futuro com juros.', () => {
    
            Produto.termInstallmentPrest() //PRODUTO
            ValidarSaldo.withBalance()
            cy.clickVoltageProduct()
            cy.clickAddProduc()
            Promocao.selectFirstPromoProduct()
            RecebimentoPromo.termFutWithFeesPrest()
            cy.clickAddProduc()
            Servico.validateModalServLinked()
            ValidarServico.garantiaNaoSep()
            Servico.clickOKServiceLinked() //SERVIÇOS
            ValidarServico.servVinc() ; ValidarServico.addGarantNaoSep()
            Produto.second() //PRODUTO
            ValidarSaldo.withBalance()
            cy.selectProductSearch()
            cy.clickVoltageProduct()
            cy.clickAddProduct()
            Servico.validateModalServLinked()
            Servico.clickOKServiceLinked()
            AvancarNormal.toTransporter()
            AvancarNormal.toInstallments()
            cy.intercept('GET', '/images/icons/chain.svg').as('api_icons')
            cy.wait('@api_icons', { timeout: 40000 })
            // TicketPrestamista.adicionado() //Validando adição do prestamista
            GeralPedido.clicarEditarParcelas()
            EscolherParcelaReceb.for()
            ValidarServico.okInsurancePrest()
            TicketPrestamista.adicionado() //Validando adição do prestamista
            GeralPagamento.insertDate31Days1Due()
            GeralPagamento.clicarGerarParcAlterarVenc()
            cy.intercept('POST', '/services/v3/pedido_forma_pagamento_lista').as('api_pedido_forma_pagamento_lista')
            cy.wait('@api_pedido_forma_pagamento_lista', { timeout: 40000 })
            Recebimento.futMoneyWithFees()
            cy.get('[style="position: relative"] > :nth-child(4) > div.ng-binding').click({force:true}) //escolher 4 parcelas
            AgruparReceb.groupReleases()
            ValidarServico.messPrestRemoved()
            ValidarServico.addInsurancePrest()
            GeralPedido.adicionadoRecebAgrupado()
            AvancarNormal.final()
            TicketPrestamista.paginaFinal()
            FinalizarPed.clicarFinalizarPed() //RESUMO
            FinalizarPed.validarPedGerado()
        })

        it('20. Ped venda: produto 1918 0 0 (promo a prazo 167) (com garantia não separa) e 1860 0 0 (sem promoção), inclusão 3876 (outro recebimento 3860), prestamista 158, 4 parcelas no recebimento Futuro sem juros.', () => {

            Produto.termInstallmentPrest() //PRODUTO
            ValidarSaldo.withBalance()
            cy.clickVoltageProduct()
            cy.clickAddProduc()
            Promocao.selectFirstPromoProduct()
            RecebimentoPromo.termFutWithoutFeesPrest()
            cy.clickAddProduc()
            Servico.validateModalServLinked()
            ValidarServico.garantiaNaoSep()
            Servico.clickOKServiceLinked() //SERVIÇOS
            ValidarServico.servVinc() ; ValidarServico.addGarantNaoSep()
            Produto.second() //PRODUTO
            ValidarSaldo.withBalance()
            cy.selectProductSearch()
            cy.clickVoltageProduct()
            cy.clickAddProduct()
            Servico.validateModalServLinked()
            Servico.clickOKServiceLinked()
            AvancarNormal.toTransporter()
            AvancarNormal.toInstallments()
            cy.intercept('GET', '/images/icons/chain.svg').as('api_icons')
            cy.wait('@api_icons', { timeout: 40000 })
            GeralPedido.clicarEditarParcelas()
            EscolherParcelaReceb.for()
            ValidarServico.okInsurancePrest()
            TicketPrestamista.adicionado() //Validando adição do prestamista
            GeralPagamento.insertDateTomorrow1Due()
            GeralPagamento.clicarGerarParcAlterarVenc()
            cy.intercept('POST', '/services/v3/pedido_forma_pagamento_lista').as('api_pedido_forma_pagamento_lista')
            cy.wait('@api_pedido_forma_pagamento_lista', { timeout: 40000 })
            Recebimento.main()
            EscolherParcelaReceb.one()
            AvancarNormal.final()
            TicketPrestamista.paginaFinal()
            FinalizarPed.clicarFinalizarPed() //RESUMO
            FinalizarPed.validarPedGerado()
        })

        it('21. Ped venda: produto 1918 0 0 (promo a prazo 167) (com garantia não separa) e 1860 0 0 (sem promoção), inclusão 3876 (outro recebimento 3876 agrupar), prestamista 158, 4 parcelas no recebimento Futuro sem juros.', () => {
    
            Produto.termInstallmentPrest() //PRODUTO
            ValidarSaldo.withBalance()
            cy.clickVoltageProduct()
            cy.clickAddProduc()
            Promocao.selectFirstPromoProduct()
            RecebimentoPromo.termFutWithoutFeesPrest()
            cy.clickAddProduc()
            Servico.validateModalServLinked()
            ValidarServico.garantiaNaoSep()
            Servico.clickOKServiceLinked() //SERVIÇOS)
            ValidarServico.servVinc() ; ValidarServico.addGarantNaoSep()
            Produto.second() //PRODUTO
            ValidarSaldo.withBalance()
            cy.selectProductSearch()
            cy.clickVoltageProduct()
            cy.clickAddProduct()
            Servico.validateModalServLinked()
            Servico.clickOKServiceLinked()
            AvancarNormal.toTransporter()
            AvancarNormal.toInstallments()
            cy.intercept('GET', '/images/icons/chain.svg').as('api_icons')
            cy.wait('@api_icons', { timeout: 40000 })
            // TicketPrestamista.adicionado() //Validando adição do prestamista
            GeralPedido.clicarEditarParcelas()
            EscolherParcelaReceb.for()
            ValidarServico.okInsurancePrest()
            TicketPrestamista.adicionado() //Validando adição do prestamista
            GeralPagamento.insertDate31Days1Due()
            GeralPagamento.clicarGerarParcAlterarVenc()
            cy.intercept('POST', '/services/v3/pedido_forma_pagamento_lista').as('api_pedido_forma_pagamento_lista')
            cy.wait('@api_pedido_forma_pagamento_lista', { timeout: 40000 })
            Recebimento.futMoneyWithoutFees()
            cy.get('[style="position: relative"] > :nth-child(4) > div.ng-binding').click({force:true}) //escolher 4 parcelas
            AgruparReceb.groupReleases()
            ValidarServico.messPrestRemoved()
            ValidarServico.addInsurancePrest()
            GeralPedido.adicionadoRecebAgrupado()
            AvancarNormal.final()
            TicketPrestamista.paginaFinal()
            FinalizarPed.clicarFinalizarPed() //RESUMO
            FinalizarPed.validarPedGerado()
        })

        it('22. Ped venda: produto 1920 0 0 (promo a prazo 169) (com garantia não separa) e 1860 0 0 (sem promoção), inclusão 3875 (outro recebimento 3874), prestamista 158, 4 parcelas no recebimento Presente.', () => {

            Produto.termInstallmentPrest() //PRODUTO
            ValidarSaldo.withBalance()
            cy.clickVoltageProduct()
            cy.clickAddProduc()
            Promocao.selectFirstPromoProduct()
            RecebimentoPromo.entryPresentPrest()
            cy.clickAddProduc()
            Servico.validateModalServLinked()
            ValidarServico.garantiaNaoSep()
            Servico.clickOKServiceLinked() //SERVIÇOS
            ValidarServico.servVinc() ; ValidarServico.garantiaNaoSep()
            Produto.second() //PRODUTO
            ValidarSaldo.withBalance()
            cy.selectProductSearch()
            cy.clickVoltageProduct()
            cy.clickAddProduct()
            Servico.validateModalServLinked()
            ValidarServico.garantiaNaoSep()
            Servico.clickOKServiceLinked()
            AvancarNormal.toTransporter()
            AvancarNormal.toInstallments()
            cy.intercept('GET', '/images/icons/chain.svg').as('api_icons')
            cy.wait('@api_icons', { timeout: 40000 })
            GeralPedido.clicarEditarParcelas()
            EscolherParcelaReceb.for()
            ValidarServico.okInsurancePrest()
            TicketPrestamista.adicionado() //Validando adição do prestamista
            GeralPagamento.insertDateTomorrow1Due()
            GeralPagamento.clicarGerarParcAlterarVenc()
            cy.intercept('POST', '/services/v3/pedido_forma_pagamento_lista').as('api_pedido_forma_pagamento_lista')
            cy.wait('@api_pedido_forma_pagamento_lista', { timeout: 40000 })
            Recebimento.secondForm()
            EscolherParcelaReceb.one()
            AvancarNormal.final()
            TicketPrestamista.paginaFinal()
            FinalizarPed.clicarFinalizarPed() //RESUMO
            FinalizarPed.validarPedGerado()
        })

        it('23. Ped venda: produto 1920 0 0 (promo a prazo 169) (com garantia não separa) e 1860 0 0 (sem promoção), inclusão 3875 (outro recebimento 3875 agrupar), prestamista 158, 4 parcelas no recebimento Presente.', () => {
    
            Produto.termInstallmentPrest() //PRODUTO
            ValidarSaldo.withBalance()
            cy.clickVoltageProduct()
            cy.clickAddProduc()
            Promocao.selectFirstPromoProduct()
            RecebimentoPromo.entryPresentPrest()
            cy.clickAddProduc()
            Servico.validateModalServLinked()
            ValidarServico.garantiaNaoSep()
            Servico.clickOKServiceLinked() //SERVIÇOS)
            ValidarServico.servVinc() ; ValidarServico.addGarantNaoSep()
            Produto.second() //PRODUTO
            ValidarSaldo.comSwithBalancealdo()
            cy.selectProductSearch()
            cy.clickVoltageProduct()
            cy.clickAddProduct()
            Servico.validateModalServLinked()
            ValidarServico.garantiaNaoSep()
            Servico.clickOKServiceLinked()
            AvancarNormal.toTransporter()
            AvancarNormal.toInstallments()
            cy.intercept('GET', '/images/icons/chain.svg').as('api_icons')
            cy.wait('@api_icons', { timeout: 40000 })
            // TicketPrestamista.adicionado() //Validando adição do prestamista
            GeralPedido.clicarEditarParcelas()
            EscolherParcelaReceb.for()
            ValidarServico.okInsurancePrest()
            TicketPrestamista.adicionado() //Validando adição do prestamista
            GeralPagamento.insertDate31Days1Due()
            GeralPagamento.clicarGerarParcAlterarVenc()
            cy.intercept('POST', '/services/v3/pedido_forma_pagamento_lista').as('api_pedido_forma_pagamento_lista')
            cy.wait('@api_pedido_forma_pagamento_lista', { timeout: 40000 })
            Recebimento.presentMoney()
            cy.get('[style="position: relative"] > :nth-child(4) > div.ng-binding').click({force:true}) //escolher 4 parcelas
            AgruparReceb.groupReleases()
            ValidarServico.messPrestRemoved()
            ValidarServico.addInsurancePrest()
            GeralPedido.adicionadoRecebAgrupado()
            AvancarNormal.final()
            TicketPrestamista.paginaFinal()
            FinalizarPed.clicarFinalizarPed() //RESUMO
            FinalizarPed.validarPedGerado()
        })
    })
})