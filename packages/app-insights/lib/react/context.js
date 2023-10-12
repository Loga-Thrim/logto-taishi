import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useMemo, useState, useCallback } from 'react';
import { appInsightsReact as appInsights } from './AppInsightsReact';
const notImplemented = () => {
    throw new Error('Not implemented');
};
export const AppInsightsContext = createContext({
    needsSetup: true,
    isSetupFinished: false,
    setup: notImplemented,
    appInsights,
});
export const AppInsightsProvider = ({ children }) => {
    const [setupStatus, setSetupStatus] = useState('none');
    const setup = useCallback(async (...args) => {
        if (setupStatus !== 'none') {
            return;
        }
        setSetupStatus('loading');
        const result = await appInsights.setup(...args);
        if (result) {
            console.debug('Initialized ApplicationInsights');
            setSetupStatus('initialized');
        }
        else {
            setSetupStatus('failed');
        }
    }, [setupStatus]);
    const context = useMemo(() => ({
        needsSetup: setupStatus === 'none',
        isSetupFinished: setupStatus === 'initialized' || setupStatus === 'failed',
        setup,
        appInsights,
    }), [setup, setupStatus]);
    return _jsx(AppInsightsContext.Provider, { value: context, children: children });
};
