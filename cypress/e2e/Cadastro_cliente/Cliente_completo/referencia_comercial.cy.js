import { ClienteCompletoPage } from '../../../pages/cadastro_cliente/cliente_completo/ClienteCompletoPage.js';
import { PessoaPage } from '../../../pages/cadastro_cliente/cliente_completo/aba_Pessoa/PessoaPage.js';
import { RefComercialPage } from '../../../pages/cadastro_cliente/cliente_completo/aba_Referencia/ref_comercial/RefComercialPage.js';
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

    context('Complete customer record - including business references', () => {

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
            EnderecoPage.tipoEndereco()
            EnderecoPage.validateEnderecoVazio();
            EnderecoPage.clickAbrirTipoEndereco();
            EnderecoPage.chooseTipoEndereco()
            EnderecoPage.fillCEPEndereco()
            EnderecoPage.fillNumeroEndereco()
            ClienteCompletoPage.validarBotaoSalvarDesabilitado()
            EnderecoPage.clickSalvarEndereco()
            EnderecoPage.infoEnderecoAdicionado()
            RotaPage.clickAbaRota() 
            RotaPage.clickAdicionarNovaRota()
            RotaPage.validateRotaVazia()
            RotaPage.chooseTipoEnderecoRota()
            RotaPage.addRotaCompleta()
            RotaPage.validadeRotaAdicionada()
            TelefonePage.clickAbaTelefone() 
            TelefonePage.clickAdicionarNovoTelefone()
            TelefonePage.validateTelefoneVazio()
            TelefonePage.chooseTipoTelefone()
            TelefonePage.fillNumeroTelefone()
            TelefonePage.fillRamalTelefone()
            TelefonePage.clickSalvarTelefone()
            TelefonePage.validateTelefoneAdicionado()
            TelefonePage.validateMessageTelefoneAdicionado()
            ClienteCompletoPage.ClickAbaReferencias() 
            RefComercialPage.clickAbaRefCommercial()
            RefComercialPage.validadeRefCommercialEmpty()
            RefComercialPage.clickAddNewRefCommercial()
            RefComercialPage.modalRefCommercialEmpty()
            RefComercialPage.enterprise()
            RefComercialPage.contact()
            RefComercialPage.phone()
            RefComercialPage.email()
            RefComercialPage.observation()
            RefComercialPage.clickSaveRefCommercial()
            RefComercialPage.infoRefCommercialAdded()
            RefComercialPage.messRefCommercialAddedSucess()
            ClienteCompletoPage.clickSalvarClienteCompleto()
            ClienteCompletoPage.validateModalAguardeCarregando()
            ClienteCompletoPage.validateMessageSalvoSucesso()
        }) 
    })
})