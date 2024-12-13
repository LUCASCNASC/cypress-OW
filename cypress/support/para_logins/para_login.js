//Validando Logo da empresa
export function logoEmpresaLogin (selector) {

    //Validar o logo da empresa
    cy.get('.logo')
        .should('exist')
        .and('be.visible')
}

//Validando Ícone do computador
export function iconeComputadorLogin (selector) {

    //Ícone do computador
    cy.get('[ng-click="clienteStatsOpen()"] > .ng-binding')
        .should('exist')
        .and('be.visible')
        .and('not.have.attr', 'disabled')
}

//Validando texto usuário, acima do campo usuário e validando ícone do usuário
export function usuarioTextoIcone (selector) {

    //Validando Texto "Usuário" acima do campo informe sue usuário
    cy.get('label[for="txtusername"]')
        .should('exist')
        .and('be.visible')
        .and('have.text','Usuário')

    //Ícone do campo informe seu usuário
    cy.get(':nth-child(3) > .name')
        .should('exist')
        .and('be.visible')
}

//Validando texto Senha, acima do campo usuário e validando ícone da Senha
export function senhaTextoIcone (selector) {
    
    //Validando Texto "Senha" acima do campo informe sua senha
    cy.get('label[for="txtpassword"]')
        .should('exist')
        .and('be.visible')
        .and('have.text','Senha')

    //Ícone de senha
    cy.get('.md-icon-right > .name')
        .should('exist')
        .and('be.visible')
}

//Ícone de visualizar senha
export function iconeOlhosSenha (selector) {

    //ícone de olho, para ver a senha
    cy.get('.md-icon-right > .md-primary')
        .should('exist')
        .and('be.visible')
        .and('not.have.attr', 'disabled')
}

//Botão Esqueceu Senha
export function botaoEsqueceuSenha (selector) {

    //Botão/mensagem "Esqueceu a senha?"
    cy.get('div[ng-click="modalSenhaNovaOpen()"]')
        .contains('Esqueceu a senha?')
        .should('exist')
        .and('be.visible')
        .and('not.have.attr', 'disabled')
}

//Botão entrar habilitado
export function botaoEntrarHabilitado (selector) {

    //Botão ENTRAR
    cy.get('.test_btnSalvarCliente')
        .should('exist')
        .and('be.visible')
        .and('have.text','Entrar')
        .and('not.have.attr', 'disabled')
}

//Botão entrar desabilitado
export function botaoEntrarDesabilitado (selector) {

    //Botão ENTRAR
    cy.get('.test_btnSalvarCliente')
        .should('exist')
        .and('be.visible')
        .and('have.text','Entrar')
        .and('not.have.attr', 'not.disabled')
}

//Clicar no botão entrar
export function clicarBotaoEntrar (selector) {

    //Clicar no botão ENTRAR
    cy.get('.test_btnSalvarCliente')
        .click({force:true})
}

//Mensagem Entrando no sistema
export function mensagemEntrandoSistema (selector) {

    //Mensagem "Entrando no sistema"
    cy.get('.ng-scope > .ng-binding')
        .should('exist')
        .and('be.visible')
        .and('have.text','Entrando no sistema')
}

//botao INICIAR ATENDIMENTO - validando que entrou no sistema
export function botaoIniciarAtendimento (selector) {

    //Validando botão INICIAR ATENDIMENTO, para ver se logou
    cy.get('.md-raised > .truncate')
        .should('exist')
        .and('be.visible')
}

//validando mensagem de Login ou senha estão incorretos
export function messLoginSenhaIncorreto (selector) {

    //Mensagem de senha errada
    cy.get('.toast')
        .should('exist')
        .and('be.visible')

    //Mensagem "Atenção"
    cy.get('.toast-title')
        .should('exist')
        .and('be.visible')
        .and('have.text','Atenção')
        .and('not.have.attr', 'disabled')

    //Mensagem "Login ou Senha do usuário está incorreto."
    cy.get('.toast-message')
        .should('exist')
        .and('be.visible')
        .and('have.text','Login ou Senha do usuário está incorreto.')
        .and('not.have.attr', 'disabled') 

    //Botão X para fechar mensagem
    cy.get('.toast-close-button')
        .should('exist')
        .and('be.visible')
}

// Card de expira acesso - "Falta(m) " 2 " dia(s) para seu acesso ao sistema expirar. Favor atualizá-lo."
export function expiraAcessoCardValidar (selector) {

    //Card de expira acesso - Mensagem "Falta(m) " 2 " dia(s) para seu acesso ao sistema expirar. Favor atualizá-lo."
    cy.get('.md-dialog-content-body > .ng-binding')
        .should('exist')
        .and('be.visible')
        .and('have.text','Falta(m) " 2 " dia(s) para seu acesso ao sistema expirar. Favor atualizá-lo.')

    //Card de expira acesso - NÃO
    cy.get('.md-cancel-button')
        .should('exist')
        .and('be.visible')
        .and('have.text','NÃO')
        .and('not.have.attr', 'disabled')

    //Card de expira acesso - SIM
    cy.get('.md-confirm-button')
        .should('exist')
        .and('be.visible')
        .and('have.text','SIM')
        .and('not.have.attr', 'disabled')
}

//Card de expira acesso - clicar em SIM
export function clicarSIMExpira (selector) {

    //Card de expira acesso - clicar em SIM
    cy.get('.md-confirm-button')
        .click()

    //Mensagem "Aguarde carregando...", após clicarmos em SIM
    cy.get('center')
        .should('exist')
        .and('be.visible')
        .and('have.text','Aguarde carregando...')
}

//Validar Regras para a Nova Senha (antes de preencher campo Nova Senha)
export function regrasNovaSenhaAntes (selector) {

    //Validar a primeira Regras para a Nova Senha (antes de preencher campo Nova Senha) - Texto Ao menos 8 caracteres.
    cy.contains('span', 'Ao menos 8 caracteres.')
        .should('exist')
        .and('be.visible')
        .and('have.css', 'color', 'rgb(204, 0, 0)')

    //Validar a segunda Regras para a Nova Senha (antes de preencher campo Nova Senha) - Texto Ao menos 1 letra maiúscula ou minúscula.
    cy.contains('span', 'Ao menos 1 letra maiúscula ou minúscula.')
        .should('exist')
        .and('be.visible')
        .and('have.css', 'color', 'rgb(204, 0, 0)')

    //Validar a terceira Regras para a Nova Senha (antes de preencher campo Nova Senha) - Texto Ao menos 1 algarismo.
    cy.contains('span', 'Ao menos 1 algarismo.')
        .should('exist')
        .and('be.visible')
        .and('have.css', 'color', 'rgb(204, 0, 0)')

    //Validar a quarta Regras para a Nova Senha (antes de preencher campo Nova Senha) - Texto Ao menos 1 caractere especial.
    cy.contains('span', 'Ao menos 1 caractere especial.')
        .should('exist')
        .and('be.visible')
        .and('have.css', 'color', 'rgb(204, 0, 0)')

    //Validar a quinta Regras para a Nova Senha (antes de preencher campo Nova Senha) - Texto A nova senha não pode ser a atual.
    cy.contains('span', 'A nova senha não pode ser a atual.')
        .should('exist')
        .and('be.visible')
        .and('have.css', 'color', 'rgb(204, 0, 0)')

    //Validar a sexta Regras para a Nova Senha (antes de preencher campo Nova Senha) - Texto As novas senhas informadas são iguais.
    cy.contains('span', 'As novas senhas informadas são iguais.')
        .should('exist')
        .and('be.visible')
        .and('have.css', 'color', 'rgb(204, 0, 0)')
}

//Validar Regras para a Nova Senha (antes de preencher campo Nova Senha)
export function regrasNovaSenhaDepois (selector) {

    //Validar a primeira Regras para a Nova Senha (depois de preencher campo Nova Senha) - Texto Ao menos 8 caracteres.
    cy.contains('span', 'Ao menos 8 caracteres.')
        .should('exist')
        .and('be.visible')
        .and('have.css', 'color', 'rgb(0, 100, 0)')

    //Validar a segunda Regras para a Nova Senha (depois de preencher campo Nova Senha) - Texto Ao menos 1 letra maiúscula ou minúscula.
    cy.contains('span', 'Ao menos 1 letra maiúscula ou minúscula.')
        .should('exist')
        .and('be.visible')
        .and('have.css', 'color', 'rgb(0, 100, 0)')

    //Validar a terceira Regras para a Nova Senha (depois de preencher campo Nova Senha) - Texto Ao menos 1 algarismo.
    cy.contains('span', 'Ao menos 1 algarismo.')
        .should('exist')
        .and('be.visible')
        .and('have.css', 'color', 'rgb(0, 100, 0)')

    //Validar a quarta Regras para a Nova Senha (depois de preencher campo Nova Senha) - Texto Ao menos 1 caractere especial.
    cy.contains('span', 'Ao menos 1 caractere especial.')
        .should('exist')
        .and('be.visible')
        .and('have.css', 'color', 'rgb(0, 100, 0)')

    //Validar a quinta Regras para a Nova Senha (depois de preencher campo Nova Senha) - Texto A nova senha não pode ser a atual.
    cy.contains('span', 'A nova senha não pode ser a atual.')
        .should('exist')
        .and('be.visible')
        .and('have.css', 'color', 'rgb(0, 100, 0)')

    //Validar a sexta Regras para a Nova Senha (depois de preencher campo Nova Senha) - Texto As novas senhas informadas são iguais.
    cy.contains('span', 'As novas senhas informadas são iguais.')
        .should('exist')
        .and('be.visible')
        .and('have.css', 'color', 'rgb(204, 0, 0)')
}