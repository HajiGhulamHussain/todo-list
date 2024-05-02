#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let todos = [];
let condition = true;
while (condition) {
    let addTask = await inquirer.prompt([
        {
            name: "todo",
            type: "input",
            message: chalk.blue("What you want to add your Todos List ?")
        },
        {
            name: "addMore",
            type: "confirm",
            message: chalk.green("Do you want to add More ?"),
            default: "false"
        }
    ]);
    todos.push(addTask.todo);
    condition = addTask.addMore;
    console.log(chalk.italic `This is my todo list stuff ===>>>${chalk.yellow(todos)}`);
}
