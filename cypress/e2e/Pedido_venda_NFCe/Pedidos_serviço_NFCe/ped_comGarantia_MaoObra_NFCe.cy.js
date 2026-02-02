import { ProcessoVendaPage } from '../../../pages/pedido/ProcessoVendaPage.js';
import { Product, ValidateBalance } from '../../../pages/pedido/ProdutoPage.js';
import { AvancarPage } from '../../../pages/pedido/AvancarPage.js';
import { EntregaPage } from '../../../pages/pedido/EntregaPage.js';
import { GeralPagamentoPage } from '../../../pages/pedido/GeralPagamentoPage.js';
import { ParcelasPage } from '../../../pages/pedido/ParcelasPage.js';
import { ProcessoRecebPage } from '../../../pages/pedido/ProcessoRecebPage.js';
import { Service } from '../../../pages/pedido/ServicosPage.js';

describe('Orders with Warranty and Labor with Delivery', () => {

    beforeEach(() => {
        cy.visit('/');
        cy.clearAllSessionStorage();
        cy.login();
        cy.urlAposLogin();
        cy.tituloPagina(); 
        ProcessoVendaPage.NFCe();
        cy.chooseCliente();
    })

    context('With delivery/Process 9890 - happy path', () => {

        it('1.Order: product 1860 0 0 (with Warranty that separates title in the same process and Labor that highlights and does not separate)', () => {

            Product.fisrt();
            ValidateBalance.withBalance();
            cy.selectProductSearch();
            cy.clickVoltageProduct();
            cy.clickAddProduct();
            Service.validateModalServLinked();
            Service.garantiaSepMesmoProc();
            Service.maoObraDestNãoSep();
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

        it('2.Order: product 1860 0 0 (with Warranty that separates title in the same process and Labor that highlights and does not separate) and product 1870 0 0 (without service)', () => {

            Product.fisrt();
            ValidateBalance.withBalance();
            cy.selectProductSearch();
            cy.clickVoltageProduct();
            cy.clickAddProduct();
            Service.validateModalServLinked();
            Service.garantiaSepMesmoProc();
            Service.maoObraDestNãoSep();
            Service.clickOKServiceLinked(); 
            Product.second();
            ValidateBalance.withBalance();
            cy.selectProductSearch();
            cy.clickVoltageProduct();
            cy.clickAddProduct();
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

        it('3.Order: product 1860 0 0 (with Warranty that separates title in the same process and Labor that does not highlight and separates in the same process)', () => {

            Product.fisrt();
            ValidateBalance.withBalance();
            cy.selectProductSearch();
            cy.clickVoltageProduct();
            cy.clickAddProduct();
            Service.validateModalServLinked();
            Service.garantiaSepMesmoProc();
            Service.maoObraNaoDestSepMesmoProc();
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

        it('4.Order: product 1860 0 0 (with Warranty that separates title in the same process and Labor that does not highlight and separates in the same process) and product 1870 0 0 (without service)', () => {

            Product.fisrt();
            ValidateBalance.withBalance();
            cy.selectProductSearch();
            cy.clickVoltageProduct();
            cy.clickAddProduct();
            Service.validateModalServLinked();
            Service.garantiaSepMesmoProc();
            Service.maoObraNaoDestSepMesmoProc();
            Service.clickOKServiceLinked(); 
            Product.second();
            ValidateBalance.withBalance();
            cy.selectProductSearch();
            cy.clickVoltageProduct();
            cy.clickAddProduct();
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

        it('5.Order: product 1860 0 0 (with Warranty that separates title in the same process and Labor that does not highlight and separates in another process)', () => {

            Product.fisrt();
            ValidateBalance.withBalance();
            cy.selectProductSearch();
            cy.clickVoltageProduct();
            cy.clickAddProduct();
            Service.validateModalServLinked();
            Service.garantiaSepMesmoProc();
            Service.maoObraNaoDestSepaProcDif();
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

        it('6.Order: product 1860 0 0 (with Warranty that separates title in the same process and Labor that does not highlight and separates in another process) and product 1870 0 0 (without service)', () => {

            Product.fisrt();
            ValidateBalance.withBalance();
            cy.selectProductSearch();
            cy.clickVoltageProduct();
            cy.clickAddProduct();
            Service.validateModalServLinked();
            Service.garantiaSepMesmoProc();
            Service.maoObraNaoDestSepaProcDif();
            Service.clickOKServiceLinked(); 
            Product.second();
            ValidateBalance.withBalance();
            cy.withBalance();
            cy.clickVoltageProduct();
            cy.clickAddProduct();
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

        it('7.Order: product 1860 0 0 (with Warranty that does not separate and Labor that highlights and does not separate)', () => {

            Product.fisrt();
            ValidateBalance.withBalance();
            cy.selectProductSearch();
            cy.clickVoltageProduct();
            cy.clickAddProduct();
            Service.validateModalServLinked();
            Service.garantiaNaoSep();
            Service.maoObraDestNãoSep();
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

        it('8.Order: product 1860 0 0 (with Warranty that does not separate and Labor that highlights and does not separate) and product 1870 0 0 (without service)', () => {

            Product.fisrt();
            ValidateBalance.withBalance();
            cy.selectProductSearch();
            cy.clickVoltageProduct();
            cy.clickAddProduct();
            Service.validateModalServLinked();
            Service.garantiaNaoSep();
            Service.maoObraDestNãoSep();
            Service.clickOKServiceLinked(); 
            Product.second();
            ValidateBalance.withBalance();
            cy.selectProductSearch();
            cy.clickVoltageProduct();
            cy.clickAddProduct();
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

        it('9.Order: product 1860 0 0 (with Warranty that does not separate and Labor that does not highlight and separates in the same process)', () => {

            Product.fisrt();
            ValidateBalance.withBalance();
            cy.selectProductSearch();
            cy.clickVoltageProduct();
            cy.clickAddProduct();
            Service.validateModalServLinked();
            Service.garantiaNaoSep();
            Service.maoObraNaoDestSepMesmoProc();
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

        it('10.Order: product 1860 0 0 (with Warranty that does not separate and Labor that does not highlight and separates in the same process) and product 1870 0 0 (without service)', () => {

            Product.fisrt();
            ValidateBalance.withBalance();
            cy.selectProductSearch();
            cy.clickVoltageProduct();
            cy.clickAddProduct();
            Service.validateModalServLinked();
            Service.garantiaNaoSep();
            Service.maoObraNaoDestSepMesmoProc();
            Service.clickOKServiceLinked(); 
            Product.second();
            ValidateBalance.withBalance();
            cy.selectProductSearch();
            cy.clickVoltageProduct();
            cy.clickAddProduct();
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

        it('11.Order: product 1860 0 0 (with Warranty that does not separate and Labor that does not highlight and separates in another process)', () => {

            Product.fisrt();
            ValidateBalance.withBalance();
            cy.selectProductSearch();
            cy.clickVoltageProduct();
            cy.clickAddProduct();
            Service.validateModalServLinked();
            Service.garantiaNaoSep();
            Service.maoObraNaoDestSepaProcDif();
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

        it('12.Order: product 1860 0 0 (with Warranty that does not separate and Labor that does not highlight and separates in another process) and product 1870 0 0 (without service)', () => {

            Product.fisrt();
            ValidateBalance.withBalance();
            cy.selectProductSearch();
            cy.clickVoltageProduct();
            cy.clickAddProduct();
            Service.validateModalServLinked();
            Service.garantiaNaoSep();
            Service.maoObraNaoDestSepaProcDif();
            Service.clickOKServiceLinked(); 
            Product.second();
            ValidateBalance.withBalance();
            cy.selectProductSearch();
            cy.clickVoltageProduct();
            cy.clickAddProduct();
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

        it('13.Order: product 1860 0 0 (with Warranty that separates in a different process and Labor that highlights and does not separate)', () => {

            Product.fisrt();
            ValidateBalance.withBalance();
            cy.selectProductSearch();
            cy.clickVoltageProduct();
            cy.clickAddProduct();
            Service.validateModalServLinked();
            Service.garantiaSepTituloProcDif();
            Service.maoObraDestNãoSep();
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

        it('14.Order: product 1860 0 0 (with Warranty that separates in a different process and Labor that highlights and does not separate) and product 1870 0 0 (without service)', () => {

            Product.fisrt();
            ValidateBalance.withBalance();
            cy.selectProductSearch();
            cy.clickVoltageProduct();
            cy.clickAddProduct();
            Service.validateModalServLinked();
            Service.garantiaSepTituloProcDif();
            Service.maoObraDestNãoSep();
            Service.clickOKServiceLinked(); 
            Product.second();
            ValidateBalance.withBalance();
            cy.selectProductSearch();
            cy.clickVoltageProduct();
            cy.clickAddProduct();
            Service.validateModalServLinked(); 
            Service.clickOKServiceLinked();
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

        it('15.Order: product 1860 0 0 (with Warranty that separates in a different process and Labor that does not highlight and separates in the same process)', () => {

            Product.fisrt();
            ValidateBalance.withBalance();
            cy.selectProductSearch();
            cy.clickVoltageProduct();
            cy.clickAddProduct();
            Service.validateModalServLinked();
            Service.garantiaSepTituloProcDif();
            Service.maoObraNaoDestSepMesmoProc();
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

        it('16.Order: product 1860 0 0 (with Warranty that separates in a different process and Labor that does not highlight and separates in the same process) and product 1870 0 0 (without service)', () => {

            Product.fisrt();
            ValidateBalance.withBalance();
            cy.selectProductSearch();
            cy.clickVoltageProduct();
            cy.clickAddProduct();
            Service.validateModalServLinked();
            Service.garantiaSepTituloProcDif();
            Service.maoObraNaoDestSepMesmoProc();
            Service.clickOKServiceLinked(); 
            Product.second();
            ValidateBalance.withBalance();
            cy.selectProductSearch();
            cy.clickVoltageProduct();
            cy.clickAddProduct();
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

        it('17.Order: product 1860 0 0 (with Warranty that separates in a different process and Labor that does not highlight and separates in another process)', () => {

            Product.fisrt();
            ValidateBalance.withBalance();
            cy.selectProductSearch();
            cy.clickVoltageProduct();
            cy.clickAddProduct();
            Service.validateModalServLinked();
            Service.garantiaSepTituloProcDif();
            Service.maoObraNaoDestSepaProcDif();
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

        it('18.Order: product 1860 0 0 (with Warranty that separates in a different process and Labor that does not highlight and separates in another process) and product 1870 0 0 (without service)', () => {

            Product.fisrt();
            ValidateBalance.withBalance();
            cy.selectProductSearch();
            cy.clickVoltageProduct();
            cy.clickAddProduct();
            Service.validateModalServLinked();
            Service.garantiaSepTituloProcDif();
            Service.maoObraNaoDestSepaProcDif();
            Service.clickOKServiceLinked(); 
            Product.second();
            ValidateBalance.withBalance();
            cy.selectProductSearch();
            cy.clickVoltageProduct();
            cy.clickAddProduct();
            ServiServiceco.validateModalServLinked();
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