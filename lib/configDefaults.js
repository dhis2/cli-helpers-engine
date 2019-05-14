const os = require('os')
const path = require('path')
const fs = require('fs')

const reporter = require('./reporter')

const userConfig = () => {
    const configDir = path.join(os.homedir(), '.config', 'd2')
    const configPattern = /^(d2\.)*(config)\.(js$|json$)/

    try {
        const files = fs.readdirSync(configDir)

        // grab one of the config files if there are more than one
        const configFile = files.filter(f => configPattern.test(f))[0]

        const userConfig = require(path.join(configDir, configFile))
        reporter.debug(`User configuration loaded from: ${configFile}`, userConfig)

        return userConfig
    } catch (e) {
        reporter.debug(`Failed to load user config from: ${configDir}`, e)
        return {}
    }
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
