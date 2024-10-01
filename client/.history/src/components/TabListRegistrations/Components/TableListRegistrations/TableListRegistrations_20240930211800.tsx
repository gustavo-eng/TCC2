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
import { ChangeEvent, useCallback, useEffect, useMemo, useRef, useState } from "react";
import Button from "../../../buttons/button";
import Input from "../../../input/Input";
import ModalValidateRegistration from "../../../modal/modalValidateRegistration/ModalValidateRegistration";
import Select from "../../../select/Select";
import StatusBadge from "../../../StatusBadge/StatusBadge";

ModuleRegistry.registerModules([
  ClientSideRowModelModule,
  ExcelExportModule,
  SetFilterModule,
  MultiFilterModule,
  MasterDetailModule,
]);

interface PropsTableRegisters {
  gridTheme?: string;
  tableJSON?: any;

}

const validateButton = (onClick: () => void) => {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center">
      <Button
        className="h-[60%] w-fit p-3 flex flex-col justify-center items-center text-center rounded hover:bg-green-500 bg-green-600/80"
        label="Validar"
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
  const [rowData, setRowData] = useState<any>();
  const [selectedRowData, setSelectedRowData] = useState<any>(null);
  const gridStyle = useMemo(() => ({ height: "100%", width: "100%" }), []);
  const paginationPageSizeSelector = [5, 10, 20];
  const gridRef = useRef<AgGridReact>(null);



  const openModalValidate = useCallback((rowData: any) => {
    // Atualizar o estado primeiro
    setSelectedRowData(rowData);
    // Abrir a modal após a atualização do estado
    setIsModalValidate(true);
  }, []);



  useEffect(() => {
    setRowData(tableJSON || []);
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
        if (props.data.aproved == true) {
          status = "Aprovado";
        } else if (
          props.data.aproved == false &&
          (props?.data?.description == "" ||
            props?.data?.description.length == 0)
        ) {
          status = "Pendente";
        } else {
          status = "Rejeitado";
        }
        return <StatusBadge status={status?.toString()} />;
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
      field: "weight",
      headerName: "Peso",
      flex: 0.2,
    },
    {
      headerName: "Acao",
      cellRenderer: (params: any) =>
        validateButton(() => {
          //console.log('params', params)
          openModalValidate(params?.data)
        }),
      cellStyle: { textAlign: "center" },
      flex: 0.4,
    },
  ]);

  const optionsGender = [
    { value: "Masculino", label: "Masculino" },
    { value: "Feminino", label: "Feminino" },
    { value: "", label: "Todos" },
  ];

  const filterGenderStartsWith = useCallback((el:string) => {
    gridRef.current!.api.setColumnFilterModel('Category.gender', {
      type: "startsWith",
      filter: `${el}`,
    }).then(() => {
      gridRef.current!.api.onFilterChanged();
    });
  }, []);

  return (
    <div className={`w-full h-full  ${themeClass}`}>
        <ModalValidateRegistration
        isOpen={isModalValidade}
        path={selectedRowData || ''}
        onClose={() => {
          return setIsModalValidate(false)
        }}
    />
      <div className="flex flex-col lg:flex-row justify-start mt-2">
        <div className="flex lg:none mb-8">
          <Select
            id="gender"
            name="gender"
            options={optionsGender}
            label="Genero"
            isOptional={true}
            className="w-full lg:w-[10vw] mt-0 mr-2 bg-gray-50"
            onChange={(e) => filterGenderStartsWith(e.target.value)}
          />
          <Select
            id="gender"
            name="gender"
            options={optionsGender}
            label="Classe"
            isOptional={true}
            className="w-full lg:w-[10vw] mt-0 lg:mr-2 bg-gray-50"
            onChange={(e) => console.log(e.target.value)}
          />
          <Select
            id="gender"
            name="gender"
            options={optionsGender}
            label="Categoria"
            isOptional={true}
            className="w-full lg:w-[10vw] mt-0 lg:mr-2 bg-gray-50"
            onChange={(e) => console.log(e.target.value)}
          />
        </div>
      </div>

      <Input
        spanInputClassName="flex flex-col items-end mt-2"
        inputClassName="rounded mb-2  w-full lg:w-[15vw] h-[4vh] mr-[-4px]"
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
        />
      </div>
    </div>
  );
}

export default TableListRegistrations;
