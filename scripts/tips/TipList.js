import { getTips } from "../fish/database.js"

export const TipList = () => {
    // Invoke the function that you imported from the database module
    const tips = getTips();

    // Start building a string filled with HTML syntax
    let htmlString = `<aside class="tipList">
    <p>Martin's Bonkers Cleaning Tips</p>
    <ul>`

    // Create HTNL representations of each fish here
    for (const tip of tips) {

        // Why is there a backtick used for this string?
        htmlString += `
            <li>${tip.item}</li>
`
    }
    htmlString += `</ul>
    <img src=${tips[9].image} alt="Ok I said another one was funny but      man, this guy is actually very funny">
</aside>`

    return htmlString
}