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

    return (
        <div className=" w-full h-screen pb-1 mb-28 bg-green-50 ">
            <FormWizard
                shape="circle"
                color="#e74c3c"
                stepSize="xs"
                onComplete={handleComplet}
                onTabChange={tabChanged}
            >
                <FormWizard.TabContent title="Personal details" icon="ti-user">
                    <h1 >First Tab</h1>
                    <p>Some content for the firts tab </p>
                </FormWizard.TabContent>
                <FormWizard.TabContent title="Personal details" icon="ti-user">
                    <h1>Second Tab</h1>
                    <p>Some content for the SECOND tab </p>
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