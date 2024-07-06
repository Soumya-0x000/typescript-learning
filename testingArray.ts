import { Address, obj, User } from './testingObject';

type extendedAddress = Address & { zip: number }

type extendedUser = User & { address: extendedAddress };

const newObj: extendedUser = {
    ...obj,
    address: {
        street: "Dharma Main road",
        city: "Midnapore",
        state: "West Bengal",
        zip: 721101,
    },
}

const { name: fullName, ...rest } = newObj;
const modifiedObj = { fullName, ...rest };

const demoObj = {
    fName: 'Soumya',
    mName: 'Sankar',
    lName: 'Das',
    age: 24,
    getFullName: function(): {name: string, age: number} {
        const name: string = `${this.fName} ${this.mName} ${this.lName}`;
        return {name, age: this.age}
    }
}

const testedArr = (item: any[] = []): any => {
    item.push(2)
    item.push('SSD')
    item.push(item)
    item.push(!item)
    item.push(!4)
    item.push(!!4)
    item.push(modifiedObj.getAddress())
    item.push(modifiedObj.getSkills())
    item.push(modifiedObj.getFullName.call(demoObj.getFullName()))
    item.push([...new Set([2, 4, 9, 1, 8, 3, 5, 2, 6, 8, 4, 6, 2, 3, 6, 4, 8])].sort((a, b) => a - b))

    return item
}
console.log(testedArr())

let arr: (
    number 
    | boolean 
    | string 
    | {name: string} 
    | {nickName: string} 
    | (number 
        | boolean 
        | string 
        | number[] 
        | {key: string}
    )[]
)[] = [
    false, true, 
    11, 4, 2, 
    '5', 'Soumya',
    [
        2, 
        [10], 
        false, 
        '2', 
        {key: 'value'}
    ], 
    {name: 'SSD'},
    {nickName: 'Somu'}
];

console.log(arr)


