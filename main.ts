#! /usr/bin/env node

    // BMI CALCULATOR //


    import inquirer from "inquirer";

    console.log("\n\tWalcome to Syed Abdul Rehman - BMI-Calculator\n\t");
    
    const answer = await inquirer.prompt([
        {
            name: "weightInKg",
            type: "number",
            message: "Enter you weight in Kg",
        },
        {
            name: "heightInM",
            type: "number",
            message: "Enter your height in (m)",
        },
    ]);
    let bmi =answer.weightInKg / (answer.heightInM * answer.heightInM);
    console.log(`your bmi is ${bmi}`);