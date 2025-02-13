export class pedServicoAvulso{

    constructor(page) {
        this.page = page
    }

    //Função para escolher cliente CPF para gerar pedido de venda - pesquisa por cliente
    async escolherClientePedido (selector) {

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

    //Validar e clicar no menu de opções
    async iconeMenuOpcoes (selector) {

        //Ícone do menu de opções
        cy.get('[aria-label="Menu de opções"] > .ng-binding')
            .should('be.visible')
            .and('not.have.attr', 'disabled')
                
        //Clicar ni ícone do menu de opções
        cy.get('[aria-label="Menu de opções"] > .ng-binding')
            .click({force:true})
    }

    //Validando opção Cliente Completo, do menu de opções
    async clienteCompletoOpcaoMenu (selector) {

        //ícone Cliente completo
        cy.get('md-icon[md-svg-src="images/icons/cliente_completo.svg"]')
            .scrollIntoView()
            .should('exist')

        //Opção Cliente completo no menu de opções
        cy.get('a[aria-label="Cliente completo"]')
            .should('be.visible')
            .and('not.have.attr', 'disabled')

        //Opção Cliente completo no menu de opções
        cy.get('a[aria-label="Cliente completo"]')
            .should('have.attr', 'aria-label', 'Cliente completo')

        //Opção Cliente completo no menu de opções
        cy.get('a[aria-label="Cliente completo"]')
            .click({force:true})
    }

    //Validando e inserindo número do pedido no campo Cliente ou pedido
    async pesquisarPedidoNumero (selector) {

        //Campo Cliente ou pedido - validando mensagem dentro do campo antes de preencher
        cy.get('label[for="input_96"]')
            .should('have.text', 'Cliente ou pedido')     

        //Campo Cliente ou pedido
        cy.get('#input_96')
            .should('be.visible')
            .and('have.value','')
            .type(nomeClienteCPF, {force: true})
    }

    //Validando menu dentro do cadastro de cliente completo
    async clicarMenuClienteCompleto (selector) {

        //Validando 
        cy.get('#menu_click_pri')
            .should('be.visible')
            .and('not.have.attr', 'disabled')

        //clicar no menu
        cy.get('#menu_click_pri')
            .click({force:true})
    }

    //Validando opção serviços
    async clicarOpcaoServicos (selector) {

        //Validando
        cy.get('div[ng-repeat="tab in tabs"][ng-if="tab.checked"]')
            .should('be.visible')
            .and('contain', 'Serviços')
            .and('not.have.attr', 'disabled')

        //Clicar no elemento
        cy.get('#menu_mais_pri > :nth-child(3)')
            .click({force:true})
    }

    //Mensagem de carregamento aba serviços
    async aguardeCarregandoServico (selector) {

        //ícone de carregamento
        cy.get('.layout-align-center-center > .md-accent')
            .should('be.visible')

        //Mensagem "Aguarde carregando..."
        cy.get('.carregando')
            .should('be.visible')
            .and('have.text', 'Aguarde carregando...')
    }

    //Validando botão ADICIONAR MÃO DE OBRA
    async botaoAddMaoObra (selector) {

        cy.get('[ng-show="filtroShow(pedidoAtual)"][aria-hidden="false"] > .md-list-item-text > .prodServicoUl > :nth-child(1) > .md-default')
            .should('be.visible')
            .and('contain', 'Adicionar Mão de Obra')
            .and('not.have.attr', 'disabled')
    }

    //Validando botão ADICIONAR GARANTIAS
    async botaoAddGarantias (selector) {

        cy.get('[ng-show="filtroShow(pedidoAtual)"][aria-hidden="false"] > .md-list-item-text > .prodServicoUl > :nth-child(2) > .md-default')
            .should('be.visible')
            .and('contain', 'Adicionar Garantias')
            .and('not.have.attr', 'disabled')
    }

    //Clicar no botão ADICIONAR MÃO DE OBRA
    async clicarAddMaoObra (selector) {

        cy.get('[ng-show="filtroShow(pedidoAtual)"][aria-hidden="false"] > .md-list-item-text > .prodServicoUl > :nth-child(1) > .md-default')
            .click({force:true})
    }

    //Clicar no botão ADICIONAR GARANTIAS
    async clicarAddGarantias (selector) {

        cy.get('[ng-show="filtroShow(pedidoAtual)"][aria-hidden="false"] > .md-list-item-text > .prodServicoUl > :nth-child(2) > .md-default')
            .click({force:true})
    }

    //Validações card de serviços apenas com Garantias
    async modalGarantiasServicosVinculados (selector) {

        //Título do modal - Serviços Vinculados
        cy.get('.md-dialog-fullscreen > ._md-toolbar-transitions > .md-toolbar-tools > .flex')
            .should('be.visible')
            .and('contain', 'Serviços Vinculados')

        //botão x do modal Serviços Vinculados
        cy.get('.md-dialog-fullscreen > ._md-toolbar-transitions > .md-toolbar-tools > .md-icon-button > .ng-binding')
            .should('be.visible')
            .and('not.be.disabled')

        //mensagem do modal Serviços Vinculados - "Garantias"
        cy.get('p.ng-binding')
            .contains('Garantias')
            .should('be.visible')
    }

    //Validações card de serviços
    async modalMaoObraServicosVinculados (selector) {

        //Título do modal - Serviços Vinculados
        cy.get('.md-dialog-fullscreen > ._md-toolbar-transitions > .md-toolbar-tools > .flex')
            .should('be.visible')
            .and('contain', 'Serviços Vinculados')

        //botão x do modal Serviços Vinculados
        cy.get('.md-dialog-fullscreen > ._md-toolbar-transitions > .md-toolbar-tools > .md-icon-button > .ng-binding')
            .should('be.visible')
            .and('not.be.disabled')

        //mensagem do modal Serviços Vinculados - "Mão de Obra"
        cy.get('p.ng-binding')
            .contains('Mão de Obra')
            .scrollIntoView()
            .wait(200)
            .should('be.visible')
    }

    //botão OK modal Serviços Vinculados
    async okServicosVinculados (selector) {

        //validando botão
        cy.get('button[ng-click="salvar()"]')
            .should('be.visible')
            .and('not.be.disabled')
            .and('have.text',' Ok ')

        //clicar no botão
        cy.get('button[ng-click="salvar()"]')
            .click({force:true})
    }

    //Mensagem de "Item adicionado com sucesso!"
    async messServicoAdicionadoSucesso (selector) {

        //Item adicionado com sucesso! - card inteiro
        cy.get('.toast')
            .should('be.visible')

        //Item adicionado com sucesso! - Aviso
        cy.get('.toast-title')
            .should('be.visible')
            .and('have.text', 'Aviso')

        //Item adicionado com sucesso! - Mensagem em si
        cy.get('.toast-message')
            .should('be.visible')
            .and('have.text', 'Item adicionado com sucesso!')
    }

    //Botão SALVAR
    async botaoSalvarServico (selector) {

        //Validando botão completo
        cy.get('.btn')
            .should('be.visible')
            .and('not.be.disabled')
            .and('contain',' SALVAR ')

        cy.get('.btn > .ng-scope')
            .should('be.visible')
            .and('not.be.disabled')

        //clicar no botão
        cy.get('.btn')
            .click({force:true})
    }

    //Mensagem de carregamento após clicarmos em SALVAR, do serviço
    async messAguardeCarregando (selector) {

        //ícone giratório
        cy.get('svg')
            .should('be.visible')

        //Mensagem "Aguarde carregando..."
        cy.contains('Aguarde carregando...')
            .should('exist')
            //.and('be.visible')
            //.and('contain', 'Aguarde carregando...')
    }

    //Mensagem de "Registro salvo com sucesso!"
    async messRegistroSalvoSucesso (selector) {

        //Registro salvo com sucesso! - card inteiro
        cy.get('[style="display: block;"]')
            .should('be.visible')

        //Registro salvo com sucesso! - Aviso
        cy.get(':nth-child(1) > .toast-title')
            .should('be.visible')
            .and('have.text', 'Aviso')

        //Registro salvo com sucesso!! - Mensagem em si
        cy.get(':nth-child(1) > .toast-message')
            .should('be.visible')
            .and('have.text', 'Registro salvo com sucesso!')

    }

    //Mensagem de "O Serviço Garantias já foi adicionado à esse produto."
    async messGarantiaJaAdicionada (selector) {

        //O Serviço Garantias já foi adicionado à esse produto. - card inteiro
        cy.get('.toast-warning')
            .should('be.visible')

        //O Serviço Garantias já foi adicionado à esse produto. - Aviso
        cy.get('.toast-warning > .toast-title')
            .should('be.visible')
            .and('have.text', 'Atenção')

        //O Serviço Garantias já foi adicionado à esse produto. - Mensagem em si
        cy.get('.toast-warning')
            .should('be.visible')
            .and('contain', 'O Serviço Garantias já foi adicionado à esse produto.')
    }

    //Clicar no carrinho de compras
    async clicarCarrinhoCompras (selector) {

        cy.intercept('GET', '/images/icons/brazil-real-symbol.svg').as('api_produto_carrinho_compra')
        //validando
        cy.get('#test_btnCarrinho > .md-icon-button > .ng-binding')
            .should('be.visible')
            .click({force:true})
        cy.wait('@api_produto_carrinho_compra', { timeout: 40000 })
    }

    //Botão AVANÇAR
    async botaoAvancarPedido (selector) {

        //validando botão
        cy.get('.flex-gt-sm-50 > .md-primary')
            .scrollIntoView()
            .should('be.visible')
            .and('not.be.disabled')
            .and('have.text',' Avançar ')

        cy.intercept('POST', '/services/v3/pedido_forma_pagamento_lista').as('api_pedido_forma_pagamento_lista')
        //clicando botão
        cy.get('.flex-gt-sm-50 > .md-primary')
            .click({force:true})
        cy.wait('@api_pedido_forma_pagamento_lista', { timeout: 40000 })
    }

    //Botão "GERAR PARCELAS"
    async botaoGerarParcelasServicos (selector) {

        

        //Botão "GERAR PARCELAS" - validações
        cy.get('.gerar-parcelas > .layout-wrap > [style="padding: 0 5px"] > .md-primary')
            .scrollIntoView()
            .wait(200)
            .should('exist')
            .and('have.text', 'Gerar parcelas')

        cy.intercept('GET', '/views/carrinho/modalFormasPgto.html').as('api_modal_forma_pagamento')
        //Botão "GERAR PARCELAS" - clicar
        cy.get('.gerar-parcelas > .layout-wrap > [style="padding: 0 5px"] > .md-primary')
            .click({force:true})
            
        cy.wait('@api_modal_forma_pagamento', { timeout: 40000 })
    }

    //Escolher servico, para vende-lo - 144 (T.A. MO Não Destaca e Separa Processo Diferente)
    async produtoServicoAvulso (selector) {

        const codigo_servico = '144'

        cy.intercept('GET', /\/consultaprodutos\/.*144.*/).as('apiConsultaProdutos_produtoServicoAvulso')

        //Validando campo Buscar produto
        cy.get('#searchText')
            .should('be.visible')
            .and('not.be.disabled')

        //Validando campo Buscar produto - validando mensagem dentro do campo antes de preencher
        cy.get('label[for="searchText"]')
            .should('have.text', 'Buscar produtos')

        //Prenchendo campo Buscar produto
        cy.get('#searchText')
            .type(codigo_servico)
            .wait(100)
            .should('have.value', codigo_servico)

        cy.wait('@apiConsultaProdutos_produtoServicoAvulso', { timeout: 40000 })
    }

    //Validando serviço com saldo disponível local
    async saldoDisponivelServico (selector) {
        
        //Validando imagem
        cy.get('.resultado-imagem')
            .should('be.visible')

        //Validando "Saldo disponivel"
        cy.get('.label')
            .should('be.visible')
            .and('have.text','Saldo disponivel')
            .invoke('css', 'background-color') // Obtém a cor do elemento
            .should('equal', 'rgb(92, 184, 92)')

        //Validando nome do serviço dentro card
        cy.get('.md-resultado-titulo')
            .should('be.visible')

        //Validado código do serviço dentro do card
        cy.get('.badge-saldo.ng-binding')
            .should('be.visible')

        //Validando R$ dentro do card
        cy.get('sup')
            .should('be.visible')
            .and('have.text','R$')

        //Validando valor do serviço dentro do card
        cy.get('.valor-busca')
            .should('be.visible')
    }

    //Clicar para selecionar o produto que queremos adicionar ao pedido
    async escolherServicoPesquisa (selector) {

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

        cy.intercept('GET', '/services/v3/produto_servico/*').as('api_produto_produto_servico')
        //Clicar para adicionar no carrinho
        cy.get('.md-list-item-text')
            .should('be.visible')
            .click({force:true})
        cy.wait('@api_produto_produto_servico', { timeout: 40000 })
    }

    //Mensagem de "Item adicionado com sucesso!"
    async messItemAdicionadoSucesso (selector) {

        //O Serviço Garantias já foi adicionado à esse produto. - card inteiro
        cy.get('.toast')
            .should('be.visible')

        //O Serviço Garantias já foi adicionado à esse produto. - Aviso
        cy.get('.toast-title')
            .should('be.visible')
            .and('have.text', 'Aviso')

        //O Serviço Garantias já foi adicionado à esse produto. - Mensagem em si
        cy.get('.toast-message')
            .should('be.visible')
            .and('contain', 'Item adicionado com sucesso!')
    }

    //validando que serviço foi adicionando ao carrinho - serviço que gera NFe
    async servicoAdicionadoCarrinho (selector) {

        //card completo
        cy.get('.servicos > .noscroll')
            .should('be.visible')

        //nome do serviço
        cy.get('span.list-title')
            .should('be.visible')

        //Quantidade
        cy.get('.flex-60 > :nth-child(2) > b')
            .should('be.visible')
            .and('have.text', 'Quantidade:')

        //valor da quantidade
        cy.get('.flex-60 > :nth-child(2)')
            .should('be.visible')

        //Vandedor
        cy.get('.flex-60 > :nth-child(3) > b')
            .should('be.visible')
            .and('have.text', 'Vendedor:')

        //Valor do vendedor
        cy.get('.flex-60 > :nth-child(3)')
            .should('be.visible')

        //botão para editar vendedor
        cy.get('.flex-60 > :nth-child(3) > .md-primary')
            .should('be.visible')
            .and('not.be.disabled')

        //valor real do serviço
        cy.get('input[ng-model="servAtual.valorFinal"]')
            .should('be.visible')

        //botão excluir seviço
        cy.get('.btn-remove-item-list > .md-button')
            .should('be.visible')
            .and('not.be.disabled')
    }

    //Escolher servico host, para vende-lo - 104 (Recarga Homologação TIM TIM)
    async produtoServicoHost (selector) {

        const codigo_servicoHost = '104'

        //Validando campo Buscar produto
        cy.get('#searchText')
            .should('be.visible')
            .and('not.be.disabled')

        //Validando campo Buscar produto - validando mensagem dentro do campo antes de preencher
        cy.get('label[for="searchText"]')
            .should('have.text', 'Buscar produtos')

        //Prenchendo campo Buscar produto
        cy.get('#searchText')
            .type(codigo_servicoHost)
            .wait(100)
            .should('have.value', codigo_servicoHost)
    }

    //Validando e clicando opção Serviços, do menu de opções
    async clicarServicosMenu (selector) {

        //Opção Serviços no menu de opções
        cy.get('a[aria-label="Serviços"]')
            .should('be.visible')
            .and('not.have.attr', 'disabled')

        //Opção Serviços no menu de opções
        cy.get('a[aria-label="Serviços"]')
            .should('have.attr', 'aria-label', 'Serviços')

        //ícone Serviços 
        cy.get('[role="listitem"][href="#!/servicos"] > div.md-button > .md-no-style')
            .scrollIntoView()
            .should('be.visible')
            .click({force:true})
    }

    //modal para selecionar faixa de preço para o serviço - clicar e escolher o valor
    async escolherValorRecarga (selector) {

        //validando título do modal
        cy.get('.md-dialog-fullscreen > ._md-toolbar-transitions > .md-toolbar-tools > .flex')
            .should('be.visible')
            .and('contain', 'Selecione uma faixa de preço para o serviço')

        //validando botão X do modal
        cy.get('.md-dialog-fullscreen > ._md-toolbar-transitions > .md-toolbar-tools > .md-icon-button > .ng-binding')
            .should('be.visible')
            .and('not.be.disabled')

        //validando Garantia Celular Host
        cy.get('.md-subheader-content')
            .should('be.visible')
            .and('contain.text', 'Recarga Celular HOST')

        //validando nome do serviço, dentro do card
        cy.get('h3.ng-binding')
            .should('be.visible')

        //validando Valor do serviço dentro do card
        cy.get('.md-no-style > .md-list-item-text > p.ng-binding')
            .should('be.visible')
            .and('contain', 'Valor:')

        //validando "Valor" na escolha do valor da recarga
        cy.get('.md-secondary-container > :nth-child(1)')
            .should('be.visible')
            .and('contain', 'Valor')

        //clicar na caixinha para escolher o valor da recarga
        cy.contains('.md-text.ng-binding', '2,00')  // Encontra o texto "2,00" dentro do <div>
            .parents('md-select-value')  // Sobe para o <md-select-value> pai
            .click();  // Clica no <md-select-value>

        //selecionando valor da recarga
        cy.contains('10,00')
            .click({force:true})

        cy.wait(200)

        //clicando no botão OK após selecionarmos o valor da recarga
        cy.get('.layout-align-end-end > .md-raised')
            .should('be.visible')
            .and('not.be.disabled')
            .and('have.text', ' Ok ')
            .click({force:true})      
    }
}