// Import dependencies
const inquirer = require("inquirer");
const fs = require("fs");

// Import classes
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");

// Parameters
// User input: use temporary array for each input instance, then a spread operator to pass the items into each relevant class constructor
const userInput = [];
// employees: use an array to store all objects generated from the user input and pass to the template functions
const employees = [];
// Base questions: store questions applicable for all employee types
const baseQuestions = [
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

// Functions
// 1. Generate the additional prompts based on selected employee type


// Pseudocode
// 1. Gather inputs from user using inquirer
//  1a. On first iteration, set class to manager
//  1b. Gather all input required for manager class
//  1c. Set manager object using manager class and add to the employee array
//  1d. Ask the user what the next employee class will be, or exit the prompt.
//  1e. If exit is chosen, return, otherwise ask for the relevant information required by the selected class
//  1f. Set the new object using the relevant class and add to the employee array
//  1g. Loop through 1d to 1f until exit is chosen 
// 2. Pass the objects to the template function
// 3. Template function will loop through the objects in the employees array and create cards for each (use spread operator to pass arguments)
// 4. Cards are added into the template
// 5. fs.write is used to generate the html file using the generated template.