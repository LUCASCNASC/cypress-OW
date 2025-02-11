import { validarComSaldo, clienteComRota, selecionarPrimeiraPromoProduto, clicarEditarParcelas, ticketPrestamistaAdicionado,
         escolherProdutoPesquisa, clicarVoltagemProduto, addProduto, compararSubtotalTotalFinanceiro, ticketPrestamistaPaginaFinal, 
         ticketPromocao } from '../../../../support/para_pedidos/gerais_pedidos.js';
import { prdPrimeiro, prdSegundo } from '../../../../support/produtos_pedidos/prd_normal.js';
import { prdPromoPrazoPrestPrimAbatVF, prdPromoPrazoPrestSegAbatVF, prdPromoPrazoPrestTercAbatVF } from '../../../../support/produtos_pedidos/prd_promo_prestamista.js';
import { garantiaNaoSepara, validarModalServVinculado, clicarOKServVinculado, okSeguroPrestamista } from '../../../../support/para_pedidos/servicos/apenas_servicos.js';
import { validarServicosVinculados, validaAddGarantSepMesmoProc, validaAddGarantNaoSep } from '../../../../support/para_pedidos/servicos/valida_servicos_adicionados.js';
import { clicarGerarParcelas, carregandoFormaPagamento, escolherQuatroParcelaPagamento } from '../../../../support/para_pedidos/parcelas_pedido.js';
import { escolherRecebPresentePrestAbatValFixo, escolherRecebFutComJurosPrestAbatValFixo } from '../../../../support/para_pedidos/processos/processo_recebimento.js';
import { clicarFinalizarPedido, validarPedidoGerado } from '../../../../support/para_pedidos/apenas_finalizar_pedido.js';
import { processoVendaNFe } from '../../../../support/para_pedidos/processos/processo_venda.js';
import { escolherRecebPromoPrazoFutComJurosPrestAbatVF } from '../../../../support/para_pedidos/processos/processo_recebimento_promo.js';
import { avancarFinal, avancarParaTransportadora, avancarParcelasEntrega } from '../../../../support/para_pedidos/apenas_botoes_avancar.js';
import { infoFinalClienteSemEntrega, infoFinalClienteComEntrega, infoFinalEntrega, validarObsNotaFiscalVazio, validarObsInternaVazio } from '../../../../support/para_pedidos/validar_tela/tela_final.js';

describe('Gerar pedidos com serviço Prestamista Abatimento Valor Fixo (161)', () => {

    beforeEach(() => {
        cy.visit('/')
        cy.clearAllSessionStorage()
        cy.login()
        cy.urlAposLogin()
        cy.tituloPagina() 
        processoVendaNFe()
        clienteComRota()
    })   

    context('Com entrega / Produtos sem promoção - Prestamista com abatimento Valor Fixo', () => {

        it('1. Ped venda: produto 1860 0 0, inclusão 3880, prestamista 161 (55,90), 4 parcelas no recebimento Futuro com juros.', () => {
    
            prdPrimeiro()
            validarComSaldo()
            escolherProdutoPesquisa()
            clicarVoltagemProduto() //PRODUTO
            addProduto()
            validarModalServVinculado() //SERVICOS
            clicarOKServVinculado()
            avancarParaTransportadora()
            avancarParcelasEntrega()
            clicarGerarParcelas() //GERAR PARCELAS
            carregandoFormaPagamento()
            escolherRecebFutComJurosPrestAbatValFixo()
            escolherQuatroParcelaPagamento()
            okSeguroPrestamista()
            ticketPrestamistaAdicionado() //Validando adição do prestamista
            avancarFinal()
            ticketPrestamistaPaginaFinal()
            clicarFinalizarPedido() //RESUMO
            validarPedidoGerado()
        })

        it('2. Ped venda: produto 1860 0 0 e 1870 0 0, inclusão 3880, prestamista 161 (55,90), 4 parcelas no recebimento Futuro com juros.', () => {
    
            prdPrimeiro()
            validarComSaldo()
            escolherProdutoPesquisa()
            clicarVoltagemProduto() //PRODUTO
            addProduto()
            validarModalServVinculado()
            garantiaNaoSepara()
            clicarOKServVinculado() //SERVIÇOS
            prdSegundo()
            validarComSaldo()
            escolherProdutoPesquisa()
            clicarVoltagemProduto() //PRODUTO
            addProduto()
            validarModalServVinculado() //SERVICOS
            clicarOKServVinculado()
            avancarParaTransportadora()
            avancarParcelasEntrega()
            clicarGerarParcelas() //GERAR PARCELAS
            carregandoFormaPagamento()
            escolherRecebFutComJurosPrestAbatValFixo()
            escolherQuatroParcelaPagamento()
            okSeguroPrestamista()
            ticketPrestamistaAdicionado()
            avancarFinal()
            ticketPrestamistaPaginaFinal()
            clicarFinalizarPedido() //RESUMO
            validarPedidoGerado()
        })
    })

    context('Com entrega / Produtos com promoção - Prestamista com abatimento Valor Fixo', () => {

        it('3. Ped venda: produto 1922 0 0 (promo a prazo 171), inclusão 3880 (outro recebimento 3860), prestamista 161, 4 parcelas no recebimento Futuro com juros', () => {
    
            prdPromoPrazoPrestPrimAbatVF()
            validarComSaldo()
            escolherProdutoPesquisa() ; ticketPromocao()
            clicarVoltagemProduto() //PRODUTO
            selecionarPrimeiraPromoProduto()
            escolherRecebPromoPrazoFutComJurosPrestAbatVF()
            addProduto()
            validarModalServVinculado() //SERVICOS
            clicarOKServVinculado()
            avancarParaTransportadora()
            avancarParcelasEntrega()
            cy.intercept('GET', '/images/icons/chain.svg').as('api_icons')
            cy.wait('@api_icons', { timeout: 40000 })
            clicarEditarParcelas()
            escolherQuatroParcelaPagamento()
            okSeguroPrestamista()
            ticketPrestamistaAdicionado() //Validando adição do prestamista
            avancarFinal()
            ticketPrestamistaPaginaFinal()
            clicarFinalizarPedido() //RESUMO
            validarPedidoGerado()
        })

        it('4. Ped venda: produto 1923 0 0 + garantia Não separa (promo a prazo 172 - isentar juros serviços), inclusão 3880 (outro recebimento 3860), prestamista 161, 4 parcelas no recebimento Futuro com juros', () => {

            prdPromoPrazoPrestSegAbatVF()
            validarComSaldo()
            escolherProdutoPesquisa() ; ticketPromocao()
            clicarVoltagemProduto() //PRODUTO
            selecionarPrimeiraPromoProduto()
            escolherRecebPromoPrazoFutComJurosPrestAbatVF()
            addProduto()
            validarModalServVinculado()
            garantiaNaoSepara()
            clicarOKServVinculado() //SERVIÇOS
            validarServicosVinculados() ; validaAddGarantNaoSep()
            avancarParaTransportadora()
            avancarParcelasEntrega()
            cy.intercept('GET', '/images/icons/chain.svg').as('api_icons')
            cy.wait('@api_icons', { timeout: 40000 })
            clicarEditarParcelas()
            escolherQuatroParcelaPagamento()
            okSeguroPrestamista()
            ticketPrestamistaAdicionado() //Validando adição do prestamista
            avancarFinal()
            ticketPrestamistaPaginaFinal()
            clicarFinalizarPedido() //RESUMO
            validarPedidoGerado()
        })

        it('5. Ped venda: produto 1924 0 0 + garantia Não separa (promo a prazo 173 - isentar juros garantia), inclusão 3880 (outro recebimento 3860), prestamista 161, 4 parcelas no recebimento Futuro com juros', () => {

            prdPromoPrazoPrestTercAbatVF()
            validarComSaldo()
            escolherProdutoPesquisa() ; ticketPromocao()
            clicarVoltagemProduto() //PRODUTO
            selecionarPrimeiraPromoProduto()
            escolherRecebPromoPrazoFutComJurosPrestAbatVF()
            addProduto()
            validarModalServVinculado()
            garantiaNaoSepara()
            clicarOKServVinculado() //SERVIÇOS
            validarServicosVinculados() ; validaAddGarantNaoSep()
            avancarParaTransportadora()
            avancarParcelasEntrega()
            cy.intercept('GET', '/images/icons/chain.svg').as('api_icons')
            cy.wait('@api_icons', { timeout: 40000 })
            clicarEditarParcelas()
            escolherQuatroParcelaPagamento()
            okSeguroPrestamista()
            ticketPrestamistaAdicionado() //Validando adição do prestamista
            avancarFinal()
            ticketPrestamistaPaginaFinal()
            clicarFinalizarPedido() //RESUMO
            validarPedidoGerado()
        })
    })

    context('Com entrega / Produto sem promoção - Prestamista com abatimento Valor Fixo', () => {

        it('6. Ped venda: produto 1860 0 0, inclusão 3878, prestamista 161 (55,90), 4 parcelas no recebimento Presente com juros.', () => {
    
            prdPrimeiro()
            validarComSaldo()
            escolherProdutoPesquisa()
            clicarVoltagemProduto() //PRODUTO
            addProduto()
            validarModalServVinculado() //SERVICOS
            clicarOKServVinculado()
            avancarParaTransportadora()
            avancarParcelasEntrega()
            clicarGerarParcelas() //GERAR PARCELAS
            carregandoFormaPagamento()
            escolherRecebPresentePrestAbatValFixo()
            escolherQuatroParcelaPagamento()
            okSeguroPrestamista()
            ticketPrestamistaAdicionado() //Validando adição do prestamista
            avancarFinal()
            ticketPrestamistaPaginaFinal()
            clicarFinalizarPedido() //RESUMO
            validarPedidoGerado()
        })

    })
})