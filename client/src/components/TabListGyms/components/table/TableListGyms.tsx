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
import toast, { Toaster } from "react-hot-toast";
import client from "../../../../service/client";
import Button from "../../../buttons/button";
import ModalConfirmation, {
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

const deleteButton = (e: any) => {
    return (
        <div className="bg-red-400 w-full">
            <Button onClick={() => console.log(e)}/>
        </div>
    )
}
function TableListGyms({
    gridTheme = "ag-theme-quartz",
    tableJSON,
  }: PropsTableListGyms) {

    const modalRef = useRef<ModalConfirmationHandle>(null);
    const gridStyle = useMemo(() => ({ height: "100%", width: "100%" }), []);
    const paginationPageSizeSelector = [5, 10, 20];
    const themeClass = gridTheme;
    const gridRef = useRef<AgGridReact>(null);
    const [rowData, setRowData] = useState<any>(tableJSON || []);
    const [quickFilterText, setQuickFilterText] = useState<string>("");
    const [idGym, setIdGym] = useState<string>();

    // Função para buscar academias
    const getGyms = async () => {
      try {
        const gyms = await client.gym.list();
        if (gyms?.payload) {
          setRowData(gyms.payload);
        } else {
          setRowData([]);
        }
      } catch (err) {
        setRowData([]);
      }
    };

    // Função para deletar academia
    const deleteGym = async (idGym?: number) => {
      try {
        const response = await client.gym.delete(String(idGym));
        if (response.status) {
          toast.success("Academia deletada!!");
          // Recarrega os dados após exclusão bem-sucedida
          await getGyms();
        } else {
          toast.error("Erro ao deletar academia.");
        }
      } catch (err) {
        toast.error("Erro ao deletar academia.");
        console.error("Erro ao deletar academia. Erro --> ", err);
      }
    };

    // Atualiza o estado `rowData` quando `tableJSON` mudar
    useEffect(() => {
      if (tableJSON) {
        setRowData(tableJSON);
      } else {
        getGyms();
      }
    }, [tableJSON]); // Remove a dependência de `deleteGym`

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
        field: "number",
        headerName: "Número",
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
        cellRenderer: (params: any) => {
          const { idGym } = params?.data;
          return (
            <div className="h-full w-full flex flex-col items-center justify-center">
              <Button
                className="h-[60%] w-fit p-3 flex flex-col justify-center items-center text-center rounded hover:bg-red-600/70 bg-red-600/60"
                label="Deletar"
                classNameLabel="flex flex-col items-center"
                onClick={() => {
                  setIdGym(String(idGym));
                  return modalRef.current?.openModal();
                }}
              />
            </div>
          );
        },
      },
    ]);

    const getRowHeight = useCallback(
      (params: RowHeightParams): number | undefined | null => {
        return 50;
      },
      []
    );

    return (
      <div style={gridStyle} className={`w-full h-[53vh] ${themeClass}`}>
        <Toaster />
        <ModalConfirmation
          ref={modalRef}
          onConfirm={() => deleteGym(Number(idGym))}
          onCancel={() => console.log("cancel")}
        />
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
