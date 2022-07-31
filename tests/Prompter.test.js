// const Prompter = require('../lib/prompter');
// const inquirer = require('inquirer');

// jest.mock("inquirer");

// describe("prompter", () => {
//     describe("Gather user input", async () => {
//         const myPrompt = new Prompter("Manager");

//         inquirer.prompt.mockReturnValue(
//             new Promise(function(resolve) {
//                 resolve({name: "test manager", id: "1234", email: "testEmail@gmail.com", office: "testOffice"})
//             })
//         )

//         // const info = myPrompt.gatherInput();
//         // console.log(info);
//         await new Promise(function(resolve, reject) {
  
//             // Setting 2000 ms time
//             setTimeout(resolve, 0);
//         });

//         expect(myPrompt.gatherInput()).toEqual({data: {name: "test manager", id: "1234", email: "testEmail@gmail.com", office: "testOffice",}})

        
//         // expect(inquirer.prompt).lastCalledWith(myPrompt.gatherInput);
//         // console.log(data);
//     })
// })