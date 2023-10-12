/** The app (either frontend or backend) for a bunch of events. */
export var Component;
(function (Component) {
    /** Logto core service. */
    Component["Core"] = "core";
    /** Logto Console. */
    Component["Console"] = "console";
    /** Logto blog. */
    Component["Blog"] = "blog";
    /** Logto official website. */
    Component["Website"] = "website";
})(Component || (Component = {}));
/** General event enums that for frontend apps. */
export var GeneralEvent;
(function (GeneralEvent) {
    /** A user visited the current app, it should be recorded once per session. */
    GeneralEvent["Visit"] = "visit";
})(GeneralEvent || (GeneralEvent = {}));
export var CoreEvent;
(function (CoreEvent) {
    /** An existing user signed in via an interaction. */
    CoreEvent["SignIn"] = "sign_in";
    /** A new user has created in an interaction. */
    CoreEvent["Register"] = "register";
})(CoreEvent || (CoreEvent = {}));
export var ConsoleEvent;
(function (ConsoleEvent) {
    /** A user started the onboarding process. */
    ConsoleEvent["Onboard"] = "onboard";
})(ConsoleEvent || (ConsoleEvent = {}));
export var BlogEvent;
(function (BlogEvent) {
    /** A user viewed a blog post. */
    BlogEvent["ViewPost"] = "view_post";
})(BlogEvent || (BlogEvent = {}));
export const eventsMap = Object.freeze({
    [Component.Core]: CoreEvent,
    [Component.Console]: { ...ConsoleEvent, ...GeneralEvent },
    [Component.Blog]: { ...BlogEvent, ...GeneralEvent },
    [Component.Website]: GeneralEvent,
});
export function getEventName(component, event, data) {
    return [component, event, data].filter(Boolean).join('/');
}
