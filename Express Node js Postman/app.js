// console.log("Testing");

// import http from "http"

// const port = 5000
// const server = http.createServer((request, response) => {
//     response.end("hello Taha")
// })

// server.listen(port, () => console.log("server is raning on 5000"))


// Get Method 



import express from "express"


const app = express()
const PORT = 5000
let temArr = []

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.post("/userLogin", (request, response) => {
    console.log(request.body);
    temArr.push(request.body)
    response.send("user Login")
})

app.get("/createuser", (request, response) => {

    console.log(temArr);

    response.send(temArr)
})

app.get("/updateuser", (request, response) => {
    response.send("updateuser Succesfully")
})

app.get("/deleteuser", (request, response) => {
    response.send("deleteuser Succesfully")
})

app.listen(PORT, () => console.log("app is running on 5000"))