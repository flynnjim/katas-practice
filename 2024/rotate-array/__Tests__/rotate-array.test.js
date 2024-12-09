const rotateArray = require('../rotate-array')

describe("rotates array elements forwards or backwards", () => {
    test("returns same array if passed 0 as rotate value", () => {
        const input = [1, 2, 3]
        const output = [1, 2, 3]
        const shiftNum = 0
        expect(rotateArray(input, shiftNum)).toEqual(output)
    })
    test("returns shifted array shifted right for positive", () => {
        const input = [1, 2, 3]
        const output = [3, 1, 2]
        const shiftNum = 1
        expect(rotateArray(input, shiftNum)).toEqual(output)
    })
    test("returns shifted array shifted right for positive", () => {
        const input = [1, 2, 3, 4, 5]
        const output = [3, 4, 5, 1, 2]
        const shiftNum = 3
        expect(rotateArray(input, shiftNum)).toEqual(output)
    })
    test("returns shifted array shifted left for negative", () => {
        const input = [1, 2, 3]
        const output = [2, 3, 1]
        const shiftNum = -1
        expect(rotateArray(input, shiftNum)).toEqual(output)
    })
    test("returns shifted array shifted left for negative", () => {
        const input = [1, 2, 3, 4, 5]
        const output = [4, 5, 1, 2, 3]
        const shiftNum = -3
        expect(rotateArray(input, shiftNum)).toEqual(output)
    })
})