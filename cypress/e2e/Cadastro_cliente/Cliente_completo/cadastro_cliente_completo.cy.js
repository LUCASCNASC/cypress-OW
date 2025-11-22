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

            ClienteCompletoPage.iconMenuOptions() //PESSOA
            ClienteCompletoPage.optionClientComplete()
            PessoaPage.cpfClient()
            PessoaPage.nameComplete()
            PessoaPage.nameSocial()
            PessoaPage.dateBirth()
            PessoaPage.sexClient()
            ClienteCompletoPage.saveClient()
            ClienteCompletoPage.messAlertAdressMandatory() //mensagem de endereço obrigatório após tentar salvar sem adicionar um endereço
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
            ClienteCompletoPage.saveClient()
            ClienteCompletoPage.modalWaitingLoading()
            ClienteCompletoPage.messRegisterSaveSucess()
        })  

        it('2.Cliente completo CPF - mensagem de campos obrigatórios', () => {
    
            ClienteCompletoPage.iconMenuOptions()
            ClienteCompletoPage.optionClientComplete()
            ClienteCompletoPage.saveClient() //tentar salvar cadastro, mas não deve permitir, pois ainda tem campo obrigatórios
            ClienteCompletoPage.messAlertAdressMandatory() //mensagem de endereço obrigatório após tentar salvar em adicionar um endereço
            PessoaPage.cpfClient()
            PessoaPage.nameComplete()
            PessoaPage.nameSocial()
            PessoaPage.dateBirth()
            PessoaPage.sexClient()
            ClienteCompletoPage.saveClient() //tentar salvar cadastro, mas não deve permitir, pois ainda tem campo obrigatórios
            ClienteCompletoPage.messAlertAdressMandatory() //mensagem de endereço obrigatório após tentar salvar em adicionar um endereço
            EnderecoPage.clickAbaAdress() //CADASTRAR ENDEREÇO
            EnderecoPage.clickAddNewAdress()
            EnderecoPage.clickOpenTypeAdress()
            EnderecoPage.tipoEndereco()
            EnderecoPage.modalAdressEmptyValidade()
            ClienteCompletoPage.buttonSaveDisabled()
            EnderecoPage.clickOpenTypeAdress()
            EnderecoPage.typeAdress()
            EnderecoPage.cepAdress()
            EnderecoPage.numberAdress()
            ClienteCompletoPage.buttonSaveDisabled()
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
            ClienteCompletoPage.saveClient()
            ClienteCompletoPage.modalWaitingLoading()
            ClienteCompletoPage.messRegisterSaveSucess()
        })  

        it('3.Cliente completo CNPJ', () => {
    
            ClienteCompletoPage.iconMenuOptions()
            ClienteCompletoPage.optionClientComplete() 
            PessoaPage.cnpjClient() //PESSOA
            PessoaPage.nameCNPJ()
            PessoaPage.nameFantasyCNPJ()
            ClienteCompletoPage.saveClient() //tentar salvar cadastro, mas não deve permitir, pois ainda tem campo obrigatórios
            ClienteCompletoPage.messAlertAdressMandatory() //mensagem de endereço obrigatório após tentar salvar em adicionar um endereço
            EnderecoPage.clickAbaAdress() //CADASTRAR ENDEREÇO
            EnderecoPage.clickAddNewAdress()
            EnderecoPage.tipoEndereco()
            EnderecoPage.modalAdressEmptyValidade()
            ClienteCompletoPage.buttonSaveDisabled()
            EnderecoPage.clickOpenTypeAdress()
            EnderecoPage.typeAdress()
            EnderecoPage.cepAdress()
            EnderecoPage.numberAdress()
            ClienteCompletoPage.buttonSaveDisabled()
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
            ClienteCompletoPage.saveClient()
            ClienteCompletoPage.modalWaitingLoading()
            ClienteCompletoPage.messRegisterSaveSucess()
        }) 
    })

    context('Cadastro de cliente completo - incluindo anexo após salvar o cadastro de cliente', () => {

        it('4.Cliente completo CPF - caminho feliz', () => {

            ClienteCompletoPage.iconMenuOptions()
            ClienteCompletoPage.optionClientComplete() 
            PessoaPage.cpfClient()
            PessoaPage.nameComplete()
            PessoaPage.nameSocial()
            PessoaPage.dateBirth()
            PessoaPage.sexClient()
            ClienteCompletoPage.saveClient()
            EnderecoPage.clickAbaAdress() //CADASTRAR ENDEREÇO
            EnderecoPage.clickAddNewAdress()
            EnderecoPage.tipoEndereco()
            EnderecoPage.modalAdressEmptyValidade()
            EnderecoPage.clickOpenTypeAdress()
            EnderecoPage.typeAdress()
            EnderecoPage.cepAdress()
            EnderecoPage.numberAdress()
            ClienteCompletoPage.buttonSaveDisabled()
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
            ClienteCompletoPage.saveClient()
            ClienteCompletoPage.modalWaitingLoading()
            ClienteCompletoPage.messRegisterSaveSucess()
            ClienteCompletoPage.menuRegisterClientComplete()
            AnexoPage.clickAbaAttachment() //CADASTRAR ANEXO 
            AnexoPage.validateAbaAttachmentEmpty()
            AnexoPage.selectFirstTypeAttachment()
            AnexoPage.filePDF()
            AnexoPage.confirmSendFile()
            AnexoPage.messAttachmentAddSucess()
            AnexoPage.validateAttachmentAdded()
            ClienteCompletoPage.saveClient()
            ClienteCompletoPage.messRegisterSaveSucess()
        })
    })
})