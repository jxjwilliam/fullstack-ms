import {
    flatten,
    isJson,
    deepFlatten,
} from './sugar'
import Jest from 'jest'

describe('Sugar test', () => {
    it('flatten', () => {
        flatten([1, [2], 3, 4]); // [1, 2, 3, 4]
        flatten([1, [2, [3, [4, 5], 6], 7], 8], 2); // [1, 2, 3, [4, 5], 6, 7, 8]
        expect().toBe()
    })
    it('deepFlatten', () => {
        deepFlatten([1, [2], [[3], 4], 5]); // [1,2,3,4,5]
        expect().toBe()
    })
    it('isJson', () => {
        isJson('{"name":"Adam","age":20}'); // true
        isJson('{"name":"Adam",age:"20"}'); // false
        isJson(null); // true

        expect().toBe()
    })
})
