
import { ClientSideRowModelModule } from "@ag-grid-community/client-side-row-model";
/*
import type {
  ColDef,
  GetDetailRowDataParams,
  SizeColumnsToFitGridStrategy,
  ValueFormatterFunc,
  ValueFormatterParams,
  ValueGetterParams,
} from "@ag-grid-community/core";
*/
import { ModuleRegistry } from "@ag-grid-community/core";
import { AgGridReact } from "@ag-grid-community/react";
import "@ag-grid-community/styles/ag-grid.css";
import "@ag-grid-community/styles/ag-theme-quartz.css";
import { ExcelExportModule } from "@ag-grid-enterprise/excel-export";
import { MasterDetailModule } from "@ag-grid-enterprise/master-detail";
import { MultiFilterModule } from "@ag-grid-enterprise/multi-filter";
import { SetFilterModule } from "@ag-grid-enterprise/set-filter";
import { useRef } from "react";

/*
import {
  type ChangeEvent,
  type FunctionComponent,
  useCallback,
  useMemo,
  useRef,
  useState,
} from "react";
*/
/* */
let mockData = [
  {
    idGym: 1,
    cnpj: "10103f",
    sensei: "DDDA",
    name: "GustavoDias",
    phone: "988ff",
    password: "$2b$10$WRZJFpwMk73.8eULe/XV4uao1up2RoOca4KfkeI3yTd/v9EPUGlCm",
    email: "gusetavo@fhotmail.com",
    role: "gym",
    neighborhood: "ffeneighborhood",
    street: "strfeeetf",
    number: 5,
    city: "fdsaff",
    resetPasswordToken: null,
    resetPasswordExpires: null,
    createdAt: "2024-07-16T21:49:49.000Z",
    updatedAt: "2024-07-16T21:49:49.000Z",
  },
  {
    idGym: 1,
    cnpj: "10103f",
    sensei: "DDDA",
    name: "Guilherme",
    phone: "988ff",
    password: "$2b$10$WRZJFpwMk73.8eULe/XV4uao1up2RoOca4KfkeI3yTd/v9EPUGlCm",
    email: "gusetavo@fhotmail.com",
    role: "gym",
    neighborhood: "ffeneighborhood",
    street: "strfeeetf",
    number: 5,
    city: "fdsaff",
    resetPasswordToken: null,
    resetPasswordExpires: null,
    createdAt: "2024-07-16T21:49:49.000Z",
    updatedAt: "2024-07-16T21:49:49.000Z",
  },
  {
    idGym: 1,
    cnpj: "10103f",
    sensei: "DDDA",
    name: "Pedro",
    phone: "988ff",
    password: "$2b$10$WRZJFpwMk73.8eULe/XV4uao1up2RoOca4KfkeI3yTd/v9EPUGlCm",
    email: "gusetavo@fhotmail.com",
    role: "gym",
    neighborhood: "ffeneighborhood",
    street: "strfeeetf",
    number: 5,
    city: "fdsaff",
    resetPasswordToken: null,
    resetPasswordExpires: null,
    createdAt: "2024-07-16T21:49:49.000Z",
    updatedAt: "2024-07-16T21:49:49.000Z",
  },
];

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
}

const paginationPageSizeSelector = [5, 10, 20];


//InventoryExample
function TableListAthlet({gridTheme = "ag-theme-quartz"}: PropsTableListAthlet) {
    const gridRef = useRef<AgGridReact>(null);

  return (
    <div>Table List Athletdfasfdasf</div>
  );
}

export default TableListAthlet;
