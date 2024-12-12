const foldArray = require('../fold-array')

describe("fold array by adding together elements on opposite ends", () => {
    test("folds a even length array", () => {
        const inputArray = [1,2]
        const numFolds = 1
        const output = [3]
        expect(foldArray(inputArray, numFolds)).toEqual(output)
    })
    test("folds a larger even array", () => {
        const inputArray = [1, 2, 3, 10, 34, 100]
        const numFolds = 1
        const output = [101, 36, 13]
        expect(foldArray(inputArray, numFolds)).toEqual(output)
    })
    test("folds an odd array", () => {
        const inputArray = [1, 2, 3]
        const numFolds = 1
        const output = [4, 2]
        expect(foldArray(inputArray, numFolds)).toEqual(output)
    })
    test("folds an even array multiple times", () => {
        const inputArray = [1, 2, 3, 10, 34, 100]
        const numFolds = 2
        const output = [114, 36]
        expect(foldArray(inputArray, numFolds)).toEqual(output)
    })
    test("folds an array to a single value", () => {
        const inputArray = [1, 2, 3, 10, 34, 100]
        const numFolds = 3
        const output = [150]
        expect(foldArray(inputArray, numFolds)).toEqual(output)
    })
    test("repeated folds remain the same", () => {
        const inputArray = [1, 2, 3, 10, 34, 100]
        const numFolds = 4
        const output = [150]
        expect(foldArray(inputArray, numFolds)).toEqual(output)
    })
    test("checks original array has not been mutated", () => {
        const mutInput = [1, 2, 3, 10, 34, 100]
        const unchangedInput = [1, 2, 3, 10, 34, 100]
        const numFolds = 4
        foldArray(mutInput, numFolds)
        expect(mutInput).toEqual(unchangedInput)
    })
    test("checks returns a new object with new reference in memory", () => {
        const refInput = [1, 2, 3, 10, 34, 100]
        const numFolds = 4
        const returnValue = foldArray(refInput, numFolds)
        expect(refInput).not.toBe(returnValue)
    })
})