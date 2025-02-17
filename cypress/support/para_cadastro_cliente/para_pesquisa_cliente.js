//validando mensagem "Aguarde carregando..."
export function mensagemAguardeCarregando (selector) {

    //Mensagem de "Aguarde carregando..."
    cy.get('.md-dialog-fullscreen > .carregando')
        .should('be.visible')
        .and('have.text', ' Aguarde carregando...')
}

//clicando na lupa pesquisa de cliente
export function clicarLupaPesquisaCliente (selector) {

    cy.intercept('GET', '/views/cliente/modalClientes.html').as('api_cliente_modalClientes')
    //clicar na lupa de pesquisa de clientes
    cy.get('.md-block > .ng-binding')
        .should('be.visible')
        .click({force:true})
    cy.wait('@api_cliente_modalClientes', { timeout: 40000 })
}

//validando botão X do card cliente
export function cardClienteValidar (selector) {

    //Card de clientes - Botão X
    cy.get('.md-dialog-fullscreen > ._md-toolbar-transitions > .md-toolbar-tools > .md-icon-button > .ng-binding')
        .should('be.visible')
        .and('not.have.attr', 'disabled')

    //Card inteiro de Clientes
    cy.get('.md-dialog-fullscreen')
        .should('be.visible')

    //Card de clientes - Título Clientes
    cy.get('.md-dialog-fullscreen > ._md-toolbar-transitions > .md-toolbar-tools > .flex')
        .should('be.visible')
        .and('have.text', 'Clientes')

    //Card de clientes - Texto Digite o nome ou o CPF do cliente para busca
    cy.get('label[for="txtBuscaClienteModal"]')
        .should('have.text', 'Digite o nome ou o CPF do cliente para busca')
        .and('be.visible')

    //Card de clientes - Botão de cadastrar novo cliente
    cy.get('[ng-click="novoCliente()"] > .ng-binding')
        .should('be.visible')
        .and('not.have.attr', 'disabled')

    //Card de clientes - Botão comando de voz
    cy.get('[ng-click="capturarVozCliente()"] > .ng-binding')
        .should('be.visible')
        .and('not.have.attr', 'disabled')

    //Card de clientes - campo para digitar cliente
    cy.get('#txtBuscaClienteModal')
        .should('be.visible')
        .invoke('val')
        .should('not.be.empty')
}

//validando numero e descrição do cliente CPF selecionado
export function numeroDescricaoCPFpesquisado (selector) {

    //Número CPF do cliente selecionado
    cy.get('#lblCpfClienteSelecionado')
        .should('be.visible')

    //Descrição CPF do cliente selecionado
    cy.get('#lblNomeClienteSelecionado')
        .should('be.visible')
}

//validando numero e descrição do cliente CNPJ selecionado
export function numeroDescricaoCNPJpesquisado (selector) {

    //Número CNPJ do cliente selecionado
    cy.get('#lblCpfClienteSelecionado')
        .should('be.visible')

    //Descrição CNPJ do cliente selecionado
    cy.get('#lblNomeClienteSelecionado') 
        .should('be.visible')
}

//clicando cliente CPF pesquisado
export function clicarCPFPesquisado (selector) {

    //Card de clientes - Conteúdo que a pesquisa trouxe
    cy.get('button[aria-label="CPF AUTOMACAO SABIUM - LUCAS CAMARGO 117.415.410-18   - MARINGA/PR"]')
        .should('be.visible')
        .and('not.have.attr', 'disabled')

    //Card de clientes - clicar no botão de conteúdo que a pesquisa trouxe
    cy.get('button[aria-label="CPF AUTOMACAO SABIUM - LUCAS CAMARGO 117.415.410-18   - MARINGA/PR"]')
        .click()
}

//clicando cliente CNPJ pesquisado
export function clicarCNPJPesquisado (selector) {

    //Card de clientes - Conteúdo que a pesquisa trouxe
    cy.get('button[aria-label="CNPJ AUTOMACAO SABIUM - LUCAS CAMARGO 24.468.163/0001-61   - MARINGA/PR"]')
        .should('be.visible')
        .and('not.have.attr', 'disabled')

    //Card de clientes - clicar no botão de conteúdo que a pesquisa trouxe
    cy.get('button[aria-label="CNPJ AUTOMACAO SABIUM - LUCAS CAMARGO 24.468.163/0001-61   - MARINGA/PR"]')
        .click()
}

//pesquisar cliente por numero de CPF
export function inserirCPF (selector) {

    const numeroCPF = "117.415.410-18"

    //inserir CPF/CNPJ no campo de cliente para podermos pesquisar pela lupa
    cy.get('.click-cliente > .informe-o-cliente > .cliente-header')
        .wait(500)
        .type(numeroCPF,'{downArrow}')
}

//digitar cliente por numero de CPF
export function digitarNovamenteCPF (selector) {

    const numeroCPF = "117.415.410-18"

    //Card de clientes - campo para digitar cliente
    cy.get('#txtBuscaClienteModal')
        .clear()
        .wait(100)
        .should('have.value','')
        .wait(100)
        .type(numeroCPF)
}

//pesquisar cliente por numero de CNPJ
export function inserirCNPJ (selector) {

    const numeroCNPJ = "24468163000161"

    //inserir CPF/CNPJ no campo de cliente para podermos pesquisar pela lupa
    cy.get('.click-cliente > .informe-o-cliente > .cliente-header')
        .wait(500)
        .type(numeroCNPJ,'{downArrow}')
}

//digitar cliente por numero de CNPJ
export function digitarNovamenteCNPJ (selector) {

    const numeroCNPJ = "24468163000161"

    //Card de clientes - campo para digitar cliente
    cy.get('#txtBuscaClienteModal')
        .clear()
        .wait(100)
        .should('have.value','')
        .wait(100)
        .type(numeroCNPJ)
}

//pesquisar cliente por descrição de CPF
export function inserirDescricaoCPF (selector) {

    const descricaoCPF = "CPF AUTOMAÇÃO SABIUM - LUCAS CAMARGO"

    //inserir CPF/CNPJ no campo de cliente para podermos pesquisar pela lupa
    cy.get('.click-cliente > .informe-o-cliente > .cliente-header')
        .click()

    //inserir CPF/CNPJ no campo de cliente para podermos pesquisar pela lupa
    cy.get('#txtBuscaCliente')
        .wait(500)
        .type(descricaoCPF,'{downArrow}')
}

//digitar cliente por descrição de CPF
export function digitarNovamenteDescricaoCPF (selector) {

    const descricaoCPF = "CPF AUTOMAÇÃO SABIUM - LUCAS CAMARGO"

    //Card de clientes - campo para digitar cliente
    cy.get('#txtBuscaClienteModal')
        .clear()
        .wait(100)
        .should('have.value','')
        .wait(100)
        .type(descricaoCPF)
}

//pesquisar cliente por descrição de CNPJ
export function inserirDescricaoCNPJ (selector) {

    const descricaoCNPJ = "CNPJ AUTOMAÇÃO SABIUM - LUCAS CAMARGO"

    //inserir CPF/CNPJ no campo de cliente para podermos pesquisar pela lupa
    cy.get('.click-cliente > .informe-o-cliente > .cliente-header')
        .click()

    //inserir CPF/CNPJ no campo de cliente para podermos pesquisar pela lupa
    cy.get('#txtBuscaCliente')
        .wait(500)
        .type(descricaoCNPJ,'{downArrow}')
}

//digitar cliente por descrição de CNPJ
export function digitarNovamenteDescricaoCNPJ (selector) {

    const descricaoCNPJ = "CNPJ AUTOMAÇÃO SABIUM - LUCAS CAMARGO"

    //Card de clientes - campo para digitar cliente
    cy.get('#txtBuscaClienteModal')
        .clear()
        .wait(100)
        .should('have.value','')
        .wait(100)
        .type(descricaoCNPJ)
}