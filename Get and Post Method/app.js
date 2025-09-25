import express from "express"
import fs from "fs"

const app = express()
const PORT = 5000
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
const arr = []

app.get("/", (req, res) => {
    res.send("Hello Server!")
})


app.post("/createuser", (req, res) => {

    const fileExist = fs.existsSync("Users.txt")

    if (fileExist) {

        const getFile = fs.readFileSync("Users.txt", "utf-8")
        const parseData = JSON.parse(getFile)
        parseData.push(req.body)
        // console.log(parseData);
        fs.writeFileSync("Users.txt", JSON.stringify(parseData))


    } else {
        arr.push(req.body)
        // console.log(arr);
        fs.writeFileSync("Users.txt", JSON.stringify(arr))
    }

    res.send("User Created")
})




app.listen(PORT, () => console.log("Server Running on 5000"))