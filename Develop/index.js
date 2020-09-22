// npm install this
const inquirer = require("inquirer");
const generateMarkdown = require("Develop/utils/generateMarkdown.js");
const axios = require("axios");
const fs = require("fs");

// array of questions for user
const questions = [
    {
        type: "input",
        message: "What is your Github username?",
        name: "username"
    },
    {
        type: "input",
        message: "What is your project title?",
        name: "title"
    },
    {
        type: "input",
        message: "What is your repository called?",
        name: "repository"
    },
    {
        type: "input",
        message: "What is your project description?",
        name: "description"
    },
    {
        type: "input",
        message: "What installations are needed to run your project?",
        name: "install"
    },
    {
        type: "input",
        message: "Write instructions to use your project?",
        name: "usage"
    },
    {
        type: "input",
        message: "If there were contributors to this project please enter them here, if there are multiple contributors, separate their names with a comma and no space.",
        name: "contributors"
    },
    {
        type: "input",
        message: "Provide examples on how to run tests.",
        name: "test"
    },
];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();