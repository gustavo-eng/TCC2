import { ClientSideRowModelModule } from "@ag-grid-community/client-side-row-model";


import { ModuleRegistry } from "@ag-grid-community/core";
import "@ag-grid-community/styles/ag-grid.css";
import "@ag-grid-community/styles/ag-theme-quartz.css";
import { ExcelExportModule } from "@ag-grid-enterprise/excel-export";
import { MasterDetailModule } from "@ag-grid-enterprise/master-detail";
import { MultiFilterModule } from "@ag-grid-enterprise/multi-filter";
import { SetFilterModule } from "@ag-grid-enterprise/set-filter";


ModuleRegistry.registerModules([
  ClientSideRowModelModule,
  ExcelExportModule,
  SetFilterModule,
  MultiFilterModule,
  MasterDetailModule,
]);

import "@ag-grid-community/styles/ag-grid.css";
import "@ag-grid-community/styles/ag-theme-quartz.css";
import Button from "../../../buttons/button";

//
interface PropsTableRegisters {
  gridTheme?: string;
  tableJSON?: any;
}

const validateButton = (onClick: () => void) => {
    return (
      <div className="h-full w-full flex flex-col items-center justify-center">
        <Button
          className="h-[60%] w-fit p-1 rounded"
          label="Inscrição"
          classNameLabel="flex flex-col items-center"
          onClick={onClick}
        />
      </div>
    );
};



function TableListRegistrations({
    gridTheme = "ag-theme-quartz",
    tableJSON
}:PropsTableRegisters){
    console.log(gridTheme)
    console.log(tableJSON)
    return (
        <div>
            Table List Registrations
        </div>
    )
}

export default TableListRegistrations;