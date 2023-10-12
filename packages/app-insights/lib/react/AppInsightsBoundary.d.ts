import { type ReactNode } from 'react';
type AppInsightsProps = {
    cloudRole: string;
};
type Props = AppInsightsProps & {
    children: ReactNode;
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
declare const AppInsightsBoundary: ({ children, ...rest }: Props) => JSX.Element;
export default AppInsightsBoundary;
