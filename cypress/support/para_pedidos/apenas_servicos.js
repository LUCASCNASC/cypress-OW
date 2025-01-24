//Marcar garantia "T.A. Garantia Separa Mesmo Processo"
export function garantiaSeparaMesmoProcesso (selector) {
    
    cy.get('#checkbox-139-0 > .md-container')
        .should('not.be.disabled')

    cy.get('#checkbox-139-0 > .md-container').click()
}

//Marcar garantia "T.A. Garantia Não Separa"
export function garantiaNaoSepara (selector) {

    cy.get('#checkbox-140-1 > .md-container')
        .should('exist')
        .and('not.be.disabled') 

    cy.get('#checkbox-140-1 > .md-container').click()
}

//Marcar Garantia separa titulo em um processo deferente
export function garantiaSeparaTituloProcessoDiferente (selector) {

    cy.get('#checkbox-141-2 > .md-container')
        .should('exist')
        .and('not.be.disabled') 

    cy.get('#checkbox-141-2 > .md-container').click()
}

//Marcar Mão de Obra "T.A. MO Destaca e Não Separa"
export function maoObraDestacaNãoSepara (selector) {

    cy.get('#checkbox-142-0 > .md-container')
        .should('exist')
        .and('not.be.disabled') 

    cy.get('#checkbox-142-0 > .md-container').click()
}

//Marcar Mão de Obra "T.A. MO Não Destaca e Separa Mesmo Processo"
export function maoObraNaoDestacaSeparaMesmoProcesso (selector) {

    cy.get('#checkbox-143-1 > .md-container')
        .should('exist')
        .and('not.be.disabled')

    cy.get('#checkbox-143-1 > .md-container').click()
}

//Marcar Mão de obra que não destaca e separa título em processo diferente
export function maoObraNaoDestacaSeparaProcessoDiferente (selector) {

    cy.get('#checkbox-144-2 > .md-container')
        .should('not.be.disabled')

    cy.get('#checkbox-144-2 > .md-container').click()
}

//Validações card de serviços
export function modalServicosVinculados (selector) {

    //Título do modal - Serviços Vinculados
    cy.get('.md-dialog-fullscreen > ._md-toolbar-transitions > .md-toolbar-tools > .flex')
        .should('be.visible')
        .and('contain', 'Serviços Vinculados')

    //botão x do modal Serviços Vinculados
    cy.get('.md-dialog-fullscreen > ._md-toolbar-transitions > .md-toolbar-tools > .md-icon-button > .ng-binding')
        .should('be.visible')
        .and('not.be.disabled')

    //ícone check verde do modal Serviços Vinculados
    cy.get('.icon')
        .should('be.visible')

    //mensagem do modal Serviços Vinculados - "O item foi adicionado ao carrinho"
    cy.get('.ng-scope.flex-100 > .layout-wrap > :nth-child(2) > h2')
        .should('be.visible')
        .and('have.text', 'O item foi adicionado ao carrinho')

    //mensagem do modal Serviços Vinculados - "Aproveite para adicionar os serviços abaixo"
    cy.get('.ng-scope.flex-100 > .layout-wrap > :nth-child(2) > h4')
        .should('be.visible')
        .and('have.text', 'Aproveite para adicionar os serviços abaixo')

    //mensagem do modal Serviços Vinculados - "Garantias"
    cy.get('p.ng-binding')
        .contains('Garantias')
        .should('be.visible')

    //mensagem do modal Serviços Vinculados - "Mão de Obra"
    cy.get('p.ng-binding')
        .contains('Mão de Obra')
        .scrollIntoView()
        .wait(200)
        .should('be.visible')
}

//botão OK modal Serviços Vinculados - com intercept
export function okServicosVinculados (selector) {

    cy.intercept('POST', '/services/v3/pedido_calcular_frete').as('api_pedido_calcular_frete')

    //validando botão
    cy.get('button[ng-click="salvar()"]')
        .should('be.visible')
        .and('not.be.disabled')
        .and('have.text',' Ok ')

    //clicar no botão
    cy.get('button[ng-click="salvar()"]')
        .click({force:true})

    cy.wait('@api_pedido_calcular_frete', { timeout: 40000 })
}

//botão OK modal Serviços Vinculados de pedidos remotos
export function okServicosVinculadosRemotos (selector) {

    //validando botão
    cy.get('button[ng-click="salvar()"]')
        .should('be.visible')
        .and('not.be.disabled')
        .and('have.text',' Ok ')

    //clicar no botão
    cy.get('button[ng-click="salvar()"]')
        .click({force:true})
}

//validar modal e clicar em OK
export function okSeguroPrestamista (selector) {

    //título modal "Seguro prestamista"
    cy.get('.md-dialog-fullscreen > ._md-toolbar-transitions > .md-toolbar-tools > .flex')
        .should('be.visible')
        //.and('include.text',' Seguro prestamista')

    //botão X
    cy.get('.md-dialog-fullscreen > ._md-toolbar-transitions > .md-toolbar-tools > .md-icon-button > .ng-binding')
        .should('be.visible')
        .and('not.be.disabled')

    //informação de dentro do modal
    cy.get('.white > .md-no-sticky > .md-subheader-inner')
        .should('be.visible')
        //.and('include.text',' Seguro Prestamista')

    //checkbox Seguro Prestamista
    cy.get('.md-container')
        //.should('be.checked')
        .should('be.visible')
        .and('not.be.disabled')

    //validando cor verde da checkbox, provando que o prestamista está marcado 
    cy.get('.md-container.md-ink-ripple')
        .should('have.css', 'color', 'rgba(28, 202, 19, 0.87)')

    //nome do seguro prestamista cadastrado
    cy.get('.md-no-style > .md-list-item-text > :nth-child(1)')
        .should('be.visible')

    //quantidade
    cy.get('.md-list-item-text > :nth-child(2)')
        .should('be.visible')
        .and('include.text', 'Quantidade')

    //valor unitário
    cy.get('.md-list-item-text > :nth-child(3)')
        .should('be.visible')
        .and('include.text', 'Valor unitário')

    //cifrão do valor
    cy.get('.md-no-style > .md-secondary-container > :nth-child(1) > .ng-binding > sup')
        .should('be.visible')
        .and('contain', 'R$')

    //valor em si
    cy.get('.md-no-style > .md-secondary-container > :nth-child(1) > .ng-binding')
        .should('be.visible')
        .and('include.text', 'R$')

    //botão OK
    cy.get('md-dialog-actions.layout-row > .md-primary')
        .should('be.visible')
        .and('not.be.disabled')
        .and('have.text',' Ok ')

    //clicar no botão OK
    cy.get('md-dialog-actions.layout-row > .md-primary')
        .click()
}