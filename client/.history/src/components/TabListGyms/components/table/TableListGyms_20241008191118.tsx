import { ClientSideRowModelModule } from "@ag-grid-community/client-side-row-model";

import type {
    ColDef,
    SizeColumnsToFitGridStrategy
} from "@ag-grid-community/core";

import { ModuleRegistry } from "@ag-grid-community/core";
import { AgGridReact } from "@ag-grid-community/react";
import "@ag-grid-community/styles/ag-grid.css";
import "@ag-grid-community/styles/ag-theme-quartz.css";
import { ExcelExportModule } from "@ag-grid-enterprise/excel-export";
import { MasterDetailModule } from "@ag-grid-enterprise/master-detail";
import { MultiFilterModule } from "@ag-grid-enterprise/multi-filter";
import { SetFilterModule } from "@ag-grid-enterprise/set-filter";
import { useCallback, useMemo, useRef, useState } from "react";
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

let mockData = [
    {
        "idGym": 1,
        "cnpj": "10103f",
        "sensei": "DDDA",
        "name": "gyG",
        "phone": "988ff",
        "password": "$2b$10$WRZJFpwMk73.8eULe/XV4uao1up2RoOca4KfkeI3yTd/v9EPUGlCm",
        "email": "gusetavo@fhotmail.com",
        "role": "gym",
        "neighborhood": "ffeneighborhood",
        "street": "Teste Update",
        "number": 5,
        "city": "fdsaff",
        "resetPasswordToken": null,
        "resetPasswordExpires": null,
        "createdAt": "2024-07-16T21:49:49.000Z",
        "updatedAt": "2024-09-21T15:46:44.000Z"
    },
    {
        "idGym": 2,
        "cnpj": "10103f",
        "sensei": "DDDA",
        "name": "Morgenau",
        "phone": "988ff",
        "password": "$2b$10$O.qF8CTs6LP4upfi3bp7k.N8HQeOQdeJj/pevTzvHFLs4kBrOaIhG",
        "email": "gusetavo@fhotmail.com",
        "role": "gym",
        "neighborhood": "ffeneighborhood",
        "street": "strfeeetf",
        "number": 5,
        "city": "fdsaff",
        "resetPasswordToken": null,
        "resetPasswordExpires": null,
        "createdAt": "2024-09-18T00:17:42.000Z",
        "updatedAt": "2024-09-18T00:17:42.000Z"
    },
    {
        "idGym": 3,
        "cnpj": "7889798797979",
        "sensei": "DDDA",
        "name": "Morgenau",
        "phone": "43996033944",
        "password": "$2b$10$qJsWaDibsnAcAuSqJQ8AR.6YZjfjY2ySV89Y7T0rRclAxV8MN07nW",
        "email": "gym@hotmail.com",
        "role": "gym",
        "neighborhood": "Itoupava Central",
        "street": "Rua Gustavo Zimmermann, 4691. Residencial Harapan ",
        "number": 11412,
        "city": "Japao",
        "resetPasswordToken": null,
        "resetPasswordExpires": null,
        "createdAt": "2024-09-18T22:01:50.000Z",
        "updatedAt": "2024-09-22T18:40:08.000Z"
    },
    {
        "idGym": 4,
        "cnpj": "sdfafasfafa",
        "sensei": "GUSTAVO ALEXANDRE DIAS",
        "name": "GUSTAVO ALEXANDRE DIAS",
        "phone": "43996033944",
        "password": "$2b$10$0RRCgSmqvw0JpJ3xrs9L5.29JhOL4S1.R7EZKTvsjWPM1b3Ih7RNG",
        "email": "gustavodias.2000@alunos.utfpr.edu.brddddd",
        "role": "gym",
        "neighborhood": "dsafadsfa",
        "street": "Rua Gustavo Zimmermann, 4691. Residencial Harapan ",
        "number": 4691,
        "city": "Blumenau",
        "resetPasswordToken": null,
        "resetPasswordExpires": null,
        "createdAt": "2024-09-24T23:34:20.000Z",
        "updatedAt": "2024-09-24T23:34:20.000Z"
    },
    {
        "idGym": 7,
        "cnpj": "12412413241341",
        "sensei": "GUSTAVO ALEXANDRE DIAS",
        "name": "GUSTAVO ALEXANDRE DIAS",
        "phone": "43996033944",
        "password": "$2b$10$J8Bc6KzfgY6U4tGdF3dnbeGw3MjHIoQmxMSq0KyY5zJAP.XP/y9PK",
        "email": "gym3@hotmail.com",
        "role": "gym",
        "neighborhood": "Itoupava Central",
        "street": "Rua Gustavo Zimmermann, 4691. Residencial Harapan ",
        "number": 4691,
        "city": "Blumenau",
        "resetPasswordToken": null,
        "resetPasswordExpires": null,
        "createdAt": "2024-09-25T00:15:33.000Z",
        "updatedAt": "2024-09-25T00:15:33.000Z"
    }
]

function TableListGyms({
  gridTheme = "ag-theme-quartz",
  tableJSON,
}: PropsTableListGyms) {
  const modalRef = useRef<ModalConfirmationHandle>(null);
  const gridStyle = useMemo(() => ({ height: "100%", width: "100%" }), []);
  const paginationPageSizeSelector = [5, 10, 20];
  const themeClass = gridTheme;
  const gridRef = useRef<AgGridReact>(null);
  //const [rowData] = useState(mockData);
  const [selectedAthlet, setSelectedAthlet] = useState<string>("");
  const [rowData, setRowData] = useState<any>();
  const [quickFilterText, setQuickFilterText] = useState<string>();

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
      field: "Cidade",
      headerName: "city",
      flex: 1,
    },
    {
      field: "Bairro",
      headerName: "neighborhood",
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

  return (
    <div>

    </div>
  );
}

export default TableListGyms;
