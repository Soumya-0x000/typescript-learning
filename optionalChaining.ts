import { Address } from "./testingObject"

type extendedAddress = Address & { zip?: number }

type Customer = {
    birthDate?: Date
    address?: extendedAddress
    contactNo?: number
}

const getCustomerBirthDate = (id: number): Customer | null => {
    return id === 0
        ? null
        : {
            birthDate: new Date(),
            address: {
                street: "Dharma Main road",
                city: "Midnapore",
                state: "West Bengal",
                zip: 721101,
            },
            contactNo: 9876543210
        }
}

let customer = getCustomerBirthDate(4)

console.log(customer?.birthDate?.getFullYear())
console.log(customer?.address?.zip)
console.log(customer?.contactNo)
