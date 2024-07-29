import FormWizard from "react-form-wizard-component";
import "react-form-wizard-component/dist/style.css";
import { ButtonPrimary } from "../../components/buttons/ButtonPrimary";
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

    const backTemplate = (handlePrevious: () => void) => {
        return (
            <>
                <ButtonPrimary
                    // type="submit"
                    className="bg-red-400"
                    text={true ? 'Cadastrar' : 'continue'}
                    loading={false}
                    onClick={handlePrevious}
                />
            </>
        );
    };

    return (
        <div className=" w-full h-[70vh] pb-1 mb-0  flex flex-col ">
            <FormWizard
                shape="circle"
                color="green"
                stepSize="xs"
                backButtonTemplate={backTemplate}
                onComplete={handleComplet}
                onTabChange={tabChanged}
            >
                <FormWizard.TabContent title="Personal details" icon="ti-user">
                    <div className="h-[42vh]">
                        <h1>Second Tab</h1>
                        <Input
                            label="CPF"
                            type="text"
                            placeholder="Digite seu email"
                            //icon={ }
                            errorMessage={(!true) ? "Error" : ""}
                        />
                        <Input
                            label="CPF"
                            type="text"
                            placeholder="Digite seu email"
                            //icon={ }
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
                <FormWizard.TabContent title="Personal details" icon="ti-user">
                    <div className=" h-[42vh]">
                        <h1>Second Tab</h1>
                        <Input
                            label="CPF"
                            type="text"
                            placeholder="Digite seu email"
                            //icon={ }
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
                <FormWizard.TabContent title="Personal detailsf" icon="ti-user">
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