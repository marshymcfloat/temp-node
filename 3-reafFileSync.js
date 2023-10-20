const {readFileSync, writeFileSync} = require('fs')

const first = readFileSync('C:\\Users\\Daniel\\jettbrains html journey\\node tutorial\\content\\first.txt', 'utf8')
const second = readFileSync("C:\\Users\\Daniel\\jettbrains html journey\\node tutorial\\content\\second.txt", "utf-8")




writeFileSync("./content/names.txt", `${first} ${second}`, {flag: 'a'}

)



console.log(readFileSync("C:\\Users\\Daniel\\jettbrains html journey\\node tutorial\\content\\names.txt"))









/*async*/

const {readFile, writeFile} = require('fs')


const first = readFile("C:\\Users\\Daniel\\jettbrains html journey\\node tutorial\\content\\second.txt", "utf-8",(err, result) =>{
    if (err){
        console.log(err)
        return
    }
    console.log(result)
})

writeFile("C:\\Users\\Daniel\\jettbrains html journey\\node tutorial\\content\\danielCanoy.txt", "Daniel, potangina huhuhu", (err, result)=>{
    if (err){
        console.log(err)
        return
    }
    console.log(result)
})

console.log(readFile("C:\\Users\\Daniel\\jettbrains html journey\\node tutorial\\content\\danielCanoy.txt", "utf-8", (err,result)=>{
    if (err){
        console.log(err)
        return

    }
    console.log(result)
}))