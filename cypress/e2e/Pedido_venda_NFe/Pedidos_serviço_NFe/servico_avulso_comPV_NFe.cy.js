import { ProcessoVendaPage } from '../../../pages/pedidos/processos/ProcessoVendaPage.js'
import { AvancarPage } from '../../../pages/pedido/AvancarPage.js'
import { GeralPagamentoPage } from '../../../pages/pedido/pagamento/GeralPagamentoPage.js'
import { ParcelasPage } from '../../../pages/pedido/ParcelasPage.js'
import { ProcessoRecebPage } from '../../../pages/pedido/ProcessoRecebPage.js'
import { ServicosAvulsosPage } from '../../../pages/pedido/ServicosAvulsosPage.js'
import { Service, ValidateService } from '../../../pages/pedido/ServicosPage.js'


describe('Venda de serviço avulso, com pedido do produto já baixado', () => {

    beforeEach(() => {
        cy.visit('/')
        cy.clearAllSessionStorage()
        cy.login()
        cy.urlAposLogin()
        cy.tituloPagina() 
        ProcessoVendaPage.saleServiceLoose()
        cy.chooseCliente()
    })

    context('Processo 9888 - caminho feliz', () => {

        it('1.Pedido de garantia - 139 (T.A. Garantia Separa Mesmo Processo)', () => {

            const numero_pedido = '8605'
            
            ServicosAvulsosPage.clickMenuOpcoes()
            ServicosAvulsosPage.clientCompleteOptionMenu()
            ServicosAvulsosPage.clickMenuClientComplete()
            ServicosAvulsosPage.clicarOpcaoSeclickOptionServicesrvicos()
            ServicosAvulsosPage.waitLoadingService()

            //Validando campo
            cy.get('form.ng-pristine > .ng-pristine')
                .should('exist')
                .and('be.visible')
                .and('have.text', '')

            //Inserindo número do pedido no campo 
            cy.get('form.ng-pristine > .ng-pristine')
                .type(numero_pedido, {force:true})

            //Validando número do pedido
            cy.get('[ng-show="filtroShow(pedidoAtual)"][aria-hidden="false"] > .md-list-item-text > h3 > .ng-binding')
                .should('have.text', numero_pedido)

            ServicosAvulsosPage.buttonAddMaoObra()
            ServicosAvulsosPage.buttonAddGarantias()
            ServicosAvulsosPage.clickAddGarantias()
            ServicosAvulsosPage.modalGarantiasServicesLinked()
            Service.garantiaSepMesmoProc()
            Service.clickOKServiceLinked()
            ServicosAvulsosPage.messLinkedAddedSucess()
            ServicosAvulsosPage.buttonSaveService()
            ServicosAvulsosPage.messWaitLoading()
            ServicosAvulsosPage.messResgistrationSaveSucess()
            ServicosAvulsosPage.clickAddGarantias() 
            ServicosAvulsosPage.messGarantiaAdded()
            ServicosAvulsosPage.clickCartShopping()
            ServicosAvulsosPage.buttonAdvanceOrder()
            GeralPagamentoPage.clickGenerateInstallments() 
            GeralPagamentoPage.loadingFormPayment()
            ProcessoRecebPage.main()
            ParcelasPage.two()
            AvancarPage.final()
            cy.clickFinalizarPedidoPage()
            cy.validateOrderGenerated()
        })
    })
})