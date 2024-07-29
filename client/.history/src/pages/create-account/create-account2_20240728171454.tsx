import FormWizard from "react-form-wizard-component";
import "react-form-wizard-component/dist/style.css";


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
            <button className="base-button flex  flex-col w-full  bg-green-400  " onClick={handlePrevious}>
                backffff
            </button>
        );
    };

    return (
        <div className=" w-full h-[70vh] pb-1 mb-0 bg-green-50 flex flex-col ">
            <FormWizard
                shape="circle"
                color="#e74c3c"
                stepSize="xs"
                backButtonTemplate={backTemplate}
                onComplete={handleComplet}
                onTabChange={tabChanged}
            >
                <FormWizard.TabContent title="Personal details" icon="ti-user">
                    <h1 >First Tab</h1>
                    <p>Some content for the firts tab </p>
                </FormWizard.TabContent>
                <FormWizard.TabContent title="Personal details" icon="ti-user">
                    <div className="bg-red-600 h-[80%]">
                        <h1>Second Tab</h1>
                        <p>Some content for the SECOND tab </p>
                    </div>
                </FormWizard.TabContent>
                <FormWizard.TabContent title="Personal detailsf" icon="ti-user">
                    <h1>Second Tab</h1>
                    <p>Some content for the SECOND tab </p>
                    <p>Some content for the SECOND tab </p>

                </FormWizard.TabContent>

            </FormWizard>
        </div>
    )

}