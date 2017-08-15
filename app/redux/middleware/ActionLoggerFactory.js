
export default function(log) {
    return (store) => (next) => (action) => {
        let result;
        let start = Date.now();

        // console.group(action.type);
        log.isDebug && log.debug(`:runner: ACTION: ${action.type}`, action.payload || {});

        result = next(action);

        log.isDebug && log.debug(`Complete (${Date.now() - start}ms)`, store.getState());
        // console.groupEnd(action.name);

        return result;
    };
}