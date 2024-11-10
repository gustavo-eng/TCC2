import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import client from "../../service/client";
import GlobalTile from "../GlobalTitle/GlobalTitle";
import TableAllUsers from "./components/TableAllUsers";



function AllUsers() {

  const [allUsers, setAllUsers] = useState<any>();

  const getAllUsers = async () => {
    const response = await client.athlet.list();
    if(!response.status) {
      toast?.error('Não foi possível listar nenhum aluno', {duration: 4000})
    }else {
      setAllUsers(response.payload);
    }
  }
  useEffect(() => {
    getAllUsers();
  }, [])

  return (
    <div className="w-screen  h-full p-2">
      <Toaster />
      <GlobalTile title="Todos os alunos"/>
      {allUsers  && <TableAllUsers tableJSON={allUsers || []} />}
      {!allUsers  && <TableAllUsers tableJSON={[]} />}

    </div>
  );
}

export default AllUsers;
