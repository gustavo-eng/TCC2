import { useEffect, useState } from "react";
import useAppSelector from "../../hooks/useAppSelector";
import client from "../../service/client";
import { authSelector } from "../../store/auth/authReducer";
import GlobalTile from "../GlobalTitle/GlobalTitle";
import TableListAthlet from "./components/TableListAthlets/TableListAthlets";

let mockData = [
  {
    idGym: 1,
    idAthlete: 1,
    cnpj: "10103f",
    sensei: "DDDA",
    rg: "1.2e.3fref2.4",
    cpf: "d0wewr777220398932",
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
    idAthlete: 2,
    cnpj: "10103f",
    sensei: "DDDA",
    rg: "1.2e.3fref2.4",
    cpf: "d0wewr777220398932",
    name: "GustdddddavoDias",
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
    idAthlete: 3,
    cpf: "d0wewr777220398932",
    rg: "1.2e.3fref2.4",
    birth: null,
    phone: null,
    name: "lutadorfsfasfsafas3",
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
  },
  {
    idAthlete: 4,
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
  },
];

function TabListAthlets() {

  const [athlets, setAthlets] = useState<any>(null);
  let { user } = useAppSelector(authSelector);

  const getAthlets = async () => {
    if(user.idGym) {
      let response = await client.gym.listAthlets(user.idGym);
      setAthlets(response.payload)

    }

    //console.warn('athlets ', athlets)
  }

  useEffect(() => {
    getAthlets();
  }, []);


  return (
    <div className="w-screen lg:w-full h-fit lg:h-[80vh] flex flex-col items-center p-1">
      <GlobalTile title="Meus Alunos"/>
      {athlets && <TableListAthlet tableJSON={athlets || []} />}
    </div>
  );

}

export default TabListAthlets;
