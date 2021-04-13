describe('test', () => {
    let is4
    beforeEach(() => {
        is4 = require('./index')
    })
    test('number1', () => {
        expect(is4(1)).toBeFalsy()
    })
    test('number4', () => {
        expect(is4(4)).toBeTruthy()
    })
    test('string4', () => {
        expect(is4('4')).toBeFalsy()
    })
    test('null', () => {
        expect(is4(null)).toBeFalsy()
    })
    test('undefined', () => {
        expect(is4(undefined)).toBeFalsy()
    })
    test('symbol',() => {
        expect(is4(Symbol())).toBeFalsy()
    })
    test('bigint',() => {
        expect(is4(4n)).toBeFalsy()
    })
})
