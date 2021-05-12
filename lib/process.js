const reporter = require('./reporter.js')

exports.exit = (code, msg) => {
    if (msg && code > 0) {
        reporter.print('')
        reporter.error(msg)
    }
    process.exit(code)
}
