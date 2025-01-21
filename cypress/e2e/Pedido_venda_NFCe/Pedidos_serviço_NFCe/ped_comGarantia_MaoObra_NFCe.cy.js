import { saldodisponivel, clienteComRota, clicarAdicionarProduto, escolherProdutoPesquisa, escolherVoltagemProduto } from '../../../support/para_pedidos/gerais_pedidos.js';
import { produtoNormalPrimeiroNCFe, produtoNormalSegundoNCFe } from '../../../support/para_pedidos_NFCe/apenasNFCe_produtos_pedidos.js';
import { garantiaNaoSepara, garantiaSeparaMesmoProcesso, garantiaSeparaTituloProcessoDiferente, maoObraDestacaNãoSepara, 
         maoObraNaoDestacaSeparaMesmoProcesso, maoObraNaoDestacaSeparaProcessoDiferente, modalServicosVinculados, okServicosVinculados } from '../../../support/para_pedidos/apenas_servicos.js';
import { botaoGerarParcelas, escolherFormaPagamentoPrincipal, carregandoFormaPagamento, escolherDuasParcelaPagamento } from '../../../support/para_pedidos/apenas_formas_pagamento.js';
import { botaoFinalizarPedido, finalizandoPedido, pedidoGerado } from '../../../support/para_pedidos/apenas_finalizar_pedido.js';
import { processoVendaNFCe } from '../../../support/para_pedidos/apenas_processos_venda.js';
import { avancarParaParcelas, avancarFinal, avancarParaTransportadora, avancarParcelasEntrega } from '../../../support/para_pedidos/apenas_botoes_avancar.js';
import { escolherTransportadora, escolherRota, modalInconsRotaTransp, tirarEntrega, tirarEntregaSegundo, modalInconsApenasTransp } from '../../../support/para_pedidos/apenas_entrega.js';

describe('Gerar pedidos com Garantia e Mão de Obra', () => {

    beforeEach(() => {
        cy.visit('/')
        cy.clearAllSessionStorage()
        cy.login()
        cy.urlAposLogin()
        cy.tituloPagina() 
        processoVendaNFCe()
        clienteComRota()
        cy.wait(500)
        produtoNormalPrimeiroNCFe() //PRODUTO
        saldodisponivel()
        escolherProdutoPesquisa()
        cy.wait(200)
        escolherVoltagemProduto()
        clicarAdicionarProduto()
        cy.wait(500)
        modalServicosVinculados()
    })

    context('Com entrega/processo 9890 - caminho feliz', () => {

        it('19-Pedido de venda: produto 1860 0 0 (com Garantia que separa título no mesmo processo e Mão de Obra que destaca e não separa)', () => {

            garantiaSeparaMesmoProcesso() //Marcar garantia "T.A. Garantia Separa Mesmo Processo"
            cy.wait(300)
            maoObraDestacaNãoSepara() //Marcar Mão de Obra "T.A. MO Destaca e Não Separa"
            okServicosVinculados()
            cy.wait(400)
            avancarParaTransportadora()
            modalInconsApenasTransp() //ESCOLHER TRANSPORTADORA
            escolherTransportadora()
            avancarParcelasEntrega()  
        })

        it('20-Pedido de venda: produto 1860 0 0 (com Garantia que separa título no mesmo processo e Mão de Obra que destaca e não separa) e produto 1870 0 0 (sem serviço)', () => {

            garantiaSeparaMesmoProcesso() //Marcar garantia "T.A. Garantia Separa Mesmo Processo"
            cy.wait(300)
            maoObraDestacaNãoSepara() //Marcar Mão de Obra "T.A. MO Destaca e Não Separa"
            okServicosVinculados() //SERVIÇOS
            cy.wait(800)
            produtoNormalSegundoNCFe() //SEGUNDO PRODUTO
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
            modalInconsApenasTransp() //ESCOLHER TRANSPORTADORA
            escolherTransportadora()
            avancarParcelasEntrega()
        })

        it('21-Pedido de venda: produto 1860 0 0 (com Garantia que separa título no mesmo processo e Mão de Obra não destaca e separa no mesmo processo)', () => {

            garantiaSeparaMesmoProcesso() //Marcar garantia "T.A. Garantia Separa Mesmo Processo"
            cy.wait(300)
            maoObraNaoDestacaSeparaMesmoProcesso() //Marcar Mão de Obra "T.A. MO Não Destaca e Separa Mesmo Processo"
            okServicosVinculados()
            cy.wait(400)
            avancarParaTransportadora()
            modalInconsApenasTransp() //ESCOLHER TRANSPORTADORA
            escolherTransportadora()
            avancarParcelasEntrega()
        })

        it('22-Pedido de venda: produto 1860 0 0 (com Garantia que separa título no mesmo processo e Mão de Obra não destaca e separa no mesmo processo) e produto 1870 0 0 (sem serviço)', () => {

            garantiaSeparaMesmoProcesso() //Marcar garantia "T.A. Garantia Separa Mesmo Processo"
            cy.wait(300)
            maoObraNaoDestacaSeparaMesmoProcesso() //Marcar Mão de Obra "T.A. MO Não Destaca e Separa Mesmo Processo"
            okServicosVinculados() //SERVIÇOS
            cy.wait(800)
            produtoNormalSegundoNCFe() //SEGUNDO PRODUTO
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
            modalInconsApenasTransp() //ESCOLHER TRANSPORTADORA
            escolherTransportadora()
            avancarParcelasEntrega()
        })

        it('23-Pedido de venda: produto 1860 0 0 (com Garantia que separa título no mesmo processo e Mão de Obra não destaca e separa em outro processo)', () => {

            garantiaSeparaMesmoProcesso() //Marcar garantia "T.A. Garantia Separa Mesmo Processo"
            cy.wait(300)
            maoObraNaoDestacaSeparaProcessoDiferente() //Marcar Mão de Obra "T.A. MO Não Destaca e Separa Processo Diferente" 
            okServicosVinculados()
            cy.wait(400)
            avancarParaTransportadora()
            modalInconsApenasTransp() //ESCOLHER TRANSPORTADORA
            escolherTransportadora()
            avancarParcelasEntrega() 
        })

        it('24-Pedido de venda: produto 1860 0 0 (com Garantia que separa título no mesmo processo e Mão de Obra não destaca e separa em outro processo) e produto 1870 0 0 (sem serviço)', () => {

            garantiaSeparaMesmoProcesso() //Marcar garantia "T.A. Garantia Separa Mesmo Processo"
            cy.wait(300)
            maoObraNaoDestacaSeparaProcessoDiferente() //Marcar Mão de Obra "T.A. MO Não Destaca e Separa Processo Diferente" 
            okServicosVinculados() //SERVIÇOS
            cy.wait(800)
            produtoNormalSegundoNCFe() //SEGUNDO PRODUTO
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
            modalInconsApenasTransp() //ESCOLHER TRANSPORTADORA
            escolherTransportadora()
            avancarParcelasEntrega()
        })

        it('25-Pedido de venda: produto 1860 0 0 (com Garantia que não separa e Mão de Obra que destaca e não separa)', () => {

            garantiaNaoSepara() //Marcar garantia "T.A. Garantia Não Separa"
            cy.wait(300)
            maoObraDestacaNãoSepara()//Marcar Mão de Obra "T.A. MO Destaca e Não Separa"
            okServicosVinculados()
            cy.wait(400)
            avancarParaTransportadora()
            modalInconsApenasTransp() //ESCOLHER TRANSPORTADORA
            escolherTransportadora()
            avancarParcelasEntrega() 
        })

        it('26-Pedido de venda: produto 1860 0 0 (com Garantia que não separa e Mão de Obra que destaca e não separa) e produto 1870 0 0 (sem serviço)', () => {

            garantiaNaoSepara() //Marcar garantia "T.A. Garantia Não Separa"
            cy.wait(300)
            maoObraDestacaNãoSepara()//Marcar Mão de Obra "T.A. MO Destaca e Não Separa"
            okServicosVinculados() //SERVIÇOS
            cy.wait(800)
            produtoNormalSegundoNCFe() //SEGUNDO PRODUTO
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
            modalInconsApenasTransp() //ESCOLHER TRANSPORTADORA
            escolherTransportadora()
            avancarParcelasEntrega()
        })

        it('27-Pedido de venda: produto 1860 0 0 (com Garantia que não separa e Mão de Obra não destaca e separa no mesmo processo)', () => {

            garantiaNaoSepara() //Marcar garantia "T.A. Garantia Não Separa"
            cy.wait(300)
            maoObraNaoDestacaSeparaMesmoProcesso() //Marcar Mão de Obra "T.A. MO Não Destaca e Separa Mesmo Processo"
            okServicosVinculados()
            cy.wait(400)
            avancarParaTransportadora()
            modalInconsApenasTransp() //ESCOLHER TRANSPORTADORA
            escolherTransportadora()
            avancarParcelasEntrega()
        })

        it('28-Pedido de venda: produto 1860 0 0 (com Garantia que não separa e Mão de Obra não destaca e separa no mesmo processo) e produto 1870 0 0 (sem serviço)', () => {

            garantiaNaoSepara() //Marcar garantia "T.A. Garantia Não Separa"
            cy.wait(300)
            maoObraNaoDestacaSeparaMesmoProcesso() //Marcar Mão de Obra "T.A. MO Não Destaca e Separa Mesmo Processo"
            okServicosVinculados() //SERVIÇOS
            cy.wait(800)
            produtoNormalSegundoNCFe() //SEGUNDO PRODUTO
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
            modalInconsApenasTransp() //ESCOLHER TRANSPORTADORA
            escolherTransportadora()
            avancarParcelasEntrega() 
        })

        it('29-Pedido de venda: produto 1860 0 0 (com Garantia que não separa e Mão de Obra não destaca e separa em outro processo)', () => {

            garantiaNaoSepara() //Marcar garantia "T.A. Garantia Não Separa"
            cy.wait(300)
            maoObraNaoDestacaSeparaProcessoDiferente() //Marcar Mão de Obra "T.A. MO Não Destaca e Separa Processo Diferente" 
            okServicosVinculados()
            cy.wait(400)
            avancarParaTransportadora()
            modalInconsApenasTransp() //ESCOLHER TRANSPORTADORA
            escolherTransportadora()
            avancarParcelasEntrega() 
        })

        it('30-Pedido de venda: produto 1860 0 0 (com Garantia que não separa e Mão de Obra não destaca e separa em outro processo) e produto 1870 0 0 (sem serviço)', () => {

            garantiaNaoSepara() //Marcar garantia "T.A. Garantia Não Separa"
            cy.wait(300)
            maoObraNaoDestacaSeparaProcessoDiferente() //Marcar Mão de Obra "T.A. MO Não Destaca e Separa Processo Diferente" 
            okServicosVinculados() //SERVIÇOS
            cy.wait(800)
            produtoNormalSegundoNCFe() //SEGUNDO PRODUTO
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
            modalInconsApenasTransp() //ESCOLHER TRANSPORTADORA
            escolherTransportadora()
            avancarParcelasEntrega() 
        })

        it('31-Pedido de venda: produto 1860 0 0 (com Garantia que separa em processo diferente e Mão de Obra que destaca e não separa)', () => {

            garantiaSeparaTituloProcessoDiferente() //Marcar garantia "T.A. MO Não Destaca e Separa Processo Diferente"
            cy.wait(300)
            maoObraDestacaNãoSepara() //Marcar Mão de Obra "T.A. MO Destaca e Não Separa"
            okServicosVinculados()
            cy.wait(400)
            avancarParaTransportadora()
            modalInconsApenasTransp() //ESCOLHER TRANSPORTADORA
            escolherTransportadora()
            avancarParcelasEntrega()
        })

        it('32-Pedido de venda: produto 1860 0 0 (com Garantia que separa em processo diferente e Mão de Obra que destaca e não separa) e produto 1870 0 0 (sem serviço)', () => {

            garantiaSeparaTituloProcessoDiferente() //Marcar garantia "T.A. MO Não Destaca e Separa Processo Diferente"
            cy.wait(300)
            maoObraDestacaNãoSepara() //Marcar Mão de Obra "T.A. MO Destaca e Não Separa"
            okServicosVinculados() //SERVIÇOS
            cy.wait(800)
            produtoNormalSegundoNCFe() //PRODUTO
            saldodisponivel()
            escolherProdutoPesquisa()
            cy.wait(800)
            escolherVoltagemProduto()
            clicarAdicionarProduto()
            cy.wait(1000)
            okServicosVinculados()
            cy.wait(400)
            avancarParaTransportadora()
            modalInconsApenasTransp() //ESCOLHER TRANSPORTADORA
            escolherTransportadora()
            avancarParcelasEntrega()
        })

        it('33-Pedido de venda: produto 1860 0 0 (com Garantia que separa em processo diferente e Mão de Obra não destaca e separa no mesmo processo)', () => {

            garantiaSeparaTituloProcessoDiferente() //Marcar garantia "T.A. MO Não Destaca e Separa Processo Diferente"
            cy.wait(300)
            maoObraNaoDestacaSeparaMesmoProcesso() //Marcar Mão de Obra "T.A. MO Não Destaca e Separa Mesmo Processo"
            okServicosVinculados()
            cy.wait(400)
            avancarParaTransportadora()
            modalInconsApenasTransp() //ESCOLHER TRANSPORTADORA
            escolherTransportadora()
            avancarParcelasEntrega()
        })

        it('34-Pedido de venda: produto 1860 0 0 (com Garantia que separa em processo diferente e Mão de Obra não destaca e separa no mesmo processo) e produto 1870 0 0 (sem serviço)', () => {

            garantiaSeparaTituloProcessoDiferente() //Marcar garantia "T.A. MO Não Destaca e Separa Processo Diferente"
            cy.wait(300)
            maoObraNaoDestacaSeparaMesmoProcesso() //Marcar Mão de Obra "T.A. MO Não Destaca e Separa Mesmo Processo"
            okServicosVinculados() //SERVIÇOS
            cy.wait(800)
            produtoNormalSegundoNCFe() //PRODUTO
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
            modalInconsApenasTransp() //ESCOLHER TRANSPORTADORA
            escolherTransportadora()
            avancarParcelasEntrega()
        })

        it('35-Pedido de venda: produto 1860 0 0 (com Garantia que separa em processo diferente e Mão de Obra não destaca e separa em outro processo)', () => {

            garantiaSeparaTituloProcessoDiferente //Marcar garantia "T.A. MO Não Destaca e Separa Processo Diferente"
            cy.wait(300)
            maoObraNaoDestacaSeparaProcessoDiferente()
            okServicosVinculados()
            cy.wait(400)
            avancarParaTransportadora()
            modalInconsApenasTransp() //ESCOLHER TRANSPORTADORA
            escolherTransportadora()
            avancarParcelasEntrega()
        })  

        it('36-Pedido de venda: produto 1860 0 0 (com Garantia que separa em processo diferente e Mão de Obra não destaca e separa em outro processo) e produto 1870 0 0 (sem serviço)', () => {

            garantiaSeparaTituloProcessoDiferente//Marcar garantia "T.A. MO Não Destaca e Separa Processo Diferente"
            cy.wait(300)
            maoObraNaoDestacaSeparaProcessoDiferente()
            okServicosVinculados() //SERVIÇOS
            cy.wait(800)
            produtoNormalSegundoNCFe() //PRODUTO
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
            modalInconsApenasTransp() //ESCOLHER TRANSPORTADORA
            escolherTransportadora()
            avancarParcelasEntrega()
        })
    })

    afterEach(() => {
        botaoGerarParcelas() //GERAR PARCELAS
        carregandoFormaPagamento() 
        escolherFormaPagamentoPrincipal()
        cy.wait(3000)
        escolherDuasParcelaPagamento()
        cy.wait(400)
        botaoFinalizarPedido() //RESUMO
        pedidoGerado()
      });
})