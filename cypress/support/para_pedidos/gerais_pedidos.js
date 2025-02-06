//------------------- SALDOS DO PRODUTOS ------

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
    // cy.get('.expandeIcone')
    //     .should('be.visible')
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
    // cy.get('.expandeIcone')
    //     .should('be.visible')
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
    // cy.get('.expandeIcone')
    //     .should('be.visible')
}


//------------------- FORMAS DE ESCOLHER CLIENTE ------

//Função para escolher cliente CPF para gerar pedido de venda - inserir cliente 
export function escolherClientePedido2 (selector) {
    
    //inserir CPF/CNPJ no campo de cliente para podermos pesquisar pela lupa
    cy.get('.click-cliente > .informe-o-cliente > .cliente-header')
        .wait(500)
        .type('    48976249089{enter}')

    cy.wait(2000)

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
    cy.intercept('/consultaclientes/*').as('api_consultaclientes');
    cy.wait('@api_consultaclientes', { timeout: 40000 })

    // cy.wait(1000)

    cy.intercept('/services/v3/pedido_validar_cliente').as('api_pedido_validar_cliente');
    //após a pesquisa encontrar o cliente, vamos selecionar ele
    cy.get('.md-3-line > div.md-button > .md-no-style')
        .should('be.visible')
        .click()
    cy.wait('@api_pedido_validar_cliente', { timeout: 40000 })
}


//------------------- PARA ADICIONAR PRODUTOS NO PEDIDO ------

//Clicar para selecionar o produto que queremos adicionar ao pedido
export function escolherProdutoPesquisa (selector) {

    cy.intercept('GET', '/services/v3/produto_tambem_compraram**').as('api_produto_tambem_compraram')

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

    // //Check box do produto
    // cy.get('.expandeIcone')
    //     .should('be.visible')

    //Clicar para adicionar no carrinho
    cy.get('.md-list-item-text')
        .should('be.visible')
        .click({force:true})

    cy.wait('@api_produto_tambem_compraram', { timeout: 40000 })
}

//Clicar para selecionar a voltagem que queremos adicionar ao pedido
export function clicarVoltagemProduto (selector) {

    cy.intercept('GET', '/services/v3/produto_relacionado**').as('api_produto_relacionado_lista')

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

    cy.wait('@api_produto_relacionado_lista', { timeout: 40000 })
}

//Botão adicionar produto após selecionar voltagem do produto
export function addProduto (selector) {

    cy.intercept('GET', '/services/v3/produto_servico_vinculado**').as('api_servicos_vinculados')

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

    cy.wait('@api_servicos_vinculados', { timeout: 40000 })
}


//------------------- VALIDAÇÕES PRESTAMISTA ------

//validar adição do serviço prestamista, após clicarmos para adicionar
export function ticketPrestamistaAdicionado (selector) {

    cy.get('[ng-repeat="itemAtual in item.servicos track by $index"] > ul')
        .scrollIntoView()
        .wait(200)

    //ticket inteiro
    cy.get('[ng-repeat="itemAtual in item.servicos track by $index"] > ul')
        .should('be.visible')

    //nome do serviço prestamista
    cy.get('ul > :nth-child(1) > .ng-binding')
        .should('be.visible')

    //cifrão do valor do prestamista
    cy.get('ul > :nth-child(1) > sup')
        .should('be.visible')
        .and('have.text', 'R$')

    //"Vendedor"
    cy.get(':nth-child(2) > b') 
        .should('be.visible')
        .and('have.text', 'Vendedor:')

    //Nome do vendedor
    cy.get('[ng-repeat="itemAtual in item.servicos track by $index"] > ul > :nth-child(2)')
        .should('be.visible')

    //Ícone lápis - para edição do vendedor
    cy.get('ul > :nth-child(2) > .md-primary')
        .should('be.visible')
        .and('not.be.disabled')
}

//validar adição do serviço prestamista, após clicarmos para agrupar lançamentos
export function ticketPrestAdicionadoRecebAgrupado (selector) {

    cy.get('b.ng-binding')
      .contains('T.A. Prestamista Não separa Com juros - Futuro')
      .should('be.visible')
}



//------------------- OUTROS ------


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

//validando composição deste KIT
export function composicaoDesteKit (selector) {

    cy.get('.is-expanded > v-pane-header.ng-scope > div')
        .scrollIntoView()
        .wait(200)
        .should('be.visible')
        .and('contain', 'Composição deste KIT')
}

//clicar no botão editar parcelas da forma de pagamento - quando já temos uma forma de pagamento escolhida
export function clicarEditarParcelas (selector) {

    //ícone lápis para edição de parcelas da forma de pagamento
    cy.get('.btn-remove-item-list > :nth-child(3) > .md-raised')
        .click({force:true})
}

// valores Subtotal e Total Financeiro comparar eles
export function compararSubtotalTotalFinanceiro (span1, span2) {
    
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
  

//------------------- PROMOÇÃO ------

//escolhendo a primeira promoção do produto - uma promoção
export function selecionarPrimeiraPromoProduto (selector) {

    //botão voltar
    cy.get('[ng-click="modalSaldo()"] > .ng-binding')
        .should('be.visible')
        .and('not.be.disabled')

    //título modal promoções
    cy.get('.md-dialog-fullscreen > ._md-toolbar-transitions > .md-toolbar-tools > .flex')
        .should('be.visible')
        .and('contain', 'Promoções')

    //botão X
    cy.get('.md-dialog-fullscreen > ._md-toolbar-transitions > .md-toolbar-tools > [ng-click="cancel()"] > .ng-binding')
        .should('be.visible')
        .and('not.be.disabled')

    //botão "NÃO USAR PROMOÇÃO"
    cy.get('#dialogContent_137 > [style="padding: 0 5px"] > .md-primary')
        .should('be.visible')
        .and('not.be.disabled')

    //promoção em sim
    cy.get('.md-3-line > div.md-button > .md-no-style')
        .should('be.visible')
        .and('not.be.disabled')

    //escolhendo a promoção
    cy.get('.md-3-line > div.md-button > .md-no-style')
        .click()
}