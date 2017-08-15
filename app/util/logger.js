import initLogging from '@provata/logger';

const defaultLevels = [
    { name: 'trace', color: 'lightgray', icon: 'pencil2', consoleMethod: 'debug' },
    { name: 'debug', color: 'green', icon: 'frog', consoleMethod: 'debug' },
    { name: 'info', color: 'blue', icon: 'large_blue_circle', consoleMethod: 'debug' },
    { name: 'warn', color: 'orange', icon: 'warning', consoleMethod: 'warn' },
    { name: 'error', color: 'red', icon: 'bangbang', consoleMethod: 'warn' }
];

const defaultConfig = {
    general: 'info',
    redux: 'info'
};

export default initLogging(defaultConfig, defaultLevels);