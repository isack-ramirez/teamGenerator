const Employee = require('./employee')

class Engineer extends Employee {
    constructor(id, name, email, github){

        super(id, name, email)
        this.github = github;
    }

    getGithub() {
        return `http://github.com/${this.github}`
    }

    getRole() {
        return 'Engineer'
    }
}

module.exports = Engineer;