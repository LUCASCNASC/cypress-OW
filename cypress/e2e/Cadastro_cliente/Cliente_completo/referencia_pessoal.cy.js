import { ClienteCompletoPage } from '../../../pages/cadastro_cliente/cliente_completo/ClienteCompletoPage.js';
import { PessoaPage } from '../../../pages/cadastro_cliente/cliente_completo/aba_Pessoa/PessoaPage.js';
import { RefPessoalPage } from '../../../pages/cadastro_cliente/cliente_completo/aba_Referencia/ref_pessoal/RefPessoalPage.js';
import { RotaPage } from '../../../pages/cadastro_cliente/cliente_completo/aba_Rota/RotaPage.js';
import { TelefonePage } from '../../../pages/cadastro_cliente/cliente_completo/aba_Telefone/TelefonePage.js';
import { EnderecoPage } from '../../../pages/cadastro_cliente/cliente_completo/aba_endereco/EnderecoPage.js';

describe('Register complete client', () => {

    beforeEach(() => {
        cy.visit('/');
        cy.clearAllSessionStorage();
        cy.login();
        cy.urlAposLogin();
        cy.tituloPagina();
    })

    context('Complete customer registration - including personal references', () => {

        it('1.Complete customer CPF - happy path', () => {

            ClienteCompletoPage.clickMenuOpcoes();
            ClienteCompletoPage.clickOpcaoClienteCompleto();
            PessoaPage.fillCPFCliente();
            PessoaPage.fillNomeCompleto();
            PessoaPage.fillNomeSocial();
            PessoaPage.fillDataNascimento();
            PessoaPage.chooseSexoCliente();
            ClienteCompletoPage.clickSalvarClienteCompleto()
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
            EnderecoPage.infoEnderecoAdicionado();
            RotaPage.clickAbaRota(); 
            RotaPage.clickAdicionarNovaRota();
            RotaPage.validateRotaVazia();
            RotaPage.chooseTipoEnderecoRota();
            RotaPage.addRotaCompleta();
            RotaPage.validadeRotaAdicionada();
            TelefonePage.clickAbaTelefone(); 
            TelefonePage.clickAdicionarNovoTelefone();
            TelefonePage.validateTelefoneVazio();
            TelefonePage.chooseTipoTelefone();
            TelefonePage.fillNumeroTelefone();
            TelefonePage.fillRamalTelefone();
            TelefonePage.clickSalvarTelefone();
            TelefonePage.validateTelefoneAdicionado();
            TelefonePage.validateMessageTelefoneAdicionado();
            ClienteCompletoPage.ClickAbaReferencias() ;
            RefPessoalPage.clickAbaRefGuys();
            RefPessoalPage.validateAbaEmpty();
            RefPessoalPage.clickAddNew();
            RefPessoalPage.modalEmpty();
            RefPessoalPage.name();
            RefPessoalPage.email();
            RefPessoalPage.phone();
            RefPessoalPage.relationship();
            RefPessoalPage.clickSave();
            RefPessoalPage.messRefGuysAddedSucess();
            RefPessoalPage.infoAdded();
            ClienteCompletoPage.clickSalvarClienteCompleto();
            ClienteCompletoPage.validateModalAguardeCarregando();
            ClienteCompletoPage.validateMessageSalvoSucesso();
        }) 
    })
})