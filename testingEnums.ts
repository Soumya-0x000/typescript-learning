enum Size { small = 10, medium, large }
let mySize: Size = Size.large
// console.log(mySize)

enum Color {
    Navy,
    Red = 'red',
    Green = 'green',
    Blue = 'blue',
    Orange = 'orange',
    Purple = 'purple',
    Yellow = 'yellow',
    Pink = 'pink',
    Cyan = 'cyan',
    Magenta = 'magenta',
    Maroon = 'maroon',
    Aqua = 'aqua',
    Lime = 'lime',
    Teal = 'teal',
    Fuchsia = 'fuchsia',
}
// console.log(Color.Navy)

let myColor: Color = Color.Green

Object.values(Color).includes(myColor) 
    ? console.log('valid color')
    : console.log('invalid color')

const colorObj: {[key: string]: any} = {}
colorObj.seaGreen = 'Sea Green'
colorObj.five = 5
colorObj.isTrue = true
// console.log(colorObj)


let level = {
    Easy : 'easy',
    Medium : 'medium',
    Hard : 'hard',
    Harder : 'harder',
    Impossible : 'impossible',
}
type Level = keyof typeof level

let myLevel: Level = level.Hard as Level 
console.log(myLevel)
