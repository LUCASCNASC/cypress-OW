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

    //Botão Retirada / Entrega - texto Retirada / Entrega
    cy.get('.valor.flex-gt-sm-50 > .md-checked > .md-label')
        .scrollIntoView()
        .wait(300)
        .should('be.visible')
        .and('not.be.disabled')
        .and('have.text', ' Retirada / Entrega ')
        .click({force:true})
}

//Arrastar botão de Retirada / Entrega do terceiro produto
export function tirarEntregaTerceiro (selector) {

    //Botão Retirada / Entrega - texto Retirada / Entrega
    cy.get('.valor.flex-gt-sm-50 > .md-checked > .md-label')
        .scrollIntoView()
        .wait(300)
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

//Botão para avançar para a tela de Gerar parcelas
export function avancarParaParcelas (selector) {

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
}

//Botão para avançar para a tela de escolher transportadora e rota
export function avancarParaTransportadora (selector) {

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

//Trocar filial de faturamento - faturamento remoto da filial 50 para 6
export function trocarFilialFaturamento (selector) {

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
        .should('exist')
        .and('be.visible')

    //R$ do Valor máximo da entrada
    cy.get('[ng-show="carrinho.getValorParcelamento() > 0"] > .btn-rounded > .layout-wrap > :nth-child(1) > md-list.md-default-theme > .padding-0 > .md-secondary-container > div > .ng-binding > sup')
        .should('exist')
        .and('be.visible')
        .and('have.text', 'R$')

    //Valor do Valor máximo da entrada
    cy.get('[ng-show="carrinho.getValorParcelamento() > 0"] > .btn-rounded > .layout-wrap > :nth-child(1) > md-list.md-default-theme > .padding-0 > .md-secondary-container > div > .ng-binding')
        .should('exist')
        .and('be.visible')

    //botão $
    cy.get('.layout-row.flex-100 > :nth-child(1) > .md-fab')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')

    //botão X
    cy.get(':nth-child(3) > .md-fab')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')

    //Campo máximo da parcela
    cy.get('input.campoMoeda_totalEntrada')
        .should('exist')
        .and('be.visible')
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