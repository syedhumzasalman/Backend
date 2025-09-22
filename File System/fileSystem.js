// const num1 = 10
// const num2 = 20
// console.log(num1 + num2);


import fs from "fs"

// Createfile - writeFileSync
// readfile - readFileSync
// updatefile - appendFileSync
// deletefile - unlinkSync

const createFile = (fileName, content) => {
    fs.writeFileSync(fileName, content)
}
// createFile("text.txt", "Hello syed Humza")

const readFile = (fileName) => {
    const content = fs.readFileSync(fileName, "utf-8")
    console.log(content)
}
// readFile("./text.txt")

const updatefile = (fileName , content) => {
    fs.appendFileSync(fileName , content)
}
// updatefile("./text.txt" , "\nHELLO Update 1")

const deletefile = (fileName) => {
    fs.unlinkSync(fileName)
}
// deletefile("./text.txt")