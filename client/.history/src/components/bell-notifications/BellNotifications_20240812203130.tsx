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
        "name":"Gustavo",
        "rg": '1.9.-9',
        "birth": "12/45/15",
        "email": "gustavodias@weg.net",
    },
    {
        "id": 1,
        "name":"Gustavo",
        "rg": '1.9.-9',
        "birth": "12/45/15",
        "email": "gustavodias@weg.net",
    }
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
                <div className="divide-y divide-gray-700 ">{/*Start requirements*/}
                    <a href="#" className="flex px-4 py-2 hover:bg-gray-700 ">

                        <div className="  rounded-sm bg-green-600 p-2 h-fit ">
                            GD {/* funcao para pegar as duas primeiras letras */}
                        </div>
                        <div className="w-full pl-3">
                            <div className="text-gray-500 text-sm mb-1.5 dark:text-gray-400">
                                <div className="flex flex-row">
                                    <p className="text-white mr-1">Gustavo Alexandre Dias</p>
                                    <span>| Data de nascimento 26/09/2000  </span>
                                    <p className="hidden">id</p>
                                </div>
                                <div className="flex flex-col">
                                    <span> RG: 7.8.8.9 </span>
                                    <span> gustavo@weg.net. </span>
                                </div>
                            </div>
                            <div className="flex flex-row justify-end">
                                <button className="bg-green-500  mr-3">ffdsa</button>
                                <button className="bg-red-800 p-[2px]">fasdf</button>
                            </div>
                        </div>
                    </a>

                    <a href="#" className="flex px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700">
                        <div className="flex-shrink-0 relative">
                            <img
                                className="rounded-full w-11 h-11"
                                src="/docs/images/people/profile-picture-4.jpg"
                                alt="Leslie"
                            />
                            <div className="absolute flex items-center justify-center w-5 h-5 ml-6 -mt-5 bg-purple-500 border border-white rounded-full dark:border-gray-800">
                                <svg
                                    className="w-2 h-2 text-white"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M18 10.55a7.9 7.9 0 0 1-3.737 6.847c-.542.337-.922.903-.972 1.551l-.203 2.485a.75.75 0 0 1-1.496-.122l-.203-2.485a1.992 1.992 0 0 0-.973-1.551 7.9 7.9 0 0 1-3.737-6.847V8a3.982 3.982 0 0 0 1.138-7.765.75.75 0 1 1-.276-1.478A5.49 5.49 0 0 1 18 5.49v5.06ZM3.276 8A3.982 3.982 0 0 0 4 13.95v1.05a3.982 3.982 0 0 0 1.138 7.765.75.75 0 1 1-.276 1.478A5.49 5.49 0 0 1 1 15.95V8.22a.75.75 0 0 1 1.5 0V8Z" />
                                </svg>
                            </div>
                        </div>
                        <div className="w-full pl-3">
                            <div className="text-gray-500 text-sm mb-1.5 dark:text-gray-400">
                                <span className="font-semibold text-gray-900 dark:text-white">
                                    Leslie Livingston
                                </span>{' '}
                                mentioned you in a comment: "Awesome work!"
                            </div>
                            <div className="text-xs text-blue-600 dark:text-blue-500">
                                1 hour ago
                            </div>
                        </div>
                    </a>

                </div>
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

