
const database = {
    fish: [
        {
            image: "/images/fish1.jpg",
            name: "Bart",
            species: "Fish",
            food: "Snacks",
            length: 3,
            location: "The Pond"
        },
        {
            image: "/images/fish2.jpg",
            name: "Gertrude",
            species: "Fish",
            food: "Fish food",
            length: 45,
            location: "Someone else's aquarium"
        },
        {
            image: "/images/fish3.jpg",
            name: "Fiddle",
            species: "Fish",
            food: "Pizza",
            length: 80,
            location: "The River"
        },
        {
            image: "/images/fish4.jpg",
            name: "Willy",
            species: "Fish",
            food: "SlimFast",
            length: 20,
            location: "A puddle"
        },
        {
            image: "/images/fish5.jpg",
            name: "Dusty",
            species: "Fish",
            food: "Dead Stuff",
            length: 1000,
            location: "Castle Moat"
        },
        {
            image: "/images/fish6.jpg",
            name: "T-Pain",
            species: "Fish",
            food: "Drank",
            length: 69420,
            location: "Florida"
        }
    ],
    tips: [
        {
            item: "Friggin clean it good"
        },
        {
            item: "Add a buncha salt"
        },
        {
            item: "Don't spit in it"
        },
        {
            item: "Install a fish toilet"
        },
        {
            item: "Keep the water boiling hot"
        },
        {
            item: "You're gonna need a ton of these to fill this space"
        },
        {
            item: "Good thing Martin seems verbose"
        },
        {
            item: "Wonder if he has other, cooler hobbies"
        },
        {
            item: "Nah I'm not gonna ask him. Kinda gives me the creeps"
        },
        {
            image: "/images/funnyfish.jpg"
        }
    ]
}

export const getFish = () => {
    return database.fish.map(copyOfSingleFishObject => ({...copyOfSingleFishObject}))
}

export const getTips = () => {
    return database.tips.map(copyofSingleTipObject => ({...copyofSingleTipObject}))
}

const allFish = getFish();

export const mostHolyFish = () => {
    const holyFish = [];

    for (const fish of allFish) {
        if (fish.length % 3 === 0) {
            holyFish.push(fish)
        }
    }

    return holyFish;
}

export const soldierFish = () => {
    const soldiers = [];

    for (const fish of allFish) {
        if (fish.length % 5 === 0) {
            soldiers.push(fish)
        }
    }

    return soldiers;
}

export const nonHolyFish = () => {
    const regularFish = [];
    for (const fish of allFish) {
        if (fish.length % 3 !== 0 && fish.length % 5 !== 0) {
            regularFish.push(fish)
        }
    }

    return regularFish;
}