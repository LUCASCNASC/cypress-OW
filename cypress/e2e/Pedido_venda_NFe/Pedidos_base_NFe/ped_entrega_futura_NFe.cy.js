import { validarComSaldo, clienteComRota, escolherProdutoPesquisa, clicarVoltagemProduto, clicarAdicionarProduto } from '../../../support/para_pedidos/gerais_pedidos.js';
import { prdPrimeiro, prdSegundo } from '../../../support/produtos_pedidos/prd_normal.js';
import { clicarGerarParcelas, carregandoFormaPagamento, escolherDuasParcelaPagamento } from '../../../support/para_pedidos/parcelas_pedido.js';
import { escolherFormaPagamentoPrincipal } from '../../../support/para_pedidos/processos/processo_recebimento.js';
import { validarModalServVinculado, clicarOKServVinculado } from '../../../support/para_pedidos/servicos/apenas_servicos.js';
import { clicarFinalizarPedido, validarPedidoGerado } from '../../../support/para_pedidos/apenas_finalizar_pedido.js';
import { processoEntregaFuturaNFe } from '../../../support/para_pedidos/processos/processo_venda.js';
import { avancarParaParcelas, avancarFinal, avancarParaTransportadora, avancarParcelasEntrega } from '../../../support/para_pedidos/apenas_botoes_avancar.js';
import { tirarEntrega, tirarEntregaSegundo } from '../../../support/para_pedidos/apenas_entrega.js';
import { infoFinalClienteSemEntrega, infoFinalClienteComEntrega, infoFinalEntrega, validarObsNotaFiscalVazio, validarObsInternaVazio } from '../../../support/para_pedidos/validar_tela/tela_final.js';
import { ProcessoVenda } from '../../../../pages/para_pedidos/processos/processo_venda.js'
import { EscolherCliente } from '../../../../pages/para_pedidos/cliente/cliente.js'
import { ValidarSaldo } from '../../../../pages/para_pedidos/saldo/validar_saldo.js'
import { Produto } from '../../../../pages/produtos/prd_normal.js'

describe('Gerar pedido de entrega futura', () => {

    beforeEach(() => {
        cy.visit('/')
        cy.clearAllSessionStorage()
        cy.login()
        cy.urlAposLogin()
        cy.tituloPagina()
        ProcessoVenda.entregaFutNFe()
        EscolherCliente.comRota()
        Produto.primeiro() //PRODUTO
        ValidarSaldo.comSaldo()
        GeralProduto.escolherProdutoPesquisa()
    })

    context('Sem entrega/ processo 9862 - caminho feliz', () => {

        it('1. Ped venda: produto 1860 0 0', () => {
                      
            GeralProduto.clicarVoltagemProduto() //PRODUTO
            GeralProduto.clicarAdicionarProduto()
            validarModalServVinculado() //SERVICOS
            clicarOKServVinculado()
            tirarEntrega() //ENTREGA PRODUTO
            avancarParaParcelas()
            clicarGerarParcelas() //GERAR PARCELAS
            carregandoFormaPagamento()
            escolherFormaPagamentoPrincipal() //PROCESSO INCLUSÃO
            escolherDuasParcelaPagamento()
            avancarFinal()
            clicarFinalizarPedido() //RESUMO
            validarPedidoGerado()
        })
        
        it('2. Ped venda: produtos 1860 0 0 e 1870 0 0', () => {
                      
            GeralProduto.clicarVoltagemProduto() //PRODUTO
            GeralProduto.clicarAdicionarProduto()
            validarModalServVinculado() //SERVICOS
            clicarOKServVinculado()
            tirarEntrega() //ENTREGA PRODUTO
            Produto.segundo() //PRODUTO
            ValidarSaldo.comSaldo()
            GeralProduto.escolherProdutoPesquisa()
            GeralProduto.clicarVoltagemProduto() //PRODUTO
            GeralProduto.clicarAdicionarProduto()
            validarModalServVinculado() //SERVICOS
            clicarOKServVinculado()
            tirarEntregaSegundo() //ENTREGA - SEGUNDO PRODUTO
            avancarParaParcelas()
            clicarGerarParcelas() //GERAR PARCELAS
            carregandoFormaPagamento()
            escolherFormaPagamentoPrincipal() //PROCESSO INCLUSÃO
            escolherDuasParcelaPagamento()
            avancarFinal() 
            clicarFinalizarPedido() //RESUMO
            validarPedidoGerado()
        })
    })
    
    context('Com entrega/ processo 9862 - caminho feliz', () => {

        it('3. Ped venda: produto 1860 0 0', () => {
                      
            GeralProduto.clicarVoltagemProduto() //PRODUTO
            GeralProduto.clicarAdicionarProduto()
            validarModalServVinculado() //SERVICOS
            clicarOKServVinculado()
            avancarParaTransportadora()
            avancarParcelasEntrega()
            clicarGerarParcelas() //GERAR PARCELAS
            carregandoFormaPagamento()
            escolherFormaPagamentoPrincipal() //PROCESSO INCLUSÃO
            escolherDuasParcelaPagamento()
            avancarFinal()
            clicarFinalizarPedido() //RESUMO
            validarPedidoGerado()
        })    
        
        it('4. Ped venda: produtos 1860 0 0 e 1870 0 0', () => {
                      
            GeralProduto.clicarVoltagemProduto() //PRODUTO
            GeralProduto.clicarAdicionarProduto()
            validarModalServVinculado() //SERVICOS
            clicarOKServVinculado()
            Produto.segundo() //PRODUTO
            ValidarSaldo.comSaldo()
            GeralProduto.escolherProdutoPesquisa()
            GeralProduto.clicarVoltagemProduto() //PRODUTO
            GeralProduto.clicarAdicionarProduto()
            validarModalServVinculado() //SERVICOS
            clicarOKServVinculado()
            avancarParaTransportadora() //TRANSPORTADORA
            avancarParcelasEntrega() 
            botaoGerarParcelas() //GERAR PARCELAS
            carregandoFormaPagamento() 
            escolherFormaPagamentoPrincipal() //PROCESSO INCLUSÃO
            escolherDuasParcelaPagamento()
            avancarFinal() 
            clicarFinalizarPedido() //RESUMO
            validarPedidoGerado()
        })  
    })
})