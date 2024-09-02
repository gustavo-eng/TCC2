import TableListAthlet from "./components/TableListAthlets/TableListAthlets";

let mockData = [
    {
      idGym: 1,
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
      idAthlete: 7,
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
    },
  ];

function TabListAthlets() {
  return (
    <div className="w-full h-fit lg:h-[80vh] flex flex-col items-center p-1">
      <div className=" flex flex-col items-center font-medium text-green-700 text-[22px]">
        <h1 className="mt-3  text-3xl font-bold  text-green-600">
          Meus alunos
        </h1>
      </div>

      <TableListAthlet tableJSON={mockData} />
    </div>
  );
}

export default TabListAthlets;
