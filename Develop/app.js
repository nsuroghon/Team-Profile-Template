const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const Choice = require("inquirer/lib/objects/choice");
const Choices = require("inquirer/lib/objects/choices");


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// function managerQ() {
    inquirer
        .prompt([
            //name
            {
                type: 'input',
                name: 'nameManager',
                message: "enter manager's name"
            },
            //ID
            {
                type: 'number',
                name: 'idManager',
                message: "enter manager's id number"
            },
            //email
            {
                type: 'input',
                name: 'emailManager',
                message: "enter manager's email address"
            },
            //office number
            {
                type: 'input',
                name: 'officeManager',
                message: "enter manager's office number"
            },
            // add team member?
            {
                type: 'confirm',
                name: 'addMember',
                message: "would you like to add a team member?",
            },
            // Add member : engineer or intern
            {
                when: function(answers) {
                   return answers.addMember === true;
                },
                type: 'list',
                name: 'chooseRole',
                message: 'select role of team member you want to add',
                choices: ["Engineer", "Intern"]
            },
            //engineer
            {
                when: function (answers) {
                    return answers.chooseRole === "Engineer";
                },
                type: 'number',
                name: 'idEngineer',
                message: 'input Engineer id number',
            },
            {
                when: function (answers) {
                  return  answers.idEngineer;
                },
                type: 'input',
                name: 'emailEngineer',
                message: 'input engineer email address'
            },
            {
                when: function (answers){
                    return answers.emailEngineer;
                },
                type: 'input',
                name: 'githubEngineer',
                message: 'input Engineer github username'
            },

            // Intern
                {
                    when: function (answers) {
                        return answers.chooseRole === "Intern";
                    },
                    type: 'number',
                    name: 'idIntern',
                    message: 'input Intern id number',
                },
                {
                    when: function (answers) {
                        return answers.idIntern;
                    },
                    type: 'input',
                    name: 'emailIntern',
                    message: 'input Intern email address'
                },
                {
                    when: (response) => response.emailIntern,
                    type: 'input',
                    name: 'schoolIntern',
                    message: 'input school Intern attends'
                },
        ])
// }

// managerQ(){
//     // Engineer function
//     // Intern function
// };

// need to call the functions in the .then()
// has to be done after the answers collected


// part 2: create objects for each team member, using correct classes as blueprint

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
