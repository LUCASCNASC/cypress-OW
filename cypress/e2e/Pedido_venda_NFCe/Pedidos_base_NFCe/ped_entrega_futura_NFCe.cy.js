import { saldodisponivel, clienteComRota } from '../../../support/para_pedidos/gerais_pedidos.js';
import { prdPrimeiroEntregaFutNFCe, prdSegundoEntregaFutNFCe, escolherPesqPrdPrimeiroEntregaFutNFCe, clicarVoltPrdPrimeiroEntregaFutNFCe, 
         escolherPesqPrdSegundoEntregaFutNFCe, clicarVoltPrdSegundoEntregaFutNFCe, addPrdPrimeiroEntregaFutNFCe, addPrdSegundoEntregaFutNFCe } from '../../../support/para_pedidos_NFCe/NFCe_prd_entrega_futura.js';
import { botaoGerarParcelas, escolherFormaPagamentoPrincipal, carregandoFormaPagamento, escolherDuasParcelaPagamento } from '../../../support/para_pedidos/apenas_formas_pagamento.js';
import { modalServicosVinculados, okServicosVinculados } from '../../../support/para_pedidos/apenas_servicos.js';
import { botaoFinalizarPedido, pedidoGerado } from '../../../support/para_pedidos/apenas_finalizar_pedido.js';
import { processoEntregaFuturaNFCe } from '../../../support/para_pedidos/apenas_processos_venda.js';
import { avancarFinal, avancarParaTransportadora, avancarParcelasEntrega } from '../../../support/para_pedidos/apenas_botoes_avancar.js';
import { escolherTransportadora, escolherRota, modalInconsApenasTransp } from '../../../support/para_pedidos/apenas_entrega.js';

describe('Gerar pedido de entrega futura com entrega', () => {

    beforeEach(() => {
        cy.visit('/')
        cy.clearAllSessionStorage()
        cy.login()
        cy.urlAposLogin()
        cy.tituloPagina()
        processoEntregaFuturaNFCe()
        clienteComRota()
        cy.wait(500)
        prdPrimeiroEntregaFutNFCe()
        saldodisponivel()
        escolherPesqPrdPrimeiroEntregaFutNFCe()
    })
    
    context('Com entrega/ processo 9891 - caminho feliz', () => {

        it('1. Ped venda: produto 1860 0 0', () => {
                      
            clicarVoltPrdPrimeiroEntregaFutNFCe() //PRODUTO
            addPrdPrimeiroEntregaFutNFCe()
            modalServicosVinculados() //SERVICOS
            okServicosVinculados()
            avancarParaTransportadora()
            modalInconsApenasTransp() //ESCOLHER TRANSPORTADORA
            escolherRota()
            escolherTransportadora()
            avancarParcelasEntrega()
            botaoGerarParcelas() //GERAR PARCELAS
            carregandoFormaPagamento()
            escolherFormaPagamentoPrincipal()
            cy.wait(3000)
            escolherDuasParcelaPagamento()
            cy.wait(400)
            avancarFinal()
            botaoFinalizarPedido() //RESUMO
            pedidoGerado()
        })    
        
        it('2. Ped venda: produtos 1860 0 0 e 1870 0 0', () => {
                      
            clicarVoltPrdPrimeiroEntregaFutNFCe() //PRODUTO
            addPrdPrimeiroEntregaFutNFCe()
            modalServicosVinculados() //SERVICOS
            okServicosVinculados()
            prdSegundoEntregaFutNFCe() //SEGUNDO PRODUTO
            saldodisponivel()
            escolherPesqPrdSegundoEntregaFutNFCe()
            clicarVoltPrdSegundoEntregaFutNFCe()
            addPrdSegundoEntregaFutNFCe()
            modalServicosVinculados() //SERVICOS - SEGUNDO PRODUTO
            okServicosVinculados()
            avancarParaTransportadora() 
            modalInconsApenasTransp() //ESCOLHER TRANSPORTADORA
            escolherRota()
            escolherTransportadora()
            avancarParcelasEntrega() 
            botaoGerarParcelas() //GERAR PARCELAS
            carregandoFormaPagamento()
            escolherFormaPagamentoPrincipal()
            cy.wait(3000)
            escolherDuasParcelaPagamento()
            cy.wait(400)
            avancarFinal() 
            botaoFinalizarPedido() //RESUMO
            pedidoGerado()
        })  
    })

    // afterEach(() => {
    //     botaoFinalizarPedido() //RESUMO
    //     pedidoGerado()
    //   });
})