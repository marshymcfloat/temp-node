const num1 = 1
const num2 = 2
const num3 = 3
const clientInfo = {
    name: "daniel",
    age: 21,
    hasPartner: true,


}
const addNum = () => {
    console.log(num1 + num2)

}
const sayHi = (name) => {
    console.log(`hi! so your name is ${name}`)
}




module.exports = {addNum, sayHi, clientInfo}