import { ClienteCompletoPage } from '../../../pages/cadastro_cliente/cliente_completo/ClienteCompletoPage.js';
import { EmpregaticioPage } from '../../../pages/cadastro_cliente/cliente_completo/aba_Empregaticio/EmpregaticioPage.js';
import { PessoaPage } from '../../../pages/cadastro_cliente/cliente_completo/aba_Pessoa/PessoaPage.js';
import { RotaPage } from '../../../pages/cadastro_cliente/cliente_completo/aba_Rota/RotaPage.js';
import { TelefonePage } from '../../../pages/cadastro_cliente/cliente_completo/aba_Telefone/TelefonePage.js';
import { EnderecoPage } from '../../../pages/cadastro_cliente/cliente_completo/aba_endereco/EnderecoPage.js';

describe('Register complete client', () => {

    beforeEach(() => {
        cy.visit('/');
        cy.clearAllSessionStorage();
        cy.login();
        cy.urlAposLogin();
        cy.validateTitlePage();
    })

    context('Complete client registration - including Employment', () => {

        it('1.Complete customer CPF - happy path', () => {

            ClienteCompletoPage.clickMenuOpcoes();
            ClienteCompletoPage.clickOpcaoClienteCompleto();
            PessoaPage.fillCPFCliente();
            PessoaPage.fillNomeCompleto();
            PessoaPage.fillNomeSocial();
            PessoaPage.fillDataNascimento();
            PessoaPage.chooseSexoCliente();
            ClienteCompletoPage.clickSalvarClienteCompleto();
            ClienteCompletoPage.validateMessageEnderecoObrigatorio(); 
            EnderecoPage.clickAbaEndereco(); 
            EnderecoPage.clickAdicionarNovoEndereco();
            EnderecoPage.tipoEndereco();
            EnderecoPage.validateEnderecoVazio();
            EnderecoPage.clickAbrirTipoEndereco();
            EnderecoPage.chooseTipoEndereco();
            EnderecoPage.fillCEPEndereco();
            EnderecoPage.fillNumeroEndereco();
            ClienteCompletoPage.validarBotaoSalvarDesabilitado();
            EnderecoPage.clickSalvarEndereco();
            EnderecoPage.clickSalvarEndereco();
            EnderecoPage.infoEnderecoAdicionado();
            RotaPage.registerRota();
            TelefonePage.registerTelefone();
            EmpregaticioPage.clickAbaEmpregaticio();
            EmpregaticioPage.validateAbaEmpregaticioVazio();
            EmpregaticioPage.clickAdicionarNovoEmpregaticio();
        }) 
    })
})