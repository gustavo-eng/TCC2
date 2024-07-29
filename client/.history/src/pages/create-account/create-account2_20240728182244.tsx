import FormWizard from "react-form-wizard-component";
import "react-form-wizard-component/dist/style.css";
import Input from "../../components/input/Input";
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




    return (
        <div className=" w-full h-[70vh] pb-1 mb-0  flex flex-col ">
            <FormWizard
                shape="circle"
                color="green"
                stepSize="xs"
                nextButtonText="Próximo"
                backButtonText="Voltar"
                finishButtonText="Cadastrar"
                layout="horizontal"
                onComplete={handleComplet}
                onTabChange={tabChanged}
            >
                <FormWizard.TabContent title="Informações Pessoais" icon="ti-user">
                    <div className="h-[42vh]">
                        <h1>Second Tab</h1>
                        <Input
                            label="CPF"
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
                            label="RG"
                            type="text"
                            placeholder="Digite seu email"
                            errorMessage={(!true) ? "Error" : ""}
                        />
                        <Input
                            label="Data de nascimento"
                            type="text"
                            placeholder="Digite seu email"
                            errorMessage={(!true) ? "Error" : ""}
                        />
                    </div>
                </FormWizard.TabContent>
                <FormWizard.TabContent title="Endereço" icon="ti-map-alt">
                    <div className=" h-[42vh]">
                        <h1>Second Tab</h1>
                        <Input
                            label="CPF"
                            type="text"
                            placeholder="Digite seu email"
                            errorMessage={(!true) ? "Error" : ""}
                        />
                        <Input
                            label="CPF"
                            type="text"
                            placeholder="Digite seu email"
                            //icon={ }
                            errorMessage={(!true) ? "Error" : ""}
                        />

                    </div>
                </FormWizard.TabContent>
                <FormWizard.TabContent title="Academia" icon="ti-check">
                    <div className=" h-[42vh]">
                        <h1>Second Tab</h1>
                        <p>Some content for the SECOND tab </p>
                        <p>Some content for the SECOND tab </p>
                        <p>Some content for the SECOND tab </p>
                        <p>Some content for the SECOND tab </p>
                        <p>Some content for the SECOND tab </p>
                    </div>

                </FormWizard.TabContent>

            </FormWizard>
            {/* add style */}
            <style>{`
                @import url("https://cdn.jsdelivr.net/gh/lykmapipo/themify-icons@0.1.2/css/themify-icons.css");
            `}</style>
        </div>
    )

}