import { Edit, Trash } from "lucide-react";

function EditRemoveButtonsTable() {
  return (
    <div className="h-full flex flex-row justify-center items-center">
        <Edit width={17}  className="text-green-900 mr-4" />
        <Trash width={17} className="text-red-800" />
    </div>
  );
}

export default EditRemoveButtonsTable;
/*

function EditRemoveButtonsTable() {
  return (
    <div className="w-[8vw] h-[5vh] flex flex-row justify-around">
      <button className="w-[45px] border-2 border-green-700 flex flex-col justify-center items-center bg-green-100 rounded-md">
        <Edit width={15}  className="text-green-900" />
      </button>
      <button className="w-[45px] border-2 border-red-700 flex flex-col justify-center items-center bg-red-100 rounded-md">
        <Trash width={15} className="text-red-800" />
      </button>
    </div>
  );
}

*/