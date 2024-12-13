//Importando funções 
import { titulopagina } from '../../support/para_todos';

const cpfCliente = "48976249089"
describe('Menu Pedidos Pendentes', () => {

    beforeEach(() => {
        cy.visit('/');
        cy.clearAllSessionStorage();
    })

    context('Aba pedidos pendentes', () => {

        it('Aba pedidos pendentes', () => {

            cy.login('sabium.automacao', '123.automacao'); //Comando personalizado para login
    
            //Vai variar de acordo com SBX e SABIUM, modificar no arquivo uiUtils.js, na função.
            titulopagina()
    
            //Ícone do menu de opções
            cy.get('[aria-label="Menu de opções"] > .ng-binding')
                .should('exist')
                .and('be.visible')
                .and('not.have.attr', 'disabled')

            // Validar HINT menu de opções ***
                        
            //Clicar ni ícone do menu de opções
            cy.get('[aria-label="Menu de opções"] > .ng-binding')
                .click()

            //Opção Cliente completo no menu de opções
            cy.get('a[aria-label="Pedidos pendentes"]')
                .should('exist')
                .and('be.visible')
                .and('not.have.attr', 'disabled')

            //Opção Cliente completo no menu de opções
            cy.get('a[aria-label="Pedidos pendentes"]')
                .should('have.attr', 'aria-label', 'Pedidos pendentes')

            //Opção Cliente completo no menu de opções
            cy.get('a[aria-label="Pedidos pendentes"]')
                .scrollIntoView()
                .click({force:true})

            //Ícone do título aba PEDIDOS PENDENTES
            cy.get('.icone-24')
                .should('exist')
                .and('be.visible')

            //Título aba PEDIDOS PENDENTES
            cy.get('.header')
                .should('exist')
                .and('be.visible')
                .and('contain', 'PEDIDOS PENDENTES')

            //Aba MEUS PEDIDOS
            cy.contains('span', 'MEUS PEDIDOS')
                .should('exist')
                .and('be.visible')
                .and('have.text', 'MEUS PEDIDOS')
                .and('not.have.attr', 'disabled')

            //Aba MEUS PEDIDOS
            cy.contains('span', 'TODOS OS PEDIDOS')
                .should('exist')
                .and('be.visible')
                .and('have.text', 'TODOS OS PEDIDOS')
                .and('not.have.attr', 'disabled')

            //Aba MEUS PEDIDOS - lupa de pesquisa
            cy.get('md-icon.md-default-theme')
                .should('exist')
                .and('be.visible')
                .and('not.have.attr', 'disabled')

            //Aba MEUS PEDIDOS - campo Cliente ou pedido
            cy.get('#input_90')
                .should('have.value', '')
                .should('exist')
                .and('be.visible')
                .and('not.have.attr', 'disabled')

            //Aba MEUS PEDIDOS - campo Cliente ou pedido - informativo
            cy.get('label[for="input_90"]')
                .should('have.text', 'Cliente ou pedido')
 
            //Aba MEUS PEDIDOS - ícone de ornenação
            cy.get('[aria-label="Filtros"]')
                .should('exist')
                .and('be.visible')
                .and('not.have.attr', 'disabled')

            //Aba MEUS PEDIDOS - clicar no ícone de ornenação
            cy.get('[aria-label="Filtros"]')
                .scrollIntoView()
                .click({force:true})

            cy.wait(500)

            //Aba MEUS PEDIDOS - card de "Ordenar por:" - título do card
            cy.get('.md-transition-in > ._md > .md-toolbar-tools > h2')
                .should('exist')
                .and('be.visible')
                .and('have.text', 'Ordenar por:')

            //Aba MEUS PEDIDOS - card de "Ordenar por:" - botão X
            cy.get('.md-transition-in > ._md > .md-toolbar-tools > .md-icon-button > .ng-binding')
                .should('exist')
                .and('be.visible')
                .and('not.have.attr', 'disabled')

            //Aba MEUS PEDIDOS - card de "Ordenar por:" - Ordenção PEDIDO(DESC)
            cy.get('[ng-click="ordenaPorPedido()"]')
                .should('exist')
                .and('be.visible')
                .and('contain', ' Pedido (desc) ')

            //Aba MEUS PEDIDOS - card de "Ordenar por:" - Clicar na Ordenção PEDIDO
            cy.get('[ng-click="ordenaPorPedido()"]')
                .click({force:true})

            //Aba MEUS PEDIDOS - card de "Ordenar por:" - Ordenção PEDIDO(ASC)
            cy.get('[ng-click="ordenaPorPedido()"]')
                .should('exist')
                .and('be.visible')
                .and('contain', ' Pedido (asc) ')

            //Aba MEUS PEDIDOS - card de "Ordenar por:" - Ordenção DATA(DESC)
            cy.get('[ng-click="ordenaPorData()"]')
                .should('exist')
                .and('be.visible')
                .and('contain', ' Data (desc) ')

            //Aba MEUS PEDIDOS - card de "Ordenar por:" - Clicar na Ordenção PEDIDO
            cy.get('[ng-click="ordenaPorData()"]')
                .click({force:true})

            //Aba MEUS PEDIDOS - card de "Ordenar por:" - Ordenção DATA(ASC)
            cy.get('[ng-click="ordenaPorData()"]')
                .should('exist')
                .and('be.visible')
                .and('contain', ' Data (asc) ')

            //Aba MEUS PEDIDOS - card de "Ordenar por:" - Ordenção CLIENTE(DESC)
            cy.get('[ng-click="ordenaPorCliente()"]')
                .should('exist')
                .and('be.visible')
                .and('contain', ' Cliente (desc) ')

            //Aba MEUS PEDIDOS - card de "Ordenar por:" - Clicar na Ordenção PEDIDO
            cy.get('[ng-click="ordenaPorCliente()"]')
                .click({force:true})

            //Aba MEUS PEDIDOS - card de "Ordenar por:" - Ordenção CLIENTE(ASC)
            cy.get('[ng-click="ordenaPorCliente()"]')
                .should('exist')
                .and('be.visible')
                .and('contain', ' Cliente (asc) ')

            //Aba MEUS PEDIDOS - card de "Ordenar por:" - Ordenção STATUS(DESC)
            cy.get('[ng-click="ordenarPorStatus()"]')
                .should('exist')
                .and('be.visible')
                .and('contain', ' Status (desc) ')

            //Aba MEUS PEDIDOS - card de "Ordenar por:" - Clicar na Ordenção PEDIDO
            cy.get('[ng-click="ordenarPorStatus()"]')
                .click({force:true})

            //Aba MEUS PEDIDOS - card de "Ordenar por:" - Ordenção STATUS(ASC)
            cy.get('[ng-click="ordenarPorStatus()"]')
                .should('exist')
                .and('be.visible')
                .and('contain', ' Status (asc) ')

            //Aba MEUS PEDIDOS - card de "Ordenar por:" - Ordenção VALOR(DESC)
            cy.get('[ng-click="ordenaPorValor()"]')
                .should('exist')
                .and('be.visible')
                .and('contain', ' Valor (desc) ')

            //Aba MEUS PEDIDOS - card de "Ordenar por:" - Clicar na Ordenção PEDIDO
            cy.get('[ng-click="ordenaPorValor()"]')
                .click({force:true})

            //Aba MEUS PEDIDOS - card de "Ordenar por:" - Ordenção VALOR(ASC)
            cy.get('[ng-click="ordenaPorValor()"]')
                .should('exist')
                .and('be.visible')
                .and('contain', ' Valor (asc) ')

            //Aba MEUS PEDIDOS - card de "Ordenar por:" - clicar no botão X para fechar card
            cy.get('.md-transition-in > ._md > .md-toolbar-tools > .md-icon-button > .ng-binding')
                .click({force:true})

            //Aba MEUS PEDIDOS - campo Exibir somente
            cy.get('#select_value_label_88')
                .scrollIntoView()
                .should('exist')
                .and('be.visible')
                .and('not.have.attr', 'disabled')

            //Aba MEUS PEDIDOS - campo Exibir somente
            cy.get('#select_value_label_88')
                .scrollIntoView()
                .click({force:true})

            //Aba MEUS PEDIDOS - campo Exibir somente - Exibir somente Pendentes
            cy.contains('Exibir somente Pendentes')
                .scrollIntoView()
                .should('exist')
                .and('be.visible')
                .and('contain', 'Exibir somente Pendentes')

            //Aba MEUS PEDIDOS - campo Exibir somente - Exibir todos os registros
            cy.contains('Exibir todos os registros')
                .scrollIntoView()
                .should('exist')
                .and('be.visible')
                .and('contain', 'Exibir todos os registros')

            //Aba MEUS PEDIDOS - campo Exibir somente -  Exibir somente Fechados
            cy.contains('Exibir somente Fechados')
                .scrollIntoView()
                .should('exist')
                .and('be.visible')
                .and('contain', 'Exibir somente Fechados')

            //Aba MEUS PEDIDOS - campo Exibir somente -  Exibir somente Fechados
            cy.contains('Exibir somente Fechados')
                .click({force:true})

            //Aba MEUS PEDIDOS - clicar na aba TODOS OS PEDIDOS
            cy.contains('span', 'TODOS OS PEDIDOS')
                .click({force:true})

            //Aba TODOS OS PEDIDOS - lupa do campo Número do Pedido
            cy.get('[ng-show="(outrosVendedores)"] > .layout-row > :nth-child(1) > .ng-binding')
                .should('exist')
                .and('be.visible')
                .and('not.have.attr', 'disabled')

            //Aba TODOS OS PEDIDOS - campo Número de Pedido
            cy.get('#input_99')
                .should('have.value', '')
                .should('exist')
                .and('be.visible')
                .and('not.have.attr', 'disabled')

            //Aba TODOS OS PEDIDOS - campo Número de Pedido - informativo
            cy.get('label[for="input_99"]')
                .should('have.text', 'Número de Pedido')

            //Aba TODOS OS PEDIDOS - lupa do campo CNPJ/CPF
            cy.get('[ng-show="(outrosVendedores)"] > .layout-row > :nth-child(2) > .ng-binding')
                .should('exist')
                .and('be.visible')
                .and('not.have.attr', 'disabled')

            //Aba TODOS OS PEDIDOS - campo CNPJ / CPF
            cy.get('#input_100')
                .should('have.value', '')
                .should('exist')
                .and('be.visible')
                .and('not.have.attr', 'disabled')

            //Aba TODOS OS PEDIDOS - campo CNPJ / CPF - informativo
            cy.get('label[for="input_100"]')
                .should('have.text', 'CNPJ / CPF')

            //Aba TODOS OS PEDIDOS - preenchendo campo CNPJ / CPF
            cy.get('#input_100')
                .type(cpfCliente)

            //Aba TODOS OS PEDIDOS - ícone olho
            cy.get('.md-icon-float.ng-binding')
                .should('exist')
                .and('be.visible')
                .and('not.have.attr', 'disabled')

            //Aba TODOS OS PEDIDOS - clicar no ícone olho
            cy.get('.md-icon-float.ng-binding')
                .click()

            //Aba TODOS OS PEDIDOS - Botão LIMPAR
            cy.get('.flex-auto > .md-primary')
                .should('exist')
                .and('be.visible')
                .and('not.have.attr', 'disabled')

            //Aba TODOS OS PEDIDOS - Botão LIMPAR
            cy.get('.flex-auto > .md-primary')
                .click()
        })  
    })
})