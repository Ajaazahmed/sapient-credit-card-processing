import { validateName, validateCardNumber, validateLimit } from "../../Validations/AddCreditCard"

describe('AddCreditCard Validations', () => {
    describe('#validateName', () => {
        it('should return true if a proper full name is used', () => {
            expect(validateName('John Smith')).toBe(true)
        })

        it('should return true if a single name is used', () => {
            expect(validateName('Mark')).toBe(true)
        })

        it('should return true if passed an emtpy string', () => {
            expect(validateName('')).toBe(true)
        })

        it('should return false if name is/has numbers', () => {
            expect(validateName('231')).toBe(false)
            expect(validateName('John231')).toBe(false)
        })
    })

    describe('#validateCardNumber', () => {
        it('should return true if passed an emtpy string', () => {
            expect(validateCardNumber('')).toBe(true)
        })

        it('should return true if card number are numbers', () => {
            expect(validateCardNumber('123132131312321')).toBe(true)
        })

        it('should return false if card number are numbers and has characters', () => {
            expect(validateCardNumber('123112321a')).toBe(false)
        })

        it('should return false if card number are numbers and exceeds 20 numbers', () => {
            expect(validateCardNumber('12345678901234567890')).toBe(false)
        })
    })

    describe('#validateLimit', () => {
        it('should return true if passed an emtpy string', () => {
            expect(validateLimit('')).toBe(true)
        })

        it('should return true if limit is valid', () => {
            expect(validateLimit('10000')).toBe(true)
        })

        it('should return false if limit is negative', () => {
            expect(validateLimit('-10000')).toBe(false)
        })

        it('should return false if limit has characters', () => {
            expect(validateLimit('-10000a')).toBe(false)
        })
    })
})