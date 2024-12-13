import { useEffect, useState } from "react";
import client from "../../service/client";
import GlobalTile from "../GlobalTitle/GlobalTitle";
import TableAllUsers from "./components/TableAllUsers";

let mockData = [
  {
    idAthlete: 7,
    cpf: "d0wewr777220398932",
    rg: "1.2e.3fref2.4",
    birth: null,
    phone: null,
    name: "lutador3",
    email: "gustavodias.2000@alunos.utfpr.edu.br",
    role: "athlet",
    password: "$2b$10$k/KZ12b8G7MfPj5zIq7Bk.TSqeJW92GSJPScjGnOB4A6l8kHtxo.q",
    neighborhood: "Conjunto Uniao",
    street: "Dario Ribeiro de Carvalho",
    number: 243,
    city: "fasf",
    resetPasswordToken: null,
    resetPasswordExpires: null,
    createdAt: "2024-07-17T00:18:27.000Z",
    updatedAt: "2024-07-17T00:18:27.000Z",
    idGym: 1,
    Gym: {
      idGym: 1,
      cnpj: "10103f",
      sensei: "DDDA",
      name: "gyG",
      phone: "988ff",
      password: "$2b$10$WRZJFpwMk73.8eULe/XV4uao1up2RoOca4KfkeI3yTd/v9EPUGlCm",
      email: "gusetavo@fhotmail.com",
      role: "gym",
      neighborhood: "ffeneighborhood",
      street: "strfeeetf",
      number: 5,
      city: "Cornelio",
      resetPasswordToken: null,
      resetPasswordExpires: null,
      createdAt: "2024-07-16T21:49:49.000Z",
      updatedAt: "2024-07-16T21:49:49.000Z",
    },
  },
  {
    idAthlete: 7,
    cpf: "d0wewr777220398932",
    rg: "1.2e.3fref2.4",
    birth: null,
    phone: null,
    name: "lutador3",
    email: "gustavodias.2000@alunos.utfpr.edu.br",
    role: "athlet",
    password: "$2b$10$k/KZ12b8G7MfPj5zIq7Bk.TSqeJW92GSJPScjGnOB4A6l8kHtxo.q",
    neighborhood: "Conjunto Uniao",
    street: "Dario Ribeiro de Carvalho",
    number: 243,
    city: "fasf",
    resetPasswordToken: null,
    resetPasswordExpires: null,
    createdAt: "2024-07-17T00:18:27.000Z",
    updatedAt: "2024-07-17T00:18:27.000Z",
    idGym: 1,
    Gym: {
      idGym: 1,
      cnpj: "10103f",
      sensei: "DDDA",
      name: "gyG",
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
  },
  {
    idAthlete: 7,
    cpf: "d0wewr777220398932",
    rg: "1.2e.3fref2.4",
    birth: null,
    phone: null,
    name: "lutador3",
    email: "gustavodias.2000@alunos.utfpr.edu.br",
    role: "athlet",
    password: "$2b$10$k/KZ12b8G7MfPj5zIq7Bk.TSqeJW92GSJPScjGnOB4A6l8kHtxo.q",
    neighborhood: "Conjunto Uniao",
    street: "Dario Ribeiro de Carvalho",
    number: 243,
    city: "fasf",
    resetPasswordToken: null,
    resetPasswordExpires: null,
    createdAt: "2024-07-17T00:18:27.000Z",
    updatedAt: "2024-07-17T00:18:27.000Z",
    idGym: 1,
    Gym: {
      idGym: 1,
      cnpj: "10103f",
      sensei: "DDDA",
      name: "gyG",
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
  },
];

function AllUsers() {

  const [allUsers, setAllUsers] = useState<any>();

  const getAllUsers = async () => {
    const response = await client.athlet.list()
    console.log('Response getAllUsers', response);
  }
  useEffect(() => {
    getAllUsers();
  }, [])

  return (
    <div className="w-screen  h-full p-2">
      <GlobalTile title="Todos os alunos"/>
      <TableAllUsers tableJSON={mockData} />
    </div>
  );
}

export default AllUsers;
