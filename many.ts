//BMI CalCULATOR USING INQUIRER PROMPT

import inquirer from "inquirer";
const questions = [
    {type: 'number', name: 'mass' , message: 'mass(kg):'},
    {type: 'number' , name: 'height' , message: 'height(m):'},
];
const calculatorBMI = (mass: number, height: number): number=> mass/(height);
const main = async() => {
    const {mass,height} = await inquirer.prompt(questions);
    console.log(`BMI: ${calculatorBMI(mass,height).toFixed(2)}`)
};
main();
