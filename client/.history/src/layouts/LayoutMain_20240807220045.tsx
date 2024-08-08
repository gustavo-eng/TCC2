import { Warning } from '@phosphor-icons/react';
import { useMemo, useState } from 'react';
import BellNotifications from '../components/bell-notifications/BellNotifications';
import TabCompetitions from '../components/tabContainerCompetitions/TabCompetitions';
import TabPayments from '../components/tabContainerPayments/TabPayments';
import TabSeminars from '../components/TabContarnerSeminars/TabSeminars';
import '../components/tabs/styles.css';
import Tabs from '../components/tabs/Tabs';
import { useTabs } from '../components/tabs/useTabs';
import UserDropDown from '../components/userDropdown/UserDropdown';

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
                title: 'Competitions',
                component: <TabCompetitions />,
            },
            {
                id: 'events',
                icon: <Warning size={22} />,
                title: 'Tab Payment',
                component: <TabPayments />,
            },
            {
                id: 'list',
                title: 'list',
                component: <TabSeminars />,
            }
        ],
        [],
    );

    const { selectedTabIndex } = useTabs(tabs, componentName);

    return (
        <div className="relative ">
            <header className='bg-yellow-300'>
                <nav className=" border-gray-100 px-4 lg:px-6 pt-1 pb-0 lg:pb-0 dark:bg-gray-800 h-fit">
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
            </header>
            <main>
                <section className=' h-full w-full flex flex-col items-center'>
                    <div className=" lg:w-[75%] h-fit w-fit  mt-1 bg-gray-200 rounded-md ">
                        {tabs[selectedTabIndex].component}
                        {/*<Outlet /> */}
                    </div>
                </section>
            </main>
        </div>
    );
}

