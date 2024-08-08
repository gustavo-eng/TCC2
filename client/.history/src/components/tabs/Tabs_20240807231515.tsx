import { Tab, TabGroup, TabList } from '@headlessui/react';
import { twMerge } from 'tailwind-merge';
import './styles.css';
import { useTabs } from './useTabs';

export interface TabsProps {
    id: string;
    icon?: React.ReactNode;
    title: string;
    component: React.ReactNode;
}

export default function Tabs({
    tabs,
    componentName = 'tab',
}: Readonly<{ tabs: TabsProps[]; componentName?: string }>) {

    const { selectedTabIndex, setSelectedTab } = useTabs(tabs, componentName);

    return (
        <div className="w-full">
            <TabGroup selectedIndex={selectedTabIndex}>
                <TabList className="flex  flex-row justify-center">
                    {tabs.map((tab) => (
                        <Tab
                            key={tab.id}
                            onClick={() => {
                                setSelectedTab(tab.id)
                            }}
                            className={({ selected }) =>
                                twMerge(
                                    'min-w-[9rem] py-1.5 font-bold mr-1 hover:text-gree-700 focus:outline-0 flex gap-2 justify-center items-center transition duration-100',
                                    selected
                                        ? 'text-green-700 border2  bg-gray-200 rounded-t-md p-3 text-center flex flex-row w-fit mb-1'
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
