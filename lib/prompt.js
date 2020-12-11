const inquirer = require('inquirer')
const reporter = require('./reporter')

const prompt = questions => {
    return inquirer.prompt(questions).catch(error => {
        if (error.isTtyError) {
            reporter.error('Failed to prompt for user input!')
            process.exit(1)
        } else {
            reporter.error('An unknown error occured while prompting for input')
            reporter.debugErr(error)
            process.exit(1)
        }
    })
}

module.exports = prompt
