import { ClientSideRowModelModule } from "@ag-grid-community/client-side-row-model";
import dataRegisters from '../mock/registers.json';


import { ColDef, ModuleRegistry, SizeColumnsToFitGridStrategy } from "@ag-grid-community/core";
import { AgGridReact } from "@ag-grid-community/react";
import "@ag-grid-community/styles/ag-grid.css";
import "@ag-grid-community/styles/ag-theme-quartz.css";
import { ExcelExportModule } from "@ag-grid-enterprise/excel-export";
import { MasterDetailModule } from "@ag-grid-enterprise/master-detail";
import { MultiFilterModule } from "@ag-grid-enterprise/multi-filter";
import { SetFilterModule } from "@ag-grid-enterprise/set-filter";
import { useMemo, useRef, useState } from "react";


ModuleRegistry.registerModules([
    ClientSideRowModelModule,
    ExcelExportModule,
    SetFilterModule,
    MultiFilterModule,
    MasterDetailModule,
]);

interface PropsTableRegisters {
    gridTheme?:string;
}

function TableRegisters({
    gridTheme
}: PropsTableRegisters) {

    // nome do atleta
    // status do pagamento
    //Gender
    // categoria
    // Action

    const gridStyle = useMemo(() => ({ height: "100%", width: "100%" }), []);
    const paginationPageSizeSelector = [5, 10, 20];
    const gridRef = useRef<AgGridReact>(null);
    const [rowData] = useState(dataRegisters);
    const themeClass = gridTheme;

    const [quickFilterText, setQuickFilterText] = useState<string>();

    const defaultColDef = useMemo<ColDef>(
        () => ({
            resizable: true,
        }),
        []
    );
    const autoSizeStrategy = useMemo<SizeColumnsToFitGridStrategy>(
        () => ({
            type: "fitGridWidth",
        }),
        []
    );

    const [colDefs] = useState<ColDef[]>([

    ]);

    return (
        <div>
            Table Gustavo Alexandre Dias

        </div>
    );

};

export default TableRegisters;