import gerarCpf from '../../support/gerarCPF';
import gerarCNPJ from '../../support/gerarCNPJ';

//Validar e preencher campo CPF
export function preencherCPFcliente (selector) {

    const cpf = gerarCpf(); // Gera um CPF válido

    //Campo CPF - validando mensagem dentro do campo antes de preencher
    cy.get('label[for="txtCpfCnpj"]')
        .should('have.text', 'CPF')

    //Campo CPF 
    cy.get('#txtCpfCnpj')
        .should('be.visible')
        .and('have.value','')
        .type(cpf, {force: true})
}

//Validar e preencher campo CNPJ
export function preencherCNPJcliente (selector) {

    const cnpj = gerarCNPJ(); // Gera um CNPJ válido

    //Campo CPF - validando mensagem dentro do campo antes de preencher
    cy.get('label[for="txtCpfCnpj"]')
        .should('have.text', 'CPF')

    //Campo CNPJ
    cy.get('#txtCpfCnpj')
        .should('be.visible')
        .and('have.value','')
        .type(cnpj, {force: true})
}

//Validar e clicar no menu de opções
export function iconeMenuOpcoes (selector) {

    //Ícone do menu de opções
    cy.get('[aria-label="Menu de opções"] > .ng-binding')
        .should('be.visible')
        .and('not.have.attr', 'disabled')
            
    //Clicar ni ícone do menu de opções
    cy.get('[aria-label="Menu de opções"] > .ng-binding')
        .click({force:true})
}

//Escolher opção cliente no menu de opções
export function opcaoClienteCompleto (selector) {

    //Opção Cliente completo no menu de opções
    cy.get('a[aria-label="Cliente completo"]')
        .should('be.visible')
        .and('not.have.attr', 'disabled')

    //Opção Cliente completo no menu de opções
    cy.get('a[aria-label="Cliente completo"]')
        .should('have.attr', 'aria-label', 'Cliente completo')

    //Opção Cliente completo no menu de opções
    cy.get('a[aria-label="Cliente completo"]')
        .scrollIntoView()
        .click({force:true})
}

//Validar e preencher campo Data Nascimento
export function preecherDataNascimento (selector) {

    //Ícone de data de nascimento
    cy.get('#txtDataNasc > .md-datepicker-button')
        .should('be.visible')
        .and('not.have.attr', 'disabled')

    //Campo Data Nascimento - validando mensagem dentro do campo antes de preencher
    cy.get('label[for="txtDataNasc"]')
        .should('have.text', 'Data Nascimento') 

    cy.wait(200)

    cy.contains('Data Nascimento').parent().find('input').type('30/09/1998');

}

//Validar e escolher sexo da pessoa
export function selecionarSexoCliente (selector) {

    //Campo Sexo - validando mensagem dentro do campo antes de preencher
    cy.get('label[for="txtSexo"]')
        .should('have.text', 'Sexo') 

    //Campo Tipo de Sexo
    cy.get('#txtSexo')
        .should('be.visible')

    //Clicar no campo Tipo de sexo
    cy.get('#txtSexo')
        .click({force:true})

    //Clicar na opção MASCULINO
    cy.get('.md-text.ng-binding')
        .contains('Masculino')
        .click({force:true})
}

//Validar e prencher campo Nome Completo - CPF
export function preencherNomeCompleto (selector) {

    const nomeClienteCPF = "Novo cadastro cliente CPF"

    //Campo Nome - validando mensagem dentro do campo antes de preencher
    cy.get('label[for="txtRazaoSocial"]')
        .should('have.text', 'Nome Completo') 

    //Campo Nome Completo
    cy.get('#txtRazaoSocial')
        .should('be.visible')
        .and('have.value','')
        .type(nomeClienteCPF, {force: true})
}

//Validar e prencher campo Nome Social - CPF
export function preencherNomeSocial (selector) {

    const nomeClienteCPF = "Novo cadastro CPF"

    //Campo Nome - validando mensagem dentro do campo antes de preencher
    cy.get('label[for="txtNomeFantasia"]')
        .should('have.text', 'Nome Social') 

    //Campo Nome Completo
    cy.get('#txtNomeFantasia')
        .should('be.visible')
        .and('have.value','')
        .type(nomeClienteCPF, {force: true})
}

//Validar e prencher campo Nome CNPJ - CPF
export function preencherNomeCNPJ (selector) {

    const nomeClienteCNPJ = "Novo cadastro cliente CNPJ"

    //Campo Nome - validando mensagem dentro do campo antes de preencher
    cy.get('label[for="txtRazaoSocial"]')
        .should('have.text', 'Nome') 

    //Campo Nome Completo
    cy.get('#txtRazaoSocial')
        .should('be.visible')
        .and('have.value','')
        .type(nomeClienteCNPJ, {force: true})
}

//Validar e prencher campo Nome Fantasia - CPF
export function preencherNomeFantasiaCNPJ (selector) {

    const nomeClienteCNPJ = "Novo cadastro cliente CNPJ"

    //Campo Nome Fantasia - validando mensagem dentro do campo antes de preencher
    cy.get('label[for="txtNomeFantasia"]')
        .should('have.text', 'Nome Social') 

    cy.get('#txtNomeFantasia')
        .should('be.visible')
        .and('have.value','')
        .type(nomeClienteCNPJ, { force: true })
}

//Validar e clicar no botão para salvar cadastro de cliente
export function clicarSalvarCliente (selector) {

    //Botão SALVAR
    cy.get('.btn')
        .scrollIntoView()
        .wait(200)
        .should('be.visible')
        .and('not.have.attr', 'disabled')
    
    //Clicar no botão SALVAR
    cy.get('.btn')
        .click({force:true})
}

//Validar mensagem de endereço incluído com sucesso
export function messTelefoneIncluidoSucesso (selector) {

    //Card Endereço incluído com sucesso.
    cy.get('.toast-success')
        .should('be.visible')

    //Card Endereço incluído com sucesso. - Aviso
    cy.get(':nth-child(1) > .toast-title')
        .should('be.visible')
        .and('have.text', 'Aviso')

    //Card Endereço incluído com sucesso. - Endereço incluído com sucesso.
    cy.get('.toast-success > .toast-message')
        .should('be.visible')
        .and('have.text', 'Telefone incluído com sucesso.')
}

//botão + para adicionar um novo endereço
export function clicarAdicionarNovoEndereço (selector) {

    //Botão +, para adicionar um novo endereço
    cy.get('.layout-align-end-end > .md-fab')
        .should('be.visible')
        .and('not.have.attr', 'disabled')

    //Clicar no botão +, para adicionar um novo endereço
    cy.get('.layout-align-end-end > .md-fab')
        .click()
}

//validando card endereço antes de preencher os campos
export function cardEnderecoVazioValidar (selector) {

    //Card Endereço - validando título Endereço
    cy.get('.md-dialog-fullscreen > ._md-toolbar-transitions > .md-toolbar-tools > .flex')
        .should('be.visible')
        .and('have.text', 'Endereço')

    //Validando botão X
    cy.get('.md-dialog-fullscreen > ._md-toolbar-transitions > .md-toolbar-tools > .md-icon-button > .ng-binding')
        .should('be.visible')
        .and('not.have.attr', 'disabled')

    //Tentar adicionar endereço sem passar as informações necessárias - não deve deixar
    cy.get('#btnModalAddEndereco')
        .should('be.visible')
        .and('not.have.attr', 'not.disabled')

    //Campo Tipo de Endereço - validando mensagem dentro do campo antes de preencher
    cy.get('label[for="txtTpEndereco"]')
        .should('have.text', 'Tipo de Endereço') 

    //Validando campo vazio - Tipo de Endereço
    cy.get('#txtTpEndereco')
        .should('be.visible')
        .and('have.value', '')
}

//selecionar tipo de endereço
export function escolherTipoEndereco (selector) {

    //Selecionar tipo de endereço
    cy.get('.md-text.ng-binding')
        .contains('Padrão')
        .click({force:true})
}

//clicar para abrir opções de tipo endereço
export function clicarAbrirTipoEndereco (selector) {

    //Clicar para aparecer as opções do Tipo de Endereço
    cy.get('#txtTpEndereco')
        .click({force:true})
}

//validar botão salvar sem ter os campos obrigatórios, ou seja, tem que estar desabilitado
export function botaoSalvarDesabilitado (selector) {

    //Validando botão SALVAR, antes de preencher os campos obrigatórios
    cy.get('#btnModalAddEndereco')
        .should('be.visible')
        .and('not.have.attr', 'not.disabled')
}

// validando mensagem Endereço Incluído com sucesso, após incluírmos o endereço no cadastro
export function messEnderecoIncluidoSucesso (selector) {

    //Card Endereço incluído com sucesso.
    cy.get('.toast-success')
        .should('be.visible')

    //Card Endereço incluído com sucesso. - Aviso
    cy.get('.toast-success > .toast-title')
        .should('be.visible')
        .and('have.text', 'Aviso')

    //Card Endereço incluído com sucesso. - Endereço incluído com sucesso.
    cy.get('.toast-success > .toast-message')
        .should('be.visible')
        .and('have.text', 'Endereço incluído com sucesso.')
}

//validando informações que foram adicionadas no endereço
export function infosEnderecoAdicionado (selector) {

    //Card de endereço adicionado
    cy.get('.md-whiteframe-2dp')
        .should('be.visible')
        .and('contain', 'Padrão')
        .and('contain', 'RUA PETÚNIA - 66 - PARQUE INDUSTRIAL')
        .and('contain', '87065-300')
}

//clicar para salvar cadastro de cliente completo
export function clicarSalvarClienteCompleto (selector) {

    cy.get('.btn > .ng-scope')
        .click({force:true})
}

//Validar e clicar na aba ENDEREÇO
export function clicarAbaEndereco (selector) {

    //Aba Endereço
    cy.get('#menu_items_pri > :nth-child(2)')
        .should('be.visible')
        .and('have.text', 'Endereço')

    cy.intercept('GET', '/services/v3/dados_tabela/tipoendereco').as('api_cliente_completo_endereco')
    //Clicar na aba Endereço
    cy.get('#menu_items_pri > :nth-child(2)')
        .scrollIntoView()
        .click({force:true})
    cy.wait('@api_cliente_completo_endereco', { timeout: 40000 })
}

//Validar e clicar na aba ROTA
export function clicarAbaRota (selector) {

    //Validando aba Rota
    cy.get('#menu_items_pri > :nth-child(3)')
        .should('be.visible')
        .and('have.text', 'Rotas')

    cy.intercept('GET', '/views/cliente/clienteRotasLista.html').as('api_cliente_completo_rota')
    //Clicar na aba Rota
    cy.get('#menu_items_pri > :nth-child(3)')
        .click()
    cy.wait('@api_cliente_completo_rota', { timeout: 40000 })
}

//botão + para adicionar um nova Rota
export function clicarAdicionarNovaRota (selector) {

    //Botão +, para adicionar Rota
    cy.get('.layout-align-end-end > .md-fab')
        .should('be.visible')
        .and('not.have.attr', 'disabled')

    //Botão +, para adicionar Rota
    cy.get('.layout-align-end-end > .md-fab')
        .click()
}

//validar informações do modal rota enquanto ainda está vazio
export function modalRotaVazioValidar (selector) {

    //Card Rotas - título Rotas
    cy.get('.md-dialog-fullscreen > .md-primary > .md-toolbar-tools > .flex')
        .should('be.visible')
        .and('have.text', 'Rotas')

    //Card Rotas - botão X
    cy.get('.md-dialog-fullscreen > .md-primary > .md-toolbar-tools > .md-icon-button > .ng-binding')
        .should('be.visible')
        .and('not.have.attr', 'disabled')

    //Campo Tipo de endereço - validando mensagem dentro do campo antes de preencher
    cy.get('label[for="txtTpEnderecoRota"]')
        .should('have.text', 'Tipo de endereço')

    //Card Rotas - Campo Tipo de endereço
    cy.get('#txtTpEnderecoRota')
        .should('be.visible')
        .and('have.value','')

    //Card Rotas - Campo Rota
    cy.get('#txtRota')
        .should('be.visible')
        .and('have.value','')

    //Card Rotas - Lupa de rota
    cy.get('.layout-gt-sm-column > .md-block > .ng-binding')
        .should('be.visible')
}

//validar informações do modal Endereço enquanto ainda está vazio
export function modalEnderecoVazioValidar (selector) {

    //Campo CEP - validando mensagem dentro do campo antes de preencher
    cy.get('label[for="txtCepEndereco"]')
        .should('have.text', 'CEP') 

    //Validando campo vazio - CEP
    cy.get('#txtCepEndereco')
        .should('be.visible')
        .and('have.value', '')

    //Campo Endereço - validando mensagem dentro do campo antes de preencher
    cy.get('label[for="txtRuaEndereco"]')
        .should('have.text', 'Endereço') 

    //Validando campo vazio - Endereço
    cy.get('#txtRuaEndereco')
        .should('be.visible')
        .and('have.value', '')

    //Campo Número - validando mensagem dentro do campo antes de preencher
    cy.get('label[for="txtNumEndereco"]')
        .should('have.text', 'Número') 

    //Validando campo vazio - Número
    cy.get('#txtNumEndereco')
        .should('be.visible')
        .and('have.value', '')

    //Campo Complemento - validando mensagem dentro do campo antes de preencher
    cy.get('label[for="txtComplEndereco"]')
        .should('have.text', 'Complemento') 

    //Validando campo vazio - Complemento
    cy.get('#txtComplEndereco')
        .should('be.visible')
        .and('have.value', '')

    //Campo Bairro - validando mensagem dentro do campo antes de preencher
    cy.get('label[for="txtBairroEndereco"]')
        .should('have.text', 'Bairro') 

    //Validando campo vazio - Bairro
    cy.get('#txtBairroEndereco')
        .should('be.visible')
        .and('have.value', '')

    //Campo Caixa Postal - validando mensagem dentro do campo antes de preencher
    cy.get('label[for="txtCxPostEndereco"]')
        .should('have.text', 'Caixa Postal')

    //Validando campo vazio - Caixa Postal
    cy.get('#txtCxPostEndereco')
        .should('be.visible')
        .and('have.value', '')

    //Campo Estado - validando mensagem dentro do campo antes de preencher
    cy.get('label[for="txtUfEndereco"]')
        .should('have.text', 'Estado')

    //Validando campo vazio - Estado
    cy.get('#txtUfEndereco')
        .should('be.visible')
        .and('have.value', '')

    //Campo Cidade - validando mensagem dentro do campo antes de preencher
    cy.get('label[for="txtCidEndereco"]')
        .should('have.text', 'Cidade')

    //Validando campo vazio - Cidade
    cy.get('#txtCidEndereco')
        .should('be.visible')
        .and('have.value', '')
}

//selecionar tipo de endereço do modal de rota Padrão
export function escolherTipoEnderecoRota (selector) {

    //Clicar no campo tipo de endereço
    cy.get('#txtTpEnderecoRota')
        .click({force:true})

    //Clicar no tipo de endereço Padrão
    cy.get('.md-text.ng-binding')
        .contains('Padrão')
        .click({force:true})
}

//clicar no botão salvar endereço
export function clicarSalvarEndereco (selector) {

    //Clicar no botão SALVAR, para adicionar endereço
    cy.get('#btnModalAddEndereco')
        .click()
}

//validar menssagem Um endereço do tipo padrão é obrigatório, quanto tento salvar cadastro sem informar endereço
export function messAlertaEnderecoObrigatorio (selector) {

    //Card Um endereço do tipo padrão é obrigatório
    cy.get('.toast')
        .should('be.visible')

    //Card Um endereço do tipo padrão é obrigatório - Alerta
    cy.get('.toast-title')
        .should('be.visible')
        .and('have.text', 'Alerta')

    //Card Um endereço do tipo padrão é obrigatório - Um endereço do tipo padrão é obrigatório.
    cy.get('.toast-message')
        .should('be.visible')
        .and('have.text', 'Um endereço do tipo padrão é obrigatório.')
}

//preencher campo CEP no cadastro de endereço e pesquisar
export function preencherCampoCEPEndereco (selector) {

    const CEPcadastro = "87065300"

    //Preenchendo campo CEP
    cy.get('#txtCepEndereco')
        .type(CEPcadastro, {force:true})

    //Lupa de pesquisa de CEP
    cy.get('.md-icon-float > .ng-binding')
        .should('be.visible')

    //Clicar na lupa de pesquisa de CEP
    cy.get('.md-icon-float > .ng-binding')
        .click({force:true})
}

//preencher campo Numero no cadastro de endereço
export function preencherCampoNumeroEndereco (selector) {

    const numero_endereco = "66"

    //Preenchendo campo Número
    cy.get('#txtNumEndereco')
        .type(numero_endereco, {force:true})
}

//preencher Rota no cadastro de rota e escolher as opções certas
export function preencherRotaCompleta (selector) {

    const rota_cadastro = "1"

    //Campo Rota - validando mensagem dentro do campo antes de preencher
    cy.get('label[for="txtRota"]')
        .should('have.text', 'Rota')

    //Inserindo Rota 
    cy.get('#txtRota')
        .type(rota_cadastro)

    cy.wait(200)

    //Clicando na lupa de rota
    cy.get('.layout-gt-sm-column > .md-block > .ng-binding')
        .click({force:true})

    cy.wait(200)

    //Clicando na rota maringá - segunda rota
    cy.get('v-pane-header.ng-scope > div')
        .click({force:true})

    cy.wait(200)

    //Clicando rota centro - terceira rota
    cy.get(':nth-child(4) > .padding-10-0')
        .click({force:true})
}

// validando mensagem Rota Incluída com sucesso, após incluírmos a rota no cadastro
export function messRotaIncluidaSucesso (selector) {

    //Card Rota incluída com sucesso.
    cy.get('#toast-container > :nth-child(1)')
        .should('be.visible')

    //Card Rota incluída com sucesso. - Aviso
    cy.get(':nth-child(1) > .toast-title')
        .should('be.visible')
        .and('have.text', 'Aviso')

    //Card Rota incluída com sucesso. - Rota incluída com sucesso.
    cy.get(':nth-child(1) > .toast-message')
        .should('be.visible')
        .and('have.text', 'Rota incluída com sucesso.')
}

//validando informações que foram adicionadas no cadastro de rota
export function infosRotaAdicionada (selector) {

    //Card de rota adicionad1
    cy.get('.md-whiteframe-2dp')
        .should('be.visible')
        .and('contain', 'Grupo: 5')
        .and('contain', 'Rota: 1')
        .and('contain', 'Cidade: 1')
        .and('contain', 'Tipo endereço: 1')
}

//Validar e clicar na aba Telefone
export function clicarAbaTelefone (selector) {

    //Validando aba Telefones
    cy.get('#menu_items_pri > :nth-child(4)')
        .should('be.visible')
        .and('have.text', 'Telefones')

    cy.intercept('GET', '/services/v3/dados_tabela/tipotelefone').as('api_cliente_completo_telefones')
    //Clicar na aba Telefones
    cy.get('#menu_items_pri > :nth-child(4)')
        .click()
    cy.wait('@api_cliente_completo_telefones', { timeout: 40000 })
}

//botão + para adicionar um novo Telefone
export function clicarAdicionarNovoTelefone (selector) {

    //Botão +, para adicionar Rota
    cy.get('.layout-align-end-end > .md-fab')
        .should('be.visible')
        .and('not.have.attr', 'disabled')

    //Botão +, para adicionar Rota
    cy.get('.layout-align-end-end > .md-fab')
        .click()
}

//validar informações do modal Telefone enquanto ainda está vazio
export function modalTelefoneVazioValidar (selector) {

    //Card Telefone
    cy.get('.md-dialog-fullscreen > ._md-toolbar-transitions > .md-toolbar-tools > .flex')
        .should('be.visible')
        .and('have.text', 'Telefone')

    //Card Telefone - botão X
    cy.get('.md-dialog-fullscreen > ._md-toolbar-transitions > .md-toolbar-tools > .md-icon-button > .ng-binding')
        .should('be.visible')
        .and('not.have.attr', 'disabled')

    //Campo Tipo de telefone - validando mensagem dentro do campo antes de preencher
    cy.get('label[for="txtTpTel"]')
        .should('have.text', 'Tipo de telefone')

    //Card Telefone - campo tipo de telefone
    cy.get('#txtTpTel')
        .should('be.visible')
        .and('have.value', '')

    //Campo Número - validando mensagem dentro do campo antes de preencher
    cy.get('label[for="txtNumTel"]')
        .should('have.text', 'Número')

    //Card Telefone - campo número
    cy.get('#txtNumTel')
        .should('be.visible')
        .and('have.value', '')

    //Campo Ramal - validando mensagem dentro do campo antes de preencher
    cy.get('label[for="txtRamalTel"]')
        .should('have.text', 'Ramal')

    //Card Telefone - campo ramal
    cy.get('#txtRamalTel')
        .should('be.visible')
        .and('have.value', '')

    //Card Telefone - botão SALVAR
    cy.get('#btnModalAddTel')
        .should('be.visible')
        .and('not.have.attr', 'not.disabled')
}

//selecionar tipo de telefone na aba telefone
export function escolherTipoTelefone (selector) {

    //Card Telefone - campo tipo de telefone
    cy.get('#txtTpTel')
        .click({force:true})
    
    //Card Telefone - escolher tipo de telefone
    cy.get('.md-text.ng-binding')
        .contains('Padrão')
        .click({force:true})
}

//preencher campo Numero, no cadastro de telefone
export function preencherNumeroTelefone (selector) {

    const numero_telefone = "4495787847"

    //Card Telefone - preencher campo número
    cy.get('#txtNumTel')
        .type(numero_telefone)
}

//preencher campo Ramal, no cadastro de telefone
export function preencherRamalTelefone (selector) {

    const ramal_telefone = "435"

    //Card Telefone - preencher campo ramal
    cy.get('#txtRamalTel')
        .type(ramal_telefone)
}

//clicar no botão salvar telefone
export function clicarSalvarTelefone (selector) {

    //Card Telefone - botão SALVAR - depois de preencher os campo obrigatório
    cy.get('#btnModalAddTel')
        .should('be.visible')
        .and('not.have.attr', 'disabled')

    //Card Telefone - clicar botão SALVAR - depois de preencher os campo obrigatório
    cy.get('#btnModalAddTel')
        .click({force:true})
}

//validando informações que foram adicionadas no cadastro de telefone
export function infosTelefoneAdicionado (selector) {

    //Card de endereço adicionado
    cy.get('.md-whiteframe-2dp')
        .should('be.visible')
        .and('contain', 'Padrão')
        .and('contain', '(44) 9578-7847')
        .and('contain', '435')
}

//validando modal de Aguarde carregando.. - após clicar para salvar o cadastro 
export function modalAguardeCarregando (selector) {

    //Modal Aguarde carregando...
    cy.get('.layout-align-center-center > h3')
        .should('be.visible')
        .and('have.text', 'Aguarde carregando...')
}

//validando mensagem Registro salvo com sucesso! - após clicar para salvar o cadastro 
export function messRegistroSalvoSucesso (selector) {

    //Mensagem Registro salvo com sucesso!
    cy.get('.toast-success')
        .should('be.visible')

    //Mensagem Registro salvo com sucesso! - Aviso
    cy.get(':nth-child(1) > .toast-title')
        .should('be.visible')
        .and('have.text', 'Aviso')

    //Mensagem Registro salvo com sucesso! - Registro salvo com sucesso!
    cy.get('.toast-success > .toast-message')
        .should('be.visible')
        .and('have.text', 'Registro salvo com sucesso!')
}

//--------


//dentro do cadastro de cliente completo, clicar no menu para aparecer as opções dentro do cadastro
export function clicarMenuCadastroClienteCompleto (selector) {

    cy.get('#menu_click_pri')
        .should('be.visible')
        .and('not.have.attr', 'disabled')

    cy.get('#menu_click_pri')
        .click()
}

//--------

//Validar e clicar na aba Telefone
export function clicarAbaAnexo (selector) {

    //Validando aba Telefones
    cy.get('#menu_mais_pri > :nth-child(4)')
        .should('be.visible')
        .and('not.have.attr', 'disabled')
        //.and('have.text', 'Anexos')

    cy.intercept('GET', '/services/v3/dados_tabela/tipoanexo').as('api_tipoanexo')
    //Clicar na aba Telefones
    cy.get('#menu_mais_pri > :nth-child(4)')
        .click()
    cy.wait('@api_tipoanexo', { timeout: 40000 })
}

//validando informações da tela antes de fazer upload do arquivo anexo
export function validarAbaAnexoVazia (selector) {

    //título "Anexos" quando entramos na aba
    cy.get('[ng-controller="ListaDeAnexosController"] > :nth-child(1)')
        .should('be.visible')
        .and('have.text', 'Anexos')

    //campo Tipo anexo
    cy.get('#ComboTipoAnexo')
        .should('be.visible')
        .and('not.have.attr', 'disabled')

    //mensagem "Tipo de anexo" dentro do campo tipo de anexo
    cy.get('label[for="ComboTipoAnexo"]')
        .should('have.text', 'Tipo de anexo')    

    //validando botão de anaxar arquivo, desabilitado
    cy.get('.area-botoes > .md-primary')
        .should('be.visible')
        .and('have.attr', 'disabled')   

    //mensagem "Não foi encontrado nenhum registro" quando ainda não há nada
    cy.get('.text-align-center')
        .should('be.visible')
        .and('have.text', 'Não foi encontrado nenhum registro')

    cy.get('.btn')
        .should('be.visible')
        .and('not.have.attr', 'disabled')
        //.and('contain', 'SALVAR')
}

//selecionando o tipo de anexo que quero colocar
export function selecionarTipoAnexo (selector) {

    //clicar no campo Tipo de Anexo para abrir as opções
    cy.get('#ComboTipoAnexo')
        .click()

    //selecionar a opção de tipo de anexo
    cy.contains('div.md-text.ng-binding', 'Assinatura do Termo de Adesão do Titular')
        .click()
}

//função para anexar arquivo dentro do cadastro de cliente completo
export function anexarArquivoPFD (selector) {

    const caminhoDoArquivo = 'cypress\fixtures\anexo_cadastro_cliente_completo.pdf';

    //cy.get('#clienteBotaoUploadDeArquivo').selectFile('anexo_cadastro_cliente_completo.pdf')
    cy.get("[type='file']").selectFile('anexo_cadastro_cliente_completo.pdf', {force:true})
}

//clicando em SIM na mensagem "Deseja enviar o arquivo selecionado?"
export function confirmarEnvioArquivo (selector) {

    //mensagem "Deseja enviar o arquivo selecionado?" do modal
    cy.get('.md-title')
        .should('be.visible')
        .and('have.text', 'Deseja enviar o arquivo selecionado?')

    //validando botão NÃO
    cy.get('.md-cancel-button')
        .should('be.visible')
        .and('have.text','Não')
        .invoke('css', 'Color') // Obtém a cor do elemento
        .should('equal', 'rgb(65, 12, 224)')

    //validando botão SIM
    cy.get('.md-confirm-button')
        .should('be.visible')
        .and('have.text','Sim')
        .invoke('css', 'color') // Obtém a cor do elemento
        .should('equal', 'rgb(65, 12, 224)')

    //clicar no botão SIM
    cy.get('.md-confirm-button')
        .click()
}

//--------

//validar e clicar na aba Referencias
export function clicarAbaReferencias (selector) {

    //validando nome da aba
    cy.get('#menu_items_pri > :nth-child(5)')
        .should('be.visible')
        .and('not.have.attr', 'disabled')
        //.and('have.text', 'Referências')

    cy.intercept('GET', '/views/cliente/refEtapaPessoalLista.html').as('api_referencias')
    //clicar para entrar na aba referencias
    cy.get('#menu_items_pri > :nth-child(5)')
        .click()
    cy.wait('@api_referencias', { timeout: 40000 })
}

//validar e clicar na aba Bancária, dentro de Referencias
export function clicarAbaRefBancaria (selector) {

    //validando botão Bancária
    cy.get('#menu_items_sec > :nth-child(3)')
        .should('be.visible')
        .and('not.have.attr', 'disabled')
        //.and('have.text', 'Bancária')

    cy.intercept('GET', '/views/cliente/refEtapaBancariaLista.html').as('api_ref_bancaria')
    //clicando botão Bancária
    cy.get('#menu_items_sec > :nth-child(3)')
        .click()
    cy.wait('@api_ref_bancaria', { timeout: 40000 })
}

//validando informações da tela antes de adicionar qualquer coisa
export function validarAbaRefBancariaVazia (selector) {

    //validando título quando entramos na aba
    cy.get('h3')
        .should('be.visible')
        .and('have.text', 'Referências / Bancária')

    //validando botão +
    cy.get('.layout-align-end-end > .md-fab')
        .should('be.visible')  
        .and('not.have.attr', 'disabled')

    //mensagem quando não tem nada adicionado na aba
    cy.get('.text-align-center')
        .should('be.visible')
        .and('have.text', 'Não foi encontrado nenhum registro')

    cy.get('.btn')
        .should('be.visible')
        .and('not.have.attr', 'disabled')
        //.and('contain', 'SALVAR')
}

//clicar no botão + para adicionar uma nova referencia bancária
export function clicarAddNovaRefBancaria (selector) {

    cy.intercept('GET', '/views/cliente/modalClienteRefBancaria.html').as('api_modal_referencia_bancaria')
    cy.get('.layout-align-end-end > .md-fab')
        .click()
    cy.wait('@api_modal_referencia_bancaria', { timeout: 40000 })
}

//validar informações do modal Referencia Bancária antes de preencher as informações
export function modalRefBancariaVazio (selector) {

    //título modal 

    //botão X

    //campo Banco

    //informação campo Banco

    //campo Agencia

    //informação campo Agencia

    //campo Conta

    //informação campo Conta

    //ícone calendário

    //campo Data Abertura

    //informação Data Abertura

    //campo Boleto

    //informação campo Boleto

    //campo Telefone

    //informação campo Telefone

    //campo Gerente

    //informação campo Gerente

    //campo Email

    //informação campo Gerente

    //campo CPF/CNPJ correntista

    //informação campo CPF/CNPJ correntista

    //campo Nome do correntista

    //campo Tipo de conta

    //informação campo Tipo de conta

    //campo Operação

    //nformação Operação

    //campo Forma de pagamento

    //informação Forma de pagamento

    //campo Tipo chave PIX

    //informação campo Tipo chave PIX

    //campo Chave PIX

    //informação campo Chave PIZ
}