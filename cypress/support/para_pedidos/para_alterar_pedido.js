//clicaR no botão OK do mocal de Pedido Concuído
export function okPedidoGerado (selector) {

    cy.get('md-dialog-actions.layout-align-center-center > .md-primary')
        .click()
}

//Validar e clicar no menu de opções
export function iconeMenuOpcoesPed (selector) {

    //Ícone do menu de opções
    cy.get('[aria-label="Menu de opções"] > .ng-binding')
        .should('be.visible')
        .and('not.have.attr', 'disabled')
            
    //Clicar ni ícone do menu de opções
    cy.get('[aria-label="Menu de opções"] > .ng-binding')
        .click({force:true})
}

//Validando opção Pedidos Pendentes, do menu de opções
export function pedidosPendentesOpcaoMenuPed (selector) {

    //ícone Pedidos pendentes 
    cy.get('md-icon[md-svg-src="images/icons/pedido.svg"]')
        .scrollIntoView()

    //Opção Pedidos pendentes no menu de opções
    cy.get('a[aria-label="Pedidos pendentes"]')
        .should('be.visible')
        .and('not.have.attr', 'disabled')

    //Opção Pedidos pendentes no menu de opções
    cy.get('a[aria-label="Pedidos pendentes"]')
        .should('have.attr', 'aria-label', 'Pedidos pendentes')
        .click({force:true})

    //validando se entrou no Pedidos pendentes
    cy.get('.header')
        .should('be.visible')
        .and('contain', 'CONSULTA DE PEDIDOS')
}

//validando card com informações do pedido a ser alterado
export function escolherPedidoPendente (selector) {

    //card inteiro
    cy.get(':nth-child(1) > .md-whiteframe-2dp')
        .should('be.visible')

    //Número do pedido
    cy.get(':nth-child(1) > .md-whiteframe-2dp > .flex-70 > :nth-child(1) > .ng-binding')
        .should('be.visible')

    //Nome do cliente
    cy.get(':nth-child(1) > .md-whiteframe-2dp > .flex-70 > :nth-child(1)')
        .should('be.visible')
        .and('contain', 'TA CPF AUTOMAÇÃO')

    //Data do pedido
    cy.get(':nth-child(1) > .md-whiteframe-2dp > .flex-70 > :nth-child(3)')
        .should('be.visible')

    //Pendente: Liberado/Aguardando Fechamento
    cy.get(':nth-child(1) > .md-whiteframe-2dp > .flex-70 > :nth-child(5)')
        .should('be.visible')
        .and('have.text', ' Pendente: Liberado/Aguardando Fechamento.')

    //Situação do pedido: Pendente
    cy.get(':nth-child(1) > .md-whiteframe-2dp > .flex-70 > :nth-child(7)')
        .should('be.visible')
        //.and('contain', 'Situação: Pendente')

    //R$ no valor do pedido
    cy.get(':nth-child(1) > .md-whiteframe-2dp > .layout-align-center-end > .ng-binding > sup')
        .should('be.visible')
        .and('have.text', 'R$')

    //Valor do pedido
    cy.get(':nth-child(1) > .md-whiteframe-2dp > .layout-align-center-end > .ng-binding')
        .should('be.visible')

    //arrastar detalhes
    cy.get(':nth-child(1) > .md-whiteframe-2dp')
        .trigger('mousedown', { which: 1 })
        .trigger('mousemove', { clientX: 100, clientY: 0 }) // Ajuste clientX para a posição desejada
        .trigger('mouseup')
}

//clicar em Detalhes
export function clicarDetalhes (selector) {

    cy.get(':nth-child(1) > .btn-remove-item-list > :nth-child(2) > .md-raised')
        .click({force:true})
}

//validando informações tela de informações do pedido
export function infosPedidoValidarInfos (selector) {

    //título 
    cy.get('[ng-show="!(nenhum_registro)"] > :nth-child(1) > div')
        .should('be.visible')
        .and('contain','PEDIDO')
        .and('contain', '- Pendência: Liberado/Aguardando Fechamento.')

    //Número do pedido no título
    cy.get('[ng-show="!(nenhum_registro)"] > :nth-child(1) > div > .md-primary')
        .should('be.visible')

    //Nome:
    cy.get('.cliente > :nth-child(1) > b')
        .should('be.visible')
        .and('have.text', 'Nome:')

    //Informação Nome:
    cy.get('.layout-xs-column > .cliente > :nth-child(1)')
        .should('be.visible')
        .and('contain', 'TA CPF AUTOMAÇÃO')

    //CPF/CNPJ:
    cy.get('.cliente > :nth-child(2) > b')
        .should('be.visible')
        .and('have.text', 'CPF/CNPJ:')

    //Informação CPF/CNPJ:
    cy.get('.layout-xs-column > .cliente > :nth-child(2)')
        .should('be.visible')
        .and('contain', '48976249089')

    //CEP:
    cy.get('.endereco > :nth-child(1) > b')
        .should('be.visible')
        .and('have.text', 'CEP:')

    //Informação CEP:
    cy.get('.endereco > :nth-child(1)')
        .should('be.visible')
        .and('contain', '87.065-320')

    //Endereço:
    cy.get('.endereco > :nth-child(2) > b')
        .should('be.visible')
        .and('have.text', 'Endereço:')

    //Informação Endereço:
    cy.get('.endereco > :nth-child(2)')
        .should('be.visible')
        .and('contain', 'RUA TULIPA, 232, PARQUE INDUSTRIAL, 3317/PR')

    //TOTAL DO PEDIDO:
    cy.get(':nth-child(9) > .layout-wrap > .ng-binding')
        .should('be.visible')
        .and('contain', 'TOTAL PEDIDO (R$):')
}

//validando botões da tela de informações do pedido
export function infosPedidoValidarBotoes (selector) {

    //botão RESUMO DO PEDIDO
    cy.get('button[ng-click="abrirResumoPedido()"]')
        .should('be.visible')
        .and('not.be.disabled')
        .should('contain', 'Resumo do Pedido')

    //botão VOLTAR
    cy.get('button[ng-click="voltarTela()"]')
        .should('be.visible')
        .and('not.have.attr', 'disabled')

    //botão impressora
    cy.get('.md-default')
        .should('be.visible')
        .and('not.have.attr', 'disabled')

    //botão lixeira
    cy.get('.md-warn')
        .should('be.visible')
        .and('not.have.attr', 'disabled')

    //botão PRODUTOS
    cy.get('button[ng-click="abrirModalProduto()"]')
        .should('be.visible')
        .and('not.have.attr', 'disabled')

    //botão SERVIÇOS
    cy.get('button[ng-click="abrirModalPagamento()"]')
        .should('be.visible')
        .and('not.have.attr', 'disabled')

    //botão FORMAS DE PAGAMENTO
    cy.get('button[ng-click="abrirModalPagamento()"]')
        .should('be.visible')
        .and('not.have.attr', 'disabled')
}

//clicar no botão lápis, para editar
export function clicarEditarPedido (selector) {

    cy.get('.row-fluid > .md-primary > .ng-binding')
        .should('be.visible')
        .and('not.be.disabled')
        .click()
}

//mensagem de carregamento de pedido para alterá-lo
export function menssCarregarPedAlterar (selector) {

    //ícone carregamento
    cy.get('.layout-align-center-center > .md-accent')
        .should('be.visible')

    //mensagem de carregamento
    cy.get('.layout-align-center-center > h3')
        .should('be.visible')
        .and('contain', 'Aguarde enquanto o pedido')
        .and('contain', 'é carregado ...')
}

//clicar no botão + para aumentar a quantidade do produto já adicionado anteriormente
export function clicarAumentoQtdProduto (selector) {

    cy.get('.iconeBuscaDetalheVenda')
        .scrollIntoView()
        .wait(300)

    cy.get('md-icon[ng-click="aumentaQuantidadeProduto(itemAtual)"]')
        .should('be.visible')
        .and('not.be.disabled')
        .click({force:true})
        .click({force:true})
        .click({force:true})
}

//clicar para remover primeiro produto
export function clicarRemoverProduto (selector) {

    //ícone dentro do botão
    cy.get('#item-index-0 > .flex-gt-sm-80 > :nth-child(2) > .flex-20 > .md-warn > .ng-binding')
        .should('exist')
        //.and('be.visible')
        .and('not.be.disabled')

    //botão completo
    cy.get('#item-index-0 > .flex-gt-sm-80 > :nth-child(2) > .flex-20 > .md-warn')
        .should('exist')
        //.and('be.visible')
        .and('not.be.disabled')
        .click({force:true})        
}

//fechar modal de intenção de compra
export function clicarFecharIntencaoCompra (selector) {

    //título modal
    cy.get('.md-dialog-fullscreen > ._md-toolbar-transitions > .md-toolbar-tools > .flex')

    //botão SALVAR
    cy.get('.ng-pristine.flex-100 > .layout-align-end-end > .md-raised')
        .should('be.visible')
        .and('be.disabled')

    //botão X
    cy.get('.md-dialog-fullscreen > ._md-toolbar-transitions > .md-toolbar-tools > .md-icon-button > .ng-binding')
        .should('be.visible')
        .and('not.be.disabled')
        .click()
}

//remover forma de pagamento na edição de um pedido
export function removerFormaPagamento (selector) {

    cy.get('.btn-remove-item-list > :nth-child(4) > .md-raised')
        .should('exist')
        .click({force:true})
}

//Arrastar botão de Retirada / Entrega, para colocar entrega
export function adicionarEntrega (selector) {

    //Botão Retirada / Entrega parte esquerda
    cy.get('.valor.flex-gt-sm-50 > .flex-gt-sm-30 > .md-label')
        .scrollIntoView()
        .wait(500)

    //Botão Retirada / Entrega - texto Retirada / Entrega
    cy.get('.valor.flex-gt-sm-50 > .flex-gt-sm-30 > .md-label')
        .should('have.text', ' Retirada / Entrega ')
        .click({force:true})
}

//Adicionar serviço a um produto já adicionado ao pedido
export function adicionarServico (selector) {
    
    cy.contains('button', 'Serviços Vinculados')
        .should('exist')

    //botão SERVICOS VINCULADOS
    cy.get(':nth-child(4) > :nth-child(1) > .md-default')
        .should('be.visible')
        .and('not.have.attr', 'disabled')

    cy.get(':nth-child(4) > :nth-child(1) > .md-default')
        .click()
}