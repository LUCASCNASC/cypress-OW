//Comando personalizado para validar url da opção menu Departamentos
Cypress.Commands.add('urlDepartamentos', (username, password) => {
  
    cy.url()
      .should('include', '/#!/departamentos//')
  
  });

//Comando personalizado para validar url da opção menu Serviços
Cypress.Commands.add('urlServicos', (username, password) => {

    cy.url()
        .should('include', '/#!/servicos')

});

//Comando personalizado para validar url da opção menu Pedidos pendentes
Cypress.Commands.add('urlPedidosPendentes', (username, password) => {

    cy.url()
        .should('include', '/#!/vendedor/pedidos')

});

//Comando personalizado para validar url da opção menu Cliente
Cypress.Commands.add('urlCliente', (username, password) => {

    cy.url()
        .should('include', '/#!/cliente/cliente-cadastro')

});

//Comando personalizado para validar url da opção menu Cliente Completo
Cypress.Commands.add('urlClienteCompleto', (username, password) => {

    cy.url()
        .should('include', '/#!/clienteCompleto')

});

//Comando personalizado para validar url da opção menu Pós venda
Cypress.Commands.add('urlPosVenda', (username, password) => {

    cy.url()
        .should('include', '/#!/posvenda')

});

//Comando personalizado para validar url da opção menu Intenção de compra
Cypress.Commands.add('urlIntencaoCompra', (username, password) => {

    cy.url()
        .should('include', '/#!/intencoescompra')

});

//Comando personalizado para validar url da opção menu Configurações
Cypress.Commands.add('urlConfiguracoes', (username, password) => {

    cy.url()
        .should('include', '/#!/customizacao')

});

//Comando personalizado para validar url da opção menu Minha performance
Cypress.Commands.add('urlMinhaPerformance', (username, password) => {

    cy.url()
        .should('include', '/#!/vendedor')

});