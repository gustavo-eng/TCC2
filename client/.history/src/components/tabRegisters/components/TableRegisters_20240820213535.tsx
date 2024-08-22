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
import { ChangeEvent, useCallback, useMemo, useRef, useState } from "react";


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

const badgeRegister = (e: any) => {
    console.log('badgeRegister => ');
    console.log(e)
    return (
        <button>Status register</button>
    )
}

const validateButton = () => {
    return (
        <button className="bg-green-500">Validate Button</button>
    )
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
        {
            field: "Athlet.name",
            headerName: "Nome do Atleta",
            flex: 1,
        },
        {
            field: "aproved",
            headerName: "Status da inscricao",
            cellRenderer: badgeRegister,
            flex: 1,
        },
        {
            field: "Category.gender",
            headerName: "Genero",
            flex: 1,
        },
        {
            field: "Category.classCategory",
            headerName: "Categoria",
            //Adicionar tratamento.
            flex: 1,
        },
        {
            //field: "Category.classCategory",
            headerName: "Acao",
            cellRenderer: validateButton,
            //Adicionar tratamento.
            flex: 1,
        },

    ]);

    const onFilterTextBoxChanged = useCallback(
        ({ target: { value } }: ChangeEvent<HTMLInputElement>) =>
          setQuickFilterText(value),
        []
    );


    return (
         <div className={`w-full h-[53vh] ${themeClass}`}>
      <div className="w-full h-fit mb-1">
        <Input
          spanInputClassName="flex flex-col justify-end items-end m-0"
          inputClassName="rounded w-[15vw] h-[4.2vh] mr-[-4px]"
          type="text"
          id="filter-text-box"
          placeholder="Search product..."
          icon={<Search size={18}/>}
          onInput={onFilterTextBoxChanged}
        />
      </div>
      <div className="w-full h-full " style={gridStyle}>
        <AgGridReact
          ref={gridRef}
          columnDefs={colDefs}
          rowData={rowData}
          defaultColDef={defaultColDef}
          rowHeight={80}
          domLayout="autoHeight"
          autoSizeStrategy={autoSizeStrategy}
          pagination
          paginationPageSize={10}
          paginationPageSizeSelector={paginationPageSizeSelector}
          quickFilterText={quickFilterText}
          masterDetail
          getRowHeight={getRowHeight}
        />
      </div>
    </div>
    );

};

export default TableRegisters;