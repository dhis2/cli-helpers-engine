const inquirer = require('inquirer')
const exit = require('./exit.js')
const reporter = require('./reporter.js')

const prompt = (questions) => {
    return inquirer.prompt(questions).catch((error) => {
        if (error.isTtyError) {
            reporter.error('Failed to prompt for user input!')
            exit(1)
        } else {
            reporter.error('An unknown error occured while prompting for input')
            reporter.debugErr(error)
            exit(1)
        }
    })
}

module.exports = prompt
