import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useContext, useEffect } from 'react';
import { AppInsightsContext, AppInsightsProvider } from './context.js';
import { getPrimaryDomain } from './utils.js';
const AppInsights = ({ cloudRole }) => {
    const { needsSetup, setup } = useContext(AppInsightsContext);
    useEffect(() => {
        const run = async () => {
            await setup(cloudRole, { cookieDomain: getPrimaryDomain() });
        };
        if (needsSetup) {
            void run();
        }
    }, [cloudRole, needsSetup, setup]);
    return null;
};
/**
 * **CAUTION:** Make sure to put this component inside `<LogtoProvider />` or any other
 * context providers that are render-sensitive, since we are lazy loading ApplicationInsights SDKs
 * for better user experience.
 *
 * This component will trigger a render after the ApplicationInsights SDK is loaded which may
 * cause issues for some context providers. For example, `useHandleSignInCallback` will be
 * called twice if you use this component to wrap a `<LogtoProvider />`.
 */
const AppInsightsBoundary = ({ children, ...rest }) => {
    return (_jsxs(AppInsightsProvider, { children: [_jsx(AppInsights, { ...rest }), children] }));
};
export default AppInsightsBoundary;
