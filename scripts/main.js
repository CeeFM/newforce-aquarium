import { getFish } from "./fish/database.js";
import { FishList } from "./fish/FishList.js";
import { TipList } from "./tips/TipList.js";
import { LocationList } from "./locations/LocationList.js";

const allFish = getFish();
for (const singleFish of allFish) {
    console.log(singleFish);
}

const parentHTMLElement = document.querySelector('#fish-container');
const anotherParentHTMLElement = document.querySelector(".locations")

parentHTMLElement.innerHTML += TipList();
parentHTMLElement.innerHTML += FishList();
anotherParentHTMLElement.innerHTML = LocationList();