import express from "express"
import fs from "fs"
import { v4 as uuidv4 } from 'uuid';


const app = express()
const PORT = 3000
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
const temArr = []


app.get("/getuser", (request, response) => {
    const getUsers = fs.readFileSync("users.txt", "utf-8")
    const parseUsers = JSON.parse(getUsers)
    response.send(parseUsers)
})


app.post("/createuser", (request, response) => {
    // console.log(request.body);
    const fileExist = fs.existsSync("users.txt")

    if (fileExist) {
        const getData = fs.readFileSync("users.txt", "utf-8")
        const parseData = JSON.parse(getData)
        const userExist = parseData.find((user) => user.email === request.body.email)

        if (userExist) {
            return response.send("User Already Exist")
        }

        parseData.push({ ...request.body, id: uuidv4() })
        fs.writeFileSync("users.txt", JSON.stringify(parseData))
        response.send("Exist File User Created")

    } else {

        temArr.push({ ...request.body, id: uuidv4() })
        fs.writeFileSync("users.txt", JSON.stringify(temArr))
        response.send("New File User Created")
    }

})



app.post("/updateuser/:id", (request, response) => {
    // console.log(request.params.id);

    const getUsers = fs.readFileSync("users.txt", "utf-8")
    const parseUsers = JSON.parse(getUsers)
    // console.log(parseUsers);

    const newArr = parseUsers.map((user) => {
        // console.log(user);
        if (user.id == request.params.id) {
            return { ...user, ...request.body }
        } else {
            return user
        }
    })

    // console.log("newArr", newArr);
    fs.writeFileSync("users.txt", JSON.stringify(newArr))
    response.send("User Updated")
})


app.listen(PORT, () => console.log(`Server Running on 3000`))
