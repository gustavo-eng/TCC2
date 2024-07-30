import { useCallback, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { TabsProps } from './Tabs';

export function useTabs(tabs: TabsProps[], componentName: string) {
    const [params, setParams] = useSearchParams();
    console.log(params)
    const setSelectedTab = useCallback(
        (id: string) => {
            params.set(componentName, id);
            setParams(params);
        },
        [params, setParams, componentName],
    );
    const selectedTabIndex = useMemo(() => {
        const selectedTab = params.get(componentName);
        return tabs.findIndex((tab) => tab.id === selectedTab) || 0;
    }, [params, tabs, componentName]);


    return { selectedTabIndex, setSelectedTab };
}
