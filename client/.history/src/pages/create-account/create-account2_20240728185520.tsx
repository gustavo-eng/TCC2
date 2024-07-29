import FormWizard from "react-form-wizard-component";
import "react-form-wizard-component/dist/style.css";
import Input from "../../components/input/Input";
import PasswordInput from "../../components/input/PasswordInput";
import "./custom-styles.css"; // Certifique-se de importar o arquivo CSS

export default function CreateAccountManager() {

    const handleComplet = () => {
        console.log("Form completed!");
    }

    const tabChanged = ({
        prevIndex,
        nextIndex,
    }: {
        prevIndex: number;
        nextIndex: number;
    }) => {
        console.log("prevIndex", prevIndex);
        console.log("nextIndex", nextIndex);
    };
    //https://themify.me/themify-icons


    return (
        <div className=" w-full h-[70vh] pb-1 mb-0  flex flex-col ">
            <FormWizard
                shape="circle"
                color="#22c55e"
                stepSize="xs"
                nextButtonText="Próximo"
                backButtonText="Voltar"
                finishButtonText="Cadastrar"
                layout="horizontal"
                onComplete={handleComplet}
                onTabChange={tabChanged}
            >
                <FormWizard.TabContent title="Informações Pessoais" icon="ti-user">
                    <div className="h-[42vh] ">
                        <Input
                            label="Nome"
                            type="text"
                            placeholder="Nome completo "
                            errorMessage={(!true) ? "Error" : ""}
                        />
                        <Input
                            label="CPF"
                            type="text"
                            placeholder="Digite seu email"
                            errorMessage={(!true) ? "Error" : ""}
                        />
                        <Input
                            label="Telefone"
                            type="text"
                            placeholder="(XX) XXXX-XXXX"
                            errorMessage={(!true) ? "Error" : ""}
                        />
                        <Input
                            label="Data de nascimento"
                            type="date"
                            placeholder="Digite seu email"
                            errorMessage={(!true) ? "Error" : ""}
                        />
                    </div>
                </FormWizard.TabContent>
                <FormWizard.TabContent title="Endereço" icon="ti-map-alt">
                    <div className=" h-[42vh]">
                        <Input
                            label="Bairro"
                            type="text"
                            placeholder="Informa seu bairro"
                            errorMessage={(!true) ? "Error" : ""}
                        />
                        <Input
                            label="Rua"
                            type="text"
                            placeholder="Informe sua rua"
                            //icon={ }
                            errorMessage={(!true) ? "Error" : ""}
                        />
                        <Input
                            label="Número"
                            type="number"
                            placeholder="Informe o número"
                            //icon={ }
                            errorMessage={(!true) ? "Error" : ""}
                        />
                        <Input
                            label="Cidade"
                            type="text"
                            placeholder="Nome da cidade"
                            errorMessage={(!true) ? "Error" : ""}
                        />

                    </div>
                </FormWizard.TabContent>
                <FormWizard.TabContent title="Cadastro" icon="ti-check">
                    <div className=" h-[42vh]">
                        <Input
                            label="Email"
                            type="text"
                            placeholder="Informe seu email"
                            errorMessage={(!true) ? "Error" : ""}
                        />
                        <PasswordInput
                            label="Senha"
                            placeholder="**********"
                            className="mb-0"
                            errorMessage={(!true) ? "Error" : ""}
                        />
                        <PasswordInput
                            label="Repita sua senha"
                            placeholder="**********"
                            className="mb-2 mt-2"
                            errorMessage={(!true) ? "Error" : ""}
                        />

                        <Input
                            label="Academia"
                            type="select"
                            placeholder="Informe seu email"
                            errorMessage={(!true) ? "Error" : ""}
                        />
                    </div>
                </FormWizard.TabContent>
            </FormWizard>
        </div>
    )

}