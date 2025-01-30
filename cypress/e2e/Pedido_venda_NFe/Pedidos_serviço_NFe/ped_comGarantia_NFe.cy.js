import { saldodisponivel, clienteComRota, escolherProdutoPesquisa, clicarVoltagemProduto, addProduto } from '../../../support/para_pedidos/gerais_pedidos.js';
import { produtoNormalPrimeiro, produtoNormalSegundo } from '../../../support/para_pedidos_NFe/NFe_prd_normal.js';
import { garantiaNaoSepara, garantiaSeparaMesmoProcesso, garantiaSeparaTituloProcessoDiferente, modalServicosVinculados, okServicosVinculados } from '../../../support/para_pedidos/apenas_servicos.js';
import { botaoGerarParcelas, escolherFormaPagamentoPrincipal, carregandoFormaPagamento, escolherDuasParcelaPagamento } from '../../../support/para_pedidos/apenas_formas_pagamento.js';
import { botaoFinalizarPedido, pedidoGerado } from '../../../support/para_pedidos/apenas_finalizar_pedido.js';
import { processoVendaNFe } from '../../../support/para_pedidos/apenas_processos_venda.js';
import { avancarParaParcelas, avancarFinal, avancarParaTransportadora, avancarParcelasEntrega } from '../../../support/para_pedidos/apenas_botoes_avancar.js';
import { tirarEntrega, tirarEntregaSegundo } from '../../../support/para_pedidos/apenas_entrega.js';

describe('Gerar pedidos com Garantia', () => {

    beforeEach(() => {
        cy.visit('/')
        cy.clearAllSessionStorage()
        cy.login()
        cy.urlAposLogin()
        cy.tituloPagina() 
        processoVendaNFe()
        clienteComRota()
        cy.wait(500)
        produtoNormalPrimeiro()
        saldodisponivel()
        escolherProdutoPesquisa()
        clicarVoltagemProduto() //PRODUTO
        addProduto()
        modalServicosVinculados()
    })   

    context('Sem entrega/processo 9860 - caminho feliz', () => {

        it('1. Ped venda: produto 1860 0 0 (com Garantia que separa título no mesmo processo)', () => {
    
            garantiaSeparaMesmoProcesso() //Marcar garantia "T.A. Garantia Separa Mesmo Processo"
            okServicosVinculados() //SERVIÇOS
            tirarEntrega() //ENTREGA
            avancarParaParcelas() 
            botaoGerarParcelas() //GERAR PARCELAS
            carregandoFormaPagamento() 
            escolherFormaPagamentoPrincipal()
            escolherDuasParcelaPagamento()
            avancarFinal()
            botaoFinalizarPedido() //RESUMO
            pedidoGerado()
        })

        it('2. Ped venda: produto 1860 0 0 (com Garantia que separa título no mesmo processo) e produto 1870 0 0 (sem serviço)', () => {
    
            garantiaSeparaMesmoProcesso() //Marcar garantia "T.A. Garantia Separa Mesmo Processo"
            okServicosVinculados() //SERVIÇOS
            tirarEntrega() //ENTREGA
            produtoNormalSegundo() //SEGUNDO PRODUTO
            saldodisponivel()
            escolherProdutoPesquisa()
            clicarVoltagemProduto()
            addProduto()
            modalServicosVinculados() //SERVIÇOS - SEGUNDO PRODUTO
            okServicosVinculados()
            tirarEntregaSegundo() //ENTREGA - SEGUNDO PRODUTO
            avancarParaParcelas()
            botaoGerarParcelas() //GERAR PARCELAS
            carregandoFormaPagamento() 
            escolherFormaPagamentoPrincipal()
            escolherDuasParcelaPagamento()
            avancarFinal()
            botaoFinalizarPedido() //RESUMO
            pedidoGerado()
        })
    
        it('3. Ped venda: produto 1860 0 0 (com Garantia que não separa título)', () => {
    
            garantiaNaoSepara() //Marcar garantia "T.A. Garantia Não Separa"
            okServicosVinculados() //SERVIÇOS
            tirarEntrega() //ENTREGA
            avancarParaParcelas()
            botaoGerarParcelas() //GERAR PARCELAS
            carregandoFormaPagamento() 
            escolherFormaPagamentoPrincipal()
            escolherDuasParcelaPagamento()
            avancarFinal()
            botaoFinalizarPedido() //RESUMO
            pedidoGerado()
        })

        it('4. Ped venda: produto 1860 0 0 (com Garantia que não separa título) e produto 1870 0 0 (sem serviço)', () => {
    
            garantiaNaoSepara() //Marcar garantia "T.A. Garantia Não Separa"
            okServicosVinculados() //SERVIÇOS
            tirarEntrega() //ENTREGA
            produtoNormalSegundo() //SEGUNDO PRODUTO
            saldodisponivel()
            escolherProdutoPesquisa()
            clicarVoltagemProduto()
            addProduto()
            modalServicosVinculados() //SERVIÇOS - SEGUNDO PRODUTO
            okServicosVinculados()
            tirarEntregaSegundo() //ENTREGA - SEGUNDO PRODUTO
            avancarParaParcelas() 
            botaoGerarParcelas() //GERAR PARCELAS
            carregandoFormaPagamento() 
            escolherFormaPagamentoPrincipal()
            escolherDuasParcelaPagamento()
            avancarFinal()
            botaoFinalizarPedido() //RESUMO
            pedidoGerado()
        })
    
        it('5. Ped venda: produto 1860 0 0 (com Garantia que separa título em um processo diferente)', () => {
    
            garantiaSeparaTituloProcessoDiferente() //Marcar Garantia separa titulo em um processo diferente
            okServicosVinculados() //SERVIÇOS
            tirarEntrega() //ENTREGA
            avancarParaParcelas() 
            botaoGerarParcelas() //GERAR PARCELAS
            carregandoFormaPagamento() 
            escolherFormaPagamentoPrincipal()
            escolherDuasParcelaPagamento()
            avancarFinal()
            botaoFinalizarPedido() //RESUMO
            pedidoGerado()
        })

        it('6. Ped venda: produto 1860 0 0 (com Garantia que separa título em um processo diferente) e produto 1870 0 0 (sem serviço)', () => {
    
            garantiaSeparaTituloProcessoDiferente() //Marcar Garantia separa titulo em um processo diferente
            okServicosVinculados() //SERVIÇOS
            tirarEntrega() //ENTREGA
            produtoNormalSegundo() //SEGUNDO PRODUTO
            saldodisponivel()
            escolherProdutoPesquisa()
            clicarVoltagemProduto()
            addProduto()
            modalServicosVinculados() //SERVIÇOS - SEGUNDO PRODUTO
            okServicosVinculados()
            tirarEntregaSegundo() //ENTREGA - SEGUNDO PRODUTO
            avancarParaParcelas()
            botaoGerarParcelas() //GERAR PARCELAS
            carregandoFormaPagamento() 
            escolherFormaPagamentoPrincipal()
            escolherDuasParcelaPagamento()
            avancarFinal()
            botaoFinalizarPedido() //RESUMO
            pedidoGerado()
        })
    })

    context('Com entrega/processo 9860 - caminho feliz', () => {

        it('7. Ped venda: produto 1860 0 0 (com Garantia que separa título no mesmo processo)', () => {
    
            garantiaSeparaMesmoProcesso() //Marcar garantia "T.A. Garantia Separa Mesmo Processo"
            okServicosVinculados() //SERVIÇOS
            avancarParaTransportadora()
            avancarParcelasEntrega()
            botaoGerarParcelas() //GERAR PARCELAS
            carregandoFormaPagamento() 
            escolherFormaPagamentoPrincipal()
            escolherDuasParcelaPagamento()
            avancarFinal()
            botaoFinalizarPedido() //RESUMO
            pedidoGerado()
        })

        it('8. Ped venda: produto 1860 0 0 (com Garantia que separa título no mesmo processo) e produto 1870 0 0 (sem serviço)', () => {
    
            garantiaSeparaMesmoProcesso() //Marcar garantia "T.A. Garantia Separa Mesmo Processo"
            okServicosVinculados() //SERVIÇOS
            produtoNormalSegundo() //SEGUNDO PRODUTO
            saldodisponivel()
            escolherProdutoPesquisa()
            clicarVoltagemProduto()
            addProduto()
            modalServicosVinculados() //SERVIÇOS - SEGUNDO PRODUTO
            okServicosVinculados() //SERVIÇOS
            avancarParaTransportadora()
            avancarParcelasEntrega()
            botaoGerarParcelas() //GERAR PARCELAS
            carregandoFormaPagamento() 
            escolherFormaPagamentoPrincipal()
            escolherDuasParcelaPagamento()
            avancarFinal()
            botaoFinalizarPedido() //RESUMO
            pedidoGerado()
        })

        it('9. Ped venda: produto 1860 0 0 (com Garantia que não separa título)', () => {
    
            garantiaNaoSepara() //Marcar garantia "T.A. Garantia Não Separa"
            okServicosVinculados() //SERVIÇOS
            avancarParaTransportadora()
            avancarParcelasEntrega()
            botaoGerarParcelas() //GERAR PARCELAS
            carregandoFormaPagamento() 
            escolherFormaPagamentoPrincipal()
            escolherDuasParcelaPagamento()
            avancarFinal()
            botaoFinalizarPedido() //RESUMO
            pedidoGerado()
        })

        it('10. Ped venda: produto 1860 0 0 (com Garantia que não separa título) e produto 1870 0 0 (sem serviço)', () => {
    
            garantiaNaoSepara() //Marcar garantia "T.A. Garantia Não Separa"
            okServicosVinculados() //SERVIÇOS
            produtoNormalSegundo() //SEGUNDO PRODUTO
            saldodisponivel()
            escolherProdutoPesquisa()
            clicarVoltagemProduto()
            addProduto()
            modalServicosVinculados() //SERVIÇOS - SEGUNDO PRODUTO
            okServicosVinculados() //SERVIÇOS
            avancarParaTransportadora()
            avancarParcelasEntrega()
            botaoGerarParcelas() //GERAR PARCELAS
            carregandoFormaPagamento() 
            escolherFormaPagamentoPrincipal()
            escolherDuasParcelaPagamento()
            avancarFinal()
            botaoFinalizarPedido() //RESUMO
            pedidoGerado()
        })

        it('11. Ped venda: produto 1860 0 0 (com Garantia que separa título em um processo diferente)', () => {
    
            garantiaSeparaTituloProcessoDiferente() //Marcar Garantia separa titulo em um processo diferente
            okServicosVinculados() //SERVIÇOS
            avancarParaTransportadora()
            avancarParcelasEntrega() 
            botaoGerarParcelas() //GERAR PARCELAS
            carregandoFormaPagamento() 
            escolherFormaPagamentoPrincipal()
            escolherDuasParcelaPagamento()
            avancarFinal()
            botaoFinalizarPedido() //RESUMO
            pedidoGerado()
        })

        it('12. Ped venda: produto 1860 0 0 (com Garantia que separa título em um processo diferente) e produto 1870 0 0 (sem serviço)', () => {
    
            garantiaSeparaTituloProcessoDiferente() //Marcar Garantia separa titulo em um processo diferente
            okServicosVinculados() //SERVIÇOS
            produtoNormalSegundo() //SEGUNDO PRODUTO
            saldodisponivel()
            escolherProdutoPesquisa()
            clicarVoltagemProduto()
            addProduto()
            okServicosVinculados() //SERVIÇOS
            avancarParaTransportadora()
            avancarParcelasEntrega()
            botaoGerarParcelas() //GERAR PARCELAS
            carregandoFormaPagamento() 
            escolherFormaPagamentoPrincipal()
            escolherDuasParcelaPagamento()
            avancarFinal()
            botaoFinalizarPedido() //RESUMO
            pedidoGerado()
        })
    })
})