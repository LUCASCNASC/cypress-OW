export class PreencherCampoAnexo {

    constructor(page) {
        this.page = page
    }

    //função para anexar arquivo dentro do cadastro de cliente completo
    async arquivoPFD (selector) {

        const caminhoDoArquivo = 'cypress\fixtures\anexo_cadastro_cliente_completo.pdf';

        //cy.get('#clienteBotaoUploadDeArquivo').selectFile('anexo_cadastro_cliente_completo.pdf')
        cy.get("[type='file']").selectFile('anexo_cadastro_cliente_completo.pdf', {force:true})
    }
}