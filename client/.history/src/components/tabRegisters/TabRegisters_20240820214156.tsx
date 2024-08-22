
import { useParams } from "react-router-dom";
import TableRegisters from "./components/TableRegisters";

function TabRegisters() {

    const params = useParams();

    //console.log('Params');
    console.log(params.name);


    return (
        <div className="bg-gray-100 w-full">
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