import { saldodisponivel, clienteComRota, composicaoDesteKit } from '../../../support/para_pedidos/gerais_pedidos.js';
import { produtoKitDesconto, escolherProdutoKitDesconto, escolherVoltagemProdutoKitDesconto, clicarAddProdutoKitDesconto } from '../../../support/para_pedidos/apenas_produtos_pedidos.js';
import { clicarBotaoDesconto, validarModalSubSobre, aplicarDescontoValorFixo } from '../../../support/para_pedidos/para_pedido_desconto.js';
import { botaoGerarParcelas, escolherFormaPagamentoPrincipal, carregandoFormaPagamento, escolherDuasParcelaPagamento } from '../../../support/para_pedidos/apenas_formas_pagamento.js';
import { modalServicosVinculados, okServicosVinculados } from '../../../support/para_pedidos/apenas_servicos.js';
import { botaoFinalizarPedido, pedidoGerado } from '../../../support/para_pedidos/apenas_finalizar_pedido.js';
import { processoVendaNFe } from '../../../support/para_pedidos/apenas_processos_venda.js';
import { avancarParaParcelas, avancarFinal } from '../../../support/para_pedidos/apenas_botoes_avancar.js';
import { tirarEntrega } from '../../../support/para_pedidos/apenas_entrega.js';

describe('Gerar pedido de venda Kit com desconto', () => {

    beforeEach(() => {
        cy.visit('/');
        cy.clearAllSessionStorage();
        cy.login(); 
        cy.urlAposLogin()
        cy.tituloPagina()
        processoVendaNFe()
        clienteComRota()
        cy.wait(500)
    })
  
    context('Sem entrega/ processo 9862 - caminho feliz', () => {
        
        it('1. Ped venda: kit 1862 0 0 com desconto Sub (-) / VALOR FIXO', () => {
    
            produtoKitDesconto() //PRODUTO
            saldodisponivel()
            escolherProdutoKitDesconto()  
            escolherVoltagemProdutoKitDesconto()
            composicaoDesteKit()
            clicarAddProdutoKitDesconto()
            modalServicosVinculados() //SERVICOS
            okServicosVinculados()
            clicarBotaoDesconto() //DESCONTO
            validarModalSubSobre()
            aplicarDescontoValorFixo()
            tirarEntrega() //ENTREGA
            avancarParaParcelas()
            botaoGerarParcelas() //GERAR PARCELAS
            carregandoFormaPagamento()
            escolherFormaPagamentoPrincipal()
            cy.wait(3000)
            escolherDuasParcelaPagamento()
            avancarFinal()
        })
    })

    afterEach(() => {
        botaoFinalizarPedido() //RESUMO
        pedidoGerado()
      });
})