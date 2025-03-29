import { ProcessoVenda } from '../../../../pages/para_pedidos/processos/processo_venda.js'
import { EscolherCliente } from '../../../../pages/para_pedidos/cliente/cliente.js'
import { Produto } from '../../../../pages/produtos/prd_normal.js'
import { ValidarSaldo } from '../../../../pages/para_pedidos/saldo/validar_saldo.js'
import { Servico } from '../../../../pages/para_pedidos/servicos/valida_servicos_adicionados.js'
import { AvancarNormal } from '../../../../pages/para_pedidos/botoes/avancar/avancar_normal.js'
import { FinalizarPed } from '../../../../pages/para_pedidos/finalizar_pedido.js'
import { TirarEntrega } from '../../../../pages/para_pedidos/entrega/tirar_entrega.js'
import { GeralPagamento } from '../../../../pages/para_pedidos/pagamento/geral_pagamento.js'
import { EscolherParcelaReceb } from '../../../../pages/para_pedidos/pagamento/parcelas.js'
import { Recebimento } from '../../../../pages/para_pedidos/processos/processo_recebimento.js'
import { PedDesconto } from '../../../../pages/para_pedidos/para_pedido_desconto.js'
import { GeralPedido } from '../../../../pages/para_pedidos/gerais_pedidos.js'

describe('Gerar pedido de venda Kit com desconto', () => {

    beforeEach(() => {
        cy.visit('/');
        cy.clearAllSessionStorage();
        cy.login(); 
        cy.urlAposLogin()
        cy.tituloPagina()
        ProcessoVenda.NFe()
        EscolherCliente.withRoute()
    })
  
    context('Sem entrega/ processo 9862 - caminho feliz', () => {
        
        it('1. Ped venda: kit 1862 0 0 com desconto Sub (-) / VALOR FIXO', () => {
    
            Produto.kitDiscount() //PRODUTO
            ValidarSaldo.withBalance()
            cy.selectProductSearch()
            cy.clickVoltageProduct()
            GeralPedido.composicaoDesteKit()
            cy.clickAddProduct()
            Servico.validateModalServLinked() //SERVICOS
            Servico.clickOKServiceLinked()
            PedDesconto.clicarBotaoDesconto() //DESCONTO
            PedDesconto.validarModalSubSobre()
            PedDesconto.aplicarDescontoValorFixo()
            TirarEntrega.freightFirst()
            () //ENTREGA
            AvancarNormal.toInstallments()
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