import { saldodisponivel, clienteComRota, escolherProdutoPesquisa, clicarVoltagemProduto, addProduto } from '../../../support/para_pedidos/gerais_pedidos.js';
import { prdPrimeiroEntregaFut, prdSegundoEntregaFut } from '../../../support/produtos_pedidos/prd_entrega_futura.js';
import { botaoGerarParcelas, carregandoFormaPagamento, escolherDuasParcelaPagamento } from '../../../support/para_pedidos/parcelas_pedido.js';
import { escolherFormaPagamentoPrincipal } from '../../../support/para_pedidos/processos/processo_recebimento.js';
import { modalServicosVinculados, okServicosVinculados } from '../../../support/para_pedidos/servicos/apenas_servicos.js';
import { clicarFinalizarPedido, validarPedidoGerado } from '../../../support/para_pedidos/apenas_finalizar_pedido.js';
import { processoEntregaFuturaNFe } from '../../../support/para_pedidos/processos/processo_venda.js';
import { avancarParaParcelas, avancarFinal, avancarParaTransportadora, avancarParcelasEntrega } from '../../../support/para_pedidos/apenas_botoes_avancar.js';
import { tirarEntrega, tirarEntregaSegundo } from '../../../support/para_pedidos/apenas_entrega.js';
import { infoFinalClienteSemEntrega, infoFinalClienteComEntrega, infoFinalEntrega, validarObsNotaFiscalVazio, validarObsInternaVazio } from '../../../support/para_pedidos/validar_tela/tela_final.js';


describe('Gerar pedido de entrega futura', () => {

    beforeEach(() => {
        cy.visit('/')
        cy.clearAllSessionStorage()
        cy.login()
        cy.urlAposLogin()
        cy.tituloPagina()
        processoEntregaFuturaNFe()
        clienteComRota()
        prdPrimeiroEntregaFut() //PESQUISA PRODUTO
        saldodisponivel()
        escolherProdutoPesquisa() //ESCOLHER PRODUTO
    })

    context('Sem entrega/ processo 9862 - caminho feliz', () => {

        it('1. Ped venda: produto 1860 0 0', () => {
                      
            clicarVoltagemProduto() //VOLTAGEM
            addProduto()
            modalServicosVinculados() //MODAL SERVIÇOS
            okServicosVinculados()
            tirarEntrega() //ENTREGA PRODUTO
            avancarParaParcelas()
            botaoGerarParcelas() //GERAR PARCELAS
            carregandoFormaPagamento()
            escolherFormaPagamentoPrincipal() //PROCESSO INCLUSÃO
            escolherDuasParcelaPagamento()
            avancarFinal()
            clicarFinalizarPedido() //RESUMO
            validarPedidoGerado()
        })
        
        it('2. Ped venda: produtos 1860 0 0 e 1870 0 0', () => {
                      
            clicarVoltagemProduto() //VOLTAGEM
            addProduto()
            modalServicosVinculados() //MODAL SERVIÇOS
            okServicosVinculados()
            tirarEntrega() //ENTREGA PRODUTO
            prdSegundoEntregaFut() //PESQUISA PRODUTO - SEGUNDO
            saldodisponivel()
            escolherProdutoPesquisa() //ESCOLHER PRODUTO - SEGUNDO
            clicarVoltagemProduto() //VOLTAGEM - SEGUNDO
            addProduto()
            modalServicosVinculados() //MODAL SERVIÇOS  - SEGUNDO
            okServicosVinculados()
            tirarEntregaSegundo() //ENTREGA - SEGUNDO PRODUTO
            avancarParaParcelas()
            botaoGerarParcelas() //GERAR PARCELAS
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
                      
            clicarVoltagemProduto() //VOLTAGEM
            addProduto()
            modalServicosVinculados() //MODAL SERVIÇOS
            okServicosVinculados()
            avancarParaTransportadora()
            avancarParcelasEntrega()
            botaoGerarParcelas() //GERAR PARCELAS
            carregandoFormaPagamento()
            escolherFormaPagamentoPrincipal() //PROCESSO INCLUSÃO
            escolherDuasParcelaPagamento()
            avancarFinal()
            clicarFinalizarPedido() //RESUMO
            validarPedidoGerado()
        })    
        
        it('4. Ped venda: produtos 1860 0 0 e 1870 0 0', () => {
                      
            clicarVoltagemProduto() //VOLTAGEM
            addProduto()
            modalServicosVinculados() //MODAL SERVIÇOS
            okServicosVinculados()
            prdSegundoEntregaFut() //PESQUISA PRODUTO - SEGUNDO
            saldodisponivel()
            escolherProdutoPesquisa() //ESCOLHER PRODUTO - SEGUNDO
            clicarVoltagemProduto() //VOLTAGEM - SEGUNDO
            addProduto()
            modalServicosVinculados() //MODAL SERVIÇOS - SEGUNDO
            okServicosVinculados()
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