import { ProcessoVendaPage } from '../../../pages/pedido/ProcessoVendaPage.js'
import { Product, ValidateBalance } from '../../../pages/pedido/ProdutoPage.js'
import { Service } from '../../../pages/pedido/ServicosPage.js'
import { AvancarPage } from '../../../pages/pedido/AvancarPage.js'
import { FinalizarPedidoPage } from '../../../../pages/pedido/finalizar_pedido.js'
import { TirarEntrega } from '../../../pages/pedido/EntregaPage.js'
import { GeralPagamentoPage } from '../../../pages/pedido/GeralPagamentoPage.js'
import { ParcelasPage } from '../../../pages/pedido/ParcelasPage.js'
import { ProcessoRecebPage } from '../../../pages/pedido/ProcessoRecebPage.js'

describe('Application with credit proposal', () => {

    beforeEach(() => {
        cy.visit('/');
        cy.clearAllSessionStorage();
        cy.login();
        cy.urlAposLogin();
        cy.tituloPagina();
        ProcessoVendaPage.NFe() 
        cy.chooseCliente();
    })

    context('No delivery/ process 9860 - happy path', () => {

        it('1.Order: product 1860 0 0 - (Sales order without delivery, with credit proposal.)', () => {

            Product.fisrt()
            ValidateBalance.withBalance() 
            cy.selectProductSearch()
            cy.clickVoltageProduct()
            cy.clickAddProduc()
            Service.validateModalServLinked() 
            Service.clickOKServiceLinked()
            TirarEntrega.freightFirst() 
            AvancarPage.toInstallments()
            GeralPagamentoPage.clickGenerateInstallments(); 
            GeralPagamentoPage.loadingFormPayment();
            ProcessoRecebPage.proposalCredit()
            ParcelasPage.one()
            AvancarPage.final();
            cy.clickFinalizarPedidoPage();
            FinalizarPedidoPage.validatePropCreditGenerated()
            cy.validateOrderGenerated();
        })
    })
})