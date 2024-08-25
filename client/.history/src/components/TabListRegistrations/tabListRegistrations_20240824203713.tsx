import TableListRegistrations from "./Components/TableListRegistrations/TableListRegistrations";

function TabListRegistrations(){
    return (
        <div className="bg-green-400">
            <h1 className=" w-full mt-4 mb-4 font-semibold  text-green-700 text-2xl">Registrations</h1>
            <TableListRegistrations tableJSON={[{}]}/>
        </div>
    )
}

export default TabListRegistrations;