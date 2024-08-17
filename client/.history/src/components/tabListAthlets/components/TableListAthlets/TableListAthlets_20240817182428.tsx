import { ClientSideRowModelModule } from "@ag-grid-community/client-side-row-model";

import type {
    ColDef,
    RowHeightParams,
    SizeColumnsToFitGridStrategy,
} from "@ag-grid-community/core";

import { ModuleRegistry } from "@ag-grid-community/core";
import { AgGridReact } from "@ag-grid-community/react";
import "@ag-grid-community/styles/ag-grid.css";
import "@ag-grid-community/styles/ag-theme-quartz.css";
import { ExcelExportModule } from "@ag-grid-enterprise/excel-export";
import { MasterDetailModule } from "@ag-grid-enterprise/master-detail";
import { MultiFilterModule } from "@ag-grid-enterprise/multi-filter";
import { SetFilterModule } from "@ag-grid-enterprise/set-filter";
import { ChangeEvent, useCallback, useMemo, useRef, useState } from "react";

import { Edit, Trash } from "lucide-react";
import Input from "../../../input/Input";

let mockData = [
  {
    idGym: 1,
    cnpj: "10103f",
    sensei: "DDDA",
    rg: "1.2e.3fref2.4",
    cpf: "d0wewr777220398932",
    name: "GustavoDias",
    phone: "988ff",
    password: "$2b$10$WRZJFpwMk73.8eULe/XV4uao1up2RoOca4KfkeI3yTd/v9EPUGlCm",
    email: "gusetavo@fhotmail.com",
    role: "gym",
    neighborhood: "ffeneighborhood",
    street: "strfeeetf",
    number: 5,
    city: "fdsaff",
    resetPasswordToken: null,
    resetPasswordExpires: null,
    createdAt: "2024-07-16T21:49:49.000Z",
    updatedAt: "2024-07-16T21:49:49.000Z",
  },
  {
    idGym: 1,
    cnpj: "10103f",
    sensei: "DDDA",
    rg: "1.2e.3fref2.4",
    cpf: "d0wewr777220398932",
    name: "GustdddddavoDias",
    phone: "988ff",
    password: "$2b$10$WRZJFpwMk73.8eULe/XV4uao1up2RoOca4KfkeI3yTd/v9EPUGlCm",
    email: "gusetavo@fhotmail.com",
    role: "gym",
    neighborhood: "ffeneighborhood",
    street: "strfeeetf",
    number: 5,
    city: "fdsaff",
    resetPasswordToken: null,
    resetPasswordExpires: null,
    createdAt: "2024-07-16T21:49:49.000Z",
    updatedAt: "2024-07-16T21:49:49.000Z",
  },
  {
    idAthlete: 7,
    cpf: "d0wewr777220398932",
    rg: "1.2e.3fref2.4",
    birth: null,
    phone: null,
    name: "lutadorfsfasfsafas3",
    email: "gustavodias.2000@alunos.utfpr.edu.br",
    role: "athlet",
    password: "$2b$10$k/KZ12b8G7MfPj5zIq7Bk.TSqeJW92GSJPScjGnOB4A6l8kHtxo.q",
    neighborhood: "Conjunto Uniao",
    street: "Dario Ribeiro de Carvalho",
    number: 243,
    city: "fasf",
    resetPasswordToken: null,
    resetPasswordExpires: null,
    createdAt: "2024-07-17T00:18:27.000Z",
    updatedAt: "2024-07-17T00:18:27.000Z",
    idGym: 1,
  },
  {
    idAthlete: 7,
    cpf: "d0wewr777220398932",
    rg: "1.2e.3fref2.4",
    birth: null,
    phone: null,
    name: "lutador3",
    email: "gustavodias.2000@alunos.utfpr.edu.br",
    role: "athlet",
    password: "$2b$10$k/KZ12b8G7MfPj5zIq7Bk.TSqeJW92GSJPScjGnOB4A6l8kHtxo.q",
    neighborhood: "Conjunto Uniao",
    street: "Dario Ribeiro de Carvalho",
    number: 243,
    city: "fasf",
    resetPasswordToken: null,
    resetPasswordExpires: null,
    createdAt: "2024-07-17T00:18:27.000Z",
    updatedAt: "2024-07-17T00:18:27.000Z",
    idGym: 1,
  },
];

ModuleRegistry.registerModules([
  ClientSideRowModelModule,
  ExcelExportModule,
  SetFilterModule,
  MultiFilterModule,
  MasterDetailModule,
]);

interface PropsTableListAthlet {
  gridTheme?: string;
  isDarkMode?: boolean;
}

function EditRemoveButtonsTable(e: any) {
  return (
    <div className="h-full flex flex-row justify-center items-center">

      <Edit
        width={17}
        className="text-green-900 mr-4 cursor-pointer"
        onClick={() => console.log(" HandleClick Here  + data =>  ", e)}
      />
      <Trash
        width={17}
        className="text-red-800 cursor-pointer"
        onClick={() => console.log(" Dentro do proprio componente ")}
      />

    </div>
  );
}

//InventoryExample
function TableListAthlet({
  gridTheme = "ag-theme-quartz",
}: PropsTableListAthlet) {
  const gridStyle = useMemo(() => ({ height: "100%", width: "100%" }), []);
  const paginationPageSizeSelector = [5, 10, 20];
  const themeClass = gridTheme;
  const gridRef = useRef<AgGridReact>(null);
  const [rowData] = useState(mockData);
  const [quickFilterText, setQuickFilterText] = useState<string>();

  const handleClick = () => {
    console.log("Handle Click");
  };

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

  // name, rg, cpf, email telefone, icons...
  const [colDefs] = useState<ColDef[]>([
    {
      field: "name",
      headerName: "Name",
      flex: 1,
    },
    {
      field: "rg",
      headerName: "Rg",
      flex: 1,
    },
    {
      field: "cpf",
      headerName: "cpf",
      flex: 1,
    },
    {
      field: "cpf",
      flex: 0.5,
      headerName: "cpf",
    },
    {
      flex: 0.5,
      headerName: "Editar/Deletar",
      cellRenderer: EditRemoveButtonsTable,
    },
  ]);

  const onFilterTextBoxChanged = useCallback(
    ({ target: { value } }: ChangeEvent<HTMLInputElement>) =>
      setQuickFilterText(value),
    []
  );

  // Configurando a altura da linha na configuração do grid

  const getRowHeight = useCallback(
    (params: RowHeightParams): number | undefined | null => {
      return 50;
    },
    []
  );

  return (
    <div className={`w-full h-[53vh] ${themeClass}`}>
      <div className="w-full h-fit mb-1">
        <Input
          spanInputClassName="flex flex-col justify-end items-end"
          inputClassName="rounded w-[15vw] h-[5vh] mr-2"
          type="text"
          id="filter-text-box"
          placeholder="Search product..."
          onInput={onFilterTextBoxChanged}
        />
      </div>
      <div className="w-full h-full" style={gridStyle}>
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
}

export default TableListAthlet;
