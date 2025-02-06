import { gerarCpf, gerarNomeAleatorio, gerarEmailAleatorio, gerarCNPJ, gerarTelefoneAleatorio, gerarNomeEmpresa }  from '../../gerarDados';
import { gerarChavePixTelefone } from '../../gerarDadosPIX'

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
export function selecionarPrimeiroTipoAnexo (selector) {

    //clicar no campo Tipo de Anexo para abrir as opções
    cy.get('#ComboTipoAnexo')
        .click()

    //selecionar a opção de tipo de anexo
    cy.contains('div.md-text.ng-binding', 'Assinatura do Termo de Adesão do Titular')
        .click()
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
        //.invoke('css', 'Color') // Obtém a cor do elemento
        //.should('equal', 'rgb(65, 12, 224)')

    //validando botão SIM
    cy.get('.md-confirm-button')
        .should('be.visible')
        .and('have.text','Sim')
        //.invoke('css', 'color') // Obtém a cor do elemento
        //.should('equal', 'rgb(65, 12, 224)')

    //clicar no botão SIM
    cy.get('.md-confirm-button')
        .click()
}

//mensagem de anexo incluído com sucesso
export function messAnexoIncluidoSucesso (selector) {

    //Card Endereço incluído com sucesso.
    cy.get('.toast')
        .should('be.visible')

    //Card Endereço incluído com sucesso. - Aviso
    cy.get('.toast-title')
        .should('be.visible')
        .and('have.text', 'Aviso')

    //Card Endereço incluído com sucesso. - Endereço incluído com sucesso.
    cy.get('.toast-message')
        .should('be.visible')
        .and('have.text', 'Anexo cadastrado com sucesso!')
}

//validar se o anexo realmente foi adicionado
export function validarAnexoInserido (selector) {

    const hoje = new Date();
    const dataAtual = hoje.toLocaleDateString('pt-BR')

    //card em geral
    cy.get('.md-whiteframe-2dp')
        .should('be.visible')

    //mensagem "Anexo inserido em"
    cy.get('small.list-title')
        .should('be.visible')
        .and('include.text', 'Anexo inserido em')
        .and('include.text', dataAtual)
}

//------------------- PREENCHER CAMPO ------


//função para anexar arquivo dentro do cadastro de cliente completo
export function anexarArquivoPFD (selector) {

    const caminhoDoArquivo = 'cypress\fixtures\anexo_cadastro_cliente_completo.pdf';

    //cy.get('#clienteBotaoUploadDeArquivo').selectFile('anexo_cadastro_cliente_completo.pdf')
    cy.get("[type='file']").selectFile('anexo_cadastro_cliente_completo.pdf', {force:true})
}