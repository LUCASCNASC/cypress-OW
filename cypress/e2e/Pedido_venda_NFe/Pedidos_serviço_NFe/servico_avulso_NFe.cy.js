import { ProcessoVendaPage } from '../../../pages/pedido/ProcessoVendaPage.js'
import { AvancarPage } from '../../../pages/pedido/AvancarPage.js'
import { GeralPagamentoPage } from '../../../pages/pedido/GeralPagamentoPage.js'
import { ParcelasPage } from '../../../pages/pedido/ParcelasPage.js'
import { ProcessoRecebPage } from '../../../pages/pedido/ProcessoRecebPage.js'
import { ServicosAvulsosPage } from '../../../pages/pedido/ServicosAvulsosPage.js'

describe('Sale of individual services', () => {

    beforeEach(() => {
        cy.visit('/');
        cy.clearAllSessionStorage();
        cy.login();
        cy.urlAposLogin();
        cy.tituloPagina(); 
        ProcessoVendaPage.saleServiceLoose();
        cy.chooseCliente();
    })

    context('Process 9888 - happy path', () => {

        it('1.Labor Request - 144 (T.A. MO Does Not Highlight and Separate Different Process)', () => {

            ServicosAvulsosPage.productServiceLoose();
            ServicosAvulsosPage.chooseServiceSearch();
            ServicosAvulsosPage.messItemAddedSucess();
            ServicosAvulsosPage.clickCartShopping();
            ServicosAvulsosPage.serviceAddedCart();
            ServicosAvulsosPage.buttonAdvanceOrder();
            GeralPagamentoPage.clickGenerateInstallments(); 
            GeralPagamentoPage.loadingFormPayment();
            ProcessoRecebPage.main();
            ParcelasPage.two();
            AvancarPage.final();
            cy.clickFinalizarPedidoPage();
            cy.validateOrderGenerated();
        })
    })
})