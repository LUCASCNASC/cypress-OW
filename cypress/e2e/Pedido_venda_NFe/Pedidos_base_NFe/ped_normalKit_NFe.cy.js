import { saldodisponivel, clienteComRota, composicaoDesteKit } from '../../../support/para_pedidos/gerais_pedidos.js';
import { produtoKitPrimeiro, escolherProdutoKitPrimeiro, escolherVoltagemProdutoKitPrimeiro, clicarAddProdutoKitPrimeiro } from '../../../support/para_pedidos/apenas_produtos_pedidos.js';
import { botaoGerarParcelas, escolherFormaPagamentoPrincipal, carregandoFormaPagamento, escolherDuasParcelaPagamento } from '../../../support/para_pedidos/apenas_formas_pagamento.js';
import { modalServicosVinculados, okServicosVinculados } from '../../../support/para_pedidos/apenas_servicos.js';
import { botaoFinalizarPedido, pedidoGerado } from '../../../support/para_pedidos/apenas_finalizar_pedido.js';
import { processoVendaNFe } from '../../../support/para_pedidos/apenas_processos_venda.js';
import { avancarParaParcelas, avancarFinal, avancarParaTransportadora, avancarParcelasEntrega } from '../../../support/para_pedidos/apenas_botoes_avancar.js';
import { tirarEntrega } from '../../../support/para_pedidos/apenas_entrega.js';

describe('Gerar pedido normal', () => {

    beforeEach(() => {
        cy.visit('/')
        cy.clearAllSessionStorage()
        cy.login()
        cy.urlAposLogin()
        cy.tituloPagina()
        processoVendaNFe()
        clienteComRota()
        cy.wait(500)
        produtoKitPrimeiro()
        saldodisponivel()
        escolherProdutoKitPrimeiro()
    })
  
    context('Sem entrega/ processo 9860 - caminho feliz', () => {
        
        it('1. Ped venda: kit 1862 0 0', () => {
                      
            escolherVoltagemProdutoKitPrimeiro() //PRODUTO
            composicaoDesteKit()
            clicarAddProdutoKitPrimeiro()
            modalServicosVinculados() //SERVICOS
            okServicosVinculados()
            tirarEntrega() //ENTREGA
            avancarParaParcelas()
            botaoGerarParcelas() //GERAR PARCELAS
            carregandoFormaPagamento()
            escolherFormaPagamentoPrincipal()
            cy.wait(3000)
            escolherDuasParcelaPagamento()
            cy.wait(400)
            avancarFinal()
        })
    })
    
    context('Com entrega/processo 9860 - caminho feliz', () => {
        
        it('2. Ped venda: kit 1862 0 0', () => {
                      
            escolherVoltagemProdutoKitPrimeiro() //PRODUTO
            composicaoDesteKit()
            clicarAddProdutoKitPrimeiro()
            modalServicosVinculados() //SERVICOS
            okServicosVinculados()
            avancarParaTransportadora()
            avancarParcelasEntrega()
            botaoGerarParcelas() //GERAR PARCELAS
            carregandoFormaPagamento()
            escolherFormaPagamentoPrincipal()
            cy.wait(3000)
            escolherDuasParcelaPagamento()
            cy.wait(400)
            avancarFinal()
        })
    })

    afterEach(() => {
        botaoFinalizarPedido() //RESUMO
        pedidoGerado()
      });
})