const os = require('os')
const path = require('path')
const reporter = require('./reporter')

const tryLoadConfig = (file) => {
    try {
        const userConfig = require(file)
        reporter.debug(`User configuration loaded from: ${file}`)
        return userConfig
    } catch (e) {
        reporter.debug(`Failed to load user config from: ${file}`)
        return null
    }
}

const userConfig = () => {
    const configDir = path.join(os.homedir(), '.config', 'd2')

    const configPriority = [
        path.join(configDir, 'config.js'),
        path.join(configDir, 'd2.config.js'),
        path.join(configDir, 'config.json'),
        path.join(configDir, 'd2.config.json'),
    ]

    for (const f of configPriority) {
        const config = tryLoadConfig(f)
        if (config) {
            return config
        }
    }

    return {}
}

const defaultConfig = {
    verbose: false,
    cache: path.join(os.homedir(), '.cache/d2'),
}

module.exports = {
    ...defaultConfig,
    ...userConfig(),
}
