import emoji from 'node-emoji';
import map from 'lodash/map';
import isString from 'lodash/isString';
import upperFirst from 'lodash/upperFirst';
import noop from 'lodash/noop';


// Icons at: https://raw.githubusercontent.com/omnidan/node-emoji/master/lib/emoji.json
const levels = [
    { name: 'trace', color: 'lightgray', icon: 'pencil2', consoleMethod: 'debug' },
    { name: 'debug', color: 'green', icon: 'frog', consoleMethod: 'debug' },
    { name: 'info', color: 'blue', icon: 'large_blue_circle', consoleMethod: 'debug' },
    { name: 'warn', color: 'orange', icon: 'warning', consoleMethod: 'warn' },
    { name: 'error', color: 'red', icon: 'bangbang', consoleMethod: 'warn' }
];

const config = {
    general: 'info',
    redux: 'info'
};

// dont show warning errors in react native
console.ignoredYellowBox = [`${emoji.emojify(':warning:')}`, `${emoji.emojify(':bangbang:')}`];

export default function createLogger(name, icon) {
    name = name || 'general';
    let logger = {};
    let suppress = true;
    let loggerLevel = config[name] || config.general;

    levels.forEach((level) => {
        if (process.env.NODE_ENV === 'production' && level !== 'error') {
            suppress = true;
        }
        else if (level.name == loggerLevel) {
            suppress = false;
        }

        logger['is' + upperFirst(level.name)] = !suppress; // isTrace, isDebug, ...
        logger[level.name] = suppress
            ? noop
            : (...args) => console[level.consoleMethod](...consoleArgs(level, name, icon, args));
    });

    return logger;
}

function consoleArgs(level, name, icon, args) {
    let prefix = `:${level.icon}: %c [${level.name.toUpperCase()}] ${name + (icon ? ` :${icon}:` : '')}: `;
    let firstArg = args[0];
    if (isString(firstArg)) {
        prefix += firstArg;
        args.shift();
    }

    return [emoji.emojify(prefix)]
        .concat([`color: ${level.color}`])
        .concat(map(args, arg => isString(arg) ? emoji.emojify(arg) : arg));
}