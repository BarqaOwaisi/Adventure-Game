import inquirer from "inquirer";
class Player {
    name;
    life = 100;
    boosterDrinks = 3;
    constructor(name) {
        this.name = name;
    }
    lifeDecrease() {
        this.life -= 25;
    }
    lifeIncrease() {
        if (this.boosterDrinks > 0) {
            this.life = 100;
            this.boosterDrinks--;
            console.log(`You used a Booster Drink. Remaining Booster Drinks: ${this.boosterDrinks}`);
        }
        else {
            console.log("You have no Booster Drinks left!");
        }
    }
}
class Enemy {
    name;
    life = 100;
    constructor(name) {
        this.name = name;
    }
    lifeDecrease() {
        this.life -= 25;
    }
}
let playerInfo = await inquirer.prompt([
    {
        name: "PlayerName",
        message: "What's your name :",
        type: "input",
        validate(value) {
            if (value.trim() !== "") {
                return true;
            }
            return "Enter Your name.";
        },
    },
    {
        name: "EnemyName",
        message: "Please Select Your Enemy",
        type: "list",
        choices: ["Skeleton", "Witch", "Spirit"],
    },
]);
let player = new Player(playerInfo.PlayerName);
let enemy = new Enemy(playerInfo.EnemyName);
do {
    if (playerInfo.EnemyName === "Skeleton") {
        let question = await inquirer.prompt([
            {
                name: "Question",
                message: "What would you like to do ?",
                type: "list",
                choices: ["Attack", "Booster Drink", "Run"],
            },
        ]);
        if (question.Question === "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                player.lifeDecrease();
                console.log(`${enemy.name} life is ${enemy.life}.`);
                console.log(`${player.name} life is ${player.life}.`);
            }
            if (player.life <= 0) {
                console.log(`OOPS! You Loose ,${enemy.name} Win.`);
            }
            if (num <= 0) {
                enemy.lifeDecrease();
                console.log(`${enemy.name} life is ${enemy.life}.`);
                console.log(`${player.name} life is ${player.life}.`);
            }
            if (enemy.life <= 0) {
                console.log(`Congratulations! You win the game.  `);
                process.exit();
            }
        }
        if (question.Question === "Booster Drink") {
            player.lifeIncrease();
        }
        if (question.Question === "Run") {
            console.log(`OOPS! You Loose`);
            process.exit();
        }
    }
    if (playerInfo.EnemyName === "Witch") {
        let question = await inquirer.prompt([
            {
                name: "Question",
                message: "What would you like to do ?",
                type: "list",
                choices: ["Attack", "Booster Drink", "Run"],
            },
        ]);
        if (question.Question === "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                player.lifeDecrease();
                console.log(`${enemy.name} life is ${enemy.life}.`);
                console.log(`${player.name} life is ${player.life}.`);
            }
            if (player.life <= 0) {
                console.log(`OOPS! You Loose ,${enemy.name} Win.`);
            }
            if (num <= 0) {
                enemy.lifeDecrease();
                console.log(`${enemy.name} life is ${enemy.life}.`);
                console.log(`${player.name} life is ${player.life}.`);
            }
            if (enemy.life <= 0) {
                console.log(`Congratulations! You win the game.  `);
                process.exit();
            }
        }
        if (question.Question === "Booster Drink") {
            player.lifeIncrease();
        }
        if (question.Question === "Run") {
            console.log(`OOPS! You Loose`);
            process.exit();
        }
    }
    if (playerInfo.EnemyName === "Spirit") {
        let question = await inquirer.prompt([
            {
                name: "Question",
                message: "What would you like to do ?",
                type: "list",
                choices: ["Attack", "Booster Drink", "Run"],
            },
        ]);
        if (question.Question === "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                player.lifeDecrease();
                console.log(`${enemy.name} life is ${enemy.life}.`);
                console.log(`${player.name} life is ${player.life}.`);
            }
            if (player.life <= 0) {
                console.log(`OOPS! You Loose ,${enemy.name} Win.`);
            }
            if (num <= 0) {
                enemy.lifeDecrease();
                console.log(`${enemy.name} life is ${enemy.life}.`);
                console.log(`${player.name} life is ${player.life}.`);
            }
            if (enemy.life <= 0) {
                console.log(`Congratulations! You win the game.  `);
                process.exit();
            }
        }
        if (question.Question === "Booster Drink") {
            player.lifeIncrease();
        }
        if (question.Question === "Run") {
            console.log(`OOPS! You Loose`);
            process.exit();
        }
    }
} while (true);
