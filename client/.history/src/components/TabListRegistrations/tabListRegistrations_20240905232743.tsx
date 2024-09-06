import GlobalTile from "../GlobalTitle/GlobalTitle";
import TableListRegistrations from "./Components/TableListRegistrations/TableListRegistrations";
import dataMocked from './Components/mock/dataListRegistrations.json';
function TabListRegistrations(){
    return (
        <div className="w-full flex flex-col justify-center items-center p-3">
            <GlobalTile title="Pagamentos e inscrições"/>
            <TableListRegistrations tableJSON={dataMocked}/>
        </div>
    )
}

export default TabListRegistrations;