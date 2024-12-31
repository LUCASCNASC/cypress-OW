//Importando funções 
import { logoEmpresaLogin, iconeComputadorLogin, usuarioTextoIcone, senhaTextoIcone, iconeOlhosSenha, botaoEsqueceuSenha, botaoEntrarHabilitado,
         clicarBotaoEntrar, mensagemEntrandoSistema, expiraAcessoCardValidar, clicarSIMExpira, regrasNovaSenhaAntes, regrasNovaSenhaDepois } from '../../support/para_logins/para_login';

const usuSabiumAutomacao = "usu.expira2dias"; //usuário 419
const senhaautomacao = "321@teste"; //trocar informação parnova senha e vice-versa
const novasenha = "123.automacao";

describe('Login com usuário que senha expira em 2 dias', () => {

    beforeEach(() => {
        cy.visit('/')
        cy.clearAllSessionStorage()
        cy.urlAposLogin()
        cy.tituloPagina()
        logoEmpresaLogin()
        iconeComputadorLogin()
        usuarioTextoIcone()
    })

    it('Login - clicar em NÃO atualizar senha', () => {

        //Validando campo "informe seu usuário"
        cy.get('#txtusername')
            .should('be.visible')
            .and('have.value','')
            .type(usuSabiumAutomacao)
            .invoke('attr', 'placeholder')
            .should('equal', 'Informe seu usuário')

        senhaTextoIcone()

        //Campo Informe sua senha
        cy.get('#txtpassword')
            .should('be.visible')
            .and('have.value','')
            .type(senhaautomacao)
            .invoke('attr', 'placeholder')
            .should('equal', 'Informe sua senha')

        iconeOlhosSenha()
        botaoEsqueceuSenha()
        botaoEntrarHabilitado()
        clicarBotaoEntrar()
        mensagemEntrandoSistema()
        cy.wait(8000)

        expiraAcessoCardValidar() //APÓS LOGAR

        //Card de expira acesso - clicar em NÃO
        cy.get('.md-cancel-button')
            .click()

        //Validando botão INICIAR ATENDIMENTO, para ver se logou
        cy.get('.md-raised > .truncate')
            .should('be.visible')
    })

    it('Login - clicar em SIM atualizar senha - clicar em Fechar a redefinição de senha', () => {
    
        //Validando campo "informe seu usuário"
        cy.get('#txtusername')
            .should('be.visible')
            .and('have.value','')
            .type(usuSabiumAutomacao)
            .invoke('attr', 'placeholder')
            .should('equal', 'Informe seu usuário')

        senhaTextoIcone()

        //Campo Informe sua senha
        cy.get('#txtpassword')
            .should('be.visible')
            .and('have.value','')
            .type(senhaautomacao)
            .invoke('attr', 'placeholder')
            .should('equal', 'Informe sua senha')

        iconeOlhosSenha()
        botaoEsqueceuSenha()
        botaoEntrarHabilitado()
        clicarBotaoEntrar()
        mensagemEntrandoSistema()
        cy.wait(8000)

        expiraAcessoCardValidar() //APÓS LOGAR
        clicarSIMExpira() //clicar SIM 

        //Card Altere Sua Senha Temporária - título "Altere Sua Senha Temporária"
        cy.get('p')
            .contains('Altere Sua Senha Temporária')
            .should('be.visible')

        //Card Altere Sua Senha Temporária - texto "Usuário"
        cy.get('.senha_nova > :nth-child(1)')
            .should('be.visible')
            .and('have.text','Usuário')

        //Card Altere Sua Senha Temporária - campo para preenchimento "Usuário"
        cy.get(':nth-child(2) > .ng-pristine')
            .should('be.visible')
            .and('have.value', usuSabiumAutomacao)

        //Card Altere Sua Senha Temporária - texto "Senha Atual"
        cy.get('.senha_nova > :nth-child(4)')
            .should('be.visible')
            .and('have.text','Senha Atual')

        //Card Altere Sua Senha Temporária - campo para preenchimento "Senha Atual"
        cy.get(':nth-child(5) > .ng-pristine')
            .should('be.visible')
            .and('have.value','')
            .type(senhaautomacao, {force:true})

        //Card Altere Sua Senha Temporária - olhos "Senha Atual"
        cy.get('md-icon[ng-click="showPasswordToggle()"]')
            .should('be.visible')

        //Card Altere Sua Senha Temporária - botão "Gerar uma Nova Senha"
        cy.get('a[ng-click="gerarNovaSenha($event)"]')
            .should('be.visible')
            .and('not.have.attr', 'disabled')

        //Card Altere Sua Senha Temporária - título "Regras para a Nova Senha"
        cy.get('p')
            .contains('Regras para a Nova Senha')
            .should('be.visible')

        regrasNovaSenhaAntes()

        //Card Altere Sua Senha Temporária - campo para preenchimento "Nova Senha"
        cy.get('input[name="password_new"]')
            .should('be.visible')
            .and('have.value','')
            .type(novasenha)

        //Card Altere Sua Senha Temporária - olhos "Nova Senha"
        cy.get('md-icon[ng-click="showPasswordToggle(true)"]')
            .should('be.visible')

        regrasNovaSenhaDepois()

        //Card Altere Sua Senha Temporária - botão CONFIRMAR antes de todas as regras estarem certas
        cy.get(':nth-child(5) > .md-raised')
            .should('be.visible')
            .and('have.text','Confirmar')
            .and('not.have.attr', 'not.disabled')

        //Card Altere Sua Senha Temporária - texto "Repetir Nova Senha"
        cy.get('.senha_nova > :nth-child(10)')
            .should('be.visible')
            .and('have.text','Repetir Nova Senha')

        //Card Altere Sua Senha Temporária - campo para preenchimento "Repetir Nova Senha"
        cy.get(':nth-child(11) > .ng-pristine')
            .should('be.visible')
            .and('have.value','')
            .type((novasenha))

        //Validar a sexta Regras para a Nova Senha (depois de preencher campo Repetir Nova Senha) - Texto As novas senhas informadas são iguais.
        cy.contains('span', 'As novas senhas informadas são iguais.')
            .should('be.visible')
            .and('have.css', 'color', 'rgb(0, 100, 0)')

        //Card Altere Sua Senha Temporária - botão CONFIRMAR depois de todas as regras estarem certas
        cy.get(':nth-child(5) > .md-raised')
            .should('be.visible')
            .and('have.text','Confirmar')
            .and('not.have.attr', 'disabled')

        scrollTo()
             
        //Card Altere Sua Senha Temporária - botão Fechar 
        cy.get('[ng-show="!loading"] > a')
            .should('be.visible')
            .and('have.text','Fechar')
            .and('not.have.attr', 'disabled')
            
        //Card Altere Sua Senha Temporária - clicar no botão Fechar 
        cy.get('[ng-show="!loading"] > a')
            .click()

        //Ícone do computador - validar se realmente se voltou para a tela de login
        cy.get('[ng-click="clienteStatsOpen()"] > .ng-binding')
            .should('be.visible')
            .and('not.have.attr', 'disabled')
    })

    it('Login - clicar em SIM atualizar senha - clicar em CONFIRMAR a redefinição de senha', () => {
    
        //Validando campo "informe seu usuário"
        cy.get('#txtusername')
            .should('be.visible')
            .and('have.value','')
            .type(usuSabiumAutomacao)
            .invoke('attr', 'placeholder')
            .should('equal', 'Informe seu usuário')

        senhaTextoIcone()

        //Campo Informe sua senha
        cy.get('#txtpassword')
            .should('be.visible')
            .and('have.value','')
            .type(senhaautomacao)
            .invoke('attr', 'placeholder')
            .should('equal', 'Informe sua senha')

        iconeOlhosSenha()
        botaoEsqueceuSenha()
        botaoEntrarHabilitado()
        clicarBotaoEntrar()
        mensagemEntrandoSistema()
        cy.wait(8000)

        //APÓS LOGAR
        expiraAcessoCardValidar()
        clicarSIMExpira() //clicar SIM 

        //Card Altere Sua Senha Temporária - título "Altere Sua Senha Temporária"
        cy.get('p')
            .contains('Altere Sua Senha Temporária')
            .should('be.visible')

        //Card Altere Sua Senha Temporária - texto "Usuário"
        cy.get('.senha_nova > :nth-child(1)')
            .should('be.visible')
            .and('have.text','Usuário')

        //Card Altere Sua Senha Temporária - campo para preenchimento "Usuário"
        cy.get(':nth-child(2) > .ng-pristine')
            .should('be.visible')
            .and('have.value', usuSabiumAutomacao)

        //Card Altere Sua Senha Temporária - texto "Senha Atual"
        cy.get('.senha_nova > :nth-child(4)')
            .should('be.visible')
            .and('have.text','Senha Atual')

        //Card Altere Sua Senha Temporária - campo para preenchimento "Senha Atual"
        cy.get(':nth-child(5) > .ng-pristine')
            .should('be.visible')
            .and('have.value','')
            .type(senhaautomacao, {force:true})

        //Card Altere Sua Senha Temporária - olhos "Senha Atual"
        cy.get('md-icon[ng-click="showPasswordToggle()"]')
            .should('exist')

        //Card Altere Sua Senha Temporária - botão "Gerar uma Nova Senha"
        cy.get('a[ng-click="gerarNovaSenha($event)"]')
            .should('be.visible')
            .and('not.have.attr', 'disabled')

        //Card Altere Sua Senha Temporária - título "Regras para a Nova Senha"
        cy.get('p')
            .contains('Regras para a Nova Senha')
            .should('be.visible')

        regrasNovaSenhaAntes()

        //Card Altere Sua Senha Temporária - campo para preenchimento "Nova Senha"
        cy.get('input[name="password_new"]')
            .should('be.visible')
            .and('have.value','')
            .type(novasenha)

        //Card Altere Sua Senha Temporária - olhos "Nova Senha"
        cy.get('md-icon[ng-click="showPasswordToggle(true)"]')
            .should('be.visible')

        regrasNovaSenhaDepois()

        //Card Altere Sua Senha Temporária - botão CONFIRMAR antes de todas as regras estarem certas
        cy.get(':nth-child(5) > .md-raised')
            .should('be.visible')
            .and('have.text','Confirmar')
            .and('not.have.attr', 'not.disabled')

        //Card Altere Sua Senha Temporária - texto "Repetir Nova Senha"
        cy.get('.senha_nova > :nth-child(10)')
            .should('be.visible')
            .and('have.text','Repetir Nova Senha')

        //Card Altere Sua Senha Temporária - campo para preenchimento "Repetir Nova Senha"
        cy.get(':nth-child(11) > .ng-pristine')
            .should('be.visible')
            .and('have.value','')
            .type((novasenha))

        //Validar a sexta Regras para a Nova Senha (depois de preencher campo Repetir Nova Senha) - Texto As novas senhas informadas são iguais.
        cy.contains('span', 'As novas senhas informadas são iguais.')
            .should('be.visible')
            .and('have.css', 'color', 'rgb(0, 100, 0)')

        //Card Altere Sua Senha Temporária - botão CONFIRMAR depois de todas as regras estarem certas
        cy.get(':nth-child(5) > .md-raised')
            .should('be.visible')
            .and('have.text','Confirmar')
            .and('not.have.attr', 'disabled')

        scrollTo()
             
        //Card Altere Sua Senha Temporária - botão Fechar 
        cy.get('[ng-show="!loading"] > a')
            .should('be.visible')
            .and('have.text','Fechar')
            .and('not.have.attr', 'disabled')
            
        //Card Altere Sua Senha Temporária - clicar no botão CONFIRMAR
        cy.get(':nth-child(5) > .md-raised')
            .click()

        //Card de Senha alterada com sucesso
        cy.get('.toast')
            .should('be.visible')
        
        //Card de Senha alterada com sucesso - Aviso
        cy.get('.toast-title')
            .should('be.visible')
            .and('have.text','Aviso')

        //Card de Senha alterada com sucesso - Senha alterada com sucesso
        cy.get('.toast-message')
            .should('be.visible')
            .and('have.text','Senha alterada com sucesso')
    })
})