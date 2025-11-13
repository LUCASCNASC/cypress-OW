export class ValidaFinal {
  /**
   * Valida informações do cliente na última tela sem entrega.
   */
  static infoClienteSemEntrega() {
    cy.get('.flex-gt-xs-100 > .md-primary > .md-toolbar-tools > .flex')
      .scrollIntoView()
      .wait(200)
      .should('be.visible')
      .and('have.text', 'Cliente');
    cy.get('.cliente > :nth-child(1) > b').should('be.visible').and('have.text', 'Nome:');
    cy.get('.padding-10 > :nth-child(1) > .cliente > :nth-child(1)').should('be.visible').and('contain', 'TA CPF AUTOMAÇÃO - COM ROTA');
    cy.get('.cliente > :nth-child(2) > b').should('be.visible').and('have.text', 'CPF/CNPJ:');
    cy.get('.padding-10 > :nth-child(1) > .cliente > :nth-child(2)').should('be.visible').and('contain', '489.762.490-89');
    cy.get('.cliente > :nth-child(3) > b').should('be.visible').and('have.text', 'Tel. fixo:');
    cy.get('.padding-10 > :nth-child(1) > .cliente > :nth-child(3)').should('be.visible').and('contain', '(44) 98656-5132');
    cy.get('.cliente > :nth-child(4) > b').should('be.visible').and('have.text', 'Tel. celular:');
    cy.get('.cliente > :nth-child(4)').should('be.visible').and('contain', '(44) 98656-5132');
    cy.get('.cliente > :nth-child(5) > b').should('be.visible').and('have.text', 'E-mail:');
    cy.get('.cliente > :nth-child(5)').should('be.visible').and('contain', 'ta_cpf_automação_com_rota@gmail.com');
    cy.get('.cliente > :nth-child(6) > b').should('be.visible').and('have.text', 'E-mail NF-e:');
    cy.get('.cliente > :nth-child(6)').should('be.visible').and('contain', 'ta_cpf_automação_com_rota@gmail.com');
    cy.get('.padding-10 > :nth-child(1) > .cliente > .md-accent').should('be.visible').and('not.be.disabled').and('have.text', 'Editar');
    cy.get('.flex-100 > .md-auto-horizontal-margin > .md-container').should('be.visible').and('not.be.disabled');
    cy.get('.flex-100 > .md-auto-horizontal-margin > .md-label').should('be.visible').and('not.be.disabled').and('contain', 'Consumidor Final');
  }

  /**
   * Valida informações do cliente na última tela com entrega.
   */
  static infoClienteComEntrega() {
    cy.get('.confirmacao > :nth-child(1) > .md-primary > .md-toolbar-tools > .flex')
      .scrollIntoView()
      .wait(200)
      .should('be.visible')
      .and('have.text', 'Cliente');
    cy.get('.cliente > :nth-child(1) > b').should('be.visible').and('have.text', 'Nome:');
    cy.get('.padding-10 > :nth-child(1) > .cliente > :nth-child(1)').should('be.visible').and('contain', 'TA CPF AUTOMAÇÃO - COM ROTA');
    cy.get('.cliente > :nth-child(2) > b').should('be.visible').and('have.text', 'CPF/CNPJ:');
    cy.get('.padding-10 > :nth-child(1) > .cliente > :nth-child(2)').should('be.visible').and('contain', '489.762.490-89');
    cy.get('.cliente > :nth-child(3) > b').should('be.visible').and('have.text', 'Tel. fixo:');
    cy.get('.padding-10 > :nth-child(1) > .cliente > :nth-child(3)').should('be.visible').and('contain', '(44) 98656-5132');
    cy.get('.cliente > :nth-child(4) > b').should('be.visible').and('have.text', 'Tel. celular:');
    cy.get('.cliente > :nth-child(4)').should('be.visible').and('contain', '(44) 98656-5132');
    cy.get('.cliente > :nth-child(5) > b').should('be.visible').and('have.text', 'E-mail:');
    cy.get('.cliente > :nth-child(5)').should('be.visible').and('contain', 'ta_cpf_automação_com_rota@gmail.com');
    cy.get('.cliente > :nth-child(6) > b').should('be.visible').and('have.text', 'E-mail NF-e:');
    cy.get('.cliente > :nth-child(6)').should('be.visible').and('contain', 'ta_cpf_automação_com_rota@gmail.com');
    cy.get('.padding-10 > :nth-child(1) > .cliente > .md-accent').should('be.visible').and('not.be.disabled').and('have.text', 'Editar');
    cy.get('.flex-100 > .md-auto-horizontal-margin > .md-container').should('be.visible').and('not.be.disabled');
    cy.get('.flex-100 > .md-auto-horizontal-margin > .md-label').should('be.visible').and('not.be.disabled').and('contain', 'Consumidor Final');
  }

  /**
   * Valida informações de entrega na última tela.
   */
  static infoEntrega() {
    cy.get('h2[ng-show="carrinho.endereco.local == \'entrega\'"]')
      .scrollIntoView()
      .wait(200)
      .should('be.visible')
      .and('have.text', 'Endereço de entrega');
    cy.get('.endereco > :nth-child(1) > b').should('be.visible').and('have.text', 'CEP:');
    cy.get('.endereco > :nth-child(1)').should('be.visible').and('contain', '87.065-320');
    cy.get('.endereco > :nth-child(2) > b').should('be.visible').and('have.text', 'Endereço:');
    cy.get('.endereco > :nth-child(2)').should('be.visible').and('contain', 'RUA TULIPA, 232, PARQUE INDUSTRIAL, MARINGA/PR');
    cy.get('.endereco > :nth-child(3) > b').should('be.visible').and('have.text', 'Telefone:');
    cy.get('.endereco > :nth-child(3) > .ng-binding').should('be.visible').and('contain', '(44) 9865-5132');
    cy.get('[ng-show="(carrinho.frete && carrinho.frete.rota && carrinho.endereco.local == \'entrega\')"] > b').should('be.visible').and('have.text', 'Rota:');
    cy.get('[ng-show="(carrinho.frete && carrinho.frete.rota && carrinho.endereco.local == \'entrega\')"]').should('be.visible').and('contain', 'Rota Maringá, Centro');
    cy.get('.endereco > .md-accent').should('be.visible').and('not.be.disabled').and('have.text', 'Editar Telefone');
  }

  /**
   * Valida campo "OBSERVAÇÕES PARA A NOTA FISCAL" vazio.
   */
  static obsNotaFiscalVazio() {
    cy.get(':nth-child(1) > .header-interno > label').should('be.visible').and('have.text', 'OBSERVAÇÕES PARA A NOTA FISCAL');
    cy.get(':nth-child(1) > .col-md-12 > .form-group > .form-control')
      .should('be.visible')
      .and('not.be.disabled')
      .and('have.value', '');
  }

  /**
   * Valida campo "OBSERVAÇÕES PARA USO INTERNO" vazio e limite de caracteres.
   */
  static obsInternaVazio() {
    cy.get(':nth-child(2) > .header-interno > label').should('be.visible').and('have.text', 'OBSERVAÇÕES PARA USO INTERNO');
    cy.get(':nth-child(2) > .col-md-12 > .form-group > .form-control')
      .should('be.visible')
      .and('not.be.disabled')
      .and('have.value', '')
      .and('have.attr', 'maxlength', '300');
    cy.get('.form-group > span').should('be.visible').and('have.text', 'Limite de 300 caracteres');
  }
}