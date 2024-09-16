import { useCallback, useEffect, useMemo } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { TabsProps } from './Tabs';

export function useTabs(tabs: TabsProps[], componentName: string) {
    const navigate = useNavigate();
    const [params, setParams] = useSearchParams();

    const setSelectedTab = useCallback(
        (id: string) => {
            params.set(componentName, id);
            setParams(params);
        },
        [params, setParams, componentName],
    );

    const selectedTabIndex = useMemo(() => {
        const selectedTab = params.get(componentName);
        const index = tabs.findIndex((tab) => tab.id === selectedTab);
        return index !== -1 ? index : 0;
    }, [params, tabs, componentName]);

    useEffect(() => {
        if (!params.get(componentName)) {
            console.log('tabs[0].id' , tabs[0].id)
            setSelectedTab(tabs[0].id);
            navigate(`/${tabs[0].id}?=tabCompetition`)
        }
    }, [componentName, params, setSelectedTab, params,tabs]);

    return { selectedTabIndex, setSelectedTab };
}



