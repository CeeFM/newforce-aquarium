import { getFish } from "./database.js";

const allFish = getFish();
for (const singleFish of allFish) {
    console.log(singleFish);
}