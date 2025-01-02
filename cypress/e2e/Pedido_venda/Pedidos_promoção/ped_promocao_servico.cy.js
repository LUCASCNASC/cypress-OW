import { saldodisponivel, escolherClientePedido, pedidoGerado, botaoFinalizarPedido, finalizandoPedido, clicarAdicionarProduto,
         tirarEntrega, processoVendaPrincipal, avancarParaParcelas, modalServicosVinculados, okServicosVinculados,
         escolherProdutoPesquisa, escolherVoltagemProduto, avancarFinal } from '../../../support/para_pedidos/gerais_pedidos'
import { prd1PrazoParcela, prd2PrazoParcela, prd3PrazoParcela, prd4PrazoParcela, messAdicionandoProdutosServicos, adicionarPrestamista, 
         tipoServicoIsentoValidar } from '../../../support/para_pedidos/para_pedidos_promocao';
import { garantiaSeparaMesmoProcesso } from '../../../support/para_pedidos/apenas_servicos'

describe('Gerar pedidos com promoção e serviços com isenção de juros', () => {

    beforeEach(() => {
        cy.visit('/')
        cy.clearAllSessionStorage()
        cy.login()
        cy.urlAposLogin()
        cy.tituloPagina()
        processoVendaPrincipal()
        escolherClientePedido()
        cy.wait(500)
    })
  
    context('Sem entrega/ com promoção/ com serviço processo 9860 - caminho feliz', () => {

        it.skip('1-Pedido com promoção a prazo/parcelas (promoção 159): produto 1891 0 0 com garantia (isenta de juros)', () => {
    
            prd1PrazoParcela() //PRODUTO PROMOÇÃO
            saldodisponivel()
            escolherProdutoPesquisa()
            cy.wait(200)
            escolherVoltagemProduto()
            tipoServicoIsentoValidar()
                
            // //Usar promoção, no card "Promoções"
             cy.get('.md-3-line > div.md-button > .md-no-style').click({force:true})
    
            // //Escolher uma forma de pagamento, no card de "Formas de pagamento"
            cy.get('button[aria-label="3860 - T.A. A Receber Futuro   Futuro"]').click({force:true})
                
            clicarAdicionarProduto()
            cy.wait(500)
            modalServicosVinculados() //SERVICOS
            garantiaSeparaMesmoProcesso() //Marcar garantia "T.A. Garantia Separa Mesmo Processo"
            okServicosVinculados()
            tirarEntrega() //ENTREGA
            cy.wait(400)
            avancarParaParcelas()
            messAdicionandoProdutosServicos()
            cy.wait(15000)
            avancarFinal() //PAGAMENTO
        })
    
        it.skip('2-Pedido com promoção a prazo/entrada + parcelas (promoção 158): produto 1895 0 0 com garantia (isenta de juros)', () => {
    
            prd2PrazoParcela() //PRODUTO PROMOCAO
            saldodisponivel()
            escolherProdutoPesquisa()
            cy.wait(200)
            escolherVoltagemProduto()
            cy.wait(400)
            tipoServicoIsentoValidar()
                
            //Usar promoção, no card "Promoções"
            cy.get('.md-3-line > div.md-button > .md-no-style').click({force:true})
    
            //Escolher uma forma de pagamento, no card de "Formas de pagamento"
            cy.get('button[aria-label="3860 - T.A. A Receber Futuro   Futuro"]').click({force:true})
    
            clicarAdicionarProduto()
            cy.wait(500)
            modalServicosVinculados() //SERVICOS
            garantiaSeparaMesmoProcesso() //Marcar garantia "T.A. Garantia Separa Mesmo Processo"
            okServicosVinculados()
            tirarEntrega() //ENTREGA
            cy.wait(400)
            avancarParaParcelas()
            messAdicionandoProdutosServicos()
            cy.wait(16000)

            // tela de PAGAMENTO
            //Selecionando opções de pagamento de entrada
            cy.get('md-option .md-text')
                .contains('3861 - T.A. A Receber A Vista')
                .click({force:true})

            //Selecionando processo de receber entrada
            cy.contains('div.md-text.ng-binding', '3861 - T.A. A Receber A Vista')
                .should('exist')
                .and('be.visible')
                .click({force:true})

            //Clicando no botão GERAR PAGAMENTO da entrada
            cy.get('.white > .layout-align-center-center > .md-primary')
                .should('exist')
                .and('be.visible')
                .and('not.be.disabled')
                .and('contain','Gerar pagamento')
                .click({force:true})

            avancarFinal()
        })
    
        it.skip('3-Pedido com promoção a partida (promoção 161): produto 1893 0 0 com prestamista (isento de juros)', () => {
    
            prd3PrazoParcela() //PRODUTO PROMOCAO
            saldodisponivel()
            escolherProdutoPesquisa()
            cy.wait(200)    
            escolherVoltagemProduto()
            cy.wait(400)
                
            //Usar promoção, no card "Promoções"
            cy.get('.md-3-line > div.md-button > .md-no-style').click({force:true})
                 
            //Escolher uma forma de pagamento, no card de "Formas de pagamento"
            cy.get('button[aria-label="3866 - T.A. A Receber Prestamista   Futuro"]').click({force:true})
                
            clicarAdicionarProduto()
            cy.wait(500)
            modalServicosVinculados() //SERVICOS
            okServicosVinculados()
            tirarEntrega() //ENTREGA
            cy.wait(400)
            avancarParaParcelas()
            messAdicionandoProdutosServicos()
            cy.wait(8000)
            adicionarPrestamista()
            avancarFinal() //PAGAMENTO
        })

        it.skip('4-Pedido com promoção a prazo/parcelas (promoção 162): produto 1894 0 0 com garantia (isenta de juros) e prestamista (com juros)', () => {
    
            prd4PrazoParcela() //PRODUTO PROMOCAO
            saldodisponivel()
            escolherProdutoPesquisa()
            cy.wait(200)  
            escolherVoltagemProduto()
            tipoServicoIsentoValidar()
                
            ///Usar promoção, no card "Promoções"
             cy.get('.md-3-line > div.md-button > .md-no-style').click({force:true})
    
            //Escolher uma forma de pagamento, no card de "Formas de pagamento"
            cy.get('button[aria-label="3866 - T.A. A Receber Prestamista   Futuro"]').click({force:true})
    
            clicarAdicionarProduto()
            cy.wait(500)
            modalServicosVinculados() //SERVICOS
            garantiaSeparaMesmoProcesso() //Marcar garantia "T.A. Garantia Separa Mesmo Processo"
            okServicosVinculados()
            tirarEntrega() //ENTREGA
            cy.wait(400)
            avancarParaParcelas()
            messAdicionandoProdutosServicos()
            cy.wait(10000)
            adicionarPrestamista()
            avancarFinal() //PAGAMENTO
        })
    })

    afterEach(() => {
        botaoFinalizarPedido() //RESUMO
        finalizandoPedido()
        cy.wait(9000)
        pedidoGerado()
      });
 })