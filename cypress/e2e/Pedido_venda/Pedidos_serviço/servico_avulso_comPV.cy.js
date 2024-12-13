import { titulopagina } from '../../../support/para_todos';
import { processoVendaServicoAvulso, escolherClientePedido, iconeMenuOpcoes, clienteCompletoOpcaoMenu, clicarMenuClienteCompleto,
         clicarOpcaoServicos, aguardeCarregandoServico, botaoAddMaoObra, botaoAddGarantias, clicarAddGarantias,
         modalGarantiasServicosVinculados, okServicosVinculados, messServicoAdicionadoSucesso, botaoSalvarServico, messAguardeCarregando,
         messRegistroSalvoSucesso, messGarantiaJaAdicionada, clicarCarrinhoCompras, botaoAvancarPedido } from '../../../support/para_pedidos/para_servicos_avulsos';
import { botaoGerarParcelas, avancarFinal, botaoFinalizarPedido, finalizandoPedido, pedidoGerado, carregandoFormaPagamento, 
         escolherFormaPagamentoPrincipal, escolherDuasParcelaPagamento } from '../../../support/para_pedidos/gerais_pedidos';
import { garantiaSeparaMesmoProcesso } from '../../../support/para_pedidos/apenas_servicos';

describe('Venda de serviço avulso, com pedido do produto já baixado', () => {

    beforeEach(() => {
        cy.visit('/');
        cy.clearAllSessionStorage();
        cy.login(); 
        titulopagina() 
        processoVendaServicoAvulso()
        escolherClientePedido()
    })

    context('Processo 9888 - caminho feliz', () => {

        it('Venda de garantia - 139 (T.A. Garantia Separa Mesmo Processo)', () => {

            const numero_pedido = ''
            
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
            cy.wait(2000)
            escolherFormaPagamentoPrincipal()
            escolherDuasParcelaPagamento()
            cy.wait(400)
            avancarFinal()
            cy.wait(4000)
        })
    })

    afterEach(() => {
        botaoFinalizarPedido() //RESUMO
        finalizandoPedido()
        cy.wait(4000)
        pedidoGerado()
      });
})