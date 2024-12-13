//Importando funções 
import { titulopagina } from '../../support/para_todos';

const filial = "050"
const descricaoUsuario = "T.A. USUÁRIO AUTOMAÇÃO"

describe('Validações de layout - tela inicial', () => {

    beforeEach(() => {
        cy.visit('/');
        cy.clearAllSessionStorage(); 
        cy.login();
        titulopagina()
    })

    context('Tela inicial ao logar no sistema', () => {

        it('Tela inicial ao logar no sistema - cabeçalho', () => {
            
            //Topo da página - parte colorida
            cy.get('.topo > .md-toolbar-tools')
                .should('exist')
                .and('be.visible')

            //Ícone menu de opções
            cy.get('[aria-label="Menu de opções"] > .ng-binding')
                .should('exist')
                .and('be.visible')
                .and('not.have.attr', 'disabled')
                //.and('have.class', 'ng-binding ng-scope material-icons md-default-theme') - aparecendo como undefined

            //Imagem ao lado do ícone de menu de opções
            cy.get('.md-toolbar-tools > .logo > .md-default-theme > img')
                .should('exist')
                .and('be.visible')
                .and('not.have.attr', 'disabled')

            //Filial e descrição do usuário
            cy.get('.ocultaNomeTopo > .ng-binding')
                .should('exist')
                .and('be.visible')
                .and('contain', filial)
                .and('contain', ' - ')
                .and('contain', descricaoUsuario)

            //Botão INICIAR ATENDIMENTO
            cy.get('.hide-sm > :nth-child(2) > .md-raised')
                .should('exist')
                .and('be.visible')
                .and('contain', 'Iniciar Atendimento')
                .and('not.have.attr', 'disabled')

            //Botão INICIAR ATENDIMENTO - seta
            cy.get('.hide-sm > :nth-child(2) > .md-raised > .ng-binding')
                .should('exist')
                .and('be.visible')
                .and('not.have.attr', 'disabled')

            //Botão INICIAR ATENDIMENTO - texto INICIAR ATENDIMENTO
            cy.get('.md-raised > .truncate')
                .should('exist')
                .and('be.visible')
                .and('contain', 'Iniciar Atendimento')
                .and('not.have.attr', 'disabled')

            //Texto "Processo" acima do campo de escolha de processo (não é possível pegar exatamente o elemento)
            cy.get('.hide-sm')
                .should('exist')
                .and('be.visible')
                .and('contain', 'Processo')

            //Campo para inserir processo
            cy.get('#select_value_label_4 > :nth-child(1)')
                .should('exist')
                .and('be.visible')
                .and('not.be.empty') //está preenchido com algo, mas sem saber exatamente com o que
                .and('not.have.attr', 'disabled')

            //Seta para escolher processo a ser usado
            cy.get('#select_value_label_4 > .md-select-icon')
                .should('exist')
                .and('be.visible')
                .and('not.have.attr', 'disabled')

            //Parte integral de escolha do cliente
            cy.get('.cliente.ng-scope')
                .should('exist')
                .and('be.visible')

            //Texto "CLIENTE"
            cy.get('.click-cliente > .informe-o-cliente > .cliente-header')
                .should('exist')
                .and('be.visible')
                .and('contain', 'Cliente')

            //Campo para inserir cliente - validar placeholder - após clicar no campo, aparece essa mensagem dentro dele
            cy.get('#txtBuscaCliente')
                .should('have.attr', 'placeholder', 'Digite o nome ou o CPF do cliente para busca')

            //Campo para inserir cliente
            cy.get('.click-cliente > .informe-o-cliente > #lblNomeClienteSelecionado')
                .should('exist')
                .and('be.visible')
                .and('have.text', 'INFORME O CLIENTE')
                .and('have.value', '')
                .type('123456789')
                
            //Validando lupa de pesquisa de cliente
            cy.get('.md-block > .ng-binding')
                .should('exist')
                .and('be.visible')
                .and('not.have.attr', 'disabled')

            //Validando carrinho no canto direito da tela
            cy.get('#test_btnCarrinho')
                .should('exist')
                .and('be.visible')
                .and('not.have.attr', 'disabled')

            //Campo Buscar produtos - validando texto "Buscar produtos"
            cy.get('label[for="searchText"]')
                .should('have.text', 'Buscar produtos')
                .and('have.value', '')

            //Campo Buscar produtos
            cy.get('#searchText')
                .should('exist')
                .and('be.visible')
                .and('not.have.attr', 'disabled')

            //Ícone camara
            cy.get('[ng-show="!(usarBuscarApenasPeloGTINPorUsuario)"] > div > [ng-click="capturarImagem()"] > .ng-binding')
                .should('exist')
                .and('be.visible')
                .and('not.have.attr', 'disabled')

            //Ícone Micrifone
            cy.get('[ng-click="capturarVoz()"] > .ng-binding')
                .should('exist')
                .and('be.visible')
                .and('not.have.attr', 'disabled')

            //Ícone percentual
            cy.get('[ng-click="capturarSomentePromocao()"] > .ng-scope')
                .should('exist')
                .and('be.visible')
                .and('not.have.attr', 'disabled')
        })
    })  
})