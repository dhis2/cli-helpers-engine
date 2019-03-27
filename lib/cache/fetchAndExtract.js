const fs = require('fs')
const request = require('request')
const tar = require('tar')
const chalk = require('chalk')
const mkdirp = require('mkdirp')
const reporter = require('../reporter') // TODO: generalize

const { rename } = require('./fsAsync')

module.exports = async ({ url, name, tmpLoc, outLoc, raw }) => {
    const p = new Promise(async (resolve, reject) => {
        const downloadStream = request
            .get(url)
            .on('error', e => {
                reporter.dumpErr(e)
                reporter.error(`[CACHE] Failed to fetch ${name} from ${url}`)
                reject()
            })
            .on('warn', reporter.warn)

        if (
            !raw &&
            (url.substr(-7) === '.tar.gz' || url.substr(-4) === '.tar')
        ) {
            reporter.debug(
                `[CACHE] Fetching and extracting ${chalk.bold(name)}`
            )
            reporter.debug(`[CACHE]   from ${chalk.bold(url)}`)
            reporter.debug(`[CACHE]   to ${chalk.bold(outLoc)}`)
            reporter.debug(`[CACHE]   tmpLoc ${chalk.bold(tmpLoc)}`)
            await mkdirp(tmpLoc)
            downloadStream
                .pipe(
                    tar.extract({
                        strip: 1,
                        cwd: tmpLoc,
                    })
                )
                .on('end', async () => {
                    try {
                        await rename(tmpLoc, outLoc)
                        resolve(outLoc)
                    } catch (e) {
                        reject(
                            `Failed to rename ${chalk.bold(
                                tmpLoc
                            )} to ${chalk.bold(outLoc)}`
                        )
                    }
                })
                .on('error', function(err) {
                    reporter.debug('[CACHE] Extraction error')
                    reporter.dumpErr(err)
                    reject(err)
                })
        } else {
            reporter.debug(`[CACHE] Fetching ${chalk.bold(name)}`)
            reporter.debug(`[CACHE]   from ${chalk.bold(url)}`)
            reporter.debug(`[CACHE]   to ${chalk.bold(outLoc)}`)
            const writeStream = fs.createWriteStream(outLoc)
            downloadStream
                .pipe(writeStream)
                // WriteStream uses `close`, not `end`
                .on('close', function() {
                    reporter.debug('[CACHE] Fetch complete')
                    resolve(outLoc)
                })
                .on('error', function(err) {
                    reporter.debug('[CACHE] Save file error')
                    reporter.dumpErr(err)
                    reject(err)
                })
        }
    })

    return p.then(
        x => {
            reporter.debug('DONE', x)
            return x
        },
        x => {
            reporter.debug('ERR', x)
            throw x
        }
    )
}
