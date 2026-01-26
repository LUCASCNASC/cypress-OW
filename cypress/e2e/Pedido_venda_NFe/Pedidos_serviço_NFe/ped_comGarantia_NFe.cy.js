import { ProcessoVendaPage } from '../../../pages/pedido/ProcessoVendaPage.js'
import { Product, ValidateBalance } from '../../../pages/pedido/ProdutoPage.js'
import { AvancarPage } from '../../../pages/pedido/AvancarPage.js'
import { TirarEntrega } from '../../../pages/pedido/EntregaPage.js'
import { GeralPagamentoPage } from '../../../pages/pedido/GeralPagamentoPage.js'
import { ParcelasPage } from '../../../pages/pedido/ParcelasPage.js'
import { ProcessoRecebPage } from '../../../pages/pedido/ProcessoRecebPage.js'
import { Service, ValidateService } from '../../../pages/pedido/ServicosPage.js'

describe('Orders with Guarantee', () => {

    beforeEach(() => {
        cy.visit('/');
        cy.clearAllSessionStorage();
        cy.login();
        cy.urlAposLogin();
        cy.tituloPagina(); 
        ProcessoVendaPage.NFe() 
        cy.chooseCliente();
    })   

    context('Without delivery/process 9860 - happy path', () => {

        it('1.Order: product 1860 0 0 (with Guarantee that separates title in the same process)', () => {
    
            Product.fisrt();
            ValidateBalance.withBalance();
            cy.selectProductSearch();
            cy.clickVoltageProduct();
            cy.clickAddProduct();
            Service.maoObraNaoDestSepMesmoProc() 
            Service.clickOKServiceLinked();  
            ValidateService.servLinked() ; ValidateService.AddGarantSepMesmoProc()
            TirarEntrega.freightFirst() 
            AvancarPage.toInstallments() 
            GeralPagamentoPage.clickGenerateInstallments(); 
            GeralPagamentoPage.loadingFormPayment(); 
            ProcessoRecebPage.main();
            ParcelasPage.two();
            AvancarPage.final();
            cy.clickFinalizarPedidoPage();
            cy.validateOrderGenerated();
        })

        it('2.Order: product 1860 0 0 (with Guarantee that separates title in the same process) and product 1870 0 0 (without service)', () => {
    
            Product.fisrt();
            ValidateBalance.withBalance();
            cy.selectProductSearch();
            cy.clickVoltageProduct();
            cy.clickAddProduct();
            Service.maoObraNaoDestSepMesmoProc() 
            Service.clickOKServiceLinked(); 
            ValidateService.servLinked() ; ValidateService.AddGarantSepMesmoProc()
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
            GeralPagamentoPage.loadingFormPayment(); 
            ProcessoRecebPage.main();
            ParcelasPage.two();
            AvancarPage.final();
            cy.clickFinalizarPedidoPage();
            cy.validateOrderGenerated();
        })

        it('3.Order: product 1860 0 0 (with Guarantee that does not separate title)', () => {

            Product.fisrt();
            ValidateBalance.withBalance();
            cy.selectProductSearch();
            cy.clickVoltageProduct();
            cy.clickAddProduct();
            Service.maoObraDestNãoSep() 
            Service.clickOKServiceLinked(); 
            ValidateService.servLinked() ; ValidateService.addGarantNaoSep()
            TirarEntrega.freightFirst() 
            AvancarPage.toInstallments()
            GeralPagamentoPage.clickGenerateInstallments(); 
            GeralPagamentoPage.loadingFormPayment(); 
            ProcessoRecebPage.main();
            ParcelasPage.two();
            AvancarPage.final();
            cy.clickFinalizarPedidoPage();
            cy.validateOrderGenerated();
        })

        it('4.Order: product 1860 0 0 (with Guarantee that does not separate title) and product 1870 0 0 (without service)', () => {
    
            Product.fisrt();
            ValidateBalance.withBalance();
            cy.selectProductSearch();
            cy.clickVoltageProduct();
            cy.clickAddProduct();
            Service.maoObraDestNãoSep() 
            Service.clickOKServiceLinked(); 
            ValidateService.servLinked() ; ValidateService.addGarantNaoSep()
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
            GeralPagamentoPage.loadingFormPayment(); 
            ProcessoRecebPage.main();
            ParcelasPage.two();
            AvancarPage.final();
            cy.clickFinalizarPedidoPage();
            cy.validateOrderGenerated();
        })

        it('5.Order: product 1860 0 0 (with Guarantee that separates title in a different process)', () => {

            Product.fisrt();
            ValidateBalance.withBalance();
            cy.selectProductSearch();
            cy.clickVoltageProduct();
            cy.clickAddProduct();
            Service.maoObraNaoDestSepaProcDif() 
            Service.clickOKServiceLinked(); 
            ValidateService.servLinked() ; ValidateService.addGarantSepTituloProcDif()
            TirarEntrega.freightFirst() 
            AvancarPage.toInstallments() 
            GeralPagamentoPage.clickGenerateInstallments(); 
            GeralPagamentoPage.loadingFormPayment(); 
            ProcessoRecebPage.main();
            ParcelasPage.two();
            AvancarPage.final();
            cy.clickFinalizarPedidoPage();
            cy.validateOrderGenerated();
        })

        it('6.Order: product 1860 0 0 (with Guarantee that separates title in a different process) and product 1870 0 0 (without service)', () => {
    
            Product.fisrt();
            ValidateBalance.withBalance();
            cy.selectProductSearch();
            cy.clickVoltageProduct();
            cy.clickAddProduct();
            Service.maoObraNaoDestSepaProcDif() 
            Service.clickOKServiceLinked(); 
            ValidateService.servLinked() ; ValidateService.addGarantSepTituloProcDif()
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
            GeralPagamentoPage.loadingFormPayment(); 
            ProcessoRecebPage.main();
            ParcelasPage.two();
            AvancarPage.final();
            cy.clickFinalizarPedidoPage();
            cy.validateOrderGenerated();
        })
    })

    context('With delivery/process 9860 - happy path', () => {

        it('7.Order: product 1860 0 0 (with Guarantee that separates title in the same process)', () => {
    
            Product.fisrt();
            ValidateBalance.withBalance();
            cy.selectProductSearch();
            cy.clickVoltageProduct();
            cy.clickAddProduct();
            Service.maoObraNaoDestSepMesmoProc() 
            Service.clickOKServiceLinked(); 
            ValidateService.servLinked() ; ValidateService.AddGarantSepMesmoProc()
            AvancarPage.toTransporter();
            AvancarPage.toInstallments()
            GeralPagamentoPage.clickGenerateInstallments(); 
            GeralPagamentoPage.loadingFormPayment(); 
            ProcessoRecebPage.main();
            ParcelasPage.two();
            AvancarPage.final();
            cy.clickFinalizarPedidoPage();
            cy.validateOrderGenerated();
        })

        it('8.Order: product 1860 0 0 (with Guarantee that separates title in the same process) and product 1870 0 0 (without service)', () => {
    
            Product.fisrt();
            ValidateBalance.withBalance();
            cy.selectProductSearch();
            cy.clickVoltageProduct();
            cy.clickAddProduct();
            Service.maoObraNaoDestSepMesmoProc() 
            Service.clickOKServiceLinked(); 
            ValidateService.servLinked() ; ValidateService.AddGarantSepMesmoProc()
            Product.second();
            ValidateBalance.withBalance();
            cy.selectProductSearch();
            cy.clickVoltageProduct();
            cy.clickAddProduct();
            Service.validateModalServLinked();  
            Service.clickOKServiceLinked(); 
            AvancarPage.toTransporter();
            AvancarPage.toInstallments()
            GeralPagamentoPage.clickGenerateInstallments(); 
            GeralPagamentoPage.loadingFormPayment(); 
            ProcessoRecebPage.main();
            ParcelasPage.two();
            AvancarPage.final();
            cy.clickFinalizarPedidoPage();
            cy.validateOrderGenerated();
        })

        it('9.Order: product 1860 0 0 (with Guarantee that does not separate title)', () => {
    
            Product.fisrt();
            ValidateBalance.withBalance();
            cy.selectProductSearch();
            cy.clickVoltageProduct();
            cy.clickAddProduct();
            Service.maoObraDestNãoSep() 
            Service.clickOKServiceLinked(); 
            ValidateService.servLinked() ; ValidateService.addGarantNaoSep()
            AvancarPage.toTransporter();
            AvancarPage.toInstallments()
            GeralPagamentoPage.clickGenerateInstallments(); 
            GeralPagamentoPage.loadingFormPayment(); 
            ProcessoRecebPage.main();
            ParcelasPage.two();
            AvancarPage.final();
            cy.clickFinalizarPedidoPage();
            cy.validateOrderGenerated();
        })

        it('10.Order: product 1860 0 0 (with Guarantee that does not separate title) and product 1870 0 0 (without service)', () => {
    
            Product.fisrt();
            ValidateBalance.withBalance();
            cy.selectProductSearch();
            cy.clickVoltageProduct();
            cy.clickAddProduct();
            Service.maoObraDestNãoSep() 
            Service.clickOKServiceLinked(); 
            ValidateService.servLinked() ; ValidateService.addGarantNaoSep()
            Product.second();
            ValidateBalance.withBalance();
            cy.selectProductSearch();
            cy.clickVoltageProduct();
            cy.clickAddProduct();
            Service.validateModalServLinked();  
            Service.clickOKServiceLinked(); 
            AvancarPage.toTransporter();
            AvancarPage.toInstallments()
            GeralPagamentoPage.clickGenerateInstallments(); 
            GeralPagamentoPage.loadingFormPayment(); 
            ProcessoRecebPage.main();
            ParcelasPage.two();
            AvancarPage.final();
            cy.clickFinalizarPedidoPage();
            cy.validateOrderGenerated();
        })

        it('11.Order: product 1860 0 0 (with Guarantee that separates title in a different process)', () => {
    
            Product.fisrt();
            ValidateBalance.withBalance();
            cy.selectProductSearch();
            cy.clickVoltageProduct();
            cy.clickAddProduct();
            Service.maoObraNaoDestSepaProcDif() 
            Service.clickOKServiceLinked(); 
            ValidateService.servLinked() ; ValidateService.addGarantSepTituloProcDif()
            AvancarPage.toTransporter();
            AvancarPage.toInstallments() 
            GeralPagamentoPage.clickGenerateInstallments(); 
            GeralPagamentoPage.loadingFormPayment(); 
            ProcessoRecebPage.main();
            ParcelasPage.two();
            AvancarPage.final();
            cy.clickFinalizarPedidoPage();
            cy.validateOrderGenerated();
        })

        it('12.Order: product 1860 0 0 (with Guarantee that separates title in a different process) and product 1870 0 0 (without service)', () => {
    
            Product.fisrt();
            ValidateBalance.withBalance();
            cy.selectProductSearch();
            cy.clickVoltageProduct();
            cy.clickAddProduct();
            Service.maoObraNaoDestSepaProcDif() 
            Service.clickOKServiceLinked(); 
            ValidateService.servLinked() ; ValidateService.addGarantSepTituloProcDif()
            Product.second();
            ValidateBalance.withBalance();
            cy.selectProductSearch();
            cy.clickVoltageProduct();
            cy.clickAddProduct();
            Service.clickOKServiceLinked(); 
            AvancarPage.toTransporter();
            AvancarPage.toInstallments()
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