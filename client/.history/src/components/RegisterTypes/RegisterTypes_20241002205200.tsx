import Button from "../buttons/button";
import GlobalTile from "../GlobalTitle/GlobalTitle";
import Input from "../input/Input";
import TableTypeEvents from "./tableTypeEvents/TableTypeEvents";

let mockdata = {
	"status": true,
	"msg": "Event types listed successfully",
	"payload": [
		{
			"idTypeEvent": 1,
			"type": "Brasileiro",
			"createdAt": "2024-09-14T18:34:37.000Z",
			"updatedAt": "2024-09-14T18:34:37.000Z"
		},
		{
			"idTypeEvent": 2,
			"type": "Mundial",
			"createdAt": "2024-09-14T20:16:27.000Z",
			"updatedAt": "2024-09-14T20:16:27.000Z"
		},
		{
			"idTypeEvent": 3,
			"type": "Regional",
			"createdAt": "2024-09-29T22:35:15.000Z",
			"updatedAt": "2024-09-29T22:35:15.000Z"
		},
		{
			"idTypeEvent": 4,
			"type": "Internacional",
			"createdAt": "2024-10-01T23:41:14.000Z",
			"updatedAt": "2024-10-01T23:41:14.000Z"
		}
	]
}

function RegisterTypes(){

    return (
        <div className="w-screen flex flex-col gap-2">
          <GlobalTile  title="Registro de tipos de eventos e categoria" />
          <div className="w-full flex flex-col items-center gap-3">
            <h1  className="text-green-600 font-bold text-2xl">Tipos de eventos </h1>
            <div className="flex flex-row gap-2">
                <Input
                    isOptional
                    className=" w-fit min-w-[520px]"
                    inputClassName="border-[1px] border-green-600 hover:border-green-700 "
                />
                <Button
                    label="Adicionar"
                    className="p-2 rounded-md bg-green-500/90 hover:bg-green-600"
                />
            </div>
            <div className="w-full bg-red-30 p-5">
               { mockdata.payload && <TableTypeEvents tableJSON={mockdata.payload ||  []} />  }
               { !mockdata.payload && <TableTypeEvents tableJSON={[]} />  }
            </div>
          </div>
		  {/* Formulario cahce*/}
          <div>
			 <h1 className="w-full ">Cadastro de categoria</h1>
			 <main className="w-full">
				<form action="">

				</form>
			 </main>
          </div>

        </div>
    )
}

export default RegisterTypes;