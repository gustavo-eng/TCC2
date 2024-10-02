import GlobalTile from "../GlobalTitle/GlobalTitle";

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
        <div>
          <GlobalTile  title="Registro de tipos de eventos e categoria" />
          {/* Tipo de evento */}
          <div className="w-full bg-gray-500">
            <h1>Tipos de eventos </h1>
          </div>
          {/* Categoria */}
          <div>

          </div>
        </div>
    )
}

export default RegisterTypes;