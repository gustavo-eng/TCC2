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

import MultiSelect from 'react-select';
import Button from "../../buttons/button";
import Input from "../../input/Input";
//style
import { describeStatusPayment } from "../../../utils/describeStatusPayment";
import ModalViewRegistration from "../../modal/modalViewRegistration/ModalViewRegistration";
import Select from "../../select/Select";
import StatusBadge from "../../StatusBadge/StatusBadge";
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
  tableJSON?: any;
}

const validateButton = (onClick: () => void) => {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center ">
      <Button
        className="h-fit lg:h-[60%] w-fit p-1 rounded-md bg-green-500 hover:bg-green-500/90"
        label="Inscrição"
        classNameLabel="text-xs  font-semibold flex flex-col items-center"
        onClick={onClick}
      />
    </div>
  );
};

function TableRegisters({
  gridTheme = "ag-theme-quartz",
  tableJSON
}: PropsTableRegisters) {

  const [selectedIdPayment, setSelectedIdPayment] = useState<string | undefined>(undefined);
  const [isModalViewRegistration, setModalViewRegistration] = useState<boolean>(false);
  const [currentStatusPayment, setCurrentStatusPayment] = useState<string>();

  const themeClass = gridTheme;
  const [quickFilterText, setQuickFilterText] = useState<string>();

  const openModalViewRegistraion = (idPayment: string, data?: any) => {

    setSelectedIdPayment(idPayment);
    setCurrentStatusPayment(describeStatusPayment(data?.aproved || false, data?.description || ""));
    return setModalViewRegistration(true);
  }

  const gridStyle = useMemo(() => ({ height: "100%", width: "100%" }), []);
  const paginationPageSizeSelector = [5, 10, 20];
  const gridRef = useRef<AgGridReact>(null);
  const [rowData, setRowData] = useState<any>();

  const onGridReady = useCallback(() => {
    setRowData(tableJSON)
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

  const filterClassStartsWith = useCallback((el:string) => {
    gridRef.current!.api.setColumnFilterModel('Category.classCategory', {
      type: "startsWith",
      filter: `${el}`,
    }).then(() => {
      gridRef.current!.api.onFilterChanged();
    });
  }, []);


  const filterGenderStartsWith = useCallback((el:string) => {
    gridRef.current!.api.setColumnFilterModel('Category.gender', {
      type: "startsWith",
      filter: `${el}`,
    }).then(() => {
      gridRef.current!.api.onFilterChanged();
    });
  }, []);

  const filterStatus = useCallback((el:string) => {
    gridRef.current!.api.setColumnFilterModel('aproved', {
      type: "startsWith",
      filter: `${el}`,
    }).then(() => {
      gridRef.current!.api.onFilterChanged();
    });
  }, []);

  const [colDefs] = useState<ColDef[]>([
    {
      field: "Athlet.name",
      headerName: "Atleta",
      flex: 1,
    },
    { //Coluna utilizada apenas para filtro
      field: "description",
      headerName: "description",
      flex: 1,
      hide:true
    },
    {
      field: "aproved",
      headerName: "Status",
      valueGetter: p =>  {
        if(p.data.aproved){
          return 'approved'
        } else if (!p.data.aproved && p.data?.description.length != 0) {
          return 'rejected'
        } else if (!p.data.aproved && p.data?.description.length == 0) {
          return 'pending'
        } else {
           return null
        }
      },
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
      filter: "agTextColumnFilter",
      flex: 1,

    },
    {
      field: "Category.gender",
      headerName: "Genero",
      flex: 1,
      filter: "agTextColumnFilter"
    },
    {
      field: "Category.classCategory",
      headerName: "Classe",
      flex: 1,
      filter: "agTextColumnFilter"
    },
    {
      field: "weight",
      //field: "Category.weight",
      headerName: "Categoria (Kg)",
      flex: 1,
      //hide: true,
    },
    {
      headerName: "Ação",
      cellRenderer: (props: any) => {
        return  validateButton(() => openModalViewRegistraion(props?.['data']?.['idPayment'] , props?.['data']))
      },
      cellStyle: { textAlign: "center" },
      flex: 0.3,
    },
  ]);

  const onFilterTextBoxChanged = useCallback(
    ({ target: { value } }: ChangeEvent<HTMLInputElement>) =>
      setQuickFilterText(value),
    []
  );

  const getRowHeight = useCallback(
    (params: RowHeightParams): number | undefined | null => {
      return 50
      //return window.innerWidth < 768 ? 150 : 50;
    },
    []
  );

  const optionsGender = [
    { value: "Masculino", label: "Masculino" },
    { value: "Feminino", label: "Feminino" },
    { value: "", label: "Todos" },
  ];

  const optionsClass = [
    { value: "Senior", label: "Senior"},
    { value: "Junior", label: "Junior"},
    { value: "Miri", label: "Mirim"},
    { value: "", label: "Todos"},
  ];

  const optionsStatus = [
    { value: "approved", label: "Aprovado" },
    { value: "rejected", label: "Reprovado" },
    { value: "pending", label: "Pendente" },
    { value: "", label: "Todos" },
  ];

  const optionsCategory = [
    { value: "approved", label: "-60" },
    { value: "reproved", label: "-66" },
    { value: "pendent", label: "-73" },
    { value: "pendent", label: "-81" },
  ];

  return (
    <div className={`w-full h-[53vh] ${themeClass}`}>
      <ModalViewRegistration
        isOpen={isModalViewRegistration}
        onClose={() => setModalViewRegistration(false)}
        idRegistration={selectedIdPayment}
        statusPayment={String(currentStatusPayment)}
      />
      <div className="flex flex-col lg:flex-row justify-start mt-2">
        <div className="flex lg:none">
          <Select
            id="gender"
            name="gender"
            options={optionsClass}
            label="Classe"
            isOptional
            classNameSelect="bg-white rounded-md border-gray-400 hover:border-green-500"
            className="w-full lg:w-[10vw] mt-0 mr-2 bg-gray-50"
            onChange={(e) => filterClassStartsWith(e?.target?.value)}
          />
          <Select
            id="gender"
            name="gender"
            options={optionsGender}
            label="Genero"
            isOptional
            classNameSelect="bg-white rounded-md border-gray-400 hover:border-green-500"
            className="w-full lg:w-[10vw] mt-0 lg:mr-2 bg-gray-50"
            onChange={(e) => filterGenderStartsWith(e.target.value)}
          />
        </div>
        <div className="flex lg:none mt-2 lg:mt-0">
          {/*
          <Select
            id="gender"
            name="gender"
            options={optionsCategory}
            label="Categoria (Kg)w"
            isOptional
            className="w-full lg:w-[10vw] mt-0 mr-2 bg-gray-50"
            classNameSelect="bg-white rounded-md border-gray-400 hover:border-green-500"
            onChange={(e) => console.log(e.target.value)}
          />
          */}
          <Select
            id="gender"
            name="gender"
            options={optionsStatus}
            label="Status"
            isOptional
            className="w-full lg:w-[10vw] mt-0 bg-gray-50"
            classNameSelect="bg-white rounded-md border-gray-400 hover:border-green-500"
            onChange={(e) => filterStatus(e.target.value)}
          />


        </div>
      </div>

      <div className="mt-4">
        <label className="text-gray-700 font-semibold">Evento</label>
        <MultiSelect
          className="w-[208px] h-fit mt-1 rounded-md border-1"
          options={optionsStatus}
          onChange={(e: any) => console.log(e)}
        />
      </div>
      <Input
        spanInputClassName="flex flex-col items-end mt-2"
        inputClassName="rounded-xl border-gray-400 hover:border-green-500 w-full lg:w-[10vw] h-[3vh] mr-[0px]"
        type="text"
        id="filter-text-box"
        placeholder="Buscar inscricoes"
        onInput={onFilterTextBoxChanged}
      />

      <div className="w-full h-fit mb-1"></div>
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
          suppressDragLeaveHidesColumns={true}
          onGridReady={onGridReady}
        />
      </div>
    </div>
  );
}

export default TableRegisters;
