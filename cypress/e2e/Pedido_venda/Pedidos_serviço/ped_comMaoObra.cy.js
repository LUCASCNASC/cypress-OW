import { escolherTransportadora, saldodisponivel, escolherRota, escolherClientePedido, clicarAdicionarProduto, tirarEntrega,
         tirarEntregaSegundo, escolherProdutoPesquisa, escolherVoltagemProduto, modalInconsRotaTransp } from '../../../support/para_pedidos/gerais_pedidos';
import { produtoNormalPrimeiro, produtoNormalSegundo } from '../../../support/para_pedidos/apenas_produtos_pedidos';
import { maoObraDestacaNãoSepara, maoObraNaoDestacaSeparaMesmoProcesso, maoObraNaoDestacaSeparaProcessoDiferente, modalServicosVinculados, 
         okServicosVinculados } from '../../../support/para_pedidos/apenas_servicos';
import { botaoGerarParcelas, escolherFormaPagamentoPrincipal, carregandoFormaPagamento, escolherDuasParcelaPagamento } from '../../../support/para_pedidos/apenas_formas_pagamento.js';
import { botaoFinalizarPedido, finalizandoPedido, pedidoGerado } from '../../../support/para_pedidos/apenas_finalizar_pedido.js';
import { processoVendaPrincipal } from '../../../support/para_pedidos/apenas_processos_venda.js';
import { avancarParaParcelas, avancarFinal, avancarParaTransportadora, avancarParcelasEntrega } from '../../../support/para_pedidos/apenas_botoes_avancar.js';

describe('Gerar pedidos com Mão de obra', () => {

    beforeEach(() => {
        cy.visit('/')
        cy.clearAllSessionStorage()
        cy.login()
        cy.urlAposLogin()
        cy.tituloPagina()
        processoVendaPrincipal()
        escolherClientePedido()
        cy.wait(500)
        produtoNormalPrimeiro() //PRODUTO
        saldodisponivel()
        escolherProdutoPesquisa()
        cy.wait(200)
        escolherVoltagemProduto()
        clicarAdicionarProduto()
        cy.wait(500)
        modalServicosVinculados()
    })
  
    context('Sem entrega/processo 9860 - caminho feliz', () => {

        it('1-Pedido de venda: produto 1860 0 0 (com Mão de Obra que Destaca e Não separa título', () => {
    
            maoObraDestacaNãoSepara() //Marcar Mão de Obra "T.A. MO Destaca e Não Separa"
            okServicosVinculados() //SERVIÇOS
            tirarEntrega() //ENTREGA
            cy.wait(400)
            avancarParaParcelas() 
            cy.wait(7000)
        })

        it('2-Pedido de venda: produto 1860 0 0 (com Mão de Obra que Destaca e Não separa título) e produto 1870 0 0 (sem serviço)', () => {

            maoObraDestacaNãoSepara()  //Marcar Mão de Obra "T.A. MO Destaca e Não Separa"
            okServicosVinculados() //SERVIÇOS
            tirarEntrega() //ENTREGA
            cy.wait(400)
            produtoNormalSegundo() //PRODUTO - SEGUNDO PRODUTO
            cy.wait(3000)
            saldodisponivel()
            escolherProdutoPesquisa()
            cy.wait(800)
            escolherVoltagemProduto()
            clicarAdicionarProduto()
            cy.wait(1000)
            modalServicosVinculados() //SERVIÇOS - SEGUNDO PRODUTO
            okServicosVinculados()
            tirarEntregaSegundo() //ENTREGA - SEGUNDO PRODUTO
            cy.wait(400)
            avancarParaParcelas() 
            cy.wait(7000)
        })
    
        it('3-Pedido de venda: produto 1860 0 0 (com Mão de Obra que Não destaca e Separa título no Mesmo processo)', () => {
    
            maoObraNaoDestacaSeparaMesmoProcesso() //Marcar Mão de Obra "T.A. MO Não Destaca e Separa Mesmo Processo"
            okServicosVinculados() //SERVIÇOS
            tirarEntrega() //ENTREGA
            cy.wait(400)
            avancarParaParcelas()  
            cy.wait(7000)
        })

        it('4-Pedido de venda: produto 1860 0 0 (com Mão de Obra que Não destaca e Separa título no Mesmo processo) e produto 1870 0 0 (sem serviço)', () => {
    
            maoObraNaoDestacaSeparaMesmoProcesso() //Marcar Mão de Obra "T.A. MO Não Destaca e Separa Mesmo Processo"
            okServicosVinculados() //SERVIÇOS
            tirarEntrega() //ENTREGA
            cy.wait(400)
            produtoNormalSegundo() //PRODUTO NORMAL
            cy.wait(3000)
            saldodisponivel()
            escolherProdutoPesquisa()
            cy.wait(800)
            escolherVoltagemProduto()
            clicarAdicionarProduto()
            cy.wait(1000)
            modalServicosVinculados() //SERVIÇOS - SEGUNDO PRODUTO
            okServicosVinculados()
            tirarEntregaSegundo() //ENTREGA- SEGUNDO PRODUTO
            cy.wait(400)
            avancarParaParcelas() 
            cy.wait(7000)
        })
    
        it('5-Pedido de venda: produto 1860 0 0 (com Mão de Obra que Não destaca e Separa título em processo Diferente)', () => {

            maoObraNaoDestacaSeparaProcessoDiferente() //Marcar Mão de obra que não destaca e separa título em processo diferente
            okServicosVinculados() //SERVIÇOS
            tirarEntrega() //ENTREGA
            cy.wait(400)
            avancarParaParcelas() 
            cy.wait(7000)
        })

        it('6-Pedido de venda: produto 1860 0 0 (com Mão de Obra que Não destaca e Separa título em processo Diferente) e produto 1870 0 0 (sem serviço)', () => {

            maoObraNaoDestacaSeparaProcessoDiferente() //Marcar Mão de obra que não destaca e separa título em processo diferente
            okServicosVinculados() //SERVIÇOS
            tirarEntrega() //ENTREGA
            cy.wait(400)
            produtoNormalSegundo() //SEGUNDO PRODUTO
            cy.wait(3000)
            saldodisponivel()
            escolherProdutoPesquisa()
            cy.wait(800)
            escolherVoltagemProduto()
            clicarAdicionarProduto()
            cy.wait(1000)
            modalServicosVinculados() //SERVIÇOS - SEGUNDO PRODUTO
            okServicosVinculados()
            tirarEntregaSegundo() //ENTREGA - SEGUNDO PRODUTO
            cy.wait(400)
            avancarParaParcelas() 
            cy.wait(7000)
        })
    })

    context('Com entrega/processo 9860 - caminho feliz', () => {

        it('7-Pedido de venda: produto 1860 0 0 (com Mão de Obra que Destaca e Não separa título)', () => {
    
            maoObraDestacaNãoSepara()  //Marcar Mão de Obra "T.A. MO Destaca e Não Separa"
            okServicosVinculados() //SERVIÇOS
            cy.wait(400)
            avancarParaTransportadora() 
            cy.wait(6000)
            modalInconsRotaTransp() //ESCOLHER TRANSPORTADORA
            escolherRota()
            escolherTransportadora()
            avancarParcelasEntrega() 
        })
        
        it('8-Pedido de venda: produto 1860 0 0 (com Mão de Obra que Destaca e Não separa título) e produto 1870 0 0 (sem serviço)', () => {
    
            maoObraDestacaNãoSepara()  //Marcar Mão de Obra "T.A. MO Destaca e Não Separa"
            okServicosVinculados() //SERVIÇOS
            cy.wait(800)
            produtoNormalSegundo() //SEGUNDO PRODUTO
            cy.wait(3000)
            saldodisponivel()
            escolherProdutoPesquisa()
            cy.wait(800)
            escolherVoltagemProduto()
            clicarAdicionarProduto()
            cy.wait(1000)
            modalServicosVinculados() //SERVIÇOS - SEGUNDO PRODUTO
            okServicosVinculados()
            cy.wait(400)
            avancarParaTransportadora() 
            cy.wait(6000)
            modalInconsRotaTransp() //ESCOLHER TRANSPORTADORA
            escolherRota()
            escolherTransportadora()
            avancarParcelasEntrega() 
        })

        it('9-Pedido de venda: produto 1860 0 0 (com Mão de Obra que Não destaca e Separa título no Mesmo processo)', () => {
    
            maoObraNaoDestacaSeparaMesmoProcesso() //Marcar Mão de Obra "T.A. MO Não Destaca e Separa Mesmo Processo"
            okServicosVinculados() //SERVIÇOS
            cy.wait(400)
            avancarParaTransportadora() 
            cy.wait(6000)
            modalInconsRotaTransp() //ESCOLHER TRANSPORTADORA
            escolherRota()
            escolherTransportadora()
            avancarParcelasEntrega() 
        })

        it('10-Pedido de venda: produto 1860 0 0 (com Mão de Obra que Não destaca e Separa título no Mesmo processo) e produto 1870 0 0 (sem serviço)', () => {
    
            maoObraNaoDestacaSeparaMesmoProcesso() //Marcar Mão de Obra "T.A. MO Não Destaca e Separa Mesmo Processo"
            okServicosVinculados() //SERVIÇOS
            cy.wait(800)
            produtoNormalSegundo() //SEGUNDO PRODUTO
            cy.wait(3000)
            saldodisponivel()
            escolherProdutoPesquisa()
            cy.wait(800)
            escolherVoltagemProduto()
            clicarAdicionarProduto()
            cy.wait(1000)
            modalServicosVinculados() //SERVIÇOS - SEGUNDO PRODUTP
            okServicosVinculados()
            cy.wait(400)
            avancarParaTransportadora() 
            cy.wait(6000)
            modalInconsRotaTransp() //ESCOLHER TRANSPORTADORA
            escolherRota()
            escolherTransportadora()
            avancarParcelasEntrega() 
        })

        it('11-Pedido de venda: produto 1860 0 0 (com Mão de Obra que Não destaca e Separa título em processo Diferente)', () => {
    
            maoObraNaoDestacaSeparaProcessoDiferente() //Marcar Mão de obra que não destaca e separa título em processo diferente
            okServicosVinculados() //SERVIÇOS
            cy.wait(400)
            avancarParaTransportadora() 
            cy.wait(6000) 
            modalInconsRotaTransp() //ESCOLHER TRANSPORTADORA
            escolherRota()
            escolherTransportadora()
            avancarParcelasEntrega() 
        })   

        it('12-Pedido de venda: produto 1860 0 0 (com Mão de Obra que Não destaca e Separa título em processo Diferente) e produto 1870 0 0 (sem serviço)', () => {
    
            maoObraNaoDestacaSeparaProcessoDiferente() //Marcar Mão de obra que não destaca e separa título em processo diferente
            okServicosVinculados() //SERVIÇOS
            cy.wait(800)
            produtoNormalSegundo() //SEGUNDO PRODUTO
            cy.wait(3000)
            saldodisponivel()
            escolherProdutoPesquisa()
            cy.wait(800)
            escolherVoltagemProduto()
            clicarAdicionarProduto()
            cy.wait(1000)
            modalServicosVinculados() //SERVIÇOS - SEGUNDO PRODUTO
            okServicosVinculados()
            cy.wait(400)
            avancarParaTransportadora() 
            cy.wait(6000)
            modalInconsRotaTransp() //ESCOLHER TRANSPORTADORA
            escolherRota()
            escolherTransportadora()
            avancarParcelasEntrega()  
        })
    })

    afterEach(() => {
        botaoGerarParcelas() //GERAR PARCELAS
        carregandoFormaPagamento()
        cy.wait(8000)
        escolherFormaPagamentoPrincipal()
        cy.wait(3000)
        escolherDuasParcelaPagamento()
        cy.wait(400)
        avancarFinal()
        botaoFinalizarPedido() //RESUMO
        finalizandoPedido()
        cy.wait(9000)
        pedidoGerado()
      });
})