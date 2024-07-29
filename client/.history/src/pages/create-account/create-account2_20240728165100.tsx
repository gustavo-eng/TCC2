import "react-form-wizard-component/dist/style.css";


export default function CreateAccountManager() {


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
        <div className="bg-green-500 w-full h-full">
            Layout Account wizard
            Layout Account wizard
            Layout Account wizard
        </div>
    )

}