// import statement(s)
import { Dice } from "dice";

// private
let point = 0;
let isFirstRoll = true;
let dice = new Dice();

// public
export const streetCraps = {
    getPoint: () => point,

    rollDice: () => {
        const { roll1, roll2, total } = dice.roll();
        let message = "";
        let gameOver = false;

        if (isFirstRoll) {
            if (total === 7 || total === 11) {
                message = `You rolled ${total} on the come out roll - you win!`;
                gameOver = true;
            } else if ([2, 3, 12].includes(total)) {
                message = `You rolled ${total} on the come out roll - you lose.`;
                gameOver = true;
            } else {
                point = total;
                message = `You rolled ${total} - point is set to ${point}.`;
                isFirstRoll = false;
            }
        } else {
            if (total === point) {
                message = `You rolled ${total} - you win!`;
                gameOver = true;
            } else if (total === 7) {
                message = `You rolled 7 - you lose.`;
                gameOver = true;
            } else {
                message = `You rolled ${total} - roll again.`;
            }
        }

        return {
            roll1,
            roll2,
            total,
            point,
            message,
            gameOver
        };
    },

    resetGame: () => {
        point = 0;
        isFirstRoll = true;
        dice = new Dice();
    }
};
