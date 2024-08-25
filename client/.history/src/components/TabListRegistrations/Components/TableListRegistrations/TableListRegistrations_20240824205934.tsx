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
import { ChangeEvent, useCallback, useMemo, useRef, useState } from "react";
import Button from "../../../buttons/button";
import StatusBadge from "../../../StatusBadge/StatusBadge";

//
interface PropsTableRegisters {
  gridTheme?: string;
  tableJSON?: any;
}

const validateButton = (onClick: () => void) => {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center">
      <Button
        className="h-[60%] w-fit p-1 rounded bg-blue-600"
        label="fffInscrição"
        classNameLabel="flex flex-col items-center"
        onClick={onClick}
      />
    </div>
  );
};

function TableListRegistrations({
  gridTheme = "ag-theme-quartz",
  tableJSON,
}: PropsTableRegisters) {
  const themeClass = gridTheme;
  const [isModalValidade, setIsModalValidate] = useState<boolean>(false);
  const [quickFilterText, setQuickFilterText] = useState<string>();

  const openModalValidate = () => setIsModalValidate(true);

  const gridStyle = useMemo(() => ({ height: "100%", width: "100%" }), []);
  const paginationPageSizeSelector = [5, 10, 20];
  const gridRef = useRef<AgGridReact>(null);
  const [rowData, setRowData] = useState<any>();

  const onGridReady = useCallback(() => {
    setRowData(tableJSON);
    gridRef.current?.api.sizeColumnsToFit();
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

  // nome, status de pagamento, nomeDaAcademia, gender, class, weight
  const [colDefs] = useState<ColDef[]>([
    {
      field: "Athlet.name",
      headerName: "Atleta",
      flex: 1,
    },
    {
        field: "aproved",
        headerName: "Status",
        cellRenderer: (props: any) => {
          let status: "Aprovado" | "Rejeitado" | "Pendente" = "Pendente";
          if(props.data.aproved == true) {
            status = "Aprovado";
          } else if (props.data.aproved == false && (props?.data?.description == "" || props?.data?.description.length == 0)) {
            status = "Pendente";
          } else {
            status = "Rejeitado";
          }
          return <StatusBadge status={status?.toString()} />
        },
        flex: 0.3,
    },
    {
        field: "Athlet.name",
        headerName: "Academia",
        flex: 1,
    },
    {
        field: "Category.gender",
        headerName: "Genero",
        flex: 0.2,
    },
    {
        field: "Category.classCategory",
        headerName: "Divisao",
        flex: 0.2,
    },
    {
        field: "Category.weight",
        headerName: "Peso",
        flex: 0.2,
    },
    {
        headerName: "Acao",
        cellRenderer: () => validateButton(openModalValidate),
        cellStyle: { textAlign: "center" },
        flex: 0.4,
      },

  ]);

  return (
    <div  className={`w-full h-full  ${themeClass}`}>
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

export default TableListRegistrations;
