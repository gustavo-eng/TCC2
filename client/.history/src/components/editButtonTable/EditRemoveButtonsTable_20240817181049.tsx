import { Edit, Trash } from "lucide-react";

function EditRemoveButtonsTable() {
    return (
        <div className="w-[8vw] h-[5vh] flex flex-row justify-around">
                <button className="w-[45px] border-2 border-green-700 flex flex-col justify-center items-center bg-green-100 rounded-md text-green-900">
                    <Edit width={15}/>
                </button>
                <button className="w-[45px] border-2 border-red-700 flex flex-col justify-center items-center bg-red-100 rounded-md">
                    <Trash width={15} className="text-red-700"/>
                </button>
            </div>
    )
}

export default EditRemoveButtonsTable;