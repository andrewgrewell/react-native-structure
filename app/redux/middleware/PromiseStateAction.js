/**
 * Lets you dispatch special actions with a { promise } field.
 *
 * This middleware will turn them into a single action at the beginning,
 * and a single success (or failure) action when the `promise` resolves.
 *
 * For convenience, `dispatch` will return the promise so the caller can wait.
 *
 * taken from redux example: http://redux.js.org/docs/advanced/Middleware.html
 */
export default store => next => action => {
    if (!action.promise) {
        return next(action);
    }

    next(makeAction(action, false));
    return action.promise.then(
        result => next(makeAction(action, true, { result })),
        error => next(makeAction(action, true, { error }))
    );
};

function makeAction(action, ready, data) {
    let postfix = data.error ? '_FAILURE' : '_SUCCESS';
    let newAction = Object.assign(
        {},
        action,
        {
            type: action.type + postfix,
            ready
        },
        data
    );
    delete newAction.promise;
    return newAction;
}