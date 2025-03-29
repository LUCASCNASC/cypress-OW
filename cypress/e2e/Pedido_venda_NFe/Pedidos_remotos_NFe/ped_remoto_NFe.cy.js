import { ProcessoVenda } from '../../../../pages/para_pedidos/processos/processo_venda.js'
import { EscolherCliente } from '../../../../pages/para_pedidos/cliente/cliente.js'
import { ValidarSaldo } from '../../../../pages/para_pedidos/saldo/validar_saldo.js'
import { Produto } from '../../../../pages/produtos/prd_normal.js'
import { Servico } from '../../../../pages/para_pedidos/servicos/valida_servicos_adicionados.js'
import { AvancarNormal } from '../../../../pages/para_pedidos/botoes/avancar/avancar_normal.js'
import { FinalizarPed } from '../../../../pages/para_pedidos/finalizar_pedido.js'
import { FinalizarPed } from '../../../../pages/para_pedidos/finalizar_pedido.js'
import { Recebimento } from '../../../../pages/para_pedidos/processos/processo_recebimento.js'
import { GeralPedido } from '../../../../pages/para_pedidos/gerais_pedidos.js'

//verificar todos
describe('Remoto/processo 9860 - Regra de saldo Parâmetro 36 = 4 - Parâmetro 139 = 4 - Trial 653 não configurado', () => {

    beforeEach(() => {
        cy.visit('/')
        cy.clearAllSessionStorage()
        cy.login()
        cy.urlAposLogin()
        cy.tituloPagina() 
        ProcessoVenda.NFe()
        EscolherCliente.withRoute()
    })
  
    context('Pedido de venda remoto normal', () => {

        //verificar
        it.skip('1. Ped venda remota: produto 1860 0 0 - (Venda remota de produto com saldo na filial do faturamento )', () => {

            Produto.fisrt() //PRODUTO
            ValidarSaldo.withBalance()
            cy.clickVoltageProduct()
            cy.clickAddProduc()
            GeralPedido.trocarFilialFaturamento()
            cy.clickAddProduct()
            Servico.validateModalServLinked() //SERVIÇOS
            Servico.clickOKServiceLinked()
            AvancarNormal.toTransporter()
            AvancarNormal.toInstallments()
            GeralPagamento.clickGenerateInstallments() //GERAR PARCELAS
            GeralPagamento.loadingFormPayment()
            Recebimento.main()
            EscolherParcelaReceb.duas()
            AvancarNormal.final()
            FinalizarPed.clickFinishOrder() //RESUMO
            FinalizarPed.validateOrderGenerated()
        })

        //verificar
        it.skip('2. Ped venda remota: produtos 1860 0 0 e 1870 0 0', () => {

            Produto.fisrt() //PRODUTO
            ValidarSaldo.withBalance()
            cy.clickVoltageProduct()
            cy.clickAddProduc()
            GeralPedido.trocarFilialFaturamento()
            cy.clickAddProduct()
            Servico.validateModalServLinked() //SERVIÇOS
            Servico.clickOKServiceLinked()
            Produto.freightSecond() //SEGUNDO PRODUTO
            ValidarSaldo.withBalance()
            cy.clickVoltageProduct()
            cy.clickAddProduc()
            GeralPedido.trocarFilialFaturamento()
            cy.clickAddProduct()
            Servico.validateModalServLinked() //SERVIÇOS - SEGUNDO PRODUTO
            Servico.clickOKServiceLinked()
            AvancarNormal.toTransporter()
            AvancarNormal.toInstallments()
            GeralPagamento.clickGenerateInstallments() //GERAR PARCELAS
            GeralPagamento.loadingFormPayment()
            Recebimento.main()
            EscolherParcelaReceb.duas()
            AvancarNormal.final()
            FinalizarPed.clickFinishOrder() //RESUMO
            FinalizarPed.validateOrderGenerated()
        })
        
        //verificar
        it.skip('3. Ped venda remota: kit 1877 0 0', () => {

            Produto.kitRemote()
            ValidarSaldo.withBalance()
            cy.clickVoltageProduct()
            cy.clickAddProduc()
            GeralPedido.trocarFilialFaturamento()
            GeralPedido.composicaoDesteKit()
            cy.clickAddProduct()
            Servico.validateModalServLinked() //SERVIÇOS
            Servico.clickOKServiceLinked()
            AvancarNormal.toTransporter()
            AvancarNormal.toInstallments()
            GeralPagamento.clickGenerateInstallments() //GERAR PARCELAS
            GeralPagamento.loadingFormPayment()
            Recebimento.main()
            EscolherParcelaReceb.duas()
            AvancarNormal.final()
            FinalizarPed.clickFinishOrder() //RESUMO
            FinalizarPed.validateOrderGenerated()
        })
    })
    
    context('Pedido de venda remoto sem saldo remoto, pegar CD', () => {

        //verificar
        it.skip('4. Ped venda remoto - com saldo no CD (filial 1) - deve permitir fazer o pedido - (Venda remota de produto sem saldo na filial do faturamento, mas com saldo no CD do faturamento - com entrega)', () => {

            Produto.remoteWithCD() //PRODUTO
            ValidarSaldo.withBalance()
            cy.clickVoltageProduct()
            cy.clickAddProduc()
            GeralPedido.trocarFilialFaturamento()
            cy.clickAddProduct()
            Servico.validateModalServLinked() //SERVIÇOS
            Servico.clickOKServiceLinked()
            AvancarNormal.toTransporter()
            AvancarNormal.toInstallments()
            GeralPagamento.clickGenerateInstallments() //GERAR PARCELAS
            GeralPagamento.loadingFormPayment()
            Recebimento.main()
            EscolherParcelaReceb.duas()
            AvancarNormal.final()
            FinalizarPed.clickFinishOrder() //RESUMO
            FinalizarPed.validateOrderGenerated()
        })    
        
        //verificar
        it.skip('5. Ped venda remoto - SEM saldo no CD (filial 1) - NÃO deve permitir fazer o pedido - (Venda remota de produto sem saldo na filial do faturamento, sem saldo da CD do faturamento)', () => {

            Produto.remoteWithoutCD() //PRODUTO
            ValidarSaldo.withoutBalance()
            cy.clickVoltageProduct()
            cy.clickAddProduc()
            GeralPedido.trocarFilialFaturamento()

            //Validando mensagem "Este produto não possui saldo na filial selecionada."
            cy.get('[ng-if="semSaldoCD"][style=""] > p')
                .should('exist')
                .and('be.visible')
                .and('have.text','Este produto não possui saldo na filial selecionada.')
                .invoke('css', 'color') // Obtém a cor do elemento
                .should('equal', 'rgb(244, 67, 54)')

            //Validando mensagem "Este produto não possui saldo na filial selecionada, será permitido apenas a simulação da venda."
            cy.get('[ng-show="(itemGradeSelecionado && itemGradeSelecionado.valor > 0)"] > :nth-child(1) > .mensagem-erro-centralizada > p')
                .should('exist')
                .and('be.visible')
                .and('have.text','Este produto não possui saldo na filial selecionada, será permitido apenas a simulação da venda.')
                .invoke('css', 'color') // Obtém a cor do elemento
                .should('equal', 'rgb(244, 67, 54)')

            //Validando botão Adicionar para Simulação
            cy.get('.md-primary.btn-rounded.md-raised.btn-block')
                .should('exist')
                .and('not.be.disabled')
                .and('contain',' Adicionar para Simulação')
        })    
    })
})