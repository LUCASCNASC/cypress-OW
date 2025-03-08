export class GeralPedido {

    constructor(page) {
        this.page = page
    }

    //Trocar filial de faturamento - faturamento remoto da filial 50 para 6
    async trocarFilialFaturamento (selector) {

        const filial_local = '50 - PR - EMISSÃO NFe/NFCe'
        const filial_remota = '6 - GAZIN - IND. E COM. DE MÓVEIS E ELETROD. LTDA.'

        //ícone dentro do botão de filial de saldo
        cy.get('[ng-click="openModalFilial(itemClicado.grade, false);"] > .ng-binding')
            .should('be.visible')

        //Botão filial de faturamento
        cy.get('[ng-click="openModalFilial(itemClicado.grade, false);"]')
            .should('be.visible')
            .and('contain', filial_local)
            .click({force:true})

        //Card Filial de faturamento - título
        cy.get('.md-dialog-fullscreen > .md-primary > .md-toolbar-tools > .flex')
            .should('be.visible')
            .and('have.text', 'Filial')
        
        //Card Filial de faturamento - X para sair do card
        cy.get('.md-dialog-fullscreen > .md-primary > .md-toolbar-tools > .md-icon-button > .ng-binding')
            .should('be.visible')

        //Card Filial de faturamento - filial 50
        cy.get('p.ng-binding')
            .contains(filial_local)
            .should('be.visible')
            .and('not.be.disabled')

        //Card Filial de faturamento - filial 6
        cy.get('p.ng-binding')
            .contains(filial_remota)
            .should('be.visible')
            .and('not.be.disabled')
            
        //Card Filial de faturamento - clicar na filial 6
        cy.get('.white > md-list.md-default-theme > :nth-child(2) > div.md-button > .md-no-style')
            .click()
    }

    //validando composição deste KIT
    async composicaoDesteKit (selector) {

        cy.get('.is-expanded > v-pane-header.ng-scope > div')
            .scrollIntoView()
            .wait(200)
            .should('be.visible')
            .and('contain', 'Composição deste KIT')
    }

    //clicar no botão editar parcelas da forma de pagamento - quando já temos uma forma de pagamento escolhida
    async clicarEditarParcelas (selector) {

        //ícone lápis para edição de parcelas da forma de pagamento
        cy.get('.btn-remove-item-list > :nth-child(3) > .md-raised')
            .click({force:true})
    }

    // valores Subtotal e Total Financeiro comparar eles
    async compararSubtotalTotalFinanceiro (span1, span2) {
        
        cy.get(span1)
        .invoke('text')
        .then((texto1) => {
            // Limpar o texto, removendo 'R$', vírgulas e espaços
            const valor1 = texto1.replace(/[^0-9,]/g, '').trim();
    
            cy.get(span2)
            .invoke('text')
            .then((texto2) => {
                // Limpar o texto, removendo 'R$', vírgulas e espaços
                const valor2 = texto2.replace(/[^0-9,]/g, '').trim();
    
                // Converter para formato numérico, substituindo vírgula por ponto para considerar como decimal
                const valor1Numerico = parseFloat(valor1.replace(',', '.'));
                const valor2Numerico = parseFloat(valor2.replace(',', '.'));
    
                // Comparar os valores
                expect(valor1Numerico).to.equal(valor2Numerico);
            });
        });
    }
} 