import { Tab, TabGroup, TabList } from '@headlessui/react';
import { useNavigate } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';
import './styles.css';
import { useTabs } from './useTabs';

export interface TabsProps {
    id: string;
    icon?: React.ReactNode;
    title?: string;
    component?: React.ReactNode;
}

export default function Tabs({
    tabs,
    componentName = 'tab',
}: Readonly<{ tabs: TabsProps[]; componentName?: string }>) {
    const navigate = useNavigate();
    const { selectedTabIndex, setSelectedTab } = useTabs(tabs, componentName);

    return (
        <div className="w-full">
            <TabGroup selectedIndex={selectedTabIndex}>
                <TabList className="flex  flex-row justify-center">
                    {tabs.map((tab) => (
                        <Tab
                            key={tab.id}
                            onClick={() => {
                                //console.log('tab *** ', tab)
                                //window.location.href = `/${tab.id}`
                                navigate(`/${tab.id}?tab=tabCompetition`)
                                setSelectedTab(tab.id)
                            }}
                            className={({ selected }) =>
                                twMerge(
                                    'min-w-[5rem] min-h-[2.8rem] font-bold mr-3 mb-1 mt-9 lg:mt-0 hover:text-white hover:bg-gray-700 rounded-md  focus:outline-0 flex gap-2 justify-center items-center transition duration-700',
                                    selected
                                        ? 'text-green-700   bg-white rounded-md  text-center flex flex-row w-fit'
                                        : 'text-grey-500 dark:text-white/80',
                                )
                            }
                        >
                            {tab.icon && tab.icon}
                            {tab.title}
                        </Tab>
                    ))}
                </TabList>
            </TabGroup>
        </div>
    );
}
