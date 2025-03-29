import { ProcessoVenda } from '../../../../pages/para_pedidos/processos/processo_venda.js'
import { EscolherCliente } from '../../../../pages/para_pedidos/cliente/cliente.js'
import { Produto } from '../../../../pages/produtos/prd_normal.js'
import { ValidarSaldo } from '../../../../pages/para_pedidos/saldo/validar_saldo.js'
import { Servico } from '../../../../pages/para_pedidos/servicos/valida_servicos_adicionados.js'
import { AvancarNormal } from '../../../../pages/para_pedidos/botoes/avancar/avancar_normal.js'
import { FinalizarPed } from '../../../../pages/para_pedidos/finalizar_pedido.js'
import { GeralEntrega } from '../../../../pages/para_pedidos/entrega/geral_entrega.js'
import { GeralPagamento } from '../../../../pages/para_pedidos/pagamento/geral_pagamento.js'
import { EscolherParcelaReceb } from '../../../../pages/para_pedidos/pagamento/parcelas.js'
import { Recebimento } from '../../../../pages/para_pedidos/processos/processo_recebimento.js'
import { Servico } from '../../../../pages/para_pedidos/servicos/apenas_servicos.js'

describe('Gerar pedidos com Mão de obra e com entrega', () => {

    beforeEach(() => {
        cy.visit('/')
        cy.clearAllSessionStorage()
        cy.login()
        cy.urlAposLogin()
        cy.tituloPagina()
        ProcessoVenda.NFCe()
        EscolherCliente.withRoute()
        Produto.fisrt() //PRODUTO
        ValidarSaldo.comSaldo()
        cy.selectProductSearch()
        cy.clickVoltageProduct()
        cy.clickAddProduct()
        Servico.validarModalServVinc() //SERVICOS
    })

    context('Com entrega/processo 9890 - caminho feliz', () => {

        it('1. Ped venda: produto 1860 0 0 (com Mão de Obra que Destaca e Não separa título)', () => {
    
            Servico.garantiaNaoSep()  //Marcar Mão de Obra "T.A. MO Destaca e Não Separa"
            Servico.clicarOKServVinc()
            AvancarNormal.toTransporter()
            GeralEntrega.modalInconsOnlyTransporter() //ESCOLHER TRANSPORTADORA
            GeralEntrega.chooseTransporter()
            AvancarNormal.installmentDelivery() 
            GeralPagamento.clickGenerateInstallments() //GERAR PARCELAS
            GeralPagamento.loadingFormPayment() 
            Recebimento.main()
            EscolherParcelaReceb.two()
            AvancarNormal.final()
            FinalizarPed.clicarFinalizarPed() //RESUMO
            FinalizarPed.validarPedGerado()
        })
        
        it('2. Ped venda: produto 1860 0 0 (com Mão de Obra que Destaca e Não separa título) e produto 1870 0 0 (sem serviço)', () => {
    
            Servico.garantiaNaoSep()  //Marcar Mão de Obra "T.A. MO Destaca e Não Separa"
            Servico.clicarOKServVinc() //SERVIÇOS
            Produto.second() //SEGUNDO PRODUTO
            ValidarSaldo.comSaldo()
            cy.selectProductSearch()
            cy.clickVoltageProduct()
            cy.clickAddProduct()
            Servico.validarModalServVinc() //SERVICOS //SERVIÇOS - SEGUNDO PRODUTO
            Servico.clicarOKServVinc() //SERVIÇOS
            AvancarNormal.toTransporter()
            GeralEntrega.modalInconsOnlyTransporter() //ESCOLHER TRANSPORTADORA
            GeralEntrega.chooseTransporter()
            AvancarNormal.installmentDelivery()
            GeralPagamento.clickGenerateInstallments() //GERAR PARCELAS
            GeralPagamento.loadingFormPayment() 
            Recebimento.main()
            EscolherParcelaReceb.two()
            AvancarNormal.final()
            FinalizarPed.clicarFinalizarPed() //RESUMO
            FinalizarPed.validarPedGerado()
        })

        it('3. Ped venda: produto 1860 0 0 (com Mão de Obra que Não destaca e Separa título no Mesmo processo)', () => {
    
            Servico.garantiaSepMesmoProc() //Marcar Mão de Obra "T.A. MO Não Destaca e Separa Mesmo Processo"
            Servico.clicarOKServVinc()
            AvancarNormal.toTransporter()
            GeralEntrega.modalInconsOnlyTransporter() //ESCOLHER TRANSPORTADORA
            GeralEntrega.chooseTransporter()
            AvancarNormal.installmentDelivery() 
            GeralPagamento.clickGenerateInstallments() //GERAR PARCELAS
            GeralPagamento.loadingFormPayment() 
            Recebimento.main()
            EscolherParcelaReceb.two()
            AvancarNormal.final()
            FinalizarPed.clicarFinalizarPed() //RESUMO
            FinalizarPed.validarPedGerado()
        })

        it('4. Ped venda: produto 1860 0 0 (com Mão de Obra que Não destaca e Separa título no Mesmo processo) e produto 1870 0 0 (sem serviço)', () => {
    
            Servico.garantiaSepMesmoProc() //Marcar Mão de Obra "T.A. MO Não Destaca e Separa Mesmo Processo"
            Servico.clicarOKServVinc()
            Produto.second() //SEGUNDO PRODUTO
            ValidarSaldo.comSaldo()
            cy.selectProductSearch()
            cy.clickVoltageProduct()
            cy.clickAddProduct()
            Servico.validarModalServVinc() //SERVICOS
            Servico.clicarOKServVinc()
            AvancarNormal.toTransporter()
            GeralEntrega.modalInconsOnlyTransporter() //ESCOLHER TRANSPORTADORA
            GeralEntrega.chooseTransporter()
            AvancarNormal.installmentDelivery()
            GeralPagamento.clickGenerateInstallments() //GERAR PARCELAS
            GeralPagamento.loadingFormPayment() 
            Recebimento.main()
            EscolherParcelaReceb.two()
            AvancarNormal.final()
            FinalizarPed.clicarFinalizarPed() //RESUMO
            FinalizarPed.validarPedGerado()
        })

        it('5. Ped venda: produto 1860 0 0 (com Mão de Obra que Não destaca e Separa título em processo Diferente)', () => {
    
            Servico.garantiaSepTituloProcDif() //Marcar Mão de obra que não destaca e separa título em processo diferente
            Servico.clicarOKServVinc()
            AvancarNormal.toTransporter()
            GeralEntrega.modalInconsOnlyTransporter() //ESCOLHER TRANSPORTADORA
            GeralEntrega.chooseTransporter()
            AvancarNormal.installmentDelivery() 
            GeralPagamento.clickGenerateInstallments() //GERAR PARCELAS
            GeralPagamento.loadingFormPayment() 
            Recebimento.main()
            EscolherParcelaReceb.two()
            AvancarNormal.final()
            FinalizarPed.clicarFinalizarPed() //RESUMO
            FinalizarPed.validarPedGerado()
        })   

        it('6. Ped venda: produto 1860 0 0 (com Mão de Obra que Não destaca e Separa título em processo Diferente) e produto 1870 0 0 (sem serviço)', () => {
    
            Servico.garantiaSepTituloProcDif() //Marcar Mão de obra que não destaca e separa título em processo diferente
            Servico.clicarOKServVinc()
            Produto.second() //SEGUNDO PRODUTO
            ValidarSaldo.comSaldo()
            cy.selectProductSearch()
            cy.clickVoltageProduct()
            cy.clickAddProduct()
            Servico.validarModalServVinc() //SERVICOS
            Servico.clicarOKServVinc()
            AvancarNormal.toTransporter()
            GeralEntrega.modalInconsOnlyTransporter() //ESCOLHER TRANSPORTADORA
            GeralEntrega.chooseTransporter()
            AvancarNormal.installmentDelivery()  
            GeralPagamento.clickGenerateInstallments() //GERAR PARCELAS
            GeralPagamento.loadingFormPayment() 
            Recebimento.main()
            EscolherParcelaReceb.two()
            AvancarNormal.final()
            FinalizarPed.clicarFinalizarPed() //RESUMO
            FinalizarPed.validarPedGerado()
        })
    })
})