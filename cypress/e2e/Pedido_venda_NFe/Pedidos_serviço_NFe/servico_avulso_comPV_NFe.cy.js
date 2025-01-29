import { clienteComRota, iconeMenuOpcoes, clienteCompletoOpcaoMenu, clicarMenuClienteCompleto, clicarOpcaoServicos,
         aguardeCarregandoServico, botaoAddMaoObra, botaoAddGarantias, clicarAddGarantias, modalGarantiasServicosVinculados,
         messServicoAdicionadoSucesso, botaoSalvarServico, messAguardeCarregando, messRegistroSalvoSucesso, messGarantiaJaAdicionada,
         clicarCarrinhoCompras, botaoAvancarPedido } from '../../../support/para_pedidos/para_servicos_avulsos.js';
import { garantiaSeparaMesmoProcesso, okServicosVinculados } from '../../../support/para_pedidos/apenas_servicos.js';
import { botaoGerarParcelas, escolherFormaPagamentoPrincipal, carregandoFormaPagamento, escolherDuasParcelaPagamento } from '../../../support/para_pedidos/apenas_formas_pagamento.js';
import { botaoFinalizarPedido, pedidoGerado } from '../../../support/para_pedidos/apenas_finalizar_pedido.js';
import { processoVendaServicoAvulso } from '../../../support/para_pedidos/apenas_processos_venda.js';
import { avancarFinal } from '../../../support/para_pedidos/apenas_botoes_avancar.js';

describe('Venda de serviço avulso, com pedido do produto já baixado', () => {

    beforeEach(() => {
        cy.visit('/')
        cy.clearAllSessionStorage()
        cy.login()
        cy.urlAposLogin()
        cy.tituloPagina() 
        processoVendaServicoAvulso()
        clienteComRota()
    })

    context('Processo 9888 - caminho feliz', () => {

        it.skip('1. Venda de garantia - 139 (T.A. Garantia Separa Mesmo Processo)', () => {

            const numero_pedido = '8605'
            
            iconeMenuOpcoes()
            clienteCompletoOpcaoMenu()
            clicarMenuClienteCompleto()
            clicarOpcaoServicos()
            aguardeCarregandoServico()

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

            botaoAddMaoObra()
            botaoAddGarantias()
            clicarAddGarantias()
            modalGarantiasServicosVinculados()
            garantiaSeparaMesmoProcesso() //clicar na primeira garantia - Garantia Separa Mesmo Processo
            okServicosVinculados()
            messServicoAdicionadoSucesso()
            botaoSalvarServico()
            messAguardeCarregando()
            messRegistroSalvoSucesso()
            clicarAddGarantias() //Clicando novamente para validar que não deixa adicionar mais garantias
            messGarantiaJaAdicionada() //Mensagem de "O Serviço Garantias já foi adicionado à esse produto.", quando tentamos adicionar novamente
            clicarCarrinhoCompras()
            botaoAvancarPedido()
            cy.wait(3000)
            botaoGerarParcelas() //GERAR PARCELAS
            carregandoFormaPagamento()
            escolherFormaPagamentoPrincipal()
            cy.wait(2000)
            escolherDuasParcelaPagamento()
            cy.wait(400)
            avancarFinal()
            botaoFinalizarPedido() //RESUMO
            pedidoGerado()
        })
    })
})