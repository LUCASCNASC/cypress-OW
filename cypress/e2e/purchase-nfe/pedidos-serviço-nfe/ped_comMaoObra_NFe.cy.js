import { ProcessoVendaPage } from '../../../pages/pedido/ProcessoVendaPage.js';
import { Product, ValidateBalance } from '../../../pages/pedido/ProdutoPage.js';
import { AvancarPage } from '../../../pages/pedido/AvancarPage.js';
import { TirarEntrega } from '../../../pages/pedido/EntregaPage.js';
import { GeralPagamentoPage } from '../../../pages/pedido/GeralPagamentoPage.js';
import { ParcelasPage } from '../../../pages/pedido/ParcelasPage.js';
import { ProcessoRecebPage } from '../../../pages/pedido/ProcessoRecebPage.js';
import { Service, ValidateService } from '../../../pages/pedido/ServicosPage.js';

describe('Orders with Labor', () => {

    beforeEach(() => {
        cy.visit('/');
        cy.clearAllSessionStorage();
        cy.login();
        cy.validateTitlePage();
        ProcessoVendaPage.NFe();
        cy.chooseCliente();
    })

    context('Without delivery/process 9860 - happy path', () => {

        it('1.Order: product 1860 0 0 (with Labor that Highlights and Does Not Separate Title)', () => {
    
            Product.fisrt();
            ValidateBalance.withBalance();
            cy.selectProductSearch();
            cy.clickVoltageProduct();
            cy.clickAddProduct();
            Service.garantiaNaoSep(); 
            Service.clickOKServiceLinked(); 
            ValidateService.servLinked(); ValidateService.addMODestNãoSepara();
            TirarEntrega.freightFirst(); 
            AvancarPage.toInstallments(); 
            GeralPagamentoPage.clickGenerateInstallments(); 
            GeralPagamentoPage.loadingFormPayment(); 
            ProcessoRecebPage.main();
            ParcelasPage.two();
            AvancarPage.final();
            cy.clickFinalizarPedidoPage();
            cy.validateOrderGenerated();
        })

        it('2.Order: product 1860 0 0 (with Labor that Highlights and Does Not Separate Title) and product 1870 0 0 (without service)', () => {

            Product.fisrt();
            ValidateBalance.withBalance();
            cy.selectProductSearch();
            cy.clickVoltageProduct();
            cy.clickAddProduct();
            Service.garantiaNaoSep();  
            Service.clickOKServiceLinked(); 
            ValidateService.servLinked(); ValidateService.addMODestNãoSepara();
            TirarEntrega.freightFirst(); 
            Product.second();
            ValidateBalance.withBalance();
            cy.selectProductSearch();
            cy.clickVoltageProduct();
            cy.clickAddProduct();
            Service.validateModalServLinked();  
            Service.clickOKServiceLinked();
            TirarEntrega.freightSecond(); 
            AvancarPage.toInstallments();
            GeralPagamentoPage.clickGenerateInstallments(); 
            GeralPagamentoPage.loadingFormPayment(); 
            ProcessoRecebPage.main();
            ParcelasPage.two();
            AvancarPage.final();
            cy.clickFinalizarPedidoPage();
            cy.validateOrderGenerated();
        })

        it('3.Order: product 1860 0 0 (with Labor that Does Not Highlight and Separates Title in Same Process)', () => {

            Product.fisrt();
            ValidateBalance.withBalance();
            cy.selectProductSearch();
            cy.clickVoltageProduct();
            cy.clickAddProduct();
            Service.garantiaSepMesmoProc(); 
            Service.clickOKServiceLinked(); 
            ValidateService.servLinked(); ValidateService.addMONaoDestSepMesmoProc();
            TirarEntrega.freightFirst(); 
            AvancarPage.toInstallments();  
            GeralPagamentoPage.clickGenerateInstallments(); 
            GeralPagamentoPage.loadingFormPayment(); 
            ProcessoRecebPage.main();
            ParcelasPage.two();
            AvancarPage.final();
            cy.clickFinalizarPedidoPage();
            cy.validateOrderGenerated();
        })

        it('4.Order: product 1860 0 0 (with Labor that Does Not Highlight and Separates Title in Same Process) and product 1870 0 0 (without service)', () => {
    
            Product.fisrt();
            ValidateBalance.withBalance();
            cy.selectProductSearch();
            cy.clickVoltageProduct();
            cy.clickAddProduct();
            Service.garantiaSepMesmoProc(); 
            Service.clickOKServiceLinked(); 
            ValidateService.servLinked(); ValidateService.addMONaoDestSepMesmoProc();
            TirarEntrega.freightFirst() 
            Product.second();
            ValidateBalance.withBalance();
            cy.selectProductSearch();
            cy.clickVoltageProduct();
            cy.clickAddProduct();
            Service.validateModalServLinked();  
            Service.clickOKServiceLinked();
            TirarEntrega.freightSecond(); 
            AvancarPage.toInstallments(); 
            GeralPagamentoPage.clickGenerateInstallments(); 
            GeralPagamentoPage.loadingFormPayment(); 
            ProcessoRecebPage.main();
            ParcelasPage.two();
            AvancarPage.final();
            cy.clickFinalizarPedidoPage();
            cy.validateOrderGenerated();
        })

        it('5.Order: product 1860 0 0 (with Labor that Does Not Highlight and Separates Title in Different Process)', () => {

            Product.fisrt();
            ValidateBalance.withBalance();
            cy.selectProductSearch();
            cy.clickVoltageProduct();
            cy.clickAddProduct();
            Service.garantiaSepTituloProcDif(); 
            Service.clickOKServiceLinked(); 
            ValidateService.servViservLinkednc(); ValidateService.addMONaoDestSepProcDif();
            TirarEntrega.freightFirst(); 
            AvancarPage.toInstallments(); 
            GeralPagamentoPage.clickGenerateInstallments(); 
            GeralPagamentoPage.loadingFormPayment(); 
            ProcessoRecebPage.main();
            ParcelasPage.two();
            AvancarPage.final();
            cy.clickFinalizarPedidoPage();
            cy.validateOrderGenerated();
        })

        it('6.Order: product 1860 0 0 (with Labor that Does Not Highlight and Separates Title in Different Process) and product 1870 0 0 (without service)', () => {

            Product.fisrt();
            ValidateBalance.withBalance();
            cy.selectProductSearch();
            cy.clickVoltageProduct();
            cy.clickAddProduct();
            Service.garantiaSepTituloProcDif(); 
            Service.clickOKServiceLinked(); 
            ValidateService.servLinked(); ValidateService.addMONaoDestSepProcDif();
            TirarEntrega.freightFirst() 
            Product.second();
            ValidateBalance.withBalance();
            cy.selectProductSearch();
            cy.clickVoltageProduct();
            cy.clickAddProduct();
            Service.validateModalServLinked();  
            Service.clickOKServiceLinked();
            TirarEntrega.freightSecond(); 
            AvancarPage.toInstallments(); 
            GeralPagamentoPage.clickGenerateInstallments(); 
            GeralPagamentoPage.loadingFormPayment(); 
            ProcessoRecebPage.main();
            ParcelasPage.two();
            AvancarPage.final();
            cy.clickFinalizarPedidoPage();
            cy.validateOrderGenerated();
        })
    })

    context('With delivery/process 9860 - happy path', () => {

        it('7.Order: product 1860 0 0 (with Labor that Highlights and Does Not Separate Title)', () => {
    
            Product.fisrt();
            ValidateBalance.withBalance();
            cy.selectProductSearch();
            cy.clickVoltageProduct();
            cy.clickAddProduct();
            Service.garantiaNaoSep();  
            Service.clickOKServiceLinked(); 
            ValidateService.servLinked(); ValidateService.addMODestNãoSepara();
            AvancarPage.toTransporter();
            AvancarPage.toInstallments();
            GeralPagamentoPage.clickGenerateInstallments(); 
            GeralPagamentoPage.loadingFormPayment(); 
            ProcessoRecebPage.main();
            ParcelasPage.two();
            AvancarPage.final();
            cy.clickFinalizarPedidoPage();
            cy.validateOrderGenerated();
        })

        it('8.Order: product 1860 0 0 (with Labor that Highlights and Does Not Separate Title) and product 1870 0 0 (without service)', () => {

            Product.fisrt();
            ValidateBalance.withBalance();
            cy.selectProductSearch();
            cy.clickVoltageProduct();
            cy.clickAddProduct();
            Service.garantiaNaoSep();  
            Service.clickOKServiceLinked(); 
            ValidateService.servLinked(); ValidateService.addMODestNãoSepara();
            Product.second();
            ValidateBalance.withBalance();
            cy.selectProductSearch();
            cy.clickVoltageProduct();
            cy.clickAddProduct();
            Service.validateModalServLinked();  
            Service.clickOKServiceLinked(); 
            AvancarPage.toTransporter();
            AvancarPage.toInstallments();
            GeralPagamentoPage.clickGenerateInstallments(); 
            GeralPagamentoPage.loadingFormPayment(); 
            ProcessoRecebPage.main();
            ParcelasPage.two();
            AvancarPage.final();
            cy.clickFinalizarPedidoPage();
            cy.validateOrderGenerated();
        })

        it('9.Order: product 1860 0 0 (with Labor that Does Not Highlight and Separates Title in Same Process)', () => {
    
            Product.fisrt();
            ValidateBalance.withBalance();
            cy.selectProductSearch();
            cy.clickVoltageProduct();
            cy.clickAddProduct();
            Service.garantiaSepMesmoProc(); 
            Service.clickOKServiceLinked(); 
            ValidateService.servLinked(); ValidateService.addMONaoDestSepMesmoProc();
            AvancarPage.toTransporter();
            AvancarPage.toInstallments();
            GeralPagamentoPage.clickGenerateInstallments(); 
            GeralPagamentoPage.loadingFormPayment(); 
            ProcessoRecebPage.main();
            ParcelasPage.two();
            AvancarPage.final();
            cy.clickFinalizarPedidoPage();
            cy.validateOrderGenerated();
        })

        it('10.Order: product 1860 0 0 (with Labor that Does Not Highlight and Separates Title in Same Process) and product 1870 0 0 (without service)', () => {
    
            Product.fisrt();
            ValidateBalance.withBalance();
            cy.selectProductSearch();
            cy.clickVoltageProduct();
            cy.clickAddProduct();
            Service.garantiaSepMesmoProc() 
            Service.clickOKServiceLinked(); 
            ValidateService.servLinked(); ValidateService.addMONaoDestSepMesmoProc();
            Product.second();
            ValidateBalance.withBalance();
            cy.selectProductSearch();
            cy.clickVoltageProduct();
            cy.clickAddProduct();
            Service.validateModalServLinked();
            Service.clickOKServiceLinked(); 
            AvancarPage.toTransporter();
            AvancarPage.toInstallments();
            GeralPagamentoPage.clickGenerateInstallments(); 
            GeralPagamentoPage.loadingFormPayment(); 
            ProcessoRecebPage.main();
            ParcelasPage.two();
            AvancarPage.final();
            cy.clickFinalizarPedidoPage();
            cy.validateOrderGenerated();
        })

        it('11.Order: product 1860 0 0 (with Labor that Does Not Highlight and Separates Title in Different Process)', () => {
    
            Product.fisrt();
            ValidateBalance.withBalance();
            cy.selectProductSearch();
            cy.clickVoltageProduct();
            cy.clickAddProduct();
            Service.garantiaSepTituloProcDif(); 
            Service.clickOKServiceLinked(); 
            ValidateService.servLinked(); ValidateService.addMONaoDestSepProcDif();
            AvancarPage.toTransporter();
            AvancarPage.toInstallments();
            GeralPagamentoPage.clickGenerateInstallments(); 
            GeralPagamentoPage.loadingFormPayment(); 
            ProcessoRecebPage.main();
            ParcelasPage.two();
            AvancarPage.final();
            cy.clickFinalizarPedidoPage();
            cy.validarPedvalidateOrderGeneratedGerado()
        })

        it('12.Order: product 1860 0 0 (with labor that does not highlight and separate title in a different process) and product 1870 0 0 (without service)', () => {
    
            Product.fisrt();
            ValidateBalance.withBalance();
            cy.selectProductSearch();
            cy.clickVoltageProduct();
            cy.clickAddProduct();
            Service.garantiaSepTituloProcDif(); 
            Service.clickOKServiceLinked(); 
            ValidateService.servLinked(); ValidateService.addMONaoDestSepProcDif();
            Product.second();
            ValidateBalance.withBalance();
            cy.selectProductSearch();
            cy.clickVoltageProduct();
            cy.clickAddProduct();
            Service.validateModalServLinked();  
            Service.clickOKServiceLinked(); 
            AvancarPage.toTransporter();
            AvancarPage.toInstallments();
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