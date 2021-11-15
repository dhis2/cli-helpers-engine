const yargs = require('yargs')
const Cache = require('.')

module.exports =
    ({ name, option = 'cache' }) =>
    (argv) => {
        let theCache
        if (argv[option]) {
            theCache = new Cache({ cacheRoot: argv[option] })
        } else {
            theCache = new Cache({ name: name || yargs.scriptName() })
        }
        argv.getCache = () => theCache
        return argv
    }
