import { ProcessoVendaPage } from '../../../../pages/pedido/ProcessoVendaPage.js'
import { Product, ValidateBalance } from '../../../../pages/pedido/ProdutoPage.js'
import { Service, ValidateService } from '../../../../pages/pedido/ServicosPage.js'
import { AvancarPage } from '../../../../pages/pedido/AvancarPage.js'
import { TirarEntrega } from '../../../../pages/pedido/EntregaPage.js'
import { GeralPagamentoPage } from '../../../../pages/pedido/GeralPagamentoPage.js'
import { ParcelasPage } from '../../../../pages/pedido/ParcelasPage.js'
import { AgruparRecebPage } from '../../../../pages/pedido/AgruparRecebPage.js'
import { ProcessoRecebPage } from '../../../pages/pedido/ProcessoRecebPage.js'
import { ProcessoRecebPromoPage } from '../../../pages/pedido/ProcessoRecebPromoPage.js'
import { PromocaoPage } from '../../../../pages/pedido/PromocaoPage.js'
import { ValidadePrestamistaPage } from '../../../../pages/pedido/ValidadePrestamistaPage.js'
import { GeralPedidosPage } from '../../../../pages/pedido/GeralPedidosPage.js'


describe('Orders with Lender Service Discount % (158)', () => {

    beforeEach(() => {
        cy.visit('/');
        cy.clearAllSessionStorage();
        cy.login();
        cy.urlAposLogin();
        cy.tituloPagina(); 
        ProcessoVendaPage.NFe() 
        cy.chooseCliente();
    })   

    context('Without delivery / Products without promotion - Lender with discount %', () => {

        it('1.Order: products 1860 0 0 and 1870 0 0, inclusion 3874, lender 158, 4 installments upon receipt Future with interest.', () => {
    
            Product.fisrt()
            ValidateBalance.withBalance() 
            cy.selectProductSearch()
            cy.clickVoltageProduct()
            cy.clickAddProduct()
            Service.validateModalServLinked()
            Service.clickOKServiceLinked() 
            TirarEntrega.freightFirst()
            Product.second()
            ValidateBalance.withBalance() 
            cy.selectProductSearch()
            cy.clickVoltageProduct()
            cy.clickAddProduct()
            Service.validateModalServLinked()  
            Service.clickOKServiceLinked()
            TirarEntrega.freightSecond()
            AvancarPage.toInstallments()
            GeralPagamentoPage.clickGenerateInstallments(); 
            GeralPagamentoPage.loadingFormPayment();
            ProcessoRecebPage.futMoneyWithFees()
            ParcelasPage.for()
            ValidateService.okInsurancePrest()
            ValidadePrestamistaPage.added() 
            AvancarPage.final();
            ValidadePrestamistaPage.pageFinal()
            cy.clickFinalizarPedidoPage();
            cy.validateOrderGenerated();
        })

        it('2.Order: products 1860 0 0 and 1870 0 0, inclusion 3875, lender 158, 4 installments upon receipt Present.', () => {
    
            Product.fisrt()
            ValidateBalance.withBalance() 
            cy.selectProductSearch()
            cy.clickVoltageProduct()
            cy.clickAddProduct()
            Service.validateModalServLinked() 
            Service.clickOKServiceLinked()
            TirarEntrega.freightFirst()
            Product.second()
            ValidateBalance.withBalance() 
            cy.selectProductSearch()
            cy.clickVoltageProduct()
            cy.clickAddProduct()
            Service.validateModalServLinked() 
            Service.clickOKServiceLinked()
            TirarEntrega.freightSecond()
            AvancarPage.toInstallments()
            GeralPagamentoPage.clickGenerateInstallments(); 
            GeralPagamentoPage.loadingFormPayment();
            ProcessoRecebPage.presentMoney()
            ParcelasPage.for()
            ValidateService.okInsurancePrest()
            ValidadePrestamistaPage.added() 
            AvancarPage.final();
            ValidadePrestamistaPage.pageFinal()
            cy.clickFinalizarPedidoPage();
            cy.validateOrderGenerated();
        })
    })

    context('With delivery / Products without promotion - Lender with discount %', () => {

        it('3.Order: products 1860 0 0 and 1870 0 0, inclusion 3876, lender 158, 4 installments upon receipt Future without interest.', () => {
    
            Product.fisrt()
            ValidateBalance.withBalance() 
            cy.selectProductSearch()
            cy.clickVoltageProduct()
            cy.clickAddProduct()
            Service.validateModalServLinked() 
            Service.clickOKServiceLinked()
            Product.second()
            ValidateBalance.withBalance() 
            cy.selectProductSearch()
            cy.clickVoltageProduct()
            cy.clickAddProduct()
            Service.validateModalServLinked() 
            Service.clickOKServiceLinked()
            AvancarPage.toTransporter()
            AvancarPage.toInstallments()
            GeralPagamentoPage.clickGenerateInstallments(); 
            GeralPagamentoPage.loadingFormPayment();
            ProcessoRecebPage.futMoneyWithoutFees()
            ParcelasPage.for()
            ValidateService.okInsurancePrest()
            ValidadePrestamistaPage.added() 
            AvancarPage.final();
            ValidadePrestamistaPage.pageFinal()
            cy.clickFinalizarPedidoPage();
            cy.validateOrderGenerated();
        })

        it('4.Order: products 1860 0 0 (with warranty, not separate) and 1870 0 0, inclusion 3874, lender 158, 4 installments upon receipt. Future with interest.', () => {
    
            Product.fisrt()
            ValidateBalance.withBalance() 
            cy.selectProductSearch()
            cy.clickVoltageProduct()
            cy.clickAddProduct()
            Service.validateModalServLinked()
            ValidateService.garantiaNaoSep()
            Service.clickOKServiceLinked() 
            ValidateService.servLinked() ; ValidateService.garantiaSepMesmoProc()
            Product.second()
            ValidateBalance.withBalance() 
            cy.selectProductSearch()
            cy.clickVoltageProduct()
            cy.clickAddProduct()
            Service.validateModalServLinked() 
            Service.clickOKServiceLinked()
            AvancarPage.toTransporter()
            AvancarPage.toInstallments()
            GeralPagamentoPage.clickGenerateInstallments(); 
            GeralPagamentoPage.loadingFormPayment();
            ProcessoRecebPage.futMoneyWithFees()
            ParcelasPage.for()
            ValidateService.okInsurancePrest()
            ValidadePrestamistaPage.added() 
            AvancarPage.final();
            ValidadePrestamistaPage.pageFinal()
            cy.clickFinalizarPedidoPage();
            cy.validateOrderGenerated();
        })

        it('5.Order: products 1860 0 0 (with warranty does not separate) and 1870 0 0, inclusion 3876, lender 158, 4 installments upon receipt Future without interest.', () => {

            Product.fisrt()
            ValidateBalance.withBalance() 
            cy.selectProductSearch()
            cy.clickVoltageProduct()
            cy.clickAddProduct()
            Service.validateModalServLinked()
            ValidateService.garantiaNaoSep()
            Service.clickOKServiceLinked() 
            ValidateService.servLinked() ; ValidateService.garantiaSepMesmoProc()
            Product.second()
            ValidateBalance.withBalance() 
            cy.selectProductSearch()
            cy.clickVoltageProduct()
            cy.clickAddProduct()
            Service.validateModalServLinked()  
            Service.clickOKServiceLinked()
            AvancarPage.toTransporter()
            AvancarPage.toInstallments()
            GeralPagamentoPage.clickGenerateInstallments(); 
            GeralPagamentoPage.loadingFormPayment();
            ProcessoRecebPage.futMoneyWithoutFees()
            ParcelasPage.for()
            ValidateService.okInsurancePrest()
            ValidadePrestamistaPage.added() 
            AvancarPage.final();
            ValidadePrestamistaPage.pageFinal()
            cy.clickFinalizarPedidoPage();
            cy.validateOrderGenerated();
        })

        it('6.Order: products 1860 0 0 (with warranty does not separate) and 1870 0 0, inclusion 3875, lender 158, 4 installments upon receipt Present without interest.', () => {
    
            Product.fisrt()
            ValidateBalance.withBalance() 
            cy.selectProductSearch()
            cy.clickVoltageProduct()
            cy.clickAddProduct()
            Service.validateModalServLinked()
            ValidateService.garantiaNaoSep()
            Service.clickOKServiceLinked() 
            ValidateService.servLinked() ; ValidateService.garantiaSepMesmoProc()
            Product.second()
            ValidateBalance.withBalance() 
            cy.selectProductSearch()
            cy.clickVoltageProduct()
            cy.clickAddProduct()
            Service.validateModalServLinked()  
            Service.clickOKServiceLinked()
            AvancarPage.toTransporter()
            AvancarPage.toInstallments()
            GeralPagamentoPage.clickGenerateInstallments(); 
            GeralPagamentoPage.loadingFormPayment();
            ProcessoRecebPage.presentMoney()
            ParcelasPage.for()
            ValidateService.okInsurancePrest()
            ValidadePrestamistaPage.added() 
            AvancarPage.final();
            ValidadePrestamistaPage.pageFinal()
            cy.clickFinalizarPedidoPage();
            cy.validateOrderGenerated();
        })
    })

        context('Sem entrega / Produtos com promoção - Prestamista com abatimento %', () => {

        it('7.Order: product 1918 0 0 (promotion on credit 167), inclusion 3874, lender 158, 4 installments upon receipt. Future with interest.', () => {
    
            Product.termInstallmentPrest()
            ValidateBalance.withBalance() 
            cy.clickVoltageProduct()
            cy.clickAddProduc()
            PromocaoPage.selectFirstPromoProduct()
            ProcessoRecebPromoPage.termFutWithFeesPrest()
            cy.clickAddProduc()
            Service.validateModalServLinked()
            Service.clickOKServiceLinked() 
            TirarEntrega.freightFirst()
            AvancarPage.toInstallments()
            cy.intercept('GET', '/images/icons/chain.svg').as('api_icons')
            cy.wait('@api_icons', { timeout: 40000 })
            GeralPedidosPage.clickEditInstallments()
            ParcelasPage.for()
            ValidateService.okInsurancePrest()
            ValidadePrestamistaPage.added() 
            AvancarPage.final();
            ValidadePrestamistaPage.pageFinal()
            cy.clickFinalizarPedidoPage();
            cy.validateOrderGenerated();
        })

        it('8.Order: product 1918 0 0 (promotion on credit 167), inclusion 3876, lender 158, 4 installments upon receipt Future without interest.', () => {
    
            Product.termInstallmentPrest()
            ValidateBalance.withBalance() 
            cy.clickVoltageProduct()
            cy.clickAddProduc()
            PromocaoPage.selectFirstPromoProduct()
            ProcessoRecebPromoPage.termFutWithoutFeesPrest()
            cy.clickAddProduc()
            Service.validateModalServLinked()
            Service.clickOKServiceLinked() 
            TirarEntrega.freightFirst()
            AvancarPage.toInstallments()
            cy.intercept('GET', '/images/icons/chain.svg').as('api_icons')
            cy.wait('@api_icons', { timeout: 40000 })
            GeralPedidosPage.clickEditInstallments()
            ParcelasPage.for()
            ValidateService.okInsurancePrest()
            ValidadePrestamistaPage.added() 
            AvancarPage.final();
            ValidadePrestamistaPage.pageFinal()
            cy.clickFinalizarPedidoPage();
            cy.validateOrderGenerated();
        })

        it('9.Order: product 1918 0 0 (promotion on credit 167), with warranty. No separation, inclusion 3876, lender 158, 4 installments upon receipt. Future without interest.', () => {
    
            Product.termInstallmentPrest()
            ValidateBalance.withBalance() 
            cy.clickVoltageProduct()
            cy.clickAddProduc()
            PromocaoPage.selectFirstPromoProduct()
            ProcessoRecebPromoPage.termFutWithoutFeesPrest()
            cy.clickAddProduc()
            Service.validateModalServLinked()
            ValidateService.garantiaNaoSep()
            Service.clickOKServiceLinked() 
            TirarEntrega.freightFirst()
            AvancarPage.toInstallments()
            cy.intercept('GET', '/images/icons/chain.svg').as('api_icons')
            cy.wait('@api_icons', { timeout: 40000 })
            GeralPedidosPage.clickEditInstallments()
            ParcelasPage.for()
            ValidateService.okInsurancePrest()
            ValidadePrestamistaPage.added() 
            AvancarPage.final();
            ValidadePrestamistaPage.pageFinal()
            cy.clickFinalizarPedidoPage();
            cy.validateOrderGenerated();
        })
    })

    context('With delivery / Products with promotion - Lender with discount %', () => {

        it('10.Order: product 1919 0 0 (promotion on credit 168), with warranty. Does not separate, inclusion 3876, lender 158, 4 installments upon receipt. Future without interest.', () => {

            Product.termInstallmentPrest()
            ValidateBalance.withBalance() 
            cy.clickVoltageProduct()
            cy.clickAddProduc()
            PromocaoPage.selectFirstPromoProduct()
            ProcessoRecebPromoPage.termFutWithoutFeesPrest()
            cy.clickAddProduc()
            Service.validateModalServLinked()
            ValidateService.garantiaNaoSep()
            Service.clickOKServiceLinked() 
            ValidateService.servLinked() ; ValidateService.addGarantNaoSep()
            AvancarPage.toTransporter()
            AvancarPage.toInstallments()
            cy.intercept('GET', '/images/icons/chain.svg').as('api_pagamentoPedido')
            cy.wait('@api_pagamentoPedido', { timeout: 40000 })
            GeralPagamentoPage.insertDateTomorrow1Due()
            GeralPagamentoPage.clicarGerarParcAlterarVenc()
            cy.contains('3876 - T.A. A Receber Futuro - para Prestamista sem juros').click()
            cy.intercept('/services/v3/pedido_forma_pagamento').as('api_pedido_forma_pagamento')
            cy.wait('@api_pedido_forma_pagamento', { timeout: 40000 })
            ParcelasPage.one()
            ValidateService.okInsurancePrest()
            ValidadePrestamistaPage.added() 
            AvancarPage.finalarFinal()
            ValidadePrestamistaPage.pageFinal()
            cy.clickFinalizarPedidoPage();
            cy.validateOrderGenerated();
        })

        it('11.Order: product 1919 0 0 (promo on credit 168), with insurance does not separate, inclusion 3874, lender 158, 4 installments upon receipt Future with interest.', () => {

            Product.termInstallmentPrest()
            ValidateBalance.withBalance() 
            cy.clickVoltageProduct()
            cy.clickAddProduc()
            PromocaoPage.selectFirstPromoProduct()
            ProcessoRecebPromoPage.termFutWithFeesPrest()
            cy.clickAddProduc()
            Service.validateModalServLinked()
            ValidateService.garantiaNaoSep()
            Service.clickOKServiceLinked() 
            ValidateService.servLinked() ; ValidateService.addGarantNaoSep()
            AvancarPage.toTransporter()
            AvancarPage.toInstallments()
            cy.intercept('GET', '/images/icons/chain.svg').as('api_pagamentoPedido')
            cy.wait('@api_pagamentoPedido', { timeout: 40000 })
            //ValidadePrestamistaPage.added() 
            GeralPagamentoPage.insertDateTomorrow1Due()
            GeralPagamentoPage.clicarGerarParcAlterarVenc()
            cy.contains('3874 - T.A. A Receber Futuro - para Prestamista').click()
            cy.intercept('/services/v3/pedido_forma_pagamento').as('api_pedido_forma_pagamento')
            cy.wait('@api_pedido_forma_pagamento', { timeout: 40000 })
            ParcelasPage.one()
            ValidateService.okInsurancePrest()
            ValidadePrestamistaPage.added() 
            AvancarPage.final();
            ValidadePrestamistaPage.pageFinal()
            cy.clickFinalizarPedidoPage();
            cy.validateOrderGenerated();
        })

        it('12.Order: product 1920 0 0 (promo on entry 169), with insurance does not separate, inclusion 3876, lender 158, 4 installments upon receipt Future with interest.', () => {

            Product.termInstallmentPrest()
            ValidateBalance.withBalance() 
            cy.clickVoltageProduct()
            cy.clickAddProduc()
            PromocaoPage.selectFirstPromoProduct()
            ProcessoRecebPromoPage.entryPresentPrest()
            cy.clickAddProduc()
            Service.validateModalServLinked()
            ValidateService.garantiaNaoSep()
            Service.clickOKServiceLinked() 
            ValidateService.servLinked() ; ValidateService.addGarantNaoSep()
            TirarEntrega.freightFirst()
            AvancarPage.toInstallments()
            cy.intercept('GET', '/images/icons/chain.svg').as('api_icons')
            cy.wait('@api_icons', { timeout: 40000 })
            GeralPedidosPage.clickEditInstallments()
            ParcelasPage.for()
            ValidateService.okInsurancePrest()
            ValidadePrestamistaPage.added() 
            AvancarPage.final();
            ValidadePrestamistaPage.pageFinal()
            cy.clickFinalizarPedidoPage();
            cy.validateOrderGenerated();
        })
    })

    context('Without delivery / Mixed with and without Promotion - Lender with discount %', () => {

        it('13.Order: product 1918 0 0 (promo on credit 167) and 1860 0 0 (without promotion), inclusion 3874 (other receipt 3860), lender 158, 4 installments on future receipt with interest.', () => {
    
            Product.termInstallmentPrest()
            ValidateBalance.withBalance() 
            cy.clickVoltageProduct()
            cy.clickAddProduc()
            PromocaoPage.selectFirstPromoProduct()
            ProcessoRecebPromoPage.termFutWithFeesPrest()
            cy.clickAddProduc()
            Service.validateModalServLinked()
            Service.clickOKServiceLinked() 
            TirarEntrega.primeiro()
            Product.second()
            ValidateBalance.withBalance() 
            cy.selectProductSearch()
            cy.clickVoltageProduct()
            cy.clickAddProduct()
            Service.validateModalServLinked()
            Service.clickOKServiceLinked()
            TirarEntrega.freightSecond()
            AvancarPage.toInstallments()
            cy.intercept('GET', '/images/icons/chain.svg').as('api_icons')
            cy.wait('@api_icons', { timeout: 40000 })
            GeralPedidosPage.clickEditInstallments()
            ParcelasPage.for()
            ValidateService.okInsurancePrest()
            ValidadePrestamistaPage.added() 
            GeralPagamentoPage.insertDateTomorrow1Due()
            GeralPagamentoPage.clicarGerarParcAlterarVenc()
            ProcessoRecebPage.main();
            ParcelasPage.one()
            AvancarPage.final();
            ValidadePrestamistaPage.pageFinal()
            cy.clickFinalizarPedidoPage();
            cy.validateOrderGenerated();
        })

        it('14.Order: product 1918 0 0 (promo on credit 167) and 1860 0 0 (without promotion), inclusion 3874 (other receipt 3874 to be grouped), lender 158, 4 installments on future receipt with interest.', () => {
    
            Product.termInstallmentPrest()
            ValidateBalance.withBalance() 
            cy.clickVoltageProduct()
            cy.clickAddProduc()
            PromocaoPage.selectFirstPromoProduct()
            ProcessoRecebPromoPage.termFutWithFeesPrest()
            cy.clickAddProduc()
            Service.validateModalServLinked()
            Service.clickOKServiceLinked() 
            TirarEntrega.freightFirst()
            Product.second()
            ValidateBalance.withBalance() 
            cy.selectProductSearch()
            cy.clickVoltageProduct()
            cy.clickAddProduct()
            Service.validateModalServLinked()
            Service.clickOKServiceLinked()
            TirarEntrega.freightSecond()
            AvancarPage.toInstallments()
            cy.intercept('GET', '/images/icons/chain.svg').as('api_icons')
            cy.wait('@api_icons', { timeout: 40000 })
            GeralPedidosPage.clickEditInstallments()
            ParcelasPage.for()
            ValidateService.okInsurancePrest()
            ValidadePrestamistaPage.added() 
            GeralPagamentoPage.insertDate31Days1Due()
            GeralPagamentoPage.clicarGerarParcAlterarVenc()
            ProcessoRecebPage.futMoneyWithFees()
            cy.get('[style="position: relative"] > :nth-child(4) > div.ng-binding').click({force:true}) //escolher 4 parcelas
            AgruparRecebPage.groupReleases()
            ValidateService.messPrestRemoved()
            ValidateService.addInsurancePrest()
            GeralPedidosPage.adicionadoRecebAgrupado()
            AvancarPage.final();
            ValidadePrestamistaPage.pageFinal()
            cy.clickFinalizarPedidoPage();
            cy.validateOrderGenerated();
        })

        it('15.Order: product 1918 0 0 (promo on credit 167) and 1860 0 0 (without promotion), inclusion 3876 (other receipt 3860), lender 158, 4 installments upon receipt Future without interest.', () => {
    
            Product.termInstallmentPrest()
            ValidateBalance.withBalance() 
            cy.clickVoltageProduct()
            cy.clickAddProduc()
            PromocaoPage.selectFirstPromoProduct()
            ProcessoRecebPromoPage.termFutWithoutFeesPrest()
            cy.clickAddProduc()
            Service.validateModalServLinked()
            Service.clickOKServiceLinked() 
            TirarEntrega.freightFirst()
            Product.second()
            ValidateBalance.withBalance() 
            cy.selectProductSearch()
            cy.clickVoltageProduct()
            cy.clickAddProduct()
            Service.validateModalServLinked()
            Service.clickOKServiceLinked()
            TirarEntrega.freightSecond()
            AvancarPage.toInstallments()
            cy.intercept('GET', '/images/icons/chain.svg').as('api_icons')
            cy.wait('@api_icons', { timeout: 40000 })
            GeralPedidosPage.clickEditInstallments()
            ParcelasPage.for()
            ValidateService.okInsurancePrest()
            ValidadePrestamistaPage.added() 
            GeralPagamentoPage.insertDateTomorrow1Due()
            GeralPagamentoPage.clicarGerarParcAlterarVenc()
            ProcessoRecebPage.main();
            ParcelasPage.one()
            AvancarPage.final();
            ValidadePrestamistaPage.pageFinal()
            cy.clickFinalizarPedidoPage();
            cy.validateOrderGenerated();
        })

        it('16.Order: product 1918 0 0 (promo on credit 167) and 1860 0 0 (without promotion), inclusion 3876 (other receipt 3876 group), lender 158, 4 installments on future receipt without interest.', () => {
    
            Product.termInstallmentPrest()
            ValidateBalance.withBalance() 
            cy.clickVoltageProduct()
            cy.clickAddProduc()
            PromocaoPage.selectFirstPromoProduct()
            ProcessoRecebPromoPage.termFutWithoutFeesPrest()
            cy.clickAddProduc()
            Service.validateModalServLinked()
            Service.clickOKServiceLinked() 
            TirarEntrega.freightFirst()
            Product.second()
            ValidateBalance.withBalance() 
            cy.selectProductSearch()
            cy.clickVoltageProduct()
            cy.clickAddProduct()
            Service.validateModalServLinked()
            Service.clickOKServiceLinked()
            TirarEntrega.freightSecond()
            AvancarPage.toInstallments()
            cy.intercept('GET', '/images/icons/chain.svg').as('api_icons')
            cy.wait('@api_icons', { timeout: 40000 })
            GeralPedidosPage.clickEditInstallments()
            ParcelasPage.for()
            ValidateService.okInsurancePrest()
            ValidadePrestamistaPage.added() 
            GeralPagamentoPage.insertDate31Days1Due()
            GeralPagamentoPage.clicarGerarParcAlterarVenc()
            cy.intercept('POST', '/services/v3/pedido_forma_pagamento_lista').as('api_pedido_forma_pagamento_lista')
            cy.wait('@api_pedido_forma_pagamento_lista', { timeout: 40000 })
            ProcessoRecebPage.futMoneyWithoutFees()
            cy.get('[style="position: relative"] > :nth-child(4) > div.ng-binding').click({force:true}) //escolher 4 parcelas
            AgruparRecebPage.groupReleases()
            ValidateService.messPrestRemoved()
            ValidateService.addInsurancePrest()
            GeralPedidosPage.adicionadoRecebAgrupado()
            AvancarPage.final();
            ValidadePrestamistaPage.pageFinal()
            cy.clickFinalizarPedidoPage();
            cy.validateOrderGenerated();
        })

        it('17.Order: product 1921 0 0 (promo on credit 170), inclusion 3874, lender 158, 4 installments upon receipt Future with interest.', () => {
    
            Product.termInstallmentPrest()
            ValidateBalance.withBalance() 
            cy.clickVoltageProduct()
            cy.clickAddProduc()
            PromocaoPage.selectFirstPromoProduct()
            ProcessoRecebPromoPage.termFutWithFeesPrest()
            cy.clickAddProduc()
            Service.validateModalServLinked()
            Service.clickOKServiceLinked() 
            TirarEntrega.primeiro()
            AvancarPage.toInstallments()
            cy.intercept('GET', '/images/icons/chain.svg').as('api_icons')
            cy.wait('@api_icons', { timeout: 40000 })
            GeralPedidosPage.clickEditInstallments()
            ParcelasPage.for()
            ValidateService.okInsurancePrest()
            ValidadePrestamistaPage.added() 
            AvancarPage.final();
            ValidadePrestamistaPage.pageFinal()
            cy.clickFinalizarPedidoPage();
            cy.validateOrderGenerated();
        })
    })

    context('With delivery / Mixed with and without Promotion - Lender with discount %', () => {

        it('18.Order: product 1918 0 0 (promo on credit 167) (with warranty, not separate) and 1860 0 0 (without promotion), inclusion 3874 (other receipt 3860), lender 158, 4 installments on future receipt with interest.', () => {
    
            Product.termInstallmentPrest()
            ValidateBalance.withBalance() 
            cy.clickVoltageProduct()
            cy.clickAddProduc()
            PromocaoPage.selectFirstPromoProduct()
            ProcessoRecebPromoPage.termFutWithFeesPrest()
            cy.clickAddProduct()
            Service.validateModalServLinked()
            ValidateService.garantiaNaoSep()
            Service.clickOKServiceLinked() 
            ValidateService.servLinked() ; ValidateService.addGarantNaoSep()
            Product.second()
            ValidateBalance.withBalance() 
            cy.selectProductSearch()
            cy.clickVoltageProduct()
            cy.clickAddProduct()
            Service.validateModalServLinked()
            Service.clickOKServiceLinked()
            AvancarPage.toTransporter()
            AvancarPage.toInstallments()
            cy.intercept('GET', '/images/icons/chain.svg').as('api_icons')
            cy.wait('@api_icons', { timeout: 40000 })
            GeralPedidosPage.clickEditInstallments()
            ParcelasPage.for()
            ValidateService.okInsurancePrest()
            ValidadePrestamistaPage.added() 
            GeralPagamentoPage.insertDateTomorrow1Due()
            GeralPagamentoPage.clicarGerarParcAlterarVenc()
            cy.intercept('POST', '/services/v3/pedido_forma_pagamento_lista').as('api_pedido_forma_pagamento_lista')
            cy.wait('@api_pedido_forma_pagamento_lista', { timeout: 40000 })
            ProcessoRecebPage.main();
            ParcelasPage.one()
            AvancarPage.final();
            ValidadePrestamistaPage.pageFinal()
            cy.clickFinalizarPedidoPage();
            cy.validateOrderGenerated();
        })

        it('19.Order: product 1918 0 0 (promo on credit 167) (with warranty, do not separate) and 1860 0 0 (without promotion), inclusion 3874 (another receipt 3874 to be grouped), lender 158, 4 installments on future receipt with interest.', () => {
    
            Product.termInstallmentPrest()
            ValidateBalance.withBalance() 
            cy.clickVoltageProduct()
            cy.clickAddProduc()
            PromocaoPage.selectFirstPromoProduct()
            ProcessoRecebPromoPage.termFutWithFeesPrest()
            cy.clickAddProduc()
            Service.validateModalServLinked()
            ValidateService.garantiaNaoSep()
            Service.clickOKServiceLinked() 
            ValidateService.servLinked() ; ValidateService.addGarantNaoSep()
            Product.second()
            ValidateBalance.withBalance() 
            cy.selectProductSearch()
            cy.clickVoltageProduct()
            cy.clickAddProduct()
            Service.validateModalServLinked()
            Service.clickOKServiceLinked()
            AvancarPage.toTransporter()
            AvancarPage.toInstallments()
            cy.intercept('GET', '/images/icons/chain.svg').as('api_icons')
            cy.wait('@api_icons', { timeout: 40000 })
            GeralPedidosPage.clickEditInstallments()
            ParcelasPage.for()
            ValidateService.okInsurancePrest()
            ValidadePrestamistaPage.added() 
            GeralPagamentoPage.insertDate31Days1Due()
            GeralPagamentoPage.clicarGerarParcAlterarVenc()
            cy.intercept('POST', '/services/v3/pedido_forma_pagamento_lista').as('api_pedido_forma_pagamento_lista')
            cy.wait('@api_pedido_forma_pagamento_lista', { timeout: 40000 })
            ProcessoRecebPage.futMoneyWithFees()
            cy.get('[style="position: relative"] > :nth-child(4) > div.ng-binding').click({force:true}) //escolher 4 parcelas
            AgruparRecebPage.groupReleases()
            ValidateService.messPrestRemoved()
            ValidateService.addInsurancePrest()
            GeralPedidosPage.adicionadoRecebAgrupado()
            AvancarPage.final();
            ValidadePrestamistaPage.pageFinal()
            cy.clickFinalizarPedidoPage();
            cy.validateOrderGenerated();
        })

        it('20.Order: product 1918 0 0 (promo a prazo 167) (with insurance not separated) and 1860 0 0 (without promotion), inclusion 3876 (other receipt 3860), lender 158, 4 installments upon receipt Future without interest.', () => {

            Product.termInstallmentPrest()
            ValidateBalance.withBalance() 
            cy.clickVoltageProduct()
            cy.clickAddProduc()
            PromocaoPage.selectFirstPromoProduct()
            ProcessoRecebPromoPage.termFutWithoutFeesPrest()
            cy.clickAddProduc()
            Service.validateModalServLinked()
            ValidateService.garantiaNaoSep()
            Service.clickOKServiceLinked() 
            ValidateService.servLinked() ; ValidateService.addGarantNaoSep()
            Product.second()
            ValidateBalance.withBalance() 
            cy.selectProductSearch()
            cy.clickVoltageProduct()
            cy.clickAddProduct()
            Service.validateModalServLinked()
            Service.clickOKServiceLinked()
            AvancarPage.toTransporter()
            AvancarPage.toInstallments()
            cy.intercept('GET', '/images/icons/chain.svg').as('api_icons')
            cy.wait('@api_icons', { timeout: 40000 })
            GeralPedidosPage.clickEditInstallments()
            ParcelasPage.for()
            ValidateService.okInsurancePrest()
            ValidadePrestamistaPage.added() 
            GeralPagamentoPage.insertDateTomorrow1Due()
            GeralPagamentoPage.clicarGerarParcAlterarVenc()
            cy.intercept('POST', '/services/v3/pedido_forma_pagamento_lista').as('api_pedido_forma_pagamento_lista')
            cy.wait('@api_pedido_forma_pagamento_lista', { timeout: 40000 })
            ProcessoRecebPage.main();
            ParcelasPage.one()
            AvancarPage.final();
            ValidadePrestamistaPage.pageFinal()
            cy.clickFinalizarPedidoPage();
            cy.validateOrderGenerated();
        })

        it('21.Order: product 1918 0 0 (promo a prazo 167) (with insurance not separated) and 1860 0 0 (without promotion), inclusion 3876 (other receipt 3876 group), lender 158, 4 installments upon receipt Future without interest.', () => {
    
            Product.termInstallmentPrest()
            ValidateBalance.withBalance() 
            cy.clickVoltageProduct()
            cy.clickAddProduc()
            PromocaoPage.selectFirstPromoProduct()
            ProcessoRecebPromoPage.termFutWithoutFeesPrest()
            cy.clickAddProduc()
            Service.validateModalServLinked()
            ValidateService.garantiaNaoSep()
            Service.clickOKServiceLinked() )
            ValidateService.servLinked() ; ValidateService.addGarantNaoSep()
            Product.second()
            ValidateBalance.withBalance() 
            cy.selectProductSearch()
            cy.clickVoltageProduct()
            cy.clickAddProduct()
            Service.validateModalServLinked()
            Service.clickOKServiceLinked()
            AvancarPage.toTransporter()
            AvancarPage.toInstallments()
            cy.intercept('GET', '/images/icons/chain.svg').as('api_icons')
            cy.wait('@api_icons', { timeout: 40000 })
            // ValidadePrestamistaPage.added() 
            GeralPedidosPage.clickEditInstallments()
            ParcelasPage.for()
            ValidateService.okInsurancePrest()
            ValidadePrestamistaPage.added() 
            GeralPagamentoPage.insertDate31Days1Due()
            GeralPagamentoPage.clicarGerarParcAlterarVenc()
            cy.intercept('POST', '/services/v3/pedido_forma_pagamento_lista').as('api_pedido_forma_pagamento_lista')
            cy.wait('@api_pedido_forma_pagamento_lista', { timeout: 40000 })
            ProcessoRecebPage.futMoneyWithoutFees()
            cy.get('[style="position: relative"] > :nth-child(4) > div.ng-binding').click({force:true}) //escolher 4 parcelas
            AgruparRecebPage.groupReleases()
            ValidateService.messPrestRemoved()
            ValidateService.addInsurancePrest()
            GeralPedidosPage.adicionadoRecebAgrupado()
            AvancarPage.final();
            ValidadePrestamistaPage.pageFinal()
            cy.clickFinalizarPedidoPage();
            cy.validateOrderGenerated();
        })

        it('22.Order: product 1920 0 0 (promo a prazo 169) (with insurance not separated) and 1860 0 0 (without promotion), inclusion 3875 (other receipt 3874), lender 158, 4 installments upon receipt Present.', () => {

            Product.termInstallmentPrest()
            ValidateBalance.withBalance() 
            cy.clickVoltageProduct()
            cy.clickAddProduc()
            PromocaoPage.selectFirstPromoProduct()
            ProcessoRecebPromoPage.entryPresentPrest()
            cy.clickAddProduc()
            Service.validateModalServLinked()
            ValidateService.garantiaNaoSep()
            Service.clickOKServiceLinked() 
            ValidateService.servLinked() ; ValidateService.garantiaNaoSep()
            Product.second()
            ValidateBalance.withBalance() 
            cy.selectProductSearch()
            cy.clickVoltageProduct()
            cy.clickAddProduct()
            Service.validateModalServLinked()
            ValidateService.garantiaNaoSep()
            Service.clickOKServiceLinked()
            AvancarPage.toTransporter()
            AvancarPage.toInstallments()
            cy.intercept('GET', '/images/icons/chain.svg').as('api_icons')
            cy.wait('@api_icons', { timeout: 40000 })
            GeralPedidosPage.clickEditInstallments()
            ParcelasPage.for()
            ValidateService.okInsurancePrest()
            ValidadePrestamistaPage.added() 
            GeralPagamentoPage.insertDateTomorrow1Due()
            GeralPagamentoPage.clicarGerarParcAlterarVenc()
            cy.intercept('POST', '/services/v3/pedido_forma_pagamento_lista').as('api_pedido_forma_pagamento_lista')
            cy.wait('@api_pedido_forma_pagamento_lista', { timeout: 40000 })
            ProcessoRecebPage.secondForm()
            ParcelasPage.one()
            AvancarPage.final();
            ValidadePrestamistaPage.pageFinal()
            cy.clickFinalizarPedidoPage();
            cy.validateOrderGenerated();
        })

        it('23.Order: product 1920 0 0 (promo a prazo 169) (with insurance not separated) and 1860 0 0 (without promotion), inclusion 3875 (other receipt 3875 group), lender 158, 4 installments upon receipt Present.', () => {
    
            Product.termInstallmentPrest()
            ValidateBalance.withBalance() 
            cy.clickVoltageProduct()
            cy.clickAddProduc()
            PromocaoPage.selectFirstPromoProduct()
            ProcessoRecebPromoPage.entryPresentPrest()
            cy.clickAddProduc()
            Service.validateModalServLinked()
            ValidateService.garantiaNaoSep()
            Service.clickOKServiceLinked() )
            ValidateService.servLinked() ; ValidateService.addGarantNaoSep()
            Product.second()
            ValidateBalance.comSwithBalancealdo()
            cy.selectProductSearch()
            cy.clickVoltageProduct()
            cy.clickAddProduct()
            Service.validateModalServLinked()
            ValidateService.garantiaNaoSep()
            Service.clickOKServiceLinked()
            AvancarPage.toTransporter()
            AvancarPage.toInstallments()
            cy.intercept('GET', '/images/icons/chain.svg').as('api_icons')
            cy.wait('@api_icons', { timeout: 40000 })
            // ValidadePrestamistaPage.added() 
            GeralPedidosPage.clickEditInstallments()
            ParcelasPage.for()
            ValidateService.okInsurancePrest()
            ValidadePrestamistaPage.added() 
            GeralPagamentoPage.insertDate31Days1Due()
            GeralPagamentoPage.clicarGerarParcAlterarVenc()
            cy.intercept('POST', '/services/v3/pedido_forma_pagamento_lista').as('api_pedido_forma_pagamento_lista')
            cy.wait('@api_pedido_forma_pagamento_lista', { timeout: 40000 })
            ProcessoRecebPage.presentMoney()
            cy.get('[style="position: relative"] > :nth-child(4) > div.ng-binding').click({force:true}) //escolher 4 parcelas
            AgruparRecebPage.groupReleases()
            ValidateService.messPrestRemoved()
            ValidateService.addInsurancePrest()
            GeralPedidosPage.adicionadoRecebAgrupado()
            AvancarPage.final();
            ValidadePrestamistaPage.pageFinal()
            cy.clickFinalizarPedidoPage();
            cy.validateOrderGenerated();
        })
    })
})
