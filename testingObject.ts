export interface Address {
    street: string;
    city: string;
    state: string;
    [key: string]: any;
}

export type User = {
    name: string,
    age: number,
    skills: string[],
    readonly address: Address,
    getFullName: () => string,
    getSkills: () => string[],
    getAddress: () => Address,
    getAge: () => number,
    getFullNameAndAge: () => string,
}

export const obj:User = {
    name: "John",
    age: 30,
    skills: ["HTML", "CSS", "JavaScript"],
    address: {
        street: "123 Main St",
        city: "Anytown",
        state: "USA",
    },
    getFullName: function (): string {
        return this.name + " " + this.age;
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

console.log(obj.getFullNameAndAge())


const basicLevel = {
    Easy : 'easy',
    Medium : 'medium',
    Hard : 'hard',
} as { [key: string]: string }
basicLevel.Harder = 'harder'

interface AdditionalLevel {[key: string]: string}

const additionalLevel: AdditionalLevel = {
    Impossible: 'impossible',
    nextToImpossible: 'Next to impossible'
} as const

const level: { [key: string]: any } = {...basicLevel, ...additionalLevel, nine: 9}
let myLevel: string = level.nine

console.log(myLevel)
console.log(typeof myLevel)
