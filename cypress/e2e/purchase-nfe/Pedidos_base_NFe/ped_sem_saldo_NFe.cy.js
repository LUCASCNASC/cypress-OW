import { ProcessoVendaPage } from '../../../pages/pedido/ProcessoVendaPage.js';
import { Product, ValidateBalance } from '../../../pages/pedido/ProdutoPage.js';

describe('Attempting a sales order with an out-of-stock product - Stock rule: Parameter 36 = 4 - Parameter 139 = 4 - Trial 653 not configured', () => {

    beforeEach(() => {
        cy.visit('/');
        cy.clearAllSessionStorage();
        cy.login();
        cy.validateTitlePage();
        ProcessoVendaPage.NFe();
        cy.chooseCliente();
    })

        context('Process 9860 - do not allow sale - warning messages should appear when adding a product', () => {

            it('1.Order: product 1869 0 0 (Local sale of product without balance - no delivery)', () => {
                
                Product.withoutBalance();
                ValidateBalance.withoutBalance();
                cy.clickVoltageProduct();
                cy.clickAddProduc();

                //Validando mensagem "Este produto não possui saldo na filial selecionada."
                cy.get('[ng-if="semSaldoCD"][style=""] > p')
                    .should('exist')
                    .and('be.visible')
                    .and('have.text','Este produto não possui saldo na filial selecionada.')
                    .invoke('css', 'color') // Obtém a cor do elemento
                    .should('equal', 'rgb(244, 67, 54)');

                //Validando mensagem "Este produto não possui saldo na filial selecionada, será permitido apenas a simulação da venda."
                cy.get('[ng-show="(itemGradeSelecionado && itemGradeSelecionado.valor > 0)"] > :nth-child(1) > .mensagem-erro-centralizada > p')
                    .scrollIntoView()
                    .wait(200)
                    .should('exist')
                    .and('be.visible')
                    .and('have.text','Este produto não possui saldo na filial selecionada, será permitido apenas a simulação da venda.')
                    .invoke('css', 'color') // Obtém a cor do elemento
                    .should('equal', 'rgb(244, 67, 54)');

                //Validando botão Adicionar para Simulação
                cy.get('[ng-if="(localSaldoSelecionado && itemGradeSelecionado && validaEstoqueFilial(itemGradeSelecionado.filial) && itemGradeSelecionado.valor > 0 && btnAdicionarLiberado) || semSaldoCD"] > .md-accent')
                    .should('exist')
                    .and('not.be.disabled')
                    .and('contain',' Adicionar para Simulação');
            })
        })
})