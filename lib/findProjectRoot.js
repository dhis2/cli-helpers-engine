const path = require('path')
const process = require('process')
const findup = require('find-up')

/*
 * cwd		Specifies the current working directory to start the search from
 * markers	Override the default markers that identify the root project directory
 *
 * returns the absolute path to the project root, or undefined if not found.
 */
module.exports = ({
    cwd = process.cwd(),
    markers = ['.git', '.github', 'yarn.lock', 'package-lock.json'],
} = {}) =>
    findup.sync(
        (directory) => {
            const amiroot = markers.map((i) =>
                findup.sync.exists(path.join(directory, i))
            )
            return amiroot.includes(true) && directory
        },
        {
            cwd,
            type: 'directory',
        }
    )
