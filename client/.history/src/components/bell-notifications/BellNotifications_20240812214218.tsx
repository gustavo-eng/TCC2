import { useState } from "react";



interface BellNotificationsProps {
    hasNotification?: boolean;
}

let mockedAthlet = [
    {
        "id": 1,
        "name":"Gustavo",
        "rg": '1.9.-9',
        "birth": "12/45/15",
        "email": "gustavodias@weg.net",
    },
    {
        "id": 1,
        "name":"Pedro",
        "rg": '1.9.-9',
        "birth": "12/45/15",
        "email": "gustavodias@weg.ne1010t",
    },
    {
        "id": 1,
        "name":"Test",
        "rg": '1.9.-fafa9',
        "birth": "12/45/adsfa15",
        "email": "gustavodiasfasdfas@weg.net",
    },
]

export default function BellNotifications({
    hasNotification = true,
}:BellNotificationsProps) {

    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };


    return (
        <div className="text-white mr-1">
            <button
                id="dropdownNotificationButton"
                data-dropdown-toggle="dropdownNotification"
                className="relative flex items-center text-sm font-medium text-center text-white hover:text-gray-300 focus:outline-none  "
                type="button"
                onClick={toggleDropdown}
            >
                <svg
                    className="w-5 h-5 mr-4 "
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 14 20"
                >
                    <path d="M12.133 10.632v-1.8A5.406 5.406 0 0 0 7.979 3.57.946.946 0 0 0 8 3.464V1.1a1 1 0 0 0-2 0v2.364a.946.946 0 0 0 .021.106 5.406 5.406 0 0 0-4.154 5.262v1.8C1.867 13.018 0 13.614 0 14.807 0 15.4 0 16 .538 16h12.924C14 16 14 15.4 14 14.807c0-1.193-1.867-1.789-1.867-4.175ZM3.823 17a3.453 3.453 0 0 0 6.354 0H3.823Z" />
                </svg>
                {/*
                */}
                {hasNotification && (
                    <div className="absolute  w-3 h-3 bg-red-500 border-2 border-white rounded-full -top-0.5 left-2.5  dark:border-gray-900"></div>
                )}
            </button>

            <div
                id="dropdownNotification"
                className={`z-20 ${isOpen ? 'block' : 'hidden'}  absolute w-screen left-0 lg:left-1/2 lg:w-fit  divide-y h-fit rounded-lg mr-0 lg:mr-3  dark:bg-gray-800 dark:divide-gray-700`}
                aria-labelledby="dropdownNotificationButton"
            >
                <div className="  py-2 font-medium text-center  rounded  bg-gray-800  ">
                    Solicitações
                </div>
                {/* ============= here ============  */}
                {mockedAthlet.map(el => {
                    return (
                        <div className="divide-y divide-gray-700 h-fit ">{/*Start requirements*/}
                    <div className="flex px-4 py-2 hover:bg-gray-700 ">

                        <p className="hidden">{el.id}</p>
                        <div className="  rounded-sm bg-green-600 p-2 h-fit ">
                            GD {/* funcao para pegar as duas primeiras letras */}
                        </div>
                        <div className="w-full pl-3">
                            <div className="text-gray-500 text-sm mb-1.5 dark:text-gray-400">
                                <div className="flex flex-row">
                                    <p className="text-white mr-1">{el.name}</p>
                                    <span>| Data de nascimento 26/09/2000  </span>
                                </div>
                                <div className="flex flex-col">
                                    <span> {el.rg} </span>
                                    <span> gustavo@weg.net. </span>
                                </div>
                            </div>
                            <div className="flex flex-row justify-end">
                                <button className="bg-green-500 hover:bg-green-700 rounded text-sm  p-1.5 mr-3">Aceitar</button>
                                <button className="bg-red-600/75  hover:bg-red-900 rounded text-sm p-1.5">Recusar</button>
                            </div>
                        </div>
                    </div>
                </div>
                    )
                })}
                <a
                    href="#"
                    className="block py-2 text-sm font-medium text-center text-gray-900 bg-gray-50 hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white rounded-b-lg"
                >
                    <div className="inline-flex items-center ">
                        <svg
                            className="w-4 h-4 mr-2 text-gray-500 dark:text-gray-400"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 20 20"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M8 9h4m-2 7a7 7 0 1 0 0-14 7 7 0 0 0 0 14ZM8 5h.01M12 5h.01M9 12h2"
                            />
                        </svg>
                        Visualizar todos
                    </div>
                </a>
            </div>
        </div>
    );
}

/*


*/

