import { validarComSaldo, clienteComRota, escolherProdutoPesquisa, clicarVoltagemProduto, addProduto } from '../../../support/para_pedidos/gerais_pedidos.js';
import { prdPrimeiro } from '../../../support/produtos_pedidos/prd_normal.js';
import { validarModalServVinculado, clicarOKServVinculado } from '../../../support/para_pedidos/servicos/apenas_servicos.js';
import { clicarGerarParcelas, carregandoFormaPagamento, escolherUmaParcelaPagamento, escolherDuasParcelaPagamento,
         escolherEntradaFormaPagamento, clicarGerarPagamento, primeiroValorAParcelar, naoAgruparLancamentos, agruparLancamentos, 
         selecionarLancAgrupar, clicarAgrupar } from '../../../support/para_pedidos/parcelas_pedido.js';
import { escolherRecebDebitoPOS, escolherFormaPagamentoPrincipal } from '../../../support/para_pedidos/processos/processo_recebimento.js';
import { processoVendaNFe } from '../../../support/para_pedidos/processos/processo_venda.js';
import { avancarParaParcelas, avancarFinal } from '../../../support/para_pedidos/apenas_botoes_avancar.js';
import { tirarEntrega } from '../../../support/para_pedidos/apenas_entrega.js';
import { clicarFinalizarPedido, validarPedidoGerado } from '../../../support/para_pedidos/apenas_finalizar_pedido.js';
import { infoFinalClienteSemEntrega, infoFinalClienteComEntrega, infoFinalEntrega, validarObsNotaFiscalVazio, validarObsInternaVazio } from '../../../support/para_pedidos/validar_tela/tela_final.js';

describe('Gerar pedido com mais de uma forma de pagamento', () => {

    beforeEach(() => {
        cy.visit('/')
        cy.clearAllSessionStorage()
        cy.login()
        cy.urlAposLogin()
        cy.tituloPagina()
        processoVendaNFe()
        clienteComRota()
        prdPrimeiro()
        validarComSaldo()
        escolherProdutoPesquisa()
    })

    context('Sem entrega/ processo 9860 - caminho feliz', () => {

        it('1. Ped venda: produto 1860 0 0 - duas formas de pagamento 3871 e 3860', () => {

            clicarVoltagemProduto() //PRODUTO
            addProduto()
            validarModalServVinculado() //SERVICOS
            clicarOKServVinculado()
            tirarEntrega() //ENTREGA
            avancarParaParcelas()
            primeiroValorAParcelar() //COLOCAR VALOR DA PRIMEIRA FORMA DE PAGAMENTO
            cy.wait(1000)
            clicarGerarParcelas() //GERAR PARCELAS - PRIMEIRA FORMA DE PAGAMENTO
            carregandoFormaPagamento()
            escolherRecebDebitoPOS()
            cy.wait(3000)
            escolherUmaParcelaPagamento()
            cy.wait(500)
            clicarGerarParcelas() //GERAR PARCELAS - SEGUNDA FORMA DE PAGAMENTO
            carregandoFormaPagamento()
            escolherFormaPagamentoPrincipal() //SEGUNDA FORMA DE PAGAMENTO
            cy.wait(3000)
            escolherDuasParcelaPagamento()
            avancarFinal()
            clicarFinalizarPedido() //RESUMO
            validarPedidoGerado()
        })

        it('2. Ped venda: produto 1860 0 0 - com entrada (3861) e outra forma de pagamento (3860)', () => {

            clicarVoltagemProduto() //PRODUTO
            addProduto()
            validarModalServVinculado() //SERVICOS
            clicarOKServVinculado()
            tirarEntrega() //ENTREGA
            avancarParaParcelas()
            escolherEntradaFormaPagamento()
            clicarGerarPagamento()
            cy.wait(400)
            clicarGerarParcelas() //GERAR PARCELAS - SEGUNDA FORMA DE PAGAMENTO
            carregandoFormaPagamento()
            escolherFormaPagamentoPrincipal() //SEGUNDA FORMA DE PAGAMENTO
            cy.wait(3000)
            escolherDuasParcelaPagamento()
            avancarFinal()
            clicarFinalizarPedido() //RESUMO
            validarPedidoGerado()
        })

        it('3. Ped venda: produto 1860 0 0 - duas formas de pagamento iguais (3860) - clicar para NÃO agrupar', () => {

            clicarVoltagemProduto() //PRODUTO
            addProduto()
            validarModalServVinculado() //SERVICOS
            clicarOKServVinculado()
            tirarEntrega() //ENTREGA
            avancarParaParcelas()
            primeiroValorAParcelar() //COLOCAR VALOR DA PRIMEIRA FORMA DE PAGAMENTO
            cy.wait(1000)
            clicarGerarParcelas() //GERAR PARCELAS - PRIMEIRA FORMA DE PAGAMENTO
            carregandoFormaPagamento()
            escolherFormaPagamentoPrincipal()
            cy.wait(3000)
            escolherUmaParcelaPagamento()
            cy.wait(500)
            clicarGerarParcelas() //GERAR PARCELAS - SEGUNDA FORMA DE PAGAMENTO
            carregandoFormaPagamento()
            escolherFormaPagamentoPrincipal() //SEGUNDA FORMA DE PAGAMENTO
            cy.wait(3000)
            escolherUmaParcelaPagamento()
            naoAgruparLancamentos()
            avancarFinal()
            clicarFinalizarPedido() //RESUMO
            validarPedidoGerado()
        })

        it('4. Ped venda: produto 1860 0 0 - duas formas de pagamento iguais (3860) - clicar para SIM agrupar', () => {

            clicarVoltagemProduto() //PRODUTO
            addProduto()
            validarModalServVinculado() //SERVICOS
            clicarOKServVinculado()
            tirarEntrega() //ENTREGA
            avancarParaParcelas()
            primeiroValorAParcelar() //COLOCAR VALOR DA PRIMEIRA FORMA DE PAGAMENTO
            cy.wait(1000)
            clicarGerarParcelas() //GERAR PARCELAS - PRIMEIRA FORMA DE PAGAMENTO
            carregandoFormaPagamento()
            escolherFormaPagamentoPrincipal()
            cy.wait(3000)
            escolherUmaParcelaPagamento()
            cy.wait(500)
            clicarGerarParcelas() //GERAR PARCELAS - SEGUNDA FORMA DE PAGAMENTO
            carregandoFormaPagamento()
            escolherFormaPagamentoPrincipal() //SEGUNDA FORMA DE PAGAMENTO
            cy.wait(3000)
            escolherUmaParcelaPagamento()
            agruparLancamentos()
            avancarFinal()
            clicarFinalizarPedido() //RESUMO
            validarPedidoGerado()
        })

        it('5. Ped venda: produto 1860 0 0 - duas formas de pagamento iguais (3860) - clicar para NÃO agrupar, mas logo em seguida agrupar selecionando os dois.', () => {

            clicarVoltagemProduto() //PRODUTO
            addProduto()
            validarModalServVinculado() //SERVICOS
            clicarOKServVinculado()
            tirarEntrega() //ENTREGA
            avancarParaParcelas()
            primeiroValorAParcelar() //COLOCAR VALOR DA PRIMEIRA FORMA DE PAGAMENTO
            cy.wait(1000)
            clicarGerarParcelas() //GERAR PARCELAS - PRIMEIRA FORMA DE PAGAMENTO
            carregandoFormaPagamento()
            escolherFormaPagamentoPrincipal()
            cy.wait(3000)
            escolherUmaParcelaPagamento()
            cy.wait(500)
            clicarGerarParcelas() //GERAR PARCELAS - SEGUNDA FORMA DE PAGAMENTO
            carregandoFormaPagamento()
            escolherFormaPagamentoPrincipal() //SEGUNDA FORMA DE PAGAMENTO
            cy.wait(3000)
            escolherUmaParcelaPagamento()
            naoAgruparLancamentos()
            selecionarLancAgrupar()
            clicarAgrupar()
            avancarFinal()
            clicarFinalizarPedido() //RESUMO
            validarPedidoGerado()
        })
    })
})