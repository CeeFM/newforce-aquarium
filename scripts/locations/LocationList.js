import { getFish } from "../fish/database.js"

export const LocationList = () => {
    // Invoke the function that you imported from the database module
    const fishes = getFish();

    // Start building a string filled with HTML syntax
    let htmlString = `<h2 id="fish-locations__title">"Harvest" Locations</h2>
    <div>
        These are the damn locations where Martin has "harvested" his fish. Is this a legitimate fish collector term, or is he just being creepy again? <br>We'll never know. I guess we could ask him or other people. But I won't be doing that.
    </div>
    <ul>`

    // Create HTNL representations of each fish here
    for (const fish of fishes) {

        // Why is there a backtick used for this string?
        htmlString += `<li>${fish.location}</li>`
    }
    htmlString += `</ul>`

    return htmlString
}