import { gerarCpf, gerarNomeAleatorio, gerarEmailAleatorio, gerarCNPJ, gerarTelefoneAleatorio, gerarNomeEmpresa }  from '../../../gerarDados';
import { gerarChavePixTelefone } from '../../../gerarDadosPIX'

export class GeralPessoa {

    constructor(page) {
        this.page = page
    }

    //Validar e escolher sexo da pessoa
    async selecionarSexoCliente (selector) {

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
}