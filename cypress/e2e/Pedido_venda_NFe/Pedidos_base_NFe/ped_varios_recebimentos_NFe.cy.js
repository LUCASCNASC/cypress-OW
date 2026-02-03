import { ProcessoVendaPage } from '../../../pages/pedido/ProcessoVendaPage.js';
import { Product, ValidateBalance } from '../../../pages/pedido/ProdutoPage.js';
import { Service } from '../../../pages/pedido/ServicosPage.js';
import { AvancarPage } from '../../../pages/pedido/AvancarPage.js';
import { TirarEntrega } from '../../../pages/pedido/EntregaPage.js';
import { GeralPagamentoPage } from '../../../pages/pedido/GeralPagamentoPage.js';
import { ParcelasPage } from '../../../pages/pedido/ParcelasPage.js';
import { AgruparRecebPage } from '../../../pages/pedido/AgruparRecebPage.js';
import { ProcessoRecebPage } from '../../../pages/pedido/ProcessoRecebPage.js';

describe('Order with more than one payment method', () => {

    beforeEach(() => {
        cy.visit('/');
        cy.clearAllSessionStorage();
        cy.login();
        cy.urlAposLogin();
        cy.validateTitlePage
        ();
        ProcessoVendaPage.NFe();
        cy.chooseCliente();
    })

    context('No delivery/ process 9860 - happy path', () => {

        it('1.Order: product 1860 0 0 - two payment methods 3871 and 3860', () => {

            Product.fisrt();
            ValidateBalance.withBalance();
            cy.selectProductSearch();
            cy.clickVoltageProduct();
            cy.clickAddProduc();
            Service.validateModalServLinked(); 
            Service.clickOKServiceLinked();
            TirarEntrega.freightFirst();
            AvancarPage.toInstallments();
            AgruparRecebPage.firstValueInstallment();
            GeralPagamentoPage.clickGenerateInstallments();  
            GeralPagamentoPage.carregandoFormaPagamento();
            ProcessoRecebPage.debitTEF();
            ParcelasPage.one();
            GeralPagamentoPage.clickGenerateInstallments();  
            GeralPagamentoPage.carregandoFormaPagamento();
            ProcessoRecebPage.main(); 
            ParcelasPage.two();
            AvancarPage.final();
            cy.clickFinalizarPedidoPage();
            cy.validateOrderGenerated();
        })

        it('2.Order: product 1860 0 0 - with entry (3861) and another payment method (3860)', () => {

            Product.fisrt();
            ValidateBalance.withBalance();
            cy.selectProductSearch();
            cy.clickVoltageProduct();
            cy.clickAddProduc();
            Service.validateModalServLinked(); 
            Service.clickOKServiceLinked();
            TirarEntrega.freightFirst();
            AvancarPage.toInstallments();
            GeralPagamentoPage.chooseEntryFormPayment();
            GeralPagamentoPage.clicarGerarPagamento();
            GeralPagamentoPage.clickGenerateInstallments();  
            GeralPagamentoPage.carregandoFormaPagamento()
            ProcessoRecebPage.main(); 
            ParcelasPage.two();
            AvancarPage.final();
            cy.clickFinalizarPedidoPage();
            cy.validateOrderGenerated();
        })

        it('3.Order: product 1860 0 0 - two payment methods (3860) - click to NOT group', () => {

            Product.fisrt();
            ValidateBalance.withBalance();
            cy.selectProductSearch();
            cy.clickVoltageProduct();
            cy.clickAddProduc();
            Service.validateModalServLinked(); 
            Service.clickOKServiceLinked();
            TirarEntrega.freightFirst();
            AvancarPage.toInstallments();
            AgruparRecebPage.firstValueInstallment() 
            GeralPagamentoPage.clickGenerateInstallments();  
            GeralPagamentoPage.carregandoFormaPagamento();
            ProcessoRecebPage.main();
            ParcelasPage.one();
            GeralPagamentoPage.clickGenerateInstallments();  
            GeralPagamentoPage.carregandoFormaPagamento();
            ProcessoRecebPage.main(); 
            ParcelasPage.one();
            AgruparRecebPage.notGroupReleases();
            AvancarPage.final();
            cy.clickFinalizarPedidoPage();
            cy.validateOrderGenerated();
        })

        it('4.Order: product 1860 0 0 - two identical payment methods (3860) - click to group YES', () => {

            Product.fisrt();
            ValidateBalance.withBalance();
            cy.selectProductSearch();
            cy.clickVoltageProduct();
            cy.clickAddProduc();
            Service.validateModalServLinked(); 
            Service.clickOKServiceLinked();
            TirarEntrega.freightFirst();
            AvancarPage.toInstallments();
            AgruparRecebPage.firstValueInstallment();
            GeralPagamentoPage.clickGenerateInstallments();
            GeralPagamentoPage.carregandoFormaPagamento()
            ProcessoRecebPage.main();
            ParcelasPage.one();
            GeralPagamentoPage.clickGenerateInstallments();
            GeralPagamentoPage.carregandoFormaPagamento();
            ProcessoRecebPage.main();
            ParcelasPage.one();
            AgruparRecebPage.groupReleases();
            AvancarPage.final();
            cy.clickFinalizarPedidoPage();
            cy.validateOrderGenerated();
        })

        it('5.Order: product 1860 0 0 - two identical payment methods (3860) - click to NOT group, but then group by selecting both.', () => {

            Product.fisrt();
            ValidateBalance.withBalance();
            cy.selectProductSearch();
            cy.clickVoltageProduct();
            cy.clickAddProduc();
            Service.validateModalServLinked(); 
            Service.clickOKServiceLinked();
            TirarEntrega.freightFirst();
            AvancarPage.toInstallments();
            AgruparRecebPage.firstValueInstallment();
            GeralPagamentoPage.clickGenerateInstallments(); 
            GeralPagamentoPage.carregandoFormaPagamento();
            ProcessoRecebPage.main();
            ParcelasPage.one();
            GeralPagamentoPage.clickGenerateInstallments(); 
            GeralPagamentoPage.carregandoFormaPagamento();
            ProcessoRecebPage.main(); 
            AgruparRecebPage.notGroupReleases();
            AgruparRecebPage.selectReleasesGroup();
            AgruparRecebPage.clickGroup();
            AvancarPage.final();
            cy.clickFinalizarPedidoPage();
            cy.validateOrderGenerated();
        })
    })
})