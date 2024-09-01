import { CaretDown, SignOut } from '@phosphor-icons/react';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function UserDropDown() {

    const navigate = useNavigate();
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


    const navigateToMyProfile = ( ) => {
        navigate('/myProfile');
    }
    //const handleLogOut = useCallback(() => {}, []);

    const handleOutSideClick = (e: MouseEvent) => {
        console.log('dropdownRef.current ' + dropdownRef.current)
        console.log()
        if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node | null)) {
            closeDropDown();
        }
    }

    useEffect(() => {
        document.addEventListener('click', handleOutSideClick);
        return () => {
            document.removeEventListener('click', handleOutSideClick);
        };
    });


    return (
        <>
            <div className=' relative inline-block'>
                <button
                    id='hs-dropdown-custom-trigger'
                    type='button'
                    className='hs-dropdown-toggle py-1 pr-3 shadow-sm inline-flex items-center gap-x-2 text-sm font-semibold'
                    onClick={toggleDropDown}
                >
                    <div className='w-[32px] h-[32px] rounded-full flex flex-col justify-center bg-green-700 text-white'> {false || "GD"}</div>
                    <span className='text-white  font-medium max-w-[7.5rem]'>{false || "Gustavo Dias"}</span>
                    <CaretDown size={16} weight='light' className={isOpen ? 'text-white rotate-180' : 'text-white'} />
                </button>
                {isOpen && (
                    <div className='transition-[opacity, margin] rounded-t-md duration absolute right-[0.0rem] mt-1 bg-white shadow-md rounded-xl p-1 min-w-[14rem] z-10'>
                        <div className=' px-1 '>
                            <p className='text-sm text-green-600 font-semibold'>
                                Gustavo Dias
                            </p>
                            <p className='text-xs font-medium text-gray-800 '>
                                gustavo@weg.net
                            </p>
                        </div>

                        <div className='pb-0'>
                            {/*

                            <button
                                className="w-full flex items-center font-semibold gap-x-1.5 px-1  text-sm text-green-900 rounded-sm mb-2 mt-2 h-[30px] hover:bg-gray-100 "
                                onClick={navigateToMyProfile}
                            >
                                <User size={20} /> Meu Perfil
                            </button>
                            <div className="border-t border-slate-200"></div>
                            */}
                            <button
                                className=" w-full my-1 flex items-center justify-center font-semibold gap-x-1.5 py-1 px-3 rounded-md text-sm  bg-red-200/50 hover:bg-red-400/40"
                                onClick={() => console.log('logout')}
                            >
                                <SignOut size={20} weight="bold" className='text-red-600' />
                                <div className='text-red-600 '>Sair</div>
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}

