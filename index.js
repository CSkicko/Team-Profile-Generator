// Import dependencies
const inquirer = require("inquirer");
const fs = require("fs");

// Import classes
const Prompter = require("./lib/prompter");

const myPrompter = new Prompter();

myPrompter.start();

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

