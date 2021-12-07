const path = require('path')
exports.relativePath = (fp, cwd = process.cwd()) =>
    path.isAbsolute(fp) ? path.relative(cwd, fp) : fp
