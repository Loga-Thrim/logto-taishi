import { trySafe } from '@silverhand/essentials';
import { normalizeError } from './normalize-error.js';
class AppInsights {
    async setup(cloudRole) {
        if (this.client) {
            return true;
        }
        if (!process.env.APPLICATIONINSIGHTS_CONNECTION_STRING) {
            return false;
        }
        const { default: applicationinsights } = await import('applicationinsights');
        const ok = trySafe(() => applicationinsights.setup());
        if (!ok) {
            return false;
        }
        this.client = applicationinsights.defaultClient;
        this.client.context.tags[this.client.context.keys.cloudRole] = cloudRole;
        applicationinsights.start();
        return true;
    }
    /** The function is async to avoid blocking the main script and force the use of `await` or `void`. */
    async trackException(error) {
        this.client?.trackException({ exception: normalizeError(error) });
    }
}
export const appInsights = new AppInsights();
