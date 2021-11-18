// Under-the-hood utilities for building CLI modules
module.exports.groupGlobalOptions = require('./lib/groupGlobalOptions')
module.exports.makeEntryPoint = require('./lib/makeEntryPoint')
module.exports.namespace = require('./lib/namespace')
module.exports.notifyOfUpdates = require('./lib/notifyOfUpdates')
module.exports.tryCatchAsync = require('./lib/tryCatchAsync')
module.exports.configDefaults = require('./lib/configDefaults')
module.exports.findProjectRoot = require('./lib/findProjectRoot.js')
module.exports.createModuleLoader = require('./lib/createModuleLoader.js')

// The Cache constructor
module.exports.Cache = require('./lib/cache')

// Utility functions for interacting with the cli user or spawning sidecar processes
module.exports.exec = require('./lib/exec.js')
module.exports.reporter = require('./lib/reporter')
module.exports.exit = require('./lib/exit.js')
module.exports.prompt = require('./lib/prompt')
module.exports.prettyPrint = require('./lib/prettyPrint.js')

// Access to wrapped libraries
module.exports.chalk = require('chalk')
module.exports.inquirer = require('inquirer')
