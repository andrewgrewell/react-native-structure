/**
 * In a production app this module would also include throttling on events as well storage of the state on the device
 */
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import reduce from 'lodash/reduce';
import { enableBatching } from 'redux-batched-actions';
import {
    CrashLoggerFactory,
    ActionLoggerFactory,
    PromiseAction,
    PromiseStateAction
} from './middleware';

import { logger } from '../util';
import appModules from '../modules';
const log = logger('redux');

export default function initStore(initialState = {}) {
    log.info('Redux modules: ', appModules);
    let reducers = getReducers(appModules);
    let rootReducer = combineReducers(reducers);
    let middleware = [
        PromiseAction,
        PromiseStateAction,
        thunk,
        ActionLoggerFactory(log),
        CrashLoggerFactory(log)
    ];
    let store = createStore(enableBatching(rootReducer), initialState, applyMiddleware(...middleware));

    return Promise.resolve(store);
}

function getReducers(modules) {
    let reducers = reduce(modules, (result, module) => {
        if (module.name && module.reducer) {
            log.debug('Setting reducer for module:', module.name);
            result[module.name] = module.reducer;
        }

        return result;
    }, {});

    log.info('Module reducers: ', reducers);
    return reducers;
}