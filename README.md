# cli-helpers-engine

[![@dhis2/cli-style on npm](https://img.shields.io/npm/v/@dhis2/cli-helpers-engine.svg)](https://www.npmjs.com/package/@dhis2/cli-helpers-engine)
[![travis.com build](https://img.shields.io/travis/com/dhis2/cli-helpers-engine.svg)](https://travis-ci.com/dhis2/cli-helpers-engine)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![Greenkeeper badge](https://badges.greenkeeper.io/dhis2/cli-helpers-engine.svg)](https://greenkeeper.io/)

> This is the engine used by plugin modules in the [@dhis2/cli](https://github.com/dhis2/cli)
> commandline interface ecosystem.

## A few common utilities:

These helpers assume a node.js CLI context. There are other under-the-hood helpers as well, but they are currently undocumented.

```js
const { reporter, chalk, prompt, exec } = require('@dhis2/cli-helpers-engine')

// These are wrappers around stdout and stderr which respect the --verbose and --quiet flags.  Some reporting options also prefix the line with a tag - see lib/reporter.js for all the options
reporter.print('This is a test') // Only printed if --quiet is not passed
reporter.print(chalk.dim('This is a less important test'))
reporter.print(
    chalk.green(
        `Chalk can be used to ${chalk.bold(
            'style text'
        )} which will be printed to the console.`
    )
)
reporter.info('This is something important') // prints to stdout in cyan: This is something important
reporter.error('An error occurred') // prints to stderr in red: [ERROR] An error occured
reporter.warn('Something non-critical went wrong') // prints to stderr in yellow: [WARNING] Something non-critical went wrong
reporter.debug('This will only be printed when --verbose is passed') // prints to stdout if --verbose in dim gray: [DEBUG] This will only be printed when --verbose is passed

// Use prompt to ask the user for input - it is a thin wrapper around `inquirer.prompt`, see https://github.com/SBoudrias/Inquirer.js
const answers = await prompt([
    {
        type: 'list',
        name: 'theme',
        message: 'What do you want to do?',
        choices: [
            'Order a pizza',
            'Make a reservation',
            new inquirer.Separator(),
            'Ask for opening hours',
            {
                name: 'Contact support',
                disabled: 'Unavailable at this time',
            },
            'Talk to the receptionist',
        ],
    },
    {
        type: 'list',
        name: 'size',
        message: 'What size do you need?',
        choices: ['Jumbo', 'Large', 'Standard', 'Medium', 'Small', 'Micro'],
        filter: function (val) {
            return val.toLowerCase()
        },
        when: function (answers) {
            return answers.theme === 'Order a pizza'
        },
    },
])
if (answers.theme === 'Order a pizza') {
    reporter.info(`Ordering a ${answers.size} pizza`)
} else {
    reporter.info(`Ok, let's ${answers.theme}`)
}

// Exec a function in the local shell environment, pass some arguments, set the current working directory, and capture the output as a string

const textContents = await exec({
    cmd: 'cat',
    args: ['./test.txt'],
    cwd: './myDirectory',
    captureOut: true,
})
```

There's a lot more you can do with these utilities - check the source code in the `./libs` folder or the many CLI module examples at [dhis2/cli](https://github.com/dhis2/cli) for inspiration.

## How to use the d2 Cache

Any CLI command instantiated with `@dhis2/cli-helpers-engine` will have an injected `getCache` argument. This is a powerful, simple cache engine for downloading, caching, and accessing files in the global `d2` cache.

The most handy method of the `d2` Cache is `get`, which allows the developer to fetch a remote URL, optionally extract it if the download is a zip file, and store it in the cache. If a copy already exists in the cache, the download is skipped (unless `force: true` is specified):

```js
const { makeEntryPoint } = require('@dhis2/cli-helpers-engine')

const handler = async ({ force, getCache }) => {
    const cache = getCache()

    const url =
        'https://spreadsheets.google.com/feeds/list/1Fd-vBoJPjp5wdCyJc7d_LOJPOg5uqdzVa3Eq5-VFR-g/2/public/values?alt=json'

    // This will download a json file listing all countries which implement DHIS2 and store it in the cache.
    // It will *always* be re-downloaded, but if the download fails and a previous cache exists life goes on.
    const dataCachePath = 'dhis2-in-action-countries.json'
    try {
        await cache.get(url, dataCachePath, { force: true })
    } catch (e) {
        const exists = await cache.exists(dataCachePath)
        if (!exists) {
            reporter.error('Failed to download new in-action data, and no cached data exists')
            process.exit(1)
        }
        const modifiedTime = (await cache.stat(dataCachePath)).mtime.toISOString()
        reporter.debug(`Failed to update in-action data cache, using previously-cached data from ${modifiedTime}`)
    }

    // And now an example for a zip file
    const dbUrl =
        'https://databases.dhis2.org/sierra-leone/2.35.0/dhis2-db-sierra-leone.sql.gz'

    // This will download the demo database for 2.35.0 and store it in the cache.  The 'raw' option means the .gz file will NOT be unpacked, but rather stored directly on disk.  If a version of this file already exists in the cache, it will not be fetched again, unless the `force` option is passed to this command.
    await cache.get(dbUrl, 'databases/2.35.0.sql.gz', { raw: true, force: force })

    // List all currently-downloaded databases

    const dirStat = (await cache.exists('databases'))
        ? await cache.stat('databases')
        : null
    if (dirStat && dirStat.children) {
        Object.entries(dirStat.children)
            .forEach(([name, stat]) => {
                reporter.print(`${chalk.bold(name)} (${stat.size})`)
            })
    } else {
        reporter.print('No databases found')
    }
}

const command = {
    builder: yargs => {
        yargs.option('force', {
            alias: 'f',
            type: 'boolean',
            description: 'force re-download of all cached items',
            default: false
        }
    },
    handler
})
makeEntryPoint(command)
```

For examples of the cache in action, check out its use in [d2 cluster](https://github.com/dhis2/cli/blob/master/packages/cluster/src/common.js#L11-L52) and [d2 debug cache](https://github.com/dhis2/cli/blob/master/packages/main/src/commands/debug/cache.js)

## Report an issue

The issue tracker can be found in [DHIS2 JIRA](https://jira.dhis2.org)
under the [CLI](https://jira.dhis2.org/projects/CLI) project.

Deep links:

-   [Bug](https://jira.dhis2.org/secure/CreateIssueDetails!init.jspa?pid=10703&issuetype=10006&components=11019)
-   [Feature](https://jira.dhis2.org/secure/CreateIssueDetails!init.jspa?pid=10703&issuetype=10300&components=11019)
-   [Task](https://jira.dhis2.org/secure/CreateIssueDetails!init.jspa?pid=10703&issuetype=10003&components=11019)
