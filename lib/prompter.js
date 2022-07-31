const inquirer = require('inquirer');
const Manager = require("./manager");
const Engineer = require("./engineer");
const Intern = require("./intern");
const QuestionSet = require('./questions.js');

class Prompter {
    constructor() {
        this.employeeDetails = [];
        this.baseQuestions = [
            {
                type: 'input',
                message: 'Please insert the employees name:',
                name: 'name',
            },
            {
                type: 'input',
                message: 'Please insert the employees ID:',
                name: 'id'
            },
            {
                type: 'input',
                message: 'Please insert the employees email:',
                name: 'email',
            }
        ];
    }

    // Gather inputs from user using inquirer
    gatherInput(type) {
        const questionObj = new QuestionSet(this.baseQuestions, type);
        const questions = questionObj.getQuestions();

        inquirer
            .prompt(questions)
            .then((data) => {
                this.addEmployee(data, type);
                this.askForNextAction();
            });
    }

    addEmployee(data, type) {
        let newEmployee;
        switch(type){
            case "Manager": 
                newEmployee = new Manager(data.name, data.id, data.email, data.office);
                break;
            case "Engineer":
                newEmployee = new Engineer(data.name, data.id, data.email, data.ghUsername);
                break;
            case "Intern":
                newEmployee = new Intern(data.name, data.id, data.email, data.school);
                break;
        }
        this.employeeDetails.push(newEmployee);
        console.log(this.employeeDetails);
    }

    askForNextAction() {
        inquirer
            .prompt([
                {
                    type: 'list',
                    message: 'Which type of team member would you like to add next?',
                    name: 'type',
                    choices: ['Manager', 'Engineer', 'Intern', 'Exit Application'],
                },
            ])
            .then((data) => {
                data.type !== 'Exit Application' ? this.gatherInput(data.type) : console.log(this.employeeDetails)
            });
    }

    start() {
        console.log("Please answer the following prompts for the team manager:\n");
        this.gatherInput("Manager");
    }
}

module.exports = Prompter;