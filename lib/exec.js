const { spawn } = require('child_process')
const chalk = require('chalk')
const reporter = require('./reporter')

module.exports = function({
    cmd,
    args,
    env,
    pipe,
    captureOut,
    captureErr,
    ...opts
}) {
    reporter.debug(`> ${cmd} ${args.join(' ')}`)

    const childEnv = {
        ...process.env,
        ...env,
    }
    reporter.debug(`env: ${JSON.stringify(env)}`)

    const p = new Promise((resolve, reject) => {
        const child = spawn(cmd, args, {
            shell: true,
            env: childEnv,
            ...opts,
        })
        let output = captureOut || captureErr ? '' : undefined

        child.stdout.on('data', data => {
            if (captureOut) {
                output += data
            }
            if (!pipe) {
                reporter.dump(data)
            } else {
                reporter.pipe(data)
            }
        })

        child.stderr.on('data', data => {
            if (captureErr) {
                output += data
            }
            if (!pipe) {
                reporter.pipeErr(data)
            } else {
                reporter.printErr(data)
            }
        })

        child.on('close', code => {
            if (code !== 0) {
                reporter.debugErr(
                    `${chalk.bold(
                        cmd
                    )} exited with non-zero exit code (${code}).`
                )
                reject()
            } else {
                reporter.debug(`${chalk.bold(cmd)} completed successfully.`)
                resolve(output)
            }
        })
    })

    return p
}
