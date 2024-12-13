//Importando funções 
import { titulopagina } from '../../support/para_todos';
import { logoEmpresaLogin, iconeComputadorLogin, usuarioTextoIcone, senhaTextoIcone, iconeOlhosSenha, botaoEsqueceuSenha, botaoEntrarHabilitado, 
         botaoEntrarDesabilitado, clicarBotaoEntrar, mensagemEntrandoSistema } from '../../support/para_logins/para_login';

const usuSabiumAutomacao = "usu.inativo";
const senhaautomacao = "123.automacao";
describe('Usuário inativo', () => {

    beforeEach(() => {
        cy.visit('/');
        cy.clearAllSessionStorage();
        titulopagina()//Vai variar de acordo com SBX e SABIUM, modificar no arquivo uiUtils.js, na função.
        logoEmpresaLogin()
        iconeComputadorLogin()
        usuarioTextoIcone()
    })

    it('Tentar logar com usuário inativo', () => {
    
        //Validando campo "informe seu usuário"
        cy.get('#txtusername')
            .should('exist')
            .and('be.visible')
            .and('have.value','')
            .type((usuSabiumAutomacao))
            .invoke('attr', 'placeholder')
            .should('equal', 'Informe seu usuário')

        senhaTextoIcone()

        //Campo Informe sua senha
        cy.get('#txtpassword')
            .should('exist')
            .and('be.visible')
            .and('have.value','')
            .type((senhaautomacao))
            .invoke('attr', 'placeholder')
            .should('equal', 'Informe sua senha')

        iconeOlhosSenha()
        botaoEsqueceuSenha()
        botaoEntrarHabilitado()
        clicarBotaoEntrar()

        //Card de mensagem 
        cy.get('.toast')
            .should('exist')
            .and('be.visible')
            .and('have.css', 'background-color', 'rgb(248, 148, 6)')

        //Mensagem de Atenção
        cy.get('.toast-title')
            .should('exist')
            .and('be.visible')
            .and('have.text','Atenção')

        //Mensagem "Usuário não está ativo."
        cy.get('.toast-message')
            .should('exist')
            .and('be.visible')
            .and('have.text','Usuário não está ativo.')

        //Botão X para fechar mensagem
        cy.get('.toast-close-button')
            .should('exist')
            .and('be.visible')

        iconeComputadorLogin() //Validando que não entrou no sistema
    })
})