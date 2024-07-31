import { CaretDown } from '@phosphor-icons/react';
import { useRef, useState } from 'react';

export default function UserDropDown() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    /*
    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };
    */

    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggleDropDown = () => {
        setIsOpen(!isOpen);
    }

    const closeDropDown = () => {
        setIsOpen(false);
    }

    //const handleLogOut = useCallback(() => {}, []);

    const handleOutSideClick = (e: MouseEvent) => {
        console.log('dropdownRef.current ' + dropdownRef.current)
        console.log()
        if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node | null)) {
            closeDropDown();
        }
    }



    return (
        <>
            <div className='bg-white relative inline-block'>
                <button
                    id='hs-dropdown-custom-trigger'
                    type='button'
                    className='hs-dropdown-toggle py-1 pr-3 shadow-sm inline-flex items-center gap-x-2 text-sm font-semibold'
                    onClick={toggleDropDown}
                >
                    <div className='w-[32px] h-[32px] rounded-full flex flex-col justify-center bg-green-700 text-white'> {false || "GD"}</div>
                    <span className='text-black  font-medium max-w-[7.5rem]'>{false || "Gustavo Dias"}</span>
                    <CaretDown size={16} weight='light' className={isOpen ? 'rotate-180' : ''} />
                </button>
                {isOpen && (
                    <div className='transition-[opacity, margin] duration absolute  mt-2 bg-white'>
                        fadsf
                    </div>
                )}
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
