import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { formatSubstring } from "../../helpers/formatSubstring";
import useAppSelector from "../../hooks/useAppSelector";
import client from "../../service/client";
import { authSelector } from "../../store/auth/authReducer";
import { hasNotifications } from "../../utils/hasNotifications";
import Button from "../buttons/button";

interface BellNotificationsProps {
 // hasNotification?: boolean;
}

let mockedAthlet = [
  {
    id: 1,
    name: "Gustavo Alexandre Dias",
    rg: "1.9.-9",
    birth: "12/45/15",
    email: "gustavodias@weg.net",
  },
  {
    id: 1,
    name: "Gustavo Silva",
    rg: "1.9.-9",
    birth: "12/45/15",
    email: "gustavodias@weg.net",
  },
  {
    id: 1,
    name: "Gustavo Queiroz",
    rg: "1.9.-9",
    birth: "12/45/0015",
    email: "gustavodias@weg.net",
  },
];



export default function BellNotifications(){
  const [isOpen, setIsOpen] = useState(false);
  let { user } = useAppSelector(authSelector);
  const [solicitations, setSolicitations] = useState<any>();

  const toggleDropdown = () => {
    if(hasNotifications(solicitations)) {
      setIsOpen(!isOpen);
    } else {
      toast.error("Você não tem nenhuma solicitação pendente!");
    }
  };

  const acceptAthlet = async (id: string | number) => {
    let response = await client.gym.acceptSolicitation(id);
    if(response.status) {
      toast.success('Atleta Deletado com sucesso', {duration: 4000});
    } else {
      toast.error('Erro ao aceitar atleta', {duration: 4000});
    }

  };

  const deleteAthlet = async (id: string | number) => {
    let response = await client.athlet.delete(String(id));
    if(response.status) {
      toast.success('Atleta aceito com sucesso', {duration: 4000});
    } else {
      toast.error('Erro ao aceitar atleta', {duration: 4000});
    }
  }

  const getSolicitation = async () => {
    let response = await client.gym.solicitation(String(user?.idGym));
    setSolicitations(response.payload);

  };

  useEffect(() => {
    getSolicitation();
  }, [isOpen]);

  return (
    <div className="text-white mr-1">
      <Toaster position="top-right"/>
      <button
        id="dropdownNotificationButton"
        data-dropdown-toggle="dropdownNotification"
        className="relative flex items-center text-sm font-medium text-center text-white hover:text-gray-300 focus:outline-none"
        type="button"
        onClick={toggleDropdown}
      >
        <svg
          className="w-5 h-5 mr-4"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 14 20"
        >
          <path d="M12.133 10.632v-1.8A5.406 5.406 0 0 0 7.979 3.57.946.946 0 0 0 8 3.464V1.1a1 1 0 0 0-2 0v2.364a.946.946 0 0 0 .021.106 5.406 5.406 0 0 0-4.154 5.262v1.8C1.867 13.018 0 13.614 0 14.807 0 15.4 0 16 .538 16h12.924C14 16 14 15.4 14 14.807c0-1.193-1.867-1.789-1.867-4.175ZM3.823 17a3.453 3.453 0 0 0 6.354 0H3.823Z" />
        </svg>
        {hasNotifications(solicitations) && (
          <div className={`absolute w-3 h-3 bg-red-500 border-2 border-white rounded-full -top-0.5 left-2.5 dark:border-gray-900`}></div>
        )}
      </button>

      <div
        id="dropdownNotification"
        className={`z-20 ${
          isOpen ? "block" : "hidden"
        } absolute w-screen left-0 lg:left-1/2 lg:w-fit divide-y h-fit rounded-lg mr-0 lg:mr-3 bg-gray-800`}
        aria-labelledby="dropdownNotificationButton"
      >
        <div className="py-2 font-medium text-center rounded bg-gray-800 p-1 ">
          {hasNotifications(solicitations)  ? `Solicitações` : `Não contém Solicitações`}
        </div>
        <div
          className={`divide-y divide-gray-600 ${
            solicitations && solicitations.length > 5 ? "h-96 overflow-y-auto" : ""
          }`}
        >
          {Array.isArray(solicitations) &&
            solicitations.map((el: any) => (
              !el?.aproved && (
                <div key={el?.idAthlete} className="divide-y divide-gray-700 h-fit">
                  <div className="flex px-4 py-2 hover:bg-gray-700">
                    <p className="hidden">id</p>
                    <div className="rounded bg-green-600 p-2 h-fit">
                      {formatSubstring(String(el?.Athlet?.name || ""))}
                    </div>
                    <div className="w-full pl-3">
                      <div className="text-gray-500 text-sm mb-1.5 dark:text-gray-400">
                        <div className="flex flex-row justify-start items-start">
                          <p className="text-white mr-1 lg:w-52">
                            {String(el?.Athlet?.name || "")}
                          </p>
                          <span>
                            Data de nascimento {String(el?.Athlet?.birth || "xx/xx/xxxx")}
                          </span>
                        </div>
                        <div className="flex flex-col">
                          <span> RG: {String(el?.Athlet?.rg) || "Not informed"} </span>
                          <span>{String(el?.Athlet?.email)}</span>
                        </div>
                      </div>
                      <div className="flex flex-row justify-end">
                        <Button
                          className="bg-green-500/90 hover:bg-green-600 rounded-md text-sm p-1.5 mr-3"
                          label="Aceitar"
                          onClick={() => acceptAthlet(el?.idAthlete)}
                        />
                        <Button
                          className="bg-red-500/75 hover:bg-red-600 rounded-md text-sm p-1.5"
                          label="Recusar"
                          onClick={() => deleteAthlet(el?.idAthlete)}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )
            ))}
        </div>
      </div>
    </div>
  );
}
