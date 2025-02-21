import { okPedidoGerado, iconeMenuOpcoesPed, pedidosPendentesOpcaoMenuPed, escolherPedidoPendente, clicarDetalhes, clicarEditarPedido, 
         menssCarregarPedAlterar, clicarAumentoQtdProduto, clicarRemoverProduto, clicarFecharIntencaoCompra, removerFormaPagamento, 
         adicionarEntrega, adicionarServico, clicarGerarParcelasAlterar, escolherFormaPagamentoPrincipalAlterar } from '../../../support/para_pedidos/para_alterar_pedido.js';
import { arrastarFormaPagamento } from '../../../support/para_pedidos/para_pedido_desconto.js';
import { garantiaSeparaMesmoProcesso, validarModalServVinculado, clicarOKServVinculado } from '../../../support/para_pedidos/servicos/apenas_servicos.js';
import { clicarGerarParcelas, carregandoFormaPagamento, escolherEntradaFormaPagamento, clicarGerarPagamento, escolherUmaParcelaPagamento,
         escolherDuasParcelaPagamento } from '../../../support/para_pedidos/parcelas_pedido.js';
import { escolherFormaPagamentoPrincipal, escolherSegundaFormaPagamento } from '../../../support/para_pedidos/processos/processo_recebimento.js';
import { clicarFinalizarPedido, validarPedidoGerado, validarPedidoAlteradoSucesso } from '../../../support/para_pedidos/apenas_finalizar_pedido.js';
import { avancarParaParcelas, avancarFinal, avancarParaTransportadora, avancarParcelasEntrega, avancarParaParcelasAlterar,
         avancarFinalAlterar, avancarParaTransportadoraAlterar, avancarParcelasEntregaAlterar } from '../../../support/para_pedidos/apenas_botoes_avancar.js';
import { tirarEntrega, tirarEntregaSegundo, tirarEntregaTerceiro } from '../../../support/para_pedidos/apenas_entrega.js';
import { infoFinalClienteSemEntrega, infoFinalClienteComEntrega, infoFinalEntrega, validarObsNotaFiscalVazio, validarObsInternaVazio } from '../../../support/para_pedidos/validar_tela/tela_final.js';
import { ProcessoVenda } from '../../../../pages/para_pedidos/processos/processo_venda.js'
import { EscolherCliente } from '../../../../pages/para_pedidos/cliente/cliente.js'
import { Produto } from '../../../../pages/produtos/prd_normal.js'
import { GeralProduto } from '../../../../pages/produtos/gerais_pedido.js'
import { ValidarSaldo } from '../../../../pages/para_pedidos/saldo/validar_saldo.js'

describe('Gerar pedido normal, entrar alterando, modificar e salvar.', () => {

    beforeEach(() => {
        cy.visit('/')
        cy.clearAllSessionStorage()
        cy.login()
        cy.urlAposLogin()
        cy.tituloPagina()
        ProcessoVenda.NFe()
        EscolherCliente.comRota()
    })

    context('Sem entrega/ processo 9860 - caminho feliz', () => {

        it.skip('1. Gerar pedido, alterar aumentando quantidade de produto e adicionando outro produto e um kit.', () => {

            Produto.primeiro() //PRODUTO
            ValidarSaldo.comSaldo()
            GeralProduto.escolherProdutoPesquisa()
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
            okPedidoGerado()
            cy.wait(1500)

            iconeMenuOpcoesPed() //ALTERAÇÃO PEDIDO WEB
            pedidosPendentesOpcaoMenuPed() //PEDIDOS PENDENTES
            escolherPedidoPendente()
            clicarDetalhes()
            clicarEditarPedido()

            clicarAumentoQtdProduto() //AUMENTANDO QUANTIDADE DO PRODUTO

            Produto.primeiro() //PRODUTO
            ValidarSaldo.comSaldo()
            GeralProduto.escolherProdutoPesquisa()
            GeralProduto.clicarVoltagemProduto() //PRODUTO
            GeralProduto.clicarAdicionarProduto()
            tirarEntregaSegundo() //ENTREGA - SEGUNDO PRODUTO
            cy.wait(500)

            Produto.kitPrimeiro() //PESQUISA PRODUTO - KIT
            ValidarSaldo.comSaldo()
            GeralProduto.escolherProdutoPesquisa()
            GeralProduto.clicarVoltagemProduto() //PRODUTO
            GeralProduto.clicarAdicionarProduto()
            clicarOKServVinculado()
            tirarEntregaTerceiro()
            avancarParaParcelasAlterar()

            clicarGerarParcelasAlterar() //GERAR PARCELAS
            escolherFormaPagamentoPrincipalAlterar()
            escolherDuasParcelaPagamento()
            avancarFinalAlterar()
            clicarFinalizarPedido() //PROCESSO INCLUSÃO
            validarPedidoAlteradoSucesso()
        })

        it.skip('2. Gerar pedido, alterar removendo o produto e adicionando outros dois.', () => {

            Produto.primeiro() //PRODUTO
            ValidarSaldo.comSaldo()
            GeralProduto.escolherProdutoPesquisa()
            GeralProduto.clicarVoltagemProduto() //PRODUTO
            GeralProduto.clicarAdicionarProduto()
            validarModalServVinculado() //SERVICOS
            clicarOKServVinculado()
            tirarEntrega() //ENTREGA PRODUTO
            avancarParaParcelas()
            clicarGerarParcelas() //GERAR PARCELAS
            carregandoFormaPagamento()
            escolherFormaPagamentoPrincipal()
            escolherDuasParcelaPagamento()
            avancarFinal()
            clicarFinalizarPedido() //RESUMO
            validarPedidoGerado()
            okPedidoGerado()
            cy.wait(1500)

            iconeMenuOpcoesPed()  //ALTERAÇÃO PEDIDO WEB
            pedidosPendentesOpcaoMenuPed() //PEDIDOS PENDENTES
            escolherPedidoPendente()
            clicarDetalhes()
            clicarEditarPedido()

            clicarRemoverProduto()
            clicarFecharIntencaoCompra()

            Produto.segundo() //PRODUTO
            ValidarSaldo.comSaldo()
            GeralProduto.escolherProdutoPesquisa()
            GeralProduto.clicarVoltagemProduto() //PRODUTO
            GeralProduto.clicarAdicionarProduto()
            validarModalServVinculado() //SERVICOS
            clicarOKServVinculado()
            tirarEntregaSegundo() //ENTREGA PRODUTO

            Produto.primeiro() //PRODUTO
            ValidarSaldo.comSaldo()
            GeralProduto.escolherProdutoPesquisa()
            GeralProduto.clicarVoltagemProduto() //PRODUTO
            GeralProduto.clicarAdicionarProduto()
            validarModalServVinculado() //SERVICOS
            clicarOKServVinculado()
            tirarEntregaSegundo() //ENTREGA PRODUTO
            avancarParaParcelasAlterar()

            clicarGerarParcelasAlterar() //GERAR PARCELAS
            carregandoFormaPagamento()
            escolherFormaPagamentoPrincipalAlterar() //PROCESSO INCLUSÃO
            escolherDuasParcelaPagamento()
            avancarFinalAlterar()
            clicarFinalizarPedido() //FINAL PEDIDO
            validarPedidoAlteradoSucesso()
        })

        //erro de inconsistencia quando colocamos o serviço de entrega
        it.skip('3. Gerar pedido, alterar colocando garantia e entrega.', () => {

            Produto.primeiro() //PRODUTO
            ValidarSaldo.comSaldo()
            GeralProduto.escolherProdutoPesquisa()
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
            clicarFinalizarPedido() //FINAL PEDIDO
            validarPedidoGerado()
            okPedidoGerado()
            cy.wait(1500)

            iconeMenuOpcoesPed() //ALTERAÇÃO PEDIDO WEB
            pedidosPendentesOpcaoMenuPed() //PEDIDOS PENDENTES
            escolherPedidoPendente()
            clicarDetalhes()
            clicarEditarPedido()
            adicionarEntrega() 
            adicionarServico()
            garantiaSeparaMesmoProcesso()
            clicarOKServVinculado()
            // avancarParaTransportadora()
            // avancarParcelasEntrega()
            // clicarGerarParcelasAlterar() //GERAR PARCELAS
            // carregandoFormaPagamento()
            // escolherFormaPagamentoPrincipalAlterar()
            // escolherDuasParcelaPagamento()
            // avancarFinalAlterar()
            // clicarFinalizarPedido() //RESUMO
            // validarPedidoAlteradoSucesso()
            
        })
    })

    context('Com entrega/ processo 9860 - caminho feliz', () => {

        it.skip('4. Gerar pedido com frete, alterar forma de pagamento.', () => {
                      
            Produto.primeiro() //PRODUTO
            ValidarSaldo.comSaldo()
            GeralProduto.escolherProdutoPesquisa()
            GeralProduto.clicarVoltagemProduto() //PRODUTO
            GeralProduto.clicarAdicionarProduto()
            validarModalServVinculado() //SERVICOS
            clicarOKServVinculado()
            avancarParaTransportadora() //TRANSPORTADORA
            avancarParcelasEntrega()
            clicarGerarParcelas() //GERAR PARCELAS
            carregandoFormaPagamento()
            escolherFormaPagamentoPrincipal() //PROCESSO INCLUSÃO
            escolherDuasParcelaPagamento()
            avancarFinal()
            clicarFinalizarPedido() //FINAL PEDIDO
            validarPedidoGerado()
            okPedidoGerado()
            cy.wait(1500)

            iconeMenuOpcoesPed() //ALTERAÇÃO PEDIDO WEB
            pedidosPendentesOpcaoMenuPed() //PEDIDOS PENDENTES
            escolherPedidoPendente()
            clicarDetalhes()
            clicarEditarPedido()
            avancarParaTransportadoraAlterar()
            avancarParcelasEntregaAlterar()
            arrastarFormaPagamento() //ARRASTAR PARA REMOVER FORMA DE PAGAMENTO ANTIGA
            removerFormaPagamento()

            clicarGerarParcelasAlterar() //GERAR PARCELAS
            escolherSegundaFormaPagamento() //PROCESSO INCLUSÃO
            escolherDuasParcelaPagamento()
            avancarFinalAlterar()
            clicarFinalizarPedido() //FINAL PEDIDO
            validarPedidoAlteradoSucesso()
        })
    })
})