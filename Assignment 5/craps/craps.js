// import statement(s)
import { streetCraps } from "craps";

const getElement = selector => document.querySelector(selector);

document.addEventListener("DOMContentLoaded", () => {
    getElement("#new_game").addEventListener("click", () => {
        // start new game
        streetCraps.resetGame();

        // update page
        getElement("#roll").disabled = false;
        getElement("#new_game").disabled = true;
        getElement("#point").textContent = "0";
        getElement("#current_roll").textContent = "0";
        getElement("#message").textContent = "";
        getElement("#message").style.color = "black";
    });

    getElement("#roll").addEventListener("click", () => {
        // roll, check if users wins or loses
        const result = streetCraps.rollDice();

        // update page
        getElement("#current_roll").textContent = result.total;
        getElement("#point").textContent = result.point;
        getElement("#message").textContent = result.message;
        getElement("#message").style.color = result.gameOver ? "red" : "black";

        if (result.gameOver) {
            getElement("#roll").disabled = true;
            getElement("#new_game").disabled = false;
        }
    });
});
