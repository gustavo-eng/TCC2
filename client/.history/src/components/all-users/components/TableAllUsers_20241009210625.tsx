

import { ClientSideRowModelModule } from "@ag-grid-community/client-side-row-model";

import {
  ColDef,
  ModuleRegistry,
  RowHeightParams,
  SizeColumnsToFitGridStrategy,
} from "@ag-grid-community/core";
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

import { AgGridReact } from "@ag-grid-community/react";
import "@ag-grid-community/styles/ag-grid.css";
import "@ag-grid-community/styles/ag-theme-quartz.css";
import { Info } from "@phosphor-icons/react";
import { ChangeEvent, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { structNestedOptions } from "../../../utils/structNestedOptions";
import Input from "../../input/Input";
import Select from "../../select/Select";

interface PropsTableRegisters {
  gridTheme?: string;
  tableJSON?: any;
}

export interface structOptions {
  value: string | number;
  label: string
}

const info = (onClick: () => void) => {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center">
      <Info onClick={() => console.log("Informacoes")} />
    </div>
  );
};

function TableAllUsers({
  gridTheme = "ag-theme-quartz",
  tableJSON,
}: PropsTableRegisters) {

  const themeClass = gridTheme;
  const [isModalInfo, setIsModalInfo] = useState<boolean>(false);
  const [quickFilterText, setQuickFilterText] = useState<string>();
  const [rowData, setRowData] = useState<any>();
  const gridStyle = useMemo(() => ({ height: "100%", width: "100%" }), []);
  const paginationPageSizeSelector = [5, 10, 20];
  const gridRef = useRef<AgGridReact>(null);
  const [optionsCities, setOptionsCities] = useState<structOptions[]>();
  const [optionsGym, setOptionsGym] = useState<structOptions[]>();

  const openModalInfo = () => setIsModalInfo(true);

  const onGridReady = useCallback(() => {
    setRowData(tableJSON);
    gridRef?.current?.api.sizeColumnsToFit();
  }, [tableJSON]);

  useEffect(() => {
    setOptionsCities(structNestedOptions(tableJSON, ['city']))
    setOptionsGym(structNestedOptions(tableJSON, ['Gym', 'name', true]))
  }, [tableJSON])

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

  //todo Melhorar essa parte do codigo.
  const getRowHeight = useCallback(
    (params: RowHeightParams): number | undefined | null => {
      return 50;
    },
    []
  );

  const onFilterTextBoxChanged = useCallback(
    ({ target: { value } }: ChangeEvent<HTMLInputElement>) =>
      setQuickFilterText(value),
    []
  );

  const [colDefs] = useState<ColDef[]>([
    {
      field: "name",
      headerName: "Atleta",
      flex: 1,
    },
    {
      field: "Gym.name",
      headerName: "Academia",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "city",
      headerName: "Cidade",
      flex: 1,
    },

  ]);


  return (
    <div className={`w-full h-full  ${themeClass}`}>
      <div className="flex flex-col lg:flex-row justify-start mt-2">
        <div className="flex lg:none mb-8">
          <Select
            id="gender"
            name="gender"
            options={optionsGym}
            label="Academia"
            isOptional={true}
            classNameSelect="bg-white rounded-md border-gray-400 hover:border-green-500"
            className="w-full lg:w-[10vw] mt-0 lg:mr-2 bg-gray-50"
            onChange={(e) => console.log(e.target.value)}
          />
          <Select
            id="gender"
            name="gender"
            options={optionsCities}
            label="Cidade"
            isOptional={true}
            classNameSelect="bg-white rounded-md border-gray-400 hover:border-green-500"
            className="w-full lg:w-[10vw] mt-0 lg:mr-2 bg-gray-50"
            onChange={(e) => console.log(e.target.value)}
          />
        </div>
      </div>

      <Input
        spanInputClassName="flex flex-col items-end mt-2"
        inputClassName="rounded-xl mb-1 w-full lg:w-[15vw] h-[3.75vh] mr-[-4px]"
        type="text"
        id="filter-text-box"
        placeholder="Search product..."
        onInput={onFilterTextBoxChanged}
      />
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
          suppressDragLeaveHidesColumns={true}
          onGridReady={onGridReady}
        />
      </div>
    </div>
  );
}

export default TableAllUsers;
