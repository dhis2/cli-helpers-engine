const process = require('process')
const reporter = require('./reporter.js')

module.exports = (code, msg) => {
    if (msg && code > 0) {
        reporter.print('')
        reporter.error(msg)
    }
    process.exit(code)
}
