import { ProcessoVendaPage } from '../../../pages/pedidos/processos/ProcessoVendaPage.js'
import { Product, ValidateBalance } from '../../../pages/pedido/ProdutoPage.js'
import { AdvanceNormal } from '../../../pages/pedido/AvancarPage.js'
import { ThrowDelivery } from '../../../pages/pedido/EntregaPage.js'
import { GeneralPayment } from '../../../pages/pedido/pagamento/GeralPagamentoPage.js'
import { ChooseInstallmentReceipt } from '../../../pages/pedido/pagamento/ParcelasPage.js'
import { ProcessoRecebPage } from '../../../pages/pedido/processos/ProcessoRecebPage.js'
import { Service, ValidateService } from '../../../pages/pedido/ServicosPage.js'

describe('Gerar pedidos com Mão de obra', () => {

    beforeEach(() => {
        cy.visit('/')
        cy.clearAllSessionStorage()
        cy.login()
        cy.urlAposLogin()
        cy.tituloPagina()
        ProcessoVendaPage.NFe() //processo normal
        cy.chooseClient()
    })
  
    context('Sem entrega/processo 9860 - caminho feliz', () => {

        it('1.Pedido: produto 1860 0 0 (com Mão de Obra que Destaca e Não separa título', () => {
    
            Product.fisrt() //PRODUTO
            ValidateBalance.withBalance() //VALIDAR SALDO
            cy.selectProductSearch()
            cy.clickVoltageProduct()
            cy.clickAddProduct()
            Service.garantiaNaoSep() //Marcar Mão de Obra "T.A. MO Destaca e Não Separa"
            Service.clickOKServiceLinked() //SERVIÇOS
            ValidateService.servLinked() ; ValidateService.addMODestNãoSepara()
            ThrowDelivery.freightFirst() //ENTREGA
            AdvanceNormal.toInstallments() 
            GeneralPayment.clickGenerateInstallments() //GERAR PARCELAS
            GeneralPayment.loadingFormPayment() 
            ProcessoRecebPage.main()
            ChooseInstallmentReceipt.two()
            AdvanceNormal.final()
            cy.clickFinishOrder() //FINALIZAR PEDIDO
            cy.validateOrderGenerated()
        })

        it('2.Pedido: produto 1860 0 0 (com Mão de Obra que Destaca e Não separa título) e produto 1870 0 0 (sem serviço)', () => {

            Product.fisrt() //PRODUTO
            ValidateBalance.withBalance() //VALIDAR SALDO
            cy.selectProductSearch()
            cy.clickVoltageProduct()
            cy.clickAddProduct()
            Service.garantiaNaoSep()  //Marcar Mão de Obra "T.A. MO Destaca e Não Separa"
            Service.clickOKServiceLinked() //SERVIÇOS
            ValidateService.servLinked() ; ValidateService.addMODestNãoSepara()
            ThrowDelivery.freightFirst() //ENTREGA
            Product.second() //PRODUTO
            ValidateBalance.withBalance() //VALIDAR SALDO
            cy.selectProductSearch()
            cy.clickVoltageProduct()
            cy.clickAddProduct()
            Service.validateModalServLinked() //SERVIÇOS - SEGUNDO PRODUTO
            Service.clickOKServiceLinked()
            ThrowDelivery.freightSecond() //ENTREGA - SEGUNDO PRODUTO
            AdvanceNormal.toInstallments()
            GeneralPayment.clickGenerateInstallments() //GERAR PARCELAS
            GeneralPayment.loadingFormPayment() 
            ProcessoRecebPage.main()
            ChooseInstallmentReceipt.two()
            AdvanceNormal.final()
            cy.clickFinishOrder() //FINALIZAR PEDIDO
            cy.validateOrderGenerated()
        })
    
        it('3.Pedido: produto 1860 0 0 (com Mão de Obra que Não destaca e Separa título no Mesmo processo)', () => {
    
            Product.fisrt() //PRODUTO
            ValidateBalance.withBalance() //VALIDAR SALDO
            cy.selectProductSearch()
            cy.clickVoltageProduct()
            cy.clickAddProduct()
            Service.garantiaSepMesmoProc() //Marcar Mão de Obra "T.A. MO Não Destaca e Separa Mesmo Processo"
            Service.clickOKServiceLinked() //SERVIÇOS
            ValidateService.servLinked() ; ValidateService.addMONaoDestSepMesmoProc()
            ThrowDelivery.freightFirst() //ENTREGA
            AdvanceNormal.toInstallments()  
            GeneralPayment.clickGenerateInstallments() //GERAR PARCELAS
            GeneralPayment.loadingFormPayment() 
            ProcessoRecebPage.main()
            ChooseInstallmentReceipt.two()
            AdvanceNormal.final()
            cy.clickFinishOrder() //FINALIZAR PEDIDO
            cy.validateOrderGenerated()
        })

        it('4.Pedido: produto 1860 0 0 (com Mão de Obra que Não destaca e Separa título no Mesmo processo) e produto 1870 0 0 (sem serviço)', () => {
    
            Product.fisrt() //PRODUTO
            ValidateBalance.withBalance() //VALIDAR SALDO
            cy.selectProductSearch()
            cy.clickVoltageProduct()
            cy.clickAddProduct()
            Service.garantiaSepMesmoProc() //Marcar Mão de Obra "T.A. MO Não Destaca e Separa Mesmo Processo"
            Service.clickOKServiceLinked() //SERVIÇOS
            ValidateService.servLinked() ; ValidateService.addMONaoDestSepMesmoProc()
            ThrowDelivery.freightFirst() //ENTREGA
            Product.second() //PRODUTO
            ValidateBalance.withBalance() //VALIDAR SALDO
            cy.selectProductSearch()
            cy.clickVoltageProduct()
            cy.clickAddProduct()
            Service.validateModalServLinked() //SERVIÇOS - SEGUNDO PRODUTO
            Service.clickOKServiceLinked()
            ThrowDelivery.freightSecond() //ENTREGA- SEGUNDO PRODUTO
            AdvanceNormal.toInstallments() 
            GeneralPayment.clickGenerateInstallments() //GERAR PARCELAS
            GeneralPayment.loadingFormPayment() 
            ProcessoRecebPage.main()
            ChooseInstallmentReceipt.two()
            AdvanceNormal.final()
            cy.clickFinishOrder() //FINALIZAR PEDIDO
            cy.validateOrderGenerated()
        })
    
        it('5.Pedido: produto 1860 0 0 (com Mão de Obra que Não destaca e Separa título em processo Diferente)', () => {

            Product.fisrt() //PRODUTO
            ValidateBalance.withBalance() //VALIDAR SALDO
            cy.selectProductSearch()
            cy.clickVoltageProduct()
            cy.clickAddProduct()
            Service.garantiaSepTituloProcDif() //Marcar Mão de obra que não destaca e separa título em processo diferente
            Service.clickOKServiceLinked() //SERVIÇOS
            ValidateService.servViservLinkednc() ; ValidateService.addMONaoDestSepProcDif()
            ThrowDelivery.freightFirst() //ENTREGA
            AdvanceNormal.toInstallments() 
            GeneralPayment.clickGenerateInstallments() //GERAR PARCELAS
            GeneralPayment.loadingFormPayment() 
            ProcessoRecebPage.main()
            ChooseInstallmentReceipt.two()
            AdvanceNormal.final()
            cy.clickFinishOrder() //FINALIZAR PEDIDO
            cy.validateOrderGenerated()
        })

        it('6.Pedido: produto 1860 0 0 (com Mão de Obra que Não destaca e Separa título em processo Diferente) e produto 1870 0 0 (sem serviço)', () => {

            Product.fisrt() //PRODUTO
            ValidateBalance.withBalance() //VALIDAR SALDO
            cy.selectProductSearch()
            cy.clickVoltageProduct()
            cy.clickAddProduct()
            Service.garantiaSepTituloProcDif() //Marcar Mão de obra que não destaca e separa título em processo diferente
            Service.clickOKServiceLinked() //SERVIÇOS
            ValidateService.servLinked() ; ValidateService.addMONaoDestSepProcDif()
            ThrowDelivery.freightFirst() //ENTREGA
            Product.second() //PRODUTO
            ValidateBalance.withBalance() //VALIDAR SALDO
            cy.selectProductSearch()
            cy.clickVoltageProduct()
            cy.clickAddProduct()
            Service.validateModalServLinked() //SERVIÇOS - SEGUNDO PRODUTO
            Service.clickOKServiceLinked()
            ThrowDelivery.freightSecond() //ENTREGA - SEGUNDO PRODUTO
            AdvanceNormal.toInstallments() 
            GeneralPayment.clickGenerateInstallments() //GERAR PARCELAS
            GeneralPayment.loadingFormPayment() 
            ProcessoRecebPage.main()
            ChooseInstallmentReceipt.two()
            AdvanceNormal.final()
            cy.clickFinishOrder() //FINALIZAR PEDIDO
            cy.validateOrderGenerated()
        })
    })

    context('Com entrega/processo 9860 - caminho feliz', () => {

        it('7.Pedido: produto 1860 0 0 (com Mão de Obra que Destaca e Não separa título)', () => {
    
            Product.fisrt() //PRODUTO
            ValidateBalance.withBalance() //VALIDAR SALDO
            cy.selectProductSearch()
            cy.clickVoltageProduct()
            cy.clickAddProduct()
            Service.garantiaNaoSep()  //Marcar Mão de Obra "T.A. MO Destaca e Não Separa"
            Service.clickOKServiceLinked() //SERVIÇOS
            ValidateService.servLinked() ; ValidateService.addMODestNãoSepara()
            AdvanceNormal.toTransporter()
            AdvanceNormal.toInstallments()
            GeneralPayment.clickGenerateInstallments() //GERAR PARCELAS
            GeneralPayment.loadingFormPayment() 
            ProcessoRecebPage.main()
            ChooseInstallmentReceipt.two()
            AdvanceNormal.final()
            cy.clickFinishOrder() //FINALIZAR PEDIDO
            cy.validateOrderGenerated()
        })
        
        it('8.Pedido: produto 1860 0 0 (com Mão de Obra que Destaca e Não separa título) e produto 1870 0 0 (sem serviço)', () => {
    
            Product.fisrt() //PRODUTO
            ValidateBalance.withBalance() //VALIDAR SALDO
            cy.selectProductSearch()
            cy.clickVoltageProduct()
            cy.clickAddProduct()
            Service.garantiaNaoSep()  //Marcar Mão de Obra "T.A. MO Destaca e Não Separa"
            Service.clickOKServiceLinked() //SERVIÇOS
            ValidateService.servLinked() ; ValidateService.addMODestNãoSepara()
            Product.second() //PRODUTO
            ValidateBalance.withBalance() //VALIDAR SALDO
            cy.selectProductSearch()
            cy.clickVoltageProduct()
            cy.clickAddProduct()
            Service.validateModalServLinked() //SERVIÇOS - SEGUNDO PRODUTO
            Service.clickOKServiceLinked() //SERVIÇOS
            AdvanceNormal.toTransporter()
            AdvanceNormal.toInstallments()
            GeneralPayment.clickGenerateInstallments() //GERAR PARCELAS
            GeneralPayment.loadingFormPayment() 
            ProcessoRecebPage.main()
            ChooseInstallmentReceipt.two()
            AdvanceNormal.final()
            cy.clickFinishOrder() //FINALIZAR PEDIDO
            cy.validateOrderGenerated()
        })

        it('9.Pedido: produto 1860 0 0 (com Mão de Obra que Não destaca e Separa título no Mesmo processo)', () => {
    
            Product.fisrt() //PRODUTO
            ValidateBalance.withBalance() //VALIDAR SALDO
            cy.selectProductSearch()
            cy.clickVoltageProduct()
            cy.clickAddProduct()
            Service.garantiaSepMesmoProc() //Marcar Mão de Obra "T.A. MO Não Destaca e Separa Mesmo Processo"
            Service.clickOKServiceLinked() //SERVIÇOS
            ValidateService.servLinked() ; ValidateService.addMONaoDestSepMesmoProc()
            AdvanceNormal.toTransporter()
            AdvanceNormal.toInstallments()
            GeneralPayment.clickGenerateInstallments() //GERAR PARCELAS
            GeneralPayment.loadingFormPayment() 
            ProcessoRecebPage.main()
            ChooseInstallmentReceipt.two()
            AdvanceNormal.final()
            cy.clickFinishOrder() //FINALIZAR PEDIDO
            cy.validateOrderGenerated()
        })

        it('10.Pedido: produto 1860 0 0 (com Mão de Obra que Não destaca e Separa título no Mesmo processo) e produto 1870 0 0 (sem serviço)', () => {
    
            Product.fisrt() //PRODUTO
            ValidateBalance.withBalance() //VALIDAR SALDO
            cy.selectProductSearch()
            cy.clickVoltageProduct()
            cy.clickAddProduct()
            Service.garantiaSepMesmoProc() //Marcar Mão de Obra "T.A. MO Não Destaca e Separa Mesmo Processo"
            Service.clickOKServiceLinked() //SERVIÇOS
            ValidateService.servLinked() ; ValidateService.addMONaoDestSepMesmoProc()
            Product.second() //PRODUTO
            ValidateBalance.withBalance() //VALIDAR SALDO
            cy.selectProductSearch()
            cy.clickVoltageProduct()
            cy.clickAddProduct()
            Service.validateModalServLinked() //SERVIÇOS - SEGUNDO PRODUTP
            Service.clickOKServiceLinked() //SERVIÇOS
            AdvanceNormal.toTransporter()
            AdvanceNormal.toInstallments()
            GeneralPayment.clickGenerateInstallments() //GERAR PARCELAS
            GeneralPayment.loadingFormPayment() 
            ProcessoRecebPage.main()
            ChooseInstallmentReceipt.two()
            AdvanceNormal.final()
            cy.clickFinishOrder() //FINALIZAR PEDIDO
            cy.validateOrderGenerated()
        })

        it('11.Pedido: produto 1860 0 0 (com Mão de Obra que Não destaca e Separa título em processo Diferente)', () => {
    
            Product.fisrt() //PRODUTO
            ValidateBalance.withBalance() //VALIDAR SALDO
            cy.selectProductSearch()
            cy.clickVoltageProduct()
            cy.clickAddProduct()
            Service.garantiaSepTituloProcDif() //Marcar Mão de obra que não destaca e separa título em processo diferente
            Service.clickOKServiceLinked() //SERVIÇOS
            ValidateService.servLinked() ; ValidateService.addMONaoDestSepProcDif()
            AdvanceNormal.toTransporter()
            AdvanceNormal.toInstallments()
            GeneralPayment.clickGenerateInstallments() //GERAR PARCELAS
            GeneralPayment.loadingFormPayment() 
            ProcessoRecebPage.main()
            ChooseInstallmentReceipt.two()
            AdvanceNormal.final()
            cy.clickFinishOrder() //FINALIZAR PEDIDO
            cy.validarPedvalidateOrderGeneratedGerado()
        })

        it('12.Pedido: produto 1860 0 0 (com Mão de Obra que Não destaca e Separa título em processo Diferente) e produto 1870 0 0 (sem serviço)', () => {
    
            Product.fisrt() //PRODUTO
            ValidateBalance.withBalance() //VALIDAR SALDO
            cy.selectProductSearch()
            cy.clickVoltageProduct()
            cy.clickAddProduct()
            Service.garantiaSepTituloProcDif() //Marcar Mão de obra que não destaca e separa título em processo diferente
            Service.clickOKServiceLinked() //SERVIÇOS
            ValidateService.servLinked() ; ValidateService.addMONaoDestSepProcDif()
            Product.second() //PRODUTO
            ValidateBalance.withBalance() //VALIDAR SALDO
            cy.selectProductSearch()
            cy.clickVoltageProduct()
            cy.clickAddProduct()
            Service.validateModalServLinked() //SERVIÇOS - SEGUNDO PRODUTO
            Service.clickOKServiceLinked() //SERVIÇOS
            AdvanceNormal.toTransporter()
            AdvanceNormal.toInstallments()
            GeneralPayment.clickGenerateInstallments() //GERAR PARCELAS
            GeneralPayment.loadingFormPayment() 
            ProcessoRecebPage.main()
            ChooseInstallmentReceipt.two()
            AdvanceNormal.final()
            cy.clickFinishOrder() //FINALIZAR PEDIDO
            cy.validateOrderGenerated()
        })
    })
})