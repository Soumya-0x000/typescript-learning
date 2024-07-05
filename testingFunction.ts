const sum = (a: number, b: number, ...c: number[]): number => {
    return a + b + c.reduce((
        acc: number, 
        val: number, 
        indx: number, 
    ) => val + acc + c[indx]**3, 0) + c.length
}

let arr: number[] = [10, 23, 54, 74, 29, 83, 69]
console.log(sum(10, 12, ...arr));


const getUpper = (val: number): string[] => {
    return [...`${val}`.toUpperCase()]
};

const toHex = (val: number): string => {
    return val.toString(16)
};

console.log([...arr, 24, 46, 62, 85, 92, 64].map(toHex))
console.log(arr.map(getUpper))

const mptArr: (() => void)[] = []
for (let index = 0; index < 5; index++) {
    mptArr.push(() => console.log(index))
}
mptArr.forEach(fn => fn())
