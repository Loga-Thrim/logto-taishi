import { yes } from '@silverhand/essentials';
import { useContext, useEffect } from 'react';
import { getEventName } from '../custom-event.js';
import { AppInsightsContext } from './context.js';
const storageKeyPrefix = 'logto:insights:';
/** Track an event after AppInsights SDK is setup, but only once during the current session.  */
const TrackOnce = ({ component, event, customProperties }) => {
    const { isSetupFinished, appInsights } = useContext(AppInsightsContext);
    useEffect(() => {
        const eventName = getEventName(component, event);
        const storageKey = `${storageKeyPrefix}${eventName}`;
        const tracked = yes(sessionStorage.getItem(storageKey));
        if (isSetupFinished && !tracked) {
            appInsights.instance?.trackEvent({
                name: getEventName(component, event),
            }, { ...appInsights.utmParameters, ...customProperties });
            sessionStorage.setItem(storageKey, '1');
        }
    }, [
        appInsights.instance,
        appInsights.utmParameters,
        component,
        customProperties,
        event,
        isSetupFinished,
    ]);
    return null;
};
export default TrackOnce;
