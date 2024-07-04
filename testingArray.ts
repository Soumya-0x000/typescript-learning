import { Address, User } from "./testingObject"

const tempObj:User = {
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

!function test (item: any[]): any {
    item.push(2)
    item.push('SSD')
    item.push(item)
    item.push(!item)
    item.push(!4)
    item.push(!!4)
    item.push(tempObj.getAddress())
    item.push(tempObj.getSkills())
    item.push(tempObj.getFullName())
    item.push([...new Set([2,4,9,1,8,3,5,2,6,8,4,6,2,3,6,4,8])].sort((a,b) => a-b))
    console.log(item)
}([])

const arr: (() => void)[] = []
for (let index = 0; index < 3; index++) {
    arr.push(() => console.log(index))
}
arr.forEach(fn => fn())
