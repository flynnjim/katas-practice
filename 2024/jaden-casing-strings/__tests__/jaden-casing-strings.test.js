require('../jaden-casing-strings')

describe("toJadenCase", () => {
    it("single word returns single word to upper case", () => {
        const input = "hello"
        const output = "Hello"
        expect(input.toJadenCase()).toBe(output)
    })
    it("full test sentence", () => {
        const input = "How can mirrors be real if our eyes aren't real"
        const output = "How Can Mirrors Be Real If Our Eyes Aren't Real"
        expect(input.toJadenCase()).toBe(output)
    })
})