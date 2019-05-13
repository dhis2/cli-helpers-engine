const os = require('os')
const path = require('path')

const reporter = require('./reporter')

const configFile = path.join(os.homedir(), '.d2rc')

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

let userConfig
try {
    userConfig = require(configFile)
    reporter.debug(`User configuration loaded from: ${configFile}`)
} catch (e) {
    reporter.debug(`Failed to load user config from: ${configFile}`)
}

module.exports = {
    ...defaultConfig,
    ...userConfig,
}
