
import { useParams } from "react-router-dom";
import TableRegisters from "./components/TableRegisters";

function TabRegisters() {

    const params = useParams();

    //console.log('Params');
    console.log(params.name);


    return (
        <div className="w-full h-fit lg:h-[80vh] flex flex-col items-center p-1 ">
            <h1 className="mt-4 mb-4 font-semibold  text-green-700 text-xl">Meus alunos </h1>
            <TableRegisters />
        </div>
    );

}

export default TabRegisters;


/*
"payload": [
		{
			"idPayment": 40,
			"voucherPath": "src\\uploads\\6\\30.png",
			"aproved": false,
			"description": "",
			"createdAt": "2024-07-05T02:30:25.000Z",
			"updatedAt": "2024-07-05T02:30:25.000Z",
			"idAthlete": 31,
			"idCategory": null,
			"idEvent": 30
		},
*/