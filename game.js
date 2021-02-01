const ironHeader = document.querySelector("#iron");
const fuelHeader = document.querySelector("#fuel");
const btnMiner = document.querySelector("#btn-miner");
const btnFuel = document.querySelector("#btn-fuel");

let iron = 0;
let fuel = 0;
let miners = 1;
let fuelers = 0;

btnMiner.addEventListener("click", () => {
    if (iron >= 5) {
        iron -= 5;
        miners++;
    }
});

btnFuel.addEventListener("click", () => {
    if (iron >= 15) {
        iron -= 15;
        fuelers++;
    }
});

window.setInterval(() => {
    iron += miners;
    fuel += fuelers;
}, 1000);

window.setInterval(() => {
    ironHeader.innerHTML = `Iron: ${iron}`;
    fuelHeader.innerHTML = `Fuel: ${fuel}`;
}, 50);
