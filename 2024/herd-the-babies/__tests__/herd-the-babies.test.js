const herdTheBabies = require("../herd-the-babies");

describe("sorts letters alphabetically, putting upper case (parent) before lower case (baby) letter", () => {
    test("returns sorted 2 character upper and lower case string", () => {
        const input = "aA"
        const output = "Aa"
        expect(herdTheBabies(input)).toBe(output)
    })
    test("returns sorted 2 character upper and lower case string", () => {
        const input = "aBA"
        const output = "AaB"
        expect(herdTheBabies(input)).toBe(output)
    })
    test("returns sorted longer upper and lower case string", () => {
        const input = "bbaBccAC"
        const output = "AaBbbCcc"
        expect(herdTheBabies(input)).toBe(output)
    })
    test("returns sorted much longer upper and lower case string", () => {
        const input = "AaBbbBaAbAbbAbB"
        const output = "AAAAaaBBBbbbbbb"
        expect(herdTheBabies(input)).toBe(output)
    })
});
