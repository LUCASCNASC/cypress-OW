//Função criada para clicar no campo transportadora e escolher a trasportadora
export function escolherTransportadora (selector) {

    const transportadora_id = '1'

    //Campo Transportadora - clicar para abrir as opções
    cy.get('input[name="transportadora"]')
        .click({force:true})

    cy.wait(300)

    //Selecionar a transportadora que queremos
    cy.get('span[md-highlight-text]')
        .contains('1')
        .click({force:true})
}

//Validando produto com saldo disponível local
export function saldodisponivel (selector) {
    
    //Validando imagem
    cy.get('.resultado-imagem')
        .should('exist')
        .and('be.visible')

    //Validando "Saldo disponivel"
    cy.get('.label')
        .should('exist')
        .and('be.visible')
        .and('have.text','Saldo disponivel')
        .invoke('css', 'background-color') // Obtém a cor do elemento
        .should('equal', 'rgb(92, 184, 92)')

    //Validando nome do produto dentro card
    cy.get('.md-resultado-titulo')
        .should('exist')
        .and('be.visible')

    //Validado código do produto dentro do card
    cy.get('.badge-saldo.ng-binding')
        .should('exist')
        .and('be.visible')

    //Validando R$ dentro do card
    cy.get('sup')
        .should('exist')
        .and('be.visible')
        .and('have.text','R$')

    //Validando valor do produto dentro do card
    cy.get('.valor-busca')
        .should('exist')
        .and('be.visible')

    //Validando check box dentro do card
    cy.get('.expandeIcone')
        .should('exist')
        .and('be.visible')
}

//Validando produto com saldo disponível no CD 
export function saldoCDDisponivel (selector) {
    
    //Validando imagem
    cy.get('.resultado-imagem')
        .should('exist')
        .and('be.visible')

    //Validando "Saldo disponivel"
    cy.get('.label')
        .should('exist')
        .and('be.visible')
        .and('have.text','Saldo disponivel')
        .invoke('css', 'background-color') // Obtém a cor do elemento
        .should('equal', 'rgb(240, 173, 78)')

    //Validando nome do produto dentro card
    cy.get('.md-resultado-titulo')
        .should('exist')
        .and('be.visible')

    //Validado código do produto dentro do card
    cy.get('.badge-saldo.ng-binding')
        .should('exist')
        .and('be.visible')

    //Validando R$ dentro do card
    cy.get('sup')
        .should('exist')
        .and('be.visible')
        .and('have.text','R$')

    //Validando valor do produto dentro do card
    cy.get('.valor-busca')
        .should('exist')
        .and('be.visible')

    //Validando check box dentro do card
    cy.get('.expandeIcone')
        .should('exist')
        .and('be.visible')
}

//Validando produto com saldo indisponível
export function semSaldodisponivel (selector) {
    
    //Validando imagem
    cy.get('.resultado-imagem')
        .should('exist')
        .and('be.visible')

    //Validando "Saldo indisponivel"
    cy.get('.label')
        .should('exist')
        .and('be.visible')
        .and('have.text','Saldo indisponivel')
        .invoke('css', 'background-color') // Obtém a cor do elemento
        .should('equal', 'rgb(217, 83, 79)')

    //Validando nome do produto dentro card
    cy.get('.md-resultado-titulo')
        .should('exist')
        .and('be.visible')

    //Validado código do produto dentro do card
    cy.get('.badge-saldo.ng-binding')
        .should('exist')
        .and('be.visible')

    //Validando R$ dentro do card
    cy.get('sup')
        .should('exist')
        .and('be.visible')
        .and('have.text','R$')

    //Validando valor do produto dentro do card
    cy.get('.valor-busca')
        .should('exist')
        .and('be.visible')

    //Validando check box dentro do card
    cy.get('.expandeIcone')
        .should('exist')
        .and('be.visible')
}

//Escolher rota completa, rota maringá
export function escolherRota (selector) {

    //Lupa de pesquisa de rota - clicar para pesquisar
    cy.get('.rota-frete > .md-icon-right > .ng-binding')
        .scrollIntoView()
        .click()

    cy.wait(400)

    //Pesquisar rota
    cy.get('#txtBuscaRotaModal')
        .type('1')

    //Clicar na lupa para pesquisar rota depois de preencher campo
    cy.get('md-icon[ng-click="pesquisar()"]')
        .click()

    cy.wait(400)

    //Escolher rota após pesquisarmos
    cy.get('v-pane-header.ng-scope > div')
        .click() //clicar na rota 1

    //Escolher rota 2
    cy.get(':nth-child(4) > .padding-10-0')
        .click() //clicar na rota 1

    cy.wait (200)
}

//Função para escolher cliente CPF para gerar pedido de venda - inserir cliente 
export function escolherClientePedido2 (selector) {
    
    //inserir CPF/CNPJ no campo de cliente para podermos pesquisar pela lupa
    cy.get('.click-cliente > .informe-o-cliente > .cliente-header')
        .wait(500)
        .type('    48976249089{enter}')

    cy.wait(300)

    //Carregando cliente, ícone carregamento
    cy.get('svg path')
        .should('exist')
        .and('be.visible')

    //Validando mensagem de carregamento do cliente
    cy.get('#dialogContent_90 > .layout-align-center-center > h3')
        .should('exist')
        .and('be.visible')
        .and('have.text', 'Aguarde carregando...')

    cy.wait(2200)

    //Card Intenções de Compra - título "Intenções de Compra"
    cy.get('.md-title')
        .should('exist')
        .and('be.visible')
        .and('have.text', 'Intenções de Compra')

    //Card Intenções de Compra - mensagem dentro do card
    cy.get('.md-dialog-content-body > .ng-binding')
        .should('exist')
        .and('be.visible')
        .and('have.text', 'O cliente selecionado possui produtos adicionados nas intenções de compra, deseja acessá-los?')

    //Card Intenções de Compra - validando botão SIM
    cy.get('.md-confirm-button')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')
        .should('have.text', 'Sim')

    //Card Intenções de Compra - validando botão NÃO
    cy.get('.md-cancel-button')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')
        .should('have.text', 'Não')
        .click({force:true})


}

//Função para escolher cliente CPF para gerar pedido de venda - pesquisa por cliente
export function escolherClientePedido (selector) {

    //inserir CPF/CNPJ no campo de cliente para podermos pesquisar pela lupa
    cy.get('.click-cliente > .informe-o-cliente > .cliente-header')
        .wait(500)
        .type('48976249089 {downArrow}')

    cy.wait(200)

    //clicar na lupa de pesquisa de clientes
    cy.get('.md-block > .ng-binding')
        .should('exist')
        .and('be.visible')
        .click()

    cy.wait(1500)

    //após a pesquisa encontrar o cliente, vamos selecionar ele
    cy.get('.md-3-line > div.md-button > .md-no-style')
        .should('exist')
        .and('be.visible')
        .click()
}

//Carregamento de forma de pagamento, quando clicamos no botão Gerar parcelas
export function carregandoFormaPagamento (selector) {

    //Modal Forma de pagamento - título Forma de pagamento
    cy.get('.md-dialog-fullscreen > .md-primary > .md-toolbar-tools > .flex')
        .should('exist')
        .and('be.visible')
        .and('have.text', 'Forma de pagamento')

    //botão x do modal Serviços Vinculados
    cy.get('.md-dialog-fullscreen > .md-primary > .md-toolbar-tools > .md-icon-button > .ng-binding')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')

    //Ícone carregamendo de formas de pagamento
    cy.get('.md-dialog-fullscreen > .layout-align-center-center > .md-accent')
        .should('exist')
        .and('be.visible')

    //Mensagem "Aguarde carregando..."
    cy.get('.carregando')
        .should('exist')
        .and('be.visible')
        .and('have.text', 'Aguarde carregando...')

}

//Função para validar card de Pedido Concluído
export function pedidoGerado (selector) {

    //Card pedido gravado com sucesso - Título Pedido Concluído
    cy.get('.md-toolbar-tools h2.flex')
        .should('exist')
        .and('be.visible')
        .and('contain','Pedido Concluído')

    //Card pedido gravado com sucesso - X para sair da aba
    cy.get('.md-content-overflow > :nth-child(1) > .md-toolbar-tools > .md-icon-button > .ng-binding')
        .should('exist')
        .and('be.visible')
        .and('not.have.attr', 'disabled')

    //Card pedido gravado com sucesso - ícone check
    cy.get('.icon.success.animate')
        .should('exist')
        .find('.line.tip.animateSuccessTip')
        .should('exist')

    //Card pedido gravado com sucesso - Pedido gerado
    cy.get('.padding-10 > .layout-wrap > .flex-sm-50 > :nth-child(1)')
        .should('exist')
        .and('be.visible')
        .and('contain','Pedido gerado:')
        
    //Card pedido gravado com sucesso - Pedido gravado com sucesso
    cy.get('[ng-show="!editarPedido"]')
        .should('exist')
        .and('be.visible')
        .and('contain','Pedido gravado com sucesso!')

    //Card pedido gravado com sucesso - Número do Pedido gravado com sucesso
    cy.get('#pedido-numero')
        .should('exist')
        .and('be.visible')

    //Card pedido gravado com sucesso - Botão IMPRIMIR
    cy.get('md-dialog-actions.layout-align-center-center > .md-accent')
        .should('exist')
        .and('be.visible')
        .and('contain', 'Imprimir')
        .and('not.have.attr', 'disabled')
        //.invoke('css', 'background-color') // Obtém a cor do elemento
        //.should('equal', 'rgb(28, 202, 19)')

    //Card pedido gravado com sucesso - Botão OK
    cy.get('md-dialog-actions.layout-align-center-center > .md-primary')
        .should('exist')
        .and('be.visible')
        .and('contain', 'Ok')
        .and('not.have.attr', 'disabled')
        //.invoke('css', 'background-color') // Obtém a cor do elemento
        //.should('equal', 'rgb(36, 13, 105)')
}

//Botão para finalizar o pedido
export function botaoFinalizarPedido (selector) {

    //Botão FINALIZAR PEDIDO
    cy.get('button.md-primary.btn-rounded.md-raised.btn-block.md-default-theme.md-ink-ripple[type="button"][ng-click="confirmarPedido()"]')
        .scrollIntoView()
        .wait(200)
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')
        .should('have.text', 'Finalizar pedido')

    //Clicar para finalizar pedido
    cy.get('button[ng-click="confirmarPedido()"]')
        .click({force:true})
}

//Validando card de carregamento da finalização do pedido
export function finalizandoPedido (selector) {

    //Card pedido concluído (carregando finalização do pedido) - Título Pedido Concluído
    cy.get('.md-toolbar-tools h2.flex')
        .should('exist')
        .and('be.visible')
        .and('contain','Pedido Concluído')

    //Card pedido concluído (carregando finalização do pedido) - X para sair da aba
    cy.get('.md-content-overflow > :nth-child(1) > .md-toolbar-tools > .md-icon-button > .ng-binding')
        .should('exist')
        .and('be.visible')
        .and('not.have.attr', 'disabled')

    //Card pedido concluído (carregando finalização do pedido) - girando carregar
    cy.get('.layout-column > .md-accent')
        .should('exist')
        .and('exist')

    //Card pedido concluído (carregando finalização do pedido) - Mensagem Finalizando pedido...
    cy.get('.layout-column > h4')
        .should('exist')
        .and('be.visible')
        .and('have.text','Finalizando pedido...')

    //Card pedido concluído (carregando finalização do pedido) - ATENÇÃO
    cy.get('.layout-column > p > span')
        .should('exist')
        .and('be.visible')
        .and('have.text','ATENÇÃO:')
        .and('have.css', 'color', 'rgb(204, 0, 0)')

    //Card pedido concluído (carregando finalização do pedido) -  Não atualize a página ...
    cy.get('.layout-column > p')
        .should('exist')
        .and('be.visible')
        .and('contain','Não atualize a página enquanto o pedido estiver sendo finalizado.')
        .and('have.css', 'color', 'rgb(204, 0, 0)')

}

//Botão adicionar produto após selecionar voltagem do produto
export function botãoAdicionarProduto (selector) {

    cy.wait (500)

    // //Botão adicionar produto após selecionar voltagem do produto
    // cy.get('button.md-primary.btn-rounded')
    //     .scrollIntoView()
    //     .wait(200)
    //     .should('exist')
    //     .and('be.visible')
    //     .and('not.be.disabled')
    //     .and('contain','Adicionar')

    //Botão adicionar produto após selecionar voltagem do produto, clicar no botão
    cy.get('[style="padding: 0px 5px;"] > .md-primary')
        .click({force:true})
}

//Arrastar botão de Retirada / Entrega
export function tirarEntrega (selector) {

    //Botão como um todo
    cy.get('[ng-show="itemAtual._permiteEntrega"] > .md-auto-horizontal-margin > .md-container > .md-bar')
        .scrollIntoView()
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')

    //Botão Retirada / Entrega parte esquerda
    cy.get('[ng-show="itemAtual._permiteEntrega"] > .md-auto-horizontal-margin > .md-container')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')

    //Botão Retirada / Entrega parte direita
    cy.get('[ng-show="itemAtual._permiteEntrega"] > .md-auto-horizontal-margin > .md-container > .md-thumb-container > .md-thumb')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')

    //Botão Retirada / Entrega - texto Retirada / Entrega
    cy.get('[ng-show="itemAtual._permiteEntrega"] > .md-auto-horizontal-margin > .md-label')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')
        .and('have.text', ' Retirada / Entrega ')
        .click({force:true})
}

//Arrastar botão de Montagem
export function tirarMontagem (selector) {

    //Botão como um todo
    cy.get('.produto-nome > .valor > .md-auto-horizontal-margin > .md-container > .md-bar')
        .scrollIntoView()
        .wait(200)
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')

    //Botão Montagem parte direita
    cy.get('.produto-nome > .valor > .md-auto-horizontal-margin > .md-container > .md-thumb-container > .md-thumb')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')

    //Botão Montagem - texto Montagem
    cy.get('.produto-nome > .valor > .md-auto-horizontal-margin > .md-label')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')
        .and('have.text', ' Montagem ')
        .click({force:true})
}

//Arrastar botão de Retirada / Entrega do segundo produto
export function tirarEntregaSegundo (selector) {

    //Botão como um todo
    cy.get(':nth-child(3) > .md-whiteframe-2dp > :nth-child(3) > [ng-show="itemAtual._permiteEntrega"] > .md-auto-horizontal-margin > .md-container > .md-bar')
        .scrollIntoView()
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')

    //Botão Retirada / Entrega parte esquerda
    cy.get(':nth-child(3) > .md-whiteframe-2dp > :nth-child(3) > [ng-show="itemAtual._permiteEntrega"] > .md-auto-horizontal-margin > .md-container')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')

    //Botão Retirada / Entrega parte direita
    cy.get(':nth-child(3) > .md-whiteframe-2dp > :nth-child(3) > [ng-show="itemAtual._permiteEntrega"] > .md-auto-horizontal-margin > .md-container > .md-thumb-container > .md-thumb')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')

    //Botão Retirada / Entrega - texto Retirada / Entrega
    cy.get(':nth-child(3) > .md-whiteframe-2dp > :nth-child(3) > [ng-show="itemAtual._permiteEntrega"] > .md-auto-horizontal-margin > .md-label')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')
        .and('have.text', ' Retirada / Entrega ')
        .click({force:true})
}

//Arrastar botão de Montagem do segundo produto
export function tirarMontagemSegundo (selector) {

    //Botão como um todo
    cy.get(':nth-child(3) > .md-whiteframe-2dp > :nth-child(3) > .produto-nome > .valor > .md-auto-horizontal-margin > .md-container > .md-bar')
        .scrollIntoView()
        .wait(200)
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')

    //Botão Montagem parte direita
    cy.get(':nth-child(3) > .md-whiteframe-2dp > :nth-child(3) > .produto-nome > .valor > .md-auto-horizontal-margin > .md-container > .md-thumb-container > .md-thumb')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')

    //Botão Montagem - texto Montagem
    cy.get(':nth-child(3) > .md-whiteframe-2dp > :nth-child(3) > .produto-nome > .valor > .md-auto-horizontal-margin > .md-label')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')
        .and('have.text', ' Montagem ')
        .click({force:true})
}

//Botão "GERAR PARCELAS"
export function botaoGerarParcelas (selector) {

    //Botão "GERAR PARCELAS" - validações
    cy.get('.gerar-parcelas > .layout-wrap > [style="padding: 0 5px"] > .md-primary')
        .scrollIntoView()
        .wait(200)
        .should('exist')
        .and('be.visible')
        .should('not.be.disabled')
        .and('have.text', 'Gerar parcelas')

    //Botão "GERAR PARCELAS" - clicar
    cy.get('.gerar-parcelas > .layout-wrap > [style="padding: 0 5px"] > .md-primary')
        .click({force:true})
}

//Para escolher processo de venda 9860 normal
export function processoVendaPrincipal (selector) {

    //clicar para aparecer as opções de processo
    cy.get('#select_value_label_4 > .md-select-icon')
    .should('exist')
    .and('be.visible')
    .and('not.be.disabled')
    .click()

    //rolar para o meio das opções de processo
    cy.get('#select_listbox_12')
        .should('exist')
        .and('be.visible')
        .scrollTo('center')

    //selecionar processo de venda "9860"
    cy.get('#select_option_60 > .md-text')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')
        .click({force:true})
}

//Para escolher processo de venda entrega futura 9862 normal
export function processoEntregaFutura (selector) {

    //clicar para aparecer as opções de processo
    cy.get('#select_value_label_4 > .md-select-icon')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')
        .click()

    //rolar para o meio das opções de processo
    cy.get('#select_listbox_12')
        .should('exist')
        .and('be.visible')
        .scrollTo('center')

    //selecionar processo de venda "9862"
    cy.get('#select_option_62 > .md-text')
        .scrollIntoView()
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')
        .click({force:true})
}

//Para escolher processo de venda financeiro baixa 9863 normal
export function processoFinanceiroBaixa (selector) {

    //clicar para aparecer as opções de processo
    cy.get('#select_value_label_4 > .md-select-icon')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')
        .click()

    //rolar para o meio das opções de processo
    cy.get('#select_listbox_12')
        .should('exist')
        .and('be.visible')
        .scrollTo('center')

    //selecionar processo de venda "9863"
    cy.get('#select_option_63 > .md-text')
        .scrollIntoView()
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')
        .click({force:true})
}

//Botão para avançar para a tela de Gerar parcelas
export function avancarParaParcelas (selector) {

    cy.wait(500)

    cy.get('.flex-gt-sm-50 > .md-primary')
        .scrollIntoView()
        .wait(200)
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')
        .and('contain','Avançar')

    //Clicar para avançar para a tela de GERAR PARCELAS
    cy.get('.flex-gt-sm-50 > .md-primary')
        .click({force:true})

    //Validando carregamento do ícone de "Adicionando produtos/serviços..."
    cy.get('.conteudo > .layout-align-center-center > .md-accent')
        .should('exist')
        .and('be.visible')

    //Validando mensagem de carregamento -  "Adicionando produtos/serviços..."
    cy.get('h3')
        .should('exist')
        .and('be.visible')
        .and('have.text','Adicionando produtos/serviços...')
}

//Botão para avançar para a tela de escolher transportadora e rota
export function avancarParaTransportadora (selector) {

    cy.get('.flex-gt-sm-50 > .md-primary')
        .scrollIntoView()
        .wait(200)
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')
        .and('contain','Avançar')

    //Clicar para avançar para a tela de GERAR PARCELAS
    cy.get('.flex-gt-sm-50 > .md-primary')
        .dblclick({force:true})

    cy.wait(2000)

    //Validando carregamento do ícone de "Adicionando produtos/serviços..."
    cy.get('.conteudo > .layout-align-center-center > .md-accent')
        .should('exist')
        .and('be.visible')

    //Validando mensagem de carregamento -  "Adicionando produtos/serviços..."
    cy.get('h3')
        .should('exist')
        .and('be.visible')
        .and('have.text','Adicionando produtos/serviços...')
}

//Botão para avançar para a tela de Gerar parcelas
export function avancarParcelasEntrega (selector) {

    cy.get('.layout-align-end-end > :nth-child(2) > .md-primary')
        .scrollIntoView()
        .wait(200)
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')
        .and('contain','Avançar')

    //Clicar para avançar para a tela de GERAR PARCELAS
    cy.get('.layout-align-end-end > :nth-child(2) > .md-primary')
        .click({force:true})

    //Validando carregamento do ícone de "Adicionando dados de entrega..."
    cy.get('.layout-align-center-center > .md-accent')
        .should('exist')
        .and('be.visible')

    //Validando mensagem de carregamento -  "Adicionando dados de entrega..."
    cy.get('h3')
        .should('exist')
        .and('be.visible')
        .and('have.text','Adicionando dados de entrega...')
}

//Botão AVANÇAR, da tela antes de finalizar o pedido
export function avancarFinal (selector) {

    //Botão "AVANÇAR"
    cy.get('.layout-align-end-end > :nth-child(2) > .md-primary')
        .scrollIntoView()
        .wait(200)
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')
        .and('contain','Avançar')

    //Botão "AVANÇAR" - clicar
    cy.get('.layout-align-end-end > :nth-child(2) > .md-primary')
        .click({force:true})
}

//Validações card de serviços
export function modalServicosVinculados (selector) {

    //Título do modal - Serviços Vinculados
    cy.get('.md-dialog-fullscreen > ._md-toolbar-transitions > .md-toolbar-tools > .flex')
        .should('exist')
        .and('be.visible')
        .and('contain', 'Serviços Vinculados')

    //botão x do modal Serviços Vinculados
    cy.get('.md-dialog-fullscreen > ._md-toolbar-transitions > .md-toolbar-tools > .md-icon-button > .ng-binding')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')

    //ícone check verde do modal Serviços Vinculados
    cy.get('.icon')
        .should('exist')
        .and('be.visible')

    //mensagem do modal Serviços Vinculados - "O item foi adicionado ao carrinho"
    cy.get('.ng-scope.flex-100 > .layout-wrap > :nth-child(2) > h2')
        .should('exist')
        .and('be.visible')
        .and('have.text', 'O item foi adicionado ao carrinho')

    //mensagem do modal Serviços Vinculados - "Aproveite para adicionar os serviços abaixo"
    cy.get('.ng-scope.flex-100 > .layout-wrap > :nth-child(2) > h4')
        .should('exist')
        .and('be.visible')
        .and('have.text', 'Aproveite para adicionar os serviços abaixo')

    //mensagem do modal Serviços Vinculados - "Garantias"
    cy.get('p.ng-binding')
        .contains('Garantias')
        .should('exist')
        .and('be.visible')

    //mensagem do modal Serviços Vinculados - "Mão de Obra"
    cy.get('p.ng-binding')
        .contains('Mão de Obra')
        .scrollIntoView()
        .wait(200)
        .should('exist')
        .and('be.visible')
}

//botão OK modal Serviços Vinculados
export function okServicosVinculados (selector) {

    //validando botão
    cy.get('button[ng-click="salvar()"]')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')
        .and('have.text',' Ok ')

    //clicar no botão
    cy.get('button[ng-click="salvar()"]')
        .click({force:true})
}

//Clicar para selecionar o produto que queremos adicionar ao pedido
export function escolherProdutoPesquisa (selector) {

    //Imagem do produto
    cy.get('.resultado-imagem')
        .should('exist')
        .and('be.visible')

    //Nome do produto
    cy.get('.md-resultado-titulo')
        .should('exist')
        .and('be.visible')

    //Saldo disponível
    cy.get('.md-list-item-text > .ng-scope')
        .should('exist')
        .and('be.visible')

    //Código do produto
    cy.get('.badge-saldo.ng-binding')
        .should('exist')
        .and('be.visible')

    //Cifrão do valor do produto
    cy.get('sup')
        .should('exist')
        .and('be.visible')
        .and('have.text', 'R$')

    //Valor do produto
    cy.get('.valor-busca')
        .should('exist')
        .and('be.visible')

    //Check box do produto
    cy.get('.expandeIcone')
        .should('exist')
        .and('be.visible')

    //Clicar para adicionar no carrinho
    cy.get('.md-list-item-text')
        .should('exist')
        .and('be.visible')
        .click({force:true})

}

//Clicar para selecionar a voltagem que queremos adicionar ao pedido
export function escolherVoltagemProduto (selector) {

    //Mensagem "Selecione a cor, a voltagem e o local de saldo "
    cy.get('md-list.md-default-theme > .md-no-sticky > .md-subheader-inner > .md-subheader-content')
        .should('exist')
        .and('be.visible')
        .and('have.text', 'Selecione a cor, a voltagem e o local de saldo ')

    //Card de voltagem - Cifrão
    cy.get('.md-secondary-container > div > .ng-binding > sup')
        .should('exist')
        .and('be.visible')
        .and('have.text', 'R$')

    //Card de voltagem 
    cy.get('.md-list-item-inner')
        .should('exist')
        .and('be.visible')
        .and('contain', 'Cód. Fabricante:')
        .and('contain', 'Filial:')
        .and('contain', 'Saldo Local:')
        .and('contain', 'Saldo Depósito:')

    //Card de voltagem - clicar
    cy.get(':nth-child(1) > md-list.md-default-theme > .md-2-line > div.md-button > .md-no-style')
        .click({force:true})
}

//Trocar filial de faturamento - faturamento remoto da filial 50 para 6
export function trocarFilialFaturamento (selector) {

    const filial_local = '50 - PR - EMISSÃO NFe/NFCe'
    const filial_remota = '6 - GAZIN - IND. E COM. DE MÓVEIS E ELETROD. LTDA.'

    //ícone dentro do botão de filial de saldo
    cy.get('[ng-click="openModalFilial(itemClicado.grade, false);"] > .ng-binding')
        .should('exist')
        .and('be.visible')

    //Botão filial de faturamento
    cy.get('[ng-click="openModalFilial(itemClicado.grade, false);"]')
        .should('exist')
        .and('be.visible')
        .and('contain', filial_local)
        .click({force:true})

    //Card Filial de faturamento - título
    cy.get('.md-dialog-fullscreen > .md-primary > .md-toolbar-tools > .flex')
        .should('exist')
        .and('be.visible')
        .and('have.text', 'Filial')
    
    //Card Filial de faturamento - X para sair do card
    cy.get('.md-dialog-fullscreen > .md-primary > .md-toolbar-tools > .md-icon-button > .ng-binding')
        .should('exist')
        .and('be.visible')

    //Card Filial de faturamento - filial 50
    cy.get('p.ng-binding')
        .contains(filial_local)
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')

    //Card Filial de faturamento - filial 6
    cy.get('p.ng-binding')
        .contains(filial_remota)
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')
        
    //Card Filial de faturamento - clicar na filial 6
    cy.get('.white > md-list.md-default-theme > :nth-child(2) > div.md-button > .md-no-style')
        .click({force:true})
}

//Card Inconsistências - rota e transportadora
export function modalInconsRotaTransp (selector) {

    //Título Inconsistências
    cy.get('.md-dialog-fullscreen > :nth-child(1) > .md-toolbar-tools > .flex')
        .should('exist')
        .and('be.visible')
        .and('have.text', 'Inconsistências')

    //Mensagem dentro do modal - "Restriçoes geradas (triais), por favor comunique à seu gerente:"
    cy.get(':nth-child(1) > h3')
        .should('exist')
        .and('be.visible')
        .and('have.text', 'Restriçoes geradas (triais), por favor comunique à seu gerente:')

    //Título Processo de venda - Processo de venda
    cy.get('.ng-scope.flex-100 > .md-primary > .md-toolbar-tools > h2')
        .should('exist')
        .and('be.visible')
        .and('have.text', 'Processo de venda')

    //Primeiro ícone Inconsistências
    cy.get(':nth-child(1) > .md-avatar-icon')
        .should('exist')
        .and('be.visible')

    //Mensagem "A Rota é obrigatória."
    cy.get(':nth-child(1) > .md-list-item-text > .no-truncate')
        .should('exist')
        .and('be.visible')
        .and('have.text', 'A Rota é obrigatória.')

    //Segundo ícone Inconsistências
    cy.get(':nth-child(1) > .md-avatar-icon')
        .should('exist')
        .and('be.visible')

    //Mensagem "Pedidos referêntes a NFC-e com definição de entrega deverão possuir entidade transportadora preenchida, favor verificar."
    cy.get(':nth-child(2) > .md-list-item-text > .no-truncate')
        .should('exist')
        .and('be.visible')
        .and('have.text', 'Pedidos referêntes a NFC-e com definição de entrega deverão possuir entidade transportadora preenchida, favor verificar.')
    
    //Botão X para fechar
    cy.get('.md-dialog-fullscreen > :nth-child(1) > .md-toolbar-tools > .md-icon-button > .ng-binding')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')
        .click({force:true})

    cy.wait(5000)

    cy.get('.md-dialog-fullscreen > :nth-child(1) > .md-toolbar-tools > .md-icon-button > .ng-binding')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')
        .click({force:true})
}

//Card Inconsistências - apenas transportadora
export function modalInconsApenasTransp (selector) {

    //Título Inconsistências
    cy.get('.md-dialog-fullscreen > :nth-child(1) > .md-toolbar-tools > .flex')
        .should('exist')
        .and('be.visible')
        .and('have.text', 'Inconsistências')

    //Mensagem dentro do modal - "Restriçoes geradas (triais), por favor comunique à seu gerente:"
    cy.get(':nth-child(1) > h3')
        .should('exist')
        .and('be.visible')
        .and('have.text', 'Restriçoes geradas (triais), por favor comunique à seu gerente:')

    //Título Processo de venda - Processo de venda
    cy.get('.ng-scope.flex-100 > .md-primary > .md-toolbar-tools > h2')
        .should('exist')
        .and('be.visible')
        .and('have.text', 'Processo de venda')

    //Ícone Inconsistências
    cy.get('.md-avatar-icon')
        .should('exist')
        .and('be.visible')

    //Mensagem "Pedidos referêntes a NFC-e com definição de entrega deverão possuir entidade transportadora preenchida, favor verificar."
    cy.get('.no-truncate')
        .should('exist')
        .and('be.visible')
        .and('have.text', 'Pedidos referêntes a NFC-e com definição de entrega deverão possuir entidade transportadora preenchida, favor verificar.')
    
    //Botão X para fechar
    cy.get('.md-dialog-fullscreen > :nth-child(1) > .md-toolbar-tools > .md-icon-button > .ng-binding')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')
        .click({force:true})

    cy.wait(5000)

    //Botão X para fechar
    cy.get('.md-dialog-fullscreen > :nth-child(1) > .md-toolbar-tools > .md-icon-button > .ng-binding')
        .click({force:true})
}

//Card Inconsistências - apenas transportadora
export function modalInconsApenasRota (selector) {

    //Título Inconsistências
    cy.get('.md-dialog-fullscreen > :nth-child(1) > .md-toolbar-tools > .flex')
        .should('exist')
        .and('be.visible')
        .and('have.text', 'Inconsistências')

    //Mensagem dentro do modal - "Restriçoes geradas (triais), por favor comunique à seu gerente:"
    cy.get(':nth-child(1) > h3')
        .should('exist')
        .and('be.visible')
        .and('have.text', 'Restriçoes geradas (triais), por favor comunique à seu gerente:')

    //Título Processo de venda - Processo de venda
    cy.get('.ng-scope.flex-100 > .md-primary > .md-toolbar-tools > h2')
        .should('exist')
        .and('be.visible')
        .and('have.text', 'Processo de venda')

    //Ícone Inconsistências
    cy.get('.md-avatar-icon')
        .should('exist')
        .and('be.visible')

    //Mensagem "Pedidos referêntes a NFC-e com definição de entrega deverão possuir entidade transportadora preenchida, favor verificar."
    cy.get('.no-truncate')
        .should('exist')
        .and('be.visible')
        .and('have.text', 'A Rota é obrigatória.')
    
    //Botão X para fechar
    cy.get('.md-dialog-fullscreen > :nth-child(1) > .md-toolbar-tools > .md-icon-button > .ng-binding')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')
        .click({force:true})

    cy.wait(5000)

    //Botão X para fechar
    cy.get('.md-dialog-fullscreen > :nth-child(1) > .md-toolbar-tools > .md-icon-button > .ng-binding')
        .click({force:true})
}

//primeiro produto
export function produtoPrincipal (selector) {

    const produto_principal = '1889'

    //Limpando campo com o produto anterior
    cy.get('#searchText')
        .clear()
        .wait(400)
        .should('have.value', '')

    //Validando campo Buscar produto
    cy.get('#searchText')
        .should('exist')
        .and('be.visible')
        .and('have.value', '')
        .and('not.be.disabled')

    //Validando campo Buscar produto - validando mensagem dentro do campo antes de preencher
    cy.get('label[for="searchText"]')
        .should('have.text', 'Buscar produtos')

    //Prenchendo campo Buscar produto
    cy.get('#searchText')
        .type(produto_principal)
        .wait(100)
        .should('have.value', produto_principal)
}

//Clicar para selecionar a voltagem 1899 0 0
export function primeiroProdutoEscolher (selector) {

    //Card de voltagem - clicar
    cy.get(':nth-child(1) > md-list.md-default-theme > [style=""] > div.md-button > .md-no-style')
        .click({force:true})
}

//Clicar para selecionar a voltagem 1899 1 1
export function segundoProdutoEscolher (selector) {

    //Card de voltagem - clicar
    cy.get(':nth-child(1) > md-list.md-default-theme > :nth-child(3) > div.md-button > .md-no-style')
        .click({force:true})
}

//Clicar para selecionar a voltagem 1899 2 2
export function terceiroProdutoEscolher (selector) {

    //Card de voltagem - clicar
    cy.get(':nth-child(1) > md-list.md-default-theme > :nth-child(4) > div.md-button > .md-no-style')
        .click({force:true})
}

//Clicar para selecionar a voltagem 1899 3 3
export function quartoProdutoEscolher (selector) {

    //Card de voltagem - clicar
    cy.get(':nth-child(1) > md-list.md-default-theme > :nth-child(5) > div.md-button > .md-no-style')
        .click({force:true})
}

//Clicar para selecionar a voltagem 1899 4 4
export function quintoProdutoEscolher (selector) {

    //Card de voltagem - clicar
    cy.get(':nth-child(1) > md-list.md-default-theme > :nth-child(6) > div.md-button > .md-no-style')
        .click({force:true})
}

//Clicar para selecionar a voltagem 1899 5 5
export function sextoProdutoEscolher (selector) {

    //Card de voltagem - clicar
    cy.get(':nth-child(1) > md-list.md-default-theme > :nth-child(7) > div.md-button > .md-no-style')
        .click({force:true})
}

//Clicar para selecionar a voltagem 1899 6 6
export function setimoProdutoEscolher (selector) {

    //Card de voltagem - clicar
    cy.get(':nth-child(1) > md-list.md-default-theme > :nth-child(8) > div.md-button > .md-no-style')
        .click({force:true})
}

//Clicar para selecionar a voltagem 1899 7 7
export function oitavoProdutoEscolher (selector) {

    //Card de voltagem - clicar
    cy.get(':nth-child(1) > md-list.md-default-theme > :nth-child(9) > div.md-button > .md-no-style')
        .click({force:true})
}

//Clicar para selecionar a voltagem 1899 8 8
export function nonoProdutoEscolher (selector) {

    //Card de voltagem - clicar
    cy.get(':nth-child(1) > md-list.md-default-theme > :nth-child(10) > div.md-button > .md-no-style')
        .click({force:true})
}

//Clicar para selecionar a voltagem 1899 9 9
export function decimoProdutoEscolher (selector) {

    //Card de voltagem - clicar
    cy.get(':nth-child(1) > md-list.md-default-theme > :nth-child(11) > div.md-button > .md-no-style')
        .click({force:true})
}