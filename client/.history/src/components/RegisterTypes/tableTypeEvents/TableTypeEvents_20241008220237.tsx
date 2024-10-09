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

import { AgGridReact } from "@ag-grid-community/react";
import "@ag-grid-community/styles/ag-grid.css";
import "@ag-grid-community/styles/ag-theme-quartz.css";
import { useCallback, useEffect, useMemo, useState } from "react";

ModuleRegistry.registerModules([
  ClientSideRowModelModule,
  ExcelExportModule,
  SetFilterModule,
  MultiFilterModule,
  MasterDetailModule,
]);

interface PropsTableTypeEvents {
  gridTheme?: string;
  tableJSON?: any;
  gridRef?: React.RefObject<AgGridReact>; // Receber a gridRef como prop
}

function TableTypeEvents({
  gridTheme = "ag-theme-quartz",
  tableJSON,
  gridRef
}: PropsTableTypeEvents) {
  const themeClass = gridTheme;
  const [isModalValidade, setIsModalValidate] = useState<boolean>(false);
  const [quickFilterText, setQuickFilterText] = useState<string>();
  const [rowData, setRowData] = useState<any>();
  const [selectedRowData, setSelectedRowData] = useState<any>(null);
  const gridStyle = useMemo(() => ({ height: "100%", width: "100%" }), []);
  const paginationPageSizeSelector = [5, 10, 20];


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
      headerName: "Tipo do evento",
      field: "type",
      flex: 1,
    },
  ]);

  useEffect(() => {
    setRowData(tableJSON);
}, [tableJSON]); // Atualize rowData sempre que tableJSON mudar


  const getRowHeight = useCallback(
    (params: RowHeightParams): number | undefined | null => {
      return 50;
    },
    []
  );

  return (
    <div className={`w-full h-full  ${themeClass}`} style={gridStyle}>
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
  );
}

export default TableTypeEvents;
