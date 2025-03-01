import { clicarGerarParcelas, carregandoFormaPagamento, escolherUmaParcelaPagamento, escolherDuasParcelaPagamento,
         escolherEntradaFormaPagamento, clicarGerarPagamento, primeiroValorAParcelar, naoAgruparLancamentos, agruparLancamentos, 
         selecionarLancAgrupar, clicarAgrupar } from '../../../support/para_pedidos/parcelas_pedido.js';
import { escolherRecebDebitoPOS, escolherFormaPagamentoPrincipal } from '../../../support/para_pedidos/processos/processo_recebimento.js';
import { tirarEntrega } from '../../../support/para_pedidos/apenas_entrega.js';
import { infoFinalClienteSemEntrega, infoFinalClienteComEntrega, infoFinalEntrega, validarObsNotaFiscalVazio, validarObsInternaVazio } from '../../../support/para_pedidos/validar_tela/tela_final.js';
import { ProcessoVenda } from '../../../../pages/para_pedidos/processos/processo_venda.js'
import { EscolherCliente } from '../../../../pages/para_pedidos/cliente/cliente.js'
import { Produto } from '../../../../pages/produtos/prd_normal.js'
import { GeralProduto } from '../../../../pages/produtos/gerais_pedido.js'
import { ValidarSaldo } from '../../../../pages/para_pedidos/saldo/validar_saldo.js'
import { Servico } from '../../../../pages/para_pedidos/servicos/valida_servicos_adicionados.js'
import { AvancarNormal } from '../../../../pages/para_pedidos/botoes/avancar/avancar_normal.js'

describe('Gerar pedido com mais de uma forma de pagamento', () => {

    beforeEach(() => {
        cy.visit('/')
        cy.clearAllSessionStorage()
        cy.login()
        cy.urlAposLogin()
        cy.tituloPagina()
        ProcessoVenda.NFe()
        EscolherCliente.comRota()
        Produto.primeiro() //PRODUTO
        ValidarSaldo.comSaldo()
        GeralProduto.escolherProdutoPesquisa()
    })

    context('Sem entrega/ processo 9860 - caminho feliz', () => {

        it('1. Ped venda: produto 1860 0 0 - duas formas de pagamento 3871 e 3860', () => {

            GeralProduto.clicarVoltagemProduto() //PRODUTO
            GeralProduto.clicarAdicionarProduto()
            Servico.validarModalServVinc() //SERVICOS
            Servico.clicarOKServVinc()
            tirarEntrega() //ENTREGA
            AvancarNormal.paraParcelas()
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
            AvancarNormal.final()
            FinalizarPed.clicarFinalizarPed() //RESUMO
            FinalizarPed.validarPedGerado()
        })

        it('2. Ped venda: produto 1860 0 0 - com entrada (3861) e outra forma de pagamento (3860)', () => {

            GeralProduto.clicarVoltagemProduto() //PRODUTO
            GeralProduto.clicarAdicionarProduto()
            Servico.validarModalServVinc() //SERVICOS
            Servico.clicarOKServVinc()
            tirarEntrega() //ENTREGA
            AvancarNormal.paraParcelas()
            escolherEntradaFormaPagamento()
            clicarGerarPagamento()
            cy.wait(400)
            clicarGerarParcelas() //GERAR PARCELAS - SEGUNDA FORMA DE PAGAMENTO
            carregandoFormaPagamento()
            escolherFormaPagamentoPrincipal() //SEGUNDA FORMA DE PAGAMENTO
            cy.wait(3000)
            escolherDuasParcelaPagamento()
            AvancarNormal.final()
            FinalizarPed.clicarFinalizarPed() //RESUMO
            FinalizarPed.validarPedGerado()
        })

        it('3. Ped venda: produto 1860 0 0 - duas formas de pagamento iguais (3860) - clicar para NÃO agrupar', () => {

            GeralProduto.clicarVoltagemProduto() //PRODUTO
            GeralProduto.clicarAdicionarProduto()
            Servico.validarModalServVinc() //SERVICOS
            Servico.clicarOKServVinc()
            tirarEntrega() //ENTREGA
            AvancarNormal.paraParcelas()
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
            AvancarNormal.final()
            FinalizarPed.clicarFinalizarPed() //RESUMO
            FinalizarPed.validarPedGerado()
        })

        it('4. Ped venda: produto 1860 0 0 - duas formas de pagamento iguais (3860) - clicar para SIM agrupar', () => {

            GeralProduto.clicarVoltagemProduto() //PRODUTO
            GeralProduto.clicarAdicionarProduto()
            Servico.validarModalServVinc() //SERVICOS
            Servico.clicarOKServVinc()
            tirarEntrega() //ENTREGA
            AvancarNormal.paraParcelas()
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
            AvancarNormal.final()
            FinalizarPed.clicarFinalizarPed() //RESUMO
            FinalizarPed.validarPedGerado()
        })

        it('5. Ped venda: produto 1860 0 0 - duas formas de pagamento iguais (3860) - clicar para NÃO agrupar, mas logo em seguida agrupar selecionando os dois.', () => {

            GeralProduto.clicarVoltagemProduto() //PRODUTO
            GeralProduto.clicarAdicionarProduto()
            Servico.validarModalServVinc() //SERVICOS
            Servico.clicarOKServVinc()
            tirarEntrega() //ENTREGA
            AvancarNormal.paraParcelas()
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
            AvancarNormal.final()
            FinalizarPed.clicarFinalizarPed() //RESUMO
            FinalizarPed.validarPedGerado()
        })
    })
})