import { type ICustomProperties } from '@microsoft/applicationinsights-web';
import { type Component, type EventType } from '../custom-event.js';
type Props<C extends Component> = {
    component: C;
    event: EventType<C>;
    customProperties?: ICustomProperties;
};
/** Track an event after AppInsights SDK is setup, but only once during the current session.  */
declare const TrackOnce: <C extends Component>({ component, event, customProperties }: Props<C>) => null;
export default TrackOnce;
