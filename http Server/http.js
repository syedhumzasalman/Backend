// console.log("testing");


import http from "http"

// createServer only one argument received argument request and response
// Server listen
// Port 0 to 65536

const PORT = 5358
const server = http.createServer((request, response) => {
    console.log("request", request.url);
    if (request.url === "/") {
        response.end("<h1>Home Page</h1>")
    } else if (request.url === "/about") {
        response.end("<h1>About Page</h1>")
    } else if (request.url === "/profile") {
        response.end("<h1>Profile Page</h1>")
    } else {
        response.end("<h1>Not Found</h1>")
    }
})


server.listen(PORT, () => console.log("Server http://localhost:5358"))
