import { validarComSaldo, clienteComRota, escolherProdutoPesquisa, clicarVoltagemProduto, clicarAdicionarProduto } from '../../../support/para_pedidos/gerais_pedidos.js';
import { prdPrimeiro, prdSegundo } from '../../../support/produtos_pedidos/prd_normal.js';
import { garantiaNaoSepara, garantiaSeparaMesmoProcesso, garantiaSeparaTituloProcessoDiferente, maoObraDestacaNãoSepara, 
         maoObraNaoDestacaSeparaMesmoProcesso, maoObraNaoDestacaSeparaProcessoDiferente, validarModalServVinculado, clicarOKServVinculado } from '../../../support/para_pedidos/servicos/apenas_servicos.js';
import { validarServicosVinculados, validaAddGarantSepMesmoProc, validaAddGarantNaoSep,validaAddGarantSepTituloProcDif, 
         validaAddMODestacaNãoSepara, validaAddMONaoDestacaSepMesmoProc, validaAddMONaoDestacaSepProcDif } from '../../../support/para_pedidos/servicos/valida_servicos_adicionados.js';         
import { clicarGerarParcelas, carregandoFormaPagamento, escolherDuasParcelaPagamento } from '../../../support/para_pedidos/parcelas_pedido.js';
import { escolherFormaPagamentoPrincipal } from '../../../support/para_pedidos/processos/processo_recebimento.js';
import { clicarFinalizarPedido, validarPedidoGerado } from '../../../support/para_pedidos/apenas_finalizar_pedido.js';
import { processoVendaNFe } from '../../../support/para_pedidos/processos/processo_venda.js';
import { avancarParaParcelas, avancarFinal, avancarParaTransportadora, avancarParcelasEntrega } from '../../../support/para_pedidos/apenas_botoes_avancar.js';
import { tirarEntrega, tirarEntregaSegundo } from '../../../support/para_pedidos/apenas_entrega.js';
import { infoFinalClienteSemEntrega, infoFinalClienteComEntrega, infoFinalEntrega, validarObsNotaFiscalVazio, validarObsInternaVazio } from '../../../support/para_pedidos/validar_tela/tela_final.js';

describe('Gerar pedidos com Garantia e Mão de Obra', () => {

    beforeEach(() => {
        cy.visit('/')
        cy.clearAllSessionStorage()
        cy.login()
        cy.urlAposLogin()
        cy.tituloPagina() 
        processoVendaNFe()
        clienteComRota()
        prdPrimeiro() //PRODUTO
        validarComSaldo()
        escolherProdutoPesquisa()
        clicarVoltagemProduto()
        clicarAdicionarProduto()
        validarModalServVinculado()
    })

    context('Sem entrega/processo 9860 - caminho feliz', () => {
    
        it('1. Ped venda: produto 1860 0 0 (com Garantia que separa título no mesmo processo e Mão de Obra que destaca e não separa)', () => {
            
            garantiaSeparaMesmoProcesso() //Marcar garantia "T.A. Garantia Separa Mesmo Processo"
            maoObraDestacaNãoSepara() //Marcar Mão de Obra "T.A. MO Destaca e Não Separa"
            clicarOKServVinculado() //SERVIÇOS
            validarServicosVinculados() ; validaAddGarantSepMesmoProc() ; validaAddMODestacaNãoSepara()
            tirarEntrega() //ENTREGA
            avancarParaParcelas() 
            clicarGerarParcelas() //GERAR PARCELAS
            carregandoFormaPagamento() 
            escolherFormaPagamentoPrincipal()
            escolherDuasParcelaPagamento()
            avancarFinal()
            clicarFinalizarPedido() //RESUMO
            validarPedidoGerado()
        })

        it('2. Ped venda: produto 1860 0 0 (com Garantia que separa título no mesmo processo e Mão de Obra que destaca e não separa) e produto 1870 0 0 (sem serviço)', () => {

            garantiaSeparaMesmoProcesso() //Marcar garantia "T.A. Garantia Separa Mesmo Processo"
            maoObraDestacaNãoSepara() //Marcar Mão de Obra "T.A. MO Destaca e Não Separa"
            clicarOKServVinculado() //SERVIÇOS
            validarServicosVinculados() ; validaAddGarantSepMesmoProc() ; validaAddMODestacaNãoSepara()
            tirarEntrega() //ENTREGA
            prdSegundo() //SEGUNDO PRODUTO
            validarComSaldo()
            escolherProdutoPesquisa()
            clicarVoltagemProduto()
            clicarAdicionarProduto()
            validarModalServVinculado() //SERVIÇOS - SEGUNDO PRODUTO
            clicarOKServVinculado()
            tirarEntregaSegundo() //ENTREGA - SEGUNDO PRODUTO
            avancarParaParcelas()
            clicarGerarParcelas() //GERAR PARCELAS
            carregandoFormaPagamento() 
            escolherFormaPagamentoPrincipal()
            escolherDuasParcelaPagamento()
            avancarFinal()
            clicarFinalizarPedido() //RESUMO
            validarPedidoGerado()
        })

        it('3. Ped venda: produto 1860 0 0 (com Garantia que separa título no mesmo processo e Mão de Obra não destaca e separa no mesmo processo)', () => {

            garantiaSeparaMesmoProcesso() //Marcar garantia "T.A. Garantia Separa Mesmo Processo"
            maoObraNaoDestacaSeparaMesmoProcesso() //Marcar Mão de Obra "T.A. MO Não Destaca e Separa Mesmo Processo"
            clicarOKServVinculado() //SERVIÇOS
            validarServicosVinculados() ; validaAddGarantSepMesmoProc() ; validaAddMONaoDestacaSepMesmoProc()
            tirarEntrega() //ENTREGA
            avancarParaParcelas()
            clicarGerarParcelas() //GERAR PARCELAS
            carregandoFormaPagamento() 
            escolherFormaPagamentoPrincipal()
            escolherDuasParcelaPagamento()
            avancarFinal()
            clicarFinalizarPedido() //RESUMO
            validarPedidoGerado()
        })

        it('4. Ped venda: produto 1860 0 0 (com Garantia que separa título no mesmo processo e Mão de Obra não destaca e separa no mesmo processo) e produto 1870 0 0 (sem serviço)', () => {

            garantiaSeparaMesmoProcesso() //Marcar garantia "T.A. Garantia Separa Mesmo Processo"
            maoObraNaoDestacaSeparaMesmoProcesso() //Marcar Mão de Obra "T.A. MO Não Destaca e Separa Mesmo Processo"
            clicarOKServVinculado() //SERVIÇOS
            validarServicosVinculados() ; validaAddGarantSepMesmoProc() ; validaAddMONaoDestacaSepMesmoProc()
            tirarEntrega() //ENTREGA
            prdSegundo() //SEGUNDO PRODUTO
            validarComSaldo()
            escolherProdutoPesquisa()
            clicarVoltagemProduto()
            clicarAdicionarProduto()
            clicarOKServVinculado() //SERVIÇOS - SEGUNDO PRODUTO
            tirarEntregaSegundo() //ENTREGA - SEGUNDO PRODUTO
            avancarParaParcelas() 
            clicarGerarParcelas() //GERAR PARCELAS
            carregandoFormaPagamento() 
            escolherFormaPagamentoPrincipal()
            escolherDuasParcelaPagamento()
            avancarFinal()
            clicarFinalizarPedido() //RESUMO
            validarPedidoGerado()
        })

        it('5. Ped venda: produto 1860 0 0 (com Garantia que separa título no mesmo processo e Mão de Obra não destaca e separa em outro processo)', () => {

            garantiaSeparaMesmoProcesso() //Marcar garantia "T.A. Garantia Separa Mesmo Processo"
            maoObraNaoDestacaSeparaProcessoDiferente() //Marcar Mão de Obra "T.A. MO Não Destaca e Separa Processo Diferente" 
            clicarOKServVinculado() //SERVIÇOS
            validarServicosVinculados() ; validaAddGarantSepMesmoProc() ; validaAddMONaoDestacaSepProcDif()
            tirarEntrega() //ENTREGA
            avancarParaParcelas() 
            clicarGerarParcelas() //GERAR PARCELAS
            carregandoFormaPagamento() 
            escolherFormaPagamentoPrincipal()
            escolherDuasParcelaPagamento()
            avancarFinal()
            clicarFinalizarPedido() //RESUMO
            validarPedidoGerado()
        })

        it('6. Ped venda: produto 1860 0 0 (com Garantia que separa título no mesmo processo e Mão de Obra não destaca e separa em outro processo) e produto 1870 0 0 (sem serviço)', () => {

            garantiaSeparaMesmoProcesso() //Marcar garantia "T.A. Garantia Separa Mesmo Processo"
            maoObraNaoDestacaSeparaProcessoDiferente() //Marcar Mão de Obra "T.A. MO Não Destaca e Separa Processo Diferente" 
            clicarOKServVinculado() //SERVIÇOS
            validarServicosVinculados() ; validaAddGarantSepMesmoProc() ; validaAddMONaoDestacaSepProcDif()
            tirarEntrega() //ENTREGA
            prdSegundo() //SEGUNDO PRODUTO
            validarComSaldo()
            escolherProdutoPesquisa()
            clicarVoltagemProduto()
            clicarAdicionarProduto()
            clicarOKServVinculado() //SERVIÇOS
            tirarEntregaSegundo() //ENTREGA - SEGUNDO PRODUTO
            avancarParaParcelas() 
            clicarGerarParcelas() //GERAR PARCELAS
            carregandoFormaPagamento() 
            escolherFormaPagamentoPrincipal()
            escolherDuasParcelaPagamento()
            avancarFinal()
            clicarFinalizarPedido() //RESUMO
            validarPedidoGerado()
        })

        it('7. Ped venda: produto 1860 0 0 (com Garantia que não separa e Mão de Obra que destaca e não separa)', () => {

            garantiaNaoSepara() //Marcar garantia "T.A. Garantia Não Separa"
            maoObraDestacaNãoSepara()//Marcar Mão de Obra "T.A. MO Destaca e Não Separa"
            clicarOKServVinculado() //SERVIÇOS
            validarServicosVinculados() ; validaAddGarantNaoSep() ; validaAddMODestacaNãoSepara()
            tirarEntrega() //ENTREGA
            avancarParaParcelas() 
            clicarGerarParcelas() //GERAR PARCELAS
            carregandoFormaPagamento() 
            escolherFormaPagamentoPrincipal()
            escolherDuasParcelaPagamento()
            avancarFinal()
            clicarFinalizarPedido() //RESUMO
            validarPedidoGerado()
        })

        it('8. Ped venda: produto 1860 0 0 (com Garantia que não separa e Mão de Obra que destaca e não separa) e produto 1870 0 0 (sem serviço)', () => {

            garantiaNaoSepara() //Marcar garantia "T.A. Garantia Não Separa"
            maoObraDestacaNãoSepara()//Marcar Mão de Obra "T.A. MO Destaca e Não Separa"
            clicarOKServVinculado() //SERVIÇOS
            validarServicosVinculados() ; validaAddGarantNaoSep() ; validaAddMODestacaNãoSepara()
            tirarEntrega() //ENTREGA
            prdSegundo() //SEGUNDO PRODUTO
            validarComSaldo()
            escolherProdutoPesquisa()
            clicarVoltagemProduto()
            clicarAdicionarProduto()
            validarModalServVinculado() //SERVIÇOS
            clicarOKServVinculado()
            tirarEntregaSegundo() //ENTREGA
            avancarParaParcelas() 
            clicarGerarParcelas() //GERAR PARCELAS
            carregandoFormaPagamento() 
            escolherFormaPagamentoPrincipal()
            escolherDuasParcelaPagamento()
            avancarFinal()
            clicarFinalizarPedido() //RESUMO
            validarPedidoGerado()
        })

        it('9. Ped venda: produto 1860 0 0 (com Garantia que não separa e Mão de Obra não destaca e separa no mesmo processo)', () => {

            garantiaNaoSepara() //Marcar garantia "T.A. Garantia Não Separa"
            maoObraNaoDestacaSeparaMesmoProcesso() //Marcar Mão de Obra "T.A. MO Não Destaca e Separa Mesmo Processo"
            clicarOKServVinculado() //SERVIÇOS
            validarServicosVinculados() ; validaAddGarantNaoSep() ; validaAddMONaoDestacaSepMesmoProc()
            tirarEntrega() //ENTREGA
            avancarParaParcelas() 
            clicarGerarParcelas() //GERAR PARCELAS
            carregandoFormaPagamento() 
            escolherFormaPagamentoPrincipal()
            escolherDuasParcelaPagamento()
            avancarFinal()
            clicarFinalizarPedido() //RESUMO
            validarPedidoGerado()
        })

        it('10. Ped venda: produto 1860 0 0 (com Garantia que não separa e Mão de Obra não destaca e separa no mesmo processo) e produto 1870 0 0 (sem serviço)', () => {

            garantiaNaoSepara() //Marcar garantia "T.A. Garantia Não Separa"
            maoObraNaoDestacaSeparaMesmoProcesso() //Marcar Mão de Obra "T.A. MO Não Destaca e Separa Mesmo Processo"
            clicarOKServVinculado() //SERVIÇOS
            validarServicosVinculados() ; validaAddGarantNaoSep() ; validaAddMONaoDestacaSepMesmoProc()
            tirarEntrega() //ENTREGA
            prdSegundo() //SEGUNDO PRODUTO
            validarComSaldo()
            escolherProdutoPesquisa()
            clicarVoltagemProduto()
            clicarAdicionarProduto()
            validarModalServVinculado() //SERVIÇOS - SEGUNDO PRODUTO
            clicarOKServVinculado()
            tirarEntregaSegundo() //ENTREGA - SEGUNDO PRODUTO
            avancarParaParcelas() 
            clicarGerarParcelas() //GERAR PARCELAS
            carregandoFormaPagamento() 
            escolherFormaPagamentoPrincipal()
            escolherDuasParcelaPagamento()
            avancarFinal()
            clicarFinalizarPedido() //RESUMO
            validarPedidoGerado()
        })

        it('11. Ped venda: produto 1860 0 0 (com Garantia que não separa e Mão de Obra não destaca e separa em outro processo)', () => {

            garantiaNaoSepara() //Marcar garantia "T.A. Garantia Não Separa"
            maoObraNaoDestacaSeparaProcessoDiferente() //Marcar Mão de Obra "T.A. MO Não Destaca e Separa Processo Diferente" 
            clicarOKServVinculado() //SERVIÇOS
            validarServicosVinculados() ; validaAddGarantNaoSep() ; validaAddMONaoDestacaSepProcDif()
            tirarEntrega() //ENTREGA
            avancarParaParcelas() 
            clicarGerarParcelas() //GERAR PARCELAS
            carregandoFormaPagamento() 
            escolherFormaPagamentoPrincipal()
            escolherDuasParcelaPagamento()
            avancarFinal()
            clicarFinalizarPedido() //RESUMO
            validarPedidoGerado()
        })

        it('12. Ped venda: produto 1860 0 0 (com Garantia que não separa e Mão de Obra não destaca e separa em outro processo) e produto 1870 0 0 (sem serviço)', () => {

            garantiaNaoSepara() //Marcar garantia "T.A. Garantia Não Separa"
            maoObraNaoDestacaSeparaProcessoDiferente() //Marcar Mão de Obra "T.A. MO Não Destaca e Separa Processo Diferente" 
            clicarOKServVinculado() //SERVIÇOS
            validarServicosVinculados() ; validaAddGarantNaoSep() ; validaAddMONaoDestacaSepProcDif()
            tirarEntrega() //ENTREGA
            prdSegundo() //SEGUNDO PRODUTO
            validarComSaldo()
            escolherProdutoPesquisa()
            clicarVoltagemProduto()
            clicarAdicionarProduto()
            validarModalServVinculado() //SERVIÇOS - SEGUNDO PRODUTO
            clicarOKServVinculado()
            tirarEntregaSegundo() //ENTREGA - SEGUNDO PRODUTO
            avancarParaParcelas() 
            clicarGerarParcelas() //GERAR PARCELAS
            carregandoFormaPagamento() 
            escolherFormaPagamentoPrincipal()
            escolherDuasParcelaPagamento()
            avancarFinal()
            clicarFinalizarPedido() //RESUMO
            validarPedidoGerado()
        })

        it('13. Ped venda: produto 1860 0 0 (com Garantia que separa em processo diferente e Mão de Obra que destaca e não separa)', () => {

            garantiaSeparaTituloProcessoDiferente() //Marcar garantia "T.A. MO Não Destaca e Separa Processo Diferente"
            maoObraDestacaNãoSepara() //Marcar Mão de Obra "T.A. MO Destaca e Não Separa"
            clicarOKServVinculado() //SERVIÇOS
            validarServicosVinculados() ; validaAddGarantSepTituloProcDif() ; validaAddMODestacaNãoSepara()
            tirarEntrega() //ENTREGA
            avancarParaParcelas() 
            clicarGerarParcelas() //GERAR PARCELAS
            carregandoFormaPagamento() 
            escolherFormaPagamentoPrincipal()
            escolherDuasParcelaPagamento()
            avancarFinal()
            clicarFinalizarPedido() //RESUMO
            validarPedidoGerado()
        })

        it('14. Ped venda: produto 1860 0 0 (com Garantia que separa em processo diferente e Mão de Obra que destaca e não separa) e produto 1870 0 0 (sem serviço)', () => {

            garantiaSeparaTituloProcessoDiferente() //Marcar garantia "T.A. MO Não Destaca e Separa Processo Diferente"
            maoObraDestacaNãoSepara() //Marcar Mão de Obra "T.A. MO Destaca e Não Separa"
            clicarOKServVinculado() //SERVIÇOS
            validarServicosVinculados() ; validaAddGarantSepTituloProcDif() ; validaAddMODestacaNãoSepara()
            tirarEntrega() //ENTREGA
            prdSegundo() //SEGUNDO PRODUTO
            validarComSaldo()
            escolherProdutoPesquisa()
            clicarVoltagemProduto()
            clicarAdicionarProduto()
            validarModalServVinculado() //SERVIÇOS - SEGUNDO PRODUTO
            clicarOKServVinculado()
            tirarEntregaSegundo() //ENTREGA - SEGUNDO PRODUTO
            avancarParaParcelas() 
            clicarGerarParcelas() //GERAR PARCELAS
            carregandoFormaPagamento() 
            escolherFormaPagamentoPrincipal()
            escolherDuasParcelaPagamento()
            avancarFinal()
            clicarFinalizarPedido() //RESUMO
            validarPedidoGerado()
        })

        it('15. Ped venda: produto 1860 0 0 (com Garantia que separa em processo diferente e Mão de Obra não destaca e separa no mesmo processo)', () => {

            garantiaSeparaTituloProcessoDiferente() //Marcar garantia "T.A. MO Não Destaca e Separa Processo Diferente"
            maoObraNaoDestacaSeparaMesmoProcesso() //Marcar Mão de Obra "T.A. MO Não Destaca e Separa Mesmo Processo"
            clicarOKServVinculado() //SERVIÇOS
            validarServicosVinculados() ; validaAddGarantSepTituloProcDif() ; validaAddMONaoDestacaSepMesmoProc()
            tirarEntrega() //ENTREGA
            avancarParaParcelas() 
            clicarGerarParcelas() //GERAR PARCELAS
            carregandoFormaPagamento() 
            escolherFormaPagamentoPrincipal()
            escolherDuasParcelaPagamento()
            avancarFinal()
            clicarFinalizarPedido() //RESUMO
            validarPedidoGerado()
        })

        it('16. Ped venda: produto 1860 0 0 (com Garantia que separa em processo diferente e Mão de Obra não destaca e separa no mesmo processo) e produto 1870 0 0 (sem serviço)', () => {

            garantiaSeparaTituloProcessoDiferente() //Marcar garantia "T.A. MO Não Destaca e Separa Processo Diferente"
            maoObraNaoDestacaSeparaMesmoProcesso() //Marcar Mão de Obra "T.A. MO Não Destaca e Separa Mesmo Processo"
            clicarOKServVinculado() //SERVIÇOS
            validarServicosVinculados() ; validaAddGarantSepTituloProcDif() ; validaAddMONaoDestacaSepMesmoProc()
            tirarEntrega() //ENTREGA
            prdSegundo() //SEGUNDO PRODUTO
            validarComSaldo()
            escolherProdutoPesquisa()
            clicarVoltagemProduto()
            clicarAdicionarProduto()
            validarModalServVinculado() //SERVIÇOS - SEGUNDO PRODUTO
            clicarOKServVinculado()
            tirarEntregaSegundo() //ENTREGA - SEGUNDO PRODUTO
            avancarParaParcelas()  
            clicarGerarParcelas() //GERAR PARCELAS
            carregandoFormaPagamento() 
            escolherFormaPagamentoPrincipal()
            escolherDuasParcelaPagamento()
            avancarFinal()
            clicarFinalizarPedido() //RESUMO
            validarPedidoGerado()
        })

        it('17. Ped venda: produto 1860 0 0 (com Garantia que separa em processo diferente e Mão de Obra não destaca e separa em outro processo)', () => {

            garantiaSeparaTituloProcessoDiferente//Marcar garantia "T.A. MO Não Destaca e Separa Processo Diferente"
            maoObraNaoDestacaSeparaProcessoDiferente()
            clicarOKServVinculado() //SERVIÇOS
            validarServicosVinculados() ; validaAddGarantSepTituloProcDif() ; validaAddMONaoDestacaSepProcDif()
            tirarEntrega() //ENTREGA
            avancarParaParcelas() 
            clicarGerarParcelas() //GERAR PARCELAS
            carregandoFormaPagamento() 
            escolherFormaPagamentoPrincipal()
            escolherDuasParcelaPagamento()
            avancarFinal()
            clicarFinalizarPedido() //RESUMO
            validarPedidoGerado()
        })

        it('18. Ped venda: produto 1860 0 0 (com Garantia que separa em processo diferente e Mão de Obra não destaca e separa em outro processo) e produto 1870 0 0 (sem serviço)', () => {

            garantiaSeparaTituloProcessoDiferente//Marcar garantia "T.A. MO Não Destaca e Separa Processo Diferente"
            maoObraNaoDestacaSeparaProcessoDiferente()
            clicarOKServVinculado() //SERVIÇOS
            validarServicosVinculados() ; validaAddGarantSepTituloProcDif() ; validaAddMONaoDestacaSepProcDif()
            tirarEntrega() //ENTREGA
            prdSegundo() //SEGUNDO PRODUTO
            validarComSaldo()
            escolherProdutoPesquisa()
            clicarVoltagemProduto()
            clicarAdicionarProduto()
            validarModalServVinculado() //SERVIÇOS - SEGUNDO PRODUTO
            clicarOKServVinculado()
            tirarEntregaSegundo() //ENTREGA - SEGUNDO PRODUTO
            avancarParaParcelas() 
            clicarGerarParcelas() //GERAR PARCELAS
            carregandoFormaPagamento() 
            escolherFormaPagamentoPrincipal()
            escolherDuasParcelaPagamento()
            avancarFinal()
            clicarFinalizarPedido() //RESUMO
            validarPedidoGerado()
        })
    })

    context('Com entrega/processo 9860 - caminho feliz', () => {

        it('19. Ped venda: produto 1860 0 0 (com Garantia que separa título no mesmo processo e Mão de Obra que destaca e não separa)', () => {

            garantiaSeparaMesmoProcesso() //Marcar garantia "T.A. Garantia Separa Mesmo Processo"
            maoObraDestacaNãoSepara() //Marcar Mão de Obra "T.A. MO Destaca e Não Separa"
            clicarOKServVinculado() //SERVIÇOS
            validarServicosVinculados() ; validaAddGarantSepMesmoProc() ; validaAddMODestacaNãoSepara()
            avancarParaTransportadora()
            avancarParcelasEntrega()  
            clicarGerarParcelas() //GERAR PARCELAS
            carregandoFormaPagamento() 
            escolherFormaPagamentoPrincipal()
            escolherDuasParcelaPagamento()
            avancarFinal()
            clicarFinalizarPedido() //RESUMO
            validarPedidoGerado()
        })

        it('20. Ped venda: produto 1860 0 0 (com Garantia que separa título no mesmo processo e Mão de Obra que destaca e não separa) e produto 1870 0 0 (sem serviço)', () => {

            garantiaSeparaMesmoProcesso() //Marcar garantia "T.A. Garantia Separa Mesmo Processo"
            maoObraDestacaNãoSepara() //Marcar Mão de Obra "T.A. MO Destaca e Não Separa"
            clicarOKServVinculado() //SERVIÇOS
            validarServicosVinculados() ; validaAddGarantSepMesmoProc() ; validaAddMODestacaNãoSepara()
            prdSegundo() //SEGUNDO PRODUTO
            validarComSaldo()
            escolherProdutoPesquisa()
            clicarVoltagemProduto()
            clicarAdicionarProduto()
            validarModalServVinculado() //SERVIÇOS - SEGUNDO PRODUTO
            clicarOKServVinculado() //SERVIÇOS
            avancarParaTransportadora()
            avancarParcelasEntrega()
            clicarGerarParcelas() //GERAR PARCELAS
            carregandoFormaPagamento() 
            escolherFormaPagamentoPrincipal()
            escolherDuasParcelaPagamento()
            avancarFinal()
            clicarFinalizarPedido() //RESUMO
            validarPedidoGerado()
        })

        it('21. Ped venda: produto 1860 0 0 (com Garantia que separa título no mesmo processo e Mão de Obra não destaca e separa no mesmo processo)', () => {

            garantiaSeparaMesmoProcesso() //Marcar garantia "T.A. Garantia Separa Mesmo Processo"
            maoObraNaoDestacaSeparaMesmoProcesso() //Marcar Mão de Obra "T.A. MO Não Destaca e Separa Mesmo Processo"
            clicarOKServVinculado() //SERVIÇOS
            validarServicosVinculados() ; validaAddGarantSepMesmoProc() ; validaAddMONaoDestacaSepMesmoProc()
            avancarParaTransportadora()
            avancarParcelasEntrega()
            clicarGerarParcelas() //GERAR PARCELAS
            carregandoFormaPagamento() 
            escolherFormaPagamentoPrincipal()
            escolherDuasParcelaPagamento()
            avancarFinal()
            clicarFinalizarPedido() //RESUMO
            validarPedidoGerado()
        })

        it('22. Ped venda: produto 1860 0 0 (com Garantia que separa título no mesmo processo e Mão de Obra não destaca e separa no mesmo processo) e produto 1870 0 0 (sem serviço)', () => {

            garantiaSeparaMesmoProcesso() //Marcar garantia "T.A. Garantia Separa Mesmo Processo"
            maoObraNaoDestacaSeparaMesmoProcesso() //Marcar Mão de Obra "T.A. MO Não Destaca e Separa Mesmo Processo"
            clicarOKServVinculado() //SERVIÇOS
            validarServicosVinculados() ; validaAddGarantSepMesmoProc() ; validaAddMONaoDestacaSepMesmoProc()
            prdSegundo() //SEGUNDO PRODUTO
            validarComSaldo()
            escolherProdutoPesquisa()
            clicarVoltagemProduto()
            clicarAdicionarProduto()
            validarModalServVinculado() //SERVIÇOS - SEGUNDO PRODUTO
            clicarOKServVinculado() //SERVIÇOS
            avancarParaTransportadora()
            avancarParcelasEntrega()
            clicarGerarParcelas() //GERAR PARCELAS
            carregandoFormaPagamento() 
            escolherFormaPagamentoPrincipal()
            escolherDuasParcelaPagamento()
            avancarFinal()
            clicarFinalizarPedido() //RESUMO
            validarPedidoGerado()
        })

        it('23. Ped venda: produto 1860 0 0 (com Garantia que separa título no mesmo processo e Mão de Obra não destaca e separa em outro processo)', () => {

            garantiaSeparaMesmoProcesso() //Marcar garantia "T.A. Garantia Separa Mesmo Processo"
            maoObraNaoDestacaSeparaProcessoDiferente() //Marcar Mão de Obra "T.A. MO Não Destaca e Separa Processo Diferente" 
            clicarOKServVinculado() //SERVIÇOS
            validarServicosVinculados() ; validaAddGarantSepMesmoProc() ; validaAddMONaoDestacaSepProcDif()
            avancarParaTransportadora()
            avancarParcelasEntrega()
            clicarGerarParcelas() //GERAR PARCELAS
            carregandoFormaPagamento() 
            escolherFormaPagamentoPrincipal()
            escolherDuasParcelaPagamento()
            avancarFinal()
            clicarFinalizarPedido() //RESUMO
            validarPedidoGerado()
        })

        it('24. Ped venda: produto 1860 0 0 (com Garantia que separa título no mesmo processo e Mão de Obra não destaca e separa em outro processo) e produto 1870 0 0 (sem serviço)', () => {

            garantiaSeparaMesmoProcesso() //Marcar garantia "T.A. Garantia Separa Mesmo Processo"
            maoObraNaoDestacaSeparaProcessoDiferente() //Marcar Mão de Obra "T.A. MO Não Destaca e Separa Processo Diferente" 
            clicarOKServVinculado() //SERVIÇOS
            validarServicosVinculados() ; validaAddGarantSepMesmoProc() ; validaAddMONaoDestacaSepProcDif()
            prdSegundo() //SEGUNDO PRODUTO
            validarComSaldo()
            escolherProdutoPesquisa()
            clicarVoltagemProduto()
            clicarAdicionarProduto()
            validarModalServVinculado() //SERVIÇOS - SEGUNDO PRODUTO
            clicarOKServVinculado() //SERVIÇOS
            avancarParaTransportadora()
            avancarParcelasEntrega()
            clicarGerarParcelas() //GERAR PARCELAS
            carregandoFormaPagamento() 
            escolherFormaPagamentoPrincipal()
            escolherDuasParcelaPagamento()
            avancarFinal()
            clicarFinalizarPedido() //RESUMO
            validarPedidoGerado()
        })

        it('25. Ped venda: produto 1860 0 0 (com Garantia que não separa e Mão de Obra que destaca e não separa)', () => {

            garantiaNaoSepara() //Marcar garantia "T.A. Garantia Não Separa"
            maoObraDestacaNãoSepara()//Marcar Mão de Obra "T.A. MO Destaca e Não Separa"
            clicarOKServVinculado() //SERVIÇOS
            validarServicosVinculados() ; validaAddGarantNaoSep() ; validaAddMODestacaNãoSepara()
            avancarParaTransportadora()
            avancarParcelasEntrega()
            clicarGerarParcelas() //GERAR PARCELAS
            carregandoFormaPagamento() 
            escolherFormaPagamentoPrincipal()
            escolherDuasParcelaPagamento()
            avancarFinal()
            clicarFinalizarPedido() //RESUMO
            validarPedidoGerado()
        })

        it('26. Ped venda: produto 1860 0 0 (com Garantia que não separa e Mão de Obra que destaca e não separa) e produto 1870 0 0 (sem serviço)', () => {

            garantiaNaoSepara() //Marcar garantia "T.A. Garantia Não Separa"
            maoObraDestacaNãoSepara()//Marcar Mão de Obra "T.A. MO Destaca e Não Separa"
            clicarOKServVinculado() //SERVIÇOS
            validarServicosVinculados() ; validaAddGarantNaoSep() ; validaAddMODestacaNãoSepara()
            prdSegundo() //SEGUNDO PRODUTO
            validarComSaldo()
            escolherProdutoPesquisa()
            clicarVoltagemProduto()
            clicarAdicionarProduto()
            validarModalServVinculado() //SERVIÇOS - SEGUNDO PRODUTO
            clicarOKServVinculado() //SERVIÇOS
            avancarParaTransportadora()
            avancarParcelasEntrega()
            clicarGerarParcelas() //GERAR PARCELAS
            carregandoFormaPagamento() 
            escolherFormaPagamentoPrincipal()
            escolherDuasParcelaPagamento()
            avancarFinal()
            clicarFinalizarPedido() //RESUMO
            validarPedidoGerado()
        })

        it('27. Ped venda: produto 1860 0 0 (com Garantia que não separa e Mão de Obra não destaca e separa no mesmo processo)', () => {

            garantiaNaoSepara() //Marcar garantia "T.A. Garantia Não Separa"
            maoObraNaoDestacaSeparaMesmoProcesso() //Marcar Mão de Obra "T.A. MO Não Destaca e Separa Mesmo Processo"
            clicarOKServVinculado() //SERVIÇOS
            validarServicosVinculados() ; validaAddGarantNaoSep() ; validaAddMONaoDestacaSepMesmoProc()
            avancarParaTransportadora()
            avancarParcelasEntrega()
            clicarGerarParcelas() //GERAR PARCELAS
            carregandoFormaPagamento() 
            escolherFormaPagamentoPrincipal()
            escolherDuasParcelaPagamento()
            avancarFinal()
            clicarFinalizarPedido() //RESUMO
            validarPedidoGerado()
        })

        it('28. Ped venda: produto 1860 0 0 (com Garantia que não separa e Mão de Obra não destaca e separa no mesmo processo) e produto 1870 0 0 (sem serviço)', () => {

            garantiaNaoSepara() //Marcar garantia "T.A. Garantia Não Separa"
            maoObraNaoDestacaSeparaMesmoProcesso() //Marcar Mão de Obra "T.A. MO Não Destaca e Separa Mesmo Processo"
            clicarOKServVinculado() //SERVIÇOS
            validarServicosVinculados() ; validaAddGarantNaoSep() ; validaAddMONaoDestacaSepMesmoProc()
            prdSegundo() //SEGUNDO PRODUTO
            validarComSaldo()
            escolherProdutoPesquisa()
            clicarVoltagemProduto()
            clicarAdicionarProduto()
            validarModalServVinculado() //SERVIÇOS - SEGUNDO PRODUTO
            clicarOKServVinculado() //SERVIÇOS
            avancarParaTransportadora()
            avancarParcelasEntrega()
            clicarGerarParcelas() //GERAR PARCELAS
            carregandoFormaPagamento() 
            escolherFormaPagamentoPrincipal()
            escolherDuasParcelaPagamento()
            avancarFinal()
            clicarFinalizarPedido() //RESUMO
            validarPedidoGerado()
        })

        it('29. Ped venda: produto 1860 0 0 (com Garantia que não separa e Mão de Obra não destaca e separa em outro processo)', () => {

            garantiaNaoSepara() //Marcar garantia "T.A. Garantia Não Separa"
            maoObraNaoDestacaSeparaProcessoDiferente() //Marcar Mão de Obra "T.A. MO Não Destaca e Separa Processo Diferente" 
            clicarOKServVinculado() //SERVIÇOS
            validarServicosVinculados() ; validaAddGarantNaoSep() ; validaAddMONaoDestacaSepProcDif()
            avancarParaTransportadora()
            avancarParcelasEntrega()
            clicarGerarParcelas() //GERAR PARCELAS
            carregandoFormaPagamento() 
            escolherFormaPagamentoPrincipal()
            escolherDuasParcelaPagamento()
            avancarFinal()
            clicarFinalizarPedido() //RESUMO
            validarPedidoGerado()
        })

        it('30. Ped venda: produto 1860 0 0 (com Garantia que não separa e Mão de Obra não destaca e separa em outro processo) e produto 1870 0 0 (sem serviço)', () => {

            garantiaNaoSepara() //Marcar garantia "T.A. Garantia Não Separa"
            maoObraNaoDestacaSeparaProcessoDiferente() //Marcar Mão de Obra "T.A. MO Não Destaca e Separa Processo Diferente" 
            clicarOKServVinculado() //SERVIÇOS
            validarServicosVinculados() ; validaAddGarantNaoSep() ; validaAddMONaoDestacaSepProcDif()
            prdSegundo() //SEGUNDO PRODUTO
            validarComSaldo()
            escolherProdutoPesquisa()
            clicarVoltagemProduto()
            clicarAdicionarProduto()
            validarModalServVinculado() //SERVIÇOS - SEGUNDO PRODUTO
            clicarOKServVinculado() //SERVIÇOS
            avancarParaTransportadora()
            avancarParcelasEntrega()
            clicarGerarParcelas() //GERAR PARCELAS
            carregandoFormaPagamento() 
            escolherFormaPagamentoPrincipal()
            escolherDuasParcelaPagamento()
            avancarFinal()
            clicarFinalizarPedido() //RESUMO
            validarPedidoGerado()
        })

        it('31. Ped venda: produto 1860 0 0 (com Garantia que separa em processo diferente e Mão de Obra que destaca e não separa)', () => {

            garantiaSeparaTituloProcessoDiferente() //Marcar garantia "T.A. MO Não Destaca e Separa Processo Diferente"
            maoObraDestacaNãoSepara() //Marcar Mão de Obra "T.A. MO Destaca e Não Separa"
            clicarOKServVinculado() //SERVIÇOS
            validarServicosVinculados() ; validaAddGarantSepTituloProcDif() ; validaAddMODestacaNãoSepara()
            avancarParaTransportadora()
            avancarParcelasEntrega()
            clicarGerarParcelas() //GERAR PARCELAS
            carregandoFormaPagamento() 
            escolherFormaPagamentoPrincipal()
            escolherDuasParcelaPagamento()
            avancarFinal()
            clicarFinalizarPedido() //RESUMO
            validarPedidoGerado()
        })

        it('32. Ped venda: produto 1860 0 0 (com Garantia que separa em processo diferente e Mão de Obra que destaca e não separa) e produto 1870 0 0 (sem serviço)', () => {

            garantiaSeparaTituloProcessoDiferente() //Marcar garantia "T.A. MO Não Destaca e Separa Processo Diferente"
            maoObraDestacaNãoSepara() //Marcar Mão de Obra "T.A. MO Destaca e Não Separa"
            clicarOKServVinculado() //SERVIÇOS
            validarServicosVinculados() ; validaAddGarantSepTituloProcDif() ; validaAddMODestacaNãoSepara()
            prdSegundo() //PRODUTO
            validarComSaldo()
            escolherProdutoPesquisa()
            clicarVoltagemProduto()
            clicarAdicionarProduto()
            clicarOKServVinculado() //SERVIÇOS
            avancarParaTransportadora()
            avancarParcelasEntrega()
            clicarGerarParcelas() //GERAR PARCELAS
            carregandoFormaPagamento() 
            escolherFormaPagamentoPrincipal()
            escolherDuasParcelaPagamento()
            avancarFinal()
            clicarFinalizarPedido() //RESUMO
            validarPedidoGerado()
        })

        it('33. Ped venda: produto 1860 0 0 (com Garantia que separa em processo diferente e Mão de Obra não destaca e separa no mesmo processo)', () => {

            garantiaSeparaTituloProcessoDiferente() //Marcar garantia "T.A. MO Não Destaca e Separa Processo Diferente"
            maoObraNaoDestacaSeparaMesmoProcesso() //Marcar Mão de Obra "T.A. MO Não Destaca e Separa Mesmo Processo"
            clicarOKServVinculado() //SERVIÇOS
            validarServicosVinculados() ; validaAddGarantSepTituloProcDif() ; validaAddMONaoDestacaSepMesmoProc()
            avancarParaTransportadora()
            avancarParcelasEntrega() 
            clicarGerarParcelas() //GERAR PARCELAS
            carregandoFormaPagamento() 
            escolherFormaPagamentoPrincipal()
            escolherDuasParcelaPagamento()
            avancarFinal()
            clicarFinalizarPedido() //RESUMO
            validarPedidoGerado()
        })

        it('34. Ped venda: produto 1860 0 0 (com Garantia que separa em processo diferente e Mão de Obra não destaca e separa no mesmo processo) e produto 1870 0 0 (sem serviço)', () => {

            garantiaSeparaTituloProcessoDiferente() //Marcar garantia "T.A. MO Não Destaca e Separa Processo Diferente"
            maoObraNaoDestacaSeparaMesmoProcesso() //Marcar Mão de Obra "T.A. MO Não Destaca e Separa Mesmo Processo"
            clicarOKServVinculado() //SERVIÇOS
            validarServicosVinculados() ; validaAddGarantSepTituloProcDif() ; validaAddMONaoDestacaSepMesmoProc()
            prdSegundo() //PRODUTO
            validarComSaldo()
            escolherProdutoPesquisa()
            clicarVoltagemProduto()
            clicarAdicionarProduto()
            validarModalServVinculado() //SERVIÇOS - SEGUNDO PRODUTO
            clicarOKServVinculado() //SERVIÇOS
            avancarParaTransportadora()
            avancarParcelasEntrega() 
            clicarGerarParcelas() //GERAR PARCELAS
            carregandoFormaPagamento() 
            escolherFormaPagamentoPrincipal()
            escolherDuasParcelaPagamento()
            avancarFinal()
            clicarFinalizarPedido() //RESUMO
            validarPedidoGerado()
        })

        it('35. Ped venda: produto 1860 0 0 (com Garantia que separa em processo diferente e Mão de Obra não destaca e separa em outro processo)', () => {

            garantiaSeparaTituloProcessoDiferente //Marcar garantia "T.A. MO Não Destaca e Separa Processo Diferente"
            maoObraNaoDestacaSeparaProcessoDiferente()
            clicarOKServVinculado() //SERVIÇOS
            validarServicosVinculados() ; validaAddGarantSepTituloProcDif() ; validaAddMONaoDestacaSepProcDif()
            avancarParaTransportadora()
            avancarParcelasEntrega()
            clicarGerarParcelas() //GERAR PARCELAS
            carregandoFormaPagamento() 
            escolherFormaPagamentoPrincipal()
            escolherDuasParcelaPagamento()
            avancarFinal()
            clicarFinalizarPedido() //RESUMO
            validarPedidoGerado()
        })  

        it('36. Ped venda: produto 1860 0 0 (com Garantia que separa em processo diferente e Mão de Obra não destaca e separa em outro processo) e produto 1870 0 0 (sem serviço)', () => {

            garantiaSeparaTituloProcessoDiferente//Marcar garantia "T.A. MO Não Destaca e Separa Processo Diferente"
            maoObraNaoDestacaSeparaProcessoDiferente()
            okServicoclicarOKServVinculadosVinculados() //SERVIÇOS
            validarServicosVinculados() ; validaAddGarantSepTituloProcDif() ; validaAddMONaoDestacaSepProcDif()
            prdSegundo() //PRODUTO
            validarComSaldo()
            escolherProdutoPesquisa()
            clicarVoltagemProduto()
            clicarAdicionarProduto()
            validarModalServVinculado() //SERVIÇOS - SEGUNDO PRODUTO
            clicarOKServVinculado() //SERVIÇOS
            avancarParaTransportadora()
            avancarParcelasEntrega()
            clicarGerarParcelas() //GERAR PARCELAS
            carregandoFormaPagamento() 
            escolherFormaPagamentoPrincipal()
            escolherDuasParcelaPagamento()
            avancarFinal()
            clicarFinalizarPedido() //RESUMO
            validarPedidoGerado()
        })
    })
})