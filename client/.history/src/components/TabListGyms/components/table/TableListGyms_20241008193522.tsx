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
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
    ModalConfirmationHandle,
} from "../../../modal/modalConfirmation/ModalConfirmation";


ModuleRegistry.registerModules([
  ClientSideRowModelModule,
  ExcelExportModule,
  SetFilterModule,
  MultiFilterModule,
  MasterDetailModule,
]);

interface PropsTableListGyms {
  gridTheme?: string;
  isDarkMode?: boolean;
  tableJSON?: any;
}

const

function TableListGyms({
  gridTheme = "ag-theme-quartz",
  tableJSON,
}: PropsTableListGyms) {
  const modalRef = useRef<ModalConfirmationHandle>(null);
  const gridStyle = useMemo(() => ({ height: "100%", width: "100%" }), []);
  const paginationPageSizeSelector = [5, 10, 20];
  const themeClass = gridTheme;
  const gridRef = useRef<AgGridReact>(null);
  const [selectedAthlet, setSelectedAthlet] = useState<string>("");
  const [rowData, setRowData] = useState<any>();
  const [quickFilterText, setQuickFilterText] = useState<string>();


  useEffect(() => {
    setRowData(tableJSON || [])
  }, [tableJSON])

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
      headerName: "Professor",
      field: "name",
      flex: 1,
    },
    {
      headerName: "Email",
      field: "email",
      flex: 1,
    },
    {
        headerName: "Cidade",
      field: "city",
      flex: 1,
    },
    {
      headerName: "Bairro",
      field: "neighborhood",
      flex: 0.5,
    },
    {
      field: "Número",
      headerName: "number",
      flex: 0.5,
    },
    {
      headerName: "Telefone",
      field: "phone",
      flex: 0.5,
    },
    {
      headerName: "Ação",
      flex: 0.5,
      cellRenderer: () => <div>Button here</div>
    },
  ]);

  const getRowHeight = useCallback(
    (params: RowHeightParams): number | undefined | null => {
      return 50;
    },
    []
  );

  return (
    <div  style={gridStyle} className={`w-full h-[53vh] ${themeClass}`}>
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
  );
}

export default TableListGyms;
