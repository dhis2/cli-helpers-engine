module.exports = (
    yargs,
    globalOptions = ['help', 'version', 'verbose', 'debug', 'quiet', 'config']
) => yargs.group(globalOptions, 'Global Options:')
