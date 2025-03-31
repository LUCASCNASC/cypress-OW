import { ProcessoVenda } from '../../../../pages/para_pedidos/processos/processo_venda.js'
import { EscolherCliente } from '../../../../pages/para_pedidos/cliente/cliente.js'
import { ValidarSaldo } from '../../../../pages/para_pedidos/saldo/validar_saldo.js'
import { Product } from '../../../../pages/produtos/prd_normal.js'
import { Servico } from '../../../../pages/para_pedidos/servicos/valida_servicos_adicionados.js'
import { AvancarNormal } from '../../../../pages/para_pedidos/botoes/avancar/avancar_normal.js'
import { FinishOrder } from '../../../../pages/para_pedidos/finalizar_pedido.js'
import { TirarEntrega } from '../../../../pages/para_pedidos/entrega/tirar_entrega.js'
import { GeralPagamento } from '../../../../pages/para_pedidos/pagamento/geral_pagamento.js'
import { EscolherParcelaReceb } from '../../../../pages/para_pedidos/pagamento/parcelas.js'
import { Recebimento } from '../../../../pages/para_pedidos/processos/processo_recebimento.js'
import { Servico } from '../../../../pages/para_pedidos/servicos/apenas_servicos.js'
import { ValidarServico } from '../../../../pages/para_pedidos/servicos/valida_servicos_adicionados.js'

describe('Gerar pedidos com Garantia e Mão de Obra', () => {

    beforeEach(() => {
        cy.visit('/')
        cy.clearAllSessionStorage()
        cy.login()
        cy.urlAposLogin()
        cy.tituloPagina() 
        ProcessoVenda.NFe()
        EscolherCliente.withRoute()
        Product.fisrt() //PRODUTO
        ValidarSaldo.withBalance()
        cy.selectProductSearch()
        cy.clickVoltageProduct()
        cy.clickAddProduct()
        Servico.validateModalServLinked()
    })

    context('Sem entrega/processo 9860 - caminho feliz', () => {
    
        it('1. Ped venda: produto 1860 0 0 (com Garantia que separa título no mesmo processo e Mão de Obra que destaca e não separa)', () => {
            
            Servico.maoObraNaoDestSepMesmoProc() //Marcar garantia "T.A. Garantia Separa Mesmo Processo"
            Servico.garantiaNaoSep() //Marcar Mão de Obra "T.A. MO Destaca e Não Separa"
            Servico.clickOKServiceLinked() //SERVIÇOS
            ValidarServico.servLinked() ; ValidarServico.AddGarantSepMesmoProc() ; ValidarServico.addMODestNãoSepara()
            TirarEntrega.freightFirst() //ENTREGA
            AvancarNormal.toInstallments() 
            GeralPagamento.clickGenerateInstallments() //GERAR PARCELAS
            GeralPagamento.loadingFormPayment() 
            Recebimento.main()
            EscolherParcelaReceb.two()
            AvancarNormal.final()
            FinishOrder.clickFinishOrder() //RESUMO
            FinishOrder.validateOrderGenerated()
        })

        it('2. Ped venda: produto 1860 0 0 (com Garantia que separa título no mesmo processo e Mão de Obra que destaca e não separa) e produto 1870 0 0 (sem serviço)', () => {

            Servico.maoObraNaoDestSepMesmoProc() //Marcar garantia "T.A. Garantia Separa Mesmo Processo"
            Servico.garantiaNaoSep() //Marcar Mão de Obra "T.A. MO Destaca e Não Separa"
            Servico.clickOKServiceLinked() //SERVIÇOS
            ValidarServico.servLinked() ; ValidarServico.AddGarantSepMesmoProc() ; ValidarServico.addMODestNãoSepara()
            TirarEntrega.freightFirst() //ENTREGA
            Product.second() //PRODUTO
            ValidarSaldo.withBalance()
            cy.selectProductSearch()
            cy.clickVoltageProduct()
            cy.clickAddProduct()
            Servico.validateModalServLinked() //SERVIÇOS - SEGUNDO PRODUTO
            Servico.clickOKServiceLinked()
            TirarEntrega.freightSecond() //ENTREGA - SEGUNDO PRODUTO
            AvancarNormal.toInstallments()
            GeralPagamento.clickGenerateInstallments() //GERAR PARCELAS
            GeralPagamento.loadingFormPayment() 
            Recebimento.main()
            EscolherParcelaReceb.two()
            AvancarNormal.final()
            FinishOrder.clickFinishOrder() //RESUMO
            FinishOrder.validateOrderGenerated()
        })

        it('3. Ped venda: produto 1860 0 0 (com Garantia que separa título no mesmo processo e Mão de Obra não destaca e separa no mesmo processo)', () => {

            Servico.maoObraNaoDestSepMesmoProc() //Marcar garantia "T.A. Garantia Separa Mesmo Processo"
            Servico.garantiaSepMesmoProc() //Marcar Mão de Obra "T.A. MO Não Destaca e Separa Mesmo Processo"
            Servico.clickOKServiceLinked() //SERVIÇOS
            ValidarServico.servLinked() ; ValidarServico.AddGarantSepMesmoProc() ; ValidarServico.addMONaoDestSepMesmoProc()
            TirarEntrega.freightFirst() //ENTREGA
            AvancarNormal.toInstallments()
            GeralPagamento.clickGenerateInstallments() //GERAR PARCELAS
            GeralPagamento.loadingFormPayment() 
            Recebimento.main()
            EscolherParcelaReceb.two()
            AvancarNormal.final()
            FinishOrder.clickFinishOrder() //RESUMO
            FinishOrder.validateOrderGenerated()
        })

        it('4. Ped venda: produto 1860 0 0 (com Garantia que separa título no mesmo processo e Mão de Obra não destaca e separa no mesmo processo) e produto 1870 0 0 (sem serviço)', () => {

            Servico.maoObraNaoDestSepMesmoProc() //Marcar garantia "T.A. Garantia Separa Mesmo Processo"
            Servico.garantiaSepMesmoProc() //Marcar Mão de Obra "T.A. MO Não Destaca e Separa Mesmo Processo"
            Servico.clickOKServiceLinked() //SERVIÇOS
            ValidarServico.servLinked() ; ValidarServico.AddGarantSepMesmoProc() ; ValidarServico.addMONaoDestSepMesmoProc()
            TirarEntrega.freightFirst() //ENTREGA
            Product.second() //PRODUTO
            ValidarSaldo.withBalance()
            cy.selectProductSearch()
            cy.clickVoltageProduct()
            cy.clickAddProduct()
            Servico.clickOKServiceLinked() //SERVIÇOS - SEGUNDO PRODUTO
            TirarEntrega.freightSecond() //ENTREGA - SEGUNDO PRODUTO
            AvancarNormal.toInstallments() 
            GeralPagamento.clickGenerateInstallments() //GERAR PARCELAS
            GeralPagamento.loadingFormPayment() 
            Recebimento.main()
            EscolherParcelaReceb.two()
            AvancarNormal.final()
            FinishOrder.clickFinishOrder() //RESUMO
            FinishOrder.validateOrderGenerated()
        })

        it('5. Ped venda: produto 1860 0 0 (com Garantia que separa título no mesmo processo e Mão de Obra não destaca e separa em outro processo)', () => {

            Servico.maoObraNaoDestSepMesmoProc() //Marcar garantia "T.A. Garantia Separa Mesmo Processo"
            Servico.garantiaSepTituloProcDif() //Marcar Mão de Obra "T.A. MO Não Destaca e Separa Processo Diferente" 
            Servico.clickOKServiceLinked() //SERVIÇOS
            ValidarServico.servLinked() ; ValidarServico.AddGarantSepMesmoProc() ; ValidarServico.addMONaoDestSepProcDif()
            TirarEntrega.freightFirst() //ENTREGA
            AvancarNormal.toInstallments() 
            GeralPagamento.clickGenerateInstallments() //GERAR PARCELAS
            GeralPagamento.loadingFormPayment() 
            Recebimento.main()
            EscolherParcelaReceb.two()
            AvancarNormal.final()
            FinishOrder.clickFinishOrder() //RESUMO
            FinishOrder.validateOrderGenerated()
        })

        it('6. Ped venda: produto 1860 0 0 (com Garantia que separa título no mesmo processo e Mão de Obra não destaca e separa em outro processo) e produto 1870 0 0 (sem serviço)', () => {

            Servico.maoObraNaoDestSepMesmoProc() //Marcar garantia "T.A. Garantia Separa Mesmo Processo"
            Servico.garantiaSepTituloProcDif() //Marcar Mão de Obra "T.A. MO Não Destaca e Separa Processo Diferente" 
            Servico.clickOKServiceLinked() //SERVIÇOS
            ValidarServico.servLinked() ; ValidarServico.AddGarantSepMesmoProc() ; ValidarServico.addMONaoDestSepProcDif()
            TirarEntrega.freightFirst() //ENTREGA
            Product.second() //PRODUTO
            ValidarSaldo.withBalance()
            cy.selectProductSearch()
            cy.clickVoltageProduct()
            cy.clickAddProduct()
            Servico.clickOKServiceLinked() //SERVIÇOS
            TirarEntrega.freightSecond() //ENTREGA - SEGUNDO PRODUTO
            AvancarNormal.toInstallments() 
            GeralPagamento.clickGenerateInstallments() //GERAR PARCELAS
            GeralPagamento.loadingFormPayment() 
            Recebimento.main()
            EscolherParcelaReceb.two()
            AvancarNormal.final()
            FinishOrder.clickFinishOrder() //RESUMO
            FinishOrder.validateOrderGenerated()
        })

        it('7. Ped venda: produto 1860 0 0 (com Garantia que não separa e Mão de Obra que destaca e não separa)', () => {

            Servico.maoObraDestNãoSep() //Marcar garantia "T.A. Garantia Não Separa"
            Servico.garantiaNaoSep()//Marcar Mão de Obra "T.A. MO Destaca e Não Separa"
            Servico.clickOKServiceLinked() //SERVIÇOS
            ValidarServico.servLinked() ; ValidarServico.addGarantNaoSep() ; ValidarServico.addMODestNãoSepara()
            TirarEntrega.freightFirst() //ENTREGA
            AvancarNormal.toInstallments() 
            GeralPagamento.clickGenerateInstallments() //GERAR PARCELAS
            GeralPagamento.loadingFormPayment() 
            Recebimento.main()
            EscolherParcelaReceb.two()
            AvancarNormal.final()
            FinishOrder.clickFinishOrder() //RESUMO
            FinishOrder.validateOrderGenerated()
        })

        it('8. Ped venda: produto 1860 0 0 (com Garantia que não separa e Mão de Obra que destaca e não separa) e produto 1870 0 0 (sem serviço)', () => {

            Servico.maoObraDestNãoSep() //Marcar garantia "T.A. Garantia Não Separa"
            Servico.garantiaNaoSep()//Marcar Mão de Obra "T.A. MO Destaca e Não Separa"
            Servico.clickOKServiceLinked() //SERVIÇOS
            ValidarServico.servLinked() ; ValidarServico.addGarantNaoSep() ; ValidarServico.addMODestNãoSepara()
            TirarEntrega.freightFirst() //ENTREGA
            Product.second() //PRODUTO
            ValidarSaldo.withBalance()
            cy.selectProductSearch()
            cy.clickVoltageProduct()
            cy.clickAddProduct()
            Servico.validateModalServLinked() //SERVIÇOS
            Servico.clickOKServiceLinked()
            TirarEntrega.freightSecond() //ENTREGA
            AvancarNormal.toInstallments() 
            GeralPagamento.clickGenerateInstallments() //GERAR PARCELAS
            GeralPagamento.loadingFormPayment() 
            Recebimento.main()
            EscolherParcelaReceb.two()
            AvancarNormal.final()
            FinishOrder.clickFinishOrder() //RESUMO
            FinishOrder.validateOrderGenerated()
        })

        it('9. Ped venda: produto 1860 0 0 (com Garantia que não separa e Mão de Obra não destaca e separa no mesmo processo)', () => {

            Servico.maoObraDestNãoSep() //Marcar garantia "T.A. Garantia Não Separa"
            Servico.garantiaSepMesmoProc() //Marcar Mão de Obra "T.A. MO Não Destaca e Separa Mesmo Processo"
            Servico.clickOKServiceLinked() //SERVIÇOS
            ValidarServico.servLinked() ; ValidarServico.addGarantNaoSep() ; ValidarServico.addMONaoDestSepMesmoProc()
            TirarEntrega.freightFirst() //ENTREGA
            AvancarNormal.toInstallments() 
            GeralPagamento.clickGenerateInstallments() //GERAR PARCELAS
            GeralPagamento.loadingFormPayment() 
            Recebimento.main()
            EscolherParcelaReceb.two()
            AvancarNormal.final()
            FinishOrder.clickFinishOrder() //RESUMO
            FinishOrder.validateOrderGenerated()
        })

        it('10. Ped venda: produto 1860 0 0 (com Garantia que não separa e Mão de Obra não destaca e separa no mesmo processo) e produto 1870 0 0 (sem serviço)', () => {

            Servico.maoObraDestNãoSep() //Marcar garantia "T.A. Garantia Não Separa"
            Servico.garantiaSepMesmoProc() //Marcar Mão de Obra "T.A. MO Não Destaca e Separa Mesmo Processo"
            Servico.clickOKServiceLinked() //SERVIÇOS
            ValidarServico.servLinked() ; ValidarServico.addGarantNaoSep() ; ValidarServico.addMONaoDestSepMesmoProc()
            TirarEntrega.freightFirst() //ENTREGA
            Product.second() //PRODUTO
            ValidarSaldo.withBalance()
            cy.selectProductSearch()
            cy.clickVoltageProduct()
            cy.clickAddProduct()
            Servico.validateModalServLinked() //SERVIÇOS - SEGUNDO PRODUTO
            Servico.clickOKServiceLinked()
            TirarEntrega.freightSecond() //ENTREGA - SEGUNDO PRODUTO
            AvancarNormal.toInstallments() 
            GeralPagamento.clickGenerateInstallments() //GERAR PARCELAS
            GeralPagamento.loadingFormPayment() 
            Recebimento.main()
            EscolherParcelaReceb.two()
            AvancarNormal.final()
            FinishOrder.clickFinishOrder() //RESUMO
            FinishOrder.validateOrderGenerated()
        })

        it('11. Ped venda: produto 1860 0 0 (com Garantia que não separa e Mão de Obra não destaca e separa em outro processo)', () => {

            Servico.maoObraDestNãoSep() //Marcar garantia "T.A. Garantia Não Separa"
            Servico.garantiaSepTituloProcDif() //Marcar Mão de Obra "T.A. MO Não Destaca e Separa Processo Diferente" 
            Servico.clickOKServiceLinked() //SERVIÇOS
            ValidarServico.servLinked() ; ValidarServico.addGarantNaoSep() ; ValidarServico.addMONaoDestSepProcDif()
            TirarEntrega.freightFirst() //ENTREGA
            AvancarNormal.toInstallments() 
            GeralPagamento.clickGenerateInstallments() //GERAR PARCELAS
            GeralPagamento.loadingFormPayment() 
            Recebimento.main()
            EscolherParcelaReceb.two()
            AvancarNormal.final()
            FinishOrder.clickFinishOrder() //RESUMO
            FinishOrder.validateOrderGenerated()
        })

        it('12. Ped venda: produto 1860 0 0 (com Garantia que não separa e Mão de Obra não destaca e separa em outro processo) e produto 1870 0 0 (sem serviço)', () => {

            Servico.maoObraDestNãoSep() //Marcar garantia "T.A. Garantia Não Separa"
            Servico.garantiaSepTituloProcDif() //Marcar Mão de Obra "T.A. MO Não Destaca e Separa Processo Diferente" 
            Servico.clickOKServiceLinked() //SERVIÇOS
            ValidarServico.servLinked() ; ValidarServico.addGarantNaoSep() ; ValidarServico.addMONaoDestSepProcDif()
            TirarEntrega.freightFirst() //ENTREGA
            Product.second() //PRODUTO
            ValidarSaldo.withBalance()
            cy.selectProductSearch()
            cy.clickVoltageProduct()
            cy.clickAddProduct()
            Servico.validateModalServLinked() //SERVIÇOS - SEGUNDO PRODUTO
            Servico.clickOKServiceLinked()
            TirarEntrega.freightSecond() //ENTREGA - SEGUNDO PRODUTO
            AvancarNormal.toInstallments() 
            GeralPagamento.clickGenerateInstallments() //GERAR PARCELAS
            GeralPagamento.loadingFormPayment() 
            Recebimento.main()
            EscolherParcelaReceb.two()
            AvancarNormal.final()
            FinishOrder.clickFinishOrder() //RESUMO
            FinishOrder.validateOrderGenerated()
        })

        it('13. Ped venda: produto 1860 0 0 (com Garantia que separa em processo diferente e Mão de Obra que destaca e não separa)', () => {

            Servico.maoObraNaoDestSepaProcDif() //Marcar garantia "T.A. MO Não Destaca e Separa Processo Diferente"
            Servico.garantiaNaoSep() //Marcar Mão de Obra "T.A. MO Destaca e Não Separa"
            Servico.clickOKServiceLinked() //SERVIÇOS
            ValidarServico.servLinked() ; ValidarServico.addGarantSepTituloProcDif() ; ValidarServico.addMODestNãoSepara()
            TirarEntrega.freightFirst() //ENTREGA
            AvancarNormal.toInstallments() 
            GeralPagamento.clickGenerateInstallments() //GERAR PARCELAS
            GeralPagamento.loadingFormPayment() 
            Recebimento.main()
            EscolherParcelaReceb.two()
            AvancarNormal.final()
            FinishOrder.clickFinishOrder() //RESUMO
            FinishOrder.validateOrderGenerated()
        })

        it('14. Ped venda: produto 1860 0 0 (com Garantia que separa em processo diferente e Mão de Obra que destaca e não separa) e produto 1870 0 0 (sem serviço)', () => {

            Servico.maoObraNaoDestSepaProcDif() //Marcar garantia "T.A. MO Não Destaca e Separa Processo Diferente"
            Servico.garantiaNaoSep() //Marcar Mão de Obra "T.A. MO Destaca e Não Separa"
            Servico.clickOKServiceLinked() //SERVIÇOS
            ValidarServico.servLinked() ; ValidarServico.addGarantSepTituloProcDif() ; ValidarServico.addMODestNãoSepara()
            TirarEntrega.freightFirst() //ENTREGA
            Product.second() //PRODUTO
            ValidarSaldo.withBalance()
            cy.selectProductSearch()
            cy.clickVoltageProduct()
            cy.clickAddProduct()
            Servico.validateModalServLinked() //SERVIÇOS - SEGUNDO PRODUTO
            Servico.clickOKServiceLinked()
            TirarEntrega.freightSecond() //ENTREGA - SEGUNDO PRODUTO
            AvancarNormal.toInstallments() 
            GeralPagamento.clickGenerateInstallments() //GERAR PARCELAS
            GeralPagamento.loadingFormPayment() 
            Recebimento.main()
            EscolherParcelaReceb.two()
            AvancarNormal.final()
            FinishOrder.clickFinishOrder() //RESUMO
            FinishOrder.validateOrderGenerated()
        })

        it('15. Ped venda: produto 1860 0 0 (com Garantia que separa em processo diferente e Mão de Obra não destaca e separa no mesmo processo)', () => {

            Servico.maoObraNaoDestSepaProcDif() //Marcar garantia "T.A. MO Não Destaca e Separa Processo Diferente"
            Servico.garantiaSepMesmoProc() //Marcar Mão de Obra "T.A. MO Não Destaca e Separa Mesmo Processo"
            Servico.clickOKServiceLinked() //SERVIÇOS
            ValidarServico.servLinked() ; ValidarServico.addGarantSepTituloProcDif() ; ValidarServico.addMONaoDestSepMesmoProc()
            TirarEntrega.freightFirst() //ENTREGA
            AvancarNormal.toInstallments() 
            GeralPagamento.clickGenerateInstallments() //GERAR PARCELAS
            GeralPagamento.loadingFormPayment() 
            Recebimento.main()
            EscolherParcelaReceb.two()
            AvancarNormal.final()
            FinishOrder.clickFinishOrder() //RESUMO
            FinishOrder.validateOrderGenerated()
        })

        it('16. Ped venda: produto 1860 0 0 (com Garantia que separa em processo diferente e Mão de Obra não destaca e separa no mesmo processo) e produto 1870 0 0 (sem serviço)', () => {

            Servico.maoObraNaoDestSepaProcDif() //Marcar garantia "T.A. MO Não Destaca e Separa Processo Diferente"
            Servico.garantiaSepMesmoProc() //Marcar Mão de Obra "T.A. MO Não Destaca e Separa Mesmo Processo"
            Servico.clickOKServiceLinked() //SERVIÇOS
            ValidarServico.servLinked() ; ValidarServico.addGarantSepTituloProcDif() ; ValidarServico.addMONaoDestSepMesmoProc()
            TirarEntrega.freightFirst() //ENTREGA
            Product.second() //PRODUTO
            ValidarSaldo.withBalance()
            cy.selectProductSearch()
            cy.clickVoltageProduct()
            cy.clickAddProduct()
            Servico.validateModalServLinked() //SERVIÇOS - SEGUNDO PRODUTO
            Servico.clickOKServiceLinked()
            TirarEntrega.freightSecond() //ENTREGA - SEGUNDO PRODUTO
            AvancarNormal.toInstallments()  
            GeralPagamento.clickGenerateInstallments() //GERAR PARCELAS
            GeralPagamento.loadingFormPayment() 
            Recebimento.main()
            EscolherParcelaReceb.two()
            AvancarNormal.final()
            FinishOrder.clickFinishOrder() //RESUMO
            FinishOrder.validateOrderGenerated()
        })

        it('17. Ped venda: produto 1860 0 0 (com Garantia que separa em processo diferente e Mão de Obra não destaca e separa em outro processo)', () => {

            Servico.maoObraNaoDestSepaProcDif()//Marcar garantia "T.A. MO Não Destaca e Separa Processo Diferente"
            Servico.garantiaSepTituloProcDif()
            Servico.clickOKServiceLinked() //SERVIÇOS
            ValidarServico.servLinked() ; ValidarServico.addGarantSepTituloProcDif() ; ValidarServico.addMONaoDestSepProcDif()
            TirarEntrega.freightFirst() //ENTREGA
            AvancarNormal.toInstallments() 
            GeralPagamento.clickGenerateInstallments() //GERAR PARCELAS
            GeralPagamento.loadingFormPayment() 
            Recebimento.main()
            EscolherParcelaReceb.two()
            AvancarNormal.final()
            FinishOrder.clickFinishOrder() //RESUMO
            FinishOrder.validateOrderGenerated()
        })

        it('18. Ped venda: produto 1860 0 0 (com Garantia que separa em processo diferente e Mão de Obra não destaca e separa em outro processo) e produto 1870 0 0 (sem serviço)', () => {

            Servico.maoObraNaoDestSepaProcDif()//Marcar garantia "T.A. MO Não Destaca e Separa Processo Diferente"
            Servico.garantiaSepTituloProcDif()
            Servico.clickOKServiceLinked() //SERVIÇOS
            ValidarServico.servLinked() ; ValidarServico.addGarantSepTituloProcDif() ; ValidarServico.addMONaoDestSepProcDif()
            TirarEntrega.freightFirst() //ENTREGA
            Product.second() //PRODUTO
            ValidarSaldo.withBalance()
            cy.selectProductSearch()
            cy.clickVoltageProduct()
            cy.clickAddProduct()
            Servico.validateModalServLinked() //SERVIÇOS - SEGUNDO PRODUTO
            Servico.clickOKServiceLinked()
            TirarEntrega.freightSecond() //ENTREGA - SEGUNDO PRODUTO
            AvancarNormal.toInstallments() 
            GeralPagamento.clickGenerateInstallments() //GERAR PARCELAS
            GeralPagamento.loadingFormPayment() 
            Recebimento.main()
            EscolherParcelaReceb.two()
            AvancarNormal.final()
            FinishOrder.clickFinishOrder() //RESUMO
            FinishOrder.validateOrderGenerated()
        })
    })

    context('Com entrega/processo 9860 - caminho feliz', () => {

        it('19. Ped venda: produto 1860 0 0 (com Garantia que separa título no mesmo processo e Mão de Obra que destaca e não separa)', () => {

            Servico.maoObraNaoDestSepMesmoProc() //Marcar garantia "T.A. Garantia Separa Mesmo Processo"
            Servico.garantiaNaoSep() //Marcar Mão de Obra "T.A. MO Destaca e Não Separa"
            Servico.clickOKServiceLinked() //SERVIÇOS
            ValidarServico.servLinked() ; ValidarServico.AddGarantSepMesmoProc() ; ValidarServico.addMODestNãoSepara()
            AvancarNormal.toTransporter()
            AvancarNormal.toInstallments()  
            GeralPagamento.clickGenerateInstallments() //GERAR PARCELAS
            GeralPagamento.loadingFormPayment() 
            Recebimento.main()
            EscolherParcelaReceb.two()
            AvancarNormal.final()
            FinishOrder.clickFinishOrder() //RESUMO
            FinishOrder.validateOrderGenerated()
        })

        it('20. Ped venda: produto 1860 0 0 (com Garantia que separa título no mesmo processo e Mão de Obra que destaca e não separa) e produto 1870 0 0 (sem serviço)', () => {

            Servico.maoObraNaoDestSepMesmoProc() //Marcar garantia "T.A. Garantia Separa Mesmo Processo"
            Servico.garantiaNaoSep() //Marcar Mão de Obra "T.A. MO Destaca e Não Separa"
            Servico.clickOKServiceLinked() //SERVIÇOS
            ValidarServico.servLinked() ; ValidarServico.AddGarantSepMesmoProc() ; ValidarServico.addMODestNãoSepara()
            Product.second() //PRODUTO
            ValidarSaldo.withBalance()
            cy.selectProductSearch()
            cy.clickVoltageProduct()
            cy.clickAddProduct()
            Servico.validateModalServLinked() //SERVIÇOS - SEGUNDO PRODUTO
            Servico.clickOKServiceLinked() //SERVIÇOS
            AvancarNormal.toTransporter()
            AvancarNormal.toInstallments()
            GeralPagamento.clickGenerateInstallments() //GERAR PARCELAS
            GeralPagamento.loadingFormPayment() 
            Recebimento.main()
            EscolherParcelaReceb.two()
            AvancarNormal.final()
            FinishOrder.clickFinishOrder() //RESUMO
            FinishOrder.validateOrderGenerated()
        })

        it('21. Ped venda: produto 1860 0 0 (com Garantia que separa título no mesmo processo e Mão de Obra não destaca e separa no mesmo processo)', () => {

            Servico.maoObraNaoDestSepMesmoProc() //Marcar garantia "T.A. Garantia Separa Mesmo Processo"
            Servico.garantiaSepMesmoProc() //Marcar Mão de Obra "T.A. MO Não Destaca e Separa Mesmo Processo"
            Servico.clickOKServiceLinked() //SERVIÇOS
            ValidarServico.servLinked() ; ValidarServico.AddGarantSepMesmoProc() ; ValidarServico.addMONaoDestSepMesmoProc()
            AvancarNormal.toTransporter()
            AvancarNormal.toInstallments()
            GeralPagamento.clickGenerateInstallments() //GERAR PARCELAS
            GeralPagamento.loadingFormPayment() 
            Recebimento.main()
            EscolherParcelaReceb.two()
            AvancarNormal.final()
            FinishOrder.clickFinishOrder() //RESUMO
            FinishOrder.validateOrderGenerated()
        })

        it('22. Ped venda: produto 1860 0 0 (com Garantia que separa título no mesmo processo e Mão de Obra não destaca e separa no mesmo processo) e produto 1870 0 0 (sem serviço)', () => {

            Servico.maoObraNaoDestSepMesmoProc() //Marcar garantia "T.A. Garantia Separa Mesmo Processo"
            Servico.garantiaSepMesmoProc() //Marcar Mão de Obra "T.A. MO Não Destaca e Separa Mesmo Processo"
            Servico.clickOKServiceLinked() //SERVIÇOS
            ValidarServico.servLinked() ; ValidarServico.AddGarantSepMesmoProc() ; ValidarServico.addMONaoDestSepMesmoProc()
            Product.second() //PRODUTO
            ValidarSaldo.withBalance()
            cy.selectProductSearch()
            cy.clickVoltageProduct()
            cy.clickAddProduct()
            Servico.validateModalServLinked() //SERVIÇOS - SEGUNDO PRODUTO
            Servico.clickOKServiceLinked() //SERVIÇOS
            AvancarNormal.toTransporter()
            AvancarNormal.toInstallments()
            GeralPagamento.clickGenerateInstallments() //GERAR PARCELAS
            GeralPagamento.loadingFormPayment() 
            Recebimento.main()
            EscolherParcelaReceb.two()
            AvancarNormal.final()
            FinishOrder.clickFinishOrder() //RESUMO
            FinishOrder.validateOrderGenerated()
        })

        it('23. Ped venda: produto 1860 0 0 (com Garantia que separa título no mesmo processo e Mão de Obra não destaca e separa em outro processo)', () => {

            Servico.maoObraNaoDestSepMesmoProc() //Marcar garantia "T.A. Garantia Separa Mesmo Processo"
            Servico.garantiaSepTituloProcDif() //Marcar Mão de Obra "T.A. MO Não Destaca e Separa Processo Diferente" 
            Servico.clickOKServiceLinked() //SERVIÇOS
            ValidarServico.servLinked() ; ValidarServico.AddGarantSepMesmoProc() ; ValidarServico.addMONaoDestSepProcDif()
            AvancarNormal.toTransporter()
            AvancarNormal.toInstallments()
            GeralPagamento.clickGenerateInstallments() //GERAR PARCELAS
            GeralPagamento.loadingFormPayment() 
            Recebimento.main()
            EscolherParcelaReceb.two()
            AvancarNormal.final()
            FinishOrder.clickFinishOrder() //RESUMO
            FinishOrder.validateOrderGenerated()
        })

        it('24. Ped venda: produto 1860 0 0 (com Garantia que separa título no mesmo processo e Mão de Obra não destaca e separa em outro processo) e produto 1870 0 0 (sem serviço)', () => {

            Servico.maoObraNaoDestSepMesmoProc() //Marcar garantia "T.A. Garantia Separa Mesmo Processo"
            Servico.garantiaSepTituloProcDif() //Marcar Mão de Obra "T.A. MO Não Destaca e Separa Processo Diferente" 
            Servico.clickOKServiceLinked() //SERVIÇOS
            ValidarServico.servLinked() ; ValidarServico.AddGarantSepMesmoProc() ; ValidarServico.addMONaoDestSepProcDif()
            Product.second() //PRODUTO
            ValidarSaldo.withBalance()
            cy.selectProductSearch()
            cy.clickVoltageProduct()
            cy.clickAddProduct()
            Servico.validateModalServLinked() //SERVIÇOS - SEGUNDO PRODUTO
            Servico.clickOKServiceLinked() //SERVIÇOS
            AvancarNormal.toTransporter()
            AvancarNormal.toInstallments()
            GeralPagamento.clickGenerateInstallments() //GERAR PARCELAS
            GeralPagamento.loadingFormPayment() 
            Recebimento.main()
            EscolherParcelaReceb.two()
            AvancarNormal.final()
            FinishOrder.clickFinishOrder() //RESUMO
            FinishOrder.validateOrderGenerated()
        })

        it('25. Ped venda: produto 1860 0 0 (com Garantia que não separa e Mão de Obra que destaca e não separa)', () => {

            Servico.maoObraDestNãoSep() //Marcar garantia "T.A. Garantia Não Separa"
            Servico.garantiaNaoSep()//Marcar Mão de Obra "T.A. MO Destaca e Não Separa"
            Servico.clickOKServiceLinked() //SERVIÇOS
            ValidarServico.servLinked() ; ValidarServico.addGarantNaoSep() ; ValidarServico.addMODestNãoSepara()
            AvancarNormal.toTransporter()
            AvancarNormal.toInstallments()
            GeralPagamento.clickGenerateInstallments() //GERAR PARCELAS
            GeralPagamento.loadingFormPayment() 
            Recebimento.main()
            EscolherParcelaReceb.two()
            AvancarNormal.final()
            FinishOrder.clickFinishOrder() //RESUMO
            FinishOrder.validateOrderGenerated()
        })

        it('26. Ped venda: produto 1860 0 0 (com Garantia que não separa e Mão de Obra que destaca e não separa) e produto 1870 0 0 (sem serviço)', () => {

            Servico.maoObraDestNãoSep() //Marcar garantia "T.A. Garantia Não Separa"
            Servico.garantiaNaoSep()//Marcar Mão de Obra "T.A. MO Destaca e Não Separa"
            Servico.clickOKServiceLinked() //SERVIÇOS
            ValidarServico.servLinked() ; ValidarServico.addGarantNaoSep() ; ValidarServico.addMODestNãoSepara()
            Product.second() //PRODUTO
            ValidarSaldo.withBalance()
            cy.selectProductSearch()
            cy.clickVoltageProduct()
            cy.clickAddProduct()
            Servico.validateModalServLinked() //SERVIÇOS - SEGUNDO PRODUTO
            Servico.clickOKServiceLinked() //SERVIÇOS
            AvancarNormal.toTransporter()
            AvancarNormal.toInstallments()
            GeralPagamento.clickGenerateInstallments() //GERAR PARCELAS
            GeralPagamento.loadingFormPayment() 
            Recebimento.main()
            EscolherParcelaReceb.two()
            AvancarNormal.final()
            FinishOrder.clickFinishOrder() //RESUMO
            FinishOrder.validateOrderGenerated()
        })

        it('27. Ped venda: produto 1860 0 0 (com Garantia que não separa e Mão de Obra não destaca e separa no mesmo processo)', () => {

            Servico.maoObraDestNãoSep() //Marcar garantia "T.A. Garantia Não Separa"
            Servico.garantiaSepMesmoProc() //Marcar Mão de Obra "T.A. MO Não Destaca e Separa Mesmo Processo"
            Servico.clickOKServiceLinked() //SERVIÇOS
            ValidarServico.servLinked() ; ValidarServico.addGarantNaoSep() ; ValidarServico.addMONaoDestSepMesmoProc()
            AvancarNormal.toTransporter()
            AvancarNormal.toInstallments()
            GeralPagamento.clickGenerateInstallments() //GERAR PARCELAS
            GeralPagamento.loadingFormPayment() 
            Recebimento.main()
            EscolherParcelaReceb.two()
            AvancarNormal.final()
            FinishOrder.clickFinishOrder() //RESUMO
            FinishOrder.validateOrderGenerated()
        })

        it('28. Ped venda: produto 1860 0 0 (com Garantia que não separa e Mão de Obra não destaca e separa no mesmo processo) e produto 1870 0 0 (sem serviço)', () => {

            Servico.maoObraDestNãoSep() //Marcar garantia "T.A. Garantia Não Separa"
            Servico.garantiaSepMesmoProc() //Marcar Mão de Obra "T.A. MO Não Destaca e Separa Mesmo Processo"
            Servico.clickOKServiceLinked() //SERVIÇOS
            ValidarServico.servLinked() ; ValidarServico.addGarantNaoSep() ; ValidarServico.addMONaoDestSepMesmoProc()
            Product.second() //PRODUTO
            ValidarSaldo.withBalance()
            cy.selectProductSearch()
            cy.clickVoltageProduct()
            cy.clickAddProduct()
            Servico.validateModalServLinked() //SERVIÇOS - SEGUNDO PRODUTO
            Servico.clickOKServiceLinked() //SERVIÇOS
            AvancarNormal.toTransporter()
            AvancarNormal.toInstallments()
            GeralPagamento.clickGenerateInstallments() //GERAR PARCELAS
            GeralPagamento.loadingFormPayment() 
            Recebimento.main()
            EscolherParcelaReceb.two()
            AvancarNormal.final()
            FinishOrder.clickFinishOrder() //RESUMO
            FinishOrder.validateOrderGenerated()
        })

        it('29. Ped venda: produto 1860 0 0 (com Garantia que não separa e Mão de Obra não destaca e separa em outro processo)', () => {

            Servico.maoObraDestNãoSep() //Marcar garantia "T.A. Garantia Não Separa"
            Servico.garantiaSepTituloProcDif() //Marcar Mão de Obra "T.A. MO Não Destaca e Separa Processo Diferente" 
            Servico.clickOKServiceLinked() //SERVIÇOS
            ValidarServico.servLinked() ; ValidarServico.addGarantNaoSep() ; ValidarServico.addMONaoDestSepProcDif()
            AvancarNormal.toTransporter()
            AvancarNormal.toInstallments()
            GeralPagamento.clickGenerateInstallments() //GERAR PARCELAS
            GeralPagamento.loadingFormPayment() 
            Recebimento.main()
            EscolherParcelaReceb.two()
            AvancarNormal.final()
            FinishOrder.clickFinishOrder() //RESUMO
            FinishOrder.validateOrderGenerated()
        })

        it('30. Ped venda: produto 1860 0 0 (com Garantia que não separa e Mão de Obra não destaca e separa em outro processo) e produto 1870 0 0 (sem serviço)', () => {

            Servico.maoObraDestNãoSep() //Marcar garantia "T.A. Garantia Não Separa"
            Servico.garantiaSepTituloProcDif() //Marcar Mão de Obra "T.A. MO Não Destaca e Separa Processo Diferente" 
            Servico.clickOKServiceLinked() //SERVIÇOS
            ValidarServico.servLinked() ; ValidarServico.addGarantNaoSep() ; ValidarServico.addMONaoDestSepProcDif()
            Product.second() //PRODUTO
            ValidarSaldo.withBalance()
            cy.selectProductSearch()
            cy.clickVoltageProduct()
            cy.clickAddProduct()
            Servico.validateModalServLinked() //SERVIÇOS - SEGUNDO PRODUTO
            Servico.clickOKServiceLinked() //SERVIÇOS
            AvancarNormal.toTransporter()
            AvancarNormal.toInstallments()
            GeralPagamento.clickGenerateInstallments() //GERAR PARCELAS
            GeralPagamento.loadingFormPayment() 
            Recebimento.main()
            EscolherParcelaReceb.two()
            AvancarNormal.final()
            FinishOrder.clickFinishOrder() //RESUMO
            FinishOrder.validateOrderGenerated()
        })

        it('31. Ped venda: produto 1860 0 0 (com Garantia que separa em processo diferente e Mão de Obra que destaca e não separa)', () => {

            Servico.maoObraNaoDestSepaProcDif() //Marcar garantia "T.A. MO Não Destaca e Separa Processo Diferente"
            Servico.garantiaNaoSep() //Marcar Mão de Obra "T.A. MO Destaca e Não Separa"
            Servico.clickOKServiceLinked() //SERVIÇOS
            ValidarServico.servLinked() ; ValidarServico.addGarantSepTituloProcDif() ; ValidarServico.addMODestNãoSepara()
            AvancarNormal.toTransporter()
            AvancarNormal.toInstallments()
            GeralPagamento.clickGenerateInstallments() //GERAR PARCELAS
            GeralPagamento.loadingFormPayment() 
            Recebimento.main()
            EscolherParcelaReceb.two()
            AvancarNormal.final()
            FinishOrder.clickFinishOrder() //RESUMO
            FinishOrder.validateOrderGenerated()
        })

        it('32. Ped venda: produto 1860 0 0 (com Garantia que separa em processo diferente e Mão de Obra que destaca e não separa) e produto 1870 0 0 (sem serviço)', () => {

            Servico.maoObraNaoDestSepaProcDif() //Marcar garantia "T.A. MO Não Destaca e Separa Processo Diferente"
            Servico.garantiaNaoSep() //Marcar Mão de Obra "T.A. MO Destaca e Não Separa"
            Servico.clickOKServiceLinked() //SERVIÇOS
            ValidarServico.servLinked() ; ValidarServico.addGarantSepTituloProcDif() ; ValidarServico.addMODestNãoSepara()
            Product.second() //PRODUTO
            ValidarSaldo.withBalance()
            cy.selectProductSearch()
            cy.clickVoltageProduct()
            cy.clickAddProduct()
            Servico.clickOKServiceLinked() //SERVIÇOS
            AvancarNormal.toTransporter()
            AvancarNormal.toInstallments()
            GeralPagamento.clickGenerateInstallments() //GERAR PARCELAS
            GeralPagamento.loadingFormPayment() 
            Recebimento.main()
            EscolherParcelaReceb.two()
            AvancarNormal.final()
            FinishOrder.clickFinishOrder() //RESUMO
            FinishOrder.validateOrderGenerated()
        })

        it('33. Ped venda: produto 1860 0 0 (com Garantia que separa em processo diferente e Mão de Obra não destaca e separa no mesmo processo)', () => {

            Servico.maoObraNaoDestSepaProcDif() //Marcar garantia "T.A. MO Não Destaca e Separa Processo Diferente"
            Servico.garantiaSepMesmoProc() //Marcar Mão de Obra "T.A. MO Não Destaca e Separa Mesmo Processo"
            Servico.clickOKServiceLinked() //SERVIÇOS
            ValidarServico.servLinked() ; ValidarServico.addGarantSepTituloProcDif() ; ValidarServico.addMONaoDestSepMesmoProc()
            AvancarNormal.toTransporter()
            AvancarNormal.toInstallments() 
            GeralPagamento.clickGenerateInstallments() //GERAR PARCELAS
            GeralPagamento.loadingFormPayment() 
            Recebimento.main()
            EscolherParcelaReceb.two()
            AvancarNormal.final()
            FinishOrder.clickFinishOrder() //RESUMO
            FinishOrder.validateOrderGenerated()
        })

        it('34. Ped venda: produto 1860 0 0 (com Garantia que separa em processo diferente e Mão de Obra não destaca e separa no mesmo processo) e produto 1870 0 0 (sem serviço)', () => {

            Servico.maoObraNaoDestSepaProcDif() //Marcar garantia "T.A. MO Não Destaca e Separa Processo Diferente"
            Servico.garantiaSepMesmoProc() //Marcar Mão de Obra "T.A. MO Não Destaca e Separa Mesmo Processo"
            Servico.clickOKServiceLinked() //SERVIÇOS
            ValidarServico.servLinked() ; ValidarServico.addGarantSepTituloProcDif() ; ValidarServico.addMONaoDestSepMesmoProc()
            Product.second() //PRODUTO
            ValidarSaldo.withBalance()
            cy.selectProductSearch()
            cy.clickVoltageProduct()
            cy.clickAddProduct()
            Servico.validateModalServLinked() //SERVIÇOS - SEGUNDO PRODUTO
            Servico.clickOKServiceLinked() //SERVIÇOS
            AvancarNormal.toTransporter()
            AvancarNormal.toInstallments() 
            GeralPagamento.clickGenerateInstallments() //GERAR PARCELAS
            GeralPagamento.loadingFormPayment() 
            Recebimento.main()
            EscolherParcelaReceb.two()
            AvancarNormal.final()
            FinishOrder.clickFinishOrder() //RESUMO
            FinishOrder.validateOrderGenerated()
        })

        it('35. Ped venda: produto 1860 0 0 (com Garantia que separa em processo diferente e Mão de Obra não destaca e separa em outro processo)', () => {

            Servico.maoObraNaoDestSepaProcDif() //Marcar garantia "T.A. MO Não Destaca e Separa Processo Diferente"
            Servico.garantiaSepTituloProcDif()
            Servico.clickOKServiceLinked() //SERVIÇOS
            ValidarServico.servLinked() ; ValidarServico.addGarantSepTituloProcDif() ; ValidarServico.addMONaoDestSepProcDif()
            AvancarNormal.toTransporter()
            AvancarNormal.toInstallments()
            GeralPagamento.clickGenerateInstallments() //GERAR PARCELAS
            GeralPagamento.loadingFormPayment() 
            Recebimento.main()
            EscolherParcelaReceb.two()
            AvancarNormal.final()
            FinishOrder.clickFinishOrder() //RESUMO
            FinishOrder.validateOrderGenerated()
        })  

        it('36. Ped venda: produto 1860 0 0 (com Garantia que separa em processo diferente e Mão de Obra não destaca e separa em outro processo) e produto 1870 0 0 (sem serviço)', () => {

            Servico.maoObraNaoDestSepaProcDif()//Marcar garantia "T.A. MO Não Destaca e Separa Processo Diferente"
            Servico.garantiaSepTituloProcDif()
            Servico.clickOKServiceLinked() //SERVIÇOS
            ValidarServico.servLinked() ; ValidarServico.addGarantSepTituloProcDif() ; ValidarServico.addMONaoDestSepProcDif()
            Product.second() //PRODUTO
            ValidarSaldo.withBalance()
            cy.selectProductSearch()
            cy.clickVoltageProduct()
            cy.clickAddProduct()
            Servico.validateModalServLinked() //SERVIÇOS - SEGUNDO PRODUTO
            Servico.clickOKServiceLinked() //SERVIÇOS
            AvancarNormal.toTransporter()
            AvancarNormal.toInstallments()
            GeralPagamento.clickGenerateInstallments() //GERAR PARCELAS
            GeralPagamento.loadingFormPayment() 
            Recebimento.main()
            EscolherParcelaReceb.two()
            AvancarNormal.final()
            FinishOrder.clickFinishOrder() //RESUMO
            FinishOrder.validateOrderGenerated()
        })
    })
})