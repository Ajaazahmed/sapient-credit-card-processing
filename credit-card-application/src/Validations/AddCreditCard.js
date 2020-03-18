import { nameRegex, cardNumberRegex, limitRegex } from "../Constants/Regex";



export const validateName = (name) => !!name.match(nameRegex)

export const validateCardNumber = (cardNumber) => !!cardNumber.match(cardNumberRegex)

export const validateLimit = (limit) => !!limit.match(limitRegex)