import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react';
import { Warning } from '@phosphor-icons/react';
import { useMemo, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';
import BellNotifications from '../components/bell-notifications/BellNotifications';
import '../components/tabs/styles.css';
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
                title: 'map',
                component: <>comp1dsds</>,
            },
            {
                id: 'events',
                icon: <Warning size={22} />,
                title: 'event.plural',
                component: <div>Teste2</div>,
            },
            {
                id: 'list',
                title: 'list',
                component: <div>Teste3</div>,
            }
        ],
        [],
    );

    const { selectedTabIndex, setSelectedTab } = useTabs(tabs, componentName);
    const navigate = useNavigate();

    return (
        <div className="relative">
            <header>
                <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
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
                        <div className={`${isMenuOpen ? 'block' : 'hidden'} justify-between items-center w-full lg:flex lg:w-auto lg:order-1`} id="mobile-menu-2">
                            <TabGroup selectedIndex={selectedTabIndex} onChange={index => setSelectedTab(tabs[index].id)}>
                                <TabList className="flex flex-row justify-center">
                                    {tabs.map((tab, index) => (
                                        <Tab
                                            key={tab.id}
                                            className={({ selected }) =>
                                                twMerge(
                                                    'min-w-[9rem] py-2.5 font-bold hover:text-green-700 focus:outline-0 flex gap-2 justify-center items-center transition duration-500',
                                                    selected
                                                        ? 'text-green-700 border-b-2 border-green-700'
                                                        : 'text-grey-500 dark:text-white/80'
                                                )
                                            }
                                        >
                                            {tab.icon && tab.icon}
                                            {tab.title}
                                        </Tab>
                                    ))}
                                </TabList>
                                <TabPanels>
                                    {tabs.map((tab) => (
                                        <TabPanel key={tab.id}>
                                            {tab.component}
                                        </TabPanel>
                                    ))}
                                </TabPanels>
                            </TabGroup>
                        </div>
                    </div>
                </nav>
            </header>
            <main>
                <section>
                    <div className="w-full h-full flex justify-center bg-green-600">
                        <Outlet />
                    </div>
                </section>
            </main>
        </div>
    );
}