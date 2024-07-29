import FormWizard from "react-form-wizard-component";
import "react-form-wizard-component/dist/style.css";
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
            <button className="base-button  bg-green-400  " onClick={handlePrevious}>
                backffff
            </button>
        );
    };

    return (
        <div className=" w-full h-[70vh] pb-1 mb-0  flex flex-col ">
            <FormWizard
                shape="circle"
                color="#e74c3c"
                stepSize="xs"
                backButtonTemplate={backTemplate}
                onComplete={handleComplet}
                onTabChange={tabChanged}
            >
                <FormWizard.TabContent title="Personal details" icon="ti-user">
                    <div className="h-[42vh]">
                        <h1>Second Tab</h1>
                        <p>Some content for the SECOND tab </p>
                        <p>Some content for the SECOND tab </p>
                        <p>Some content for the SECOND tab </p>
                        <p>Some content for the SECOND tab </p>
                        <p>Some content for the SECOND tab </p>
                    </div>
                </FormWizard.TabContent>
                <FormWizard.TabContent title="Personal details" icon="ti-user">
                    <div className=" h-[42vh]">
                        <h1>Second Tab</h1>
                        <p>Some content for the SECOND tab </p>
                        <p>Some content for the SECOND tab </p>
                        <p>Some content for the SECOND tab </p>
                        <p>Some content for the SECOND tab </p>
                        <p>Some content for the SECOND tab </p>
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
        </div>
    )

}