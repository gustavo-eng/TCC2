import TableListRegistrations from "./Components/TableListRegistrations/TableListRegistrations";

function TabListRegistrations(){
    return (
        <div className="w-full flex flex-col justify-center items-center">
            <h1 className=" w-full bg-purple-400 mt-4 mb-4 font-semibold  text-green-700 text-2xl">Registrations</h1>
            <TableListRegistrations tableJSON={[{}]}/>
        </div>
    )
}

export default TabListRegistrations;