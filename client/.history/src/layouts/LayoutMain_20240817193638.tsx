import { Bird, Building, CalendarPlus, CurrencyCircleDollar, Student } from '@phosphor-icons/react';
import { useMemo, useState } from 'react';
import BellNotifications from '../components/bell-notifications/BellNotifications';
import TabCompetitions from '../components/tabContainerCompetitions/TabCompetitions';
import TabPayments from '../components/tabContainerPayments/TabPayments';
import TabListAthlets from '../components/tabListAthlets/TabListAthlets';
import '../components/tabs/styles.css';
import Tabs from '../components/tabs/Tabs';
import { useTabs } from '../components/tabs/useTabs';
import TabTestModal from '../components/tabTestModal/TabTestModal';
import UserDropDown from '../components/userDropdown/UserDropdown';
import './layoutMain.css';
export interface TabsProps {
    id: string;
    icon?: React.ReactNode;
    title: string;
    component: React.ReactNode;
}

export default function LayoutMain({ componentName = 'tab' }) {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };


    const tabs = useMemo(
        () => [
            {
                id: 'map',
                //title: '',
                icon: <CalendarPlus size={25} />,
                component: <TabCompetitions />,
            },
            {
                id: 'events',
                icon: <CurrencyCircleDollar size={25} />,
                component: <TabPayments />,
            },
            {
                id: 'list',
                icon: <Student size={25} />,
                component: <TabListAthlets />,
            },
            {
                id: 'listAthlet',
                icon: <Building size={22} />,
                component: <TabListAthlets />,
            },
            {
                id: 'allStfasdudedsnts',
                icon: <Bird />,
                component: <TabTestModal />,
            },

        ],
        [],
    );

    const { selectedTabIndex } = useTabs(tabs, componentName);

    return (
        <div className="relative h-screen bg-gray-200">
            <header className='h-fit w-full '>
                <nav className="  px-4 lg:px-6 pt-1 pb-0 lg:pb-0  bg-gradient-to-br from-slate-900 to-slate-800">
                    <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                        <a href="https://flowbite.com" className="flex items-center">
                            <img src={'../src/assets/logoFPRJ.webp'} className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
                            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">FPRJ</span>
                        </a>
                        <div className="flex items-center lg:order-2">
                            <BellNotifications />
                            <UserDropDown />
                            <button onClick={toggleMenu} data-collapse-toggle="mobile-menu-2" type="button" className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded={isMenuOpen ? "true" : "false"}>
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                            </button>
                        </div>
                        <div className={`${isMenuOpen ? 'block' : 'hidden'}  mt-1 justify-between items-center w-full lg:flex lg:w-auto lg:order-1`} id="mobile-menu-2">
                            <ul className="flex flex-col  font-medium lg:flex-row lg:space-x-8  ">
                                <Tabs tabs={tabs} />
                            </ul>
                        </div>
                    </div>
                </nav>
                <div className='w-full h-[4px] bg-gradient-to-r from-green-400 to-green-700'></div>
            </header>
            <main className='  '>
                <div>
                    {/*

                    <div className="absolute inset-0 opacity-80 z-0 ">
                        <img src='https://cdn6.campograndenews.com.br/uploads/noticias/2022/10/19/dd6af8b54f66316947c46611fbfa04dd7adbec0e.jpg'/>
                    </div>
                    */}
                    <section className=' h-full w-full flex flex-col items-center  bg-[url("https://cdn6.campograndenews.com.br/uploads/noticias/2022/10/19/dd6af8b54f66316947c46611fbfa04dd7adbec0e.jpg")] bg-no-repeat'>
                        {/* Div para a imagem de fundo */}
                        <div className=" lg:w-[75%] h-[20%] w-full  mt-5  bg-slate-100  flex justify-center items-start rounded-lg ">
                            {tabs[selectedTabIndex].component}
                            {/*<Outlet /> */}
                        </div>
                    </section>
                </div>
            </main>
        </div>
    );
}

