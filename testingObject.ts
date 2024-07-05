export type Address = {
    street: string,
    city: string,
    state: string,
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

// console.log(obj.getFullNameAndAge())
