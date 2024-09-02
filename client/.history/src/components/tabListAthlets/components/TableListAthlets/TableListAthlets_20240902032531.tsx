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
import ModalConfirmation, {
  ModalConfirmationHandle,
} from "../../../modal/modalConfirmation/ModalConfirmation";

import { Edit, Trash } from "lucide-react";
import Input from "../../../input/Input";
import ModalEditAthlet from "../../../modal/modalEditAthlet/ModalEditAthlet";

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
  tableJSON ?: any;
}


function editButtonsTable(onClick: () => void) {
  return (
    <div className="h-full flex flex-row justify-center items-center">
      <Edit
        width={20}
        className="text-green-600 font-bold mr-4 cursor-pointer"
        onClick={onClick}
      />
    </div>
  );
}

function removeButtonTable(onClick: () => void) {
  return (
    <div className="h-full flex flex-row justify-center items-center">
      <Trash
        width={17}
        className="text-red-800 cursor-pointer"
        onClick={onClick}
      />
    </div>
  );
}



function TableListAthlet({
  gridTheme = "ag-theme-quartz",
  tableJSON
}: PropsTableListAthlet) {

  const modalRef = useRef<ModalConfirmationHandle>(null);
  const gridStyle = useMemo(() => ({ height: "100%", width: "100%" }), []);
  const paginationPageSizeSelector = [5, 10, 20];
  const themeClass = gridTheme;
  const gridRef = useRef<AgGridReact>(null);
  //const [rowData] = useState(mockData);
  const [selectedAthlet, setSelectedAthlet] = useState<string>("")
  const [rowData, setRowData] = useState<any>();
  const [quickFilterText, setQuickFilterText] = useState<string>();

  const [isModalEditAthlet, setIsModalEditAthlet] = useState<boolean>(false);
  const openModalEditAthlet = (idAthlet: string) => {
    setSelectedAthlet(idAthlet);
    return setIsModalEditAthlet(true);
  };


  const onGridReady = useCallback(() => {
    setRowData(tableJSON)
    gridRef.current?.api.sizeColumnsToFit();
  }, [tableJSON]);

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

  const openModalConfirmation = () => modalRef.current?.openModal();
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
      flex: 0.2,
      headerName: "Editar",
      cellRenderer: (props: any) => editButtonsTable(() => openModalEditAthlet(props?.['data']?.['idAthlete'])),
    },
    {
      flex: 0.2,
      headerName: "Remover",
      cellRenderer: () =>  removeButtonTable(openModalConfirmation),
      //removeButtonTable,
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
      <ModalConfirmation
        ref={modalRef}
        onConfirm={() => console.log("Confirmacao")}
        onCancel={() => console.log("Cancelar")}
      />
      <ModalEditAthlet
        isOpen={isModalEditAthlet}
        onClose={() => setIsModalEditAthlet(false)}
        idAthlet={selectedAthlet || ""}
      />
      <div className="w-full h-fit mb-1">
      <Input
        spanInputClassName="flex flex-col items-end mt-2"
        inputClassName="rounded-md border-gray-400 hover:border-green-500 w-full lg:w-[18vw] h-[4vh] mr-[-4px]"
        type="text"
        id="filter-text-box"
        placeholder="Buscar inscricoes"
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
          onGridReady={onGridReady}
        />
      </div>
    </div>
  );
}

export default TableListAthlet;
