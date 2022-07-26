const inquirer = require('inquirer');
const Manager = require("./manager");
const Engineer = require("./engineer");
const Intern = require("./intern");
const QuestionSet = require('./questions.js');

class Prompter {
    constructor() {
        this.currentType = "Manager";
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
    gatherInput() {
        const questionObj = new QuestionSet(this.baseQuestions, this.currentType);
        inquirer
            .prompt(questionObj.getQuestions())
            .then((data) => {
                console.log(data);
                this.addEmployee(data);
            })
    }

    addEmployee(data) {
        let newEmployee;
        switch(this.currentType){
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
    }

    start() {
        console.log("Please answer the following prompts for the team manager:\n");
        this.gatherInput();
        
    }
}

module.exports = Prompter;