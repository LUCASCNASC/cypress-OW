import { ClienteCompletoPage } from '../../../pages/cadastro_cliente/cliente_completo/ClienteCompletoPage.js';
import { AnexoPage } from '../../../pages/cadastro_cliente/cliente_completo/aba_Anexo/AnexoPage.js';
import { PessoaPage } from '../../../pages/cadastro_cliente/cliente_completo/aba_Pessoa/PessoaPage.js';
import { RotaPage } from '../../../pages/cadastro_cliente/cliente_completo/aba_Rota/RotaPage.js';
import { TelefonePage } from '../../../pages/cadastro_cliente/cliente_completo/aba_Telefone/TelefonePage.js';
import { EnderecoPage } from '../../../pages/cadastro_cliente/cliente_completo/aba_endereco/EnderecoPage.js';

describe('register complete client', () => {

    beforeEach(() => {
        cy.visit('/');
        cy.clearAllSessionStorage();
        cy.login();
        cy.validateTitlePage();
        ClienteCompletoPage.clickMenuOpcoes(); 
        ClienteCompletoPage.clickOpcaoClienteCompleto();
    })

    context('complete customer registration - basic', () => {

        it('full customer CPF', () => {
            
            PessoaPage.fillCPFCliente();
            PessoaPage.fillNomeCompleto();
            PessoaPage.fillNomeSocial();
            PessoaPage.fillDataNascimento();
            PessoaPage.chooseSexoCliente();
            ClienteCompletoPage.clickSalvarCliente();
            ClienteCompletoPage.validateMessageEnderecoObrigatorio();
            EnderecoPage.addEndereco();
            RotaPage.registerRota();
            TelefonePage.registerTelefone();
            ClienteCompletoPage.clickSalvarCliente();
            ClienteCompletoPage.validateModalAguardeCarregando();
            ClienteCompletoPage.validateMessageSalvoSucesso();
        })  

        it('customer full CPF - required fields message', () => {
    
            ClienteCompletoPage.clickSalvarCliente();
            ClienteCompletoPage.validateMessageEnderecoObrigatorio(); 
            PessoaPage.fillCPFCliente();
            PessoaPage.fillNomeCompleto();
            PessoaPage.fillNomeSocial();
            PessoaPage.fillDataNascimento();
            PessoaPage.chooseSexoCliente();
            ClienteCompletoPage.clickSalvarCliente(); 
            ClienteCompletoPage.validateMessageEnderecoObrigatorio(); 
            EnderecoPage.addEndereco();
            RotaPage.registerRota();
            TelefonePage.registerTelefone();
            ClienteCompletoPage.validateModalAguardeCarregando();
            ClienteCompletoPage.validateMessageSalvoSucesso();
        })  

        it('complete customer CNPJ', () => {
  
            PessoaPage.fillCNPJCliente();
            PessoaPage.fillNomeCNPJ();
            PessoaPage.fillNomeFantasiaCliente();
            ClienteCompletoPage.clickSalvarCliente(); 
            ClienteCompletoPage.validateMessageEnderecoObrigatorio(); 
            EnderecoPage.addEndereco();
            RotaPage.registerRota();
            TelefonePage.registerTelefone();
            ClienteCompletoPage.clickSalvarCliente();
            ClienteCompletoPage.validateModalAguardeCarregando();
            ClienteCompletoPage.validateMessageSalvoSucesso();
        }) 
    })

    context('complete customer registration - including attachment after saving the customer registration', () => {

        it('complete customer CPF - happy path', () => {

            PessoaPage.fillCPFCliente();
            PessoaPage.fillNomeCompleto();
            PessoaPage.fillNomeSocial();
            PessoaPage.fillDataNascimento();
            PessoaPage.chooseSexoCliente();
            ClienteCompletoPage.clickSalvarCliente();
            EnderecoPage.addEndereco();
            RotaPage.registerRota();
            TelefonePage.registerTelefone();
            ClienteCompletoPage.clickSalvarCliente();
            ClienteCompletoPage.validateModalAguardeCarregando();
            ClienteCompletoPage.validateMessageSalvoSucesso();
            ClienteCompletoPage.clickMenuCadastrarClienteCompleto()
            AnexoPage.clickAbaAnexo();
            AnexoPage.validateAbaAnexoVazio();
            AnexoPage.selectPrimeiroTipoAnexo();
            AnexoPage.filePDF();
            AnexoPage.confirmEnvioArquivo();
            AnexoPage.validateMessageAnexoAdicionado();
            AnexoPage.validateAnexoAdicionado();
            ClienteCompletoPage.clickSalvarCliente();
            ClienteCompletoPage.validateMessageSalvoSucesso();
        })
    })
})
