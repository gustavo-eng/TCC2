import { useState } from 'react';

export default function UserDropDown() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    /*
    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };
    */

    return (
        <>
            <div className='bg-white'>

            </div>
        </>
    );
}

/*
 <>
            <button
                id="dropdownUserAvatarButton"
                onClick={toggleDropdown}
                className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                type="button">
                <span className="sr-only">Open user menu</span>
                <div className='bg-white w-8 h-8 rounded-full flex flex-col justify-center'>GD</div>
            </button>

            {isDropdownOpen && (
                <div id="dropdownAvatar" className="flex flex-col z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600 absolute ">
                    <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
                        <div>Bonnie Green</div>
                        <div className="font-medium truncate">name@flowbite.com</div>
                    </div>
                    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownUserAvatarButton">
                        <li>
                            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                        </li>
                        <li>
                            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                        </li>
                        <li>
                            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                        </li>
                    </ul>
                    <div className="py-2">
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
                    </div>
                </div>
            )}
        </>

*/
