import { ProcessoVendaPage } from '../../../pages/pedidos/processos/ProcessoVendaPage.js'
import { Product, ValidateBalance } from '../../../pages/pedido/ProdutoPage.js'
import { AvancarPage } from '../../../pages/pedido/AvancarPage.js'
import { TirarEntrega } from '../../../pages/pedido/EntregaPage.js'
import { GeralPagamentoPage } from '../../../pages/pedido/pagamento/GeralPagamentoPage.js'
import { ParcelasPage } from '../../../pages/pedido/pagamento/ParcelasPage.js'
import { ProcessoRecebPage } from '../../../pages/pedido/processos/ProcessoRecebPage.js'
import { Service, ValidateService } from '../../../pages/pedido/ServicosPage.js'

describe('Gerar pedidos com Garantia e Mão de Obra', () => {

    beforeEach(() => {
        cy.visit('/')
        cy.clearAllSessionStorage()
        cy.login()
        cy.urlAposLogin()
        cy.tituloPagina() 
        ProcessoVendaPage.NFe() //processo normal
        cy.chooseCliente()
    })

    context('Sem entrega/processo 9860 - caminho feliz', () => {
    
        it('1.Pedido: produto 1860 0 0 (com Garantia que separa título no mesmo processo e Mão de Obra que destaca e não separa)', () => {
            
            Product.fisrt() //PRODUTO
            ValidateBalance.withBalance() //VALIDAR SALDO
            cy.selectProductSearch()
            cy.clickVoltageProduct()
            cy.clickAddProduct()
            Service.validateModalServLinked()
            Service.maoObraNaoDestSepMesmoProc() //Marcar garantia "T.A. Garantia Separa Mesmo Processo"
            Service.garantiaNaoSep() //Marcar Mão de Obra "T.A. MO Destaca e Não Separa"
            Service.clickOKServiceLinked() //SERVIÇOS
            ValidateService.servLinked() ; ValidateService.AddGarantSepMesmoProc() ; ValidateService.addMODestNãoSepara()
            TirarEntrega.freightFirst() //ENTREGA
            AvancarPage.toInstallments() 
            GeralPagamentoPage.clickGenerateInstallments() //GERAR PARCELAS
            GeralPagamentoPage.loadingFormPayment() 
            ProcessoRecebPage.main()
            ParcelasPage.two()
            AvancarPage.final()
            cy.clickFinalizarPedidoPage() //FINALIZAR PEDIDO
            cy.validateOrderGenerated()
        })

        it('2.Pedido: produto 1860 0 0 (com Garantia que separa título no mesmo processo e Mão de Obra que destaca e não separa) e produto 1870 0 0 (sem serviço)', () => {

            Product.fisrt() //PRODUTO
            ValidateBalance.withBalance() //VALIDAR SALDO
            cy.selectProductSearch()
            cy.clickVoltageProduct()
            cy.clickAddProduct()
            Service.validateModalServLinked()
            Service.maoObraNaoDestSepMesmoProc() //Marcar garantia "T.A. Garantia Separa Mesmo Processo"
            Service.garantiaNaoSep() //Marcar Mão de Obra "T.A. MO Destaca e Não Separa"
            Service.clickOKServiceLinked() //SERVIÇOS
            ValidateService.servLinked() ; ValidateService.AddGarantSepMesmoProc() ; ValidateService.addMODestNãoSepara()
            TirarEntrega.freightFirst() //ENTREGA
            Product.second() //PRODUTO
            ValidateBalance.withBalance() //VALIDAR SALDO
            cy.selectProductSearch()
            cy.clickVoltageProduct()
            cy.clickAddProduct()
            Service.validateModalServLinked() //SERVIÇOS - SEGUNDO PRODUTO
            Service.clickOKServiceLinked()
            TirarEntrega.freightSecond() //ENTREGA - SEGUNDO PRODUTO
            AvancarPage.toInstallments()
            GeralPagamentoPage.clickGenerateInstallments() //GERAR PARCELAS
            GeralPagamentoPage.loadingFormPayment() 
            ProcessoRecebPage.main()
            ParcelasPage.two()
            AvancarPage.final()
            cy.clickFinalizarPedidoPage() //FINALIZAR PEDIDO
            cy.validateOrderGenerated()
        })

        it('3.Pedido: produto 1860 0 0 (com Garantia que separa título no mesmo processo e Mão de Obra não destaca e separa no mesmo processo)', () => {

            Product.fisrt() //PRODUTO
            ValidateBalance.withBalance() //VALIDAR SALDO
            cy.selectProductSearch()
            cy.clickVoltageProduct()
            cy.clickAddProduct()
            Service.maoObraNaoDestSepMesmoProc() //Marcar garantia "T.A. Garantia Separa Mesmo Processo"
            Service.garantiaSepMesmoProc() //Marcar Mão de Obra "T.A. MO Não Destaca e Separa Mesmo Processo"
            Service.clickOKServiceLinked() //SERVIÇOS
            ValidateService.servLinked() ; ValidateService.AddGarantSepMesmoProc() ; ValidateService.addMONaoDestSepMesmoProc()
            TirarEntrega.freightFirst() //ENTREGA
            AvancarPage.toInstallments()
            GeralPagamentoPage.clickGenerateInstallments() //GERAR PARCELAS
            GeralPagamentoPage.loadingFormPayment() 
            ProcessoRecebPage.main()
            ParcelasPage.two()
            AvancarPage.final()
            cy.clickFinalizarPedidoPage() //FINALIZAR PEDIDO
            cy.validateOrderGenerated()
        })

        it('4.Pedido: produto 1860 0 0 (com Garantia que separa título no mesmo processo e Mão de Obra não destaca e separa no mesmo processo) e produto 1870 0 0 (sem serviço)', () => {

            Product.fisrt() //PRODUTO
            ValidateBalance.withBalance() //VALIDAR SALDO
            cy.selectProductSearch()
            cy.clickVoltageProduct()
            cy.clickAddProduct()
            Service.maoObraNaoDestSepMesmoProc() //Marcar garantia "T.A. Garantia Separa Mesmo Processo"
            Service.garantiaSepMesmoProc() //Marcar Mão de Obra "T.A. MO Não Destaca e Separa Mesmo Processo"
            Service.clickOKServiceLinked() //SERVIÇOS
            ValidateService.servLinked() ; ValidateService.AddGarantSepMesmoProc() ; ValidateService.addMONaoDestSepMesmoProc()
            TirarEntrega.freightFirst() //ENTREGA
            Product.second() //PRODUTO
            ValidateBalance.withBalance() //VALIDAR SALDO
            cy.selectProductSearch()
            cy.clickVoltageProduct()
            cy.clickAddProduct()
            Servico.clickOKServiceLinked() //SERVIÇOS - SEGUNDO PRODUTO
            TirarEntrega.freightSecond() //ENTREGA - SEGUNDO PRODUTO
            AvancarPage.toInstallments() 
            GeralPagamentoPage.clickGenerateInstallments() //GERAR PARCELAS
            GeralPagamentoPage.loadingFormPayment() 
            ProcessoRecebPage.main()
            ParcelasPage.two()
            AvancarPage.final()
            cy.clickFinalizarPedidoPage() //FINALIZAR PEDIDO
            cy.validateOrderGenerated()
        })

        it('5.Pedido: produto 1860 0 0 (com Garantia que separa título no mesmo processo e Mão de Obra não destaca e separa em outro processo)', () => {

            Product.fisrt() //PRODUTO
            ValidateBalance.withBalance() //VALIDAR SALDO
            cy.selectProductSearch()
            cy.clickVoltageProduct()
            cy.clickAddProduct()
            Service.maoObraNaoDestSepMesmoProc() //Marcar garantia "T.A. Garantia Separa Mesmo Processo"
            Service.garantiaSepTituloProcDif() //Marcar Mão de Obra "T.A. MO Não Destaca e Separa Processo Diferente" 
            Service.clickOKServiceLinked() //SERVIÇOS
            ValidateService.servLinked() ; ValidateService.AddGarantSepMesmoProc() ; ValidateService.addMONaoDestSepProcDif()
            TirarEntrega.freightFirst() //ENTREGA
            AvancarPage.toInstallments() 
            GeralPagamentoPage.clickGenerateInstallments() //GERAR PARCELAS
            GeralPagamentoPage.loadingFormPayment() 
            ProcessoRecebPage.main()
            ParcelasPage.two()
            AvancarPage.final()
            cy.clickFinalizarPedidoPage() //FINALIZAR PEDIDO
            cy.validateOrderGenerated()
        })

        it('6.Pedido: produto 1860 0 0 (com Garantia que separa título no mesmo processo e Mão de Obra não destaca e separa em outro processo) e produto 1870 0 0 (sem serviço)', () => {

            Product.fisrt() //PRODUTO
            ValidateBalance.withBalance() //VALIDAR SALDO
            cy.selectProductSearch()
            cy.clickVoltageProduct()
            cy.clickAddProduct()
            Service.maoObraNaoDestSepMesmoProc() //Marcar garantia "T.A. Garantia Separa Mesmo Processo"
            Service.garantiaSepTituloProcDif() //Marcar Mão de Obra "T.A. MO Não Destaca e Separa Processo Diferente" 
            Service.clickOKServiceLinked() //SERVIÇOS
            ValidateService.servLinked() ; ValidateService.AddGarantSepMesmoProc() ; ValidateService.addMONaoDestSepProcDif()
            TirarEntrega.freightFirst() //ENTREGA
            Product.second() //PRODUTO
            ValidateBalance.withBalance() //VALIDAR SALDO
            cy.selectProductSearch()
            cy.clickVoltageProduct()
            cy.clickAddProduct()
            Service.clickOKServiceLinked() //SERVIÇOS
            TirarEntrega.freightSecond() //ENTREGA - SEGUNDO PRODUTO
            AvancarPage.toInstallments() 
            GeralPagamentoPage.clickGenerateInstallments() //GERAR PARCELAS
            GeralPagamentoPage.loadingFormPayment() 
            ProcessoRecebPage.main()
            ParcelasPage.two()
            AvancarPage.final()
            cy.clickFinalizarPedidoPage() //FINALIZAR PEDIDO
            cy.validateOrderGenerated()
        })

        it('7.Pedido: produto 1860 0 0 (com Garantia que não separa e Mão de Obra que destaca e não separa)', () => {

            Product.fisrt() //PRODUTO
            ValidateBalance.withBalance() //VALIDAR SALDO
            cy.selectProductSearch()
            cy.clickVoltageProduct()
            cy.clickAddProduct()
            Service.maoObraDestNãoSep() //Marcar garantia "T.A. Garantia Não Separa"
            Service.garantiaNaoSep()//Marcar Mão de Obra "T.A. MO Destaca e Não Separa"
            Service.clickOKServiceLinked() //SERVIÇOS
            ValidateService.servLinked() ; ValidateService.addGarantNaoSep() ; ValidateService.addMODestNãoSepara()
            TirarEntrega.freightFirst() //ENTREGA
            AvancarPage.toInstallments() 
            GeralPagamentoPage.clickGenerateInstallments() //GERAR PARCELAS
            GeralPagamentoPage.loadingFormPayment() 
            ProcessoRecebPage.main()
            ParcelasPage.two()
            AvancarPage.final()
            cy.clickFinalizarPedidoPage() //FINALIZAR PEDIDO
            cy.validateOrderGenerated()
        })

        it('8.Pedido: produto 1860 0 0 (com Garantia que não separa e Mão de Obra que destaca e não separa) e produto 1870 0 0 (sem serviço)', () => {

            Product.fisrt() //PRODUTO
            ValidateBalance.withBalance() //VALIDAR SALDO
            cy.selectProductSearch()
            cy.clickVoltageProduct()
            cy.clickAddProduct()
            Service.maoObraDestNãoSep() //Marcar garantia "T.A. Garantia Não Separa"
            Service.garantiaNaoSep()//Marcar Mão de Obra "T.A. MO Destaca e Não Separa"
            Service.clickOKServiceLinked() //SERVIÇOS
            ValidateService.servLinked() ; ValidateService.addGarantNaoSep() ; ValidateService.addMODestNãoSepara()
            TirarEntrega.freightFirst() //ENTREGA
            Product.second() //PRODUTO
            ValidateBalance.withBalance() //VALIDAR SALDO
            cy.selectProductSearch()
            cy.clickVoltageProduct()
            cy.clickAddProduct()
            Service.validateModalServLinked() //SERVIÇOS
            Service.clickOKServiceLinked()
            TirarEntrega.freightSecond() //ENTREGA
            AvancarPage.toInstallments() 
            GeralPagamentoPage.clickGenerateInstallments() //GERAR PARCELAS
            GeralPagamentoPage.loadingFormPayment() 
            ProcessoRecebPage.main()
            ParcelasPage.two()
            AvancarPage.final()
            cy.clickFinalizarPedidoPage() //FINALIZAR PEDIDO
            cy.validateOrderGenerated()
        })

        it('9.Pedido: produto 1860 0 0 (com Garantia que não separa e Mão de Obra não destaca e separa no mesmo processo)', () => {

            Product.fisrt() //PRODUTO
            ValidateBalance.withBalance() //VALIDAR SALDO
            cy.selectProductSearch()
            cy.clickVoltageProduct()
            cy.clickAddProduct()
            Service.maoObraDestNãoSep() //Marcar garantia "T.A. Garantia Não Separa"
            Service.garantiaSepMesmoProc() //Marcar Mão de Obra "T.A. MO Não Destaca e Separa Mesmo Processo"
            Service.clickOKServiceLinked() //SERVIÇOS
            ValidateService.servLinked() ; ValidateService.addGarantNaoSep() ; ValidateService.addMONaoDestSepMesmoProc()
            TirarEntrega.freightFirst() //ENTREGA
            AvancarPage.toInstallments() 
            GeralPagamentoPage.clickGenerateInstallments() //GERAR PARCELAS
            GeralPagamentoPage.loadingFormPayment() 
            ProcessoRecebPage.main()
            ParcelasPage.two()
            AvancarPage.final()
            cy.clickFinalizarPedidoPage() //FINALIZAR PEDIDO
            cy.validateOrderGenerated()
        })

        it('10.Pedido: produto 1860 0 0 (com Garantia que não separa e Mão de Obra não destaca e separa no mesmo processo) e produto 1870 0 0 (sem serviço)', () => {

            Product.fisrt() //PRODUTO
            ValidateBalance.withBalance() //VALIDAR SALDO
            cy.selectProductSearch()
            cy.clickVoltageProduct()
            cy.clickAddProduct()
            Service.maoObraDestNãoSep() //Marcar garantia "T.A. Garantia Não Separa"
            Service.garantiaSepMesmoProc() //Marcar Mão de Obra "T.A. MO Não Destaca e Separa Mesmo Processo"
            Service.clickOKServiceLinked() //SERVIÇOS
            ValidateService.servLinked() ; ValidateService.addGarantNaoSep() ; ValidateService.addMONaoDestSepMesmoProc()
            TirarEntrega.freightFirst() //ENTREGA
            Product.second() //PRODUTO
            ValidateBalance.withBalance() //VALIDAR SALDO
            cy.selectProductSearch()
            cy.clickVoltageProduct()
            cy.clickAddProduct()
            Service.validateModalServLinked() //SERVIÇOS - SEGUNDO PRODUTO
            Service.clickOKServiceLinked()
            TirarEntrega.freightSecond() //ENTREGA - SEGUNDO PRODUTO
            AvancarPage.toInstallments() 
            GeralPagamentoPage.clickGenerateInstallments() //GERAR PARCELAS
            GeralPagamentoPage.loadingFormPayment() 
            ProcessoRecebPage.main()
            ParcelasPage.two()
            AvancarPage.final()
            cy.clickFinalizarPedidoPage() //FINALIZAR PEDIDO
            cy.validateOrderGenerated()
        })

        it('11.Pedido: produto 1860 0 0 (com Garantia que não separa e Mão de Obra não destaca e separa em outro processo)', () => {

            Product.fisrt() //PRODUTO
            ValidateBalance.withBalance() //VALIDAR SALDO
            cy.selectProductSearch()
            cy.clickVoltageProduct()
            cy.clickAddProduct()
            Service.maoObraDestNãoSep() //Marcar garantia "T.A. Garantia Não Separa"
            Service.garantiaSepTituloProcDif() //Marcar Mão de Obra "T.A. MO Não Destaca e Separa Processo Diferente" 
            Service.clickOKServiceLinked() //SERVIÇOS
            ValidateService.servLinked() ; ValidateService.addGarantNaoSep() ; ValidateService.addMONaoDestSepProcDif()
            TirarEntrega.freightFirst() //ENTREGA
            AvancarPage.toInstallments() 
            GeralPagamentoPage.clickGenerateInstallments() //GERAR PARCELAS
            GeralPagamentoPage.loadingFormPayment() 
            ProcessoRecebPage.main()
            ParcelasPage.two()
            AvancarPage.final()
            cy.clickFinalizarPedidoPage() //FINALIZAR PEDIDO
            cy.validateOrderGenerated()
        })

        it('12.Pedido: produto 1860 0 0 (com Garantia que não separa e Mão de Obra não destaca e separa em outro processo) e produto 1870 0 0 (sem serviço)', () => {

            Product.fisrt() //PRODUTO
            ValidateBalance.withBalance() //VALIDAR SALDO
            cy.selectProductSearch()
            cy.clickVoltageProduct()
            cy.clickAddProduct()
            Service.maoObraDestNãoSep() //Marcar garantia "T.A. Garantia Não Separa"
            Service.garantiaSepTituloProcDif() //Marcar Mão de Obra "T.A. MO Não Destaca e Separa Processo Diferente" 
            Service.clickOKServiceLinked() //SERVIÇOS
            ValidateService.servLinked() ; ValidateService.addGarantNaoSep() ; ValidateService.addMONaoDestSepProcDif()
            TirarEntrega.freightFirst() //ENTREGA
            Product.second() //PRODUTO
            ValidateBalance.withBalance() //VALIDAR SALDO
            cy.selectProductSearch()
            cy.clickVoltageProduct()
            cy.clickAddProduct()
            Service.validateModalServLinked() //SERVIÇOS - SEGUNDO PRODUTO
            Service.clickOKServiceLinked()
            TirarEntrega.freightSecond() //ENTREGA - SEGUNDO PRODUTO
            AvancarPage.toInstallments() 
            GeralPagamentoPage.clickGenerateInstallments() //GERAR PARCELAS
            GeralPagamentoPage.loadingFormPayment() 
            ProcessoRecebPage.main()
            ParcelasPage.two()
            AvancarPage.final()
            cy.clickFinalizarPedidoPage() //FINALIZAR PEDIDO
            cy.validateOrderGenerated()
        })

        it('13.Pedido: produto 1860 0 0 (com Garantia que separa em processo diferente e Mão de Obra que destaca e não separa)', () => {

            Product.fisrt() //PRODUTO
            ValidateBalance.withBalance() //VALIDAR SALDO
            cy.selectProductSearch()
            cy.clickVoltageProduct()
            cy.clickAddProduct()
            Service.maoObraNaoDestSepaProcDif() //Marcar garantia "T.A. MO Não Destaca e Separa Processo Diferente"
            Service.garantiaNaoSep() //Marcar Mão de Obra "T.A. MO Destaca e Não Separa"
            Service.clickOKServiceLinked() //SERVIÇOS
            ValidateService.servLinked() ; ValidateService.addGarantSepTituloProcDif() ; ValidateService.addMODestNãoSepara()
            TirarEntrega.freightFirst() //ENTREGA
            AvancarPage.toInstallments() 
            GeralPagamentoPage.clickGenerateInstallments() //GERAR PARCELAS
            GeralPagamentoPage.loadingFormPayment() 
            ProcessoRecebPage.main()
            ParcelasPage.two()
            AvancarPage.final()
            cy.clickFinalizarPedidoPage() //FINALIZAR PEDIDO
            cy.validateOrderGenerated()
        })

        it('14.Pedido: produto 1860 0 0 (com Garantia que separa em processo diferente e Mão de Obra que destaca e não separa) e produto 1870 0 0 (sem serviço)', () => {

            Product.fisrt() //PRODUTO
            ValidateBalance.withBalance() //VALIDAR SALDO
            cy.selectProductSearch()
            cy.clickVoltageProduct()
            cy.clickAddProduct()
            Service.maoObraNaoDestSepaProcDif() //Marcar garantia "T.A. MO Não Destaca e Separa Processo Diferente"
            Service.garantiaNaoSep() //Marcar Mão de Obra "T.A. MO Destaca e Não Separa"
            Service.clickOKServiceLinked() //SERVIÇOS
            ValidateService.servLinked() ; ValidateService.addGarantSepTituloProcDif() ; ValidateService.addMODestNãoSepara()
            TirarEntrega.freightFirst() //ENTREGA
            Product.second() //PRODUTO
            ValidateBalance.withBalance() //VALIDAR SALDO
            cy.selectProductSearch()
            cy.clickVoltageProduct()
            cy.clickAddProduct()
            Service.validateModalServLinked() //SERVIÇOS - SEGUNDO PRODUTO
            Service.clickOKServiceLinked()
            TirarEntrega.freightSecond() //ENTREGA - SEGUNDO PRODUTO
            AvancarPage.toInstallments() 
            GeralPagamentoPage.clickGenerateInstallments() //GERAR PARCELAS
            GeralPagamentoPage.loadingFormPayment() 
            ProcessoRecebPage.main()
            ParcelasPage.two()
            AvancarPage.final()
            cy.clickFinalizarPedidoPage() //FINALIZAR PEDIDO
            cy.validateOrderGenerated()
        })

        it('15.Pedido: produto 1860 0 0 (com Garantia que separa em processo diferente e Mão de Obra não destaca e separa no mesmo processo)', () => {

            Product.fisrt() //PRODUTO
            ValidateBalance.withBalance() //VALIDAR SALDO
            cy.selectProductSearch()
            cy.clickVoltageProduct()
            cy.clickAddProduct()
            Service.maoObraNaoDestSepaProcDif() //Marcar garantia "T.A. MO Não Destaca e Separa Processo Diferente"
            Service.garantiaSepMesmoProc() //Marcar Mão de Obra "T.A. MO Não Destaca e Separa Mesmo Processo"
            Service.clickOKServiceLinked() //SERVIÇOS
            ValidateService.servLinked() ; ValidateService.addGarantSepTituloProcDif() ; ValidateService.addMONaoDestSepMesmoProc()
            TirarEntrega.freightFirst() //ENTREGA
            AvancarPage.toInstallments() 
            GeralPagamentoPage.clickGenerateInstallments() //GERAR PARCELAS
            GeralPagamentoPage.loadingFormPayment() 
            ProcessoRecebPage.main()
            ParcelasPage.two()
            AvancarPage.final()
            cy.clickFinalizarPedidoPage() //FINALIZAR PEDIDO
            cy.validateOrderGenerated()
        })

        it('16.Pedido: produto 1860 0 0 (com Garantia que separa em processo diferente e Mão de Obra não destaca e separa no mesmo processo) e produto 1870 0 0 (sem serviço)', () => {

            Product.fisrt() //PRODUTO
            ValidateBalance.withBalance() //VALIDAR SALDO
            cy.selectProductSearch()
            cy.clickVoltageProduct()
            cy.clickAddProduct()
            Service.maoObraNaoDestSepaProcDif() //Marcar garantia "T.A. MO Não Destaca e Separa Processo Diferente"
            Service.garantiaSepMesmoProc() //Marcar Mão de Obra "T.A. MO Não Destaca e Separa Mesmo Processo"
            Service.clickOKServiceLinked() //SERVIÇOS
            ValidateService.servLinked() ; ValidateService.addGarantSepTituloProcDif() ; ValidateService.addMONaoDestSepMesmoProc()
            TirarEntrega.freightFirst() //ENTREGA
            Product.second() //PRODUTO
            ValidateBalance.withBalance() //VALIDAR SALDO
            cy.selectProductSearch()
            cy.clickVoltageProduct()
            cy.clickAddProduct()
            Service.validateModalServLinked() //SERVIÇOS - SEGUNDO PRODUTO
            Service.clickOKServiceLinked()
            TirarEntrega.freightSecond() //ENTREGA - SEGUNDO PRODUTO
            AvancarPage.toInstallments()  
            GeralPagamentoPage.clickGenerateInstallments() //GERAR PARCELAS
            GeralPagamentoPage.loadingFormPayment() 
            ProcessoRecebPage.main()
            ParcelasPage.two()
            AvancarPage.final()
            cy.clickFinalizarPedidoPage() //FINALIZAR PEDIDO
            cy.validateOrderGenerated()
        })

        it('17.Pedido: produto 1860 0 0 (com Garantia que separa em processo diferente e Mão de Obra não destaca e separa em outro processo)', () => {

            Product.fisrt() //PRODUTO
            ValidateBalance.withBalance() //VALIDAR SALDO
            cy.selectProductSearch()
            cy.clickVoltageProduct()
            cy.clickAddProduct()
            Service.maoObraNaoDestSepaProcDif()//Marcar garantia "T.A. MO Não Destaca e Separa Processo Diferente"
            Service.garantiaSepTituloProcDif()
            Service.clickOKServiceLinked() //SERVIÇOS
            ValidateService.servLinked() ; ValidateService.addGarantSepTituloProcDif() ; ValidateService.addMONaoDestSepProcDif()
            TirarEntrega.freightFirst() //ENTREGA
            AvancarPage.toInstallments() 
            GeralPagamentoPage.clickGenerateInstallments() //GERAR PARCELAS
            GeralPagamentoPage.loadingFormPayment() 
            ProcessoRecebPage.main()
            ParcelasPage.two()
            AvancarPage.final()
            cy.clickFinalizarPedidoPage() //FINALIZAR PEDIDO
            cy.validateOrderGenerated()
        })

        it('18.Pedido: produto 1860 0 0 (com Garantia que separa em processo diferente e Mão de Obra não destaca e separa em outro processo) e produto 1870 0 0 (sem serviço)', () => {

            Product.fisrt() //PRODUTO
            ValidateBalance.withBalance() //VALIDAR SALDO
            cy.selectProductSearch()
            cy.clickVoltageProduct()
            cy.clickAddProduct()
            Service.maoObraNaoDestSepaProcDif()//Marcar garantia "T.A. MO Não Destaca e Separa Processo Diferente"
            Service.garantiaSepTituloProcDif()
            Service.clickOKServiceLinked() //SERVIÇOS
            ValidateService.servLinked() ; ValidateService.addGarantSepTituloProcDif() ; ValidateService.addMONaoDestSepProcDif()
            TirarEntrega.freightFirst() //ENTREGA
            Product.second() //PRODUTO
            ValidateBalance.withBalance() //VALIDAR SALDO
            cy.selectProductSearch()
            cy.clickVoltageProduct()
            cy.clickAddProduct()
            Service.validateModalServLinked() //SERVIÇOS - SEGUNDO PRODUTO
            Service.clickOKServiceLinked()
            TirarEntrega.freightSecond() //ENTREGA - SEGUNDO PRODUTO
            AvancarPage.toInstallments() 
            GeralPagamentoPage.clickGenerateInstallments() //GERAR PARCELAS
            GeralPagamentoPage.loadingFormPayment() 
            ProcessoRecebPage.main()
            ParcelasPage.two()
            AvancarPage.final()
            cy.clickFinalizarPedidoPage() //FINALIZAR PEDIDO
            cy.validateOrderGenerated()
        })
    })

    context('Com entrega/processo 9860 - caminho feliz', () => {

        it('19.Pedido: produto 1860 0 0 (com Garantia que separa título no mesmo processo e Mão de Obra que destaca e não separa)', () => {

            Product.fisrt() //PRODUTO
            ValidateBalance.withBalance() //VALIDAR SALDO
            cy.selectProductSearch()
            cy.clickVoltageProduct()
            cy.clickAddProduct()
            Service.maoObraNaoDestSepMesmoProc() //Marcar garantia "T.A. Garantia Separa Mesmo Processo"
            Service.garantiaNaoSep() //Marcar Mão de Obra "T.A. MO Destaca e Não Separa"
            Service.clickOKServiceLinked() //SERVIÇOS
            ValidateService.servLinked() ; ValidateService.AddGarantSepMesmoProc() ; ValidateService.addMODestNãoSepara()
            AvancarPage.toTransporter()
            AvancarPage.toInstallments()  
            GeralPagamentoPage.clickGenerateInstallments() //GERAR PARCELAS
            GeralPagamentoPage.loadingFormPayment() 
            ProcessoRecebPage.main()
            ParcelasPage.two()
            AvancarPage.final()
            cy.clickFinalizarPedidoPage() //FINALIZAR PEDIDO
            cy.validateOrderGenerated()
        })

        it('20.Pedido: produto 1860 0 0 (com Garantia que separa título no mesmo processo e Mão de Obra que destaca e não separa) e produto 1870 0 0 (sem serviço)', () => {

            Product.fisrt() //PRODUTO
            ValidateBalance.withBalance() //VALIDAR SALDO
            cy.selectProductSearch()
            cy.clickVoltageProduct()
            cy.clickAddProduct()
            Service.maoObraNaoDestSepMesmoProc() //Marcar garantia "T.A. Garantia Separa Mesmo Processo"
            Service.garantiaNaoSep() //Marcar Mão de Obra "T.A. MO Destaca e Não Separa"
            Service.clickOKServiceLinked() //SERVIÇOS
            ValidateService.servLinked() ; ValidateService.AddGarantSepMesmoProc() ; ValidateService.addMODestNãoSepara()
            Product.second() //PRODUTO
            ValidateBalance.withBalance() //VALIDAR SALDO
            cy.selectProductSearch()
            cy.clickVoltageProduct()
            cy.clickAddProduct()
            Service.validateModalServLinked() //SERVIÇOS - SEGUNDO PRODUTO
            Service.clickOKServiceLinked() //SERVIÇOS
            AvancarPage.toTransporter()
            AvancarPage.toInstallments()
            GeralPagamentoPage.clickGenerateInstallments() //GERAR PARCELAS
            GeralPagamentoPage.loadingFormPayment() 
            ProcessoRecebPage.main()
            ParcelasPage.two()
            AvancarPage.final()
            cy.clickFinalizarPedidoPage() //FINALIZAR PEDIDO
            cy.validateOrderGenerated()
        })

        it('21.Pedido: produto 1860 0 0 (com Garantia que separa título no mesmo processo e Mão de Obra não destaca e separa no mesmo processo)', () => {

            Product.fisrt() //PRODUTO
            ValidateBalance.withBalance() //VALIDAR SALDO
            cy.selectProductSearch()
            cy.clickVoltageProduct()
            cy.clickAddProduct()
            Service.maoObraNaoDestSepMesmoProc() //Marcar garantia "T.A. Garantia Separa Mesmo Processo"
            Service.garantiaSepMesmoProc() //Marcar Mão de Obra "T.A. MO Não Destaca e Separa Mesmo Processo"
            Service.clickOKServiceLinked() //SERVIÇOS
            ValidateService.servLinked() ; ValidateService.AddGarantSepMesmoProc() ; ValidateService.addMONaoDestSepMesmoProc()
            AvancarPage.toTransporter()
            AvancarPage.toInstallments()
            GeralPagamentoPage.clickGenerateInstallments() //GERAR PARCELAS
            GeralPagamentoPage.loadingFormPayment() 
            ProcessoRecebPage.main()
            ParcelasPage.two()
            AvancarPage.final()
            cy.clickFinalizarPedidoPage() //FINALIZAR PEDIDO
            cy.validateOrderGenerated()
        })

        it('22.Pedido: produto 1860 0 0 (com Garantia que separa título no mesmo processo e Mão de Obra não destaca e separa no mesmo processo) e produto 1870 0 0 (sem serviço)', () => {

            Product.fisrt() //PRODUTO
            ValidateBalance.withBalance() //VALIDAR SALDO
            cy.selectProductSearch()
            cy.clickVoltageProduct()
            cy.clickAddProduct()
            Service.maoObraNaoDestSepMesmoProc() //Marcar garantia "T.A. Garantia Separa Mesmo Processo"
            Service.garantiaSepMesmoProc() //Marcar Mão de Obra "T.A. MO Não Destaca e Separa Mesmo Processo"
            Service.clickOKServiceLinked() //SERVIÇOS
            ValidateService.servLinked() ; ValidateService.AddGarantSepMesmoProc() ; ValidateService.addMONaoDestSepMesmoProc()
            Product.second() //PRODUTO
            ValidateBalance.withBalance() //VALIDAR SALDO
            cy.selectProductSearch()
            cy.clickVoltageProduct()
            cy.clickAddProduct()
            Service.validateModalServLinked() //SERVIÇOS - SEGUNDO PRODUTO
            Service.clickOKServiceLinked() //SERVIÇOS
            AvancarPage.toTransporter()
            AvancarPage.toInstallments()
            GeralPagamentoPage.clickGenerateInstallments() //GERAR PARCELAS
            GeralPagamentoPage.loadingFormPayment() 
            ProcessoRecebPage.main()
            ParcelasPage.two()
            AvancarPage.final()
            cy.clickFinalizarPedidoPage() //FINALIZAR PEDIDO
            cy.validateOrderGenerated()
        })

        it('23.Pedido: produto 1860 0 0 (com Garantia que separa título no mesmo processo e Mão de Obra não destaca e separa em outro processo)', () => {

            Product.fisrt() //PRODUTO
            ValidateBalance.withBalance() //VALIDAR SALDO
            cy.selectProductSearch()
            cy.clickVoltageProduct()
            cy.clickAddProduct()
            Service.maoObraNaoDestSepMesmoProc() //Marcar garantia "T.A. Garantia Separa Mesmo Processo"
            Service.garantiaSepTituloProcDif() //Marcar Mão de Obra "T.A. MO Não Destaca e Separa Processo Diferente" 
            Service.clickOKServiceLinked() //SERVIÇOS
            ValidateService.servLinked() ; ValidateService.AddGarantSepMesmoProc() ; ValidateService.addMONaoDestSepProcDif()
            AvancarPage.toTransporter()
            AvancarPage.toInstallments()
            GeralPagamentoPage.clickGenerateInstallments() //GERAR PARCELAS
            GeralPagamentoPage.loadingFormPayment() 
            ProcessoRecebPage.main()
            ParcelasPage.two()
            AvancarPage.final()
            cy.clickFinalizarPedidoPage() //FINALIZAR PEDIDO
            cy.validateOrderGenerated()
        })

        it('24.Pedido: produto 1860 0 0 (com Garantia que separa título no mesmo processo e Mão de Obra não destaca e separa em outro processo) e produto 1870 0 0 (sem serviço)', () => {

            Product.fisrt() //PRODUTO
            ValidateBalance.withBalance() //VALIDAR SALDO
            cy.selectProductSearch()
            cy.clickVoltageProduct()
            cy.clickAddProduct()
            Service.maoObraNaoDestSepMesmoProc() //Marcar garantia "T.A. Garantia Separa Mesmo Processo"
            Service.garantiaSepTituloProcDif() //Marcar Mão de Obra "T.A. MO Não Destaca e Separa Processo Diferente" 
            Service.clickOKServiceLinked() //SERVIÇOS
            ValidateService.servLinked() ; ValidateService.AddGarantSepMesmoProc() ; ValidateService.addMONaoDestSepProcDif()
            Product.second() //PRODUTO
            ValidateBalance.withBalance() //VALIDAR SALDO
            cy.selectProductSearch()
            cy.clickVoltageProduct()
            cy.clickAddProduct()
            Service.validateModalServLinked() //SERVIÇOS - SEGUNDO PRODUTO
            Service.clickOKServiceLinked() //SERVIÇOS
            AvancarPage.toTransporter()
            AvancarPage.toInstallments()
            GeralPagamentoPage.clickGenerateInstallments() //GERAR PARCELAS
            GeralPagamentoPage.loadingFormPayment() 
            ProcessoRecebPage.main()
            ParcelasPage.two()
            AvancarPage.final()
            cy.clickFinalizarPedidoPage() //FINALIZAR PEDIDO
            cy.validateOrderGenerated()
        })

        it('25.Pedido: produto 1860 0 0 (com Garantia que não separa e Mão de Obra que destaca e não separa)', () => {

            Product.fisrt() //PRODUTO
            ValidateBalance.withBalance() //VALIDAR SALDO
            cy.selectProductSearch()
            cy.clickVoltageProduct()
            cy.clickAddProduct()
            Service.maoObraDestNãoSep() //Marcar garantia "T.A. Garantia Não Separa"
            Service.garantiaNaoSep()//Marcar Mão de Obra "T.A. MO Destaca e Não Separa"
            Service.clickOKServiceLinked() //SERVIÇOS
            ValidateService.servLinked() ; ValidateService.addGarantNaoSep() ; ValidateService.addMODestNãoSepara()
            AvancarPage.toTransporter()
            AvancarPage.toInstallments()
            GeralPagamentoPage.clickGenerateInstallments() //GERAR PARCELAS
            GeralPagamentoPage.loadingFormPayment() 
            ProcessoRecebPage.main()
            ParcelasPage.two()
            AvancarPage.final()
            cy.clickFinalizarPedidoPage() //FINALIZAR PEDIDO
            cy.validateOrderGenerated()
        })

        it('26.Pedido: produto 1860 0 0 (com Garantia que não separa e Mão de Obra que destaca e não separa) e produto 1870 0 0 (sem serviço)', () => {

            Product.fisrt() //PRODUTO
            ValidateBalance.withBalance() //VALIDAR SALDO
            cy.selectProductSearch()
            cy.clickVoltageProduct()
            cy.clickAddProduct()
            Service.maoObraDestNãoSep() //Marcar garantia "T.A. Garantia Não Separa"
            Service.garantiaNaoSep()//Marcar Mão de Obra "T.A. MO Destaca e Não Separa"
            Service.clickOKServiceLinked() //SERVIÇOS
            ValidateService.servLinked() ; ValidateService.addGarantNaoSep() ; ValidateService.addMODestNãoSepara()
            Product.second() //PRODUTO
            ValidateBalance.withBalance() //VALIDAR SALDO
            cy.selectProductSearch()
            cy.clickVoltageProduct()
            cy.clickAddProduct()
            Service.validateModalServLinked() //SERVIÇOS - SEGUNDO PRODUTO
            Service.clickOKServiceLinked() //SERVIÇOS
            AvancarPage.toTransporter()
            AvancarPage.toInstallments()
            GeralPagamentoPage.clickGenerateInstallments() //GERAR PARCELAS
            GeralPagamentoPage.loadingFormPayment() 
            ProcessoRecebPage.main()
            ParcelasPage.two()
            AvancarPage.final()
            cy.clickFinalizarPedidoPage() //FINALIZAR PEDIDO
            cy.validateOrderGenerated()
        })

        it('27.Pedido: produto 1860 0 0 (com Garantia que não separa e Mão de Obra não destaca e separa no mesmo processo)', () => {

            Product.fisrt() //PRODUTO
            ValidateBalance.withBalance() //VALIDAR SALDO
            cy.selectProductSearch()
            cy.clickVoltageProduct()
            cy.clickAddProduct()
            Service.maoObraDestNãoSep() //Marcar garantia "T.A. Garantia Não Separa"
            Service.garantiaSepMesmoProc() //Marcar Mão de Obra "T.A. MO Não Destaca e Separa Mesmo Processo"
            Service.clickOKServiceLinked() //SERVIÇOS
            ValidateService.servLinked() ; ValidateService.addGarantNaoSep() ; ValidateService.addMONaoDestSepMesmoProc()
            AvancarPage.toTransporter()
            AvancarPage.toInstallments()
            GeralPagamentoPage.clickGenerateInstallments() //GERAR PARCELAS
            GeralPagamentoPage.loadingFormPayment() 
            ProcessoRecebPage.main()
            ParcelasPage.two()
            AvancarPage.final()
            cy.clickFinalizarPedidoPage() //FINALIZAR PEDIDO
            cy.validateOrderGenerated()
        })

        it('28.Pedido: produto 1860 0 0 (com Garantia que não separa e Mão de Obra não destaca e separa no mesmo processo) e produto 1870 0 0 (sem serviço)', () => {

            Product.fisrt() //PRODUTO
            ValidateBalance.withBalance() //VALIDAR SALDO
            cy.selectProductSearch()
            cy.clickVoltageProduct()
            cy.clickAddProduct()
            Service.maoObraDestNãoSep() //Marcar garantia "T.A. Garantia Não Separa"
            Service.garantiaSepMesmoProc() //Marcar Mão de Obra "T.A. MO Não Destaca e Separa Mesmo Processo"
            Service.clickOKServiceLinked() //SERVIÇOS
            ValidateService.servLinked() ; ValidateService.addGarantNaoSep() ; ValidateService.addMONaoDestSepMesmoProc()
            Product.second() //PRODUTO
            ValidateBalance.withBalance() //VALIDAR SALDO
            cy.selectProductSearch()
            cy.clickVoltageProduct()
            cy.clickAddProduct()
            Service.validateModalServLinked() //SERVIÇOS - SEGUNDO PRODUTO
            Service.clickOKServiceLinked() //SERVIÇOS
            AvancarPage.toTransporter()
            AvancarPage.toInstallments()
            GeralPagamentoPage.clickGenerateInstallments() //GERAR PARCELAS
            GeralPagamentoPage.loadingFormPayment() 
            ProcessoRecebPage.main()
            ParcelasPage.two()
            AvancarPage.final()
            cy.clickFinalizarPedidoPage() //FINALIZAR PEDIDO
            cy.validateOrderGenerated()
        })

        it('29.Pedido: produto 1860 0 0 (com Garantia que não separa e Mão de Obra não destaca e separa em outro processo)', () => {

            Product.fisrt() //PRODUTO
            ValidateBalance.withBalance() //VALIDAR SALDO
            cy.selectProductSearch()
            cy.clickVoltageProduct()
            cy.clickAddProduct()
            Service.maoObraDestNãoSep() //Marcar garantia "T.A. Garantia Não Separa"
            Service.garantiaSepTituloProcDif() //Marcar Mão de Obra "T.A. MO Não Destaca e Separa Processo Diferente" 
            Service.clickOKServiceLinked() //SERVIÇOS
            ValidateService.servLinked() ; ValidateService.addGarantNaoSep() ; ValidateService.addMONaoDestSepProcDif()
            AvancarPage.toTransporter()
            AvancarPage.toInstallments()
            GeralPagamentoPage.clickGenerateInstallments() //GERAR PARCELAS
            GeralPagamentoPage.loadingFormPayment() 
            ProcessoRecebPage.main()
            ParcelasPage.two()
            AvancarPage.final()
            cy.clickFinalizarPedidoPage() //FINALIZAR PEDIDO
            cy.validateOrderGenerated()
        })

        it('30.Pedido: produto 1860 0 0 (com Garantia que não separa e Mão de Obra não destaca e separa em outro processo) e produto 1870 0 0 (sem serviço)', () => {

            Product.fisrt() //PRODUTO
            ValidateBalance.withBalance() //VALIDAR SALDO
            cy.selectProductSearch()
            cy.clickVoltageProduct()
            cy.clickAddProduct()
            Service.maoObraDestNãoSep() //Marcar garantia "T.A. Garantia Não Separa"
            Service.garantiaSepTituloProcDif() //Marcar Mão de Obra "T.A. MO Não Destaca e Separa Processo Diferente" 
            Service.clickOKServiceLinked() //SERVIÇOS
            ValidateService.servLinked() ; ValidateService.addGarantNaoSep() ; ValidateService.addMONaoDestSepProcDif()
            Product.second() //PRODUTO
            ValidateBalance.withBalance() //VALIDAR SALDO
            cy.selectProductSearch()
            cy.clickVoltageProduct()
            cy.clickAddProduct()
            Service.validateModalServLinked() //SERVIÇOS - SEGUNDO PRODUTO
            Service.clickOKServiceLinked() //SERVIÇOS
            AvancarPage.toTransporter()
            AvancarPage.toInstallments()
            GeralPagamentoPage.clickGenerateInstallments() //GERAR PARCELAS
            GeralPagamentoPage.loadingFormPayment() 
            ProcessoRecebPage.main()
            ParcelasPage.two()
            AvancarPage.final()
            cy.clickFinalizarPedidoPage() //FINALIZAR PEDIDO
            cy.validateOrderGenerated()
        })

        it('31.Pedido: produto 1860 0 0 (com Garantia que separa em processo diferente e Mão de Obra que destaca e não separa)', () => {

            Product.fisrt() //PRODUTO
            ValidateBalance.withBalance() //VALIDAR SALDO
            cy.selectProductSearch()
            cy.clickVoltageProduct()
            cy.clickAddProduct()
            Service.maoObraNaoDestSepaProcDif() //Marcar garantia "T.A. MO Não Destaca e Separa Processo Diferente"
            Service.garantiaNaoSep() //Marcar Mão de Obra "T.A. MO Destaca e Não Separa"
            Service.clickOKServiceLinked() //SERVIÇOS
            ValidateService.servLinked() ; ValidateService.addGarantSepTituloProcDif() ; ValidateService.addMODestNãoSepara()
            AvancarPage.toTransporter()
            AvancarPage.toInstallments()
            GeralPagamentoPage.clickGenerateInstallments() //GERAR PARCELAS
            GeralPagamentoPage.loadingFormPayment() 
            ProcessoRecebPage.main()
            ParcelasPage.two()
            AvancarPage.final()
            cy.clickFinalizarPedidoPage() //FINALIZAR PEDIDO
            cy.validateOrderGenerated()
        })

        it('32.Pedido: produto 1860 0 0 (com Garantia que separa em processo diferente e Mão de Obra que destaca e não separa) e produto 1870 0 0 (sem serviço)', () => {

            Product.fisrt() //PRODUTO
            ValidateBalance.withBalance() //VALIDAR SALDO
            cy.selectProductSearch()
            cy.clickVoltageProduct()
            cy.clickAddProduct()
            Service.maoObraNaoDestSepaProcDif() //Marcar garantia "T.A. MO Não Destaca e Separa Processo Diferente"
            Service.garantiaNaoSep() //Marcar Mão de Obra "T.A. MO Destaca e Não Separa"
            Service.clickOKServiceLinked() //SERVIÇOS
            ValidateService.servLinked() ; ValidateService.addGarantSepTituloProcDif() ; ValidateService.addMODestNãoSepara()
            Product.second() //PRODUTO
            ValidateBalance.withBalance() //VALIDAR SALDO
            cy.selectProductSearch()
            cy.clickVoltageProduct()
            cy.clickAddProduct()
            Service.clickOKServiceLinked() //SERVIÇOS
            AvancarPage.toTransporter()
            AvancarPage.toInstallments()
            GeralPagamentoPage.clickGenerateInstallments() //GERAR PARCELAS
            GeralPagamentoPage.loadingFormPayment() 
            ProcessoRecebPage.main()
            ParcelasPage.two()
            AvancarPage.final()
            cy.clickFinalizarPedidoPage() //FINALIZAR PEDIDO
            cy.validateOrderGenerated()
        })

        it('33.Pedido: produto 1860 0 0 (com Garantia que separa em processo diferente e Mão de Obra não destaca e separa no mesmo processo)', () => {

            Product.fisrt() //PRODUTO
            ValidateBalance.withBalance() //VALIDAR SALDO
            cy.selectProductSearch()
            cy.clickVoltageProduct()
            cy.clickAddProduct()
            Service.maoObraNaoDestSepaProcDif() //Marcar garantia "T.A. MO Não Destaca e Separa Processo Diferente"
            Service.garantiaSepMesmoProc() //Marcar Mão de Obra "T.A. MO Não Destaca e Separa Mesmo Processo"
            Service.clickOKServiceLinked() //SERVIÇOS
            ValidateService.servLinked() ; ValidateService.addGarantSepTituloProcDif() ; ValidateService.addMONaoDestSepMesmoProc()
            AvancarPage.toTransporter()
            AvancarPage.toInstallments() 
            GeralPagamentoPage.clickGenerateInstallments() //GERAR PARCELAS
            GeralPagamentoPage.loadingFormPayment() 
            ProcessoRecebPage.main()
            ParcelasPage.two()
            AvancarPage.final()
            cy.clickFinalizarPedidoPage() //FINALIZAR PEDIDO
            cy.validateOrderGenerated()
        })

        it('34.Pedido: produto 1860 0 0 (com Garantia que separa em processo diferente e Mão de Obra não destaca e separa no mesmo processo) e produto 1870 0 0 (sem serviço)', () => {

            Product.fisrt() //PRODUTO
            ValidateBalance.withBalance() //VALIDAR SALDO
            cy.selectProductSearch()
            cy.clickVoltageProduct()
            cy.clickAddProduct()
            Service.maoObraNaoDestSepaProcDif() //Marcar garantia "T.A. MO Não Destaca e Separa Processo Diferente"
            Service.garantiaSepMesmoProc() //Marcar Mão de Obra "T.A. MO Não Destaca e Separa Mesmo Processo"
            Service.clickOKServiceLinked() //SERVIÇOS
            ValidateService.servLinked() ; ValidateService.addGarantSepTituloProcDif() ; ValidateService.addMONaoDestSepMesmoProc()
            Product.second() //PRODUTO
            ValidateBalance.withBalance() //VALIDAR SALDO
            cy.selectProductSearch()
            cy.clickVoltageProduct()
            cy.clickAddProduct()
            Service.validateModalServLinked() //SERVIÇOS - SEGUNDO PRODUTO
            Service.clickOKServiceLinked() //SERVIÇOS
            AvancarPage.toTransporter()
            AvancarPage.toInstallments() 
            GeralPagamentoPage.clickGenerateInstallments() //GERAR PARCELAS
            GeralPagamentoPage.loadingFormPayment() 
            ProcessoRecebPage.main()
            ParcelasPage.two()
            AvancarPage.final()
            cy.clickFinalizarPedidoPage() //FINALIZAR PEDIDO
            cy.validateOrderGenerated()
        })

        it('35.Pedido: produto 1860 0 0 (com Garantia que separa em processo diferente e Mão de Obra não destaca e separa em outro processo)', () => {

            Product.fisrt() //PRODUTO
            ValidateBalance.withBalance() //VALIDAR SALDO
            cy.selectProductSearch()
            cy.clickVoltageProduct()
            cy.clickAddProduct()
            Service.maoObraNaoDestSepaProcDif() //Marcar garantia "T.A. MO Não Destaca e Separa Processo Diferente"
            Service.garantiaSepTituloProcDif()
            Service.clickOKServiceLinked() //SERVIÇOS
            ValidateService.servLinked() ; ValidateService.addGarantSepTituloProcDif() ; ValidateService.addMONaoDestSepProcDif()
            AvancarPage.toTransporter()
            AvancarPage.toInstallments()
            GeralPagamentoPage.clickGenerateInstallments() //GERAR PARCELAS
            GeralPagamentoPage.loadingFormPayment() 
            ProcessoRecebPage.main()
            ParcelasPage.two()
            AvancarPage.final()
            cy.clickFinalizarPedidoPage() //FINALIZAR PEDIDO
            cy.validateOrderGenerated()
        })  

        it('36.Pedido: produto 1860 0 0 (com Garantia que separa em processo diferente e Mão de Obra não destaca e separa em outro processo) e produto 1870 0 0 (sem serviço)', () => {

            Product.fisrt() //PRODUTO
            ValidateBalance.withBalance() //VALIDAR SALDO
            cy.selectProductSearch()
            cy.clickVoltageProduct()
            cy.clickAddProduct()
            Service.maoObraNaoDestSepaProcDif()//Marcar garantia "T.A. MO Não Destaca e Separa Processo Diferente"
            Service.garantiaSepTituloProcDif()
            Service.clickOKServiceLinked() //SERVIÇOS
            ValidateService.servLinked() ; ValidateService.addGarantSepTituloProcDif() ; ValidateService.addMONaoDestSepProcDif()
            Product.second() //PRODUTO
            ValidateBalance.withBalance() //VALIDAR SALDO
            cy.selectProductSearch()
            cy.clickVoltageProduct()
            cy.clickAddProduct()
            Service.validateModalServLinked() //SERVIÇOS - SEGUNDO PRODUTO
            Service.clickOKServiceLinked() //SERVIÇOS
            AvancarPage.toTransporter()
            AvancarPage.toInstallments()
            GeralPagamentoPage.clickGenerateInstallments() //GERAR PARCELAS
            GeralPagamentoPage.loadingFormPayment() 
            ProcessoRecebPage.main()
            ParcelasPage.two()
            AvancarPage.final()
            cy.clickFinalizarPedidoPage() //FINALIZAR PEDIDO
            cy.validateOrderGenerated()
        })
    })
})