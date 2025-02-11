import { validarComSaldo, clienteComRota, selecionarPrimeiraPromoProduto, clicarEditarParcelas, ticketPrestamistaAdicionado,
         escolherProdutoPesquisa, clicarVoltagemProduto, clicarAdicionarProduto, ticketPrestamistaPaginaFinal, ticketPromocao } from '../../../../support/para_pedidos/gerais_pedidos.js';
import { prdPrimeiro, prdSegundo } from '../../../../support/produtos_pedidos/prd_normal.js';
import { prdPromoPrazoPrestPrimAbatVF, prdPromoPrazoPrestSegAbatVF, prdPromoPrazoPrestTercAbatVFOS } from '../../../../support/produtos_pedidos/prd_promo_prestamista.js';
import { garantiaNaoSepara,  validarModalServVinculado, clicarOKServVinculado, okSeguroPrestamista } from '../../../../support/para_pedidos/servicos/apenas_servicos.js';
import { validarServicosVinculados, validaAddGarantNaoSep } from '../../../../support/para_pedidos/servicos/valida_servicos_adicionados.js';
import { clicarGerarParcelas, carregandoFormaPagamento, escolherQuatroParcelaPagamento } from '../../../../support/para_pedidos/parcelas_pedido.js';
import { escolherRecebFutComJurosPrestAbatOrigemPrd  } from '../../../../support/para_pedidos/processos/processo_recebimento.js';
import { clicarFinalizarPedido, validarPedidoGerado } from '../../../../support/para_pedidos/apenas_finalizar_pedido.js';
import { processoVendaNFe } from '../../../../support/para_pedidos/processos/processo_venda.js';
import { escolherRecebPromoPrazoFutComJurosPrestAbatVFOS, escolherRecebPromoPartidaPresenComJurosPrestAbatVFOS } from '../../../../support/para_pedidos/processos/processo_recebimento_promo.js';
import { avancarFinal, avancarParaTransportadora, avancarParcelasEntrega } from '../../../../support/para_pedidos/apenas_botoes_avancar.js';
import { infoFinalClienteSemEntrega, infoFinalClienteComEntrega, infoFinalEntrega, validarObsNotaFiscalVazio, validarObsInternaVazio } from '../../../../support/para_pedidos/validar_tela/tela_final.js';

describe('Gerar pedidos com serviço Prestamista Abatimento Valor Fixo - Origem Serviço (162)', () => {

    beforeEach(() => {
        cy.visit('/')
        cy.clearAllSessionStorage()
        cy.login()
        cy.urlAposLogin()
        cy.tituloPagina() 
        processoVendaNFe()
        clienteComRota()
    })   

    context('Com entrega / Produtos sem promoção - Prestamista com abatimento Valor Fixo - Origem Serviço (162)', () => {

        it('1. Ped venda: produto 1860 0 0, inclusão 3881, prestamista 162 (99,30), 4 parcelas no recebimento Futuro com juros.', () => {
    
            prdPrimeiro()
            validarComSaldo()
            escolherProdutoPesquisa()
            clicarVoltagemProduto() //PRODUTO
            clicarAdicionarProduto()
            validarModalServVinculado()
            clicarOKServVinculado() //SERVIÇOS
            avancarParaTransportadora()
            avancarParcelasEntrega()
            clicarGerarParcelas() //GERAR PARCELAS
            carregandoFormaPagamento()
            escolherRecebFutComJurosPrestAbatOrigemPrd()
            escolherQuatroParcelaPagamento()
            okSeguroPrestamista()
            ticketPrestamistaAdicionado() //Validando adição do prestamista
            avancarFinal()
            ticketPrestamistaPaginaFinal()
            clicarFinalizarPedido() //RESUMO
            validarPedidoGerado()
        })

        it('2. Ped venda: produto 1860 0 0 e 1870 0 0, inclusão 3881 e 3860, prestamista 162 (99,30), 4 parcelas no recebimento Futuro com juros.', () => {
    
            prdPrimeiro()
            validarComSaldo()
            escolherProdutoPesquisa()
            clicarVoltagemProduto() //PRODUTO
            clicarAdicionarProduto()
            validarModalServVinculado()
            garantiaNaoSepara()
            clicarOKServVinculado() //SERVIÇOS
            prdSegundo()
            validarComSaldo()
            escolherProdutoPesquisa()
            clicarVoltagemProduto() //PRODUTO
            clicarAdicionarProduto()
            validarModalServVinculado()
            clicarOKServVinculado()
            avancarParaTransportadora()
            avancarParcelasEntrega()
            clicarGerarParcelas() //GERAR PARCELAS
            carregandoFormaPagamento()
            escolherRecebFutComJurosPrestAbatOrigemPrd()
            escolherQuatroParcelaPagamento()
            okSeguroPrestamista()
            ticketPrestamistaAdicionado()
            avancarFinal()
            ticketPrestamistaPaginaFinal()
            clicarFinalizarPedido() //RESUMO
            validarPedidoGerado()
        })
    })

    context('Com entrega / Produtos com promoção - Prestamista com abatimento Valor Fixo - Origem Produto (162)', () => {

        it('3. Ped venda: produto 1922 0 0 (promo a prazo 171), inclusão 3881, prestamista 162, 4 parcelas no recebimento Futuro com juros', () => {
    
            prdPromoPrazoPrestPrimAbatVF()
            validarComSaldo()
            escolherProdutoPesquisa() ; ticketPromocao()
            clicarVoltagemProduto() //PRODUTO
            selecionarPrimeiraPromoProduto()
            escolherRecebPromoPrazoFutComJurosPrestAbatVFOS()
            clicarAdicionarProduto()
            validarModalServVinculado()
            clicarOKServVinculado() //SERVIÇOS
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

        it('4. Ped venda: produto 1923 0 0 + garantia Não separa (promo a prazo 172 - isentar juros serviços), inclusão 3881, prestamista 162, 4 parcelas no recebimento Futuro com juros', () => {

            prdPromoPrazoPrestSegAbatVF()
            validarComSaldo()
            escolherProdutoPesquisa() ; ticketPromocao()
            clicarVoltagemProduto() //PRODUTO
            selecionarPrimeiraPromoProduto()
            prdPromoPrazoPrestTercAbatVFOS()
            clicarAdicionarProduto()
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

        it('5. Ped venda: produto 1924 0 0 + garantia Não separa (promo a prazo 173 - isentar juros garantia), inclusão 3882, prestamista 162, 4 parcelas no recebimento Futuro com juros', () => {

            prdPromoPrazoPrestTercAbatVFOS()
            validarComSaldo()
            escolherProdutoPesquisa() ; ticketPromocao()
            clicarVoltagemProduto() //PRODUTO
            selecionarPrimeiraPromoProduto()
            escolherRecebPromoPartidaPresenComJurosPrestAbatVFOS()
            clicarAdicionarProduto()
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
            ticketPrestamistaPaginaFinal() //Validando adição do prestamista
            avancarFinal()
            ticketPrestamistaPaginaFinal()
            clicarFinalizarPedido() //RESUMO
            validarPedidoGerado()
        })
    })
})