import { ProcessoVendaPage } from '../../../pages/pedido/ProcessoVendaPage.js';
import { Product, ValidateBalance } from '../../../pages/pedido/ProdutoPage.js';
import { AvancarPage } from '../../../pages/pedido/AvancarPage.js';
import { TirarEntrega } from '../../../pages/pedido/EntregaPage.js';
import { GeralPagamentoPage } from '../../../pages/pedido/GeralPagamentoPage.js';
import { ParcelasPage } from '../../../pages/pedido/ParcelasPage.js';
import { ProcessoRecebPage } from '../../../pages/pedido/ProcessoRecebPage.js';
import { Service, ValidateService } from '../../../pages/pedido/ServicosPage.js';

describe('Orders with Warranty and Labor', () => {

    beforeEach(() => {
        cy.visit('/');
        cy.clearAllSessionStorage();
        cy.login();
        cy.urlAposLogin();
        cy.tituloPagina(); 
        ProcessoVendaPage.NFe(); 
        cy.chooseCliente();
    })

    context('Without delivery/process 9860 - happy path', () => {

        it('1.Order: product 1860 0 0 (with Warranty that separates title in the same process and Labor that highlights and does not separate)', () => {
            
            Product.fisrt();
            ValidateBalance.withBalance();
            cy.selectProductSearch();
            cy.clickVoltageProduct();
            cy.clickAddProduct();
            Service.validateModalServLinked();
            Service.maoObraNaoDestSepMesmoProc();
            Service.garantiaNaoSep();
            Service.clickOKServiceLinked(); 
            ValidateService.servLinked(); ValidateService.AddGarantSepMesmoProc(); ValidateService.addMODestNãoSepara()
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

        it('2.Order: product 1860 0 0 (with Warranty that separates title in the same process and Labor that highlights and does not separate) and product 1870 0 0 (without service)', () => {

            Product.fisrt();
            ValidateBalance.withBalance();
            cy.selectProductSearch();
            cy.clickVoltageProduct();
            cy.clickAddProduct();
            Service.validateModalServLinked();
            Service.maoObraNaoDestSepMesmoProc();
            Service.garantiaNaoSep();
            Service.clickOKServiceLinked(); 
            ValidateService.servLinked(); ValidateService.AddGarantSepMesmoProc(); ValidateService.addMODestNãoSepara()
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

        it('3.Order: product 1860 0 0 (with Warranty that separates title in the same process and Labor that does not highlight and separates in the same process)', () => {

            Product.fisrt();
            ValidateBalance.withBalance();
            cy.selectProductSearch();
            cy.clickVoltageProduct();
            cy.clickAddProduct();
            Service.maoObraNaoDestSepMesmoProc(); 
            Service.garantiaSepMesmoProc(); 
            Service.clickOKServiceLinked(); 
            ValidateService.servLinked(); ValidateService.AddGarantSepMesmoProc(); ValidateService.addMONaoDestSepMesmoProc()
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

        it('4.Order: product 1860 0 0 (with Warranty that separates title in the same process and Labor that does not highlight and separates in the same process) and product 1870 0 0 (without service)', () => {

            Product.fisrt();
            ValidateBalance.withBalance();
            cy.selectProductSearch();
            cy.clickVoltageProduct();
            cy.clickAddProduct();
            Service.maoObraNaoDestSepMesmoProc();
            Service.garantiaSepMesmoProc(); 
            Service.clickOKServiceLinked(); 
            ValidateService.servLinked(); ValidateService.AddGarantSepMesmoProc(); ValidateService.addMONaoDestSepMesmoProc()
            TirarEntrega.freightFirst() 
            Product.second();
            ValidateBalance.withBalance();
            cy.selectProductSearch();
            cy.clickVoltageProduct();
            cy.clickAddProduct();
            Servico.clickOKServiceLinked();  
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

        it('5.Order: product 1860 0 0 (with Warranty that separates title in the same process and Labor that does not highlight and separates in another process)', () => {

            Product.fisrt();
            ValidateBalance.withBalance();
            cy.selectProductSearch();
            cy.clickVoltageProduct();
            cy.clickAddProduct();
            Service.maoObraNaoDestSepMesmoProc(); 
            Service.garantiaSepTituloProcDif(); 
            Service.clickOKServiceLinked(); 
            ValidateService.servLinked(); ValidateService.AddGarantSepMesmoProc(); ValidateService.addMONaoDestSepProcDif()
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

        it('6.Order: product 1860 0 0 (with Warranty that separates title in the same process and Labor that does not highlight and separates in another process) and product 1870 0 0 (without service)', () => {

            Product.fisrt();
            ValidateBalance.withBalance();
            cy.selectProductSearch();
            cy.clickVoltageProduct();
            cy.clickAddProduct();
            Service.maoObraNaoDestSepMesmoProc(); 
            Service.garantiaSepTituloProcDif(); 
            Service.clickOKServiceLinked(); 
            ValidateService.servLinked(); ValidateService.AddGarantSepMesmoProc(); ValidateService.addMONaoDestSepProcDif()
            TirarEntrega.freightFirst(); 
            Product.second();
            ValidateBalance.withBalance();
            cy.selectProductSearch();
            cy.clickVoltageProduct();
            cy.clickAddProduct();
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

        it('7.Order: product 1860 0 0 (with warranty that does not separate and labor that detaches and does not separate)', () => {

            Product.fisrt();
            ValidateBalance.withBalance();
            cy.selectProductSearch();
            cy.clickVoltageProduct();
            cy.clickAddProduct();
            Service.maoObraDestNãoSep(); 
            Service.garantiaNaoSep();
            Service.clickOKServiceLinked(); 
            ValidateService.servLinked(); ValidateService.addGarantNaoSep(); ValidateService.addMODestNãoSepara()
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

        it('8.Order: product 1860 0 0 (with warranty that does not separate and labor that detaches and does not separate) and product 1870 0 0 (without service)', () => {

            Product.fisrt();
            ValidateBalance.withBalance();
            cy.selectProductSearch();
            cy.clickVoltageProduct();
            cy.clickAddProduct();
            Service.maoObraDestNãoSep(); 
            Service.garantiaNaoSep();
            Service.clickOKServiceLinked(); 
            ValidateService.servLinked(); ValidateService.addGarantNaoSep(); ValidateService.addMODestNãoSepara()
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

        it('9.Order: product 1860 0 0 (with warranty that does not separate and labor that does not detach and separates in the same process)', () => {

            Product.fisrt();
            ValidateBalance.withBalance();
            cy.selectProductSearch();
            cy.clickVoltageProduct();
            cy.clickAddProduct();
            Service.maoObraDestNãoSep(); 
            Service.garantiaSepMesmoProc();
            Service.clickOKServiceLinked(); 
            ValidateService.servLinked(); ValidateService.addGarantNaoSep(); ValidateService.addMONaoDestSepMesmoProc()
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

        it('10.Order: product 1860 0 0 (with warranty that does not separate and labor that does not detach and separates in the same process) and product 1870 0 0 (without service)', () => {

            Product.fisrt();
            ValidateBalance.withBalance();
            cy.selectProductSearch();
            cy.clickVoltageProduct();
            cy.clickAddProduct();
            Service.maoObraDestNãoSep(); 
            Service.garantiaSepMesmoProc(); 
            Service.clickOKServiceLinked(); 
            ValidateService.servLinked(); ValidateService.addGarantNaoSep(); ValidateService.addMONaoDestSepMesmoProc()
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

        it('11.Order: product 1860 0 0 (with warranty that does not separate and labor that does not detach and separates in another process)', () => {

            Product.fisrt();
            ValidateBalance.withBalance();
            cy.selectProductSearch();
            cy.clickVoltageProduct();
            cy.clickAddProduct();
            Service.maoObraDestNãoSep();
            Service.garantiaSepTituloProcDif(); 
            Service.clickOKServiceLinked(); 
            ValidateService.servLinked(); ValidateService.addGarantNaoSep(); ValidateService.addMONaoDestSepProcDif()
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

        it('12.Order: product 1860 0 0 (with warranty that does not separate and labor that does not detach and separates in another process) and product 1870 0 0 (without service)', () => {

            Product.fisrt();
            ValidateBalance.withBalance();
            cy.selectProductSearch();
            cy.clickVoltageProduct();
            cy.clickAddProduct();
            Service.maoObraDestNãoSep(); 
            Service.garantiaSepTituloProcDif();
            Service.clickOKServiceLinked(); 
            ValidateService.servLinked(); ValidateService.addGarantNaoSep(); ValidateService.addMONaoDestSepProcDif()
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

        it('13.Order: product 1860 0 0 (with warranty that separates in a different process and labor that detaches and does not separate)', () => {

            Product.fisrt();
            ValidateBalance.withBalance();
            cy.selectProductSearch();
            cy.clickVoltageProduct();
            cy.clickAddProduct();
            Service.maoObraNaoDestSepaProcDif(); 
            Service.garantiaNaoSep(); 
            Service.clickOKServiceLinked(); 
            ValidateService.servLinked(); ValidateService.addGarantNaoSep(); ValidateService.addMONaoDestSepProcDif()
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

        it('14.Order: product 1860 0 0 (with warranty that separates in a different process and labor that detaches and does not separate) and product 1870 0 0 (without service)', () => {

            Product.fisrt();
            ValidateBalance.withBalance();
            cy.selectProductSearch();
            cy.clickVoltageProduct();
            cy.clickAddProduct();
            Service.maoObraNaoDestSepaProcDif(); 
            Service.garantiaNaoSep(); 
            Service.clickOKServiceLinked(); 
            ValidateService.servLinked(); ValidateService.addGarantNaoSep(); ValidateService.addMONaoDestSepProcDif()
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

        it('15.Order: product 1860 0 0 (with warranty that separates in a different process and labor that does not detach and separates in the same process)', () => {

            Product.fisrt();
            ValidateBalance.withBalance();
            cy.selectProductSearch();
            cy.clickVoltageProduct();
            cy.clickAddProduct();
            Service.maoObraNaoDestSepaProcDif(); 
            Service.garantiaSepMesmoProc(); 
            Service.clickOKServiceLinked(); 
            ValidateService.servLinked(); ValidateService.addGarantSepMesmoProc(); ValidateService.addMONaoDestSepMesmoProc();
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

        it('16.Order: product 1860 0 0 (with warranty that separates in a different process and labor that does not detach and separates in the same process) and product 1870 0 0 (without service)', () => {

            Product.fisrt();
            ValidateBalance.withBalance();
            cy.selectProductSearch();
            cy.clickVoltageProduct();
            cy.clickAddProduct();
            Service.maoObraNaoDestSepaProcDif(); 
            Service.garantiaSepMesmoProc(); 
            Service.clickOKServiceLinked(); 
            ValidateService.servLinked(); ValidateService.addGarantSepMesmoProc(); ValidateService.addMONaoDestSepMesmoProc();
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

        it('17.Order: product 1860 0 0 (with warranty that separates in a different process and labor that does not detach and separates in another process)', () => {

            Product.fisrt();
            ValidateBalance.withBalance();
            cy.selectProductSearch();
            cy.clickVoltageProduct();
            cy.clickAddProduct();
            Service.maoObraNaoDestSepaProcDif();
            Service.garantiaSepTituloProcDif();
            Service.clickOKServiceLinked(); 
            ValidateService.servLinked(); ValidateService.addGarantSepTituloProcDif(); ValidateService.addMONaoDestSepProcDif();
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

        it('18.Order: product 1860 0 0 (with warranty that separates in a different process and labor that does not detach and separates in another process) and product 1870 0 0 (without service)', () => {

            Product.fisrt();
            ValidateBalance.withBalance();
            cy.selectProductSearch();
            cy.clickVoltageProduct();
            cy.clickAddProduct();
            Service.maoObraNaoDestSepaProcDif();
            Service.garantiaSepTituloProcDif();
            Service.clickOKServiceLinked(); 
            ValidateService.servLinked(); ValidateService.addGarantSepTituloProcDif(); ValidateService.addMONaoDestSepProcDif();
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
    })

    context('With delivery/process 9860 - happy path', () => {

        it('19.Order: product 1860 0 0 (with warranty that separates title in the same process and labor that detaches and does not separate)', () => {

            Product.fisrt();
            ValidateBalance.withBalance();
            cy.selectProductSearch();
            cy.clickVoltageProduct();
            cy.clickAddProduct();
            Service.maoObraNaoDestSepMesmoProc(); 
            Service.garantiaNaoSep();
            Service.clickOKServiceLinked(); 
            ValidateService.servLinked(); ValidateService.AddGarantSepMesmoProc(); ValidateService.addMODestNãoSepara();
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

        it('20.Order: product 1860 0 0 (with warranty that separates title in the same process and labor that detaches and does not separate) and product 1870 0 0 (without service)', () => {

            Product.fisrt();
            ValidateBalance.withBalance();
            cy.selectProductSearch();
            cy.clickVoltageProduct();
            cy.clickAddProduct();
            Service.maoObraNaoDestSepMesmoProc(); 
            Service.garantiaNaoSep(); 
            Service.clickOKServiceLinked(); 
            ValidateService.servLinked(); ValidateService.AddGarantSepMesmoProc(); ValidateService.addMODestNãoSepara();
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

        it('21.Order: product 1860 0 0 (with warranty that separates title in the same process and labor that does not detach and separates in the same process)', () => {

            Product.fisrt();
            ValidateBalance.withBalance();
            cy.selectProductSearch();
            cy.clickVoltageProduct();
            cy.clickAddProduct();
            Service.maoObraNaoDestSepMesmoProc() 
            Service.garantiaSepMesmoProc();
            Service.clickOKServiceLinked(); 
            ValidateService.servLinked(); ValidateService.AddGarantSepMesmoProc(); ValidateService.addMONaoDestSepMesmoProc();
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

        it('22.Order: product 1860 0 0 (with warranty that separates title in the same process and labor that does not detach and separates in the same process) and product 1870 0 0 (without service)', () => {

            Product.fisrt();
            ValidateBalance.withBalance();
            cy.selectProductSearch();
            cy.clickVoltageProduct();
            cy.clickAddProduct();
            Service.maoObraNaoDestSepMesmoProc(); 
            Service.garantiaSepMesmoProc(); 
            Service.clickOKServiceLinked(); 
            ValidateService.servLinked(); ValidateService.AddGarantSepMesmoProc(); ValidateService.addMONaoDestSepMesmoProc();
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

        it('23.Order: product 1860 0 0 (with warranty that separates title in the same process and labor that does not detach and separates in another process)', () => {

            Product.fisrt();
            ValidateBalance.withBalance();
            cy.selectProductSearch();
            cy.clickVoltageProduct();
            cy.clickAddProduct();
            Service.maoObraNaoDestSepMesmoProc(); 
            Service.garantiaSepTituloProcDif(); 
            Service.clickOKServiceLinked(); 
            ValidateService.servLinked(); ValidateService.AddGarantSepMesmoProc(); ValidateService.addMONaoDestSepProcDif();
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

        it('24.Order: product 1860 0 0 (with warranty that separates title in the same process and labor that does not detach and separates in another process) and product 1870 0 0 (without service)', () => {

            Product.fisrt();
            ValidateBalance.withBalance();
            cy.selectProductSearch();
            cy.clickVoltageProduct();
            cy.clickAddProduct();
            Service.maoObraNaoDestSepMesmoProc(); 
            Service.garantiaSepTituloProcDif(); 
            Service.clickOKServiceLinked(); 
            ValidateService.servLinked(); ValidateService.AddGarantSepMesmoProc(); ValidateService.addMONaoDestSepProcDif();
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

        it('25.Order: product 1860 0 0 (with warranty that does not separate and labor that detaches and does not separate)', () => {

            Product.fisrt();
            ValidateBalance.withBalance();
            cy.selectProductSearch();
            cy.clickVoltageProduct();
            cy.clickAddProduct();
            Service.maoObraDestNãoSep(); 
            Service.garantiaNaoSep();
            Service.clickOKServiceLinked(); 
            ValidateService.servLinked(); ValidateService.addGarantNaoSep(); ValidateService.addMODestNãoSepara();
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

        it('26.Order: product 1860 0 0 (with warranty that does not separate and labor that detaches and does not separate) and product 1870 0 0 (without service)', () => {

            Product.fisrt();
            ValidateBalance.withBalance();
            cy.selectProductSearch();
            cy.clickVoltageProduct();
            cy.clickAddProduct();
            Service.maoObraDestNãoSep(); 
            Service.garantiaNaoSep();
            Service.clickOKServiceLinked(); 
            ValidateService.servLinked(); ValidateService.addGarantNaoSep(); ValidateService.addMODestNãoSepara();
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

        it('27.Order: product 1860 0 0 (with warranty that does not separate and labor that does not detach and separates in the same process)', () => {

            Product.fisrt();
            ValidateBalance.withBalance();
            cy.selectProductSearch();
            cy.clickVoltageProduct();
            cy.clickAddProduct();
            Service.maoObraDestNãoSep(); 
            Service.garantiaSepMesmoProc(); 
            Service.clickOKServiceLinked(); 
            ValidateService.servLinked(); ValidateService.addGarantNaoSep(); ValidateService.addMONaoDestSepMesmoProc();
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

        it('28.Order: product 1860 0 0 (with warranty that does not separate and labor that does not detach and separates in the same process) and product 1870 0 0 (without service)', () => {

            Product.fisrt();
            ValidateBalance.withBalance();
            cy.selectProductSearch();
            cy.clickVoltageProduct();
            cy.clickAddProduct();
            Service.maoObraDestNãoSep(); 
            Service.garantiaSepMesmoProc(); 
            Service.clickOKServiceLinked(); 
            ValidateService.servLinked(); ValidateService.addGarantNaoSep(); ValidateService.addMONaoDestSepMesmoProc();
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

        it('29.Order: product 1860 0 0 (with warranty that does not separate and labor that does not detach and separates in another process)', () => {

            Product.fisrt();
            ValidateBalance.withBalance();
            cy.selectProductSearch();
            cy.clickVoltageProduct();
            cy.clickAddProduct();
            Service.maoObraDestNãoSep();
            Service.garantiaSepTituloProcDif();
            Service.clickOKServiceLinked(); 
            ValidateService.servLinked(); ValidateService.addGarantNaoSep(); ValidateService.addMONaoDestSepProcDif();
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

        it('30.Order: product 1860 0 0 (with warranty that does not separate and labor that does not detach and separates in another process) and product 1870 0 0 (without service)', () => {

            Product.fisrt();
            ValidateBalance.withBalance();
            cy.selectProductSearch();
            cy.clickVoltageProduct();
            cy.clickAddProduct();
            Service.maoObraDestNãoSep(); 
            Service.garantiaSepTituloProcDif(); 
            Service.clickOKServiceLinked(); 
            ValidateService.servLinked(); ValidateService.addGarantNaoSep(); ValidateService.addMONaoDestSepProcDif();
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

        it('31.Order: product 1860 0 0 (with warranty that separates in a different process and labor that detaches and does not separate)', () => {

            Product.fisrt();
            ValidateBalance.withBalance();
            cy.selectProductSearch();
            cy.clickVoltageProduct();
            cy.clickAddProduct();
            Service.maoObraNaoDestSepaProcDif(); 
            Service.garantiaNaoSep(); 
            Service.clickOKServiceLinked(); 
            ValidateService.servLinked(); ValidateService.addGarantNaoSep(); ValidateService.addMODestNãoSepara();
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

        it('32.Order: product 1860 0 0 (with Warranty that separates in a different process and Labor that detaches and does not separate) and product 1870 0 0 (without service)', () => {

            Product.fisrt();
            ValidateBalance.withBalance();
            cy.selectProductSearch();
            cy.clickVoltageProduct();
            cy.clickAddProduct();
            Service.maoObraNaoDestSepaProcDif(); 
            Service.garantiaNaoSep(); 
            Service.clickOKServiceLinked(); 
            ValidateService.servLinked(); ValidateService.addGarantNaoSep(); ValidateService.addMODestNãoSepara();
            Product.second();
            ValidateBalance.withBalance();
            cy.selectProductSearch();
            cy.clickVoltageProduct();
            cy.clickAddProduct();
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

        it('33.Order: product 1860 0 0 (with warranty that separates in a different process and labor that does not detach and separates in the same process)', () => {

            Product.fisrt();
            ValidateBalance.withBalance();
            cy.selectProductSearch();
            cy.clickVoltageProduct();
            cy.clickAddProduct();
            Service.maoObraNaoDestSepaProcDif(); 
            Service.garantiaSepMesmoProc(); 
            Service.clickOKServiceLinked(); 
            ValidateService.servLinked(); ValidateService.addGarantSepMesmoProc(); ValidateService.addMONaoDestSepMesmoProc();
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

        it('34.Order: product 1860 0 0 (with warranty that separates in a different process and labor that does not detach and separates in the same process) and product 1870 0 0 (without service)', () => {

            Product.fisrt();
            ValidateBalance.withBalance();
            cy.selectProductSearch();
            cy.clickVoltageProduct();
            cy.clickAddProduct();
            Service.maoObraNaoDestSepaProcDif(); 
            Service.garantiaSepMesmoProc(); 
            Service.clickOKServiceLinked(); 
            ValidateService.servLinked(); ValidateService.addGarantSepMesmoProc(); ValidateService.addMONaoDestSepMesmoProc();
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

        it('35.Order: product 1860 0 0 (with warranty that separates in a different process and labor that does not detach and separates in another process)', () => {

            Product.fisrt();
            ValidateBalance.withBalance();
            cy.selectProductSearch();
            cy.clickVoltageProduct();
            cy.clickAddProduct();
            Service.maoObraNaoDestSepaProcDif(); 
            Service.garantiaSepTituloProcDif();
            Service.clickOKServiceLinked(); 
            ValidateService.servLinked(); ValidateService.addGarantSepTituloProcDif(); ValidateService.addMONaoDestSepProcDif();
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

        it('36.Order: product 1860 0 0 (with warranty that separates in a different process and labor that does not detach and separates in another process) and product 1870 0 0 (without service)', () => {

            Product.fisrt();
            ValidateBalance.withBalance();
            cy.selectProductSearch();
            cy.clickVoltageProduct();
            cy.clickAddProduct();
            Service.maoObraNaoDestSepaProcDif();
            Service.garantiaSepTituloProcDif();
            Service.clickOKServiceLinked(); 
            ValidateService.servLinked(); ValidateService.addGarantSepTituloProcDif(); ValidateService.addMONaoDestSepProcDif();
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