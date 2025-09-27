import { GeneralClientComplete } from '../../../../pages/para_cadastro_cliente/cliente_completo/geral_cliente_completo';
import { ClickClientComplete } from '../../../../pages/para_cadastro_cliente/cliente_completo/clicar_cliente_completo';
import { GeneralAnexo } from '../../../../pages/para_cadastro_cliente/cliente_completo/aba_Anexo/geral_anexo';
import { FillFieldAnexo } from '../../../../pages/para_cadastro_cliente/cliente_completo/aba_Anexo/preencher_anexo';
import { FillPerson } from '../../../../pages/para_cadastro_cliente/cliente_completo/aba_Pessoa/preencher_pessoa';
import { GeneralRefRoute } from '../../../../pages/para_cadastro_cliente/cliente_completo/aba_Rota/geral_rota';
import { FillRefRoute } from '../../../../pages/para_cadastro_cliente/cliente_completo/aba_Rota/preencher_rota';
import { GeneralRefPhone } from '../../../../pages/para_cadastro_cliente/cliente_completo/aba_Telefone/geral_telefone';
import { FillRefPhone } from '../../../../pages/para_cadastro_cliente/cliente_completo/aba_Telefone/preencher_telefone';
import { GeneralAdress } from '../../../../pages/para_cadastro_cliente/cliente_completo/aba_endereco/geral_endereco';
import { FillAdress } from '../../../../pages/para_cadastro_cliente/cliente_completo/aba_endereco/preencher_endereco';


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

            GeneralClientComplete.iconMenuOptions() //PESSOA
            GeneralClientComplete.optionClientComplete()
            FillPerson.cpfClient()
            FillPerson.nameComplete()
            FillPerson.nameSocial()
            FillPerson.dateBirth()
            FillPerson.sexClient()
            ClickClientComplete.saveClient()
            GeneralClientComplete.messAlertAdressMandatory() //mensagem de endereço obrigatório após tentar salvar sem adicionar um endereço
            GeneralAdress.clickAbaAdress() //CADASTRAR ENDEREÇO
            GeneralAdress.clickAddNewAdress()
            GeneralAdress.modalAdressEmptyValidade()
            GeneralAdress.clickOpenTypeAdress()
            FillAdress.typeAdress()
            FillAdress.cepAdress()
            FillAdress.numberAdress()
            GeneralAdress.clickSaveAdress()
            GeneralAdress.infoAdressAdded()
            GeneralRefRoute.clickAbaRoute() //CADASTRAR ROTA
            GeneralRefRoute.clickAddedNewRoute()
            GeneralRefRoute.modalRouteEmptyValidade()
            FillRefRoute.typeAdressRoute()
            FillRefRoute.routaComplete()
            FillRefRoute.infoRouteAdded()
            GeneralRefPhone.clickAbaPhone() //CADASTRAR TELEFONE
            GeneralRefPhone.clickAddedNewPhone()
            GeneralRefPhone.modalPhoneEmptyValidade()
            FillRefPhone.typePhone()
            FillRefPhone.numberPhone()
            FillRefPhone.ramalPhone()
            GeneralRefPhone.clickSavePhone()
            GeneralRefPhone.infoPhoneAdded()
            GeneralRefPhone.messPhoneAddedSucess()
            ClickClientComplete.saveClient()
            GeneralClientComplete.modalWaitingLoading()
            GeneralClientComplete.messRegisterSaveSucess()
        })  

        it('2.Cliente completo CPF - mensagem de campos obrigatórios', () => {
    
            GeneralClientComplete.iconMenuOptions()
            GeneralClientComplete.optionClientComplete()
            ClickClientComplete.saveClient() //tentar salvar cadastro, mas não deve permitir, pois ainda tem campo obrigatórios
            GeneralClientComplete.messAlertAdressMandatory() //mensagem de endereço obrigatório após tentar salvar em adicionar um endereço
            FillPerson.cpfClient()
            FillPerson.nameComplete()
            FillPerson.nameSocial()
            FillPerson.dateBirth()
            FillPerson.sexClient()
            ClickClientComplete.saveClient() //tentar salvar cadastro, mas não deve permitir, pois ainda tem campo obrigatórios
            ClickClientComplete.messAlertAdressMandatory() //mensagem de endereço obrigatório após tentar salvar em adicionar um endereço
            GeneralAdress.clickAbaAdress() //CADASTRAR ENDEREÇO
            GeneralAdress.clickAddNewAdress()
            GeneralAdress.clickOpenTypeAdress()
            FillAdress.tipoEndereco()
            GeneralAdress.modalAdressEmptyValidade()
            GeneralClientComplete.buttonSaveDisabled()
            GeneralAdress.clickOpenTypeAdress()
            FillAdress.typeAdress()
            FillAdress.cepAdress()
            FillAdress.numberAdress()
            GeneralClientComplete.buttonSaveDisabled()
            GeneralAdress.clickSaveAdress()
            GeneralAdress.infoAdressAdded()
            GeneralRefRoute.clickAbaRoute() //CADASTRAR ROTA
            GeneralRefRoute.clickAddedNewRoute()
            GeneralRefRoute.modalRouteEmptyValidade()
            FillRefRoute.typeAdressRoute()
            FillRefRoute.routaComplete()
            FillRefRoute.infoRouteAdded()
            GeneralRefPhone.clickAbaPhone() //CADASTRAR TELEFONE
            GeneralRefPhone.clickAddedNewPhone()
            GeneralRefPhone.modalPhoneEmptyValidade()
            FillRefPhone.typePhone()
            FillRefPhone.numberPhone()
            FillRefPhone.ramalPhone()
            GeneralRefPhone.clickSavePhone()
            GeneralRefPhone.infoPhoneAdded()
            GeneralRefPhone.messPhoneAddedSucess()
            ClickClientComplete.saveClient()
            GeneralClientComplete.modalWaitingLoading()
            GeneralClientComplete.messRegisterSaveSucess()
        })  

        it('3.Cliente completo CNPJ', () => {
    
            GeneralClientComplete.iconMenuOptions()
            GeneralClientComplete.optionClientComplete() 
            FillPerson.cnpjClient() //PESSOA
            FillPerson.nameCNPJ()
            FillPerson.nameFantasyCNPJ()
            ClickClientComplete.saveClient() //tentar salvar cadastro, mas não deve permitir, pois ainda tem campo obrigatórios
            GeneralClientComplete.messAlertAdressMandatory() //mensagem de endereço obrigatório após tentar salvar em adicionar um endereço
            GeneralAdress.clickAbaAdress() //CADASTRAR ENDEREÇO
            GeneralAdress.clickAddNewAdress()
            GeneralAdress.tipoEndereco()
            GeneralAdress.modalAdressEmptyValidade()
            GeneralClientComplete.buttonSaveDisabled()
            GeneralAdress.clickOpenTypeAdress()
            FillAdress.typeAdress()
            FillAdress.cepAdress()
            FillAdress.numberAdress()
            GeneralClientComplete.buttonSaveDisabled()
            GeneralAdress.clickSaveAdress()
            GeneralAdress.infoAdressAdded()
            GeneralRefRoute.clickAbaRoute() //CADASTRAR ROTA
            GeneralRefRoute.clickAddedNewRoute()
            GeneralRefRoute.modalRouteEmptyValidade()
            FillRefRoute.typeAdressRoute()
            FillRefRoute.routaComplete()
            FillRefRoute.infoRouteAdded()
            GeneralRefPhone.clickAbaPhone() //CADASTRAR TELEFONE
            GeneralRefPhone.clickAddedNewPhone()
            GeneralRefPhone.modalPhoneEmptyValidade()
            FillRefPhone.typePhone()
            FillRefPhone.numberPhone()
            FillRefPhone.ramalPhone()
            GeneralRefPhone.clickSavePhone()
            GeneralRefPhone.infoPhoneAdded()
            GeneralRefPhone.messPhoneAddedSucess()
            ClickClientComplete.saveClient()
            GeneralClientComplete.modalWaitingLoading()
            GeneralClientComplete.messRegisterSaveSucess()
        }) 
    })

    context('Cadastro de cliente completo - incluindo anexo após salvar o cadastro de cliente', () => {

        it('4.Cliente completo CPF - caminho feliz', () => {

            GeneralClientComplete.iconMenuOptions()
            GeneralClientComplete.optionClientComplete() 
            FillPerson.cpfClient()
            FillPerson.nameComplete()
            FillPerson.nameSocial()
            FillPerson.dateBirth()
            FillPerson.sexClient()
            ClickClientComplete.saveClient()
            GeneralAdress.clickAbaAdress() //CADASTRAR ENDEREÇO
            GeneralAdress.clickAddNewAdress()
            GeneralAdress.tipoEndereco()
            GeneralAdress.modalAdressEmptyValidade()
            GeneralAdress.clickOpenTypeAdress()
            FillAdress.typeAdress()
            FillAdress.cepAdress()
            FillAdress.numberAdress()
            GeneralClientComplete.buttonSaveDisabled()
            GeneralAdress.clickSaveAdress()
            GeneralAdress.infoAdressAdded()
            GeneralRefRoute.clickAbaRoute() //CADASTRAR ROTA
            GeneralRefRoute.clickAddedNewRoute()
            GeneralRefRoute.modalRouteEmptyValidade()
            FillRefRoute.typeAdressRoute()
            FillRefRoute.routaComplete()
            FillRefRoute.infoRouteAdded()
            GeneralRefPhone.clickAbaPhone() //CADASTRAR TELEFONE
            GeneralRefPhone.clickAddedNewPhone()
            GeneralRefPhone.modalPhoneEmptyValidade()
            FillRefPhone.typePhone()
            FillRefPhone.numberPhone()
            FillRefPhone.ramalPhone()
            GeneralRefPhone.clickSavePhone()
            GeneralRefPhone.infoPhoneAdded()
            GeneralRefPhone.messPhoneAddedSucess()
            ClickClientComplete.saveClient()
            GeneralClientComplete.modalWaitingLoading()
            GeneralClientComplete.messRegisterSaveSucess()
            ClickClientComplete.menuRegisterClientComplete()
            GeneralAnexo.clickAbaAttachment() //CADASTRAR ANEXO 
            GeneralAnexo.validateAbaAttachmentEmpty()
            GeneralAnexo.selectFirstTypeAttachment()
            FillFieldAnexo.filePDF()
            GeneralAnexo.confirmSendFile()
            GeneralAnexo.messAttachmentAddSucess()
            GeneralAnexo.validateAttachmentAdded()
            ClickClientComplete.saveClient()
            GeneralClientComplete.messRegisterSaveSucess()
        })
    })
})