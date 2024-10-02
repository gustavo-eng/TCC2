import { ClientSideRowModelModule } from "@ag-grid-community/client-side-row-model";

import {
    ColDef,
    ModuleRegistry,
    SizeColumnsToFitGridStrategy
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
import {
    useEffect,
    useMemo,
    useRef,
    useState
} from "react";

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
}

function TableTypeEvents({ gridTheme, tableJSON }: PropsTableTypeEvents) {
  const themeClass = gridTheme;
  const [isModalValidade, setIsModalValidate] = useState<boolean>(false);
  const [quickFilterText, setQuickFilterText] = useState<string>();
  const [rowData, setRowData] = useState<any>();
  const [selectedRowData, setSelectedRowData] = useState<any>(null);
  const gridStyle = useMemo(() => ({ height: "100%", width: "100%" }), []);
  const paginationPageSizeSelector = [5, 10, 20];
  const gridRef = useRef<AgGridReact>(null);

  useEffect(() => {
    setRowData(tableJSON || []);
  }, [tableJSON]);
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

  return <div>Table Type events</div>;
}

export default TableTypeEvents;
