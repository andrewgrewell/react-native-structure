/**
 * Lets you dispatch promises in addition to actions.
 * If the promise is resolved, its result will be dispatched as an action.
 * The promise is returned from `dispatch` so the caller may handle rejection.
 *
 * taken from redux example: http://redux.js.org/docs/advanced/Middleware.html
 */
export default store => next => action => {
    if (typeof action.then !== 'function') {
        return next(action);
    }

    return Promise.resolve(action).then(store.dispatch);
};