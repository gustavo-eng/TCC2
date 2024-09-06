
let mockData = [
    {
        "idAthlete": 7,
        "cpf": "d0wewr777220398932",
        "rg": "1.2e.3fref2.4",
        "birth": null,
        "phone": null,
        "name": "lutador3",
        "email": "gustavodias.2000@alunos.utfpr.edu.br",
        "role": "athlet",
        "password": "$2b$10$k/KZ12b8G7MfPj5zIq7Bk.TSqeJW92GSJPScjGnOB4A6l8kHtxo.q",
        "neighborhood": "Conjunto Uniao",
        "street": "Dario Ribeiro de Carvalho",
        "number": 243,
        "city": "fasf",
        "resetPasswordToken": null,
        "resetPasswordExpires": null,
        "createdAt": "2024-07-17T00:18:27.000Z",
        "updatedAt": "2024-07-17T00:18:27.000Z",
        "idGym": 1,
        "Gym":{
            "idGym": 1,
			"cnpj": "10103f",
			"sensei": "DDDA",
			"name": "gyG",
			"phone": "988ff",
			"password": "$2b$10$WRZJFpwMk73.8eULe/XV4uao1up2RoOca4KfkeI3yTd/v9EPUGlCm",
			"email": "gusetavo@fhotmail.com",
			"role": "gym",
			"neighborhood": "ffeneighborhood",
			"street": "strfeeetf",
			"number": 5,
			"city": "fdsaff",
			"resetPasswordToken": null,
			"resetPasswordExpires": null,
			"createdAt": "2024-07-16T21:49:49.000Z",
			"updatedAt": "2024-07-16T21:49:49.000Z"
        }
    },
    {
        "idAthlete": 7,
        "cpf": "d0wewr777220398932",
        "rg": "1.2e.3fref2.4",
        "birth": null,
        "phone": null,
        "name": "lutador3",
        "email": "gustavodias.2000@alunos.utfpr.edu.br",
        "role": "athlet",
        "password": "$2b$10$k/KZ12b8G7MfPj5zIq7Bk.TSqeJW92GSJPScjGnOB4A6l8kHtxo.q",
        "neighborhood": "Conjunto Uniao",
        "street": "Dario Ribeiro de Carvalho",
        "number": 243,
        "city": "fasf",
        "resetPasswordToken": null,
        "resetPasswordExpires": null,
        "createdAt": "2024-07-17T00:18:27.000Z",
        "updatedAt": "2024-07-17T00:18:27.000Z",
        "idGym": 1,
        "Gym":{
            "idGym": 1,
			"cnpj": "10103f",
			"sensei": "DDDA",
			"name": "gyG",
			"phone": "988ff",
			"password": "$2b$10$WRZJFpwMk73.8eULe/XV4uao1up2RoOca4KfkeI3yTd/v9EPUGlCm",
			"email": "gusetavo@fhotmail.com",
			"role": "gym",
			"neighborhood": "ffeneighborhood",
			"street": "strfeeetf",
			"number": 5,
			"city": "fdsaff",
			"resetPasswordToken": null,
			"resetPasswordExpires": null,
			"createdAt": "2024-07-16T21:49:49.000Z",
			"updatedAt": "2024-07-16T21:49:49.000Z"
        }
    },
    {
        "idAthlete": 7,
        "cpf": "d0wewr777220398932",
        "rg": "1.2e.3fref2.4",
        "birth": null,
        "phone": null,
        "name": "lutador3",
        "email": "gustavodias.2000@alunos.utfpr.edu.br",
        "role": "athlet",
        "password": "$2b$10$k/KZ12b8G7MfPj5zIq7Bk.TSqeJW92GSJPScjGnOB4A6l8kHtxo.q",
        "neighborhood": "Conjunto Uniao",
        "street": "Dario Ribeiro de Carvalho",
        "number": 243,
        "city": "fasf",
        "resetPasswordToken": null,
        "resetPasswordExpires": null,
        "createdAt": "2024-07-17T00:18:27.000Z",
        "updatedAt": "2024-07-17T00:18:27.000Z",
        "idGym": 1,
        "Gym":{
            "idGym": 1,
			"cnpj": "10103f",
			"sensei": "DDDA",
			"name": "gyG",
			"phone": "988ff",
			"password": "$2b$10$WRZJFpwMk73.8eULe/XV4uao1up2RoOca4KfkeI3yTd/v9EPUGlCm",
			"email": "gusetavo@fhotmail.com",
			"role": "gym",
			"neighborhood": "ffeneighborhood",
			"street": "strfeeetf",
			"number": 5,
			"city": "fdsaff",
			"resetPasswordToken": null,
			"resetPasswordExpires": null,
			"createdAt": "2024-07-16T21:49:49.000Z",
			"updatedAt": "2024-07-16T21:49:49.000Z"
        }
    },
]

import { ClientSideRowModelModule } from "@ag-grid-community/client-side-row-model";

import {
    ModuleRegistry
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


  import "@ag-grid-community/styles/ag-grid.css";
import "@ag-grid-community/styles/ag-theme-quartz.css";
import { Info } from "@phosphor-icons/react";

interface PropsTableRegisters {
    gridTheme?: string;
    tableJSON?: any;
  }


const info = (onClick: () => void) => {
    return (
      <div className="h-full w-full flex flex-col items-center justify-center">
        <Info  onClick={() => console.log('Informacoes')}/>
        {/*
        <Button
          className="h-[60%] w-fit p-1 flex flex-col justify-center items-center text-center rounded hover:bg-blue-600 bg-blue-600/70"
          label="Validar"
          classNameLabel="flex flex-col items-center"
          onClick={onClick}
        />
        */}
      </div>
    );
};

function TableAllUsers(){
    return (
        <div>
            Gustavo Alexandre Dias
            Gustavo Alexandre Dias
        </div>
    )
}

export default TableAllUsers;