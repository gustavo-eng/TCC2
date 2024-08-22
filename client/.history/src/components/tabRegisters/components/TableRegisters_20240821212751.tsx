import { ClientSideRowModelModule } from "@ag-grid-community/client-side-row-model";
import dataRegisters from "../mock/registers.json";

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

import Button from "../../buttons/button";
import Input from "../../input/Input";

//style
import Select from "../../select/Select";
import "./style.css";

ModuleRegistry.registerModules([
  ClientSideRowModelModule,
  ExcelExportModule,
  SetFilterModule,
  MultiFilterModule,
  MasterDetailModule,
]);

interface PropsTableRegisters {
  gridTheme?: string;
}

const badgeRegister = (e: any) => {
  return <button>Status register</button>;
};

const validateButton = () => {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center">
      <Button
        className="h-[60%] w-fit p-1 rounded "
        label="Inscrição"
        classNameLabel="flex flex-col items-center"
      />
    </div>
  );
};

function TableRegisters({
  gridTheme = "ag-theme-quartz",
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
      cellStyle: { textAlign: "center" },
      headerClass: "header-center",
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
      cellStyle: { textAlign: "center" },
      flex: 0.4,
    },
  ]);

  const onFilterTextBoxChanged = useCallback(
    ({ target: { value } }: ChangeEvent<HTMLInputElement>) =>
      setQuickFilterText(value),
    []
  );

  const getRowHeight = useCallback(
    (params: RowHeightParams): number | undefined | null => {
      return 50;
    },
    []
  );

  const optionsGender = [
    { value: "Masculino", label: "Masculino" },
    { value: "Feminino", label: "Feminino" },
  ];

  return (
    <div className={`w-full h-[53vh] ${themeClass}`}>
      <div className=" flex flex-row justify-start">
        <Select
          id="gender"
          name="gender"
          options={optionsGender}
          label="Classe"
          isOptional={false}
          className=" w-[10vw] mr-2 bg-gray-50"
          onChange={(e) => console.log(e.target.value)}
        />
        <Select
          id="gender"
          name="gender"
          options={optionsGender}
          label="Genero"
          isOptional={false}
          className="w-[10vw] mr-2 bg-gray-50"
          onChange={(e) => console.log(e.target.value)}
        />
        <Select
          id="gender"
          name="gender"
          options={optionsGender}
          label="Categoria"
          isOptional={false}
          className="w-[10vw] mr-2 bg-gray-50"
          onChange={(e) => console.log(e.target.value)}
        />
        <Select
          id="gender"
          name="gender"
          options={optionsGender}
          label="Status"
          isOptional={false}
          className="w-[10vw] bg-gray-50"
          onChange={(e) => console.log(e.target.value)}
        />
      </div>
        <Input
          spanInputClassName="flex flex-col  items-end mt-2"
          inputClassName="rounded  w-full lg:w-[15vw] h-[4vh] mr-[-4px]"
          type="text"
          id="filter-text-box"
          placeholder="Search product..."
          //icon={<Search size={18} />}
          onInput={onFilterTextBoxChanged}
        />
      <div className="w-full h-fit mb-1">
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
}

export default TableRegisters;
