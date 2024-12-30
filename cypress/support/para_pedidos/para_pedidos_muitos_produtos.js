//Função criada para clicar no campo transportadora e escolher a trasportadora
export function escolherTransportadora (selector) {

    const transportadora_id = '1'

    cy.get('[ng-click="capturarSomentePromocao()"] > .ng-scope')
        .scrollIntoView({force:true})

    cy.wait(300)

    //Campo Transportadora - clicar para abrir as opções
    cy.get('[name="transportadora"]')
        .click({force:true})

    cy.wait(300)

    //Selecionar a transportadora que queremos
    cy.get('span[md-highlight-text]')
        .contains('1')
        .click({force:true})
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
export function escolherClientePedido (selector) {

    //inserir CPF/CNPJ no campo de cliente para podermos pesquisar pela lupa
    cy.get('.click-cliente > .informe-o-cliente > .cliente-header')
        .wait(500)
        .type('48976249089 {downArrow}')

    cy.wait(200)

    //clicar na lupa de pesquisa de clientes
    cy.get('.md-block > .ng-binding')
        .should('be.visible')
        .click()

    cy.wait(1500)

    //após a pesquisa encontrar o cliente, vamos selecionar ele
    cy.get('.md-3-line > div.md-button > .md-no-style')
        .should('be.visible')
        .click()
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

    //Botão "GERAR PARCELAS" - validações
    cy.get('.gerar-parcelas > .layout-wrap > [style="padding: 0 5px"] > .md-primary')
        .scrollIntoView()
        .wait(200)
        .should('exist')
        //.and('be.visible')
        //.should('not.be.disabled')
        .and('have.text', 'Gerar parcelas')

    //Botão "GERAR PARCELAS" - clicar
    cy.get('.gerar-parcelas > .layout-wrap > [style="padding: 0 5px"] > .md-primary')
        .click({force:true})
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

//escolhendo parcelas da forma de pagamento escolhida - 1X
export function escolherUmaParcelaPagamento (selector) {

    //selecionando parcelas - 1X
    cy.get('.active > md-collapsible-body > .layout-column > [style="position: relative"] > :nth-child(1) > div.ng-binding')
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

//Para escolher processo de venda entrega futura 9862 normal
export function processoEntregaFutura (selector) {

    //clicar para aparecer as opções de processo
    cy.get('#select_value_label_4 > .md-select-icon')
        .should('be.visible')
        .and('not.be.disabled')
        .click()

    //rolar para o meio das opções de processo
    cy.get('#select_listbox_12')
        .should('be.visible')
        .scrollTo('center')

    //selecionar processo de venda "9862"
    cy.get('.md-text.ng-binding')
        .contains('9862 - T.A. Pedido Entrega Futura')
        .click({force:true})

    //fechar modal de processos
    cy.get('.md-select-backdrop')
        .wait(200)
        .dblclick()
        .wait(200)
}

//Para escolher processo de venda financeiro baixa 9863 normal
export function processoFinanceiroBaixa (selector) {

    //clicar para aparecer as opções de processo
    cy.get('#select_value_label_4 > .md-select-icon')
        .should('be.visible')
        .and('not.be.disabled')
        .click()

    //rolar para o meio das opções de processo
    cy.get('#select_listbox_12')
        .should('be.visible')
        .scrollTo('center')

    //selecionar processo de venda "9863"
    cy.get('.md-text.ng-binding')
        .contains('9863 - T.A.Pedido Financeiro Baixa')
        .click({force:true})

    //fechar modal de processos
    cy.get('.md-select-backdrop')
        .wait(200)
        .dblclick()
        .wait(200)
}

//Botão para avançar para a tela de Gerar parcelas
export function avancarParaParcelas (selector) {

    cy.wait(500)

    cy.get('.flex-gt-sm-50 > .md-primary')
        .scrollIntoView()
        .wait(200)
        .should('be.visible')
        //.and('not.be.disabled')
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
}

//Botão para avançar para a tela de escolher transportadora e rota
export function avancarParaTransportadora (selector) {

    cy.get('.flex-gt-sm-50 > .md-primary')
        .scrollIntoView()
        .wait(200)
        .should('be.visible')
        .and('not.be.disabled')
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
}

//Botão para avançar para a tela de Gerar parcelas
export function avancarParcelasEntrega (selector) {

    cy.get('.layout-align-end-end > :nth-child(2) > .md-primary')
        .scrollIntoView()
        .wait(200)
        .should('be.visible')
        .and('not.be.disabled')
        .and('contain','Avançar')

    //Clicar para avançar para a tela de GERAR PARCELAS
    cy.get('.layout-align-end-end > :nth-child(2) > .md-primary')
        .click({force:true})
}

//Botão AVANÇAR, da tela antes de finalizar o pedido
export function avancarFinal (selector) {

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

//botão OK modal Serviços Vinculados
export function okServicosVinculados (selector) {

    //validando botão
    cy.get('button[ng-click="salvar()"]')
        .should('be.visible')
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
        .should('be.visible')

    //Nome do produto
    cy.get('.md-resultado-titulo')
        .should('be.visible')

    //Saldo disponível
    cy.get('.md-list-item-text > .ng-scope')
        .should('be.visible')

    //Código do produto
    cy.get('.badge-saldo.ng-binding')
        .should('be.visible')

    //Cifrão do valor do produto
    cy.get('sup')
        .should('be.visible')
        .and('have.text', 'R$')

    //Valor do produto
    cy.get('.valor-busca')
        .should('be.visible')

    //Check box do produto
    cy.get('.expandeIcone')
        .should('be.visible')

    //Clicar para adicionar no carrinho
    cy.get('.md-list-item-text')
        .should('be.visible')
        .click({force:true})
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

    //Limpando campo com o produto anterior
    cy.get('#searchText')
        .clear()
        .wait(400)

    //Prenchendo campo Buscar produto
    cy.get('#searchText')
        .type(produto_principal)
        .wait(100)
}

//Clicar para selecionar o produto que queremos adicionar ao pedido - sem validações
export function escolherProdutoPesquisa (selector) {

    //Clicar para adicionar no carrinho
    cy.get('.md-list-item-text')
        .click({force:true})
}

//escolher voltagem, clicar botão Adicionar e tirar entrega - 1907 1 1
export function addproduto1 (selector) {

    //Card de voltagem - clicar
    cy.get(':nth-child(1) > md-list.md-default-theme > [style=""] > div.md-button > .md-no-style')
        .click({force:true})

    cy.wait (500)

    //Botão adicionar produto após selecionar voltagem do produto, clicar no botão
    cy.get('[style="padding: 0px 5px;"] > .md-primary')
        .click({force:true})

    cy.wait(500)

    //Botão Retirada / Entrega - texto Retirada / Entrega
    cy.get('[ng-show="itemAtual._permiteEntrega"] > .md-auto-horizontal-margin > .md-label')
        .click({force:true})
}

//escolher voltagem, clicar botão Adicionar e tirar entrega - 1907 2 2
export function addproduto2 (selector) {

    //Card de voltagem - clicar
    cy.get(':nth-child(1) > md-list.md-default-theme > :nth-child(3) > div.md-button > .md-no-style')
        .click({force:true})

    cy.wait (500)

    //Botão adicionar produto após selecionar voltagem do produto, clicar no botão
    cy.get('[style="padding: 0px 5px;"] > .md-primary')
        .click({force:true})

    cy.wait(600)

    //Botão Retirada / Entrega - texto Retirada / Entrega
    cy.get(':nth-child(3) > .md-whiteframe-2dp > :nth-child(3) > [ng-show="itemAtual._permiteEntrega"] > .md-auto-horizontal-margin > .md-label')
        .click({force:true})
}

//escolher voltagem, clicar botão Adicionar e tirar entrega - 1907 3 3
export function addproduto3 (selector) {

    //Card de voltagem - clicar
    cy.get(':nth-child(1) > md-list.md-default-theme > :nth-child(4) > div.md-button > .md-no-style')
        .click({force:true})

    cy.wait (500)

    //Botão adicionar produto após selecionar voltagem do produto, clicar no botão
    cy.get('[style="padding: 0px 5px;"] > .md-primary')
        .click({force:true})

    cy.wait(700)

    //Botão Retirada / Entrega - texto Retirada / Entrega
    cy.get(':nth-child(4) > .md-whiteframe-2dp > :nth-child(3) > [ng-show="itemAtual._permiteEntrega"] > .md-auto-horizontal-margin > .md-label')
        .click({force:true})
}

//escolher voltagem, clicar botão Adicionar e tirar entrega - 1907 4 4
export function addproduto4 (selector) {

    //Card de voltagem - clicar
    cy.get(':nth-child(1) > md-list.md-default-theme > :nth-child(5) > div.md-button > .md-no-style')
        .click({force:true})

    cy.wait (500)

    //Botão adicionar produto após selecionar voltagem do produto, clicar no botão
    cy.get('[style="padding: 0px 5px;"] > .md-primary')
        .click({force:true})

    cy.wait(800)

    //Botão Retirada / Entrega - texto Retirada / Entrega
    cy.get(':nth-child(5) > .md-whiteframe-2dp > :nth-child(3) > [ng-show="itemAtual._permiteEntrega"] > .md-auto-horizontal-margin > .md-label')
        .click({force:true})
}

//escolher voltagem, clicar botão Adicionar e tirar entrega - 1907 5 5
export function addproduto5 (selector) {

    //Card de voltagem - clicar
    cy.get(':nth-child(1) > md-list.md-default-theme > :nth-child(6) > div.md-button > .md-no-style')
        .click({force:true})

    cy.wait (500)

    //Botão adicionar produto após selecionar voltagem do produto, clicar no botão
    cy.get('[style="padding: 0px 5px;"] > .md-primary')
        .click({force:true})

    cy.wait(900)

    //Botão Retirada / Entrega - texto Retirada / Entrega
    cy.get(':nth-child(6) > .md-whiteframe-2dp > :nth-child(3) > [ng-show="itemAtual._permiteEntrega"] > .md-auto-horizontal-margin > .md-label')
        .click({force:true})
}

//escolher voltagem, clicar botão Adicionar e tirar entrega - 1907 6 6
export function addproduto6 (selector) {

    //Card de voltagem - clicar
    cy.get(':nth-child(1) > md-list.md-default-theme > :nth-child(7) > div.md-button > .md-no-style')
        .click({force:true})

    cy.wait (500)

    //Botão adicionar produto após selecionar voltagem do produto, clicar no botão
    cy.get('[style="padding: 0px 5px;"] > .md-primary')
        .click({force:true})

    cy.wait(1000)

    //Botão Retirada / Entrega - texto Retirada / Entrega
    cy.get(':nth-child(7) > .md-whiteframe-2dp > :nth-child(3) > [ng-show="itemAtual._permiteEntrega"] > .md-auto-horizontal-margin > .md-label')
        .click({force:true})
}

//escolher voltagem, clicar botão Adicionar e tirar entrega - 1907 7 7
export function addproduto7 (selector) {

    //Card de voltagem - clicar
    cy.get(':nth-child(1) > md-list.md-default-theme > :nth-child(8) > div.md-button > .md-no-style')
        .click({force:true})

    cy.wait (500)

    //Botão adicionar produto após selecionar voltagem do produto, clicar no botão
    cy.get('[style="padding: 0px 5px;"] > .md-primary')
        .click({force:true})

    cy.wait(1100)

    //Botão Retirada / Entrega - texto Retirada / Entrega
    cy.get(':nth-child(8) > .md-whiteframe-2dp > :nth-child(3) > [ng-show="itemAtual._permiteEntrega"] > .md-auto-horizontal-margin > .md-label')
        .click({force:true})
}

//escolher voltagem, clicar botão Adicionar e tirar entrega - 1907 8 8
export function addproduto8 (selector) {

    //Card de voltagem - clicar
    cy.get(':nth-child(1) > md-list.md-default-theme > :nth-child(9) > div.md-button > .md-no-style')
        .click({force:true})

    cy.wait (500)

    //Botão adicionar produto após selecionar voltagem do produto, clicar no botão
    cy.get('[style="padding: 0px 5px;"] > .md-primary')
        .click({force:true})

    cy.wait(1200)

    //Botão Retirada / Entrega - texto Retirada / Entrega
    cy.get(':nth-child(9) > .md-whiteframe-2dp > :nth-child(3) > [ng-show="itemAtual._permiteEntrega"] > .md-auto-horizontal-margin > .md-label')
        .click({force:true})
}

//escolher voltagem, clicar botão Adicionar e tirar entrega - 1907 9 9
export function addproduto9 (selector) {

    //Card de voltagem - clicar
    cy.get(':nth-child(1) > md-list.md-default-theme > :nth-child(10) > div.md-button > .md-no-style')
        .click({force:true})

    cy.wait (500)

    //Botão adicionar produto após selecionar voltagem do produto, clicar no botão
    cy.get('[style="padding: 0px 5px;"] > .md-primary')
        .click({force:true})

    cy.wait(1300)

    //Botão Retirada / Entrega - texto Retirada / Entrega
    cy.get(':nth-child(10) > .md-whiteframe-2dp > :nth-child(3) > [ng-show="itemAtual._permiteEntrega"] > .md-auto-horizontal-margin > .md-label')
        .click({force:true})
}

//escolher voltagem, clicar botão Adicionar e tirar entrega - 1907 10 10
export function addproduto10 (selector) {

    //Card de voltagem - clicar
    cy.get(':nth-child(1) > md-list.md-default-theme > :nth-child(11) > div.md-button > .md-no-style')
        .click({force:true})

    cy.wait (500)

    //Botão adicionar produto após selecionar voltagem do produto, clicar no botão
    cy.get('[style="padding: 0px 5px;"] > .md-primary')
        .click({force:true})

    cy.wait(1400)

    //Botão Retirada / Entrega - texto Retirada / Entrega
    cy.get(':nth-child(11) > .md-whiteframe-2dp > :nth-child(3) > [ng-show="itemAtual._permiteEntrega"] > .md-auto-horizontal-margin > .md-label')
        .click({force:true})
}

//escolher voltagem, clicar botão Adicionar e tirar entrega - 1907 11 11
export function addproduto11 (selector) {

    //Card de voltagem - clicar
    cy.get(':nth-child(1) > md-list.md-default-theme > :nth-child(12) > div.md-button > .md-no-style')
        .click({force:true})

    cy.wait (500)

    //Botão adicionar produto após selecionar voltagem do produto, clicar no botão
    cy.get('[style="padding: 0px 5px;"] > .md-primary')
        .click({force:true})

    cy.wait(1500)

    //Botão Retirada / Entrega - texto Retirada / Entrega
    cy.get(':nth-child(12) > .md-whiteframe-2dp > :nth-child(3) > [ng-show="itemAtual._permiteEntrega"] > .md-auto-horizontal-margin > .md-label')
        .click({force:true})
}

//escolher voltagem, clicar botão Adicionar e tirar entrega - 1907 12 12
export function addproduto12 (selector) {

    //Card de voltagem - clicar
    cy.get(':nth-child(1) > md-list.md-default-theme > :nth-child(13) > div.md-button > .md-no-style')
        .click({force:true})

    cy.wait (500)

    //Botão adicionar produto após selecionar voltagem do produto, clicar no botão
    cy.get('[style="padding: 0px 5px;"] > .md-primary')
        .click({force:true})

    cy.wait(1600)

    //Botão Retirada / Entrega - texto Retirada / Entrega
    cy.get(':nth-child(13) > .md-whiteframe-2dp > :nth-child(3) > [ng-show="itemAtual._permiteEntrega"] > .md-auto-horizontal-margin > .md-label')
        .click({force:true})
}

//escolher voltagem, clicar botão Adicionar e tirar entrega - 1907 13 13
export function addproduto13 (selector) {

    //Card de voltagem - clicar
    cy.get(':nth-child(1) > md-list.md-default-theme > :nth-child(14) > div.md-button > .md-no-style')
        .click({force:true})

    cy.wait (500)

    //Botão adicionar produto após selecionar voltagem do produto, clicar no botão
    cy.get('[style="padding: 0px 5px;"] > .md-primary')
        .click({force:true})

    cy.wait(1700)

    //Botão Retirada / Entrega - texto Retirada / Entrega
    cy.get(':nth-child(14) > .md-whiteframe-2dp > :nth-child(3) > [ng-show="itemAtual._permiteEntrega"] > .md-auto-horizontal-margin > .md-label')
        .click({force:true})
}

//escolher voltagem, clicar botão Adicionar e tirar entrega - 1907 14 14
export function addproduto14 (selector) {

    //Card de voltagem - clicar
    cy.get(':nth-child(1) > md-list.md-default-theme > :nth-child(15) > div.md-button > .md-no-style')
        .click({force:true})

    cy.wait (500)

    //Botão adicionar produto após selecionar voltagem do produto, clicar no botão
    cy.get('[style="padding: 0px 5px;"] > .md-primary')
        .click({force:true})

    cy.wait(1800)

    //Botão Retirada / Entrega - texto Retirada / Entrega
    cy.get(':nth-child(15) > .md-whiteframe-2dp > :nth-child(3) > [ng-show="itemAtual._permiteEntrega"] > .md-auto-horizontal-margin > .md-label')
        .click({force:true})
}

//escolher voltagem, clicar botão Adicionar e tirar entrega - 1907 15 15
export function addproduto15 (selector) {

    //Card de voltagem - clicar
    cy.get(':nth-child(1) > md-list.md-default-theme > :nth-child(16) > div.md-button > .md-no-style')
        .click({force:true})

    cy.wait (500)

    //Botão adicionar produto após selecionar voltagem do produto, clicar no botão
    cy.get('[style="padding: 0px 5px;"] > .md-primary')
        .click({force:true})

    cy.wait(1900)

    //Botão Retirada / Entrega - texto Retirada / Entrega
    cy.get(':nth-child(16) > .md-whiteframe-2dp > :nth-child(3) > [ng-show="itemAtual._permiteEntrega"] > .md-auto-horizontal-margin > .md-label')
        .click({force:true})
}

//escolher voltagem, clicar botão Adicionar e tirar entrega - 1907 16 16
export function addproduto16 (selector) {

    //Card de voltagem - clicar
    cy.get(':nth-child(1) > md-list.md-default-theme > :nth-child(17) > div.md-button > .md-no-style')
        .click({force:true})

    cy.wait (500)

    //Botão adicionar produto após selecionar voltagem do produto, clicar no botão
    cy.get('[style="padding: 0px 5px;"] > .md-primary')
        .click({force:true})

    cy.wait(2000)

    //Botão Retirada / Entrega - texto Retirada / Entrega
    cy.get(':nth-child(17) > .md-whiteframe-2dp > :nth-child(3) > [ng-show="itemAtual._permiteEntrega"] > .md-auto-horizontal-margin > .md-label')
        .click({force:true})
}

//escolher voltagem, clicar botão Adicionar e tirar entrega - 1907 17 17
export function addproduto17 (selector) {

    //Card de voltagem - clicar
    cy.get(':nth-child(1) > md-list.md-default-theme > :nth-child(18) > div.md-button > .md-no-style')
        .click({force:true})

    cy.wait (500)

    //Botão adicionar produto após selecionar voltagem do produto, clicar no botão
    cy.get('[style="padding: 0px 5px;"] > .md-primary')
        .click({force:true})

    cy.wait(2100)

    //Botão Retirada / Entrega - texto Retirada / Entrega
    cy.get(':nth-child(18) > .md-whiteframe-2dp > :nth-child(3) > [ng-show="itemAtual._permiteEntrega"] > .md-auto-horizontal-margin > .md-label')
        .click({force:true})
}

//escolher voltagem, clicar botão Adicionar e tirar entrega - 1907 18 18
export function addproduto18 (selector) {

    //Card de voltagem - clicar
    cy.get(':nth-child(1) > md-list.md-default-theme > :nth-child(19) > div.md-button > .md-no-style')
        .click({force:true})

    cy.wait (500)

    //Botão adicionar produto após selecionar voltagem do produto, clicar no botão
    cy.get('[style="padding: 0px 5px;"] > .md-primary')
        .click({force:true})

    cy.wait(2200)

    //Botão Retirada / Entrega - texto Retirada / Entrega
    cy.get(':nth-child(19) > .md-whiteframe-2dp > :nth-child(3) > [ng-show="itemAtual._permiteEntrega"] > .md-auto-horizontal-margin > .md-label')
        .click({force:true})
}

//escolher voltagem, clicar botão Adicionar e tirar entrega - 1907 19 19
export function addproduto19 (selector) {

    //Card de voltagem - clicar
    cy.get(':nth-child(1) > md-list.md-default-theme > :nth-child(20) > div.md-button > .md-no-style')
        .click({force:true})

    cy.wait (500)

    //Botão adicionar produto após selecionar voltagem do produto, clicar no botão
    cy.get('[style="padding: 0px 5px;"] > .md-primary')
        .click({force:true})

    cy.wait(2300)

    //Botão Retirada / Entrega - texto Retirada / Entrega
    cy.get(':nth-child(20) > .md-whiteframe-2dp > :nth-child(3) > [ng-show="itemAtual._permiteEntrega"] > .md-auto-horizontal-margin > .md-label')
        .click({force:true})
}

//escolher voltagem, clicar botão Adicionar e tirar entrega - 1907 20 20
export function addproduto20 (selector) {

    //Card de voltagem - clicar
    cy.get(':nth-child(1) > md-list.md-default-theme > :nth-child(20) > div.md-button > .md-no-style')
        .click({force:true})

    cy.wait (500)

    //Botão adicionar produto após selecionar voltagem do produto, clicar no botão
    cy.get('[style="padding: 0px 5px;"] > .md-primary')
        .click({force:true})

    cy.wait(2400)

    //Botão Retirada / Entrega - texto Retirada / Entrega
    cy.get(':nth-child(21) > .md-whiteframe-2dp > :nth-child(3) > [ng-show="itemAtual._permiteEntrega"] > .md-auto-horizontal-margin > .md-label')
        .click({force:true})
}

//escolher voltagem, clicar botão Adicionar e tirar entrega - 1907 21 21
export function addproduto21 (selector) {

    //Card de voltagem - clicar
    cy.get(':nth-child(1) > md-list.md-default-theme > :nth-child(20) > div.md-button > .md-no-style')
        .click({force:true})

    cy.wait (500)

    //Botão adicionar produto após selecionar voltagem do produto, clicar no botão
    cy.get('[style="padding: 0px 5px;"] > .md-primary')
        .click({force:true})

    cy.wait(2500)

    //Botão Retirada / Entrega - texto Retirada / Entrega
    cy.get(':nth-child(22) > .md-whiteframe-2dp > :nth-child(3) > [ng-show="itemAtual._permiteEntrega"] > .md-auto-horizontal-margin > .md-label')
        .click({force:true})
}

//escolher voltagem, clicar botão Adicionar e tirar entrega - 1907 22 22
export function addproduto22 (selector) {

    //Card de voltagem - clicar
    cy.get(':nth-child(23) > div.md-button > .md-no-style')
        .click({force:true})

    cy.wait (500)

    //Botão adicionar produto após selecionar voltagem do produto, clicar no botão
    cy.get('[style="padding: 0px 5px;"] > .md-primary')
        .click({force:true})

    cy.wait(2600)

    //Botão Retirada / Entrega - texto Retirada / Entrega
    cy.get(':nth-child(23) > .md-whiteframe-2dp > :nth-child(3) > [ng-show="itemAtual._permiteEntrega"] > .md-auto-horizontal-margin > .md-label')
        .click({force:true})
}

//escolher voltagem, clicar botão Adicionar e tirar entrega - 1907 23 23
export function addproduto23 (selector) {

    //Card de voltagem - clicar
    cy.get(':nth-child(24) > div.md-button > .md-no-style')
        .click({force:true})

    cy.wait (500)

    //Botão adicionar produto após selecionar voltagem do produto, clicar no botão
    cy.get('[style="padding: 0px 5px;"] > .md-primary')
        .click({force:true})

    cy.wait(2700)

    //Botão Retirada / Entrega - texto Retirada / Entrega
    cy.get(':nth-child(24) > .md-whiteframe-2dp > :nth-child(3) > [ng-show="itemAtual._permiteEntrega"] > .md-auto-horizontal-margin > .md-label')
        .click({force:true})
}

//escolher voltagem, clicar botão Adicionar e tirar entrega - 1907 24 24
export function addproduto24 (selector) {

    //Card de voltagem - clicar
    cy.get(':nth-child(25) > div.md-button > .md-no-style')
        .click({force:true})

    cy.wait (500)

    //Botão adicionar produto após selecionar voltagem do produto, clicar no botão
    cy.get('[style="padding: 0px 5px;"] > .md-primary')
        .click({force:true})

    cy.wait(2800)

    //Botão Retirada / Entrega - texto Retirada / Entrega
    cy.get(':nth-child(25) > .md-whiteframe-2dp > :nth-child(3) > [ng-show="itemAtual._permiteEntrega"] > .md-auto-horizontal-margin > .md-label')
        .click({force:true})
}

//escolher voltagem, clicar botão Adicionar e tirar entrega - 1907 25 25
export function addproduto25 (selector) {

    //Card de voltagem - clicar
    cy.get(':nth-child(26) > div.md-button > .md-no-style')
        .click({force:true})

    cy.wait (500)

    //Botão adicionar produto após selecionar voltagem do produto, clicar no botão
    cy.get('[style="padding: 0px 5px;"] > .md-primary')
        .click({force:true})

    cy.wait(2900)

    //Botão Retirada / Entrega - texto Retirada / Entrega
    cy.get(':nth-child(26) > .md-whiteframe-2dp > :nth-child(3) > [ng-show="itemAtual._permiteEntrega"] > .md-auto-horizontal-margin > .md-label')
        .click({force:true})
}

//escolher voltagem, clicar botão Adicionar e tirar entrega - 1907 26 26
export function addproduto26 (selector) {

    //Card de voltagem - clicar
    cy.get(':nth-child(27) > div.md-button > .md-no-style')
        .click({force:true})

    cy.wait (500)

    //Botão adicionar produto após selecionar voltagem do produto, clicar no botão
    cy.get('[style="padding: 0px 5px;"] > .md-primary')
        .click({force:true})

    cy.wait(3000)

    //Botão Retirada / Entrega - texto Retirada / Entrega
    cy.get(':nth-child(27) > .md-whiteframe-2dp > :nth-child(3) > [ng-show="itemAtual._permiteEntrega"] > .md-auto-horizontal-margin > .md-label')
        .click({force:true})
}

//escolher voltagem, clicar botão Adicionar e tirar entrega - 1907 27 27
export function addproduto27 (selector) {

    //Card de voltagem - clicar
    cy.get(':nth-child(28) > div.md-button > .md-no-style')
        .click({force:true})

    cy.wait (500)

    //Botão adicionar produto após selecionar voltagem do produto, clicar no botão
    cy.get('[style="padding: 0px 5px;"] > .md-primary')
        .click({force:true})

    cy.wait(3100)

    //Botão Retirada / Entrega - texto Retirada / Entrega
    cy.get(':nth-child(28) > .md-whiteframe-2dp > :nth-child(3) > [ng-show="itemAtual._permiteEntrega"] > .md-auto-horizontal-margin > .md-label')
        .click({force:true})
}

//escolher voltagem, clicar botão Adicionar e tirar entrega - 1907 28 28
export function addproduto28 (selector) {

    //Card de voltagem - clicar
    cy.get(':nth-child(29) > div.md-button > .md-no-style')
        .click({force:true})

    cy.wait (500)

    //Botão adicionar produto após selecionar voltagem do produto, clicar no botão
    cy.get('[style="padding: 0px 5px;"] > .md-primary')
        .click({force:true})

    cy.wait(3200)

    //Botão Retirada / Entrega - texto Retirada / Entrega
    cy.get(':nth-child(29) > .md-whiteframe-2dp > :nth-child(3) > [ng-show="itemAtual._permiteEntrega"] > .md-auto-horizontal-margin > .md-label')
        .click({force:true})
}

//escolher voltagem, clicar botão Adicionar e tirar entrega - 1907 29 29
export function addproduto29 (selector) {

    //Card de voltagem - clicar
    cy.get(':nth-child(30) > div.md-button > .md-no-style')
        .click({force:true})

    cy.wait (500)

    //Botão adicionar produto após selecionar voltagem do produto, clicar no botão
    cy.get('[style="padding: 0px 5px;"] > .md-primary')
        .click({force:true})

    cy.wait(3300)

    //Botão Retirada / Entrega - texto Retirada / Entrega
    cy.get(':nth-child(30) > .md-whiteframe-2dp > :nth-child(3) > [ng-show="itemAtual._permiteEntrega"] > .md-auto-horizontal-margin > .md-label')
        .click({force:true})
}

//escolher voltagem, clicar botão Adicionar e tirar entrega - 1907 30 30
export function addproduto30 (selector) {

    //Card de voltagem - clicar
    cy.get(':nth-child(31) > div.md-button > .md-no-style')
        .click({force:true})

    cy.wait (500)

    //Botão adicionar produto após selecionar voltagem do produto, clicar no botão
    cy.get('[style="padding: 0px 5px;"] > .md-primary')
        .click({force:true})

    cy.wait(3400)

    //Botão Retirada / Entrega - texto Retirada / Entrega
    cy.get(':nth-child(31) > .md-whiteframe-2dp > :nth-child(3) > [ng-show="itemAtual._permiteEntrega"] > .md-auto-horizontal-margin > .md-label')
        .click({force:true})
}

//escolher voltagem, clicar botão Adicionar e tirar entrega - 1907 31 31
export function addproduto31 (selector) {

    //Card de voltagem - clicar
    cy.get(':nth-child(32) > div.md-button > .md-no-style')
        .click({force:true})

    cy.wait (500)

    //Botão adicionar produto após selecionar voltagem do produto, clicar no botão
    cy.get('[style="padding: 0px 5px;"] > .md-primary')
        .click({force:true})

    cy.wait(3500)

    //Botão Retirada / Entrega - texto Retirada / Entrega
    cy.get(':nth-child(32) > .md-whiteframe-2dp > :nth-child(3) > [ng-show="itemAtual._permiteEntrega"] > .md-auto-horizontal-margin > .md-label')
        .click({force:true})
}

//escolher voltagem, clicar botão Adicionar e tirar entrega - 1907 32 32
export function addproduto32 (selector) {

    //Card de voltagem - clicar
    cy.get(':nth-child(33) > div.md-button > .md-no-style')
        .click({force:true})

    cy.wait (500)

    //Botão adicionar produto após selecionar voltagem do produto, clicar no botão
    cy.get('[style="padding: 0px 5px;"] > .md-primary')
        .click({force:true})

    cy.wait(3600)

    //Botão Retirada / Entrega - texto Retirada / Entrega
    cy.get(':nth-child(33) > .md-whiteframe-2dp > :nth-child(3) > [ng-show="itemAtual._permiteEntrega"] > .md-auto-horizontal-margin > .md-label')
        .click({force:true})
}

//escolher voltagem, clicar botão Adicionar e tirar entrega - 1907 33 33
export function addproduto33 (selector) {

    //Card de voltagem - clicar
    cy.get(':nth-child(34) > div.md-button > .md-no-style')
        .click({force:true})

    cy.wait (500)

    //Botão adicionar produto após selecionar voltagem do produto, clicar no botão
    cy.get('[style="padding: 0px 5px;"] > .md-primary')
        .click({force:true})

    cy.wait(3700)

    //Botão Retirada / Entrega - texto Retirada / Entrega
    cy.get(':nth-child(34) > .md-whiteframe-2dp > :nth-child(3) > [ng-show="itemAtual._permiteEntrega"] > .md-auto-horizontal-margin > .md-label')
        .click({force:true})
}

//escolher voltagem, clicar botão Adicionar e tirar entrega - 1907 34 34
export function addproduto34 (selector) {

    //Card de voltagem - clicar
    cy.get(':nth-child(35) > div.md-button > .md-no-style')
        .click({force:true})

    cy.wait (500)

    //Botão adicionar produto após selecionar voltagem do produto, clicar no botão
    cy.get('[style="padding: 0px 5px;"] > .md-primary')
        .click({force:true})

    cy.wait(3800)

    //Botão Retirada / Entrega - texto Retirada / Entrega
    cy.get(':nth-child(35) > .md-whiteframe-2dp > :nth-child(3) > [ng-show="itemAtual._permiteEntrega"] > .md-auto-horizontal-margin > .md-label')
        .click({force:true})
}

//escolher voltagem, clicar botão Adicionar e tirar entrega - 1907 35 35
export function addproduto35 (selector) {

    //Card de voltagem - clicar
    cy.get(':nth-child(36) > div.md-button > .md-no-style')
        .click({force:true})

    cy.wait (500)

    //Botão adicionar produto após selecionar voltagem do produto, clicar no botão
    cy.get('[style="padding: 0px 5px;"] > .md-primary')
        .click({force:true})

    cy.wait(3900)

    //Botão Retirada / Entrega - texto Retirada / Entrega
    cy.get(':nth-child(36) > .md-whiteframe-2dp > :nth-child(3) > [ng-show="itemAtual._permiteEntrega"] > .md-auto-horizontal-margin > .md-label')
        .click({force:true})
}

//escolher voltagem, clicar botão Adicionar e tirar entrega - 1907 36 36
export function addproduto36 (selector) {

    //Card de voltagem - clicar
    cy.get(':nth-child(37) > div.md-button > .md-no-style')
        .click({force:true})

    cy.wait (500)

    //Botão adicionar produto após selecionar voltagem do produto, clicar no botão
    cy.get('[style="padding: 0px 5px;"] > .md-primary')
        .click({force:true})

    cy.wait(4000)

    //Botão Retirada / Entrega - texto Retirada / Entrega
    cy.get(':nth-child(37) > .md-whiteframe-2dp > :nth-child(3) > [ng-show="itemAtual._permiteEntrega"] > .md-auto-horizontal-margin > .md-label')
        .click({force:true})
}

//escolher voltagem, clicar botão Adicionar e tirar entrega - 1907 37 37
export function addproduto37 (selector) {

    //Card de voltagem - clicar
    cy.get(':nth-child(38) > div.md-button > .md-no-style')
        .click({force:true})

    cy.wait (500)

    //Botão adicionar produto após selecionar voltagem do produto, clicar no botão
    cy.get('[style="padding: 0px 5px;"] > .md-primary')
        .click({force:true})

    cy.wait(4100)

    //Botão Retirada / Entrega - texto Retirada / Entrega
    cy.get(':nth-child(38) > .md-whiteframe-2dp > :nth-child(3) > [ng-show="itemAtual._permiteEntrega"] > .md-auto-horizontal-margin > .md-label')
        .click({force:true})
}

//escolher voltagem, clicar botão Adicionar e tirar entrega - 1907 38 38
export function addproduto38 (selector) {

    //Card de voltagem - clicar
    cy.get(':nth-child(39) > div.md-button > .md-no-style')
        .click({force:true})

    cy.wait (500)

    //Botão adicionar produto após selecionar voltagem do produto, clicar no botão
    cy.get('[style="padding: 0px 5px;"] > .md-primary')
        .click({force:true})

    cy.wait(4200)

    //Botão Retirada / Entrega - texto Retirada / Entrega
    cy.get(':nth-child(39) > .md-whiteframe-2dp > :nth-child(3) > [ng-show="itemAtual._permiteEntrega"] > .md-auto-horizontal-margin > .md-label')
        .click({force:true})
}

//escolher voltagem, clicar botão Adicionar e tirar entrega - 1907 39 39
export function addproduto39 (selector) {

    //Card de voltagem - clicar
    cy.get(':nth-child(40) > div.md-button > .md-no-style')
        .click({force:true})

    cy.wait (500)

    //Botão adicionar produto após selecionar voltagem do produto, clicar no botão
    cy.get('[style="padding: 0px 5px;"] > .md-primary')
        .click({force:true})

    cy.wait(4300)

    //Botão Retirada / Entrega - texto Retirada / Entrega
    cy.get(':nth-child(40) > .md-whiteframe-2dp > :nth-child(3) > [ng-show="itemAtual._permiteEntrega"] > .md-auto-horizontal-margin > .md-label')
        .click({force:true})
}

//escolher voltagem, clicar botão Adicionar e tirar entrega - 1907 40 40
export function addproduto40 (selector) {

    //Card de voltagem - clicar
    cy.get(':nth-child(41) > div.md-button > .md-no-style')
        .click({force:true})

    cy.wait (500)

    //Botão adicionar produto após selecionar voltagem do produto, clicar no botão
    cy.get('[style="padding: 0px 5px;"] > .md-primary')
        .click({force:true})

    cy.wait(4400)

    //Botão Retirada / Entrega - texto Retirada / Entrega
    cy.get(':nth-child(41) > .md-whiteframe-2dp > :nth-child(3) > [ng-show="itemAtual._permiteEntrega"] > .md-auto-horizontal-margin > .md-label')
        .click({force:true})
}
