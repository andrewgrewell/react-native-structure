/**
 * Sends crash reports as state is updated and listeners are notified.
 */
export default function(log) {
    return store => next => action => {
        try {
            return next(action);
        } catch (err) {
            // TODO: hook up to logging
            log.error('error in redux action', {
                action: action,
                state: store.getState()
            });
            throw err;
        }
    };
}