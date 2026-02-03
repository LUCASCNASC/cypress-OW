import { ProcessoVendaPage } from '../../../pages/pedido/ProcessoVendaPage.js';
import { Product, ValidateBalance } from '../../../pages/pedido/ProdutoPage.js';
import { Service } from '../../../pages/pedido/ServicosPage.js';
import { AvancarPage } from '../../../pages/pedido/AvancarPage.js';
import { EntregaPage } from '../../../pages/pedido/EntregaPage.js';
import { GeralPagamentoPage } from '../../../pages/pedido/GeralPagamentoPage.js';
import { ParcelasPage } from '../../../pages/pedido/ParcelasPage.js';
import { ProcessoRecebPage } from '../../../pages/pedido/ProcessoRecebPage.js';
import { GeralPedidosPage } from '../../../pages/pedido/GeralPedidosPage.js';

describe('Normal order with delivery', () => {

    beforeEach(() => {
        cy.visit('/');
        cy.clearAllSessionStorage();
        cy.login();
        cy.urlAposLogin();
        cy.validateTitlePage();
        ProcessoVendaPage.NFCe();
        cy.chooseCliente();
    })
    
    context('With delivery/process 9890 - happy path', () => {
        
        it('1.Order: kit 1862 0 0', () => {
                
            Product.kitFirst();
            ValidateBalance.withBalance();
            cy.selectProductSearch();
            cy.clickVoltageProduct();
            GeralPedidosPage.compositionKit();
            cy.clickAddProduc();
            Service.validateModalServLinked(); 
            Service.clickOKServiceLinked();
            AvancarPage.toTransporter();
            EntregaPage.modalInconsOnlyTransporter();
            EntregaPage.chooseTransporter();
            AvancarPage.installmentDelivery();
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