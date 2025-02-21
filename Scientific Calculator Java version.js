const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function showMenu() {
    console.log("\nScientific Calculator");
    console.log("1. Addition");
    console.log("2. Subtraction");
    console.log("3. Multiplication");
    console.log("4. Division");
    console.log("5. Power");
    console.log("6. Square Root");
    console.log("7. Logarithm (base 10)");
    console.log("8. Natural Logarithm (ln)");
    console.log("9. Sine");
    console.log("10. Cosine");
    console.log("11. Tangent");
    console.log("12. Exit");
}

function getNumberInput(prompt, callback) {
    rl.question(prompt, (input) => {
        let num = parseFloat(input);
        if (isNaN(num)) {
            console.log("Invalid input. Please enter a valid number.");
            getNumberInput(prompt, callback);
        } else {
            callback(num);
        }
    });
}

function calculate(choice) {
    switch (choice) {
        case "1":
            getNumberInput("Enter two numbers (space-separated): ", (num1) => {
                getNumberInput("", (num2) => {
                    console.log("Result:", num1 + num2);
                    main();
                });
            });
            break;
        case "2":
            getNumberInput("Enter two numbers (space-separated): ", (num1) => {
                getNumberInput("", (num2) => {
                    console.log("Result:", num1 - num2);
                    main();
                });
            });
            break;
        case "3":
            getNumberInput("Enter two numbers (space-separated): ", (num1) => {
                getNumberInput("", (num2) => {
                    console.log("Result:", num1 * num2);
                    main();
                });
            });
            break;
        case "4":
            getNumberInput("Enter two numbers (space-separated): ", (num1) => {
                getNumberInput("", (num2) => {
                    if (num2 === 0) {
                        console.log("Error: Division by zero is not allowed.");
                    } else {
                        console.log("Result:", num1 / num2);
                    }
                    main();
                });
            });
            break;
        case "5":
            getNumberInput("Enter base: ", (base) => {
                getNumberInput("Enter exponent: ", (exponent) => {
                    console.log("Result:", Math.pow(base, exponent));
                    main();
                });
            });
            break;
        case "6":
            getNumberInput("Enter a number: ", (num) => {
                if (num < 0) {
                    console.log("Error: Square root of a negative number is not defined.");
                } else {
                    console.log("Result:", Math.sqrt(num));
                }
                main();
            });
            break;
        case "7":
            getNumberInput("Enter a number: ", (num) => {
                if (num <= 0) {
                    console.log("Error: Logarithm of non-positive numbers is not defined.");
                } else {
                    console.log("Result:", Math.log10(num));
                }
                main();
            });
            break;
        case "8":
            getNumberInput("Enter a number: ", (num) => {
                if (num <= 0) {
                    console.log("Error: Logarithm of non-positive numbers is not defined.");
                } else {
                    console.log("Result:", Math.log(num));
                }
                main();
            });
            break;
        case "9":
            getNumberInput("Enter an angle in degrees: ", (num) => {
                console.log("Result:", Math.sin(num * Math.PI / 180));
                main();
            });
            break;
        case "10":
            getNumberInput("Enter an angle in degrees: ", (num) => {
                console.log("Result:", Math.cos(num * Math.PI / 180));
                main();
            });
            break;
        case "11":
            getNumberInput("Enter an angle in degrees: ", (num) => {
                console.log("Result:", Math.tan(num * Math.PI / 180));
                main();
            });
            break;
        case "12":
            console.log("Exiting the calculator.");
            rl.close();
            break;
        default:
            console.log("Invalid choice. Please select a valid option.");
            main();
    }
}

function main() {
    showMenu();
    rl.question("Choose an option: ", (choice) => {
        calculate(choice);
    });
}

main();
