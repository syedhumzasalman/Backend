// console.log("testing");


import express, { request, response } from "express"
import { products } from "./products.js"

const app = express()

app.get("/", (req, res) => {
    // console.log(req.url);
    res.send("Hello world")
})



app.get("/products", (request, response) => {
    response.send(products)
})


app.get("/products/:id", (request, response) => {

    // console.log(request.params.id);
    // let productId = request.params.id
    // console.log(typeof request.params.id);

    const findProduct = products.find((obj) => {
        // console.log(obj.id);
        if (obj.id == request.params.id) {
            // console.log(obj);
            return obj
        }
    })
    // console.log(findProduct);

    if (findProduct) {
        response.send(findProduct)
    } else {
        response.send("Product not found")
    }


})


app.get("/products/category/:category", (request, response) => {

    // electronics?
    // console.log(request.url);
    // console.log(request.params.category);

    const findCategory = products.filter((obj) => {
        // console.log("obj", obj.category);
        // console.log("paramas", request.params.category);
        // console.log(obj.category === request.params.category);

        return obj.category === request.params.category
    })
    // console.log(findCategory);


    if (findCategory) {
        response.send(findCategory)
    } else {
        response.send("Category not found")
    }

})

app.listen(3000, () => console.log("server running"))
