import { ProcessoVendaPage } from '../../../pages/pedido/ProcessoVendaPage.js'
import { Product, ValidateBalance } from '../../../pages/pedido/ProdutoPage.js'
import { Service, ValidateService } from '../../../pages/pedido/ServicosPage.js'
import { AvancarPage } from '../../../pages/pedido/AvancarPage.js'
import { TirarEntrega } from '../../../pages/pedido/EntregaPage.js'
import { ProcessoRecebPromoPage } from '../../../pages/pedido/ProcessoRecebPagePromoPage.js'
import { PromocaoPage } from '../../../../pages/pedido/promocao/promocao.js'
import { ValidadePrestamistaPage } from '../../../pages/pedido/ValidadePrestamistaPage.js'
import { ProcessoRecebPage } from '../../../pages/pedido/ProcessoRecebPage.js'
import { PromocaoPage } from '../../../pages/pedido/PromocaoPage.js'

describe('Orders with promotions and interest-free services', () => {

    beforeEach(() => {
        cy.visit('/');
        cy.clearAllSessionStorage();
        cy.login();
        cy.urlAposLogin();
        cy.tituloPagina();
        ProcessoVendaPage.NFe();
        cy.chooseCliente();
    })

    context('Without delivery/ with promotion/ with service process 9860 - happy path', () => {

        it('1.Order with promotion deadline installment (promotion 159): product 1891 0 0 with guarantee (interest-free)', () => {
    
            Product.firstInstallmentDeadline();
            ValidateBalance.withBalance();
            cy.clickVoltageProduct();
            cy.clickAddProduc();
            PromocaoPage.typeServiceFreeValidate();
            PromocaoPage.selectFirstPromoProduct();
            ProcessoRecebPromoPage.pagPrincipal();
            cy.clickAddProduct();
            Service.validateModalServLinked(); 
            Service.garantiaSepMesmoProc();
            Service.clickOKServiceLinked();
            ValidateService.servLinked() ; ValidateService.addMONaoDestSepMesmoProc();
            TirarEntrega.freightFirst();
            AvancarPage.toInstallments();
            cy.intercept('POST', '/services/v3/pedido_forma_pagamento_lista').as('api_pedido_forma_pagamento_lista');
            cy.wait('@api_pedido_forma_pagamento_lista', { timeout: 40000 });
            AvancarPage.final();
            cy.clickFinalizarPedidoPage();
            cy.validateOrderGenerated();
        })

        it('2.Order with promotion deadline with entry + installments (promotion 158): product 1895 0 0 with guarantee (interest-free)', () => {

            Product.secondInstallmentDeadline();
            ValidateBalance.withBalance();
            cy.clickVoltageProduct();
            cy.clickAddProduc();
            PromocaoPage.typeServiceFreeValidate();
            PromocaoPage.selectFirstPromoProduct();
            ProcessoRecebPromoPage.pagPrincipal();
            cy.clickAddProduct();
            Service.validateModalServLinked(); 
            Service.garantiaSepMesmoProc() 
            Service.clickOKServiceLinked();
            ValidateService.servLinked(); ValidateService.addMONaoDestSepMesmoProc();
            TirarEntrega.freightFirst();
            AvancarPage.toInstallments();
            cy.intercept('POST', '/services/v3/pedido_forma_pagamento_lista').as('api_pedido_forma_pagamento_lista');
            cy.wait('@api_pedido_forma_pagamento_lista', { timeout: 40000 });

            //Selecionando opções de pagamento de entrada
            cy.get('md-option .md-text')
                .contains('3861 - T.A. A Receber A Vista')
                .click({force:true});

            //Selecionando processo de receber entrada
            cy.contains('div.md-text.ng-binding', '3861 - T.A. A Receber A Vista')
                .should('be.visible')
                .click({force:true});

            //Clicando no botão PAGAMENTO da entrada
            cy.get('.white > .layout-align-center-center > .md-primary')
                .should('be.visible')
                .and('not.be.disabled')
                .and('contain','Pagamento')
                .click({force:true});

            AvancarPage.final();
            cy.clickFinalizarPedidoPage(); //RESUMO
            cy.validateOrderGenerated();
        })

        it('3.Order with promotion deadline installment (promotion 161): product 1893 0 0 with moneylender (interest-free)', () => {

            Product.thirdInstallmentDeadline();
            ValidateBalance.withBalance();
            cy.clickVoltageProduct();
            cy.clickAddProduc();
            PromocaoPage.selectFirstPromoProduct();
            ProcessoRecebPage.withMoneylender();
            cy.clickAddProduct();
            Service.validateModalServLinked(); 
            Service.clickOKServiceLinked();
            ValidateService.servLinked(); ValidateService.addMONaoDestSepMesmoProc()
            TirarEntrega.freightFirst();
            AvancarPage.toInstallments();
            cy.intercept('POST', '/services/v3/pedido_forma_pagamento_lista').as('api_pedido_forma_pagamento_lista');
            cy.wait('@api_pedido_forma_pagamento_lista', { timeout: 40000 });
            PromocaoPage.addPrestamista();
            ValidadePrestamistaPage.added();
            AvancarPage.final();
            ValidadePrestamistaPage.pageFinal();
            cy.clickFinalizarPedidoPage();
            cy.validateOrderGenerated();
        })

        it('4.Order with promotion deadline installment (promotion 162): product 1894 0 0 with guarantee (interest-free) and moneylender (with interest)', () => {
    
            Product.fourthInstallmentDeadline();
            ValidateBalance.withBalance();
            cy.clickVoltageProduct();
            cy.clickAddProduc();
            PromocaoPage.typeServiceFreeValidate();
            PromocaoPage.selectFirstPromoProduct();
            ProcessoRecebPage.withMoneylender();
            cy.clickAddProduct();
            Service.validateModalServLinked(); 
            Service.garantiaSepMesmoProc();
            Service.clickOKServiceLinked();
            ValidateService.servLinked(); ValidateService.AddGarantSepMesmoProc();
            TirarEntrega.freightFirst();
            AvancarPage.toInstallments();
            cy.intercept('POST', '/services/v3/pedido_forma_pagamento_lista').as('api_pedido_forma_pagamento_lista');
            cy.wait('@api_pedido_forma_pagamento_lista', { timeout: 40000 });
            PromocaoPage.addPrestamista();
            ValidadePrestamistaPage.added();
            AvancarPage.final();
            ValidadePrestamistaPage.pageFinal();
            cy.clickFinalizarPedidoPage();
            cy.validateOrderGenerated();
        })
    })
 })