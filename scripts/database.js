
const database = {
    fish: [
        {
            name: "Bart",
            food: "Snacks",
            size: 3,
            location: "The Pond"
        },
        {
            name: "Gertrude",
            food: "Fish food",
            size: 45,
            location: "Someone else's aquarium"
        },
        {
            name: "Fiddle",
            food: "Pizza",
            size: 80,
            location: "The River"
        },
        {
            name: "Willy",
            food: "SlimFast",
            size: 20,
            location: "A puddle"
        },
        {
            name: "Dusty",
            food: "Dead Stuff",
            size: 1000,
            location: "Castle Moat"
        },
        {
            name: "T-Pain",
            food: "Drank",
            size: 69420,
            location: "Florida"
        }
    ]
}

export const getFish = () => {
    return database.fish.map(copyOfSingleFishObject => ({...copyOfSingleFishObject}))
}