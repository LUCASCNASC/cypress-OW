import { validarComSaldo, clienteComRota, escolherProdutoPesquisa, clicarVoltagemProduto, addProduto } from '../../../support/para_pedidos/gerais_pedidos.js';
import { produtoNormalPrimeiro, produtoNormalSegundo } from '../../../support/produtos_pedidos/prd_normal.js';
import { maoObraDestacaNãoSepara, maoObraNaoDestacaSeparaMesmoProcesso, maoObraNaoDestacaSeparaProcessoDiferente, validarModalServVinculado, 
         clicarOKServVinculado } from '../../../support/para_pedidos/servicos/apenas_servicos.js';
import { validarServicosVinculados, validaAddMODestacaNãoSepara, validaAddMONaoDestacaSepMesmoProc, validaAddMONaoDestacaSepProcDif } from '../../../support/para_pedidos/servicos/valida_servicos_adicionados.js';
import { botaoGerarParcelas, carregandoFormaPagamento, escolherDuasParcelaPagamento } from '../../../support/para_pedidos/parcelas_pedido.js';
import { escolherFormaPagamentoPrincipal } from '../../../support/para_pedidos/processos/processo_recebimento.js';
import { clicarFinalizarPedido, validarPedidoGerado } from '../../../support/para_pedidos/apenas_finalizar_pedido.js';
import { processoVendaNFe } from '../../../support/para_pedidos/processos/processo_venda';
import { avancarParaParcelas, avancarFinal, avancarParaTransportadora, avancarParcelasEntrega } from '../../../support/para_pedidos/apenas_botoes_avancar.js';
import { tirarEntrega, tirarEntregaSegundo } from '../../../support/para_pedidos/apenas_entrega.js';
import { infoFinalClienteSemEntrega, infoFinalClienteComEntrega, infoFinalEntrega, validarObsNotaFiscalVazio, validarObsInternaVazio } from '../../../support/para_pedidos/validar_tela/tela_final.js';

describe('Gerar pedidos com Mão de obra', () => {

    beforeEach(() => {
        cy.visit('/')
        cy.clearAllSessionStorage()
        cy.login()
        cy.urlAposLogin()
        cy.tituloPagina()
        processoVendaNFe()
        clienteComRota()
        produtoNormalPrimeiro() //PRODUTO
        validarComSaldo()
        escolherProdutoPesquisa()
        clicarVoltagemProduto()
        addProduto()
        validarModalServVinculado()
    })
  
    context('Sem entrega/processo 9860 - caminho feliz', () => {

        it('1. Ped venda: produto 1860 0 0 (com Mão de Obra que Destaca e Não separa título', () => {
    
            maoObraDestacaNãoSepara() //Marcar Mão de Obra "T.A. MO Destaca e Não Separa"
            clicarOKServVinculado() //SERVIÇOS
            validarServicosVinculados() ; validaAddMODestacaNãoSepara()
            tirarEntrega() //ENTREGA
            avancarParaParcelas() 
            botaoGerarParcelas() //GERAR PARCELAS
            carregandoFormaPagamento() 
            escolherFormaPagamentoPrincipal()
            escolherDuasParcelaPagamento()
            avancarFinal()
            clicarFinalizarPedido() //RESUMO
            validarPedidoGerado()
        })

        it('2. Ped venda: produto 1860 0 0 (com Mão de Obra que Destaca e Não separa título) e produto 1870 0 0 (sem serviço)', () => {

            maoObraDestacaNãoSepara()  //Marcar Mão de Obra "T.A. MO Destaca e Não Separa"
            clicarOKServVinculado() //SERVIÇOS
            validarServicosVinculados() ; validaAddMODestacaNãoSepara()
            tirarEntrega() //ENTREGA
            produtoNormalSegundo() //PRODUTO - SEGUNDO PRODUTO
            validarComSaldo()
            escolherProdutoPesquisa()
            clicarVoltagemProduto()
            addProduto()
            validarModalServVinculado() //SERVIÇOS - SEGUNDO PRODUTO
            clicarOKServVinculado()
            tirarEntregaSegundo() //ENTREGA - SEGUNDO PRODUTO
            avancarParaParcelas()
            botaoGerarParcelas() //GERAR PARCELAS
            carregandoFormaPagamento() 
            escolherFormaPagamentoPrincipal()
            escolherDuasParcelaPagamento()
            avancarFinal()
            clicarFinalizarPedido() //RESUMO
            validarPedidoGerado()
        })
    
        it('3. Ped venda: produto 1860 0 0 (com Mão de Obra que Não destaca e Separa título no Mesmo processo)', () => {
    
            maoObraNaoDestacaSeparaMesmoProcesso() //Marcar Mão de Obra "T.A. MO Não Destaca e Separa Mesmo Processo"
            clicarOKServVinculado() //SERVIÇOS
            validarServicosVinculados() ; validaAddMONaoDestacaSepMesmoProc()
            tirarEntrega() //ENTREGA
            avancarParaParcelas()  
            botaoGerarParcelas() //GERAR PARCELAS
            carregandoFormaPagamento() 
            escolherFormaPagamentoPrincipal()
            escolherDuasParcelaPagamento()
            avancarFinal()
            clicarFinalizarPedido() //RESUMO
            validarPedidoGerado()
        })

        it('4. Ped venda: produto 1860 0 0 (com Mão de Obra que Não destaca e Separa título no Mesmo processo) e produto 1870 0 0 (sem serviço)', () => {
    
            maoObraNaoDestacaSeparaMesmoProcesso() //Marcar Mão de Obra "T.A. MO Não Destaca e Separa Mesmo Processo"
            clicarOKServVinculado() //SERVIÇOS
            validarServicosVinculados() ; validaAddMONaoDestacaSepMesmoProc()
            tirarEntrega() //ENTREGA
            produtoNormalSegundo() //PRODUTO NORMAL
            validarComSaldo()
            escolherProdutoPesquisa()
            clicarVoltagemProduto()
            addProduto()
            validarModalServVinculado() //SERVIÇOS - SEGUNDO PRODUTO
            clicarOKServVinculado()
            tirarEntregaSegundo() //ENTREGA- SEGUNDO PRODUTO
            avancarParaParcelas() 
            botaoGerarParcelas() //GERAR PARCELAS
            carregandoFormaPagamento() 
            escolherFormaPagamentoPrincipal()
            escolherDuasParcelaPagamento()
            avancarFinal()
            clicarFinalizarPedido() //RESUMO
            validarPedidoGerado()
        })
    
        it('5. Ped venda: produto 1860 0 0 (com Mão de Obra que Não destaca e Separa título em processo Diferente)', () => {

            maoObraNaoDestacaSeparaProcessoDiferente() //Marcar Mão de obra que não destaca e separa título em processo diferente
            clicarOKServVinculado() //SERVIÇOS
            validarServicosVinculados() ; validaAddMONaoDestacaSepProcDif()
            tirarEntrega() //ENTREGA
            avancarParaParcelas() 
            botaoGerarParcelas() //GERAR PARCELAS
            carregandoFormaPagamento() 
            escolherFormaPagamentoPrincipal()
            escolherDuasParcelaPagamento()
            avancarFinal()
            clicarFinalizarPedido() //RESUMO
            validarPedidoGerado()
        })

        it('6. Ped venda: produto 1860 0 0 (com Mão de Obra que Não destaca e Separa título em processo Diferente) e produto 1870 0 0 (sem serviço)', () => {

            maoObraNaoDestacaSeparaProcessoDiferente() //Marcar Mão de obra que não destaca e separa título em processo diferente
            clicarOKServVinculado() //SERVIÇOS
            validarServicosVinculados() ; validaAddMONaoDestacaSepProcDif()
            tirarEntrega() //ENTREGA
            produtoNormalSegundo() //SEGUNDO PRODUTO
            validarComSaldo()
            escolherProdutoPesquisa()
            clicarVoltagemProduto()
            addProduto()
            validarModalServVinculado() //SERVIÇOS - SEGUNDO PRODUTO
            clicarOKServVinculado()
            tirarEntregaSegundo() //ENTREGA - SEGUNDO PRODUTO
            avancarParaParcelas() 
            botaoGerarParcelas() //GERAR PARCELAS
            carregandoFormaPagamento() 
            escolherFormaPagamentoPrincipal()
            escolherDuasParcelaPagamento()
            avancarFinal()
            clicarFinalizarPedido() //RESUMO
            validarPedidoGerado()
        })
    })

    context('Com entrega/processo 9860 - caminho feliz', () => {

        it('7. Ped venda: produto 1860 0 0 (com Mão de Obra que Destaca e Não separa título)', () => {
    
            maoObraDestacaNãoSepara()  //Marcar Mão de Obra "T.A. MO Destaca e Não Separa"
            clicarOKServVinculado() //SERVIÇOS
            validarServicosVinculados() ; validaAddMODestacaNãoSepara()
            avancarParaTransportadora()
            avancarParcelasEntrega()
            botaoGerarParcelas() //GERAR PARCELAS
            carregandoFormaPagamento() 
            escolherFormaPagamentoPrincipal()
            escolherDuasParcelaPagamento()
            avancarFinal()
            clicarFinalizarPedido() //RESUMO
            validarPedidoGerado()
        })
        
        it('8. Ped venda: produto 1860 0 0 (com Mão de Obra que Destaca e Não separa título) e produto 1870 0 0 (sem serviço)', () => {
    
            maoObraDestacaNãoSepara()  //Marcar Mão de Obra "T.A. MO Destaca e Não Separa"
            clicarOKServVinculado() //SERVIÇOS
            validarServicosVinculados() ; validaAddMODestacaNãoSepara()
            produtoNormalSegundo() //SEGUNDO PRODUTO
            validarComSaldo()
            escolherProdutoPesquisa()
            clicarVoltagemProduto()
            addProduto()
            validarModalServVinculado() //SERVIÇOS - SEGUNDO PRODUTO
            clicarOKServVinculado() //SERVIÇOS
            avancarParaTransportadora()
            avancarParcelasEntrega()
            botaoGerarParcelas() //GERAR PARCELAS
            carregandoFormaPagamento() 
            escolherFormaPagamentoPrincipal()
            escolherDuasParcelaPagamento()
            avancarFinal()
            clicarFinalizarPedido() //RESUMO
            validarPedidoGerado()
        })

        it('9. Ped venda: produto 1860 0 0 (com Mão de Obra que Não destaca e Separa título no Mesmo processo)', () => {
    
            maoObraNaoDestacaSeparaMesmoProcesso() //Marcar Mão de Obra "T.A. MO Não Destaca e Separa Mesmo Processo"
            clicarOKServVinculado() //SERVIÇOS
            validarServicosVinculados() ; validaAddMONaoDestacaSepMesmoProc()
            avancarParaTransportadora()
            avancarParcelasEntrega()
            botaoGerarParcelas() //GERAR PARCELAS
            carregandoFormaPagamento() 
            escolherFormaPagamentoPrincipal()
            escolherDuasParcelaPagamento()
            avancarFinal()
            clicarFinalizarPedido() //RESUMO
            validarPedidoGerado()
        })

        it('10. Ped venda: produto 1860 0 0 (com Mão de Obra que Não destaca e Separa título no Mesmo processo) e produto 1870 0 0 (sem serviço)', () => {
    
            maoObraNaoDestacaSeparaMesmoProcesso() //Marcar Mão de Obra "T.A. MO Não Destaca e Separa Mesmo Processo"
            clicarOKServVinculado() //SERVIÇOS
            validarServicosVinculados() ; validaAddMONaoDestacaSepMesmoProc()
            produtoNormalSegundo() //SEGUNDO PRODUTO
            validarComSaldo()
            escolherProdutoPesquisa()
            clicarVoltagemProduto()
            addProduto()
            validarModalServVinculado() //SERVIÇOS - SEGUNDO PRODUTP
            clicarOKServVinculado() //SERVIÇOS
            avancarParaTransportadora()
            avancarParcelasEntrega()
            botaoGerarParcelas() //GERAR PARCELAS
            carregandoFormaPagamento() 
            escolherFormaPagamentoPrincipal()
            escolherDuasParcelaPagamento()
            avancarFinal()
            clicarFinalizarPedido() //RESUMO
            validarPedidoGerado()
        })

        it('11. Ped venda: produto 1860 0 0 (com Mão de Obra que Não destaca e Separa título em processo Diferente)', () => {
    
            maoObraNaoDestacaSeparaProcessoDiferente() //Marcar Mão de obra que não destaca e separa título em processo diferente
            clicarOKServVinculado() //SERVIÇOS
            validarServicosVinculados() ; validaAddMONaoDestacaSepProcDif()
            avancarParaTransportadora()
            avancarParcelasEntrega()
            botaoGerarParcelas() //GERAR PARCELAS
            carregandoFormaPagamento() 
            escolherFormaPagamentoPrincipal()
            escolherDuasParcelaPagamento()
            avancarFinal()
            clicarFinalizarPedido() //RESUMO
            validarPedidoGerado()
        })   

        it('12. Ped venda: produto 1860 0 0 (com Mão de Obra que Não destaca e Separa título em processo Diferente) e produto 1870 0 0 (sem serviço)', () => {
    
            maoObraNaoDestacaSeparaProcessoDiferente() //Marcar Mão de obra que não destaca e separa título em processo diferente
            clicarOKServVinculado() //SERVIÇOS
            validarServicosVinculados() ; validaAddMONaoDestacaSepProcDif()
            produtoNormalSegundo() //SEGUNDO PRODUTO
            validarComSaldo()
            escolherProdutoPesquisa()
            clicarVoltagemProduto()
            addProduto()
            validarModalServVinculado() //SERVIÇOS - SEGUNDO PRODUTO
            clicarOKServVinculado() //SERVIÇOS
            avancarParaTransportadora()
            avancarParcelasEntrega()
            botaoGerarParcelas() //GERAR PARCELAS
            carregandoFormaPagamento() 
            escolherFormaPagamentoPrincipal()
            escolherDuasParcelaPagamento()
            avancarFinal()
            clicarFinalizarPedido() //RESUMO
            validarPedidoGerado()
        })
    })
})