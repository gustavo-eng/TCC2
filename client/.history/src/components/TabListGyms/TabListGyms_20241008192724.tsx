import { Fragment, useEffect, useState } from "react";
import client from "../../service/client";
import GlobalTile from "../GlobalTitle/GlobalTitle";
import Input from "../input/Input";
import ModalRegisterGym from "../modal/modalRegisterGym/ModalRegisterGym";
import ButtonAddGym from "./components/buttonAddGym/buttonAddGym";
import CardsGym from "./components/CardsGym/CardsGym";
import TableListGyms from "./components/table/TableListGyms";

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

interface gymsTypes {
  city?: string;
  cnpj?: string;
  email?: string;
  idGym?: string | number;
  name?: string;
  neighborhood ?: string;
  number ?: string | number;
  password ?: string;
  phone ?: string;
  role ?: string;
  sensei ?: string;
  street ?: string;
}

function TabListGyms() {

  const [isModalGymOpen, setIsModalGymOpen] = useState<boolean>(false);
  const [gyms, setGyms] = useState<gymsTypes[]>([]);
  const [searchText, setSearchText] = useState<string>(""); // State for filtering by name

  const openModalRegisterGym = () => setIsModalGymOpen(true);
  const closeModalRegisterGym = () => setIsModalGymOpen(false);

  const getGyms = async () => {
    try {
      const gyms = await client.gym.list();
      if(gyms?.payload) {
        setGyms(gyms?.payload);
      } else {
        setGyms([]);
      }
    } catch(err) {
      setGyms([]);
    }
  }

  const filteredEvents = gyms?.filter(
    (el: gymsTypes) => {
      if(el?.name) {
        return el?.name.toLowerCase().includes(searchText.trim().toLowerCase())
      }
    }
  );

  useEffect(() => {
    getGyms();
  }, []);


  return (
    <div className="w-full h-full flex flex-col  items-start p-1">
      <ModalRegisterGym
        isOpen={isModalGymOpen}
        onClose={closeModalRegisterGym}
        refresh={getGyms}
      />
      <div className=" w-full flex flex-col items-center text-center mb-4 ">
      <GlobalTile title="Academias"/>
        <div className="w-full flex flex-row justify-center items-center mt-5 ">
            <Input
            className="w-1/2 h-full text-center mr-2"
            placeholder="Busque pelo nome da academia."
            onChange={(e) => setSearchText(e?.target?.value)}
            />
            <ButtonAddGym text="Adicionar academia" onClick={() => openModalRegisterGym()} />
        </div>
      </div>
      <div className="w-full flex flex-row flex-wrap lg:justify-start justify-center">
        {/* Temporario */}
        {false && gyms.length > 0 && filteredEvents?.map((el, index) => {
          return (
            <Fragment key={index}>
              <CardsGym
                className="min-w-[400px]"
                titulo={el?.name || ""}
                professor={el?.sensei || ""}
                email={el?.email || ""}
                cidade={el?.city || ""}
                bairro={el?.neighborhood || ""}
                numero={String(el?.number) || ""}
                telefone={el?.phone || " (xx) xxxx-xxxx "}
                idGym={String(el?.idGym) || ""}
                refreshGyms={getGyms}
            />
            </Fragment>
          )
        })}
        <TableListGyms  tableJSON={gyms || []}/>
      </div>
    </div>
  );
}

export default TabListGyms;
