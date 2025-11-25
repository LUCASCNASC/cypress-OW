import { ClienteCompletoPage } from '../../../pages/cadastro_cliente/cliente_completo/ClienteCompletoPage.js';
import { AnexoPage } from '../../../pages/cadastro_cliente/cliente_completo/aba_Anexo/AnexoPage.js';
import { PessoaPage } from '../../../pages/cadastro_cliente/cliente_completo/aba_Pessoa/PessoaPage.js';
import { RotaPage } from '../../../pages/cadastro_cliente/cliente_completo/aba_Rota/RotaPage.js';
import { TelefonePage } from '../../../pages/cadastro_cliente/cliente_completo/aba_Telefone/TelefonePage.js';
import { EnderecoPage } from '../../../pages/cadastro_cliente/cliente_completo/aba_endereco/EnderecoPage.js';

describe('Cadastrar cliente completo', () => {

    beforeEach(() => {
        cy.visit('/')
        cy.clearAllSessionStorage()
        cy.login()
        cy.urlAposLogin()
        cy.tituloPagina()
    })

    context('Cadastro de cliente completo - básico ', () => {

        it('1.Cliente completo CPF', () => {
            
            ClienteCompletoPage.clickMenuOpcoes() //PESSOA
            ClienteCompletoPage.clickOpcaoClienteCompleto()
            PessoaPage.fillCPFCliente()
            PessoaPage.fillNomeCompleto()
            PessoaPage.fillNomeSocial()
            PessoaPage.fillDataNascimento()
            PessoaPage.chooseSexoCliente()
            ClienteCompletoPage.clickSalvarCliente()
            ClienteCompletoPage.validateMessageEnderecoObrigatorio() //mensagem de endereço obrigatório após tentar salvar sem adicionar um endereço
            EnderecoPage.clickAbaAdress() //CADASTRAR ENDEREÇO
            EnderecoPage.clickAddNewAdress()
            EnderecoPage.modalAdressEmptyValidade()
            EnderecoPage.clickOpenTypeAdress()
            EnderecoPage.typeAdress()
            EnderecoPage.cepAdress()
            EnderecoPage.numberAdress()
            EnderecoPage.clickSaveAdress()
            EnderecoPage.infoAdressAdded()
            RotaPage.clickAbaRoute() //CADASTRAR ROTA
            RotaPage.clickAddedNewRoute()
            RotaPage.modalRouteEmptyValidade()
            RotaPage.typeAdressRoute()
            RotaPage.routaComplete()
            RotaPage.infoRouteAdded()
            TelefonePage.clickAbaPhone() //CADASTRAR TELEFONE
            TelefonePage.clickAddedNewPhone()
            TelefonePage.modalPhoneEmptyValidade()
            TelefonePage.typePhone()
            TelefonePage.numberPhone()
            TelefonePage.ramalPhone()
            TelefonePage.clickSavePhone()
            TelefonePage.infoPhoneAdded()
            TelefonePage.messPhoneAddedSucess()
            ClienteCompletoPage.clickSalvarCliente()
            ClienteCompletoPage.validateModalAguardeCarregando()
            ClienteCompletoPage.validateMessageSalvoSucesso()
        })  

        it('2.Cliente completo CPF - mensagem de campos obrigatórios', () => {
    
            ClienteCompletoPage.clickMenuOpcoes()
            ClienteCompletoPage.clickOpcaoClienteCompleto()
            ClienteCompletoPage.clickSalvarCliente() //tentar salvar cadastro, mas não deve permitir, pois ainda tem campo obrigatórios
            ClienteCompletoPage.validateMessageEnderecoObrigatorio() //mensagem de endereço obrigatório após tentar salvar em adicionar um endereço
            PessoaPage.fillCPFCliente()
            PessoaPage.fillNomeCompleto()
            PessoaPage.fillNomeSocial()
            PessoaPage.fillDataNascimento()
            PessoaPage.chooseSexoCliente()
            ClienteCompletoPage.clickSalvarCliente() //tentar salvar cadastro, mas não deve permitir, pois ainda tem campo obrigatórios
            ClienteCompletoPage.validateMessageEnderecoObrigatorio() //mensagem de endereço obrigatório após tentar salvar em adicionar um endereço
            EnderecoPage.clickAbaAdress() //CADASTRAR ENDEREÇO
            EnderecoPage.clickAddNewAdress()
            EnderecoPage.clickOpenTypeAdress()
            EnderecoPage.tipoEndereco()
            EnderecoPage.modalAdressEmptyValidade()
            ClienteCompletoPage.validarBotaoSalvarDesabilitado()
            EnderecoPage.clickOpenTypeAdress()
            EnderecoPage.typeAdress()
            EnderecoPage.cepAdress()
            EnderecoPage.numberAdress()
            ClienteCompletoPage.validarBotaoSalvarDesabilitado()
            EnderecoPage.clickSaveAdress()
            EnderecoPage.infoAdressAdded()
            RotaPage.clickAbaRoute() //CADASTRAR ROTA
            RotaPage.clickAddedNewRoute()
            RotaPage.modalRouteEmptyValidade()
            RotaPage.typeAdressRoute()
            RotaPage.routaComplete()
            RotaPage.infoRouteAdded()
            TelefonePage.clickAbaPhone() //CADASTRAR TELEFONE
            TelefonePage.clickAddedNewPhone()
            TelefonePage.modalPhoneEmptyValidade()
            TelefonePage.typePhone()
            TelefonePage.numberPhone()
            TelefonePage.ramalPhone()
            TelefonePage.clickSavePhone()
            TelefonePage.infoPhoneAdded()
            TelefonePage.messPhoneAddedSucess()
            ClienteCompletoPage.clickSalvarCliente()
            ClienteCompletoPage.validateModalAguardeCarregando()
            ClienteCompletoPage.validateMessageSalvoSucesso()
        })  

        it('3.Cliente completo CNPJ', () => {
    
            ClienteCompletoPage.clickMenuOpcoes()
            ClienteCompletoPage.clickOpcaoClienteCompleto() 
            PessoaPage.fillCNPJCliente() //PESSOA
            PessoaPage.fillNomeCNPJ()
            PessoaPage.fillNomeFantasiaCliente()
            ClienteCompletoPage.clickSalvarCliente() //tentar salvar cadastro, mas não deve permitir, pois ainda tem campo obrigatórios
            ClienteCompletoPage.validateMessageEnderecoObrigatorio() //mensagem de endereço obrigatório após tentar salvar em adicionar um endereço
            EnderecoPage.clickAbaAdress() //CADASTRAR ENDEREÇO
            EnderecoPage.clickAddNewAdress()
            EnderecoPage.tipoEndereco()
            EnderecoPage.modalAdressEmptyValidade()
            ClienteCompletoPage.validarBotaoSalvarDesabilitado()
            EnderecoPage.clickOpenTypeAdress()
            EnderecoPage.typeAdress()
            EnderecoPage.cepAdress()
            EnderecoPage.numberAdress()
            ClienteCompletoPage.validarBotaoSalvarDesabilitado()
            EnderecoPage.clickSaveAdress()
            EnderecoPage.infoAdressAdded()
            RotaPage.clickAbaRoute() //CADASTRAR ROTA
            RotaPage.clickAddedNewRoute()
            RotaPage.modalRouteEmptyValidade()
            RotaPage.typeAdressRoute()
            RotaPage.routaComplete()
            RotaPage.infoRouteAdded()
            TelefonePage.clickAbaPhone() //CADASTRAR TELEFONE
            TelefonePage.clickAddedNewPhone()
            TelefonePage.modalPhoneEmptyValidade()
            TelefonePage.typePhone()
            TelefonePage.numberPhone()
            TelefonePage.ramalPhone()
            TelefonePage.clickSavePhone()
            TelefonePage.infoPhoneAdded()
            TelefonePage.messPhoneAddedSucess()
            ClienteCompletoPage.clickSalvarCliente()
            ClienteCompletoPage.validateModalAguardeCarregando()
            ClienteCompletoPage.validateMessageSalvoSucesso()
        }) 
    })

    context('Cadastro de cliente completo - incluindo anexo após salvar o cadastro de cliente', () => {

        it('4.Cliente completo CPF - caminho feliz', () => {

            ClienteCompletoPage.clickMenuOpcoes()
            ClienteCompletoPage.clickOpcaoClienteCompleto() 
            PessoaPage.fillCPFCliente()
            PessoaPage.fillNomeCompleto()
            PessoaPage.fillNomeSocial()
            PessoaPage.fillDataNascimento()
            PessoaPage.chooseSexoCliente()
            ClienteCompletoPage.clickSalvarCliente()
            EnderecoPage.clickAbaAdress() //CADASTRAR ENDEREÇO
            EnderecoPage.clickAddNewAdress()
            EnderecoPage.tipoEndereco()
            EnderecoPage.modalAdressEmptyValidade()
            EnderecoPage.clickOpenTypeAdress()
            EnderecoPage.typeAdress()
            EnderecoPage.cepAdress()
            EnderecoPage.numberAdress()
            ClienteCompletoPage.validarBotaoSalvarDesabilitado()
            EnderecoPage.clickSaveAdress()
            EnderecoPage.infoAdressAdded()
            RotaPage.clickAbaRoute() //CADASTRAR ROTA
            RotaPage.clickAddedNewRoute()
            RotaPage.modalRouteEmptyValidade()
            RotaPage.typeAdressRoute()
            RotaPage.routaComplete()
            RotaPage.infoRouteAdded()
            TelefonePage.clickAbaPhone() //CADASTRAR TELEFONE
            TelefonePage.clickAddedNewPhone()
            TelefonePage.modalPhoneEmptyValidade()
            TelefonePage.typePhone()
            TelefonePage.numberPhone()
            TelefonePage.ramalPhone()
            TelefonePage.clickSavePhone()
            TelefonePage.infoPhoneAdded()
            TelefonePage.messPhoneAddedSucess()
            ClienteCompletoPage.clickSalvarCliente()
            ClienteCompletoPage.validateModalAguardeCarregando()
            ClienteCompletoPage.validateMessageSalvoSucesso()
            ClienteCompletoPage.clickMenuCadastrarClienteCompleto()
            AnexoPage.clickAbaAttachment() //CADASTRAR ANEXO 
            AnexoPage.validateAbaAttachmentEmpty()
            AnexoPage.selectFirstTypeAttachment()
            AnexoPage.filePDF()
            AnexoPage.confirmSendFile()
            AnexoPage.messAttachmentAddSucess()
            AnexoPage.validateAttachmentAdded()
            ClienteCompletoPage.clickSalvarCliente()
            ClienteCompletoPage.validateMessageSalvoSucesso()
        })
    })
})