import { Tab } from '@headlessui/react';
import { useTranslation } from 'react-i18next';
import { classNames } from '../../utils/classNames';
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
    const { t } = useTranslation();
    const { selectedTabIndex, setSelectedTab } = useTabs(tabs, componentName);

    return (
        <div className="w-full">
            <Tab.Group selectedIndex={selectedTabIndex}>
                <Tab.List className="flex overflow-x-auto p-2">
                    {tabs.map((tab) => (
                        <Tab
                            key={tab.id}
                            data-test={`${componentName}-${tab.id}`}
                            onClick={() => setSelectedTab(tab.id)}
                            className={({ selected }) =>
                                classNames(
                                    'min-w-[9rem] py-2.5 font-bold leading-5 hover:text-gree-700 focus:outline-0 flex gap-2 justify-center items-center transition duration-500',
                                    selected
                                        ? 'text-green-700 border-b-2 border-green-700'
                                        : 'text-grey-500 dark:text-white/80',
                                )
                            }
                        >
                            {tab.icon && tab.icon}
                            {t(tab.title)}
                        </Tab>
                    ))}
                </Tab.List>
                <Tab.Panels className="w-full">
                    {tabs.map((tab) => (
                        <Tab.Panel key={tab.id}>{tab.component}</Tab.Panel>
                    ))}
                </Tab.Panels>
            </Tab.Group>
        </div>
    );
}
