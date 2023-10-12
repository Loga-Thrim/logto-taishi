/** The app (either frontend or backend) for a bunch of events. */
export declare enum Component {
    /** Logto core service. */
    Core = "core",
    /** Logto Console. */
    Console = "console",
    /** Logto blog. */
    Blog = "blog",
    /** Logto official website. */
    Website = "website"
}
/** General event enums that for frontend apps. */
export declare enum GeneralEvent {
    /** A user visited the current app, it should be recorded once per session. */
    Visit = "visit"
}
export declare enum CoreEvent {
    /** An existing user signed in via an interaction. */
    SignIn = "sign_in",
    /** A new user has created in an interaction. */
    Register = "register"
}
export declare enum ConsoleEvent {
    /** A user started the onboarding process. */
    Onboard = "onboard"
}
export declare enum BlogEvent {
    /** A user viewed a blog post. */
    ViewPost = "view_post"
}
export declare const eventsMap: Readonly<{
    core: typeof CoreEvent;
    console: {
        Visit: GeneralEvent.Visit;
        Onboard: ConsoleEvent.Onboard;
    };
    blog: {
        Visit: GeneralEvent.Visit;
        ViewPost: BlogEvent.ViewPost;
    };
    website: typeof GeneralEvent;
}>;
export type EventsMap = typeof eventsMap;
export type EventType<C extends Component> = EventsMap[C][keyof EventsMap[C]];
export declare function getEventName(component: Component.Blog, event: EventType<Component.Blog>, postUrl?: string): string;
export declare function getEventName<C extends Component>(component: C, event: EventType<C>): string;
