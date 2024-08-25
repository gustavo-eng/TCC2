import TableListRegistrations from "./Components/TableListRegistrations/TableListRegistrations";
import dataMocked from './Components/mock/dataListRegistrations.json';
function TabListRegistrations(){
    return (
        <div className="w-full flex flex-col justify-center items-center">
            <h1 className=" w-full flex flex-col items-center mt-4 mb-4 font-semibold  text-green-700 text-2xl">Pagamentos e inscrições</h1>
            <TableListRegistrations tableJSON={dataMocked}/>
        </div>
    )
}

export default TabListRegistrations;