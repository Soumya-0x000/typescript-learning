import { Address, User } from './testingObject';

type extendedAddress = Address & { zip: number }

type extendedUser = User & {
    mName: string,
    lName: string,
    address: extendedAddress
};

const obj: extendedUser = {
    name: "SS Das",
    mName: "",
    lName: "",
    age: 30,
    skills: ["HTML", "CSS", "JavaScript"],
    address: {
        street: "Dharma Main road",
        city: "Midnapore",
        state: "West Bengal",
        zip: 721101,
    },
    getFullName: function (): string {
        return this.name;
    },
    getSkills: function (): string[] {
        return this.skills;
    },
    getAddress: function (): Address {
        return this.address;
    },
    getAge: function (): number {
        return this.age;
    },
    getFullNameAndAge: function (): string {
        return this.getFullName() + " " + this.getAge();
    },
}

const { name: fullName, ...rest } = obj;
const newObj = { fullName, ...rest };

const demoObj = {
    fName: 'Soumya',
    mName: 'Sankar',
    lName: 'Das',
    getFullName: function(): {name: string} {
        const name: string = `${this.fName} ${this.mName} ${this.lName}`;
        return {name}
    }
}

!function test(item: any[]): any {
    item.push(2)
    item.push('SSD')
    item.push(item)
    item.push(!item)
    item.push(!4)
    item.push(!!4)
    item.push(newObj.getAddress())
    item.push(newObj.getSkills())
    item.push(newObj.getFullName.call(demoObj.getFullName()))
    item.push([...new Set([2, 4, 9, 1, 8, 3, 5, 2, 6, 8, 4, 6, 2, 3, 6, 4, 8])].sort((a, b) => a - b))
    
    console.log(item)
}([])
