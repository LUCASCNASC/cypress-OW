//Função criada para clicar no campo transportadora e escolher a trasportadora
export function escolherTransportadora (selector) {

    //rolando até um elemento da parte de cima da página
    cy.get('.progressbar') 
        .scrollIntoView()
        .wait(200)

    //clicando para aparecerem as opçoes de transportadora
    cy.get('[name="transportadora"]')
        .click({force:true})
        .wait(300)

    //clicando para selecionar a transportadora
    cy.get('span[md-highlight-text="transpAutoCompleteSearchText"]')
        .contains('1')  // Filtra pelo texto "1"
        .click()
}

//Escolher rota completa, rota maringá
export function escolherRota (selector) {

    //Lupa de pesquisa de rota - clicar para pesquisar
    cy.get('.rota-frete > .md-icon-right > .ng-binding')
        .scrollIntoView()
        .click({force:true})

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

//Validando produto com saldo disponível local
export function saldodisponivel (selector) {
    
    //Validando imagem
    cy.get('.resultado-imagem')
        .should('be.visible')

    //Validando "Saldo disponivel"
    cy.get('.label')
        .should('be.visible')
        .and('have.text','Saldo disponivel')
        .invoke('css', 'background-color') // Obtém a cor do elemento
        .should('equal', 'rgb(92, 184, 92)')

    //Validando nome do produto dentro card
    cy.get('.md-resultado-titulo')
        .should('be.visible')

    //Validado código do produto dentro do card
    cy.get('.badge-saldo.ng-binding')
        .should('be.visible')

    //Validando R$ dentro do card
    cy.get('sup')
        .should('be.visible')
        .and('have.text','R$')

    //Validando valor do produto dentro do card
    cy.get('.valor-busca')
        .should('be.visible')

    //Validando check box dentro do card
    cy.get('.expandeIcone')
        .should('be.visible')
}

//Validando produto com saldo disponível no CD 
export function saldoCDDisponivel (selector) {
    
    //Validando imagem
    cy.get('.resultado-imagem')
        .should('be.visible')

    //Validando "Saldo disponivel"
    cy.get('.label')
        .should('be.visible')
        .and('have.text','Saldo disponivel')
        .invoke('css', 'background-color') // Obtém a cor do elemento
        .should('equal', 'rgb(240, 173, 78)')

    //Validando nome do produto dentro card
    cy.get('.md-resultado-titulo')
        .should('be.visible')

    //Validado código do produto dentro do card
    cy.get('.badge-saldo.ng-binding')
        .should('be.visible')

    //Validando R$ dentro do card
    cy.get('sup')
        .should('be.visible')
        .and('have.text','R$')

    //Validando valor do produto dentro do card
    cy.get('.valor-busca')
        .should('be.visible')

    //Validando check box dentro do card
    cy.get('.expandeIcone')
        .should('be.visible')
}

//Validando produto com saldo indisponível
export function semSaldodisponivel (selector) {
    
    //Validando imagem
    cy.get('.resultado-imagem')
        .should('be.visible')

    //Validando "Saldo indisponivel"
    cy.get('.label')
        .should('be.visible')
        .and('have.text','Saldo indisponivel')
        .invoke('css', 'background-color') // Obtém a cor do elemento
        .should('equal', 'rgb(217, 83, 79)')

    //Validando nome do produto dentro card
    cy.get('.md-resultado-titulo')
        .should('be.visible')

    //Validado código do produto dentro do card
    cy.get('.badge-saldo.ng-binding')
        .should('be.visible')

    //Validando R$ dentro do card
    cy.get('sup')
        .should('be.visible')
        .and('have.text','R$')

    //Validando valor do produto dentro do card
    cy.get('.valor-busca')
        .should('be.visible')

    //Validando check box dentro do card
    cy.get('.expandeIcone')
        .should('be.visible')
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
        .should('be.visible')

    //Validando mensagem de carregamento do cliente
    cy.get('#dialogContent_90 > .layout-align-center-center > h3')
        .should('be.visible')
        .and('have.text', 'Aguarde carregando...')

    cy.wait(2200)

    //Card Intenções de Compra - título "Intenções de Compra"
    cy.get('.md-title')
        .should('be.visible')
        .and('have.text', 'Intenções de Compra')

    //Card Intenções de Compra - mensagem dentro do card
    cy.get('.md-dialog-content-body > .ng-binding')
        .should('be.visible')
        .and('have.text', 'O cliente selecionado possui produtos adicionados nas intenções de compra, deseja acessá-los?')

    //Card Intenções de Compra - validando botão SIM
    cy.get('.md-confirm-button')
        .should('be.visible')
        .and('not.be.disabled')
        .should('have.text', 'Sim')

    //Card Intenções de Compra - validando botão NÃO
    cy.get('.md-cancel-button')
        .should('be.visible')
        .and('not.be.disabled')
        .should('have.text', 'Não')
        .click({force:true})
}

//Função para escolher cliente CPF para gerar pedido de venda - pesquisa por cliente
export function clienteComRota (selector) {

    //inserir CPF/CNPJ no campo de cliente para podermos pesquisar pela lupa
    cy.get('.click-cliente > .informe-o-cliente > .cliente-header')
        .wait(500)
        .type('48976249089 {downArrow}')

    cy.intercept('/views/cliente/modalClientes.html').as('api_modalclientes');
    //clicar na lupa de pesquisa de clientes
    cy.get('.md-block > .ng-binding')
        .should('be.visible')
        .click()
    cy.wait('@api_modalclientes', { timeout: 40000 })

    // cy.wait(1000)

    cy.intercept('/services/v3/pedido_validar_cliente').as('api_pedido_validar_cliente');
    //após a pesquisa encontrar o cliente, vamos selecionar ele
    cy.get('.md-3-line > div.md-button > .md-no-style')
        .should('be.visible')
        .click()
    cy.wait('@api_pedido_validar_cliente', { timeout: 40000 })
}

//Botão para finalizar o pedido
export function botaoFinalizarPedido (selector) {

    cy.intercept('POST', '/services/v3/pedido_finalizar').as('api_pedido_finalizar')

    //Botão FINALIZAR PEDIDO
    cy.get('button.md-primary.btn-rounded.md-raised.btn-block.md-default-theme.md-ink-ripple[type="button"][ng-click="confirmarPedido()"]')
        .scrollIntoView()
        .wait(200)
        .should('be.visible')
        .and('not.be.disabled')
        .should('have.text', 'Finalizar pedido')

    //Clicar para finalizar pedido
    cy.get('button[ng-click="confirmarPedido()"]')
        .click({force:true})

    //Card pedido concluído (carregando finalização do pedido) - Título Pedido Concluído
    cy.get('.md-toolbar-tools h2.flex')
        .should('be.visible')
        .and('contain','Pedido Concluído')

    //Card pedido concluído (carregando finalização do pedido) - X para sair da aba
    cy.get('.md-content-overflow > :nth-child(1) > .md-toolbar-tools > .md-icon-button > .ng-binding')
        .should('be.visible')
        .and('not.have.attr', 'disabled')

    //Card pedido concluído (carregando finalização do pedido) - girando carregar
    cy.get('.layout-column > .md-accent')
        .should('be.visible')

    //Card pedido concluído (carregando finalização do pedido) - Mensagem Finalizando pedido...
    cy.get('.layout-column > h4')
        .should('be.visible')
        .and('have.text','Finalizando pedido...')

    //Card pedido concluído (carregando finalização do pedido) - ATENÇÃO
    cy.get('.layout-column > p > span')
        .should('be.visible')
        .and('have.text','ATENÇÃO:')
        .and('have.css', 'color', 'rgb(204, 0, 0)')

    //Card pedido concluído (carregando finalização do pedido) -  Não atualize a página ...
    cy.get('.layout-column > p')
        .should('be.visible')
        .and('contain','Não atualize a página enquanto o pedido estiver sendo finalizado.')
        .and('have.css', 'color', 'rgb(204, 0, 0)')

    cy.wait('@api_pedido_finalizar', { timeout: 40000 })
}

//Função para validar card de Pedido Concluído
export function pedidoGerado (selector) {

    //Card pedido gravado com sucesso - Título Pedido Concluído
    cy.get('.md-toolbar-tools h2.flex')
        .should('be.visible')
        .and('contain','Pedido Concluído')

    //Card pedido gravado com sucesso - X para sair da aba
    cy.get('.md-content-overflow > :nth-child(1) > .md-toolbar-tools > .md-icon-button > .ng-binding')
        .should('be.visible')
        .and('not.have.attr', 'disabled')

    //Card pedido gravado com sucesso - ícone check
    cy.get('.icon.success.animate')
        .should('exist')
        .find('.line.tip.animateSuccessTip')
        .should('exist')

    //Card pedido gravado com sucesso - Pedido gerado
    cy.get('.padding-10 > .layout-wrap > .flex-sm-50 > :nth-child(1)')
        .should('be.visible')
        .and('contain','Pedido gerado:')
        
    //Card pedido gravado com sucesso - Pedido gravado com sucesso
    cy.get('[ng-show="!editarPedido"]')
        .should('be.visible')
        .and('contain','Pedido gravado com sucesso!')

    //Card pedido gravado com sucesso - Número do Pedido gravado com sucesso
    cy.get('#pedido-numero')
        .should('be.visible')

    //Card pedido gravado com sucesso - Botão IMPRIMIR
    cy.get('md-dialog-actions.layout-align-center-center > .md-accent')
        .should('be.visible')
        .and('contain', 'Imprimir')
        .and('not.have.attr', 'disabled')

    //Card pedido gravado com sucesso - Botão OK
    cy.get('md-dialog-actions.layout-align-center-center > .md-primary')
        .should('be.visible')
        .and('contain', 'Ok')
        .and('not.have.attr', 'disabled')
}

//Arrastar botão de Retirada / Entrega
export function tirarEntrega (selector) {

    //Botão Retirada / Entrega parte esquerda
    cy.get('.valor.flex-gt-sm-50 > .md-checked > .md-container')
        .scrollIntoView()
        .wait(500)
        .should('be.visible')
        .and('not.be.disabled')

    //Botão Retirada / Entrega parte direita
    cy.get('.valor.flex-gt-sm-50 > .md-checked > .md-container > .md-thumb-container > .md-thumb')
        .should('be.visible')
        .and('not.be.disabled')

    //Botão Retirada / Entrega - texto Retirada / Entrega
    cy.get('.valor.flex-gt-sm-50 > .md-checked > .md-label')
        .should('be.visible')
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
        .should('be.visible')
        .and('not.be.disabled')

    //Botão Montagem parte direita
    cy.get('.produto-nome > .valor > .md-auto-horizontal-margin > .md-container > .md-thumb-container > .md-thumb')
        .should('be.visible')
        .and('not.be.disabled')

    //Botão Montagem - texto Montagem
    cy.get('.produto-nome > .valor > .md-auto-horizontal-margin > .md-label')
        .should('be.visible')
        .and('not.be.disabled')
        .and('have.text', ' Montagem ')
        .click({force:true})
}

//Arrastar botão de Retirada / Entrega do segundo produto
export function tirarEntregaSegundo (selector) {

    //Botão Retirada / Entrega parte esquerda
    cy.get(':nth-child(3) > .md-whiteframe-2dp > :nth-child(3) > [ng-show="itemAtual._permiteEntrega"] > .md-auto-horizontal-margin > .md-container')
        .scrollIntoView()
        .wait(500)
        .should('be.visible')
        .and('not.be.disabled')

    //Botão Retirada / Entrega parte direita
    cy.get(':nth-child(3) > .md-whiteframe-2dp > :nth-child(3) > [ng-show="itemAtual._permiteEntrega"] > .md-auto-horizontal-margin > .md-container > .md-thumb-container > .md-thumb')
        .should('be.visible')
        .and('not.be.disabled')

    //Botão Retirada / Entrega - texto Retirada / Entrega
    cy.get(':nth-child(3) > .md-whiteframe-2dp > :nth-child(3) > [ng-show="itemAtual._permiteEntrega"] > .md-auto-horizontal-margin > .md-label')
        .should('be.visible')
        .and('not.be.disabled')
        .and('have.text', ' Retirada / Entrega ')
        .click({force:true})
}

//Arrastar botão de Retirada / Entrega do terceiro produto
export function tirarEntregaTerceiro (selector) {

    //Botão Retirada / Entrega parte esquerda
    cy.get(':nth-child(4) > .md-whiteframe-2dp > :nth-child(3) > [ng-show="itemAtual._permiteEntrega"] > .md-auto-horizontal-margin > .md-container')
        .scrollIntoView()
        .wait(500)
        .should('be.visible')
        .and('not.be.disabled')

    //Botão Retirada / Entrega parte direita
    cy.get(':nth-child(4) > .md-whiteframe-2dp > :nth-child(3) > [ng-show="itemAtual._permiteEntrega"] > .md-auto-horizontal-margin > .md-container > .md-thumb-container > .md-thumb')
        .should('be.visible')
        .and('not.be.disabled')

    //Botão Retirada / Entrega - texto Retirada / Entrega
    cy.get(':nth-child(4) > .md-whiteframe-2dp > :nth-child(3) > [ng-show="itemAtual._permiteEntrega"] > .md-auto-horizontal-margin > .md-label')
        .should('be.visible')
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
        //.and('be.visible')
        .and('not.be.disabled')

    //Botão Montagem parte direita
    cy.get(':nth-child(3) > .md-whiteframe-2dp > :nth-child(3) > .produto-nome > .valor > .md-auto-horizontal-margin > .md-container > .md-thumb-container > .md-thumb')
        .should('be.visible')
        .and('not.be.disabled')

    //Botão Montagem - texto Montagem
    cy.get(':nth-child(3) > .md-whiteframe-2dp > :nth-child(3) > .produto-nome > .valor > .md-auto-horizontal-margin > .md-label')
        .should('be.visible')
        .and('not.be.disabled')
        .and('have.text', ' Montagem ')
        .click({force:true})
}

//Botão "GERAR PARCELAS"
export function botaoGerarParcelas (selector) {

    cy.intercept('POST', '/services/v3/pedido_forma_pagamento_lista').as('api_pedido_forma_pagamento_lista')
    cy.intercept('GET', '/views/carrinho/modalFormasPgto.html').as('api_modal_forma_pagamento')

    //Botão "GERAR PARCELAS" - validações
    cy.get('.gerar-parcelas > .layout-wrap > [style="padding: 0 5px"] > .md-primary')
        .scrollIntoView()
        .wait(200)
        .should('exist')
        .and('have.text', 'Gerar parcelas')

    //Botão "GERAR PARCELAS" - clicar
    cy.get('.gerar-parcelas > .layout-wrap > [style="padding: 0 5px"] > .md-primary')
        .click({force:true})
        
    cy.wait('@api_pedido_forma_pagamento_lista', { timeout: 40000 })
    cy.wait('@api_modal_forma_pagamento', { timeout: 40000 })
}

//escolhendo forma de pagamento do pedido de venda
export function escolherFormaPagamentoPrincipal (selector) {

    //validando título Forma de pagamento
    cy.get('.md-dialog-fullscreen > .md-primary > .md-toolbar-tools > .flex')
        .should('exist')
        //.and('be.visible')
        .and('have.text','Forma de pagamento')

    //validando botão X
    cy.get('.md-dialog-fullscreen > .md-primary > .md-toolbar-tools > .md-icon-button')
        .should('be.visible')
        .and('not.be.disabled')

    //escolhendo forma de pagamento - 3860
    cy.get('[style=""] > md-collapsible-header.layout-row > .md-collapsible-tools > .ng-scope')
        .should('be.visible')
        .and('not.be.disabled')
        .click({force:true})
}

//escolhendo parcelas da forma de pagamento escolhida - 2X
export function escolherDuasParcelaPagamento (selector) {

    //selecionando parcelas - 2X
    cy.get('.active > md-collapsible-body > .layout-column > [style="position: relative"] > :nth-child(2) > div.ng-binding')
        .should('be.visible')
        .and('not.be.disabled')
        .click({force:true})
}

//Carregamento de forma de pagamento, quando clicamos no botão Gerar parcelas
export function carregandoFormaPagamento (selector) {

    //Modal Forma de pagamento - título Forma de pagamento
    cy.get('.md-dialog-fullscreen > .md-primary > .md-toolbar-tools > .flex')
        .should('be.visible')
        .and('have.text', 'Forma de pagamento')

    //botão x do modal Serviços Vinculados
    cy.get('.md-dialog-fullscreen > .md-primary > .md-toolbar-tools > .md-icon-button > .ng-binding')
        .should('be.visible')
        .and('not.be.disabled')
}

//Para escolher processo de venda 9860 normal
export function processoVendaPrincipal (selector) {

    //clicar para aparecer as opções de processo
    cy.get('#select_value_label_4 > .md-select-icon')
        .should('be.visible')
        .and('not.be.disabled')
        .click()

    //rolar para o meio das opções de processo
    cy.get('#select_listbox_12')
        .should('be.visible')
        .scrollTo('center')

    //selecionar processo de venda "9860"
    cy.get('.md-text.ng-binding')
        .contains('9860 - T.A. Pedido Negociável')
        .click({force:true})

    //fechar modal de processos
    cy.get('.md-select-backdrop')
        .wait(200)
        .dblclick()
        .wait(200) 
}

//Botão para avançar para a tela de Gerar parcelas - com intercept
export function avancarParaParcelas (selector) {

    cy.intercept('GET', '/views/list-action-buttons.html').as('api_tela_pagamento')

    cy.wait(500)

    cy.get('.flex-gt-sm-50 > .md-primary')
        .scrollIntoView()
        .wait(200)
        .should('be.visible')
        .and('contain','Avançar')

    //Clicar para avançar para a tela de GERAR PARCELAS
    cy.get('.flex-gt-sm-50 > .md-primary')
        .click({force:true})

    //Validando carregamento do ícone de "Adicionando produtos/serviços..."
    cy.get('.conteudo > .layout-align-center-center > .md-accent')
        .should('be.visible')

    //Validando mensagem de carregamento -  "Adicionando produtos/serviços..."
    cy.get('h3')
        .should('be.visible')
        .and('have.text','Adicionando produtos/serviços...')

    cy.wait('@api_tela_pagamento', { timeout: 40000 })
}

//Botão para avançar para a tela de escolher transportadora e rota - com intercept
export function avancarParaTransportadora (selector) {

    cy.intercept('GET', '/views/carrinho/endereco.html').as('apiEndereco')
    cy.intercept('GET', '/services/v3/cidade?uf=PR').as('apiCidade')

    cy.get('.flex-gt-sm-50 > .md-primary')
        .scrollIntoView()
        .wait(200)
        .should('be.visible')
        //.and('not.be.disabled')
        .and('contain','Avançar')

    //Clicar para avançar para a tela de GERAR PARCELAS
    cy.get('.flex-gt-sm-50 > .md-primary')
        .dblclick({force:true})

    cy.wait(2000)

    //Validando carregamento do ícone de "Adicionando produtos/serviços..."
    cy.get('.conteudo > .layout-align-center-center > .md-accent')
        .should('be.visible')

    //Validando mensagem de carregamento -  "Adicionando produtos/serviços..."
    cy.get('h3')
        .should('be.visible')
        .and('have.text','Adicionando produtos/serviços...')

    cy.wait('@apiEndereco', { timeout: 40000 })
    cy.wait('@apiCidade', { timeout: 40000 })
}


//Botão para avançar para a tela de Gerar parcelas - com intercept
export function avancarParcelasEntrega (selector) {

    cy.intercept('GET', '/views/list-action-buttons.html').as('api_tela_pagamento')

    cy.get('.layout-align-end-end > :nth-child(2) > .md-primary')
        .scrollIntoView()
        .wait(200)
        .should('be.visible')
        .and('not.be.disabled')
        .and('contain','Avançar')

    //Clicar para avançar para a tela de GERAR PARCELAS
    cy.get('.layout-align-end-end > :nth-child(2) > .md-primary')
        .click({force:true})

    cy.wait('@api_tela_pagamento', { timeout: 40000 })
}

//Botão AVANÇAR, da tela antes de finalizar o pedido - com intercept
export function avancarFinal (selector) {

    cy.intercept('GET', '/views/carrinho/confirmacao.html').as('api_carinho_confirmacao')

    //Botão "AVANÇAR"
    cy.get('.layout-align-end-end > :nth-child(2) > .md-primary')
        .scrollIntoView()
        .wait(200)
        .should('be.visible')
        .and('not.be.disabled')
        .and('contain','Avançar')

    //Botão "AVANÇAR" - clicar
    cy.get('.layout-align-end-end > :nth-child(2) > .md-primary')
        .click({force:true})

    cy.wait('@api_carinho_confirmacao', { timeout: 40000 })
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

//Clicar para selecionar a voltagem que queremos adicionar ao pedido
export function escolherVoltagemProduto (selector) {

    //Mensagem "Selecione a cor, a voltagem e o local de saldo "
    cy.get('md-list.md-default-theme > .btn-rounded > .md-toolbar-tools > .flex')
        .should('be.visible')
        .and('have.text', 'Selecione a cor, a voltagem e o local de saldo')

    //Botão de expandir produto
    cy.get('.layout-align-end-center > .md-fab')
        .should('be.visible')
        .and('not.be.disabled')

    //ícone do botão de expandir produto
    cy.get('.layout-align-end-center > .md-fab')
        .should('be.visible')
        .and('not.be.disabled')

    //Card de voltagem - Cifrão
    cy.get('.md-secondary-container > div > .ng-binding > sup')
        .should('be.visible')
        .and('have.text', 'R$')

    //Card de voltagem 
    cy.get('.md-list-item-inner')
        .should('be.visible')
        .and('contain', 'Cód. Fabricante:')
        .and('contain', 'Filial:')
        .and('contain', 'Saldo Local:')
        .and('contain', 'Saldo Depósito:')

    //Card de voltagem - clicar
    cy.get(':nth-child(1) > md-list.md-default-theme > .md-2-line > div.md-button > .md-no-style')
        .click({force:true})
}

//Botão adicionar produto após selecionar voltagem do produto
export function clicarAdicionarProduto (selector) {

    //Botão adicionar produto após selecionar voltagem do produto
    cy.get('[style="padding: 0px 5px;"] > .md-accent')
        .scrollIntoView()
        .wait(200)
        .should('be.visible')
        .and('not.be.disabled')
        .and('contain','Adicionar')

    //Botão adicionar produto após selecionar voltagem do produto, clicar no botão
    cy.get('[style="padding: 0px 5px;"] > .md-accent')
        .click({force:true})
}

//Card Inconsistências - rota e transportadora
export function modalInconsRotaTransp (selector) {

    //Título Inconsistências
    cy.get('.md-dialog-fullscreen > :nth-child(1) > .md-toolbar-tools > .flex')
        .should('be.visible')
        .and('have.text', 'Inconsistências')

    //Mensagem dentro do modal - "Restriçoes geradas (triais), por favor comunique à seu gerente:"
    cy.get(':nth-child(1) > h3')
        .should('be.visible')
        .and('have.text', 'Restriçoes geradas (triais), por favor comunique à seu gerente:')

    //Título Processo de venda - Processo de venda
    cy.get('.ng-scope.flex-100 > .md-primary > .md-toolbar-tools > h2')
        .should('be.visible')
        .and('have.text', 'Processo de venda')

    //Primeiro ícone Inconsistências
    cy.get(':nth-child(1) > .md-avatar-icon')
        .should('be.visible')

    //Mensagem "A Rota é obrigatória."
    cy.get(':nth-child(1) > .md-list-item-text > .no-truncate')
        .should('be.visible')
        .and('have.text', 'A Rota é obrigatória.')

    //Segundo ícone Inconsistências
    cy.get(':nth-child(1) > .md-avatar-icon')
        .should('be.visible')

    //Mensagem "Pedidos referêntes a NFC-e com definição de entrega deverão possuir entidade transportadora preenchida, favor verificar."
    cy.get(':nth-child(2) > .md-list-item-text > .no-truncate')
        .should('be.visible')
        .and('have.text', 'Pedidos referêntes a NFC-e com definição de entrega deverão possuir entidade transportadora preenchida, favor verificar.')
    
    //Botão X para fechar
    cy.get('.md-dialog-fullscreen > :nth-child(1) > .md-toolbar-tools > .md-icon-button > .ng-binding')
        .should('be.visible')
        .and('not.be.disabled')
        .click({force:true})

    cy.wait(5000)

    cy.get('.md-dialog-fullscreen > :nth-child(1) > .md-toolbar-tools > .md-icon-button > .ng-binding')
        .should('be.visible')
        .and('not.be.disabled')
        .click({force:true})
}

//Card Inconsistências - apenas transportadora
export function modalInconsApenasTransp (selector) {

    //Título Inconsistências
    cy.get('.md-dialog-fullscreen > :nth-child(1) > .md-toolbar-tools > .flex')
        .should('be.visible')
        .and('have.text', 'Inconsistências')

    //Mensagem dentro do modal - "Restriçoes geradas (triais), por favor comunique à seu gerente:"
    cy.get(':nth-child(1) > h3')
        .should('be.visible')
        .and('have.text', 'Restriçoes geradas (triais), por favor comunique à seu gerente:')

    //Título Processo de venda - Processo de venda
    cy.get('.ng-scope.flex-100 > .md-primary > .md-toolbar-tools > h2')
        .should('be.visible')
        .and('have.text', 'Processo de venda')

    //Ícone Inconsistências
    cy.get('.md-avatar-icon')
        .should('be.visible')

    //Mensagem "Pedidos referêntes a NFC-e com definição de entrega deverão possuir entidade transportadora preenchida, favor verificar."
    cy.get('.no-truncate')
        .should('be.visible')
        .and('have.text', 'Pedidos referêntes a NFC-e com definição de entrega deverão possuir entidade transportadora preenchida, favor verificar.')
    
    //Botão X para fechar
    cy.get('.md-dialog-fullscreen > :nth-child(1) > .md-toolbar-tools > .md-icon-button > .ng-binding')
        .should('be.visible')
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
        .should('be.visible')
        .and('have.text', 'Inconsistências')

    //Mensagem dentro do modal - "Restriçoes geradas (triais), por favor comunique à seu gerente:"
    cy.get(':nth-child(1) > h3')
        .should('be.visible')
        .and('have.text', 'Restriçoes geradas (triais), por favor comunique à seu gerente:')

    //Título Processo de venda - Processo de venda
    cy.get('.ng-scope.flex-100 > .md-primary > .md-toolbar-tools > h2')
        .should('be.visible')
        .and('have.text', 'Processo de venda')

    //Ícone Inconsistências
    cy.get('.md-avatar-icon')
        .should('be.visible')

    //Mensagem "Pedidos referêntes a NFC-e com definição de entrega deverão possuir entidade transportadora preenchida, favor verificar."
    cy.get('.no-truncate')
        .should('be.visible')
        .and('have.text', 'A Rota é obrigatória.')
    
    //Botão X para fechar
    cy.get('.md-dialog-fullscreen > :nth-child(1) > .md-toolbar-tools > .md-icon-button > .ng-binding')
        .should('be.visible')
        .and('not.be.disabled')
        .click({force:true})

    cy.wait(5000)

    //Botão X para fechar
    cy.get('.md-dialog-fullscreen > :nth-child(1) > .md-toolbar-tools > .md-icon-button > .ng-binding')
        .click({force:true})
}

//preencher pagamento entrada
export function escolherEntradaFormaPagamento (selector) {

    //texto "Valor máximo da entrada"
    cy.get('[ng-show="carrinho.getValorParcelamento() > 0"] > .btn-rounded > .layout-wrap > :nth-child(1) > md-list.md-default-theme > .padding-0 > .md-list-item-text > p')
        .should('be.visible')

    //R$ do Valor máximo da entrada
    cy.get('[ng-show="carrinho.getValorParcelamento() > 0"] > .btn-rounded > .layout-wrap > :nth-child(1) > md-list.md-default-theme > .padding-0 > .md-secondary-container > div > .ng-binding > sup')
        .should('be.visible')
        .and('have.text', 'R$')

    //Valor do Valor máximo da entrada
    cy.get('[ng-show="carrinho.getValorParcelamento() > 0"] > .btn-rounded > .layout-wrap > :nth-child(1) > md-list.md-default-theme > .padding-0 > .md-secondary-container > div > .ng-binding')
        .should('be.visible')

    //botão $
    cy.get('.layout-row.flex-100 > :nth-child(1) > .md-fab')
        .should('be.visible')
        .and('not.be.disabled')

    //botão X
    cy.get(':nth-child(3) > .md-fab')
        .should('be.visible')
        .and('not.be.disabled')

    //Campo máximo da parcela
    cy.get('input.campoMoeda_totalEntrada')
        .should('be.visible')
        .type('30000')

    //clicando em "Formas de pagamento na Entrada" para abrir forma de pagamento de entrada
    cy.get('[flex="100"][ng-show="(exibeBoxFormasPgtoEntrada)"] > .md-primary > .md-toolbar-tools > .flex')
        .click({force:true})

    //clicando para abrir formas de pagamento disponíveis
    cy.get('div.md-text.ng-binding')
        .contains('3861 - T.A. A Receber A Vista')
        .click({force:true})
}

//validando e clicando no botão GERAR PAGAMENTO
export function clicarGerarPagamento (selector) {

    //botão
    cy.get('.white > .layout-align-center-center > .md-primary')
        .should('be.visible')
        .and('not.be.disabled')
        .and('have.text', 'Gerar pagamento')
        .click({force:true})
}

//validando composição deste KIT
export function composicaoDesteKit (selector) {

    cy.get('.is-expanded > v-pane-header.ng-scope > div')
        .scrollIntoView()
        .wait(200)
        .should('be.visible')
        .and('contain', 'Composição deste KIT')
}

// produto
export function produtoPrincipal (selector) {

    const produto_principal = '1907'

    cy.intercept('GET', '/consultaprodutos/10050/10006%20OR%2010050%20OR%2010102%20OR%2010032%20OR%2010048/(servico:false%20OR%20(servico:true%20AND%20processos:*9860*))%20AND%20(codigo:*1907*%20codigo:1907%20OR%20nome:*1907*%20OR%20codigo:*1907*%20OR%20nomeecommerce:*1907*%20OR%20marca_descricao:*1907*)%20AND%20valor_filial_10050:%5B0%20TO%20*%5D/ativo:true/max(termfreq(filiais_com_saldo,10006),termfreq(filiais_com_saldo,10050),termfreq(filiais_com_saldo,10102),termfreq(filiais_com_saldo,10032),termfreq(filiais_com_saldo,10048))%20DESC,max(termfreq(filiais_com_promocao,10006),termfreq(filiais_com_promocao,10050),termfreq(filiais_com_promocao,10102),termfreq(filiais_com_promocao,10032),termfreq(filiais_com_promocao,10048))%20DESC,score%20DESC,valor_filial_10050%20ASC/50/0').as('apiConsultaProdutos')

    //Limpando campo com o produto anterior
    cy.get('#searchText')
        .clear()
        .wait(400)

    //Prenchendo campo Buscar produto
    cy.get('#searchText')
        .type(produto_principal)
        .wait(100)

    cy.wait('@apiConsultaProdutos', { timeout: 40000 })
}

//Clicar para selecionar o produto que queremos adicionar ao pedido - sem validações
export function escolherProdutoPesquisa (selector) {

    cy.intercept('GET', '/services/v3/produto_tambem_compraram?lista=1907').as('api_produto_tambem_compraram')

    //Clicar para adicionar no carrinho
    cy.get('.md-list-item-text')
        .click({force:true})

    cy.wait('@api_produto_tambem_compraram', { timeout: 40000 })
}

//escolher voltagem, clicar botão Adicionar e tirar entrega - 1907 1 1
export function addproduto1 (selector) {

    cy.intercept('GET', '/services/v3/local_saldo?filial_saldo=10050&sku=1907.1.1').as('api_local_saldo')
    //Card de voltagem - clicar
    cy.get(':nth-child(1) > md-list.md-default-theme > [style=""] > div.md-button > .md-no-style')
        .click({force:true})
    cy.wait('@api_local_saldo', { timeout: 40000 })

    //cy.intercept('POST', '/services/v3/executar_filtro').as('api_executar_filtro')
    //Botão adicionar produto após selecionar voltagem do produto, clicar no botão
    cy.get('[style="padding: 0px 5px;"] > .md-accent')
        .click({force:true})
    //cy.wait('@api_executar_filtro', { timeout: 40000 })

    //Botão Retirada / Entrega - texto Retirada / Entrega
    cy.get('[ng-show="itemAtual._permiteEntrega"] > .md-auto-horizontal-margin > .md-label')
        .click({force:true})
}

//escolher voltagem, clicar botão Adicionar e tirar entrega - 1907 2 2
export function addproduto2 (selector) {

    cy.intercept('GET', '/services/v3/local_saldo?filial_saldo=10050&sku=1907.2.2').as('api_local_saldo')
    //Card de voltagem - clicar
    cy.get(':nth-child(1) > md-list.md-default-theme > :nth-child(3) > div.md-button > .md-no-style')
        .click({force:true})
    cy.wait('@api_local_saldo', { timeout: 40000 })

    //cy.intercept('POST', '/services/v3/executar_filtro').as('api_executar_filtro')
    //Botão adicionar produto após selecionar voltagem do produto, clicar no botão
    cy.get('[style="padding: 0px 5px;"] > .md-accent')
        .click({force:true})
    //cy.wait('@api_executar_filtro', { timeout: 40000 })

    //Botão Retirada / Entrega - texto Retirada / Entrega
    cy.get('.md-checked > .md-label')
        .click({force:true})
}

//escolher voltagem, clicar botão Adicionar e tirar entrega - 1907 3 3
export function addproduto3 (selector) {

    cy.intercept('GET', '/services/v3/local_saldo?filial_saldo=10050&sku=1907.3.3').as('api_local_saldo')
    //Card de voltagem - clicar
    cy.get(':nth-child(1) > md-list.md-default-theme > :nth-child(4) > div.md-button > .md-no-style')
        .click({force:true})
    cy.wait('@api_local_saldo', { timeout: 40000 })

    //cy.intercept('POST', '/services/v3/executar_filtro').as('api_executar_filtro')
    //Botão adicionar produto após selecionar voltagem do produto, clicar no botão
    cy.get('[style="padding: 0px 5px;"] > .md-accent')
        .click({force:true})
    //cy.wait('@api_executar_filtro', { timeout: 40000 })

    //Botão Retirada / Entrega - texto Retirada / Entrega
    cy.get('.md-checked > .md-label')
        .click({force:true})
}

//escolher voltagem, clicar botão Adicionar e tirar entrega - 1907 4 4
export function addproduto4 (selector) {

    cy.intercept('GET', '/services/v3/local_saldo?filial_saldo=10050&sku=1907.4.4').as('api_local_saldo')
    //Card de voltagem - clicar
    cy.get(':nth-child(1) > md-list.md-default-theme > :nth-child(4) > div.md-button > .md-no-style')
        .click({force:true})
    cy.wait('@api_local_saldo', { timeout: 40000 })

    //cy.intercept('POST', '/services/v3/executar_filtro').as('api_executar_filtro')
    //Botão adicionar produto após selecionar voltagem do produto, clicar no botão
    cy.get('[style="padding: 0px 5px;"] > .md-accent')
        .click({force:true})
    //cy.wait('@api_executar_filtro', { timeout: 40000 })

    //Botão Retirada / Entrega - texto Retirada / Entrega
    cy.get('.md-checked > .md-label')
        .click({force:true})
}

//escolher voltagem, clicar botão Adicionar e tirar entrega - 1907 5 5
export function addproduto5 (selector) {

    cy.intercept('GET', '/services/v3/local_saldo?filial_saldo=10050&sku=1907.5.5').as('api_local_saldo')
    //Card de voltagem - clicar
    cy.get(':nth-child(1) > md-list.md-default-theme > :nth-child(4) > div.md-button > .md-no-style')
        .click({force:true})
    cy.wait('@api_local_saldo', { timeout: 40000 })

    //cy.intercept('POST', '/services/v3/executar_filtro').as('api_executar_filtro')
    //Botão adicionar produto após selecionar voltagem do produto, clicar no botão
    cy.get('[style="padding: 0px 5px;"] > .md-accent')
        .click({force:true})
    //cy.wait('@api_executar_filtro', { timeout: 40000 })

    //Botão Retirada / Entrega - texto Retirada / Entrega
    cy.get('.md-checked > .md-label')
        .click({force:true})
}

//escolher voltagem, clicar botão Adicionar e tirar entrega - 1907 6 6
export function addproduto6 (selector) {

    cy.intercept('GET', '/services/v3/local_saldo?filial_saldo=10050&sku=1907.6.6').as('api_local_saldo')
    //Card de voltagem - clicar
    cy.get(':nth-child(1) > md-list.md-default-theme > :nth-child(4) > div.md-button > .md-no-style')
        .click({force:true})
    cy.wait('@api_local_saldo', { timeout: 40000 })

    //cy.intercept('POST', '/services/v3/executar_filtro').as('api_executar_filtro')
    //Botão adicionar produto após selecionar voltagem do produto, clicar no botão
    cy.get('[style="padding: 0px 5px;"] > .md-accent')
        .click({force:true})
    //cy.wait('@api_executar_filtro', { timeout: 40000 })

    //Botão Retirada / Entrega - texto Retirada / Entrega
    cy.get('.md-checked > .md-label')
        .click({force:true})
}

//escolher voltagem, clicar botão Adicionar e tirar entrega - 1907 7 7
export function addproduto7 (selector) {

    cy.intercept('GET', '/services/v3/local_saldo?filial_saldo=10050&sku=1907.7.7').as('api_local_saldo')
    //Card de voltagem - clicar
    cy.get(':nth-child(1) > md-list.md-default-theme > :nth-child(4) > div.md-button > .md-no-style')
        .click({force:true})
    cy.wait('@api_local_saldo', { timeout: 40000 })

    //cy.intercept('POST', '/services/v3/executar_filtro').as('api_executar_filtro')
    //Botão adicionar produto após selecionar voltagem do produto, clicar no botão
    cy.get('[style="padding: 0px 5px;"] > .md-accent')
        .click({force:true})
    //cy.wait('@api_executar_filtro', { timeout: 40000 })

    //Botão Retirada / Entrega - texto Retirada / Entrega
    cy.get('.md-checked > .md-label')
        .click({force:true})
}

//escolher voltagem, clicar botão Adicionar e tirar entrega - 1907 8 8
export function addproduto8 (selector) {

    cy.intercept('GET', '/services/v3/local_saldo?filial_saldo=10050&sku=1907.8.8').as('api_local_saldo')
    //Card de voltagem - clicar
    cy.get(':nth-child(1) > md-list.md-default-theme > :nth-child(4) > div.md-button > .md-no-style')
        .click({force:true})
    cy.wait('@api_local_saldo', { timeout: 40000 })

    //cy.intercept('POST', '/services/v3/executar_filtro').as('api_executar_filtro')
    //Botão adicionar produto após selecionar voltagem do produto, clicar no botão
    cy.get('[style="padding: 0px 5px;"] > .md-accent')
        .click({force:true})
    //cy.wait('@api_executar_filtro', { timeout: 40000 })

    //Botão Retirada / Entrega - texto Retirada / Entrega
    cy.get('.md-checked > .md-label')
        .click({force:true})
}

//escolher voltagem, clicar botão Adicionar e tirar entrega - 1907 9 9
export function addproduto9 (selector) {

    cy.intercept('GET', '/services/v3/local_saldo?filial_saldo=10050&sku=1907.9.9').as('api_local_saldo')
    //Card de voltagem - clicar
    cy.get(':nth-child(1) > md-list.md-default-theme > :nth-child(4) > div.md-button > .md-no-style')
        .click({force:true})
    cy.wait('@api_local_saldo', { timeout: 40000 })

    //cy.intercept('POST', '/services/v3/executar_filtro').as('api_executar_filtro')
    //Botão adicionar produto após selecionar voltagem do produto, clicar no botão
    cy.get('[style="padding: 0px 5px;"] > .md-accent')
        .click({force:true})
    //cy.wait('@api_executar_filtro', { timeout: 40000 })

    //Botão Retirada / Entrega - texto Retirada / Entrega
    cy.get('.md-checked > .md-label')
        .click({force:true})
}

//escolher voltagem, clicar botão Adicionar e tirar entrega - 1907 10 10
export function addproduto10 (selector) {

    cy.intercept('GET', '/services/v3/local_saldo?filial_saldo=10050&sku=1907.10.10').as('api_local_saldo')
    //Card de voltagem - clicar
    cy.get(':nth-child(1) > md-list.md-default-theme > :nth-child(4) > div.md-button > .md-no-style')
        .click({force:true})
    cy.wait('@api_local_saldo', { timeout: 40000 })

    //cy.intercept('POST', '/services/v3/executar_filtro').as('api_executar_filtro')
    //Botão adicionar produto após selecionar voltagem do produto, clicar no botão
    cy.get('[style="padding: 0px 5px;"] > .md-accent')
        .click({force:true})
    //cy.wait('@api_executar_filtro', { timeout: 40000 })

    //Botão Retirada / Entrega - texto Retirada / Entrega
    cy.get('.md-checked > .md-label')
        .click({force:true})
}

//escolher voltagem, clicar botão Adicionar e tirar entrega - 1907 11 11
export function addproduto11 (selector) {

    cy.intercept('GET', '/services/v3/local_saldo?filial_saldo=10050&sku=1907.11.11').as('api_local_saldo')
    //Card de voltagem - clicar
    cy.get(':nth-child(1) > md-list.md-default-theme > :nth-child(4) > div.md-button > .md-no-style')
        .click({force:true})
    cy.wait('@api_local_saldo', { timeout: 40000 })

    //cy.intercept('POST', '/services/v3/executar_filtro').as('api_executar_filtro')
    //Botão adicionar produto após selecionar voltagem do produto, clicar no botão
    cy.get('[style="padding: 0px 5px;"] > .md-accent')
        .click({force:true})
    //cy.wait('@api_executar_filtro', { timeout: 40000 })

    //Botão Retirada / Entrega - texto Retirada / Entrega
    cy.get('.md-checked > .md-label')
        .click({force:true})
}

//escolher voltagem, clicar botão Adicionar e tirar entrega - 1907 12 12
export function addproduto12 (selector) {

    cy.intercept('GET', '/services/v3/local_saldo?filial_saldo=10050&sku=1907.12.12').as('api_local_saldo')
    //Card de voltagem - clicar
    cy.get(':nth-child(1) > md-list.md-default-theme > :nth-child(4) > div.md-button > .md-no-style')
        .click({force:true})
    cy.wait('@api_local_saldo', { timeout: 40000 })

    //cy.intercept('POST', '/services/v3/executar_filtro').as('api_executar_filtro')
    //Botão adicionar produto após selecionar voltagem do produto, clicar no botão
    cy.get('[style="padding: 0px 5px;"] > .md-accent')
        .click({force:true})
    //cy.wait('@api_executar_filtro', { timeout: 40000 })

    //Botão Retirada / Entrega - texto Retirada / Entrega
    cy.get('.md-checked > .md-label')
        .click({force:true})
}

//escolher voltagem, clicar botão Adicionar e tirar entrega - 1907 13 13
export function addproduto13 (selector) {

    cy.intercept('GET', '/services/v3/local_saldo?filial_saldo=10050&sku=1907.13.13').as('api_local_saldo')
    //Card de voltagem - clicar
    cy.get(':nth-child(1) > md-list.md-default-theme > :nth-child(4) > div.md-button > .md-no-style')
        .click({force:true})
    cy.wait('@api_local_saldo', { timeout: 40000 })

    //cy.intercept('POST', '/services/v3/executar_filtro').as('api_executar_filtro')
    //Botão adicionar produto após selecionar voltagem do produto, clicar no botão
    cy.get('[style="padding: 0px 5px;"] > .md-accent')
        .click({force:true})
    //cy.wait('@api_executar_filtro', { timeout: 40000 })

    //Botão Retirada / Entrega - texto Retirada / Entrega
    cy.get('.md-checked > .md-label')
        .click({force:true})
}

//escolher voltagem, clicar botão Adicionar e tirar entrega - 1907 14 14
export function addproduto14 (selector) {

    cy.intercept('GET', '/services/v3/local_saldo?filial_saldo=10050&sku=1907.14.14').as('api_local_saldo')
    //Card de voltagem - clicar
    cy.get(':nth-child(1) > md-list.md-default-theme > :nth-child(4) > div.md-button > .md-no-style')
        .click({force:true})
    cy.wait('@api_local_saldo', { timeout: 40000 })

    //cy.intercept('POST', '/services/v3/executar_filtro').as('api_executar_filtro')
    //Botão adicionar produto após selecionar voltagem do produto, clicar no botão
    cy.get('[style="padding: 0px 5px;"] > .md-accent')
        .click({force:true})
    //cy.wait('@api_executar_filtro', { timeout: 40000 })

    //Botão Retirada / Entrega - texto Retirada / Entrega
    cy.get('.md-checked > .md-label')
        .click({force:true})
}

//escolher voltagem, clicar botão Adicionar e tirar entrega - 1907 15 15
export function addproduto15 (selector) {

    cy.intercept('GET', '/services/v3/local_saldo?filial_saldo=10050&sku=1907.15.15').as('api_local_saldo')
    //Card de voltagem - clicar
    cy.get(':nth-child(1) > md-list.md-default-theme > :nth-child(4) > div.md-button > .md-no-style')
        .click({force:true})
    cy.wait('@api_local_saldo', { timeout: 40000 })

    //cy.intercept('POST', '/services/v3/executar_filtro').as('api_executar_filtro')
    //Botão adicionar produto após selecionar voltagem do produto, clicar no botão
    cy.get('[style="padding: 0px 5px;"] > .md-accent')
        .click({force:true})
    //cy.wait('@api_executar_filtro', { timeout: 40000 })

    //Botão Retirada / Entrega - texto Retirada / Entrega
    cy.get('.md-checked > .md-label')
        .click({force:true})
}

//escolher voltagem, clicar botão Adicionar e tirar entrega - 1907 16 16
export function addproduto16 (selector) {

    cy.intercept('GET', '/services/v3/local_saldo?filial_saldo=10050&sku=1907.16.16').as('api_local_saldo')
    //Card de voltagem - clicar
    cy.get(':nth-child(1) > md-list.md-default-theme > :nth-child(4) > div.md-button > .md-no-style')
        .click({force:true})
    cy.wait('@api_local_saldo', { timeout: 40000 })

    //cy.intercept('POST', '/services/v3/executar_filtro').as('api_executar_filtro')
    //Botão adicionar produto após selecionar voltagem do produto, clicar no botão
    cy.get('[style="padding: 0px 5px;"] > .md-accent')
        .click({force:true})
    //cy.wait('@api_executar_filtro', { timeout: 40000 })

    //Botão Retirada / Entrega - texto Retirada / Entrega
    cy.get('.md-checked > .md-label')
        .click({force:true})
}

//escolher voltagem, clicar botão Adicionar e tirar entrega - 1907 17 17
export function addproduto17 (selector) {

    cy.intercept('GET', '/services/v3/local_saldo?filial_saldo=10050&sku=1907.17.17').as('api_local_saldo')
    //Card de voltagem - clicar
    cy.get(':nth-child(1) > md-list.md-default-theme > :nth-child(4) > div.md-button > .md-no-style')
        .click({force:true})
    cy.wait('@api_local_saldo', { timeout: 40000 })

    //cy.intercept('POST', '/services/v3/executar_filtro').as('api_executar_filtro')
    //Botão adicionar produto após selecionar voltagem do produto, clicar no botão
    cy.get('[style="padding: 0px 5px;"] > .md-accent')
        .click({force:true})
    //cy.wait('@api_executar_filtro', { timeout: 40000 })

    //Botão Retirada / Entrega - texto Retirada / Entrega
    cy.get('.md-checked > .md-label')
        .click({force:true})
}

//escolher voltagem, clicar botão Adicionar e tirar entrega - 1907 18 18
export function addproduto18 (selector) {

    cy.intercept('GET', '/services/v3/local_saldo?filial_saldo=10050&sku=1907.18.18').as('api_local_saldo')
    //Card de voltagem - clicar
    cy.get(':nth-child(1) > md-list.md-default-theme > :nth-child(4) > div.md-button > .md-no-style')
        .click({force:true})
    cy.wait('@api_local_saldo', { timeout: 40000 })

    //cy.intercept('POST', '/services/v3/executar_filtro').as('api_executar_filtro')
    //Botão adicionar produto após selecionar voltagem do produto, clicar no botão
    cy.get('[style="padding: 0px 5px;"] > .md-accent')
        .click({force:true})
    //cy.wait('@api_executar_filtro', { timeout: 40000 })

    //Botão Retirada / Entrega - texto Retirada / Entrega
    cy.get('.md-checked > .md-label')
        .click({force:true})
}

//escolher voltagem, clicar botão Adicionar e tirar entrega - 1907 19 19
export function addproduto19 (selector) {

    cy.intercept('GET', '/services/v3/local_saldo?filial_saldo=10050&sku=1907.19.19').as('api_local_saldo')
    //Card de voltagem - clicar
    cy.get(':nth-child(1) > md-list.md-default-theme > :nth-child(4) > div.md-button > .md-no-style')
        .click({force:true})
    cy.wait('@api_local_saldo', { timeout: 40000 })

    //cy.intercept('POST', '/services/v3/executar_filtro').as('api_executar_filtro')
    //Botão adicionar produto após selecionar voltagem do produto, clicar no botão
    cy.get('[style="padding: 0px 5px;"] > .md-accent')
        .click({force:true})
    //cy.wait('@api_executar_filtro', { timeout: 40000 })

    //Botão Retirada / Entrega - texto Retirada / Entrega
    cy.get('.md-checked > .md-label')
        .click({force:true})
}

//escolher voltagem, clicar botão Adicionar e tirar entrega - 1907 20 20
export function addproduto20 (selector) {

    cy.intercept('GET', '/services/v3/local_saldo?filial_saldo=10050&sku=1907.20.20').as('api_local_saldo')
    //Card de voltagem - clicar
    cy.get(':nth-child(1) > md-list.md-default-theme > :nth-child(4) > div.md-button > .md-no-style')
        .click({force:true})
    cy.wait('@api_local_saldo', { timeout: 40000 })

    //cy.intercept('POST', '/services/v3/executar_filtro').as('api_executar_filtro')
    //Botão adicionar produto após selecionar voltagem do produto, clicar no botão
    cy.get('[style="padding: 0px 5px;"] > .md-accent')
        .click({force:true})
    //cy.wait('@api_executar_filtro', { timeout: 40000 })

    //Botão Retirada / Entrega - texto Retirada / Entrega
    cy.get('.md-checked > .md-label')
        .click({force:true})
}

//escolher voltagem, clicar botão Adicionar e tirar entrega - 1907 21 21
export function addproduto21 (selector) {

    cy.intercept('GET', '/services/v3/local_saldo?filial_saldo=10050&sku=1907.21.21').as('api_local_saldo')
    //Card de voltagem - clicar
    cy.get(':nth-child(1) > md-list.md-default-theme > :nth-child(4) > div.md-button > .md-no-style')
        .click({force:true})
    cy.wait('@api_local_saldo', { timeout: 40000 })

    //cy.intercept('POST', '/services/v3/executar_filtro').as('api_executar_filtro')
    //Botão adicionar produto após selecionar voltagem do produto, clicar no botão
    cy.get('[style="padding: 0px 5px;"] > .md-accent')
        .click({force:true})
    //cy.wait('@api_executar_filtro', { timeout: 40000 })

    //Botão Retirada / Entrega - texto Retirada / Entrega
    cy.get('.md-checked > .md-label')
        .click({force:true})
}

//escolher voltagem, clicar botão Adicionar e tirar entrega - 1907 22 22
export function addproduto22 (selector) {

    cy.intercept('GET', '/services/v3/local_saldo?filial_saldo=10050&sku=1907.22.22').as('api_local_saldo')
    //Card de voltagem - clicar
    cy.get(':nth-child(1) > md-list.md-default-theme > :nth-child(4) > div.md-button > .md-no-style')
        .click({force:true})
    cy.wait('@api_local_saldo', { timeout: 40000 })

    //cy.intercept('POST', '/services/v3/executar_filtro').as('api_executar_filtro')
    //Botão adicionar produto após selecionar voltagem do produto, clicar no botão
    cy.get('[style="padding: 0px 5px;"] > .md-accent')
        .click({force:true})
    //cy.wait('@api_executar_filtro', { timeout: 40000 })

    //Botão Retirada / Entrega - texto Retirada / Entrega
    cy.get('.md-checked > .md-label')
        .click({force:true})
}

//escolher voltagem, clicar botão Adicionar e tirar entrega - 1907 23 23
export function addproduto23 (selector) {

    cy.intercept('GET', '/services/v3/local_saldo?filial_saldo=10050&sku=1907.23.23').as('api_local_saldo')
    //Card de voltagem - clicar
    cy.get(':nth-child(1) > md-list.md-default-theme > :nth-child(4) > div.md-button > .md-no-style')
        .click({force:true})
    cy.wait('@api_local_saldo', { timeout: 40000 })

    //cy.intercept('POST', '/services/v3/executar_filtro').as('api_executar_filtro')
    //Botão adicionar produto após selecionar voltagem do produto, clicar no botão
    cy.get('[style="padding: 0px 5px;"] > .md-accent')
        .click({force:true})
    //cy.wait('@api_executar_filtro', { timeout: 40000 })

    //Botão Retirada / Entrega - texto Retirada / Entrega
    cy.get('.md-checked > .md-label')
        .click({force:true})
}

//escolher voltagem, clicar botão Adicionar e tirar entrega - 1907 24 24
export function addproduto24 (selector) {

    cy.intercept('GET', '/services/v3/local_saldo?filial_saldo=10050&sku=1907.24.24').as('api_local_saldo')
    //Card de voltagem - clicar
    cy.get(':nth-child(1) > md-list.md-default-theme > :nth-child(4) > div.md-button > .md-no-style')
        .click({force:true})
    cy.wait('@api_local_saldo', { timeout: 40000 })

    //cy.intercept('POST', '/services/v3/executar_filtro').as('api_executar_filtro')
    //Botão adicionar produto após selecionar voltagem do produto, clicar no botão
    cy.get('[style="padding: 0px 5px;"] > .md-accent')
        .click({force:true})
    //cy.wait('@api_executar_filtro', { timeout: 40000 })

    //Botão Retirada / Entrega - texto Retirada / Entrega
    cy.get('.md-checked > .md-label')
        .click({force:true})
}

//escolher voltagem, clicar botão Adicionar e tirar entrega - 1907 25 25
export function addproduto25 (selector) {

    cy.intercept('GET', '/services/v3/local_saldo?filial_saldo=10050&sku=1907.25.25').as('api_local_saldo')
    //Card de voltagem - clicar
    cy.get(':nth-child(1) > md-list.md-default-theme > :nth-child(4) > div.md-button > .md-no-style')
        .click({force:true})
    cy.wait('@api_local_saldo', { timeout: 40000 })

    //cy.intercept('POST', '/services/v3/executar_filtro').as('api_executar_filtro')
    //Botão adicionar produto após selecionar voltagem do produto, clicar no botão
    cy.get('[style="padding: 0px 5px;"] > .md-accent')
        .click({force:true})
    //cy.wait('@api_executar_filtro', { timeout: 40000 })

    //Botão Retirada / Entrega - texto Retirada / Entrega
    cy.get('.md-checked > .md-label')
        .click({force:true})
}

//escolher voltagem, clicar botão Adicionar e tirar entrega - 1907 26 26
export function addproduto26 (selector) {

    cy.intercept('GET', '/services/v3/local_saldo?filial_saldo=10050&sku=1907.26.26').as('api_local_saldo')
    //Card de voltagem - clicar
    cy.get(':nth-child(1) > md-list.md-default-theme > :nth-child(4) > div.md-button > .md-no-style')
        .click({force:true})
    cy.wait('@api_local_saldo', { timeout: 40000 })

    //cy.intercept('POST', '/services/v3/executar_filtro').as('api_executar_filtro')
    //Botão adicionar produto após selecionar voltagem do produto, clicar no botão
    cy.get('[style="padding: 0px 5px;"] > .md-accent')
        .click({force:true})
    //cy.wait('@api_executar_filtro', { timeout: 40000 })

    //Botão Retirada / Entrega - texto Retirada / Entrega
    cy.get('.md-checked > .md-label')
        .click({force:true})
}

//escolher voltagem, clicar botão Adicionar e tirar entrega - 1907 27 27
export function addproduto27 (selector) {

    cy.intercept('GET', '/services/v3/local_saldo?filial_saldo=10050&sku=1907.27.27').as('api_local_saldo')
    //Card de voltagem - clicar
    cy.get(':nth-child(1) > md-list.md-default-theme > :nth-child(4) > div.md-button > .md-no-style')
        .click({force:true})
    cy.wait('@api_local_saldo', { timeout: 40000 })

    //cy.intercept('POST', '/services/v3/executar_filtro').as('api_executar_filtro')
    //Botão adicionar produto após selecionar voltagem do produto, clicar no botão
    cy.get('[style="padding: 0px 5px;"] > .md-accent')
        .click({force:true})
    //cy.wait('@api_executar_filtro', { timeout: 40000 })

    //Botão Retirada / Entrega - texto Retirada / Entrega
    cy.get('.md-checked > .md-label')
        .click({force:true})
}

//escolher voltagem, clicar botão Adicionar e tirar entrega - 1907 28 28
export function addproduto28 (selector) {

    cy.intercept('GET', '/services/v3/local_saldo?filial_saldo=10050&sku=1907.28.28').as('api_local_saldo')
    //Card de voltagem - clicar
    cy.get(':nth-child(1) > md-list.md-default-theme > :nth-child(4) > div.md-button > .md-no-style')
        .click({force:true})
    cy.wait('@api_local_saldo', { timeout: 40000 })

    //cy.intercept('POST', '/services/v3/executar_filtro').as('api_executar_filtro')
    //Botão adicionar produto após selecionar voltagem do produto, clicar no botão
    cy.get('[style="padding: 0px 5px;"] > .md-accent')
        .click({force:true})
    //cy.wait('@api_executar_filtro', { timeout: 40000 })

    //Botão Retirada / Entrega - texto Retirada / Entrega
    cy.get('.md-checked > .md-label')
        .click({force:true})
}

//escolher voltagem, clicar botão Adicionar e tirar entrega - 1907 29 29
export function addproduto29 (selector) {

    cy.intercept('GET', '/services/v3/local_saldo?filial_saldo=10050&sku=1907.29.29').as('api_local_saldo')
    //Card de voltagem - clicar
    cy.get(':nth-child(1) > md-list.md-default-theme > :nth-child(4) > div.md-button > .md-no-style')
        .click({force:true})
    cy.wait('@api_local_saldo', { timeout: 40000 })

    //cy.intercept('POST', '/services/v3/executar_filtro').as('api_executar_filtro')
    //Botão adicionar produto após selecionar voltagem do produto, clicar no botão
    cy.get('[style="padding: 0px 5px;"] > .md-accent')
        .click({force:true})
    //cy.wait('@api_executar_filtro', { timeout: 40000 })

    //Botão Retirada / Entrega - texto Retirada / Entrega
    cy.get('.md-checked > .md-label')
        .click({force:true})
}

//escolher voltagem, clicar botão Adicionar e tirar entrega - 1907 30 30
export function addproduto30 (selector) {

    cy.intercept('GET', '/services/v3/local_saldo?filial_saldo=10050&sku=1907.30.30').as('api_local_saldo')
    //Card de voltagem - clicar
    cy.get(':nth-child(1) > md-list.md-default-theme > :nth-child(4) > div.md-button > .md-no-style')
        .click({force:true})
    cy.wait('@api_local_saldo', { timeout: 40000 })

    //cy.intercept('POST', '/services/v3/executar_filtro').as('api_executar_filtro')
    //Botão adicionar produto após selecionar voltagem do produto, clicar no botão
    cy.get('[style="padding: 0px 5px;"] > .md-accent')
        .click({force:true})
    //cy.wait('@api_executar_filtro', { timeout: 40000 })

    //Botão Retirada / Entrega - texto Retirada / Entrega
    cy.get('.md-checked > .md-label')
        .click({force:true})
}

//escolher voltagem, clicar botão Adicionar e tirar entrega - 1907 31 31
export function addproduto31 (selector) {

    cy.intercept('GET', '/services/v3/local_saldo?filial_saldo=10050&sku=1907.31.31').as('api_local_saldo')
    //Card de voltagem - clicar
    cy.get(':nth-child(1) > md-list.md-default-theme > :nth-child(4) > div.md-button > .md-no-style')
        .click({force:true})
    cy.wait('@api_local_saldo', { timeout: 40000 })

    //cy.intercept('POST', '/services/v3/executar_filtro').as('api_executar_filtro')
    //Botão adicionar produto após selecionar voltagem do produto, clicar no botão
    cy.get('[style="padding: 0px 5px;"] > .md-accent')
        .click({force:true})
    //cy.wait('@api_executar_filtro', { timeout: 40000 })

    //Botão Retirada / Entrega - texto Retirada / Entrega
    cy.get('.md-checked > .md-label')
        .click({force:true})
}

//escolher voltagem, clicar botão Adicionar e tirar entrega - 1907 32 32
export function addproduto32 (selector) {

    cy.intercept('GET', '/services/v3/local_saldo?filial_saldo=10050&sku=1907.32.32').as('api_local_saldo')
    //Card de voltagem - clicar
    cy.get(':nth-child(1) > md-list.md-default-theme > :nth-child(4) > div.md-button > .md-no-style')
        .click({force:true})
    cy.wait('@api_local_saldo', { timeout: 40000 })

    //cy.intercept('POST', '/services/v3/executar_filtro').as('api_executar_filtro')
    //Botão adicionar produto após selecionar voltagem do produto, clicar no botão
    cy.get('[style="padding: 0px 5px;"] > .md-accent')
        .click({force:true})
    //cy.wait('@api_executar_filtro', { timeout: 40000 })

    //Botão Retirada / Entrega - texto Retirada / Entrega
    cy.get('.md-checked > .md-label')
        .click({force:true})
}

//escolher voltagem, clicar botão Adicionar e tirar entrega - 1907 33 33
export function addproduto33 (selector) {

    cy.intercept('GET', '/services/v3/local_saldo?filial_saldo=10050&sku=1907.33.33').as('api_local_saldo')
    //Card de voltagem - clicar
    cy.get(':nth-child(1) > md-list.md-default-theme > :nth-child(4) > div.md-button > .md-no-style')
        .click({force:true})
    cy.wait('@api_local_saldo', { timeout: 40000 })

    //cy.intercept('POST', '/services/v3/executar_filtro').as('api_executar_filtro')
    //Botão adicionar produto após selecionar voltagem do produto, clicar no botão
    cy.get('[style="padding: 0px 5px;"] > .md-accent')
        .click({force:true})
    //cy.wait('@api_executar_filtro', { timeout: 40000 })

    //Botão Retirada / Entrega - texto Retirada / Entrega
    cy.get('.md-checked > .md-label')
        .click({force:true})
}

//escolher voltagem, clicar botão Adicionar e tirar entrega - 1907 34 34
export function addproduto34 (selector) {

    cy.intercept('GET', '/services/v3/local_saldo?filial_saldo=10050&sku=1907.34.34').as('api_local_saldo')
    //Card de voltagem - clicar
    cy.get(':nth-child(1) > md-list.md-default-theme > :nth-child(4) > div.md-button > .md-no-style')
        .click({force:true})
    cy.wait('@api_local_saldo', { timeout: 40000 })

    //cy.intercept('POST', '/services/v3/executar_filtro').as('api_executar_filtro')
    //Botão adicionar produto após selecionar voltagem do produto, clicar no botão
    cy.get('[style="padding: 0px 5px;"] > .md-accent')
        .click({force:true})
    //cy.wait('@api_executar_filtro', { timeout: 40000 })

    //Botão Retirada / Entrega - texto Retirada / Entrega
    cy.get('.md-checked > .md-label')
        .click({force:true})
}

//escolher voltagem, clicar botão Adicionar e tirar entrega - 1907 35 35
export function addproduto35 (selector) {

    cy.intercept('GET', '/services/v3/local_saldo?filial_saldo=10050&sku=1907.35.35').as('api_local_saldo')
    //Card de voltagem - clicar
    cy.get(':nth-child(1) > md-list.md-default-theme > :nth-child(4) > div.md-button > .md-no-style')
        .click({force:true})
    cy.wait('@api_local_saldo', { timeout: 40000 })

    //cy.intercept('POST', '/services/v3/executar_filtro').as('api_executar_filtro')
    //Botão adicionar produto após selecionar voltagem do produto, clicar no botão
    cy.get('[style="padding: 0px 5px;"] > .md-accent')
        .click({force:true})
    //cy.wait('@api_executar_filtro', { timeout: 40000 })

    //Botão Retirada / Entrega - texto Retirada / Entrega
    cy.get('.md-checked > .md-label')
        .click({force:true})
}

//escolher voltagem, clicar botão Adicionar e tirar entrega - 1907 36 36
export function addproduto36 (selector) {

    cy.intercept('GET', '/services/v3/local_saldo?filial_saldo=10050&sku=1907.36.36').as('api_local_saldo')
    //Card de voltagem - clicar
    cy.get(':nth-child(1) > md-list.md-default-theme > :nth-child(4) > div.md-button > .md-no-style')
        .click({force:true})
    cy.wait('@api_local_saldo', { timeout: 40000 })

    //cy.intercept('POST', '/services/v3/executar_filtro').as('api_executar_filtro')
    //Botão adicionar produto após selecionar voltagem do produto, clicar no botão
    cy.get('[style="padding: 0px 5px;"] > .md-accent')
        .click({force:true})
    //cy.wait('@api_executar_filtro', { timeout: 40000 })

    //Botão Retirada / Entrega - texto Retirada / Entrega
    cy.get('.md-checked > .md-label')
        .click({force:true})
}

//escolher voltagem, clicar botão Adicionar e tirar entrega - 1907 37 37
export function addproduto37 (selector) {

    cy.intercept('GET', '/services/v3/local_saldo?filial_saldo=10050&sku=1907.37.37').as('api_local_saldo')
    //Card de voltagem - clicar
    cy.get(':nth-child(1) > md-list.md-default-theme > :nth-child(4) > div.md-button > .md-no-style')
        .click({force:true})
    cy.wait('@api_local_saldo', { timeout: 40000 })

    //cy.intercept('POST', '/services/v3/executar_filtro').as('api_executar_filtro')
    //Botão adicionar produto após selecionar voltagem do produto, clicar no botão
    cy.get('[style="padding: 0px 5px;"] > .md-accent')
        .click({force:true})
    //cy.wait('@api_executar_filtro', { timeout: 40000 })

    //Botão Retirada / Entrega - texto Retirada / Entrega
    cy.get('.md-checked > .md-label')
        .click({force:true})
}

//escolher voltagem, clicar botão Adicionar e tirar entrega - 1907 38 38
export function addproduto38 (selector) {

    cy.intercept('GET', '/services/v3/local_saldo?filial_saldo=10050&sku=1907.38.38').as('api_local_saldo')
    //Card de voltagem - clicar
    cy.get(':nth-child(1) > md-list.md-default-theme > :nth-child(4) > div.md-button > .md-no-style')
        .click({force:true})
    cy.wait('@api_local_saldo', { timeout: 40000 })

    //cy.intercept('POST', '/services/v3/executar_filtro').as('api_executar_filtro')
    //Botão adicionar produto após selecionar voltagem do produto, clicar no botão
    cy.get('[style="padding: 0px 5px;"] > .md-accent')
        .click({force:true})
    //cy.wait('@api_executar_filtro', { timeout: 40000 })

    //Botão Retirada / Entrega - texto Retirada / Entrega
    cy.get('.md-checked > .md-label')
        .click({force:true})
}

//escolher voltagem, clicar botão Adicionar e tirar entrega - 1907 39 39
export function addproduto39 (selector) {

    cy.intercept('GET', '/services/v3/local_saldo?filial_saldo=10050&sku=1907.39.39').as('api_local_saldo')
    //Card de voltagem - clicar
    cy.get(':nth-child(1) > md-list.md-default-theme > :nth-child(4) > div.md-button > .md-no-style')
        .click({force:true})
    cy.wait('@api_local_saldo', { timeout: 40000 })

    //cy.intercept('POST', '/services/v3/executar_filtro').as('api_executar_filtro')
    //Botão adicionar produto após selecionar voltagem do produto, clicar no botão
    cy.get('[style="padding: 0px 5px;"] > .md-accent')
        .click({force:true})
    //cy.wait('@api_executar_filtro', { timeout: 40000 })

    //Botão Retirada / Entrega - texto Retirada / Entrega
    cy.get('.md-checked > .md-label')
        .click({force:true})
}

//escolher voltagem, clicar botão Adicionar e tirar entrega - 1907 40 40
export function addproduto40 (selector) {

    cy.intercept('GET', '/services/v3/local_saldo?filial_saldo=10050&sku=1907.40.40').as('api_local_saldo')
    //Card de voltagem - clicar
    cy.get(':nth-child(1) > md-list.md-default-theme > :nth-child(4) > div.md-button > .md-no-style')
        .click({force:true})
    cy.wait('@api_local_saldo', { timeout: 40000 })

    //cy.intercept('POST', '/services/v3/executar_filtro').as('api_executar_filtro')
    //Botão adicionar produto após selecionar voltagem do produto, clicar no botão
    cy.get('[style="padding: 0px 5px;"] > .md-accent')
        .click({force:true})
    //cy.wait('@api_executar_filtro', { timeout: 40000 })

    //Botão Retirada / Entrega - texto Retirada / Entrega
    cy.get('.md-checked > .md-label')
        .click({force:true})
}
