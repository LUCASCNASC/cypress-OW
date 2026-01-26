import { ProcessoVendaPage } from '../../../pages/pedido/ProcessoVendaPage.js'
import { Product, ValidateBalance } from '../../../pages/pedido/ProdutoPage.js'
import { Service } from '../../../pages/pedido/ServicosPage.js'
import { AvancarPage } from '../../../pages/pedido/AvancarPage.js'
import { TirarEntrega } from '../../../pages/pedido/EntregaPage.js'
import { GeralPagamentoPage } from '../../../pages/pedido/GeralPagamentoPage.js'
import { ParcelasPage } from '../../../pages/pedido/ParcelasPage.js'
import { ProcessoRecebPromoPage } from '../../../pages/pedido/ProcessoRecebPagePromoPage.js'
import { PromocaoPage } from '../../../pages/pedido/PromocaoPage.js'

describe('Orders with promotion', () => {

    beforeEach(() => {
        cy.visit('/');
        cy.clearAllSessionStorage();
        cy.login();
        cy.urlAposLogin();
        cy.tituloPagina();
        ProcessoVendaPage.NFe() 
        cy.chooseCliente();
    })

    context('Without delivery/ with promotion/ process 9860 - happy path', () => {

        it('1.Order with promotion match (promotion 152): product 1868 0 0', () => {
    
            Product.promoMatch()
            ValidateBalance.withBalance();
            cy.clickVoltageProduct();
            cy.clickAddProduc()
            PromocaoPage.selectFirstPromoProduct() 
            ProcessoRecebPromoPage.pagPrincipal();
            cy.clickAddProduct();
            Service.validateModalServLinked(); 
            Service.clickOKServiceLinked();
            TirarEntrega.freightFirst() 
            AvancarPage.toInstallments()
            cy.intercept('POST', '/services/v3/pedido_forma_pagamento_lista').as('api_pagamento_lista')
            cy.wait('@api_pagamento_lista', { timeout: 40000 })
            AvancarPage.final(); 
            cy.clickFinalizarPedidoPage();
            cy.validateOrderGenerated();
        })

        it('2.Order with promotion deadline with entry (promotion 150): product 1866 0 0', () => {

            Product.promoDeadlineEntry()
            ValidateBalance.withBalance();
            cy.clickVoltageProduct();
            cy.clickAddProduc()
            PromocaoPage.selectFirstPromoProduct() 
            ProcessoRecebPromoPage.pagPrincipal();
            cy.clickAddProduct();
            Service.validateModalServLinked(); 
            Service.clickOKServiceLinked();
            TirarEntrega.freightFirst() 
            AvancarPage.toInstallments()
    
            
            cy.get('.white > :nth-child(3)').click()
            cy.contains('3861 - T.A. A Receber A Vista').click()
    
            //Botão "PAGAMENTO"
            cy.get('.white > .layout-align-center-center > .md-primary').click()
    
            AvancarPage.final(); 
            cy.clickFinalizarPedidoPage();
            cy.validateOrderGenerated();
        })

        it('3.Order with promotion deadline installment (promotion 151): product 1867 0 0', () => {

            Product.promoDeadlineInstallment()
            ValidateBalance.withBalance();
            cy.clickVoltageProduct();
            cy.clickAddProduc()
            PromocaoPage.selectFirstPromoProduct() 
            ProcessoRecebPromoPage.pagPrincipal();
            cy.clickAddProduct();
            Service.validateModalServLinked(); 
            Service.clickOKServiceLinked();
            TirarEntrega.freightFirst() 
            AvancarPage.toInstallments()
            cy.intercept('GET', 'images/icons/chain.svg').as('api_icons')
            cy.wait('@api_icons', { timeout: 40000 })
            AvancarPage.final();
            cy.clickFinalizarPedidoPage();
            cy.validateOrderGenerated();
        })
    })

    context('Without delivery/ with promotion and without promotion/ process 9860 - happy path', () => {

        it('4.Order with promotion match (promotion 152): product 1868 0 0 and product 1870 0 0 (without promotion)', () => {
    
            Product.promoMatch()
            ValidateBalance.withBalance();
            cy.clickVoltageProduct();
            cy.clickAddProduc()
            PromocaoPage.selectFirstPromoProduct() 
            ProcessoRecebPromoPage.pagPrincipal();
            cy.clickAddProduct();
            Service.validateModalServLinked(); 
            Service.clickOKServiceLinked();
            TirarEntrega.freightFirst() 
            Product.second();
            ValidateBalance.withBalance();
            cy.selectProductSearch();
            cy.clickVoltageProduct();
            cy.clickAddProduct();
            Service.validateModalServLinked(); 
            Service.clickOKServiceLinked();
            TirarEntrega.freightSecond() 
            AvancarPage.toInstallments()
            GeralPagamentoPage.clickGenerateInstallments(); 

            //Escolher forma de pagamento
            cy.contains('3868 - T.A. A Receber PIX TEF').click({force:true})
            cy.intercept('GET', '/services/v3/pedido_forma_pagamento').as('api_pedido_forma_pagamento')
            cy.wait('@api_pedido_forma_pagamento', { timeout: 40000 })
            //Escolher parcelamento
            //cy.get('.active > md-collapsible-body > .layout-column > [style="position: relative"] > :nth-child(1) > div.ng-binding').click({force:true})

            // AvancarPage.final();
            // cy.clickFinalizarPedidoPage(); //RESUMO
            // cy.validateOrderGenerated();
        })

        it('5.Order with promotion deadline with entry (promotion 150): product 1866 0 0 and product 1870 0 0 (without promotion)', () => {
    
            Product.promoDeadlineEntry()
            ValidateBalance.withBalance();
            cy.clickVoltageProduct();
            cy.clickAddProduc()
            PromocaoPage.selectFirstPromoProduct() 
            ProcessoRecebPromoPage.pagPrincipal();
            cy.clickAddProduct();
            Service.validateModalServLinked(); 
            Service.clickOKServiceLinked();
            TirarEntrega.freightFirst() 
            Product.second();
            ValidateBalance.withBalance();
            cy.selectProductSearch();
            cy.clickVoltageProduct();
            cy.clickAddProduct();
            Service.validateModalServLinked(); 
            Service.clickOKServiceLinked();
            TirarEntrega.freightSecond() 
            AvancarPage.toInstallments()

             
            cy.get('.layout-row.flex-100 > :nth-child(1) > .md-fab').should('be.visible').click({force:true})
            cy.get('.white > :nth-child(3)').click({force:true})
            cy.contains('div.md-text', '3861 - T.A. A Receber A Vista').click({force:true}) //Escolher forma de pagamento entrada
            cy.get('.white > .layout-align-center-center > .md-primary').click({force:true}) //clicar PAGAMENTO
    
            AvancarPage.final();
            cy.clickFinalizarPedidoPage();
            cy.validateOrderGenerated();
        })
    })

    context('With delivery / with promotion / process 9860 - happy path', () => {

        it('6.Order with promotion match (promotion 152): product 1868 0 0', () => {
    
            Product.promoMatch()
            ValidateBalance.withBalance();
            cy.clickVoltageProduct();
            cy.clickAddProduc()
            PromocaoPage.selectFirstPromoProduct()
            ProcessoRecebPromoPage.pagPrincipal();
            cy.clickAddProduct();
            Service.validateModalServLinked(); 
            Service.clickOKServiceLinked();
            AvancarPage.toTransporter();
            AvancarPage.toInstallments() 
            cy.intercept('POST', '/services/v3/pedido_forma_pagamento_lista').as('api_pagamento_lista')
            cy.wait('@api_pagamento_lista', { timeout: 40000 })
            GeralPagamentoPage.insertDateTomorrow1Due()
            GeralPagamentoPage.clicarGerarParcAlterarVenc()
            Receipt.principal()
            ParcelasPage.one()
            AvancarPage.final();
            cy.clickFinalizarPedidoPage();
            cy.validateOrderGenerated();
        })

        it('7.Order with promotion deadline with entry (promotion 150): product 1866 0 0', () => {

            Product.promoDeadlineEntry()
            ValidateBalance.withBalance();
            cy.clickVoltageProduct();
            cy.clickAddProduc()
            PromocaoPage.selectFirstPromoProduct() 
            ProcessoRecebPromoPage.pagPrincipal();
            cy.clickAddProduct();
            Service.validateModalServLinked(); 
            Service.clickOKServiceLinked();
            AvancarPage.toTransporter();
            AvancarPage.toInstallments()
            cy.intercept('GET', 'images/icons/chain.svg').as('api_icons')
            cy.wait('@api_icons', { timeout: 40000 })

            GeralPagamentoPage.insertDateTomorrow1Due()
            cy.get('.gerar-parcelas > .layout-wrap > [style="padding: 0 5px"] > .md-primary').click({force:true})
            Receipt.main()
            ParcelasPage.one()
        })

        it('8.Order with promotion deadline installment (promotion 151): product 1867 0 0', () => {
    
            Product.promoDeadlineInstallment()
            ValidateBalance.withBalance();
            cy.clickVoltageProduct();
            cy.clickAddProduc()
            PromocaoPage.selectFirstPromoProduct() 
            ProcessoRecebPromoPage.pagPrincipal();
            cy.clickAddProduct();
            Service.validateModalServLinked(); 
            Service.clickOKServiceLinked();
            AvancarPage.toTransporter();
            AvancarPage.toInstallments()
            GeralPagamentoPage.clickGenerateInstallments(); 

            //Escolher a forma de pagamento
            cy.get('[style=""] > md-collapsible-header.layout-row > .md-collapsible-tools > .ng-scope').click({force:true})
            //Escolher a forma de pagamento/parcelas
            cy.get('.active > md-collapsible-body > .layout-column > [style="position: relative"] > :nth-child(1) > div.ng-binding').click({force:true})

            AvancarPage.final();
            cy.clickFinalizarPedidoPage();
            cy.validateOrderGenerated();
        })  
    }) 

    context('With delivery/ with promotion and without promotion/ process 9860 - happy path', () => {

        it('9.Order with promotion match (promotion 152): product 1868 0 0 and product 1870 0 0 (without promotion)', () => {
    
            Product.promoMatch()
            ValidateBalance.withBalance();
            cy.clickVoltageProduct();
            cy.clickAddProduc()
            PromocaoPage.selectFirstPromoProduct() 
            ProcessoRecebPromoPage.pagPrincipal();
            cy.clickAddProduct();
            Service.validateModalServLinked(); 
            Service.clickOKServiceLinked();
            Product.second();
            ValidateBalance.withBalance();
            cy.selectProductSearch();
            cy.clickVoltageProduct();
            cy.clickAddProduct();
            Service.clickOKServiceLinked(); 
            AvancarPage.toTransporter();
            AvancarPage.toInstallments()
            GeralPagamentoPage.clickGenerateInstallments(); 

            //Escolher forma de pagemento
            cy.get('[style=""] > md-collapsible-header.layout-row > .md-collapsible-tools > .ng-scope').click({force: true})
            //Escolher parcelamento
            cy.get('.active > md-collapsible-body > .layout-column > [style="position: relative"] > :nth-child(1) > div.ng-binding').click({force: true})

            AvancarPage.final();
            cy.clickFinalizarPedidoPage();
            cy.validateOrderGenerated();
        })
    })
})