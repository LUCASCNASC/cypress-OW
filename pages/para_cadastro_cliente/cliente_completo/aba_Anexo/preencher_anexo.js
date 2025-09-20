export class FillFieldAnexo {
  //Anexa um arquivo PDF (anexo_cadastro_cliente_completo.pdf) no campo de upload.
  //O caminho do arquivo é relativo à pasta fixtures do Cypress.
  static filePDF() {
    const filePath = 'anexo_cadastro_cliente_completo.pdf';
    cy.get("[type='file']").selectFile(filePath, { force: true });
  }
}