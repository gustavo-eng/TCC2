import { useCallback, useEffect, useMemo, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { TabsProps } from './Tabs';

export function useTabs(tabs: TabsProps[], componentName: string) {

    const navigate = useNavigate();

    const [params, setParams] = useSearchParams();
    const [route, setRoute] = useState('')
    const setSelectedTab = useCallback(
        (id: string) => {
            params.set(componentName, id);
            setParams(params);
            setRoute(id);
            //navigate(`/${id}`);
        },
        [params, setParams, componentName],
    );

    const selectedTabIndex = useMemo(() => {
        const selectedTab = params.get(componentName);
        const index = tabs.findIndex((tab) => tab.id === selectedTab);
        return index !== -1 ? index : 0;
    }, [params, tabs, componentName]);

    // Ensure the URL is synced with the initial tab selection
    useEffect(() => {
        if (!params.get(componentName)) {
            setSelectedTab(tabs[0].id);
            setRoute(tabs[0].id);
            //navigate(`/${tabs[0].id}`);
        }
    }, [componentName, params, setSelectedTab, tabs]);

    navigate(`/${route}`);
    console.log('finally ')
    return { selectedTabIndex, setSelectedTab };
}


/*
export function useTabs(tabs: TabsProps[], componentName: string) {
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

    // Ensure the URL is synced with the initial tab selection
    useEffect(() => {
        if (!params.get(componentName)) {
            setSelectedTab(tabs[0].id);
        }
    }, [componentName, params, setSelectedTab, tabs]);

    return { selectedTabIndex, setSelectedTab };
}
*/