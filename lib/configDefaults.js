const os = require('os')
const path = require('path')

const reporter = require('./reporter')

const configDir = path.join(os.homedir(), '.config', 'd2')

const tryLoadConfig = file => {
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
    const configPriority = [
        path.join(configDir, 'config.js'),
        path.join(configDir, 'd2.config.js'),
        path.join(configDir, 'config.json'),
        path.join(configDir, 'd2.config.json'),
    ]

    for (const f of configPriority) {
        const config = tryLoadConfig(f)
        if (config) return config
    }

    return {}
}

const defaultConfig = {
    verbose: false,
    cache: path.join(os.homedir(), '.cache/d2'),
    cluster: {
        dockerComposeRepository:
            'https://github.com/amcgee/dhis2-backend/archive/master.tar.gz',
        demoDatabaseURL:
            'https://github.com/dhis2/dhis2-demo-db/blob/master/sierra-leone/{version}/dhis2-db-sierra-leone.sql.gz?raw=true',
    },
}

module.exports = {
    ...defaultConfig,
    ...userConfig(),
}
