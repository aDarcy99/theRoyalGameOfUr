import math from "../functions/math.js";
function rollDice() {
    let roll = Math.ceil(math.getRandomArbitrary(0, 8));
    switch (roll) {
        case (roll >= 1 || roll <= 3):
            return 1;
        case (roll >= 4 || roll <= 6):
            return 2;
        case (roll === 7):
            return 3;
        case (roll === 8):
            return 4;
        default:
            console.error("Invalid dice roll")
            break;
    }

}
export default {rollDice}